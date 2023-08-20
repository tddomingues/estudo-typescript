class Person {
    id: number;
    firstName: string;

    constructor(id: number, firstName: string) {
        this.id = id;
        this.firstName = firstName;
    }

    sayMyName(): string {
        return `O seu nome é ${this.firstName}`
    }
}

const p1 = new Person(1, "Tiago")
console.log(p1.sayMyName())


//usando interface com class
interface ICar {
    id: number;
    offOrOn(): boolean
}

class Car implements ICar {
    id: number
    private document: boolean //é acessível apenas pela classe mãe
    protected type: string //é acessível apenas pela classe mãe e pelas subclasses

    constructor(id: number, document: boolean, type: string) {
        this.id = id
        this.document = document
        this.type = type
    }
    offOrOn(): boolean {
        return true
    }
}

const car = new Car(1, true, "Honda")

class OtherCar extends Car {
    constructor(id: number, document: boolean, type: string) {
        super(id, document, type) 
    }

    whatType() {
        return this.type
    }
}
