// const s1 = 'Hello';
// console.log(typeof s1);
// console.log(s1.toUpperCase());

// console.log(navigator.appVersion);

// Object Literal
const book1 = {
  title: 'Book One',
  author: 'Nelson Uprety',
  year: 2014,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

const book2 = {
  title: 'Book Two',
  author: 'Monkey Luffy',
  year: 2018,
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));
