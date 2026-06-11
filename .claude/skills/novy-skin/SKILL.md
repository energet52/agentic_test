---
name: novy-skin
description: Změní barevné téma (skin) hry Had. Použij, když chce uživatel změnit vzhled hry, barvy, nebo napíše /novy-skin s názvem tématu (např. neonová, oceán, retro, tmavá).
---

# Nový skin pro hru Had

Uživatel chce změnit vzhled hry. Požadované téma: **$ARGUMENTS**

(Pokud uživatel žádné téma nenapsal, zeptej se ho, jaký styl by chtěl —
nabídni mu třeba: neonová, oceán, lávová, zimní, retro Game Boy.)

## Postup

1. Otevři soubor `hra/style.css` a najdi blok `:root` s CSS proměnnými
   (všechny začínají `--barva-`).

2. Vymysli novou sadu barev, která sedí k požadovanému tématu:
   - `--barva-pozadi` — pozadí stránky
   - `--barva-plochy` — pozadí herní plochy
   - `--barva-hada` + `--barva-hlavy` — had (hlava o něco výraznější)
   - `--barva-jidla` — jídlo, mělo by být dobře vidět
   - `--barva-textu`, `--barva-zvyrazneni` — texty a skóre
   - `--barva-mrizky` — mřížka, jen o malinko světlejší než plocha

3. Zkontroluj kontrast: had a jídlo musí být jasně viditelné na ploše.

4. Uprav POUZE hodnoty proměnných v `:root`. Nic jiného v souboru neměň —
   hra si barvy sama načítá z těchto proměnných (viz `snake.js`, sekce 2).

5. Na závěr česky shrň, jaké barvy jsi zvolil/a a proč, a připomeň
   uživateli, ať si obnoví stránku v prohlížeči (F5).

## Příklad

Pro téma "oceán" by barvy mohly být: tmavě modré pozadí (#0a1628),
tyrkysový had (#2dd4bf), korálové jídlo (#fb7185).
