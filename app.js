//import DOM and functions
import compareNumbers from './guessUtils.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const winLose = document.getElementById('win-lose');
const guessWas = document.getElementById('guess-was');
//const hide = document.getElementById('hideMe');

//initialize state
const correctNumber = Math.ceil(Math.random() * 20);
let remainCount = 4;

//everything else

button.addEventListener('click', () => {
    //convert guess to number
    //console.log(input.value);
    const userGuess = Number(input.value);
    //compare guess with compareNumbers
    const newResults = compareNumbers(userGuess, correctNumber);
    //guess too high or low? display message, decriment score
        //too low
    if (newResults === -1) {
        remainCount--;
        //display message, change view
        triesRemaining.textContent = (`${remainCount} tries remaining.`);
        guessWas.textContent = `Your guess was too low.`;
    }
        //too high
    if (newResults === 1) {
        remainCount--;
        triesRemaining.textContent = (`${remainCount} tries remaining.`);
        guessWas.textContent = `Your guess was too high.`;
        //display message, change view
    }
    if (remainCount === 0) {
        winLose.textContent = 'You Lose!';
        //disable game
        document.getElementById('hideMe').style.visibility = 'hidden';
    }
    if (newResults === 0) {
        winLose.textContent = 'You Win!';
        //end the game
        document.getElementById('hideMe').style.visibility = 'hidden';
    }
});
