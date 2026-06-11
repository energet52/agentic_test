# 📝 Domácí úkoly pro Pavla

Čtyři úrovně — od jednoduchého vibecodingu až po vlastní MCP nástroj.
U každého úkolu je nápověda, jak na něj. Nespěchej, klidně jeden úkol
za večer. A hlavně: **vždycky si nech od Clauda vysvětlit, co napsal!**
(Na to máš agenta `vysvetlovac`. 😉)

---

## Úroveň 1: Vylepši hru 🎮 (jen povídání s Claudem)

Cíl: osahat si vibecoding. Stačí Claudovi česky popsat, co chceš.

- [ ] **1a. Zvuky** — přidej zvuk při snědení jídla a při game over.
      *Nápověda: zkus `/pridej-funkci zvuky` — skill tě provede.*
- [ ] **1b. Zlaté jablko** — občas se objeví speciální jídlo za 5 bodů,
      které po pár sekundách zmizí.
- [ ] **1c. Překážky** — od 10 bodů se na ploše objevují zdi.
- [ ] **1d. Ovládání na mobilu** — swipe gesta, ať si zahraješ na telefonu.
- [ ] **1e. Tvůj nápad** — napiš Claudovi *"dej mi nápad na vylepšení"*
      (zavolá MCP nástroj `napad_na_hru`) a jeden nápad zrealizuj.

**Bonus:** po každé změně spusť `/kontrola-kodu` a zkus dostat jedničku.

---

## Úroveň 2: Napiš vlastní skill ⚡

Cíl: pochopit, že skill = česky psaný návod pro Clauda.

- [ ] **2a. `/zmen-rychlost`** — skill, který podle parametru (pomalá /
      normální / šílená) upraví konstanty rychlosti v `snake.js`.
      *Nápověda: okopíruj složku `.claude/skills/novy-skin/`, přejmenuj ji
      a přepiš SKILL.md. Podívej se, jak `novy-skin` používá `$ARGUMENTS`.*
- [ ] **2b. `/zapis-do-deniku`** — skill, který přidá zápis do souboru
      `DENIK.md`: datum, co jsme dnes na projektu udělali, co jsem se naučil.
      Veď si deník po každém sezení!

**Jak poznáš, že to funguje:** restartuj Claude Code a tvůj příkaz se
objeví v nabídce po napsání `/`.

---

## Úroveň 3: Vytvoř vlastního agenta 🤖

Cíl: pochopit role a omezování nástrojů.

- [ ] **3a. `level-designer`** — agent, který navrhuje rozložení překážek
      pro nové levely (vrací je jako ASCII mřížku 20×20). Jen čtecí nástroje.
      *Nápověda: okopíruj `.claude/agents/tester-hry.md` a přepiš roli.*
- [ ] **3b. `hodnotic-zabavnosti`** — agent-kritik: přečte kód hry a
      ohodnotí, jak je hra ZÁBAVNÁ (ne technicky správná!) — tempo,
      odměny, obtížnost. Schválně jiný úhel pohledu než tester.

**Otázka k zamyšlení:** proč je lepší dát testerovi jen čtecí nástroje,
i když by s `Edit` mohl bugy rovnou opravit?

---

## Úroveň 4: Přidej vlastní MCP nástroj 🔧 (nejtěžší!)

Cíl: nakouknout pod kapotu — nástroje jsou jen obyčejné funkce.

- [ ] **4a. `achievementy`** — přidej do `mcp-server/server.js` nástroj,
      který ukládá a vypisuje achievementy ("první hra", "10 bodů",
      "had délky 20"...). Ukládej je do `achievementy.json` po vzoru
      `skore.json`.
      *Nápověda: nech si od Clauda nejdřív vysvětlit, jak funguje
      `registerTool` — a pak ho nech vést, ale piš s ním.*
- [ ] **4b. `smaz_zebricek`** — nástroj na vynulování žebříčku. Schválně
      přemýšlej: jak napsat `description`, aby ho Claude nepoužil omylem?

**Další nápady na vlastní nástroje** (vyber si, co tě baví):
- `statistiky_hrace` — spočítá z `skore.json` průměr, počet her, nejlepší skóre
- `denni_vyzva` — podle dnešního data vrátí "výzvu dne" (vždy stejnou pro daný den)
- `nahodne_jmeno_hada` — vygeneruje vtipnou přezdívku ("Zmije Zdeněk", "Užovka Uršula")
- `tip_dne` — vrátí programátorský tip nebo radu ke hře
- `export_zebricku` — vyrobí z `skore.json` hezkou HTML stránku se žebříčkem

**Pozor:** po každé změně serveru je potřeba restartovat Claude Code
(nebo server přenačíst přes `/mcp`), aby se nové nástroje načetly.

---

## 🚀 Až tohle dáš: nápady na další projekty

| Projekt | Co nového se naučíš | Jaké skills/agenty si k tomu vyrobit |
|---|---|---|
| **Breakout (Arkanoid)** | fyzika odrazů, kolize | skill `/novy-level` (rozložení cihel), agent `fyzik` na ladění odrazů |
| **Klikací hra (idle clicker)** | ukládání postupu, čísla rostoucí do nebes | nástroj MCP na statistiky hráče, skill `/vyvazeni` na ladění cen |
| **Kvíz z informatiky** | práce s daty (otázky v JSON) | agent `autor-otazek`, nástroj `pridej_otazku` |
| **2D plošinovka** | gravitace, skákání, levely | agent `level-designer` (už ho máš!), skill `/novy-level` |

U každého projektu si na začátku vytvoř `CLAUDE.md` — teď už víš proč. 😎
