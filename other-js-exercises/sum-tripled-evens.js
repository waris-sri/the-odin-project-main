const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumOfTripledEvens(arr) {
  return arr
    .filter((n) => n % 2 === 0) // [2,4,6,8,10]
    .map((n) => n * 3) // [6,12,18,24,30]
    .reduce((accumulator, current) => {
      console.log(`accumulator: ${accumulator}, current: ${current}`);
      return accumulator + current;
    }, 0);
}

console.log("total:", sumOfTripledEvens(arr));
