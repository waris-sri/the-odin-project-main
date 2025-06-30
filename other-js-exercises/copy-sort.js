let arr = ["HTML", "JavaScript", "CSS"];

let sorted = (arr) => arr.map((a) => a).sort((s1, s2) => s1.localeCompare(s2));
// mapping each elements literally one-by-one is equivalent to cloning an array (1-1 relationship in math)
// must use `localeCompare` when comparing string as JS will use the numerical value to compare them by default

console.log(sorted(arr)); // [ 'CSS', 'HTML', 'JavaScript' ]
console.log(arr); // [ 'HTML', 'JavaScript', 'CSS' ]
