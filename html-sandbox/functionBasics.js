/* function declaration */
function add7(n) {
    return n + 7
}

function multiply(a, b) {
    return a * b
}

function capitalize(str) {
    return String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1, str.length)
}

function lastLetter(str) {
    return str[ str.length - 1 ]
}

/* function expression */
const add7Exp = function (n) {
    return n + 7
}

const multiplyExp = function (a, b) {
    return a * b
}

const capitalizeExp = function (str) {
    return String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1, str.length)
}

const lastLetterExp = function (str) {
    return str[ str.length - 1 ]
}

/* arrow function */
const add7Arrow = (n) => n + 7
const multiplyArrow = (a, b) => a * b
const capitalizeArrow = (str) =>
    String.fromCharCode(str.charCodeAt(0) - 32) + str.slice(1, str.length)
const lastLetterArrow = (str) => str[ str.length - 1 ]

console.log("add7 = " + add7(2))
console.log("add7Exp = " + add7Exp(2))
console.log("add7Arrow = " + add7Arrow(2))

console.log("\nmultiply = " + multiply(2, 2))
console.log("multiplyExp = " + multiply(2, 2))
console.log("multiplyArrow = " + multiply(2, 2))

console.log("\ncapitalize = " + capitalize("capitalize this (declaration)"))
console.log("capitalizeExp = " + capitalizeExp("capitalize this (expression)"))
console.log("capitalizeArrow = " + capitalizeArrow("capitalize this (arrow)"))

console.log("\nlastLetter = " + lastLetter("Declaration"))
console.log("lastLetterExp = " + lastLetterExp("Expression"))
console.log("lastLetterArrow = " + lastLetterArrow("Arrow"))
