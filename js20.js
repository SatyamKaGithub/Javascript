// RECURSION

//Recursion is an alternative way to run repetitive code without the use of loop.

let counter = 3
function example(){
    console.log(counter)
    counter = counter - 1
    if(counter === 0)return
    example()
}
example()