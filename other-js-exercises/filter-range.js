let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  return arr.filter((n) => a <= n && n <= b);
}

console.log(filterRange(arr, 1, 4));
