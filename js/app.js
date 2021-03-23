/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//const querty = document.getElementById('qwerty');

const game = new Game();

document.getElementById('btn__reset').addEventListener('click', () => {
    game.startGame();
});


// const letterKey = document.querySelectorAll('.key')[0].textContent;
// console.log(letterKey);

//console.log(document.querySelectorAll('.key')[0].textContent);
//console.log(document.querySelectorAll('.letter'));

//console.log(querty);

// querty.addEventListener('click', e => {
//     if (e.target.tagName === 'BUTTON'){
//         console.log(e.target.innerHTML);
//     }
// })