let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'joe', name: "Joe Mama", age: 64},
  {id: 'dan', name: "Dan Hockyn", age: 35},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(arr) {
  return arr.reduce((accumulator, current) => {
    accumulator[current.id] = current; // add new key-value pair, similar to Python
    return accumulator;
  }, {});
}

let usersById = groupById(users);
console.log(usersById);

