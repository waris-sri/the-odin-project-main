function camelize(str) {
  const splitStr = str.split("-")[0];
  let result = splitStr[0];
  for (let i = 1; i < splitStr.length; i++) {
    const capitalized =
      String.fromCharCode(splitStr[i].charCodeAt(0) - 32) +
      splitStr[i].slice(1, splitStr[i].length);
    result += capitalized;
  }
  return result;
}

console.log(camelize("-webkit-transition"));
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
