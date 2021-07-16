function alcohol() {
    var years, can_purchase;
    years = document.getElementById("age").value;
// Ternary Operator: 'true' conditional statement renders left-side value
    can_purchase = (years < 21) ? "You are too young":"You are of age";
    document.getElementById("sell").innerHTML = can_purchase + " to buy alcohol.";
}

function multiplyFunction() {
    document.getElementById("three").innerHTML = timesThree();
    function timesThree() {
        var start_point = 3;
        // nested function
        function extra() {start_point *= 3;}
        extra();
        return start_point;
    }  
}

// constructor function provides a blueprint for all new instances created
function vehicle(year, make, model, fuel) {
// 'this' keyword indicates the owner; an object- 'vehicle' 
    this.vehicle_year = year;
    this.vehicle_make = make;
    this.vehicle_model = model;
    this.vehicle_fuel = fuel;
}

// creating instances of the same type following constructor template using 'new' keyword 
var Bob = new vehicle("1985", "Chevrolet", " K10", "gas");
var Bill = new vehicle("1982", "Chevrolet", " K10", "gas");
var Ben = new vehicle("1990", "Chevrolet", " Suburban", "diesel");

function aFunction() {
    document.getElementById("key_constr").innerHTML = "Bob's " + Bob.vehicle_year + Bob.vehicle_model + " uses the same fuel type as Bill's " + Bill.vehicle_year + Bill.vehicle_model + " although Ben's " + Ben.vehicle_make + " uses " + Ben.vehicle_fuel + ".";
}