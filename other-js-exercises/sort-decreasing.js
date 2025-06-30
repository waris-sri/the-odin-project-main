let arr = [5, 2, 1, -10, 8];

function asc(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function desc(a, b) {
  return a > b ? -1 : a < b ? 1 : 0;
}

console.log(arr.sort(desc)); // (`sort` forces us to pass in a function as an argument)
// or
console.log(arr.sort((a, b) => b - a)); // (`a - b` for ascending)
// this works because basically positive numbers means "greater than" and vice versa
