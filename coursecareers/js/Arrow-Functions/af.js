// const func = (x,y) => {
//     console.log(x + y)
// }

// func(1,2)

// const func = (x,y) => {
//     return x + y
// }

// const result = func(3,4)
// console.log(result)

// SHORT HAND
// const func = (x,y) => x + y

// const result = func(1,2)
// console.log(result)

// RETURN AN OBJECT
// const func = (x,y) => ({x: x, y: y})

// const result = func(1,2)
// console.log(result)


// STANDARD FUNCTION VS ARROW FUNCTION
function getName() {
    return this.firstName + " " + this.lastName
}

const person = {
    firstName: "Ryan",
    lastName: "Woods",
    getName: getName
}


const personName = person.getName();

console.log(personName)











