/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById('btn__reset');


const game = new Game();

btnReset.addEventListener('click', () => {
    game.startGame();
});


