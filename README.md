# 🐍 Pavlův vibecoding projekt — Had + Claude Code

Ahoj Pavle! Tohle je tvůj startovní projekt pro učení **vibecodingu** —
programování ve spolupráci s AI. Jádrem je klasická hra **Had (Snake)**
a kolem ní jsou připravené ukázky tří klíčových pojmů z Claude Code:
**nástroje (tools)**, **dovednosti (skills)** a **agenti (agents)**.

> Co je vibecoding? Místo psaní každého řádku ručně popíšeš Claudovi
> česky, co chceš, a společně to vytvoříte. Tvoje práce je **vymýšlet,
> rozhodovat a kontrolovat** — Claude píše kód. Ale pozor: čím líp
> kódu rozumíš, tím lepší věci spolu postavíte. 😉

## 🎮 Hraj online

Hra je nasazená na GitHub Pages — zahraj si rovnou v prohlížeči:
**https://energet52.github.io/agentic_test/**

(Web se sám aktualizuje po každém pushi do `main` — viz workflow
`.github/workflows/deploy-pages.yml`, taky výuková ukázka: tomuhle se
říká CI/CD, automatické nasazení.)

## 🚀 Jak začít (5 minut)

1. **Spusť hru** — buď online (odkaz výše), nebo lokálně: otevři
   `hra/index.html` v prohlížeči (stačí na něj poklepat).
   Ovládání: šipky, `P` = pauza.

2. **Spusť Claude Code** v kořenové složce tohoto projektu:
   ```bash
   claude
   ```

3. **Zprovozni MCP server** (vlastní nástroje — viz níže):
   ```bash
   cd mcp-server && npm install && cd ..
   ```
   Pak v Claude Code zkontroluj příkazem `/mcp`, že server `had-server` běží.

## 🗺️ Mapa projektu

| Co | Kde | K čemu |
|---|---|---|
| 🎮 Hra Had | `hra/` | HTML + CSS + JS, vše s českými komentáři |
| 🧠 Paměť projektu | `CLAUDE.md` | Trvalé pokyny pro Clauda (čte je vždy) |
| ⚡ Skills | `.claude/skills/` | Slash příkazy: `/novy-skin`, `/kontrola-kodu`, `/pridej-funkci` |
| 🤖 Agenti | `.claude/agents/` | Subagenti: `tester-hry`, `vysvetlovac` |
| 🔧 Vlastní nástroje | `mcp-server/` + `.mcp.json` | MCP server se 3 nástroji (nápady, žebříček skóre) |
| 📖 Výuka | `VYUKA.md` | Vysvětlení: tools vs. skills vs. agenti |
| 📝 Úkoly | `UKOLY.md` | Domácí úkoly pro tebe |

## ✨ Vyzkoušej hned teď

Napiš do Claude Code postupně tyhle věci a sleduj, co se děje:

```
/novy-skin neonová
```
→ Spustí se **skill**, Claude přebarví hru. Obnov stránku (F5) a koukej.

```
Požádej agenta tester-hry, ať najde ve hře bugy.
```
→ Spustí se **agent** — samostatný pomocník, který prozkoumá kód a podá hlášení.

```
Dej mi nápad, co do hry přidat.
```
→ Claude zavolá **nástroj** `napad_na_hru` z našeho MCP serveru.

```
Ulož mi do žebříčku skóre 15, jmenuju se Pavel.
```
→ Claude zavolá nástroj `uloz_skore` — mrkni pak do `mcp-server/skore.json`!

## 📚 Co dál

1. Přečti si **`VYUKA.md`** — pochopíš, čím se tools, skills a agenti liší
   a kdy se který hodí.
2. Otevři **`UKOLY.md`** — čekají tam na tebe 4 úrovně úkolů, od vylepšení
   hry až po napsání vlastního nástroje.

Hodně štěstí a bav se! 🎮
