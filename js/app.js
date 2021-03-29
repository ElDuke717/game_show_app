/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**btnReset is the button on the start game overlay.  When pressed, it calls the startGame method
 * on the Game class.
 */

const btnReset = document.getElementById('btn__reset');
const game = new Game();


/**Starts a new game */
btnReset.addEventListener('click', () => {
    game.startGame();
});

