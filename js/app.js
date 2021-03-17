/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startScreen = document.querySelector(".start");
const btnReset = document.getElementById('btn__reset');

btnReset.addEventListener('click', () => {
    startScreen.style.display = "none";
});


/*
//This returns a random phrase from the phrases array, then makes an array from
//the phrases' letters. 
const getRandomPhraseAsArray = arr => {
    let rand = (Math.floor(Math.random(phrases.length)*phrases.length));
    return phrases[rand].split('');
}
*/
//const phrase = new Phrase('I got blisters on my fingers!');

//console.log(`Phrase - phrase: ${phrase.phrase}`);

const game = new Game();

game.phrases.forEach((phrase, index)=> {
    console.log(`Phrase ${index} - phrase: ${game.phrases[index]}`);
});