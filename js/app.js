/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**btnReset is the button on the start game overlay.  When pressed, it calls the startGame method
 * on the Game class.
 */
const btnReset = document.getElementById('btn__reset');

/**game variable is set so that the game can be initiated. */
let game;

/**qwerty selects the html buttons in the qwerty keyboard */
const qwerty = document.getElementById('qwerty')

/**letterArray holds the letters that are the result of qwery onscreen or the physical keyboard */
let letterArray =[];

/**Starts a new game */
btnReset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

/**qwerty onscreen and physical keyboard event listeners.  Both event listeners return the letter as a string - player 
 * can use the keyboard onscreen
 * or their physical keyboard. */
qwerty.addEventListener('click', e => {
    /**This logic determines if a key has been pressed already by checking if letterArray already contains its letter, 
     * if false, it adds the letter to letterArray then passes the letter to handleInteraction on the game class.  
     * Each letter is stored to letterArray, so it won't register multiple times.
     */
    !letterArray.includes(e.target.textContent) && game.handleInteraction(e.target.textContent);
    !letterArray.includes(e.target.textContent) && letterArray.push(e.target.textContent);
});

/**This keyboard event listener works the same as the above qwerty, except that it receivess input from 
 * the player's physical keyboard.   It uses the same logic as the qwerty onscreen listener.
 */
document.addEventListener('keydown', e => {   
    !letterArray.includes(e.key) && game.handleInteraction(e.key);
    !letterArray.includes(e.key) && letterArray.push(e.key);
});
        