/* ====================================================================
   MINI MCP SERVER — "továrna na vlastní nástroje" pro Clauda
   --------------------------------------------------------------------
   MCP (Model Context Protocol) je způsob, jak dát Claudovi NOVÉ
   nástroje (tools), které normálně nemá. Claude má vestavěné nástroje
   jako Read (čtení souborů) nebo Bash (terminál) — a tenhle server
   mu přidává tři vlastní:

     1. napad_na_hru  → vrátí náhodný nápad na vylepšení hry
     2. uloz_skore    → uloží skóre hráče do souboru skore.json
     3. top_skore     → vypíše žebříček nejlepších hráčů

   Jak to funguje:
   - Claude Code si přečte soubor .mcp.json v kořeni projektu,
   - podle něj spustí tento skript (node server.js),
   - a povídá si s ním přes stdin/stdout (tzv. "stdio transport").
   Žádná magie — je to obyčejný Node.js program, který si můžeš
   celý přečíst a upravit.

   Instalace:  cd mcp-server && npm install
   ==================================================================== */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Cesta k souboru se skóre (vedle tohoto skriptu)
const SCORES_FILE = join(dirname(fileURLToPath(import.meta.url)), "skore.json");

// Pomocné funkce pro čtení/zápis žebříčku
function loadScores() {
  try {
    return JSON.parse(readFileSync(SCORES_FILE, "utf-8"));
  } catch {
    return []; // soubor neexistuje nebo je rozbitý → začneme s prázdným
  }
}

function saveScores(scores) {
  writeFileSync(SCORES_FILE, JSON.stringify(scores, null, 2) + "\n");
}

// Zásobník nápadů pro nástroj napad_na_hru
const GAME_IDEAS = [
  "🍏 Zlaté jablko: občas se objeví speciální jídlo za 5 bodů, které po 5 sekundách zmizí.",
  "🧱 Překážky: na ploše se objeví zdi — narazíš, prohráváš. Každých 10 bodů přibude jedna.",
  "👻 Duch: každých 20 bodů had na 3 sekundy zprůhlední a může projít sám sebou.",
  "🎵 Zvuky: přidej zvuk při snědení jídla a smutný tón při game over (Web Audio API).",
  "🌀 Portály: dvě políčka na ploše fungují jako teleport — vlezeš do jednoho, vylezeš druhým.",
  "🐌 Zpomalovač: modré jídlo, které hru na chvíli zpomalí. Hodí se, když je had rychlý.",
  "🏆 Achievementy: vyskakovací hlášky za milníky — první jídlo, 10 bodů, délka hada 15...",
  "📱 Mobilní ovládání: přidej swipe gesta, ať jde hra hrát na telefonu.",
  "🌈 Duhový mód: každý článek hada má jinou barvu duhy a barvy se posouvají.",
  "⚔️ Dva hadi: druhý had ovládaný klávesami WASD — kdo vydrží déle?",
];

// ------------------------------------------------------------------
// Vytvoříme server a zaregistrujeme nástroje
// ------------------------------------------------------------------
const server = new McpServer({
  name: "had-server",
  version: "1.0.0",
});

// NÁSTROJ 1: napad_na_hru — žádné vstupy, vrátí náhodný nápad
server.registerTool(
  "napad_na_hru",
  {
    title: "Nápad na hru",
    description:
      "Vrátí náhodný nápad na vylepšení hry Had. Použij, když uživatel neví, co do hry přidat, nebo chce inspiraci.",
    inputSchema: {},
  },
  async () => {
    const idea = GAME_IDEAS[Math.floor(Math.random() * GAME_IDEAS.length)];
    return {
      content: [{ type: "text", text: `Nápad na vylepšení: ${idea}` }],
    };
  }
);

// NÁSTROJ 2: uloz_skore — má vstupy (jméno hráče a skóre)
// inputSchema říká Claudovi, JAKÉ parametry musí poslat.
server.registerTool(
  "uloz_skore",
  {
    title: "Ulož skóre",
    description:
      "Uloží skóre hráče do žebříčku (soubor skore.json). Použij, když uživatel chce zapsat svůj výsledek ze hry.",
    inputSchema: {
      hrac: z.string().describe("Jméno hráče"),
      skore: z.number().int().min(0).describe("Dosažené skóre (celé číslo)"),
    },
  },
  async ({ hrac, skore }) => {
    const scores = loadScores();
    scores.push({
      hrac,
      skore,
      datum: new Date().toISOString().slice(0, 10), // např. "2026-06-11"
    });
    // Seřadíme od nejlepšího a necháme jen TOP 10
    scores.sort((a, b) => b.skore - a.skore);
    saveScores(scores.slice(0, 10));

    const rank = scores.findIndex((s) => s.hrac === hrac && s.skore === skore) + 1;
    return {
      content: [
        {
          type: "text",
          text: `Uloženo! ${hrac} se skóre ${skore} je na ${rank}. místě žebříčku.`,
        },
      ],
    };
  }
);

// NÁSTROJ 3: top_skore — vypíše žebříček
server.registerTool(
  "top_skore",
  {
    title: "Žebříček",
    description:
      "Vypíše žebříček nejlepších hráčů hry Had. Použij, když se uživatel ptá na rekordy nebo nejlepší skóre.",
    inputSchema: {},
  },
  async () => {
    const scores = loadScores();
    if (scores.length === 0) {
      return {
        content: [{ type: "text", text: "Žebříček je zatím prázdný. Zahraj si!" }],
      };
    }
    const medals = ["🥇", "🥈", "🥉"];
    const lines = scores.map(
      (s, i) => `${medals[i] ?? `${i + 1}.`} ${s.hrac} — ${s.skore} bodů (${s.datum})`
    );
    return {
      content: [{ type: "text", text: `🏆 ŽEBŘÍČEK:\n${lines.join("\n")}` }],
    };
  }
);

// ------------------------------------------------------------------
// Spuštění: server poslouchá na stdin/stdout a čeká na Clauda
// ------------------------------------------------------------------
const transport = new StdioServerTransport();
await server.connect(transport);

// Pozor: console.log by rozbil komunikaci (ta běží přes stdout!).
// Pro ladicí výpisy se v MCP serverech používá console.error (stderr).
console.error("Had MCP server běží a čeká na požadavky...");
