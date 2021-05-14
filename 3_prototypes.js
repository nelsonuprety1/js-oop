/*
Prototypes are the mechanism by which
 JavaScript objects inherit features from one another. 
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

// getAge
Book.prototype.getAge = function () {
  const years = new Date().getFullYear() - this.year;
  return `${this.title} is ${years} years old`;
};

// Revise / Change Year
Book.prototype.revise = function (newYear) {
  this.year = newYear;
  this.revised = true;
};

// Instantiate an Object
// When you instantiate an Object from the constructor its gonna run whatever is inside of it
const book1 = new Book('Book 1', 'Nelson Uprety', 2014);
const book2 = new Book('Book2', 'Monkey Luffy', 2018);

console.log(book1);
console.log(book1.getSummary());
console.log(book1.getAge());

// console.log(book2);
console.log(book2.getAge());

book2.revise(2020);
console.log(book2);
