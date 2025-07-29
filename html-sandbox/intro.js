let a = 10
console.log(a)
let b = 7 * a
console.log(b)

const max = 57
const actual = max - 13
const percentage = actual / max
console.log(percentage)

// will show up in the browser
alert("This is an alert message!")

let user = "John",
    age = 25,
    message = "Hello"
console.table(user)

function letSay() {
    if (true) {
        let phr = "Hello"
    }
    alert(phr)
}

function hoistedVar() {
    hoist = "Hoist me!"
    console.log(hoist)
    var hoist
}
hoistedVar()
