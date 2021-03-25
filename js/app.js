/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById('btn__reset');
const querty = document.getElementById('qwerty');

const game = new Game();

btnReset.addEventListener('click', () => {
    game.startGame();
});

qwerty.addEventListener('click', e => {
    if (e.target.className === 'key') {
        e.target.disabled = true;
        console.log('blob');
    }
});
