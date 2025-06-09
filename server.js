const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 8000;

// Aktivera CORS för alla routes
app.use(cors());

// Servera statiska filer från nuvarande katalog
app.use(express.static(__dirname));

// Hantera alla GET requests
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Starta servern
app.listen(port, () => {
    console.log(`Server körs på http://localhost:${port}`);
    console.log('Tryck Ctrl+C för att stoppa servern');
}); 