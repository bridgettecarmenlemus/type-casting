// LAB 9 - Perform arithmetic operations on two numbers
// Function `evalNumbers()` prints the result after evaluating arithmetic operations between two numbers of addition, 
// multiplication, division, and modulus in JavaScript.
// Print result of num1+num2 if operation is "add"
// Print result of num1-num2 if operation is "subtract"
// Print result of num1*num2 if operation is "multiply"
// Print result of num1/num2 if operation is "divide"
// Print result of num1%num2 if operation is "modulus"
// Else print "Invalid operation"

function evalNumbers(num1, num2) {
    if (num1+num2) {
        console.log(num1 + num2)
    } else if (num1-num2){
        console.log(num1-num2)
    } else if(num1 * num2){
        console.log(num1*num2)
    } else if (num1 / num2){
        console.log(num1/ num2)
    } else console.log('invalid operation')
}


evalNumbers(5,6)
