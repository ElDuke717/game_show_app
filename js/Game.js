/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
let gameState;
const title = document.querySelector('.title');
//const querty = document.getElementById('qwerty');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase ("Mars landing"),
            new Phrase ("Spring is here"),
            new Phrase ("Time to get vaccinated"),
            new Phrase ("Poop emoji"),
            new Phrase ("Vanilla JavaScript"),
            new Phrase ("Stimulus checks"),
            new Phrase ("Internet memes"),
            new Phrase ("SpaceX rocket launch"),
            new Phrase ("Social distancing"),
            new Phrase ("Pfizer vaccine"),
            new Phrase ("Electric car"),
            ];
            return phrases;
    };
    /**
    * Begins game by selecting a random phrase via getRandomPhrase() and displaying it to user via
    * addPhraseToDisplay() on the Phrase object.
    */
     startGame() {
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        //startGame calls the handleInteraction method function
        this.handleInteraction();
    }
    
    /**
    * Returns a random phrase from phrases property.
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const rand = (Math.floor(Math.random(this.phrases.length)*this.phrases.length));
        return this.phrases[rand];
    };
    /**handleInteraction holds the keyboard event listener, it listens for a keypress and records
     * a string representing that key.  It then compares the key value string with the string value 
     * of the qwerty onscreen keyboard.  If there's a match, the letter is disabled, it gets the class
     * "chosen" and associated key object is passed to the checkLetter method on the Phrase class.  It 
     * then calls the removeLife() method to see if a life should be removed and checkForWin() to see
     * if the game is over.
      */
    handleInteraction() {
    //qwerty on screen keyboard functionality is commented out, but will work in lieu of player's physical
    //keyboard.
        // qwerty.addEventListener('click', e => {
        //         if (e.target.className === 'key') {
        //             console.log(e.target);
        //             console.log(e.target.textContent);
        //             e.target.disabled = true;
        //             e.target.classList.add('chosen');
        //             this.activePhrase.checkLetter(e.target);
        //         }
        //     });
        document.addEventListener('keydown', e => {
            const keys = document.querySelectorAll('.key');
            for ( let i = 0; i < keys.length; i++ ) {
                if (e.key === keys[i].textContent) {
                    keys[i].disabled = true;
                    keys[i].classList.add('chosen');
                    this.activePhrase.checkLetter(keys[i])
                }
            }
            this.removeLife()
            this.checkForWin()
        });
        
    }
    /**checkForWin sets the gameState variable based on two criteria - if the amount of in the phrase
     * @param letterLi is equal to @param showLi, the amount of letters picked during the game.
     */

    checkForWin() {
        const letterLi = document.querySelectorAll('.letter');
        const showLi = document.querySelectorAll('.show');
        if (letterLi.length === showLi.length) {
            gameState = 'win'
            this.gameOver(gameState);
        } else if (missed >= 5) {
            gameState = 'loss'
            this.gameOver(gameState);
        }
        return missed;
    }
    /** removeLife checks for matches.  If a match is made, then no hearts are
     * lost.  If missed is greater than or equal to 1, returned by the checkLetter 
     * method (on the phrase class), the heart image is replaced with another image.
     */
    removeLife() {
        if (missed >= 1) {
        let hearts = document.querySelectorAll('img');
        hearts[missed - 1].src = 'images/angrypoop.png';
        }
    }

    /**gameOver checks the @param gameState to see if it's a win or not.  If it's win, then the code
     * for the 'win' overlay is displayed.  Otherwise, the overlay for 'lose is called.
     */
    gameOver() {
        if (gameState === 'win') {
            overlay.style.display = 'flex';
            overlay.classList.add('win');
            title.style.visibility = 'hidden';
            const youWin = `<img src="images/you win2(1).png" alt="you win text" class="you-win">`;
            title.insertAdjacentHTML('beforebegin', youWin);
            const happyPoop = `<img src="images/happy_poop.png" alt="happy poop emoji" class="poopy">`;
            title.insertAdjacentHTML('afterend', happyPoop);
            document.querySelector('.description').style.display = `none`;
            btnReset.textContent = 'Play Again?'
            btnReset.addEventListener ('click', () => {
                document.location.reload(true);
            });
        } else {
            overlay.style.display = 'flex';
            overlay.classList.add('lose');
            title.textContent = 'You lost'
            const sadPoop = `<img src="images/sad_poop.png" alt="sad poop emoji" class="poopy">`;
            title.insertAdjacentHTML('afterend', sadPoop);
            document.querySelector('.description').style.display = 'none';
            btnReset.textContent = 'Why Not Try Again?';
            btnReset.addEventListener ('click', () => {
                document.location.reload(true);
            });
        }
    }
}