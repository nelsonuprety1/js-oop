/*
*Es6 Classes
Class − A class in terms of OOP is a blueprint for creating objects. 
A class encapsulates data for the object. 

Classes are in fact "special functions",
 and just as you can define function expressions and function declarations, 
 the class syntax has two components: class expressions and class declarations.
 */

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  }

  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore() {
    return 'Nelson Book Store';
  }
}

// Instantiate Object
const book1 = new Book('Book One', 'Nelson Uprety', 2014);

console.log(book1);
book1.revise(2018);
console.log(book1);

console.log(Book.topBookStore());
