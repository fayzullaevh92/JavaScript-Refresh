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
    ['age', 30]
]

const obj2 = Object.fromEntries(array)
console.log(obj2.firstName)
console.log(obj2.lastName)
console.log(obj2.age)

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