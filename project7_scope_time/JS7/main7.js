x = 25;

function add() {
    document.write(x + 25 + "<br>");
}

function sub() {
    y = 35
    document.write(y + x + "<br>");
}

function div() {
    document.write(y / x + "<br>");
}
console.log(y - x);

function retrieveDate() {
    // utilizing JS Date Method 'getDate()'
    if (new Date().getDate() < 31) {
        document.getElementById("greeting").innerHTML = "It's not the last day of the month yet!";
    }
}

function ageFunction() {
    age = document.getElementById("years").value;
    if (age < 18) {
        vote = "Sorry, you have to be eighteen to register to vote!";
    }
    else {
        vote = "Please register to vote!";
    }
    document.getElementById("outcome").innerHTML = vote;
}

function retrieveTime() {
    // call 'Date()' method before 'getHours()' can be used 
    var time = new Date().getHours();
    // state variable before assigned multiple values
    var time_phrase;
    if (time > 0 == time < 12) {
        time_phrase = "Rise and Shine!";
    }
    else if (time >= 12 == time < 18) {
        time_phrase = "Lunch Time!";
    }
    else {
        time_phrase = "Time to settle down!";
    }
    document.getElementById("what_time").innerHTML = time_phrase;
}

add();
sub();
div();