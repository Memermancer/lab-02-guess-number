export default function compareNumbers(guess, correctNumber) {
    if (guess === correctNumber) {
        
        //winner
        return 0;

    } else if (guess < correctNumber) {

        //less than
        return -1;

    } else if (guess > correctNumber) {

        //greater than
        return 1;
    }
}