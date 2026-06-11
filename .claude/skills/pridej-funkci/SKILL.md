---
name: pridej-funkci
description: Řízený postup pro přidání nové funkce do hry Had (zvuky, překážky, power-upy...). Použij, když chce uživatel hru rozšířit o novou herní mechaniku.
---

# Přidání nové funkce do hry

Uživatel chce do hry přidat: **$ARGUMENTS**

Tohle je VÝUKOVÝ postup — cílem není jen napsat kód, ale aby uživatel
rozuměl tomu, co se děje. Postupuj po krocích a komunikuj česky.

## Krok 1: Ujasnění

Pokud uživatel nenapsal, co chce přidat (nebo je to nejasné), nabídni mu
3 nápady přiměřené začátečníkovi, například:
- 🍎 zlaté jablko — objeví se občas, dá 5 bodů, po chvíli zmizí
- 🧱 překážky — na ploše jsou zdi, do kterých se nesmí narazit
- ⏸️ zrychlující se hudba nebo zvuky při snědení jídla

U každého nápadu řekni jednou větou, co se na něm naučí.

## Krok 2: Plán (než napíšeš kód!)

Stručně česky vysvětli:
1. Které soubory se budou měnit a proč.
2. Jaké nové proměnné/funkce vzniknou.
3. Kde se nová logika napojí na herní smyčku (`gameStep` v `snake.js`).

Zeptej se uživatele, jestli plánu rozumí a souhlasí. Počkej na odpověď.

## Krok 3: Implementace

- Piš kód ve stejném stylu jako zbytek projektu: české komentáře,
  anglické názvy proměnných.
- Měň co nejméně existujícího kódu.
- Nové barvy přidávej jako CSS proměnné do `:root` ve `style.css`.

## Krok 4: Vysvětlení a test

1. Po dopsání kódu vysvětli ČESKY a JEDNODUŠE, co každá změna dělá —
   ideálně s odkazy na konkrétní řádky.
2. Vyzvi uživatele, ať hru otevře v prohlížeči a funkci vyzkouší.
3. Navrhni jeden mini-úkol, jak by si funkci mohl sám upravit
   (např. "zkus změnit, kolik bodů dává zlaté jablko").
