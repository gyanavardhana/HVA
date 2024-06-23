/*
Define an array called people containing several objects, each representing a person. 
Each object should have properties such as name, and age.
*/
const people = [
    {name: "Alice", age: 25},
    {name: 'gyana', age: 30},
    {name: 'sai', age: 28},
    {name: 'babji', age: 98},
]

/*
Define a function called calculateAverageAge() that takes the people array as input and returns the average age of all the people in the array.
*/
function averageage(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].age;
    }
    return sum / arr.length;
}

/*
Call the calculateAverageAge() function with the people array as an argument and log the result to the console.
*/

console.log(averageage(people));