/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

const querty = document.getElementById('qwerty');
const letterLi = document.querySelectorAll('.letter');
let missed = 0;

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }
    /**
    * Display phrase on game board
    */ 
    addPhraseToDisplay() {
    /**The random phrase from the game class' activePhrase provided by the getRandomPhrase object obtained from getRandomPhrase is
     * is split into individual characters and added to an array via the split method */
        const getPhraseArray = game.activePhrase.phrase.split('');
        console.log(getPhraseArray);
        const letterList = document.querySelector('#phrase ul');
        const numberOfListItems = getPhraseArray.length;
    //this loop adds a list item with a letter for each letter from the random phrase.    
        for (let i = 0; i < numberOfListItems; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = getPhraseArray[i];
            letterList.appendChild(listItem);
    /**This if statement tests whether the character is a letter or space, then adds it
     * as a classname.  The classname tells the CSS how to render each in the HTML*/      
            if(listItem.textContent !== ' ') {
                listItem.className = 'letter';
            } else {
                listItem.className = 'space';
            }
        } 
    }
    //}
    /**Checkletter listens for the click on the qwerty keyboard and then
     * cross-checks the letters from the keyboard against the letters
     * in the phrase and adds the class "show" to phrase letters that have had their
     * corresponding keys pressed.  It returns a Boolean.
     */
    checkLetter(button) {
        const letterLi = document.querySelectorAll('.letter');
        console.log(button)
        let match = null;
    
        /**This for loop iterates over the phrase and matches selected letters with
         * phrase letters.
         */
        for (let i = 0; i < letterLi.length; i++) {
            let letters = letterLi[i];
            if (button === letters.textContent) {
                letters.classList.add('show');
                match = true;
            }  
    }
    return match;
    }
        
        //do we need to separate the event listener from the showMatchedLetter?
    /**showMatchedLetter method has the keyboard listener built into it that listens
     * for keypresses on the screen qwerty keyboard.  When a key is pressed, the class
     * chosen is added to the target letter.  It then calls the checkLetter method via
     * the match variable - the match is then passed to the removeLife method.
     */
    showMatchedLetter() {
        qwerty.addEventListener('click', e => {
            if (e.target.className === 'key') {
                e.target.disabled = true;
                e.target.classList.add('chosen');
                let match = this.checkLetter(e.target.textContent);
                console.log(e.target.textContent);
                console.log(match);
                game.removeLife(match);
            }
          game.checkForWin();
          
        });
    }
    
    
}