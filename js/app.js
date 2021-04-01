/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**btnReset is the button on the start game overlay.  When pressed, it calls the startGame method
 * on the Game class.
 */

const btnReset = document.getElementById('btn__reset');
let game;
let letterArray =[];

/**Starts a new game */
btnReset.addEventListener('click', () => {
    game = new Game();
//Does this need to just start with the instantiation of new Game?
    game.startGame();
});

/**both event listeners return the letter as a string - player can use the keyboard onscreen
 * or their physical keyboard. */
qwerty.addEventListener('click', e => {
    console.log(e.target.textContent);
    game.handleInteraction(e.target.textContent);
});

//Need to come back and fix the keypress event on this section
document.addEventListener('keydown', e => {    
    /**This logic determines if a key has been pressed already, if not, it passes the letter 
     * string to handleInteraction on the game class and pushes the letter to letterArray.  
     * Each letter is then stored to letterArray, so it won't register multiple times.
     */
    !letterArray.includes(e.key) ? game.handleInteraction(e.key) : "";
    letterArray.push(e.key);
    console.log(letterArray);
    console.log(letterArray.includes(e.key) ? "yes" : "no");
    
});
        