// FUNCTIONAL PROGRAMMING

// path can exist outside the function

var currencyOne = 100
var currencyTwo = 0
var exchangeRate = 0.4
function convertCurrency(amount , rate){
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne , exchangeRate)
console.log(currencyTwo)