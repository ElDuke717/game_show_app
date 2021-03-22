/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase ("Perseverence landing on Mars"),
            new Phrase ("Buy some DogeCoin"),
            new Phrase ("Time to get vaccinated"),
            new Phrase ("Listen in on Clubhouse"),
            new Phrase ("Vanilla JavaScript can do a lot"),
            new Phrase ("Blinded by the light"),
            new Phrase ("GME to the moon"),
            new Phrase ("So long and thanks for all the fish"),
            new Phrase ("Facebook is spying on you"),
            new Phrase ("So much room for activities"),
            ];
            return phrases;
    };
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const rand = (Math.floor(Math.random(this.phrases.length)*this.phrases.length));
        return this.phrases[rand];
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        document.getElementById("overlay").style.display = "none";
        this.getRandomPhrase().addPhraseToDisplay();
        this.getRandomPhrase().checkLetter();
    }
}