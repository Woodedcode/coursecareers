/*
Person
    -name
    -age
Teacher
    -salary
    -teach()
    -grade()
Student
    -greet()
Class
    -students
    -teacher
*/
/*
const obj = {
    name: "ryan",
    age: 36
}

class Person{
    name;
    age;

    constructor(name,age) {
        this.name = name
        this.age = age
    }

    sayHi(shouldSayBye) {
        console.log(`hello my name is ${this.name} and I am ${this.age} years old`);
        if (shouldSayBye) {
            console.log('Bye')
        }
    }
}

const person = new Person("Ryan", 36);
const person2 = new Person("Annie", 33);
console.log(person, person2)
person.sayHi(false)
person2.sayHi(true)
*/


class Person{
    name;
    age;

    sayHi(shouldSayBye) {
        console.log(`hello my name is ${this.name} and I am ${this.age} years old`);
        if (shouldSayBye) {
            console.log('Bye')
        }
    }
}

const person = new Person();
person.name = "Ryan"
person.age = 36
person.isBlack = true
const person2 = new Person();
person2.name = "Annie"
person2.age = 33
console.log(person, person2)
person.sayHi(false)
person2.sayHi(true)

