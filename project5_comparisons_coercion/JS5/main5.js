// Assignment Number 1, 2, 3, 4
document.write(typeof true + "-"); 
document.write(Number("twelve") + "-");
document.write((3 < 2) + "-");
document.write((7 == 8 || 8 == 8) + "-");
document.write((7 == 8 || 8 == 9) + "-");
document.write((7 < 6 && 8 == 8) + "-");
document.write((7 > 8 && 8 == 8) + "-");
document.write("Today, in 1901, " + 74000 + " Pittsburgh steel workers went on a strike!");


function myFunction() {
    document.getElementById("example").innerHTML = isNaN("Word");
}

function theirFunction() {
    document.getElementById("eg").innerHTML = isNaN(777);
}

function theFunction() {
    document.getElementById("ei").innerHTML = 54E321;
}

function aFunction() {
    document.getElementById("model").innerHTML = "and beyond";
}

function hisFunction() {
    document.getElementById("copy").innerHTML = -54E321;
}

function herFunction() {
    document.getElementById("repeat").innerHTML = "but below";
}

function notFunction() {
    document.getElementById("not").innerHTML = !(Math.PI == 3.141592653589793);
}

function tonFunction() {
    document.getElementById("ton").innerHTML = !(Math.SQRT2 == 65);
}

function qualify() {
    var years, can_purchase;
    years = document.getElementById("age").value;
    can_purchase = (years < 21) ? "You are too young":"You are of age";
    document.getElementById("purchase").innerHTML = can_purchase + " to buy alcohol.";
}

console.log(12 * 8);
console.log(7 > 7);
console.log("weather" == "cold");
// Assignment Number 3
console.log("Jack" === ("J" + "ack"));
console.log(7 === "seven");
console.log(6 === 9);