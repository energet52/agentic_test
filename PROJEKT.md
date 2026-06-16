# 🏋️ Tvůj první vlastní produkt — od nuly až na internet

Ahoj Pavle! Hru Had máš za sebou, skills, agenty i nástroje znáš. Teď
přichází **velký úkol**: postavit si **vlastní opravdový produkt** a nakonec
ho zveřejnit na internetu na vlastní doméně. 🚀

> ⚠️ **Tenhle soubor je ZADÁNÍ, ne návod krok za krokem s hotovým kódem.**
> Říká ti, JAKÉ kroky dělá vývojář, když staví nový produkt s plnou
> AI-agentní výbavou (skills, tým agentů, nástroje, CI, nasazení).
> CO přesně produkt umí, **vymyslíš a naprogramuješ ty sám** — s Claudem
> jako parťákem. Tohle je přesně to, co znamená "vibecoding na ostro".

---

## 🎯 O co jde

Téma jsi vymyslel se Sašou: **appka pro lidi, co cvičí v posilovně** —
aby si mohli zapisovat tréninky a sledovat svůj pokrok.

**Rozsah (scope) si navrhneš sám** v Fázi 1. Nečekej ode mě seznam funkcí —
od toho jsi tady ty jako tvůrce produktu. Tvým cílem je **minimální funkční
produkt** (anglicky *MVP — Minimum Viable Product*): nejmenší verze, která
už dává smysl a dá se reálně používat.

**Jak poznáš, že jsi hotov:**
- ✅ produkt **běží u tebe na počítači** (lokálně) a dá se reálně používat,
- ✅ kód je na **GitHubu** ve tvém vlastním repozitáři,
- ✅ máš **tým agentů, skills a aspoň jeden vlastní nástroj**,
- ✅ při každém pushi se spustí **CI pipeline** (automatická kontrola),
- ✅ appka je **nasazená na internetu** (Azure) a běží na **vlastní doméně**.

---

## 🔑 Co zařídí Sasha (a co musíš mít hotové předtím)

Některé věci stojí peníze nebo potřebují účet, ke kterému ti dá přístup Sasha:

| Co | Kdo zařídí | Podmínka |
|---|---|---|
| **Hosting na Azure** (kam se appka nahraje) | 🔑 Sasha dá přístup | Appka musí **nejdřív běžet lokálně** |
| **Doména** (tvoje webová adresa) | 🔑 Sasha dá přístup | Web musí **nejdřív fungovat na Azure** |

> 💡 **Zlaté pravidlo:** Nejdřív všechno rozjeď **u sebe na počítači**. Teprve
> co bezvadně běží lokálně, má smysl řešit Azure a doménu. Za Sašou přijď,
> až budeš mít Fáze 1–7 hotové a appka ti poběží v prohlížeči na `localhost`.

---

## 💬 Jak používat příklady promptů

U každé fáze najdeš **příklad promptu** — návrh, co můžeš napsat Claudovi,
abys daný krok rozjel. Ale pozor, dvě důležité věci:

1. **Všechno si stavíš sám.** Schválně ti nedávám hotovou kostru projektu
   (prázdné složky, šablony agentů, hotový `ci.yml`...). Vytvoříš si je
   vlastníma rukama — právě v tom je to učení. Claude je tvůj parťák, ne
   automat: vede tě, vysvětluje a píše s tebou, ale **rozhoduješ ty**.
2. **Příklady promptů jsou jen odrazový můstek.** Přepiš si je vlastními
   slovy, doplň detaily o své appce. Čím konkrétnější prompt, tím lepší
   výsledek. Nekopíruj je naslepo — používej je jako vzor, jak se ptát.

## 🗺️ Fáze projektu

Postupuj shora dolů. U každé fáze je **co udělat**, **co se naučíš**,
**kterého agenta/skill použít** a **příklad promptu**. Odškrtávej si
splněné body.

---

### Fáze 0 — Příprava nástrojů 🧰

- [ ] Ověř, že máš nainstalováno: **Git**, **Node.js**, **VS Code** a **Claude Code**.
- [ ] Založ si (pokud nemáš) účet na **GitHubu**.
- [ ] Vytvoř si na disku novou prázdnou složku pro projekt (např. `muj-treninkovy-denik`).

> 💬 **Příklad promptu:**
> *„Jsem na (Windows / Macu) a jsem začátečník. Zkontroluj, jestli mám
> nainstalovaný Git a Node.js. Co chybí, poraď mi jednoduše, jak doinstalovat."*

**Co se naučíš:** připravit si prostředí, než začneš stavět.

---

### Fáze 1 — Vymysli produkt (scope) 🧠

Tady se z tebe stává **produkťák** (člověk, co rozhoduje, co produkt umí).

- [ ] Napiš si vlastními slovy: **pro koho** appka je a **jaký problém řeší**.
- [ ] Sepiš **user stories** — věty ve tvaru:
      *„Jako uživatel chci ____, abych ____."*
      (např. „Jako cvičící chci zapsat počet opakování, abych viděl pokrok.")
- [ ] Z user stories vyber **jen ty nejnutnější** pro první verzi (MVP).
      Zbytek dej do seznamu „někdy příště".
- [ ] Nakresli si na papír, jak budou vypadat obrazovky (klidně rukou).

> 🤖 **Použij agenta:** vytvoř si agenta `produktovy-analytik` (jen čtení),
> který ti pomůže klást správné otázky a user stories vypilovat. Ať ti
> **neradí hotové řešení** — má z tebe ty nápady *dostat*, ne je vymyslet za tebe.

> 💬 **Příklad promptu:**
> *„Chci si postavit appku na zapisování tréninků v posilovně. Polož mi
> 5 otázek, které mi pomůžou rozhodnout, co má umět první verze (MVP).
> Neraď mi řešení, jen se ptej — chci na to přijít sám."*

**Co se naučíš:** že vývoj nezačíná kódem, ale **rozmyšlením, co a proč** stavíš.

---

### Fáze 2 — Nový GitHub repozitář 📦

- [ ] Na GitHubu vytvoř **nový veřejný repozitář** (např. `treninkovy-denik`).
- [ ] Naklonuj ho k sobě na počítač (`git clone ...`).
- [ ] Přidej základní soubory: `README.md`, `.gitignore`.
- [ ] Udělej **první commit a push**.

> 💬 **Příklad promptu:**
> *„Veď mě krok za krokem, jak založím nový veřejný repozitář na GitHubu,
> naklonuju ho k sobě a udělám první commit a push. Vysvětluj jednoduše
> a počkej vždy, až daný krok udělám."*

**Co se naučíš:** jak vzniká projekt na GitHubu a jak na něj nahrát kód.

---

### Fáze 3 — Paměť projektu (`CLAUDE.md`) 🧾

- [ ] Vytvoř v repu soubor `CLAUDE.md` (jako máme v projektu Had).
- [ ] Napiš do něj **pravidla projektu**: jazyk komentářů, styl kódu,
      pro koho appka je, co Claude má a nemá dělat.

> 💬 **Příklad promptu:**
> *„Pomoz mi napsat soubor CLAUDE.md pro můj nový projekt. Nejdřív se mě
> zeptej na pravidla, která chci (jazyk odpovědí, styl kódu, pro koho
> appka je), a teprve podle mých odpovědí ho sepiš."*

**Co se naučíš:** dát Claudovi trvalé pokyny, ať ti pomáhá konzistentně.

---

### Fáze 4 — Postav si TÝM AGENTŮ 🤖🤖🤖

Opravdový produkt nestavíš s jedním pomocníkem, ale s **týmem specialistů**.
Každý agent má jednu roli a **jen ty nástroje, které ke své práci potřebuje**
(pamatuj na pravidlo nejmenších oprávnění z projektu Had!).

- [ ] Vytvoř si tým agentů ve `.claude/agents/`. Návrh rolí:

| Agent | Role | Nástroje |
|---|---|---|
| `produktovy-analytik` | pomáhá s user stories a scope | jen čtení |
| `architekt` | navrhne strukturu projektu a technologie | jen čtení |
| `frontend-vyvojar` | staví vzhled a ovládání (UI) | čtení + zápis |
| `backend-vyvojar` | data a logika (pokud bude potřeba) | čtení + zápis |
| `tester` | hledá chyby a okrajové případy | jen čtení |
| `code-reviewer` | kontroluje kvalitu kódu | jen čtení |
| `dokumentarista` | píše dokumentaci | čtení + zápis |

- [ ] U každého agenta napiš jasné zadání (česky) a vyber mu nástroje.
- [ ] **Vyzkoušej, že umíš spustit víc agentů paralelně** (jako `/tym-revize`
      u Hada) — třeba `tester` + `code-reviewer` naráz.

> 💬 **Příklad promptu (vytvoření agenta):**
> *„Chci si vytvořit agenta `tester`, který bude v mé appce hledat chyby
> a smí jen číst soubory (žádný zápis). Ukaž mi, jak má jeho soubor
> vypadat, a vysvětli mi každý řádek."*
>
> 💬 **Příklad promptu (paralelní běh):**
> *„Spusť agenty `tester` a `code-reviewer` zároveň (paralelně), ať mi oba
> nezávisle zkontrolují kód, a pak mi jejich nálezy shrň dohromady."*

**Co se naučíš:** rozdělit práci mezi specialisty a bezpečně omezit jejich
oprávnění. Přesně tak fungují AI-agentní týmy ve firmách.

---

### Fáze 5 — Vytvoř si SKILLS (slash příkazy) ⚡

Skills jsou tvoje **opakovatelné postupy**. Co budeš dělat často, z toho udělej skill.

- [ ] Vytvoř si pár skills ve `.claude/skills/`. Nápady:
  - `/nova-funkce` — řízený postup pro přidání nové funkce (plán → kód → test)
  - `/kontrola` — kontrola kódu před commitem (spustí testera a code-reviewera)
  - `/commit` — vytvoří pěkný commit a pushne na GitHub
  - `/denik` — zapíše, co ses dnes naučil, do `DENIK.md`

> 💬 **Příklad promptu:**
> *„Vytvoř mi skill `/commit`, který vezme moje změny, vymyslí pěkný
> commit message a pushne na GitHub. Vysvětli mi přitom, jak skills
> fungují a kam se soubor ukládá."*

**Co se naučíš:** automatizovat si nudné kroky a pracovat rychleji.

---

### Fáze 6 — Vlastní NÁSTROJ (MCP) 🔧

Postav si aspoň jeden **vlastní nástroj** přes MCP (jako server u Hada).
Ať dělá něco užitečného přímo pro tvou appku.

- [ ] Vytvoř složku `mcp-server/` s vlastním nástrojem. Nápady (vyber si):
  - nástroj, který ukládá/načítá tréninky do souboru,
  - nástroj, který spočítá statistiky (např. zlepšení za měsíc),
  - nástroj, který vrátí tip na trénink.
- [ ] Zaregistruj ho v `.mcp.json` a vyzkoušej, že ho Claude umí zavolat.

> 💬 **Příklad promptu:**
> *„Chci si vytvořit vlastní MCP nástroj, který uloží trénink do souboru.
> Nejdřív mi jednoduše vysvětli, jak MCP server funguje, a pak ho se mnou
> postav krok za krokem. Komentáře v kódu piš česky."*

**Co se naučíš:** že nástroj je jen obyčejná funkce s dobrým popisem —
a že si Claudovi můžeš přidat vlastní schopnosti.

---

### Fáze 7 — Postav samotný produkt (lokálně!) 💻

Teď to nejlepší — stavění appky. **Všechno musí běžet u tebe na počítači.**

- [ ] S pomocí `architekta` vyber technologie. Doporučení pro začátek:
      **čisté HTML + CSS + JavaScript** a ukládání dat do prohlížeče
      (`localStorage`) — žádný složitý server, appka pojede hned.
      (Až budeš chtít víc, Claude ti poradí, jak přidat backend a databázi.)
- [ ] Stavěj **po malých kouscích**: jedna user story = jedna funkce.
      Po každé funkci appku vyzkoušej v prohlížeči.
- [ ] Používej svůj tým: `frontend-vyvojar` staví, `tester` hledá chyby,
      `code-reviewer` hlídá kvalitu, `dokumentarista` zapisuje.
- [ ] Po každém větším kroku **commit a push** na GitHub.

> ✅ **Cíl této fáze:** otevřeš appku v prohlížeči (`localhost`), reálně si
> zapíšeš trénink a appka funguje. **Teprve teď má smysl řešit nasazení.**

> 💬 **Příklad promptu:**
> *„Pojďme postavit první funkci: obrazovku, kam zapíšu cvik, počet sérií
> a opakování, a uloží se to do `localStorage`. Stavěj po malých krocích
> a po každém mi vysvětli, co jsi udělal a jak si to vyzkoušet."*

**Co se naučíš:** postavit funkční produkt po krocích a průběžně ho testovat.

---

### Fáze 8 — GitHub CI pipeline ⚙️

CI (*Continuous Integration*) = robot na GitHubu, který po **každém pushi**
automaticky zkontroluje, že je kód v pořádku. Jako u Hada to nasazení na Pages.

- [ ] Vytvoř `.github/workflows/ci.yml`.
- [ ] Ať pipeline při každém pushi do `main` spustí aspoň:
      kontrolu, že se projekt **nainstaluje** a **sestaví** (build) bez chyby,
      a pokud máš testy, ať je **spustí**.
- [ ] Pushni a zkontroluj v záložce **Actions**, že pipeline svítí zeleně. ✅

> 💬 **Příklad promptu:**
> *„Vytvoř mi GitHub Actions workflow do `.github/workflows/ci.yml`, který
> při každém pushi do `main` zkontroluje, že se projekt nainstaluje a
> sestaví bez chyby. Vysvětli mi, co každá část souboru dělá."*

**Co se naučíš:** nechat stroj hlídat kvalitu za tebe — základ profesionálního vývoje.

---

### Fáze 9 — Nasazení na Azure ☁️

Teď appku dostaneme z tvého počítače na internet. Hostovat budeme na **Azure**.

> 🔑 **Tady ti přístup k Azure dá Sasha.** Než za ním půjdeš, musí být
> hotové Fáze 1–8 a **appka musí bezvadně běžet lokálně.**

- [ ] Společně se Sašou vytvoříte **Azure Static Web App** a propojíte ji
      s tvým GitHub repozitářem.
- [ ] Azure ti **sám přidá do repa GitHub Actions workflow**, který appku
      při každém pushi sestaví a nasadí. (Hezky se to potká s Fází 8 — tohle
      je CI/CD: automatická integrace *i* nasazení.)
- [ ] Pushni a ověř, že se appka objeví na adrese, kterou Azure vygeneruje
      (něco jako `...azurestaticapps.net`).

> 💬 **Příklad promptu:**
> *„Mám od Sashy přístup k Azure a appka mi běží lokálně. Veď mě krok za
> krokem, jak vytvořím Azure Static Web App a propojím ji s mým GitHub
> repozitářem. Vysvětluj jednoduše a počkej po každém kroku."*

**Co se naučíš:** jak se appka dostane na internet a co je CI/CD.

---

### Fáze 10 — Vlastní doména 🌐

Poslední krok — místo dlouhé adresy od Azure budeš mít **vlastní hezkou adresu**.

> 🔑 **Doménu zařídí Sasha** a dá ti k ní přístup. Než to budeme řešit,
> musí appka **fungovat na Azure** (Fáze 9 hotová).

- [ ] Se Sašou nastavíte u domény **DNS záznam**, který ji nasměruje na Azure.
- [ ] V Azure přidáte doménu k aplikaci a zapnete **HTTPS** (zabezpečení).
- [ ] Otevři svou doménu v prohlížeči — a je to venku! 🎉

> 💬 **Příklad promptu:**
> *„Mám od Sashy přístup k doméně a appka mi běží na Azure. Vysvětli mi,
> jaký DNS záznam musím u domény nastavit, aby ukazovala na moji appku na
> Azure, a jak pak zapnu HTTPS."*

**Co se naučíš:** jak funguje doména, DNS a HTTPS.

---

### Fáze 11 — Dokumentace a předvedení 📣

- [ ] Nech `dokumentaristu` sepsat pěkný `README.md`: co appka umí, jak ji
      spustit lokálně, odkaz na živou verzi.
- [ ] Přidej do README **screenshot** nebo krátké video.
- [ ] Ukaž to kamarádům (a Sašovi 😄).

> 💬 **Příklad promptu:**
> *„Nech agenta `dokumentarista` sepsat `README.md` mé appky: co umí, jak
> ji spustit lokálně a odkaz na živou verzi. Pak mi poraď, kam dát screenshot."*

**Co se naučíš:** že hotový produkt se ještě musí umět **prodat a vysvětlit**.

---

## ✅ Finální checklist (Definition of Done)

- [ ] Vlastní GitHub repozitář s historií commitů
- [ ] `CLAUDE.md` s pravidly projektu
- [ ] Tým aspoň **5 agentů** s rozumně omezenými nástroji
- [ ] Aspoň **3 vlastní skills**
- [ ] Aspoň **1 vlastní MCP nástroj**
- [ ] Funkční appka běžící **lokálně**
- [ ] **CI pipeline** svítí zeleně
- [ ] Appka **nasazená na Azure**
- [ ] Běží na **vlastní doméně** přes HTTPS
- [ ] Pěkný `README.md` s odkazem na živou verzi

---

## 💬 Jak na to s Claudem

- Nespěchej. Jedna fáze klidně jeden večer.
- U každého kroku se Clauda ptej **„proč"**, ne jen **„jak"**. Nech si věci
  vysvětlit (na to máš agenta `vysvetlovac` z projektu Had).
- Když se zasekneš, **napiš Claudovi přesně, co nefunguje** a co vidíš za chybu.
- Veď si `DENIK.md` — za měsíc budeš koukat, co všechno už umíš. 💪

Hodně štěstí, tvůrce! Tohle už není cvičení — tohle je **tvůj první opravdový produkt**.
