/*
*Prototypical inheritance
 refers to the ability to access 
object properties from another object. 
We use a JavaScript prototype to add new properties and methods to 
an existing object constructor. 
We can then essentially tell our JS code to inherit properties
 from a prototype.
*/

// Constructor
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

// getSummary
Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in ${this.year}`;
};

// Magazine constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);

  this.month = month;
}

// Inhertit prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine object
const mag1 = new Magazine('Mag One', 'Nelson Uprety', 2021, 'Jan');

// Use Magazine constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
console.log(mag1.getSummary());
