class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Employee extends Person {
    constructor(name, age, department, id) {
        super(name, age); // here calls "name" and "age" from class Person

        this.department = department;
        this.id = id;
    }

    showId() {
        console.log(`${this.name} has an Id of ${this.id}`);
    }
}

let person = new Person("Pesho", 10);
let employee = new Employee("Gosho", 20, 'It', 111);
person.greet();
employee.greet();

employee.showId();