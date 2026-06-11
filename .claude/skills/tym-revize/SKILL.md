---
name: tym-revize
description: Velká týmová revize hry — spustí NAJEDNOU (paralelně) několik agentů, každý zkoumá hru z jiného úhlu, a výsledky spojí dohromady. Použij, když chce uživatel komplexní zhodnocení hry nebo ukázat, jak běží více agentů paralelně.
---

# Týmová revize hry (paralelní agenti)

Tohle je ukázka **paralelních agentů** — místo jednoho pomocníka
pošleme na hru rovnou celý tým a každý ji prozkoumá z jiného pohledu.
Pracují SOUČASNĚ, takže výsledek máme rychleji.

## Postup

1. **Spusť tyto tři agenty NAJEDNOU — paralelně.**
   Důležité: zavolej je v JEDNÉ zprávě (více volání nástroje Task
   naráz), ne jednoho po druhém. Jen tak poběží současně.

   - `tester-hry` → zadání: *"Najdi ve hře Had bugy a okrajové případy."*
   - `kritik-vzhledu` → zadání: *"Zhodnoť, jak hra Had vypadá."*
   - `kontrolor-pristupnosti` → zadání: *"Zkontroluj přístupnost hry Had."*

2. **Počkej, až všichni tři vrátí svá hlášení.**

3. **Spoj výsledky do jednoho přehledu** (česky):
   - Krátký nadpis pro každého agenta (🐞 Bugy / 🎨 Vzhled / ♿ Přístupnost)
     a jeho 2–3 nejdůležitější nálezy.
   - Sekci **"Na čem začít"** — vyber 3 nejdůležitější věci napříč všemi
     agenty, seřazené od nejdůležitější. Ber ohled na to, že Pavel je
     začátečník (snadné a viditelné zlepšení má přednost).

4. Nakonec připomeň, že tohle byla ukázka paralelních agentů, a nabídni:
   *"Chceš, abych některý z těch nálezů rovnou opravil?"*

## Poznámka pro výuku

Žádný z těch agentů nemá nástroj na úpravu souborů (mají jen `Read`,
`Grep`, `Glob`). Proto je bezpečné pustit je všechny naráz — můžou jen
číst a radit, ne si navzájem přepisovat kód. Opravu vždy dělá až hlavní
Claude na základě jejich doporučení.
