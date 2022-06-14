"user Strict";
/*

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

 //
//
var typed;
 typed = new Typed(".animation", {

  strings: ["Hello", "नमस्ते", "Hola", "Bonjour", "Привет", "Buna ziua"],
  typeSpeed: 150,
  loop: true,
  backSpeed: 150
});
*/

const fasolid = document.getElementById("menu");
const closeBtn = document.getElementById("cross");
const sideBar = document.getElementById("sideBar");

fasolid.addEventListener("click", function () {
  sideBar.style.display = "block";
  closeBtn.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  sideBar.style.display = "none";
  closeBtn.style.display = "none";
});
