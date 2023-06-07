// SWITCH STATEMENT

// Switch statement does the same job as ELSE IF statement but it is more efficient and easy to understand.

var place = "second"
switch(place){
    case "first":
       console.log("gold")
       break
    case "second":
        console.log("silver")
        break
    case "third":
        console.log("bronze")
        break
    default:
        console.log("no medal")
}