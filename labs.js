// LAB 1 - What number's bigger?
// Write a function named greatNum that:
// - takes 2 arguments, both numbers.
// - returns whichever number is the greater (hihger) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works(e.g. "The greater number of 5 and 10 is 10.")

function greatNum(x,y){
    if (x>y){
        return `The greater number of ${x} and ${y} is ${x}`
    } else return `The greater number of ${x} and ${y} is ${y}`
    }

    console.log(greatNum(78787,7878))