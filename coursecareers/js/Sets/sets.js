const s = new Set([1,2,3,4,2,3,1,4,2]);
s.add(-1)
s.delete(4)
// console.log(s.size)

//contains unique elements

// for (const number of s) {
//     console.log(number)
// }

// console.log(s.has(1))
// console.log(s.has(5))
// console.log(s.has("hello"))


// const arr = [1,3,4,5,2,1,31,2]
// arr.length ** 2
// const numbers = new Set();

// for (const [idx, value] of arr.entries()) {
//     for (const value2 of arr.slice(idx + 1)) {
//         if (value === value2) {
//             console.log("Found duplicate", value)
//             break;
//         }
//     }
// }

// for (const value of arr){
//     if (numbers.has(value)){
//         console.log("Found Duplicate", value);
//     }
//     numbers.add(value);
// }

const arr = [1,3,4,5,2,1,41,2]
const numbers = new Set(arr);
const uniqueNumbers = Array.from(numbers)
console.log(uniqueNumbers)




