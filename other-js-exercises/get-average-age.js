let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr) {
  let sum = 0;
  for (let elm of arr) {
    sum += elm.age;
  }
  return sum / arr.length;
}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
