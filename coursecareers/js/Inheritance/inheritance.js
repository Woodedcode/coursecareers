// class Person {
//     name;
//     age;

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         return this.name + " " + this.age;
//     }
// }

// class Teacher extends Person {
//     salary;

//     constructor(name,age,salary) {
//         super(name,age);
//         this.salary = salary
//     }

//     greet() {
//         return "I am the teacher " + super.greet();
//     }
// }


// class Student extends Person{
//     group;

//     constructor(name, age, group) {
//     super(name, age);
//     this.group = group;
//     }
// }


// const s1 = new Student("Ryan", 30, "A");
// const t1 = new Teacher("Amy", 30, "65000");
// console.log(s1.greet())
// console.log(t1.greet())


class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    enrolledClasses = [];

    constructor(name, age, enrolledClasses) {
        super(name, age);
        this.enrolledClasses = enrolledClasses;
    }
}

const student1 = new Student("Eric", 23, ["English", "Chemistry"]);
console.log(student1.name);
console.log(student1.enrolledClasses);