// ELSE IF STATEMENT

// use if to specify a block of code to be executed, if a specified condition is true.
// use ELSE IF to specify a new condition to test, if the first condition is false.
// use ELSE to specify a block of code to be executed, if the same condition is false.
//  use SWITCH to spcify many alternative blocks of code to be executed.

var light = "red"
if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}