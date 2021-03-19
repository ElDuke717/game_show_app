/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

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
    /**Checkletter cross-checks the letters from the keyboard against the letters
     * in the phrase and adds the class "show" to phrase letters that have had their
     * corresponding keys pressed.
     */
    checkLetter() {
        const letterKey = document.querySelectorAll('.key');
        const letterLi = document.querySelectorAll('.letter');
        const match = null;
    
        /**This for loop iterates over the letters of the phrase and checks to if the
         * corresponding qwerty keyboard letter pressed is in the phrase. */
        
        for (let i = 0; i < letterLi.length; i++) {
            const letters = letterLi[i];
            const keys = letterKey[i].textContent;
            const letterMatch = letters.textContent.toLowerCase();
            if (keys === letterMatch) {
                letters.classList.add('show');
                match = true;
            }  
        }
    return match;
    }
    // showMatchedLetter() {
        
    // }
}

