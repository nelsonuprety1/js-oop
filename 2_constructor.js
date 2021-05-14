/*
A constructor is a function that creates an instance of a class which is typically 
called an “object”. In JavaScript, a constructor gets called when you declare
 an object using the new keyword.
  The purpose of a constructor is to create an object and set values 
  if there are any object properties present.

*/

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

// Instantiate an Object
// When you instantiate an Object from the constructor its gonna run whatever is inside of it
const book1 = new Book('Book 1', 'Nelson Uprety', 2014);
const book2 = new Book('Book2', 'Monkey Luffy', 2018);

console.log(book1);
console.log(book1.getSummary());
console.log(book2);
