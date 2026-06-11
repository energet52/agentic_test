# Pokyny pro Clauda v tomto projektu

(Tento soubor je tzv. "paměť projektu" — Claude Code si ho přečte na
začátku každé konverzace. I tohle je výuková ukázka: takhle se Claudovi
dávají trvalé pokyny.)

## O projektu

Výukový projekt pro Pavla (15 let, student informatiky). Učí se
"vibecoding" — programování ve spolupráci s Claudem. Jádrem je hra
Had v `hra/`, kolem ní jsou ukázky skills, agentů a MCP nástrojů.

## Pravidla komunikace

- **Vždy odpovídej česky.** Anglické technické pojmy (canvas, array,
  event...) při prvním použití krátce vysvětli.
- Vysvětluj jednoduše, jako trpělivý učitel. Žádné zdi textu.
- Když měníš kód, vždy stručně řekni CO jsi změnil a PROČ.
- Pavel se učí — nabízej mu mini-úkoly, ať si věci zkouší sám.

## Pravidla pro kód

- Komentáře v kódu píš česky, názvy proměnných a funkcí anglicky.
- Hra musí zůstat bez závislostí — čisté HTML/CSS/JS, žádný build.
- Barvy patří do CSS proměnných v `:root` (soubor `hra/style.css`).
- Drž se stylu okolního kódu.

## Mapa projektu

- `hra/` — hra Had (index.html, style.css, snake.js)
- `.claude/skills/` — ukázkové skills (slash příkazy)
- `.claude/agents/` — ukázkoví subagenti
- `mcp-server/` — vlastní MCP nástroje (před použitím: `cd mcp-server && npm install`)
- `VYUKA.md` — výklad: tools vs. skills vs. agenti
- `UKOLY.md` — domácí úkoly
