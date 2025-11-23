// const obj = {
//     name :"Ryan",
// };
// obj.name = "Joe"
// console.log(obj)
// obj.age = 36;
// console.log(obj.age)
// console.log(obj)

// const person = {
//     name: "Ryan",
//     children: [{name: "Olive"},{name: "Milo"}],
// }
// console.log(person.children[0].get)

// console.log(person)
// delete person.name
// console.log(person)
// console.log("name" in person)


// for (const property in person) {
//     console.log(property)
// }
// for (const [property,value] of Object.entries(person)) {
//     console.log(property, value)
// }
// for (const value of Object.values(person)) {
//     console.log(value)
// }

// merging two objects

// const p1 = person;
// const p2 = person;

// console.log(person, p1, p2)
// delete p1.name
// console.log(person, p1, p2)

// copy objects

const obj = {
    name: "Ryan",
    nums: [1,2,3],
}

const obj2 = {...obj, age:2}

obj2.name = "red"
obj.nums[0] = 100;
console.log(obj)
console.log(obj2)











