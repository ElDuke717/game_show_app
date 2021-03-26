/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


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
        const getPhraseArray = game.activePhrase.phrase.split('');
        
        if (!getPhraseArray.includes(button.textContent)) {
            button.classList.add('wrong');
            button.classList.remove('chosen');
            missed++
            console.log(missed);
        } else {
            this.showMatchedLetter(button);
        }
    }
        
    /**showMatchedLetter method has the keyboard listener built into it that listens
     * for keypresses on the screen qwerty keyboard.  When a key is pressed, the class
     * chosen is added to the target letter.  It then calls the checkLetter method via
     * the match variable - the match is then passed to the removeLife method.
     */
    showMatchedLetter(button) {
        const letterLi = document.querySelectorAll('.letter');
        console.log(button.textContent);
        //console.log(letterLi);
        for (let i = 0; i < letterLi.length; i++) {
            let letters = letterLi[i];
            if (button.textContent === letters.textContent ) {
                letters.classList.add('show');
            }
        }

        
        
    }
          
        
        
    
    
    
}