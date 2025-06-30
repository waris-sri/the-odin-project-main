let output = "";
let num = 120;
next: for (let n = 2; n < num; ++n) {
  for (let divisor = 2; divisor < Math.sqrt(n); ++divisor) {
    if (n % divisor == 0) {
      continue next;
    }
  }
  output += `${n} `;
}
console.log(output);
