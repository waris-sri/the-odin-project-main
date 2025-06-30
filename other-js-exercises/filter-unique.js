let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
  ":-)",
  ":-)",
  ":-)",
  ":-)",
  ":-(",
];

function unique(arr) {
  let words = [];
  for (const word of arr) {
    if (!words.includes(word)) {
      words.push(word);
    } else {
      continue;
    }
  }
  return words;
}

console.log(unique(strings));
