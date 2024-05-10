/*
Simple Mathematical Operations:

Create a callback function doubleNumber that takes a number and returns its double.

*/
function doubleNumber(num){
    return num*2;
}

/*
Create another callback function squareNumber that takes a number and returns its square.

*/
function squareNumber(num){
    return num*num;
}

/*
Create another callback function incrementNumber that takes a number and returns the number incremented by one.

*/

function incrementNumber(num){
    return num+1;
}

/*
Define a function performOperation that accepts two parameters: num (a number on which to perform the operation), 
and operation (a callback function that specifies the operation to be performed on num).
Inside performOperation, call the operation function and pass num as an argument. The function should return the result. 

*/

function performOperation(num, operation){
    return operation(num);
}

/*
Call performOperation with a number and each of the callback functions in turn to see the results of the operations. 
Log the result to the console for each call to performOperation.
Observe the higher-order function, performOperation, to understand why higher-order functions are used.

*/


console.log(performOperation(5, doubleNumber));
console.log(performOperation(5, squareNumber));
console.log(performOperation(5, incrementNumber));
