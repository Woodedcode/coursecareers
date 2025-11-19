// const strs = ["one","two","three"];


// for (const str of strs){
//     console.log(str)
// }

// const [str1, str2, str3] = strs
// console.log(srt1)

// const str1 = "Hello World";
// for (const char of str1) {
//     console.log(char)
// }


// [1,2,3]
//     [4,5,6]
//     [7,8,9]

// const matrix = [];

// for (let i = 0; i < 3; i++){
//     const numbers = []

//     for (let j = i * 3; j < i * 3 + 3; j++){
//         numbers.push(j + 1)
//     }
    
//     matrix.push(numbers)
// }

// console.log(matrix)


// [
//     [[1,2],[3,4],[5,6],
//     [7,8],[9,10],[11,12]]
// ]

const matrix = [];

for (let i = 0; i < 2; i++){
    // 2 times
    const arr = [];

    for (let j = 0; j < 3; j++){
        const numbers = [];

        const start = i * 6 + j * 2 + 1;
        for (let k = start; k < start + 2; k++){
            numbers.push(k);
        }
        arr.push(numbers)
    }
    matrix.push(arr)
}

console.log(matrix)













