# Superhjältesidan Ymer

En interaktiv webbsida för barn som visar olika superhjältar från Marvel och DC Comics.

## Funktioner

- Interaktiv meny med superhjältar från Marvel och DC
- Talfunktion som läser upp beskrivningar
- Responsiv design som fungerar på alla enheter
- Komisk bok-inspirerad design

## Installation

1. Se till att du har [Node.js](https://nodejs.org/) installerat på din dator
2. Klona eller ladda ner detta projekt
3. Öppna en terminal i projektmappen
4. Installera beroenden genom att köra:
   ```bash
   npm install
   ```

## Starta servern

1. I projektmappen, kör:
   ```bash
   npm start
   ```
2. Öppna din webbläsare och gå till:
   ```
   http://localhost:8000
   ```

## Utveckling

- `index.html` - Huvudfilen med HTML-struktur
- `styles.css` - Stilmallar för sidan
- `index.js` - Huvudlogik för sidan
- `speakText.js` - Hanterar talfunktionalitet
- `server.js` - Node.js server för utveckling

## Teknisk information

- Använder Express.js som webbserver
- CORS är aktiverat för utveckling
- Statiska filer serveras från projektmappen
- Port 8000 används som standard

## Stoppa servern

Tryck `Ctrl+C` i terminalen där servern körs. 