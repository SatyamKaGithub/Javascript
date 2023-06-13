// REST OPERATOR
// tool used to collect all remaining items into an array
// destructuring


function addTaxToPrice(taxrate, ...itembought){
    return itembought.map(itembought => taxrate * itembought);
}
let shoppingCart = addTaxToPrice(0.07, 1.00, 2.00, 3.00);
console.log(shoppingCart);