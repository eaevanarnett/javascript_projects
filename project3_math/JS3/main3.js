var g = "Guess a number up to 100!"
window.alert(g);
window.alert(Math.round(Math.random() * 100));

function Days() {
    var x = document.getElementById("math");
    x.value *= 365;
}
// Assigning var 'x' to whatever value the HTML element contains

function Sub() {
    var a = 765123 - 345543;
    document.getElementById("sub").innerHTML = "765123 - 345543 = " + a;
}

function Add() {
    var b = 45 + 32;
    document.getElementById("add").innerHTML = "45 + 32 = " + b;
}

function Div() {
    var c = 76 / 32;
    document.getElementById("div").innerHTML = "76 / 32 = " + c;
}

function Several() {
    var d = (24 - 12) * 7 / 3;
    document.getElementById("several").innerHTML = d;
}

function Modulus() {
    var e = 23 % 3;
    document.getElementById("modulus").innerHTML = e;
}
// Modulus can be used to find remainders and prime and numbers

function Decrement() {
    var f = document.getElementById("decrement");
    f.value -= 1;
}

function Circum() {
    var h = 14 * 12;
    document.getElementById("object").innerHTML = Math.round(h * Math.PI) + "in";
}

function myDictionary() {
    var Computer = {
        brand: "Hewlett-Packard", 
        operating_system: "Windows 10",
        processor: "Intel Core i7-1165G7",
        display: "15.6 inch",
        graphics: "Intel Iris Xe",
        color: "nightfall black",  
    };
    document.getElementById("dictionary").innerHTML = Computer.brand;
}
// If the same key is used twice, it displays the last value associated with it

var y = 7;
y--;
document.write(y);

var z = 7;
z++;
document.write(z);