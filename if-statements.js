// let animal = "cat"; // global scope
// animal = "Dog";
// aniaml = "snake";

// if (animal === "dog" || animal === "Dog" || animal === "snake") {
//   animal = "snake"; //block scoped
//   console.log("wooof", animal);
// } else {
//   console.log("your animal is ", animal);
// }

// let person = 'mammal'
// person = 'not mammal'
// person = false || 'test'

// console.log('person before if', person)

// if (person === "Mammal") {
//   console.log("yes though so!");
// } else if (person && 0) {
//   console.log("not sure");
// } else if (person === 'not mammal'){
//     console.log('this is catch all')
// } else {
//     console.log('catch all')
// }

/********** Date */

const date = new Date()
console.log(date)

const time = date.getTime()
console.log(time)

const hours = date.getHours()
console.log(hours)

if (time > 12) {
    console.log('is past lunch time')
} else if (hours <= 11.50){
    console.log('is alomst lunch time')
}

const today = date.getDate()
console.log(today)

if(today === 12) {console.log('Happy July 12th')}

