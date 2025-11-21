// works just like a for loop, you just don't konw many times it will run
// could take 10,20, and 100 iterations
// while loops is a base type of loop
// used when unsure of how many times it needs to be ran
// let i = 0

// while (i < 10) {

//     console.log(i);
//     i++
// }

// while
// do while


// let number;
// do { 
//     number = Number(prompt("Enter a number between one and ten..."))
// } while (!(number >= 1 && number <= 10));

// console.log(number)


// break statement
let number;
while (true) {
    const number = Number(prompt("Enter a number between one and ten..."));
    if (number >= 1 && number <= 10) break;
}

console.log(number)