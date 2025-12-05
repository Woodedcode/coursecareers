const arr = [1,2,3,4,5,6]

// MAP
// const squares = arr.map((x) => x ** 2)
// console.log(squares)

// MAP WRITTEN OUT
// function map(arr, func) {
//     const newArr = [];

//     for (const value of arr) {
//         const newValue = func(value);
//         newArr.push(newValue);
//     }
//     return newArr
// }

// const result = map(arr, (x) => x ** 2);
// console.log(result)


// FILTER

// const filteredArr = arr.filter((value) => value % 2 == 0)
// console.log(filteredArr)

// FILTER WRITTEN OUT
// function filter(arr, func) {
//     const newArr = [];

//     for (const value of arr) {
//         if (func(value)) {
//             newArr.push(value)
//         }
//     }
//     return newArr
// }


// const result = filter(arr, (x) => x % 2 == 0);
// console.log(result)



// REDUCE

// const sum = arr.reduce((prev, current) => prev + current);
// console.log(sum);

// function reduce(arr, func) {
//     let currentResult = 0;

//     for (const num of arr) {
//         currentResult = func(currentResult, num);
//     }
//     return currentResult
// }


// const result = reduce (arr, (prev,next) => prev - next);
// console.log(result)



