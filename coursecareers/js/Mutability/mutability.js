// IMMUTABLE - NON CHANGEABLE

// true
// 3
// "str"
// undefined
// null



// MUTABLE - CHANGABLE
// arrays
// objects
// sets
// maps



// IMMUTABLE VALUES
// let x = 10;
// const y = x // copy of 10


// x = 20

// console.log(x,y)

// ARRAYS

// let x = [1,2,3,4,5]
// let x = [[1],[2],[3],[4]]
// let y = [...x]

// // // x[0] = 100
// // // x = [1]
// // // y[0] = 10
// y[0] = 100
// // y[0][0] = 100



// console.log(x,y)


// function modifyArray(x) {
//     arr[0] = 100
// }

// const arr = [1,2,3,4];
// console.log(arr)
// modifyArray(arr)
// console.log(arr)


// function modifyObj(x) {
//     x.prop = "test"
// }

// const obj =  {name: "Ryan"};
// console.log(obj)
// modifyObj(obj)
// console.log(obj)









let x = [1, 2, 3];
let y = x;
x[1] = 10;

console.log(x);
console.log(y);










