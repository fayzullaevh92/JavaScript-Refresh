console.log('//////////////////FUNCTIONS CAN USED AS ARGUMENTS')
function function1(f) {
    console.log('function1 start')
    f()
    console.log('function1 end')
}

function function2(){
    console.log('function2 start')
    console.log('function2 end')
}

function1(function2)

console.log('///////////FUNCTIONS CAN BE RETURNED FROM FUNCTION')

function createAdd(){
    return function(x, y){
        return x + y
    }
}

const addFunction1 = createAdd()
const addFunction2 = createAdd()

console.log(addFunction1(1,5))
console.log(addFunction2(11,22))


console.log('////////////CHAINING FUNCTION CALLS')

function sayHello(){
    console.log('Hello')
    return function(){
        console.log('World')
        return function(){
            console.log('My name is John Doe')
        }
    }
}

sayHello()()()

console.log('//////////////FUNCTIONS bind()')

const button = {
    handler: null,
    onClick: function(handler) {
        this.handler = handler
    },
    click: function(){
        this.handler()
    }
}

const handler = {
    log: function (){
        console.log('Button clicked')
    },
    handle: function (){
        this.log()
    }
}

button.onClick(handler.handle.bind(handler))

button.click()

console.log('To avoid TypeError, we need to bind handler')

console.log('another way is to pass callback or anonymous function')

button.onClick(function(){
    handler.handle()
})

button.click()