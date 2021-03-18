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
        const getPhrase = game.getRandomPhrase();
        console.log(getPhrase);
        const makePhraseAnArray = (str)=> getPhrase.split('');
        console.log(makePhraseAnArray(getPhrase));
        const letterList = document.querySelector('#phrase ul');
        const numberOfListItems = addPhraseAsArray.length;
    //this loop goes through and adds a list item with a letter for each letter from
    //the random phrase.    
        for (let i = 0; i < numberOfListItems; i++) {
            let listItem = document.createElement('li');
            listItem.textContent = makePhraseAnArray [i];
            letterList.appendChild(listItem);
    //This if statement tests whether the character is a letter or space, then adds it
    //as a classname.      
            if(listItem.textContent !== ' ') {
                listItem.className = 'letter';
            } else {
                listItem.className = 'space';
            }
        } 
    }
    // }
    // checkLetter() {

    // }
    // showMatchedLetter() {
        
    // }
}

