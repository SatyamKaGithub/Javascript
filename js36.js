// Template literals example

// Template literals are an alternative way of working with strings, which was introduced in the ES6 addition to the javascript.
// Up until ES6, the only way to build strings in js was to delimit double or singlr quotes.
// ES6 introduced the use of backtick(` - located in the TAB key) character as delimiter

// DIFFERENCE BETWEEN AN TEMPLATE AND REGULAR STRING
greet = "hello";
place = "world";
console.log(`${greet} ${place} !`)

var greet = "Hello";
var place = "World"
console.log(greet + " " + place + " !")

// It's possible to perform arithmetic operation inside a template literal expression
console.log(`${1 + 1 + 1 + 1 + 1} staras!`)