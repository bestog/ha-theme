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
- **Karten:** Standard-HA-Karten (Tile, Thermostat, Entities …) und **Mushroom Cards**.
  Das Theme muss beide über Variablen sauber abdecken.

## Entscheidungen
- [x] **Variante B „Nebel“**: heller, weicher, zurückhaltend → `themes/nebel.yaml`
- [x] Kontrast: alle Text-/Icon-Farben auf WCAG AA geprüft. Dafür wurden im Light Mode
      Sekundärtext (`#616C7C`) und Amber (`#BA7E34`) etwas abgedunkelt.
- [x] Dark Mode ohne Karten-Schatten (nachts blendfrei, Tiefe kommt über Helligkeitsstufen).

## Offene Entscheidungen
- [ ] Schrift laden (benötigt Frontend-Ressource bzw. card-mod) oder System-Fallback
- [ ] Hintergrund: einfarbig, sanfter Verlauf oder Bild
