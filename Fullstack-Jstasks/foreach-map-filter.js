/*
Define a variable named numbers and assign it an array containing some numbers (e.g., 1, 2, 3, 4, 5).
*/
const numbers = [1,2,3,4,5];

/*
Use the forEach method to iterate over the numbers array and log each number to the console.
*/
for (let num of numbers){
    console.log(num);
}

/*
Use the forEach method to iterate over the numbers array and log each number multiplied by 2 to the console.
*/
for (let num of numbers){
    console.log(num*2);
}

/*
Use the map method to create a new array called squaredNumbers that contains the square of each number in the numbers array.
 Log the squaredNumbers array to the console.
 */
const squaredNumbers = numbers.map(function(num){
    return num*num;});
console.log(squaredNumbers);

 /*
Rewrite the callback function passed to the map function as an arrow function.
*/
const squaredNumbers1 = numbers.map(num => num*num);
console.log(squaredNumbers1);

/*
Use the filter method to create a new array called evenNumbers that contains only the even numbers from the numbers array. 
Log the evenNumbers array to the console.
*/
const evenNumbers = numbers.filter(function(num){
    return num%2 === 0;
});
console.log(evenNumbers);

/*
Rewrite the callback function passed to the filter function as an arrow function.
*/
const evenumbers1 = numbers.filter(num => num%2 === 0);
console.log(evenumbers1);
