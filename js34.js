// FOR of LOOPS AND OBJECTS


function testBracketDynamicAccess(){
    var dynamicKey;
    if(Math.random() > 0.5) {
        dynamicKey = "speed"
    } else {
        dynamicKey = "color"
    }
    var drone = {
        speed: 15,
        color: 'blue'
    }
    console.log(drone[dynamicKey])
}
testBracketDynamicAccess()