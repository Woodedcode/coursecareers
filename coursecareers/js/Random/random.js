function randomNum(min,max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let num = randomNum(1,100);
let numGuesses = 0;

function reset() {
    num = randomNum(1,100);
    numGuesses = 0;
    document.getElementById("num-guesses").innerHTML = 0
}

function makeGuess() {
    const guessInput = document.getElementById("guess");
    const guess = Number(guessInput.value);
    guessInput.value = ""
    const feedback = document.getElementById("feedback");

    numGuesses++;
    document.getElementById("num-guesses").innerHTML = numGuesses

    if (guess === num) {
        feedback.innerHTML = "You guessed it!";
        reset()
    } else {
        feedback.innerHTML = "You did not guess it!";
    }
}









// RANDOM

// const num = Math.round(Math.random() * 10)
// console.log(num)
// BETWEEN 10 - 20
// const num = 10 + Math.round(Math.random() * 10)
// console.log(num)



// function randomNum (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// const num = randomNum(20,80)
// console.log(num)






















