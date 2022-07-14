// LAB 7 - Find the largest of three number
// Function `findLargest()` finds the largest of three number by using ">" and "&&" operator in JavaScript.
// Print num1 is the largest if num1>num2 and num1>num3.
// Print num2 is the largest if num2<num3.
// Else print num3.

function findLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1 + " is the largest");
  } else if (num2 > num1 && num2 > num3) {
    console.log(num2 + " is the largest");
  } else {
    num3 > num2 && num3 > num1;
    console.log(num3 + " is the largest");
  }
}

findLargest(4,5,2);
