# Design-Brief: HA Theme

Geschmacksprofil, ermittelt im Gespräch (Runde 1–2). Grundlage für alle Theme-Entscheidungen.

## Grundhaltung
- **Wohnlich statt technisch.** Das Dashboard soll sich nach Zuhause anfühlen, nicht nach Serverraum.
- **Modern, ruhig, hochwertig.** Kein Effekt-Feuerwerk (kein Glassmorphism, keine Neon-Kanten).

## Farbe
- **Basis:** gedämpftes, rauchiges Blaugrau, kein reines Grau und kein Beige.
- **Akzent:** Indigo/Blau für aktive Zustände, Auswahl, primäre Aktionen.
- **Wärme in Details:** Amber für Licht, Heizung und Energie. Das ist der „wohnliche“ Gegenpol.
- **Modi:** Light **und** Dark, automatischer Wechsel nach System.

## Form & Typo
- **Radius:** moderat, ca. 14px für Karten und kleiner für Buttons/Chips.
- **Schrift:** geometrisch-freundlich, Favorit *Plus Jakarta Sans* (Alternative: Manrope).
- Klare Hierarchie: große, kräftige Werte (Temperatur, Status), ruhige Sekundärtexte.

## Nutzungskontext
- **Smartphone (Companion App)** und **Wandtablet**: Touch-Ziele ≥ 44px, gut lesbar aus Distanz,
  Dark Mode muss nachts blendfrei sein.
- **Karten:** Das Dashboard „Zuhause“ nutzt fast nur Standard-HA-Karten (Tile, Heading,
  Badges, Markdown, Statistik- und Verlaufsgraphen) sowie die Flower-Card. Mushroom ist
  installiert, aber nicht im Einsatz; das Theme deckt es nur noch minimal ab (Formen, Touch-Ziele).

## Entscheidungen
- [x] **Variante B „Nebel“**: heller, weicher, zurückhaltend → `themes/nebel.yaml`
- [x] Kontrast: alle Text-/Icon-Farben auf WCAG AA geprüft. Dafür wurden im Light Mode
      Sekundärtext (`#616C7C`) und Amber (`#BA7E34`) etwas abgedunkelt.
- [x] Dark Mode ohne Karten-Schatten (nachts blendfrei, Tiefe kommt über Helligkeitsstufen).
- [x] **Eine Bedeutung pro Farbton** (nach `/impeccable critique`):
      Amber = nur Licht & Wärme · Ziegelrot = Achtung (offenes Fenster/Tür, Warnung) ·
      Alarmrot = Fehler/Alarm · Indigo = sonstige aktive Zustände. Die HA-Farbnamen
      (`color: orange/red/green …` im Dashboard) sind auf diese Palette gelegt.
- [x] **Werte vor Namen:** In Kacheln ist der Zustand (z. B. 21,5 °C) 15px halbfett,
      der Name 13px; lesbar aus Distanz am Wandtablet.
- [x] **Hellmodus spürbar wärmer:** Karten `#FFFDF8`, Hintergrund `#EFEEEA`; die blaugraue
      Schrift hält den Nebel-Charakter.
- [x] Aktive Kacheln: im Hellmodus 10 % Tönung, im Dunkelmodus 5 % plus feiner 1px-Rand
      (stärkere Tönung wirkte auf Blaugrau schlammig).

## Offene Entscheidungen
- [ ] Schrift laden (benötigt Frontend-Ressource bzw. card-mod) oder System-Fallback
- [ ] Hintergrund: einfarbig, sanfter Verlauf oder Bild
