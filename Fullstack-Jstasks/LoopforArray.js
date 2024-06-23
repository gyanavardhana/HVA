
const colors = ["red","green","blue","purple"];
/*
Use a for loop to iterate over the colors array and log each color to the console.
*/
console.log("for loops")
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

/*
Use a while loop to iterate over the colors array and log each color to the console.
*/
console.log("while loops")
let i = 0;
while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

/*
Use a for...of loop to iterate over the colors array and log each color to the console.
*/
console.log("for...of loops")
for (let color of colors) {
  console.log(color);
}