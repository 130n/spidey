import { speakText } from './speakText.js';

window.spidey = {};

function loadVoices() {
    window.spidey.voices = window.speechSynthesis.getVoices();
    return window.spidey.voices;
}

// Lyssna på när rösterna är klara
if ("onvoiceschanged" in window.speechSynthesis) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
} else {
    loadVoices();
}

function readWelcomeMessage() {
    // Hämta texten från välkomstmeddelandet
    const welcomeText = document.querySelector('.welcome-message').innerText;
    speakText(welcomeText);
}

function readHeroDescription(hero) {
    const heroDescription = document.querySelector(`.hero-card[data-hero="${hero}"] .description`).innerText;
    speakText(heroDescription);
}

function readCurrentHeroDescription() {
    const currentHero = document.querySelector('.hero-card');
    if (currentHero) {
        speakText(document.querySelector('.hero-card').innerText);
    } else {
        readWelcomeMessage();
    }
}

function scrollToHeroes() {
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
}


// Gör funktionerna tillgängliga globalt
window.spidey.readCurrentHeroDescription = readCurrentHeroDescription;
window.spidey.readWelcomeMessage = readWelcomeMessage;
window.spidey.scrollToHeroes = scrollToHeroes;

// Säkerställ att DOM är laddad innan vi försöker använda funktionerna
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, functions are now available');
});