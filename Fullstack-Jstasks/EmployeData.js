/*
Define the Employee Class. The class should take parameters for name, email, age, department, position, and salary. 
Inside the constructor method, set these parameters as properties of the employee object.
*/

class Employee{
    constructor(name, email, age, department, position, salary){
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    }
}

/*
Add a method named introduce() inside the class that logs a greeting and the employee's name and position,
 e.g., "Hello everyone, I am Ayush, Senior Software Developer."
 */
Employee.prototype.introduce = function(){
    console.log(`Hello everyone, I am ${this.name}, ${this.position}`);
};
 /*
Add a method named displaySalary() inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
*/
Employee.prototype.displaySalary = function(){
    console.log(`Salary: $${this.salary}`);
};

/*
Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. 
Log this object to the console.
*/
const newEmployee = new Employee("Gyana",'gyanavardhanmamidisetti@gmail.com',20,'CSE','Software Developer',50000);
console.log(newEmployee);

/*
Create another object named manager with properties representing a manager. 
Log this object to the console.
*/
const manager = new Employee('viswesh','viswesh@gmal.com',21,'CSE','Manager',100000);
console.log(manager);

/*
On the newEmployee object, call the introduce() method to see a greeting and role.
*/
newEmployee.introduce();
/*
Call the displaySalary() method on the manager object to log the salary details.
*/
manager.displaySalary();