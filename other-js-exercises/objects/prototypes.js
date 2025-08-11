function Book(title, author, pages, read) {
  // NOTE: safeguard to prevent calling the constructor without using `new`
  // since a constructor is treated as a normal function in JavaScript
  if (!new.target) {
    throw Error("You must use the `new` operator to call the constructor");
  }
  this.title = title || "No title set";
  this.author = author || "No author set";
  this.pages = pages || "No pages set";
  this.read = read ??= "No reading status set";
  // unlike Java, methods can be integrated directly into the constructor and not separated outside of it
  this.info = `${this.title}
${this.author}
${this.pages}
${this.read}`;
}

Book.prototype.sayHello = function () {
  console.log("Hi, I am a talking book!");
};
Book.prototype.company = "Bookworms Company Limited";

// NOTE: not to be confused with Java which uses `new` to call the constructor and create new instances from it,
// `new` in JavaScript links new objects to the constructor's .prototype
const book1 = new Book("", "Anonymous", 123);
const book2 = new Book("Book #2", "Anonymous", 456, false);
console.log(book2["info"]);
console.log("Book (constructor)'s prototype:", Book.prototype);
console.log(Object.getPrototypeOf(book1)); // WARN: `.__proto__` can also be used but it's deprecated!
// NOTE: for the above, "[[Prototype]]" is a synonym of .__proto__, like `book1.[[Prototype]]`

// NOTE: the REFERENCE/LINKAGE to Book.prototype's value is stored in every Book's object, i.e., created
// with the contructor each time, so .prototype is centralized, shared among objects, and saves memory!
console.log(Object.getPrototypeOf(book1) === Book.prototype);

console.log("--------------------------");
book1.sayHello();
book2.sayHello();
console.log(book1.company);
console.log(book2["company"]);

/* PROTOTYPE SHADOWING */

console.log("--------------------------");
// all Book instances share the same prototype
console.log(book1.company); // "Bookworms Company Limited"
console.log(book2.company); // "Bookworms Company Limited"

// change the prototype's property
Book.prototype.company = "New Publishing House";

// both instances reflect the change
console.log(book1.company); // "New Publishing House"
console.log(book2.company); // "New Publishing House"

// if an instance has its own property with the same name like the constructor's, it'll use that property
book1.company = "Independent Author";
console.log(book1.company); // "Independent Author" (own property)
console.log(book2.company); // "New Publishing House" (still from prototype)

console.log("--------------------------");
console.log("Object.prototype:", Object.prototype);
console.log(Object.getPrototypeOf(Book.prototype) === Object.prototype);
console.log(book1.valueOf());
console.log(book2.valueOf());
// .valueOf() is defined in Object.prototype just like our .sayHello(), which we can check by:
console.log(Object.prototype.hasOwnProperty("valueOf"));
console.log(Object.getPrototypeOf(Object.prototype)); // `null` = end of prototype chain

/* PROTOTYPAL INHERITANCE */

function BookInCollection(title, author, pages, read, collectionName) {
  if (!new.target) {
    throw Error("You must use the `new` operator to call the constructor");
  }
  this.title = title || "No title set";
  this.author = author || "No author set";
  this.pages = pages || "No pages set";
  this.read = read ??= "No reading status set";
  this.collectionName = collectionName || "No collection set";
  this.info = `${this.title}
${this.author}
${this.pages}
${this.read}`;
}
function Collection(collectionName) {
  this.collectionName = collectionName;
}
Collection.prototype.displayCollectionName = function () {
  console.log(
    `"${this.title}" is from the "${this.collectionName}" collection.`,
  );
};

console.log("--------------------------");
Object.setPrototypeOf(BookInCollection.prototype, Collection.prototype); // make Book objects inherit from Collection objects
// now in the chain, Book.prototype is pointing to Collection.prototype, which points to Object.prototype
console.log(Object.getPrototypeOf(BookInCollection.prototype));

const book3 = new BookInCollection(
  "The Third World",
  "Trio T.",
  333,
  true,
  "Numbered Collection",
);
const book4 = new BookInCollection(
  "Fourth Wall",
  "Quatro Q.",
  44,
  false,
  "Another Numbered Collection",
);

book3.displayCollectionName();
book4.displayCollectionName();
