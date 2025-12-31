//STATIC METHODS
/*
class Person {
    name;
    static numberOfPeople = 0;

    constructor(name) {
        this.name = name;
    this.numberOfPeople++;
    }
}


const p = new Person('Ryan')
const p2 = new Person("Annie")

console.log(Person.numberOfPeople)
*/

//STATIC ATTRIBUTES
class Person {
    name;
    static numberOfPeople = 9;

    constructor(name) {
        this.name = name;
        Person.numberOfPeople++
    }

    static getNumberOfPeople() {
        if (this.getNumberOfPeople <= 10) this.removePerson();
        return Person.numberOfPeople
    }

    static removePerson() {
        this.numberOfPeople--;
    }

}

const p = new Person('Ryan')
const p2 = new Person("Annie")

Person.removePerson();
console.log(Person.getNumberOfPeople())



















