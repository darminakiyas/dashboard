function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("openNav").style.display = "none";
    document.getElementById("closeNav").style.display = "block";
}
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("openNav").style.display = "block";
    document.getElementById("closeNav").style.display = "none";
}
function myFunction(x) {
    if (x.matches) { // If media query matches
        // document.body.style.backgroundColor = "yellow";
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("closeNav").style.display = "none";
        document.getElementById("openNav").style.display = "block";

    } else {
        // document.body.style.backgroundColor = "pink";
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.getElementById("openNav").style.display = "none";
        document.getElementById("closeNav").style.display = "block";
    }
}

var x = window.matchMedia("(max-width: 540px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes



