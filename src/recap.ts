const myName = 'Enrique'
const myAge = 12

const suma = (a:number, b:number) => {
    return a + b;
}
suma(5, 9)

class Persona {

    constructor(private age:number, private name:string){}
    getSummary() {
        return `my name is ${this.name}, and I´m ${this.age} years old`
    }
}

const person = new Persona(31, 'enrique')
person.getSummary()