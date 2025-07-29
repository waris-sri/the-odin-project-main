const cats = [ "Leopard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion" ]

function upper(str) {
    return str.toUpperCase()
}

cats.push("Chokdee")
cats.sort()

let headPhrase = "My cats are "
for (let i = 0; i < cats.length; i++) {
    if (i === cats.length - 1) {
        headPhrase += `and ${cats[ i ]}. I have ${cats.length} cats.`
    } else {
        headPhrase += `${cats[ i ]}, `
    }
}
console.log(headPhrase)

// similar to `for...in` in Python and `for( : )` in Java; basically a for-each
let i = 1
for (const cat of cats) {
    console.log(`${i}. ${cat}`)
    i++
}

// use `map()` when the loop modifies each element and outputs a new collection
const upperCats = cats.map(upper)
// or do this: `const upperCats = cats.map((str) => str.toUpperCase());`
console.table(upperCats)

// use `filter()` to test each element and finally outputs a new qualified collection
const filteredCats = cats.filter((str) => str.toLowerCase().startsWith("l"))
const filteredCatsComplement = cats.filter(
    (str) => !str.toLowerCase().startsWith("l")
)
console.table(filteredCats)
console.table(filteredCatsComplement)

// JS also has do-while loop
let headPhrase2 = "My cats are "
i = 0
do {
    if (i === cats.length - 1) {
        headPhrase2 += `and ${cats[ i ]}.`
    } else {
        headPhrase2 += `${cats[ i ]}, `
    }

    i++
} while (i < cats.length)
console.log(headPhrase2)
