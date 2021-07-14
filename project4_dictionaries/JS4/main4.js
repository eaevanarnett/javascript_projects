function myDictionary() {
    var computer = {
        brand: "Hewlett-Packard", 
        operating_system: "Windows 10",
        processor: "Intel Core i7-1165G7",
        display: "15.6 inch",
        graphics: "Intel Iris Xe",
        color: "nightfall black", 
    };
    delete computer.color;
    // Using 'delete' as the operator
    document.getElementById("dictionary").innerHTML = computer.color;
    // Displays 'undefined' due to deletion 
}