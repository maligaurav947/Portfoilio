"user Strict";
/*
var typed = new Typed(".auto-type", {
  strings: ["Hello", "नमस्ते", "Hola", "Bonjour", "Привет", "Buna ziua"],
  typeSpeed: 150,
  loop: true,
  backSpeed: 150,
});
*/

/*
Hello
नमस्ते
Hola
Bonjour
Привет
Buna ziua
My Name is 
Mali Gaurav
माली गौरवी
Malí Gaurav

*/ //import Typed from "typed.js";

//

const fasolid = document.querySelector(".menu");
const closeBtn = document.querySelectorAll(".cross");
const sideBar = document.getElementById("sideBar");

fasolid.addEventListener("click", function () {
  sideBar.style.display = "block";
  sideBar.style.width = "100vw";
});
const stylingfasoild = function () {
  sideBar.style.display = "block";
};
