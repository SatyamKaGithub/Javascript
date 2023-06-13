// FOR of LOOPS and OBJECTS

const car = {
    engine: true,
    steering: true,
    speed: "slow"
}
const sportCar = Object.create(car);
sportCar.speed = "fast"
console.log("The sportcar Object: " , sportCar)
console.log('for-in is unreliable');
for(prop in sportCar){
    console.log(prop)
}
console.log('🪿' , 'Iterating over Object and its prototype!');
console.log('for-of is reliable');
for(prop of Object.keys(sportCar)){
    console.log(prop + ":" + sportCar[prop])
}
console.log('🤪' , "Iterating over Object's own properties only!")