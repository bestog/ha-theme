# Design-Brief: Hausmeister

Neuausrichtung (ersetzt „Nebel“). Vorbild ist die Gestaltung von
[Ronny](https://ronny-erklaert.vercel.app/): freundliche Alltags-Technik statt Kontrollzentrum.
Varianten-Vergleich: `preview/hausmeister-varianten.html` (gewählt: 1 hell + 3 dunkel).

## Grundhaltung
- **Ein Hausmeister, kein Leitstand.** Ruhig, aufgeräumt, freundlich; Technik ist sichtbar
  verlässlich, aber nicht laut.
- **Alles innerhalb von Home Assistant.** Theme-Variablen plus eine kleine card-mod-Schicht (HACS)
  für das, was Variablen nicht können. Keine eigene Web-App, keine geladenen Schriften,
  keine Spezialkarten. Ohne card-mod funktioniert das Theme weiter, nur ohne gefüllte Icons.

## Farbe
| Rolle | Hell („Hausmeister“) | Dunkel („Nachtschicht“) |
|---|---|---|
| Fläche | Off-White `#FAFAF7` | Charcoal `#16181D` |
| Karte | Weiß `#FFFFFF`, Linie `#E4E2DA` | `#20232A`, Linie `#2C3038` |
| Schrift | Charcoal `#16181D` / `#6A707C` | `#F2F1EC` / `#9AA0AA` |
| Primär (Schalter, Buttons) | Charcoal | Amber `#F5B544` |
| Licht & Wärme | Amber `#B97A12` | Amber `#F5B544` |
| Alles gut | Teal `#1F8C80` | Teal `#3CC4B4` |
| Achtung (offen, Warnung) | Rot `#D9534A` | Rot `#EF6A5F` |
| Alarm, Fehler | `#A8322B` | `#FF5247` |
| Sonstiges „an“ | Blau `#3B6FE0` | Blau `#6F97F2` |

**Eine Bedeutung pro Farbton.** Die HA-Farbnamen (`color: orange/red/green …` im Dashboard)
sind auf diese Palette gelegt. Kontrast geprüft: Text ≥ 4,5:1, Zustands-Icons ≥ 3:1 auf Karten.

## Form & Typo
- Karten 14px mit feiner 1px-Linie und kaum Schatten; Icon-Kacheln abgerundet-eckig (11px);
  Badges als Pills.
- Systemschrift (SF, Segoe UI, Roboto) wie im Vorbild.
- Überschriften (Heading-Karte) 20px in 800; in Kacheln führt der Wert (15px, 700),
  der Name steht leise darüber (13px, grau).

## card-mod-Schicht
- **Gefüllte Icon-Kacheln wie Ronnys Gesicht:** Aktive Kacheln zeigen ein voll gefülltes
  Quadrat mit Charcoal-Symbol. Licht und Heizen leuchten im Ronny-Gelb `#F5B544` (gezielt über
  `data-domain` der Kachel); andere Zustände nutzen ihre Zustandsfarbe. Alarmzustände bekommen
  ein weißes Symbol, weil Charcoal auf Alarmrot zu schwach wäre.
- Überschriften mit engerer Laufweite (−0,02em), Werte mit gleich breiten Ziffern.
- Warum card-mod: Die Tile-Karte setzt die 20-%-Deckkraft des Icon-Hintergrunds fest, per
  Variable ist das nicht änderbar. Im Hellmodus bleibt Amber als Zustandsfarbe darum
  `#B97A12` (lesbar als Icon auf Weiß); das Gelb gibt es nur als Füllung.

## Aufgaben-Karte
- Markdown-Karte mit Jinja-Logik (`dashboard/aufgaben-markdown.jinja`): oben ein Satz im
  Ronny-Ton („**5 Dinge brauchen dich**, der Rest läuft.“), darunter je Punkt eine
  `ha-alert`-Zeile mit Titel und Detail; ohne Emojis, das Icon zeigt die Schwere.
- Gestaltung über card-mod im Theme: ruhige Zeilen auf der Inset-Fläche mit gefülltem
  Icon-Quadrat; nur **Fehler** bekommen eine rote Tönung und stechen heraus. Leer:
  „Alles gut“ mit Teal-Haken wie Ronnys „All good“-Leiste.
- Detailtext eigene Farbe (`#5E646F` hell), damit er auf der Inset-Fläche 4,5:1 erreicht.
- Ruhig statt Protokoll (nach der zweiten Kritik):
  - Gleiches wird gebündelt („3 Batterien leer“, „2 Sensoren offline“), jeder Gerätename
    verlinkt direkt aufs Gerät.
  - Offene Fenster/Türen kommen erst nach **30 Minuten** in die Aufgaben; kurzes Lüften zeigen
    Badge und Kachel allein.
  - Zeitangaben auf Deutsch („seit 12 Min.“, „seit 3 Std.“, „seit gestern“) statt
    `relative_time`, das immer Englisch liefert.
  - Ab 5 Zeilen klappt der Rest nativ ein (`<details>` als Pill „+ N weitere“).
  - Leere Batterien bleiben bewusst Fehler (Entscheidung des Nutzers).
- Alltagsnamen statt Technik (vierte Kritik): Makro `nett()` macht aus
  „Schlafzimmer - Window Sensor Opening“ → „Fenster Schlafzimmer“, „Garage Door Sensor“ →
  „Garagentor“, „Hue Smart button 2“ → „Hue-Taster Wohnzimmer“ usw.
- Fensterlogik nur für echte Kontakte (`opening`/`door`/`garage_door`); die
  Fenstererkennung der Thermostate (`window`) und die Gruppe „Wohnzimmer Windows“ zählen
  nicht, sonst stünde dasselbe Fenster doppelt da.
- Eingeklappt wird erst, wenn mindestens zwei Zeilen verborgen würden (bis 6 bleiben offen).

## Nutzungskontext
- **Smartphone (Companion App)** und **Wandtablet**: gut lesbar aus Distanz, der Dunkelmodus ist
  nachts blendfrei.
- **Karten:** Das Dashboard „Zuhause“ nutzt Standard-HA-Karten (Tile, Heading, Badges, Markdown,
  Statistik- und Verlaufsgraphen) sowie die Flower-Card.

## Offen
- [ ] Hintergrund: einfarbig (aktuell) oder dezenter Verlauf
