///////////////Arrays

console.log('/////////////Arrays')
const array1 = [1,2,3,4]

console.log(`array elements before changin: ${array1}`)
array1.unshift(5)
console.log(`array elements after unshift: ${array1}`)

array1.shift()

console.log(`array elements after shift: ${array1}`)

console.log(`using splice to insert element into the middle. . . .`)

array1.splice(2,0,5)

console.log(`after splice, elements are : ${array1}`)

console.log(`copy of sliced array: ${array1.slice(1,4)}`)

//////////////////Sorting

console.log('///////////Sorting')

array1.reverse()

console.log(`array after referse which mutates the array: ${array1}`)

console.log('sorting with numerical order. . .')

function comparingNums(a, b){
    if(a > b) return 1
    else if(a < b) return -1
    else return 0
}

array1.sort(comparingNums)

console.log(`array after sorting mutated: ${array1}`)

console.log('using localeCompare . . .')

const contacts = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@javascripthandbuch.de'
    },
    {
        firstName: 'James',
        lastName: 'Dean',
        email: 'super.james@javascripthandbuch.de'
    },
    {
        firstName: 'Peter',
        lastName: 'Dickens',
        email: 'dickens@javascripthandbuch.de'
    }
]

function compareByFirstName (contact1, contact2) {
    return contact1.firstName.localeCompare(contact2.firstName)
}

function compareByLastName (contact1, contact2) {
    return contact1.lastName.localeCompare(contact2.lastName)
}

function compareByEmail (contact1, contact2) {
    return contact1.email.localeCompare(contact2.email)
}

console.log(`contacts array before any sorts: ${contacts}`)
contacts.sort(compareByFirstName)
contacts.forEach((contact)=> {
console.log(`contacts after sorting by firstName: ${contact.firstName}`)
})
contacts.sort(compareByLastName)
contacts.forEach((contact)=> {
    console.log(`contacts after sorting by lastName: ${contact.firstName}`)
})
contacts.sort(compareByEmail)
contacts.forEach((contact)=> {
    console.log(`contacts after sorting by email: ${contact.firstName}`)
})

/////////////////Converting Array to Strings
console.log('/////////////Converting Array to Strings')
const names = ['John', 'James', 'Peter']
const namesString = names.toString()
console.log(`conversion with toString: ${namesString}`)
const namesLocaleString = names.toLocaleString()
console.log(`conversion with toLocaleString: ${namesLocaleString}`)
const namesValueOf = names.valueOf()
console.log(`conversion with valueOf: ${namesValueOf}`)
const namesJoin = names.join('-')
console.log(`conversion wiht join: ${namesJoin}`)

const [firstguy, secondguy] = names
console.log(`one is ${firstguy} and two is ${secondguy}`)


console.log('/////////////Object Destructuring')

const person1 = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@javascriptbook.de',
    height: 1.8
}

const {firstName, lastName, ...restInfo} = person1
console.log(`rest of properties: ${restInfo.age}`)