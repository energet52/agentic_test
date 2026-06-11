# 📖 Výuka: Nástroje × Skills × Agenti

Tři pojmy, které v Claude Code potkáš pořád. Všechny tři máš v tomhle
projektu živé — můžeš si na ně sáhnout a každý soubor si přečíst.

## Rychlé přirovnání: Claude jako kutil 🛠️

Představ si Clauda jako šikovného kutila, kterého sis pozval domů:

- **Nástroje (tools)** = jeho **nářadí v kufříku**. Šroubovák, vrtačka,
  metr. Jeden nástroj = jedna konkrétní akce (přečti soubor, spusť příkaz).
- **Skills (dovednosti)** = jeho **pracovní postupy / recepty**.
  "Jak se správně tapetuje pokoj" — krok za krokem, použije při tom
  spoustu nářadí. Spouštíš je lomítkem: `/novy-skin`.
- **Agenti** = jeho **parťáci, které si zavolá na pomoc**. "Hele, zavolám
  elektrikáře, ten to prověří a řekne mi výsledek." Agent je samostatný
  Claude s vlastním zadáním a vlastním (omezeným) nářadím.

## 1. 🔧 Nástroje (tools)

**Co to je:** Jednotlivé akce, které Claude umí provést. Bez nástrojů by
Claude uměl jen povídat — nástroje mu dávají ruce.

**Vestavěné nástroje** (má je každý Claude Code):

| Nástroj | Co dělá |
|---|---|
| `Read` | přečte soubor |
| `Write` / `Edit` | vytvoří / upraví soubor |
| `Glob` / `Grep` | hledá soubory / hledá text v souborech |
| `Bash` | spustí příkaz v terminálu |
| `WebSearch` / `WebFetch` | hledá na internetu / stáhne stránku |

**Vlastní nástroje přes MCP:** Claudovi můžeš nástroje i PŘIDAT. Na to
slouží MCP (Model Context Protocol). V tomhle projektu:

- `.mcp.json` — říká Claude Code: "spusť `node mcp-server/server.js`"
- `mcp-server/server.js` — obyčejný Node.js program, který Claudovi
  přidává 3 nástroje: `napad_na_hru`, `uloz_skore`, `top_skore`

**Klíčová věc:** Claude si **sám vybírá**, který nástroj kdy použít —
podle `description` (popisu) nástroje. Proto je popis tak důležitý!
Otevři `mcp-server/server.js` a všimni si, jak popisy vypadají.

**Vyzkoušej:** napiš Claudovi *"Kdo vede žebříček?"* — měl by sám
zavolat nástroj `top_skore`.

## 2. ⚡ Skills (dovednosti)

**Co to je:** Návod / recept uložený v souboru. Když skill spustíš,
Claude si návod přečte a řídí se jím. Skill sám o sobě nic nedělá —
říká Claudovi, JAK má postupovat (a Claude pak používá nástroje).

**Kde bydlí:** `.claude/skills/<nazev>/SKILL.md` — soubor s hlavičkou
(`name`, `description`) a postupem.

**Jak se spouští:** lomítkem (`/novy-skin neonová`), nebo si je Claude
vybere sám, když pozná, že se hodí.

**Naše tři skills** — schválně každá jiného typu:

| Skill | Typ | Co ukazuje |
|---|---|---|
| `/novy-skin` | recept na úpravu | přesný postup + parametr (`$ARGUMENTS`) |
| `/kontrola-kodu` | analýza | jen čte a hodnotí, nic nemění |
| `/pridej-funkci` | řízený workflow | ptá se, plánuje, až pak programuje |

**Otevři si je!** Každá SKILL.md je obyčejný text. Až je přečteš,
pochopíš, že skill = "naprogramování Clauda češtinou".

## 3. 🤖 Agenti (subagenti)

**Co to je:** Samostatný Claude, kterého si hlavní Claude pošle na
dílčí úkol. Agent má **vlastní zadání** (systémový prompt), **vlastní
povolené nástroje** a **vlastní paměť** — pracuje stranou a vrátí jen
výsledek.

**Kde bydlí:** `.claude/agents/<nazev>.md`

**Naši agenti:**

| Agent | Role | Povolené nástroje |
|---|---|---|
| `tester-hry` | hledá bugy a okrajové případy | jen čtení (`Read`, `Grep`, `Glob`) |
| `vysvetlovac` | vysvětluje kód jednoduše česky | jen čtení |
| `kritik-vzhledu` | hodnotí, jak hra vypadá | jen čtení |
| `kontrolor-pristupnosti` | ověřuje přístupnost (kontrast, klávesnice, mobil) | jen čtení |
| `dokumentarista` | píše a upravuje dokumentaci | čtení **i zápis** (`Write`, `Edit`) |

**Proč omezovat nástroje?** Většina našich agentů má jen "čtecí" nástroje
— takže ani omylem nemůžou nic přepsat. To je bezpečnost i jasná role:
tester testuje, nevyvíjí.

**A naopak — `dokumentarista` zápis potřebuje.** Jeho úkol je vytvářet
soubory s dokumentací, takže dostal nástroje `Write` a `Edit`. Tady je
důležité pravidlo: **agentovi dej jen ty nástroje, které ke své práci
opravdu potřebuje** — ne víc. Dokumentarista smí psát `.md` soubory, ale
v jeho zadání stojí, že nemá sahat do kódu hry. Čím užší role, tím
bezpečnější agent.

### Agenti běžící PARALELNĚ ⚡⚡⚡

Tahle je nejlepší: hlavní Claude umí pustit **víc agentů najednou**.
Každý dostane svůj úkol, všichni makají současně a Claude pak jejich
výsledky spojí. Je to jako poslat na hřiště celý tým místo jednoho hráče.

Ukázku máš ve skillu **`/tym-revize`** — spustí naráz tři agenty
(`tester-hry`, `kritik-vzhledu`, `kontrolor-pristupnosti`), každý kouká
na hru z jiného úhlu, a ty dostaneš jeden společný přehled.

Proč to jde bezpečně? Všichni tři mají jen čtecí nástroje — můžou radit,
ale ne si navzájem přepisovat kód. (Kdyby uměli zapisovat, paralelní běh
by byl nebezpečný — dva agenti by si mohli přepsat stejný soubor.)

**Vyzkoušej:** napiš `/tym-revize` a sleduj, jak se rozjede víc agentů
naráz.

**Kdy se agent hodí víc než skill?**
- když je úkol velký a "ušpinil" by hlavní konverzaci (projdi 20 souborů...)
- když chceš jinou roli s jinými pravidly (přísný tester vs. hodný učitel)
- když chceš pustit víc věcí najednou (agenti umí pracovat paralelně)

## Souhrnná tabulka

| | 🔧 Nástroj | ⚡ Skill | 🤖 Agent |
|---|---|---|---|
| **Co to je** | jedna akce | návod/recept | samostatný pomocník |
| **Kde je** | vestavěné / MCP server | `.claude/skills/` | `.claude/agents/` |
| **Kdo to píše** | programátor (kód) | ty (česky!) | ty (česky!) |
| **Jak se spustí** | Claude sám | `/prikaz` nebo Claude sám | Claude sám / na požádání |
| **Přirovnání** | šroubovák | recept | parťák-specialista |

## 🎬 Demo na 15 minut (pro strejdu Sašu)

1. **Hra** (2 min): otevřít `hra/index.html`, zahrát si kolo.
2. **Skill** (3 min): `/novy-skin oceán` → ukázat, že Claude mění jen
   CSS proměnné. Otevřít `.claude/skills/novy-skin/SKILL.md` a ukázat,
   že je to jen česky psaný návod.
3. **Agent** (4 min): *"Požádej agenta tester-hry o kontrolu hry"* →
   ukázat, že agent pracuje stranou a vrátí hlášení. Otevřít jeho
   definici a ukázat omezené nástroje.
4. **Nástroj/MCP** (4 min): *"Dej mi nápad na vylepšení hry"* a
   *"Ulož skóre 12 pro Pavla"* → otevřít `mcp-server/server.js` a ukázat,
   že nástroj je obyčejná funkce + popis. Ukázat změnu v `skore.json`.
5. **Závěr** (2 min): otevřít `UKOLY.md` a vybrat první domácí úkol.
