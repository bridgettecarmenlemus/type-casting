const date = new Date()
console.log(date)

const hour = date.getHours()
console.log(hour)

// let message = 'good morning class'
// let message = `good ${hour > 12 ? 'aftenoon' : 'morning'} class`

let greeting

if(hour > 12) {
    greeting = 'afternoon'
} else {
    greeting = 'morning'
}

let message1 = 'good ${greeting} class'


console.log(message)