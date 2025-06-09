
function configureSpeech(text, options = { lang: 'sv-SE' }) {
    // Kontrollera om webbläsaren stödjer tal
    if (!window.speechSynthesis) {
        console.error('Din webbläsare stödjer inte tal');
        return;
    }
    const speech = new SpeechSynthesisUtterance(text);
    speech.voice = window.spidey.voices.find(v => v.lang === options.lang);
    speech.rate = 1.0;
    speech.volume = 1.0;
    speech.pitch = 1.0;
    return speech;
}

export function speakText(text) {
    const utterance = configureSpeech(text);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
    // Lägg till felhantering
    utterance.onerror = (event) => {
        console.error('Ett fel uppstod vid tal:', event);
    };
}