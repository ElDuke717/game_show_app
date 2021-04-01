/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/**btnReset is the button on the start game overlay.  When pressed, it calls the startGame method
 * on the Game class.
 */

const btnReset = document.getElementById('btn__reset');
//const querty = document.getElementById('qwerty');
let game;


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
    const gamePhraseArray = game.activePhrase.phrase.split('')
    console.log(gamePhraseArray);
    console.log(gamePhraseArray.includes(e.key));
    game.handleInteraction(e.key);
    console.log(e.key);
    const keys = document.querySelectorAll('.key');
    const chosen = document.querySelectorAll('.chosen')
        console.log(e.key)
        console.log(chosen);
        for ( let i = 0; i < keys.length; i++ ) {
            if (keys[i].textContent === e.key) {
                keys[i].disabled;                
            }
        }
});
        