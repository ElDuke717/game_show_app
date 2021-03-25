/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
let gameState;
const title = document.querySelector('.title');
//const querty = document.getElementById('qwerty');
//const btnReplay = document.createElement('a');

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = this.getRandomPhrase();
        //we need to figure out how to start the game out with this being null
    }
    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */
    createPhrases() {
        const phrases = [
            new Phrase ("Perseverence landing on Mars"),
            new Phrase ("Buy some DogeCoin"),
            new Phrase ("Time to get vaccinated"),
            new Phrase ("Listen in on Clubhouse"),
            new Phrase ("Vanilla JavaScript can do a lot"),
            new Phrase ("Blinded by the light"),
            new Phrase ("GME to the moon"),
            new Phrase ("So long and thanks for all the fish"),
            new Phrase ("Facebook is spying on you"),
            new Phrase ("So much room for activities"),
            new Phrase ("Do not eat too much cheese"),
            ];
            return phrases;
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
     startGame() {
        document.getElementById("overlay").style.display = "none";
        this.getRandomPhrase().addPhraseToDisplay();
        //showMatchedLetter calls the checkLetter function
        //this.getRandomPhrase().showMatchedLetter();
    }
    
    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */
    getRandomPhrase() {
        const rand = (Math.floor(Math.random(this.phrases.length)*this.phrases.length));
        return this.phrases[rand];
    };
    handleInteraction() {
        // qwerty.addEventListener('click', e => {
        //         if (e.target.className === 'key') {
        //         e.target.disabled = true;
        //     }
        //     this.getRandomPhrase.showMatchedLetter();
            
        // });
    }
    checkForWin() {
        const letterLi = document.querySelectorAll('.letter');
        const showLi = document.querySelectorAll('.show');
        if (letterLi.length === showLi.length) {
            console.log('A Win!');
            gameState = 'win'
            this.gameOver(gameState);
        } else if (missed >= 5) {
            console.log('A Loss 😢');
            gameState = 'loss'
            this.gameOver(gameState);
        }
        return missed;
    }
    /** removeLife checks for matches.  If a match is made, then no hearts are
     * lost.  If match is null, returned by the checkLetter method (on the phrase
     * class), the missed number is incremented and are replaced with another image.
     */
    
    removeLife(match) {
        if (match === null) {
            missed++ ;
            let hearts = document.querySelectorAll('img');
            hearts[missed - 1].src = 'images/angrypoop.png';
        }
    }
    gameOver() {
        if (gameState === 'win') {
            overlay.style.display = 'flex';
            overlay.classList.add('win');
            title.textContent = 'You Win!';
            document.querySelector('.description').innerHTML = `Nice job!`;
            btnReset.textContent = 'Play Again?'
            btnReset.addEventListener ('click', () => {
                document.location.reload(true);
            });
        } else {
            overlay.style.display = 'flex';
            overlay.classList.add('lose');
            title.textContent = 'You lost 😟'
            //add way to add larger angrypoop image here.
            document.querySelector('.such-wow').textContent = 'Try Again?';
            document.querySelector('.description').style.display = 'none';
            btnReset.textContent = 'Play Again';
            btnReset.addEventListener ('click', () => {
                document.location.reload(true);
            });
        }
    }


}