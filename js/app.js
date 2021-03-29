/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const btnReset = document.getElementById('btn__reset');


const game = new Game();

btnReset.addEventListener('click', () => {
    game.startGame();
});

// document.addEventListener('keydown', e => {
//     //const key = document.querySelector('.key')
//     console.log(e.key);
// })

// document.addEventListener('keydown', e => {
// const keys = document.querySelectorAll('key');
//     for ( let i = 0; i < keys.length; i++ ) {
//         if (e.key === keys[i]) {
//             keys[i].disabled = true;
//             keys[i].classList.add('chosen');
//             this.activePhrase.checkletter(e.key)
//         }
//     }
// });