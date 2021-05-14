/*
 *Object.create()
 The Object.create() method creates a new object, 
 using an existing object as the prototype of the newly created object. 
 */

//  Object Of Protos
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'Nelson Uprety';
// book1.year = 2014;

// same as above
const book1 = Object.create(bookProtos, {
  title: { value: 'Book One' },
  author: { value: 'Nelson Uprety' },
  year: { value: '2014' },
});

console.log(book1);
