
/*
Define a function called greet that takes a name as an argument and returns a greeting message. 
For example, if the name is "Alice", the function should return "Hello, Alice!".
*/

function greet(name) {
  return `Hello, ${name}!`;
}

/*
Call the greet function you defined in the previous task with your name as the argument and log the result to the console.
*/

console.log(greet("Gyanavardhan"));

/*
Modify the greet function to have a default argument of "Guest" for the name parameter. 
This means that if no name is provided, the function should return "Hello, Guest!".
*/


function greet(name = "Guest") {
    return `Hello, ${name}!`;
}


console.log(greet());


/*
Rewrite the greet function as a function expression and store it in a variable called greetFunction.
*/

const greetFunction = function greet(name = "Guest") {
    return `Hello, ${name}!`;
}

console.log(greetFunction("Gyanavardhan"));

/*
Rewrite the greet function as an arrow function.
*/

const greetFunction1 = (name = "Guest") => {
    return `Hello, ${name}!`;
}


console.log(greetFunction1("Gyanavardhan Mamidisetti"));
