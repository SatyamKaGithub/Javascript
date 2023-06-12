// Template


var purchase1 = {       // object
    shoes : 100,
    stateTax : 1.2,
    totalprice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:' , calculation);
    }  
}
purchase1.totalprice()


var purchase2 = {       
    shoes : 50,
    stateTax : 1.2,
    totalprice : function(){
        var calculation = this.shoes * this.stateTax;
        console.log('Total price:' , calculation);
    }  
}
purchase2.totalprice()