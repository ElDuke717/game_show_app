/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
        "Perseverence landing on Mars",
        "Buy some DogeCoin",
        "Time to get vaccinated",
        "Listen in on Clubhouse",
        "Vanilla JavaScript can do a lot",
        "The Weeknd Blinding Lights",
        "Astronaut in the Ocean",
        "Chris Brown Go Crazy",
        "I got blisters on my fingers!",
        "Chevelle Niratias"
        ];
        this.activePhrase = this.createPhrases();
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const rand = (Math.floor(Math.random(this.phrases.length)*this.phrases.length));
        return this.phrases[rand];
    };
}