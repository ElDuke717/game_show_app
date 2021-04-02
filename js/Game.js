/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
/**gameState is initialized here and will be set to 'win' or 'lose' depending on the outcome of the game's logic */
let gameState;

class Game {
    constructor() {
        /**@param {number} missed - keeps track of the wrong letters and is incremented by checkLetter if
        * a wrong letter is chosen.*/
        this.missed = 0;
        /**@param {callback} this.createPhrases contains a set of phrases to be chosen*/
        this.phrases = this.createPhrases();
        /**@param {string} this.activePhrase will hold the phrase chosen at random for the game. */
        this.activePhrase = null;
    }
    /**Creates phrases for use in game
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
    * Begins game by hiding the game start overlay and then selecting a random phrase via getRandomPhrase() 
    * and displaying it to user via addPhraseToDisplay() on the Phrase object.
    */
    startGame() {
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    
    /**
    * Returns a random phrase from phrases property.
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const rand = (Math.floor(Math.random(this.phrases.length)*this.phrases.length));
        return this.phrases[rand];
    };
    /**@method handleInteraction receives a letter as a string from the qwerty or keyboard inputs.  It 
     * then compares the key value string with the string value of the qwerty onscreen keyboard.  If 
     * there's a match, the letter HTML button item gets the class "chosen" and associated key object 
     * is passed to the checkLetter method on the Phrase class. It receives a boolen from @checkLetter
     * and uses this input to call @showMatchedLetter if true and @removeLive and add the classList wrong
     * if false.  Lastly, it calls @checkForWin to see if the game has ended in a win or loss. 
     * @param (key) - a string passed in from app.js from either the qwerty or keyboard event listeners
      */
    handleInteraction(key) {
        const keys = document.querySelectorAll('.key');
        /**This for loop loops over the keys on the screen and matches the string letter pressed by the 
         * player to the letters on the on screen keyboard. 
         */
        for ( let i = 0; i < keys.length; i++ ) {
            if (keys[i].textContent === key) {
                keys[i].disabled = 'true';
            }
        }
        /**This if statement calls the checkletter method on the phrase object and calls @showMatchedLetter
         * if @checkedLetter returns true and calls the removeLife method if it's false.  It also initiates the 
         * loop to test if the string key matches the key in the qwerty keyboard, if it does, it adds the "wrong"
         * class to the letter, turning it orange.
         */
        if (this.activePhrase.checkLetter(key)) {
            for ( let i = 0; i < keys.length; i++ ) {
                if (keys[i].textContent === key) {
                    keys[i].classList.add('chosen')
                }
            }
            this.activePhrase.showMatchedLetter(key)
            this.checkForWin()
            if (gameState === 'win') {
                this.gameOver()
            }
            } else {
            this.removeLife(); 
            /**Similar to the above loop, this for loop runs if checkLetter returns false.  It loops over the 
            * keys on the screen and adds the wrong class to the letter element.
            */
            for ( let i = 0; i < keys.length; i++ ) {
                if (keys[i].textContent === key) {
                    keys[i].classList.add('wrong');
                }
            }
            }  
    }
    /**checkForWin sets the gameState variable to 'win' if the amount of letters in the phrase
     * @param letterLi is equal to @param showLi, the amount of letters picked during the game.
     */

    checkForWin() {
        const letterLi = document.querySelectorAll('.letter');
        const showLi = document.querySelectorAll('.show');
        if (letterLi.length === showLi.length) {
            gameState = 'win'
        }
    }
    /** @removeLife is called by @handleInteraction and increments the missed variable when called and 
     * changes the heart icons. If missed is greater than or equal to 5, then the gameState is set to 
     * 'lose' and @gameOver() is calledd
     */
    removeLife() {
        this.missed++
        let hearts = document.querySelectorAll('img');
        hearts[this.missed - 1].src = 'images/angrypoop.png';
        if (this.missed >= 5) {
            gameState = 'lose'
            this.gameOver();
        }
    }

    /**gameOver is called by either @handleInteraction or @removeLife and checks the @param gameState to 
     * see if it's a win or not.  If it's win, then the code for the 'win' overlay is displayed.  Otherwise, 
     * the overlay for 'lose' overlay is displayed.
     */
    gameOver() {
        const title = document.querySelector('.title');
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
        } else if (gameState === 'lose') {
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