// // const num = [1,2,3,34,12,50,2,1,2,6];
// // const sortedNums = num.sort((a,b) => b - a);
// // console.log(sortedNums);
// const objs = [
//     {year: 2012, make: "Ford"},
//     {year: 2001, make: "Chevy"},
//     {year: 2023, make: "Honda"},
//     {year: 2001, make: "Fiat"}
// ];

// // const sortedObjs = objs.sort((a,b) => b.year - a.year);
// const sortedObjs = objs.sort((a,b) => {
//     const diffInYear = b.year - a.year;
//     if (diffInYear === 0){
//         if (a.make > b.make) {
//             return 1
//         } else if (a.make < b.make) {
//             return -1
//         } else {
//             return 0
//         }
//     }
//     return diffInYear
// });
// console.log(sortedObjs.reverse())




// let fruits = ["apple","orange","banana","coconut","pineapple"]

// fruits.sort()

// console.log(fruits)



// let nums = [10,4,2,1,5,8,9,3,6,7]
// nums.sort((a,b) => b-a)

// console.log(nums)


const people = [{name: "Olive", age:3,gpa:2.5},
    {name: "Ryan", age:36,gpa:3.0},
    {name: "Annie", age:33,gpa:1.5},
    {name: "Melanie", age:63,gpa:4.0}]

people.sort((a,b) => a.age - b.age)
console.log(people)
people.sort((a,b) => a.gpa - b.gpa)
console.log(people)
people.sort((a,b) => a.name.localeCompare(b.name))
console.log(people)







