var h3 = document.querySelector("h3");
var color1 = document.getElementsByClassName("color1")[0];
var color2 = document.getElementsByClassName("color2")[0];
var body = document.getElementById("change");
console.log("h3");

function setGradient(){
    body.style.background = "linear-gradient(to right, "+ color1.value +", " + color2.value + ")";
    h3.textContent = body.style.background + ";";
}



color1.addEventListener("input", setGradient); 

color2.addEventListener("input", setGradient);