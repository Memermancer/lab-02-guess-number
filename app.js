//import DOM and functions
import compareNumbers from './guessUtils.js';

const input = document.getElementById('number-input');
const button = document.getElementById('submit-button');
const triesRemaining = document.getElementById('tries-remaining');
const winLose = document.getElementById('win-lose');
const body = document.getElementById('main-body');
const resultsSection = document.getElementById('results-section');
const resetButton = document.getElementById('reset');

//initialize state
const correctNumber = Math.ceil(Math.random() * 20);
let remainCount = 4;

//everything else

button.addEventListener('click', () => {
    //convert guess to number
    console.log(input.value);
    const userGuess = Number(input.value);
    //compare guess with compareNumbers
    const newResults = compareNumbers(userGuess, correctNumber);
    //guess too high or low? display message, decriment score
        //too low
        if (newResults = -1) {
            remainCount--
            //display message, change view
            }
        //too high
        if (newResults = 1) {
            remainCount--
            //display message, change view
        }
        if (remainCount = 0) {
            //lose game message and disable game
        }
        if (newResults = 0) {
            //display win message and end the game
        }
        }
    
    



});
