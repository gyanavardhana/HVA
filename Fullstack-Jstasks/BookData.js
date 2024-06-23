/*
Define the Book Class. The class should take parameters for title, author, publisher, year, and genre. 
Inside the constructor method, set these parameters as properties of the book object.
*/

class Book {
    constructor(title, author, publisher, year, genre) {
        this.title = title;
        this.author = author;
        this.publisher = publisher;
        this.year = year;
        this.genre = genre;
    }
}

/*
Add a method named describe() that logs a brief description of the book, combining the title, author, and year, e.g., 
"Five Point Someone - Chetan Bhagat (2004).
*/

Book.prototype.describe = function() {
    console.log(`${this.title} - ${this.author} (${this.year})`);
};

/*
Add a method named displayGenre() that logs the genre of the book.
*/

Book.prototype.displayGenre = function() {
    console.log(`Genre: ${this.genre}`);
};

/*
Create an object named classicBook with properties representing a classic novel’s details. Log this object to the console.
*/
const classicBook = new Book("Berserk", "Kentaro Miura", "Hakusensha", 1989, "Dark Fantasy");
console.log(classicBook);

/*
Create an object named sciFiBook with properties representing a science fiction book. Log this object to the console. 
*/

const scifiBook = new Book("Dune", "Frank Herbert", "Chilton Books", 1965, "Science Fiction");
console.log(scifiBook);

/*
Call the describe() method on the classicBook object to see a brief description.
*/
classicBook.describe();

/*
Call the displayGenre() method on the sciFiBook object to log the genre.
*/
scifiBook.displayGenre();