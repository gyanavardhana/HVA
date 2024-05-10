/* 
Define a function called higherOrderFunction that takes two parameters: num and callback. 
Inside higherOrderFunction, call the callback function and pass num as an argument.
*/
function higherOrderFunction(num, callback) {
    callback(num);
}

/* 
Define a function called callbackFunction that takes a number as an argument and logs it to the console. 
Call higherOrderFunction with a number and pass callbackFunction as the callback.
*/
function callbackFunction(num) {
    console.log(num);
}

higherOrderFunction(5, callbackFunction);
/* 
Modify the call to higherOrderFunction to pass a number and the same callback but as a function expression. 
In the call to higherOrderFunction, modify the callback function expression. 
The new function expression should log the square of the number to the console.
*/
higherOrderFunction(5, function(num) {
    console.log(num ** 2);
});

/* 
In the call to higherOrderFunction, modify the callback function expression that takes two parameters, num1 and num2, 
and log their sum to the console. Make the necessary changes to higherOrderFunction to call the callback accordingly.
*/

function higherOrderFunction1(num1,num2,callback){
    callback(num1,num2);

}

higherOrderFunction1(5,6, function(num1, num2) {
    console.log(num1 + num2);
});


