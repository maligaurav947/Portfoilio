"user Strict";

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

//PreLoader
const preLoader = document.getElementById("loader");

function myFunction() {
  preLoader.style.display = "none";
}
