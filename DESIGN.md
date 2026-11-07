# Design-Brief: Hausmeister

Neuausrichtung (ersetzt „Nebel“). Vorbild ist die Gestaltung von
[Ronny](https://ronny-erklaert.vercel.app/): freundliche Alltags-Technik statt Kontrollzentrum.
Varianten-Vergleich: `preview/hausmeister-varianten.html` (gewählt: 1 hell + 3 dunkel).

## Grundhaltung
- **Ein Hausmeister, kein Leitstand.** Ruhig, aufgeräumt, freundlich; Technik ist sichtbar
  verlässlich, aber nicht laut.
- **Nur native Home-Assistant-Mittel.** Ausschließlich Theme-Variablen: kein card-mod, keine
  geladenen Schriften, keine Spezialkarten. Das Theme überlebt jedes HA-Update.

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

## Grenzen der nativen Umsetzung
- Gefüllte Icons (Ronnys gelbes Gesicht) gehen nicht: Die Tile-Karte setzt die 20-%-Deckkraft
  des Icon-Hintergrunds fest. Aktiv heißt deshalb: getönte Fläche, farbiges Icon. Im Hellmodus
  nutzt Amber darum das dunklere `#B97A12`, damit Icons lesbar bleiben.
- Engere Laufweite für Überschriften ist per Theme nicht einstellbar.

## Nutzungskontext
- **Smartphone (Companion App)** und **Wandtablet**: gut lesbar aus Distanz, der Dunkelmodus ist
  nachts blendfrei.
- **Karten:** Das Dashboard „Zuhause“ nutzt Standard-HA-Karten (Tile, Heading, Badges, Markdown,
  Statistik- und Verlaufsgraphen) sowie die Flower-Card.

## Offen
- [ ] Hintergrund: einfarbig (aktuell) oder dezenter Verlauf
