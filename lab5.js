// LAB 5 - Check if input variable is a number or not
// Function `isNumber()` checks if input variable is a number by using isNaN() in-built JavaScript function. 
// Print "Variable is not a number" if isNaN() returns true.
// Else print "Variable is a valid number" if isNaN() returns false.



function isNumber(num){
    if (isNaN(num)) {
        console.log('Variabale is not a number')
    } else {
        console.log('Variabale is a valid number')
    }
}

isNumber(6)

