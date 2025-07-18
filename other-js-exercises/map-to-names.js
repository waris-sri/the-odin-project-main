let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

// only want strings, return in string form
let names = users.map((user) => user.name).join(", ");

console.log(names);
