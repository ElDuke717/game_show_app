/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startScreen = document.querySelector(".start");
const btnReset = document.getElementById('btn__reset');

btnReset.addEventListener('click', () => {
    startScreen.style.display = "none";
});

const phrases = [
    "Perseverence landing on Mars",
    "Buy some DogeCoin",
    "Time to get vaccinated",
    "Listen in on Clubhouse",
    "Vanilla JavaScript can do a lot",
    "The Weeknd Blinding Lights",
    "Astronaut in the Ocean",
    "Chris Brown Go Crazy",
    "Social Distancing",
    "Wear your mask",
    "I got blisters on my fingers!",
    "Chevelle Niratias"
];

//This returns a random phrase from the phrases array, then makes an array from
//the phrases' letters. 
const getRandomPhraseAsArray = arr => {
    let rand = (Math.floor(Math.random(phrases.length)*phrases.length));
    return phrases[rand].split('');
}

//const phrase = new Phrase('I got blisters on my fingers!');

//console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();