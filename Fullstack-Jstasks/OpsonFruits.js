/*
Define a variable named fruits and assign it an array containing the names of several fruits (e.g., "apple", "banana", "cherry", "date").
*/
const fruits = ["apple", "banana", "cherry", "date"];
/*
Use the forEach method to iterate over the fruits array and log each fruit name capitalized to the console (e.g., "Apple", "Banana", "Cherry", "Date"). 
Rewrite the callback function passed to the foreach function as an arrow function.
*/
for(let fru of fruits){
    console.log(fru.charAt(0).toUpperCase() + fru.slice(1));
}

/*
Use the map method to create a new array called reversedFruits that contains each fruit name reversed (e.g., "elppa"). 
Log the reversedFruits array to the console. 
Rewrite the callback function passed to the map function as an arrow function.
*/
const reversedFruits = fruits.map(function(fru){
    return fru.split("").reverse().join("");
});
console.log(reversedFruits);

const revesedfruits1 = fruits.map(fru => fru.split("").reverse().join(""));

/*
Use the filter method to create a new array called longFruits that contains only the fruit names that have more than 5 characters. 
Log the longFruits array to the console. 
Rewrite the callback function passed to the filter function as an arrow function.
*/

const longfruits = fruits.filter(function(fru){
    if(fru.lenght>5){
        return fru;
    }
})
console.log(longfruits);
const longfruits1 = fruits.filter(fru => fru.length>5);

/*
Use filter to find fruits that contain the letter 'a', and then map to return these fruits in uppercase. 
Store the result in an array called aFruitsUpper and log it to the console.
*/
const aFruitsUpper = fruits.filter(fru => fru.includes("a")).map(fru => fru.toUpperCase());
console.log(aFruitsUpper);

/*
Initialize a variable totalCharacters to 0. Use forEach to add up the number of characters in each fruit name and update totalCharacters. 
Log totalCharacters after the loop.
*/

var totalCharacters = 0;
fruits.forEach(fru => totalCharacters += fru.length);
console.log(totalCharacters);