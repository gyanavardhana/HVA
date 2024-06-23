const colors = ["red","green","blue","purple"];
/*
Use the typeof operator to check the type of colors array and console it.
*/
console.log(typeof colors);
/*
Log the length property of the colors array to the console to see the number of elements in the array.
*/
console.log(colors.length);
/*
Use the push method to add another color to the end of the colors array.
*/
colors.push("black");
/*
Use the pop method to remove the last color from the colors array.
*/
colors.pop();
/*
Use the indexOf method to find the index of a specific color (e.g., "blue") in the colors array.
*/
console.log(colors.indexOf('blue'));

/*
Add a property to the colors array called owner and set its value to your name. Log the colors array to see if the owner property is added.
*/
colors.owner = "Sai";
console.log(colors);

/*
Use a for...in loop to iterate over the properties of the colors array and log each property name and the associated value to the console.
*/

for (let key in colors) {
    console.log(key, colors[key]);
}

