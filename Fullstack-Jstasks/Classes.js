/*
Class:
Create a new object named friend with similar properties to the student object, 
but with values representing a friend's name, email, age, and address. Log the friend object to the console.
*/
let friend = {
    name: "john",
    email: "john@email.com",
    age: 20,
    address: {
        country: "India",
        city: "Hyderabad",
        pin_code: 533008
    }

};

console.log(friend);

/*
Create a new object named topper with similar properties to the student object, 
but with values representing a topper’s name, email, age, and address. Log the friend object to the console.

*/

let topper = {
    name: "topper",
    email: "topper@email.com",
    age: 20,
    address: {
        country: "India",
        city: "Bangalore",
        pin_code: 560038
    }
};

/*
Define a class called Student that takes parameters for name, email, age, country, city, and pin_code. 
Inside the class, set these parameters as properties of the new object. Make sure to add the greet method inside the class.

*/

class Student{
    constructor(name, email, age, country, city, pin_code){
        this.name = name;
        this.email = email;
        this.age = age;
        this.address = {
            country: country,
            city: city,
            pin_code: pin_code
        };
    }

    greet(){
        console.log(`Hello ${this.name}`);
    }
}
/*
Add a method called getFullAddress to the Student class that returns the full address of the student in this format (India, Bangalore - 560038).

*/

Student.prototype.getFullAddress = function(){
    return `${this.address.country}, ${this.address.city} - ${this.address.pin_code}`;
}

/*
Create objects of the Student class for yourself, your friend, and another student.
 Log these objects to the console to see the created objects. 
Call the getFullAddress method on one of the Student objects and log the result to the console.
*/

let student1 = new Student("Gyanavardhan", "gyanavardhan@gmail.com", 20, "India", "Kakinada", 533006);
let student2 = new Student("John", "john@email.com", 20, "India", "Hyderabad", 533008);
let student3 = new Student("Topper", "topper@email.com", 20, "India", "Bangalore", 560038);

console.log(student1);
console.log(student2);
console.log(student3);

console.log(student1.getFullAddress());
console.log(student2.getFullAddress());
console.log(student3.getFullAddress());