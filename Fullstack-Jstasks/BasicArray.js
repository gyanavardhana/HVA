/*
Define a variable named colors and assign it an array containing strings representing different colors (e.g., "red", "green", "blue").
*/
const colors = ["red","green","blue"];

/*
Log the first element of the colors array to the console.
*/
console.log(colors[0]);

/*
Change the second element of the colors array to "yellow". Log the second element of the colors array to the console to verify the change.
*/
colors[1] = "yellow";

/*
Add a new color to the end of the colors array. Log the last element of the colors array to the console.
*/
colors.push("purple");
console.log(colors[colors.length-1]);