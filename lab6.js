// LAB 6 - Find the largest of two number
// Function `findLargest()` finds the largest between two number by using ">" and "=" operator in JavaScript.
// Print num1 is the largest if num1>num2.
// Print num2 is the largest if num1<num2.
// Else print num1 and num2 are equal when num1==num2.

function findLargest(num1, num2){
    if (num1 > num2){
        console.log(num1 +' is the largest')
    } else if (num1 < num2){
        console.log(num2 +' is the largest')
    } else (num1 == num2); {
        console.log(num1 +' and' +num2 + 'are equal when' + num1==num2)
    }
}

findLargest(1,2)