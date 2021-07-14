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
    document.getElementById("modulus").innerHTML = -e;
}

function Decrement() {
    var f = document.getElementById("decrement");
    f.value -= 1;
}
// Attempted to use the decrement operator here, but was unsuccessful; Thought this would suffice for the assignment

function Circum() {
    var h = 14 * 12;
    document.getElementById("object").innerHTML = Math.round(h * Math.PI) + "in";
}