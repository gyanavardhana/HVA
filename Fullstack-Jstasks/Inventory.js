

const inventory = [
    {id: 1, name: 'apples',price: 3, quantity: 2},
    {id: 2, name: 'oranges', price: 2, quantity: 3},
    {id: 3, name: 'bananas', price: 1, quantity: 1},
    {id: 4, name: 'grapes', price: 4, quantity: 2},
    {id: 5, name: 'watermelon', price: 5, quantity: 1},
]
console.log(inventory);

/*
Create a class called Product to represent a product, and use this class to create objects for each product in the inventory array.
*/

class product{
    constructor(id, name, price, quantity){
        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

/*Define functions addProduct() to add a new product to the inventory, 
updateProduct() to update the quantity of an existing product, 
removeProduct() to remove a product from the inventory, and 
displayProducts() to display all the products in the current inventory in the following format: ProductName - Price (Quantity). 
Try to think of the function arguments on your own.
*/

function addproduct(id, name, price, quantity,inventory){
    let newproduct = new product(id, name, price, quantity);
    inventory.push(newproduct);
}
addproduct(6, 'mango', 3, 2, inventory);
console.log(inventory);

function deleteproduct(id,inventory){
    let index = inventory.findIndex((product) => product.id === id);
    inventory.splice(index, 1);
}
deleteproduct(6, inventory);
console.log(inventory);

function displayproducts(inventory){
    for(let i = 0; i < inventory.length; i++){
        console.log(`${inventory[i].name} - $${inventory[i].price} (${inventory[i].quantity})`);
    }
}
displayproducts(inventory);