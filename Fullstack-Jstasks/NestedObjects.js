/*
Nested Object:
Create a new object inside the student object called address. 
*/
let student = {
    address: {}
};

/*
Add properties to the address object for country, city, and pin_code. Set their values to your address details.

*/
student.address.country = "India";
student.address.city = "Kakinada";
student.address.pin_code = 533006;
/*
Log the country property of the address object to the console.

*/
console.log(student.address.country);
/*
Update the pin_code property of the address object to a new pin code. 
Log the address object to the console to see the updated pin_code property.
*/

student.address.pin_code = 533005;
console.log(student.address);