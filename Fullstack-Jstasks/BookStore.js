
/*
Define an array called inventory containing several objects, each representing a book in the bookstore's inventory. Each book object should have properties 
such as id, title, author, price, quantity, and any other relevant details.
*/

const inventory = [
    {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10, quantity: 5},
    {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 15, quantity: 3},
    {id: 3, title: '1984', author: 'George Orwell', price: 12, quantity: 4},
    {id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', price: 8, quantity: 6},
    {id:5, title: 'Berserk', author: 'kentaro miura', price: 20, quantity: 2}
]

/*
Create a class called Book to represent a book, 
and use this class to create objects for each book in the inventory array.
*/

class Book{
    constructor(id, title, author, price, quantity){
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }
}

/*
Define functions addBook() to add a new book to the inventory,
 updateBook() to update the quantity of an existing book, 
 removeBook() to remove a book from the inventory, and 
 displayBooks() to display all books in the current inventory in the following format:
  BookTitle - Price (Quantity).
*/
Book.prototype.addBook = function(id, title, author, price, quantity, inventory){
    let newBook = new Book(id, title, author, price, quantity);
    inventory.push(newBook);
}

Book.prototype.updateBook = function(id, price, inventory){
    let book = inventory.find((book) => book.id === id);
    book.price = price;
}


Book.prototype.removeBook = function(id, inventory){
    let index = inventory.findIndex((book) => book.id === id);
    inventory.splice(index, 1);
}

Book.prototype.displayBooks = function(inventory){
    for(let i = 0; i < inventory.length; i++){
        console.log(`${inventory[i].title} - $${inventory[i].price} (${inventory[i].quantity})`);
    }
}


const newBook = new Book();

newBook.addBook(6, 'The Hobbit', 'J.R.R. Tolkien', 15, 3, inventory);
newBook.displayBooks(inventory);
newBook.updateBook(6, 20, inventory);
newBook.displayBooks(inventory);
newBook.removeBook(6, inventory);
newBook.displayBooks(inventory);
