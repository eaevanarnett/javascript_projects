function React() {
    var x = "This button utilizes the HTML 'onclick' event";
    var y = x.fontcolor("red");
    document.getElementById("click").innerHTML = y;
} // 'innerHTML' modifies the content of the HTML element 

function myFunction() {
    var sent = "Javascript is an object oriented programming language ";
    sent += ";furthermore, it is also an untyped (variable specification is not required) and interpreted (instructions are executed individually) language that supports inheritance and encapsulation (the details of HOW are hidden and only WHAT happens is apparent)";
    document.getElementById("concatenate").innerHTML = sent;
}

function theirFunction() {
    var z = "Color change";
    var a = z.fontcolor("red");
    document.getElementById("change").innerHTML = a;
}