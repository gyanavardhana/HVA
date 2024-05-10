/*
Basic Arithmetic Operations:

Add: Create a callback function addNumbers that takes two numbers and returns their sum.

*/
function addNumbers(num1, num2){
    return num1+num2;
}
/*
Multiply: Create a callback function multiplyNumbers that takes two numbers and returns their product.

*/

function multiplyNumbers(num1, num2){
    return num1*num2;
}



/*
Subtract: Create a callback function subtractNumbers that takes two numbers and returns the result of subtracting the second number from the first.

*/

function subtractNumbers(num1, num2){
    return num1-num2;
}

/*
Divide: Create a callback function divideNumbers that takes two numbers and returns the result of dividing the first number by the second,
 ensuring to handle division by zero.

 */

function divideNumbers(num1, num2){
    return num1/num2;
}

 /*
Define a function performArithmetic that accepts three parameters: num1 and num2 (the numbers on which to perform the operation), and operation (a callback function that specifies the arithmetic operation to be performed on num1 and num2).
Call performArithmetic with different pairs of numbers and each of the callback functions to see the results of the arithmetic operations.

*/


function performArithmetic(num1, num2, operation){
    return operation(num1, num2);
}

console.log(performArithmetic(5, 2, addNumbers));
console.log(performArithmetic(5, 2, multiplyNumbers));
console.log(performArithmetic(5, 2, subtractNumbers));
console.log(performArithmetic(5, 2, divideNumbers));
