/*
Define an array called cart containing several objects, each representing an item in the shopping cart.
 Each object should have properties such as name, price, and quantity.
*/

const cart = [
    {name: "apple", price: 1.50, quantity: 3},
    {name: "orange", price: 2.00, quantity: 1},
    {name: "bread", price: 3.00, quantity: 2},
    {name: "milk", price: 2.50, quantity: 1},
]

/*
Define a function called calculateTotalPrice() that takes the shopping cart array as input and
 returns the total price of all items in the shopping cart.
*/

function totalprice(arr){
    let price = 0;
    for(let i = 0; i < arr.length; i++){
        price += arr[i].price * arr[i].quantity;
    }
    return price;
}

/*
Call the calculateTotalPrice() function with the cart array as an argument and log the result to the console.
*/


console.log(totalprice(cart));