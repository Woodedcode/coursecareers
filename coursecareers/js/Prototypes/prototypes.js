// const obj = {
//     name: "Ryan",
//     sayHi: function() {
//         console.log("Hi")
//     },
//     toString() {
//         return this.name
//     }
// };

// console.log(obj.__proto__)
// console.log(Object.getPrototypeOf(obj))
// console.log(obj.toString())

const personPrototype = {
    greet() {
        console.log(this.name)
    }
};

const ryan = Object.create(personPrototype);
ryan.name = "Ryan";

const joe = Object.create(personPrototype);
joe.name = "Joe";


ryan.greet()
joe.greet()

const proto = Object.getPrototypeOf(ryan)

console.log(Object.getPrototypeOf(proto))










