/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const overlay = document.querySelector('#overlay');
let gameState;
const title = document.querySelector('.title');
const querty = document.getElementById('qwerty');


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
            new Phrase ("Buy some DogeCoin"),
            new Phrase ("Time to get vaccinated"),
            new Phrase ("Poop emoji"),
            new Phrase ("Vanilla JavaScript"),
            new Phrase ("Blinded by the light"),
            new Phrase ("Internet memes"),
            new Phrase ("SpaceX rocket launch"),
            new Phrase ("Clubhouse app"),
            new Phrase ("Bernies mittens"),
            new Phrase ("Dolly Parton"),
            ];
            return phrases;
    };
    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
     startGame() {
        document.getElementById("overlay").style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
        //showMatchedLetter calls the checkLetter function
        this.handleInteraction();
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
        qwerty.addEventListener('click', e => {
            if (e.target.className === 'key') {
                console.log(e.target.textContent);
                e.target.disabled = true;
                e.target.classList.add('chosen');
                this.activePhrase.checkLetter(e.target);
            }
            this.removeLife()
            this.checkForWin()
        });
        
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
     * lost.  If missed is greater than or equal to 1, returned by the checkLetter 
     * method (on the phrase class), the heart image is replaced with another image.
     */
    
    removeLife() {
        if (missed >= 1) {
        console.log(missed);
        let hearts = document.querySelectorAll('img');
        hearts[missed - 1].src = 'images/angrypoop.png';
        }
    }
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