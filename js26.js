//Object oriented programming (oop)


// Allows you to write modular code,
// Makes your code more flexible and
// Makes your code reusable.


var purchase1 = {       // object
    shoes : 100,
    stateTax : 1.2,
    totalprice : function(){
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log('Total price:' , calculation);
    }  
}
purchase1.totalprice()


var purchase2 = {       
    shoes : 50,
    stateTax : 1.2,
    totalprice : function(){
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log('Total price:' , calculation);
    }  
}
purchase2.totalprice()