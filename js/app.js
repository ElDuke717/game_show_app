/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startScreen = document.querySelector(".start");
const btnReset = document.getElementById('btn__reset');

btnReset.addEventListener('click', () => {
    startScreen.style.display = "none";
});

//const game = new Game();

// game.phrases.forEach((phrase, index)=> {
//     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
// });

// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.phrase);
//     };
//     const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();