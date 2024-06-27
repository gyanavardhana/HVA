
/*
Define a variable named products and assign it an array containing several objects. 
Each object should represent a product and have properties like id, name, price, and category.
*/
const products = [
    {id: 1, name: 'Burger', price: 100, category:"Food"},
    {id: 2, name: 'Rose wood', price: 200, category:"Infra"},
    {id: 3, name: 'pizza', price: 9, category:"Food"},
    {id: 4, name: 'facecream', price: 400, category:"cosmetics"},
    {id: 5, name: 'Dosa', price: 500, category:"Food"},
    {id: 6, name: 'Curtains', price: 8, category:"Infra"},
]
/*
Use the forEach method to iterate over the products array and log each product's name and price to the console.
*/

products.forEach((product) => {
    console.log(`Product Name: ${product.name} and Price: ${product.price}`);
});

/*
Assume a tax rate of 10%. Use the map method to create a new array called productsWithTax 
that includes each product's name and a new price which is the original price plus the tax.
Log the productsWithTax array to the console.
*/


const productsWithTax = products.map((product) => {
    return {
        ...product,
        price: product.price + (product.price * 0.10)
    }
});

console.log(productsWithTax);
/*
Use the filter method to create a new array called foodProducts that contains only the products from the category "Food".
 Log the foodProducts array to the console.
 */

const foodproducts = products.filter((product) => {
    return product.category === 'Food';
});

console.log(foodproducts);

/*
Use filter to find products with a price under $10, then map to return a string for each that includes the name and price (e.g., "Banana - $1.99").
 Store these strings in an array called affordableProducts and log it to the console.
*/

const affordableProducts = products.filter((product) => {
    return product.price < 10;
}).map((product) => {
    return `${product.name} - $${product.price}`;
});

console.log(affordableProducts);

/*
Initialize a variable totalPrice to 0. Use forEach to sum up the prices of all products and update totalPrice. 
Log totalPrice after the loop.
*/
let totalprice = 0;

for(let pr of products){
    totalprice += pr.price;
}

console.log(totalprice);






