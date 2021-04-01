/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


class Phrase {
    constructor(phrase) {
        /**@param phrase sets the randomly chosen phrase to lowerCase */
        this.phrase = phrase.toLowerCase();
    }
    /**
    *@addPhraseToDisplay is called by startGame and displays the phrase on game board.
    */ 
    addPhraseToDisplay() {
    /**The random phrase from the game class' activePhrase provided by the @getRandomPhrase object
     * is split into individual characters and added to an array via the split method */
        const getPhraseArray = game.activePhrase.phrase.split('');
        const letterList = document.querySelector('#phrase ul');
        const numberOfListItems = getPhraseArray.length;
        console.log(getPhraseArray);
    /**this loop creates an HTML list item for each letter from the activePhrase phrase. */   
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
    /**Checkletter is called by handleInteraction and accepts 
     * @param {string} key  - the letter from the keyboard interaction.  It cross-checks 
     * the letters from the keyboard against the letters in the phrase and adds the class "show" 
     * to phrase letters that have had their corresponding keys pressed.  
     * @returns {boolean} that is used by handleInteraction.
     */
    checkLetter(key) {
        const gamePhraseArray = game.activePhrase.phrase.split('')
        let match = null;
        gamePhraseArray.includes(key) ? match = true : match = false;
        return match;
    };
    
    /**showMatchedLetter method is called if @checkLetter returns true.
     * @param {string} key  - the letter from the keyboard interaction.  
     * chosen is added to the target letter. 
     */
    showMatchedLetter(key) {
        const letterLi = document.querySelectorAll('.letter');
        for (let i = 0; i < letterLi.length; i++) {
            let letters = letterLi[i];
            if (key === letters.textContent ) {
                letters.classList.add('show');
            }
        }  
    }  
}