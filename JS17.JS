// THROW

try{
    throw new ReferenceError()
}   catch(err){
    console.log(err)
    console.log('There was a reference error')
}
console.log("My program does not stop")
