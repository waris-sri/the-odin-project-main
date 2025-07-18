let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };
let a = { name: "A", age: 28 };
let b = { name: "B", age: 12 };
let c = { name: "C", age: 43 };
let d = { name: "D", age: 55 };
let e = { name: "E", age: 77 };
let f = { name: "F", age: 19 };
let g = { name: "G", age: 93 };
let h = { name: "H", age: 45 };
let i = { name: "I", age: 66 };
let j = { name: "J", age: 67 };
let k = { name: "K", age: 32 };
let l = { name: "L", age: 20 };
let m = { name: "M", age: 19 };
let n = { name: "N", age: 9 };

let arr = [ pete, john, mary, a, b, c, d, e, f, g, h, i, j, k, l, m, n ];

function sortByAge(arr) {
  return arr.sort((curr, next) => (curr.age - next.age));
}

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr);
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
