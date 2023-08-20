"use strict";
class Person {
    constructor(id, firstName) {
        this.id = id;
        this.firstName = firstName;
    }
    sayMyName() {
        return `O seu nome é ${this.firstName}`;
    }
}
const p1 = new Person(1, "Tiago");
console.log(p1.sayMyName());
class Car {
    constructor(id, document, type) {
        this.id = id;
        this.document = document;
        this.type = type;
    }
    offOrOn() {
        return true;
    }
}
const car = new Car(1, true, "Honda");
class OtherCar extends Car {
    constructor(id, document, type) {
        super(id, document, type);
    }
    whatType() {
        return this.type;
    }
}
