/*
Basic Objects:
Define a variable named student and assign it an empty object.
*/

let student = {};
/*
Add properties to the student object for name, email, and age. Set their values to your own name, email, and age.

*/
student.name = "Gyanavardhan";
student.email = "gyanavardhanmamidisetti@gmail.com";
student.age = 20;


/*
Log the name property of the student object to the console.
*/

console.log(student.name);
/*
Update the age property of the student object to some random value, say 10. 
Log the age property of the student object to the console to see the updated property.

*/
student.age = 10;
console.log(student.age);

/*
Add a method called greet to the student object that logs a greeting message using the name property.
 Call the greet method to see the greeting message.
*/

student.greet = function(){
    console.log(`Hello ${student.name}`);
}

student.greet();