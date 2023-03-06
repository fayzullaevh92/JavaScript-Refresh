// Here I am reviewing the ways of creating new objects

console.log('Ways of creating object')
//Object Literal Notation

const obj1 = {
    firstName: 'Khojiakbar',
    lastName: 'Fayzullaev',
    nickName: 'Archie',
    age: 30,
    printFullName: function (){
        console.log(`My full name is ${this.firstName} ${this.lastName}
        but you can call me ${this.nickName}`)
    }
}

console.log('//////////////////  Through object literal notation')
console.log(obj1.firstName)
console.log(obj1.lastName)
obj1.printFullName()
// Object.fromEntries
console.log('//////////////////  Through Object.fromEntries')

const array = [
    ['firstName', 'Khojiakbar'],
    ['lastName', 'Fayzullaev'],
    ['nickName', 'Archie'],
    ['age', 30],
    ['printFullName', function () {
        console.log(`My full name is ${this.firstName} ${this.lastName}
        but you can call me ${this.nickName}`)
    }]
]

const obj2 = Object.fromEntries(array)
console.log(obj2.firstName)
console.log(obj2.lastName)
console.log(obj2.age)
obj2.printFullName()

//Constructor functions
console.log('//////////////////  Through constructor functions')

function Person(firstName, lastName, nickName, age){
    this.firstName = firstName,
    this.lastName = lastName,
    this.nickName = nickName,
    this.age = age

    this.printFullName = function () {
        console.log(`My full name is ${this.firstName} ${this.lastName}
        but you can call me ${this.nickName} and I am ${this.age} years old`)
    }
}

const obj3 = new Person('Sarvar', 'Saidov', 'Saric', 30)
console.log(obj3.firstName)
console.log(obj3.lastName)
obj3.printFullName()

//Class
console.log('//////////////////  Through class')

class Person2 {
    constructor(firstName, lastName, nickName, age){
        this.firstName = firstName,
        this.lastName = lastName,
        this.nickName = nickName,
        this.age = age
    }

    printFullName (){
        console.log(`My full name is ${this.firstName} ${this.lastName}
        but you can call me ${this.nickName} and I am ${this.age} years old`)
    }
}

const obj4 = new Person2('Sukhrob', 'Toshpulotov', 'Sokratis', 29)

console.log(obj4.firstName)
console.log(obj4.lastName)
obj4.printFullName()

//Object.create()
console.log('//////////////////  Through Object.create')

const obj5 = Object.create(Object.prototype, {
    firstName: {
        value: 'Bobur'
    },
    lastName: {
        value: 'Saidov'
    },
    nickName: {
        value: 'Bob'
    },
    age: {
        value: 29
    },
    printFullName: {
        value: function(){
            console.log(`My full name is ${this.firstName} ${this.lastName}
        but you can call me ${this.nickName} and I am ${this.age} years old`)
        }
    }
})

console.log(obj5.firstName)
console.log(obj5.lastName)
obj5.printFullName()

//Primitive Data Types vs Reference Types

console.log('////////Primitive Data Types vs Reference Types . . .')

let x = 4 
let y = x

function changeY(y) {
    console.log(`y before changing inside function is ${y}`)
    y = 5
    console.log(`y after changing inside function is ${y}`)
}

console.log(`y before function call is ${y}`)
changeY(y)
console.log(`y after function call is ${y}`)

let a = {
    x: 4,
    name: 'Archie'
}

let b = a

function changeB (b) {
    console.log(`b name property before change inside function is ${b.name}`)
    b.name = 'Saric'
    console.log(`b name property afer change inside function is ${b.name}`)
}

console.log(`b name property before function call is ${b.name}`)
changeB(b)
console.log(`b name property after function call is ${b.name}`)

// Getters and Setters
console.log('/////////Getters and Setters')

// Constructor Functions
console.log('//Constructor Functions we need _name to avoid infinite loops')

function Person3 (name, age, hobby) {
    this._name = name
    this._age = age
    this._hobby = hobby

    this.printFullName = function (){
        console.log(`My name is ${this._name}, I am ${this._age} and 
        I love ${this._hobby}`)
    }
}

Person3.prototype = {
    set name(newName) {
        if(typeof newName === 'string'){
            console.log('Setting new name . . .')
            this._name = newName
        }
        else {
            throw new TypeError('The name should be string')
        }
    },

    get name() {
        return this._name
    }
}
console.log('came to line 178')
const person1 = new Person3('Archie', 30, 'tennis')

person1.printFullName()
person1.name = 'Saric'

person1.printFullName()

// console.log('checking error')
// person1.name = 4

console.log(`hobby property with in operator returns ${'_hobby' in person1}`)


//Getting Object keys and values
console.log('/////////Getting Object keys and values')

console.log('iteration over the object')

for(let i in person1){
    console.log(`Property name: ${i}`)
    console.log(`Property value: ${person1[i]}`)
}

console.log('Object.keys')

const keysOfObject = Object.keys(person1)
console.log(keysOfObject)

console.log('Object values')

const valuesOfValues = Object.values(person1)
console.log(valuesOfValues)

console.log('Object entries')
const keyValuePairsOfObject = Object.entries(person1)

console.log(keyValuePairsOfObject)