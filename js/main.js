/** @format */

let stars1 = document.getElementById(`stars1`);
let moon2 = document.getElementById(`moon2`);
let mountains3 = document.getElementById(`mountains3`);
let mountains4 = document.getElementById(`mountains4`);
let river5 = document.getElementById(`river5`);
let boat6 = document.getElementById(`boat6`);
let moon = document.querySelector(`.moon`);
window.onscroll = function () {
  let value = scrollY;
  stars1.style.left = value + `px`;
  moon2.style.top = value * 3 + `px`;
  mountains3.style.top = value * 2 + `px`;
  mountains4.style.top = value * 1.5 + `px`;
  river5.style.top = value + `px`;
  boat6.style.top = value + `px`;
  boat6.style.left = value * 3 + `px`;
  moon.style.fontSize = `${value}px`;
  if (scrollY >= 53) {
    moon.style.fontSize = 53 + `px`;
    moon.style.position = `fixed`;
    if (scrollY >= 393) {
      moon.style.display = `none`;
    } else {
      moon.style.display = `block`;
    }
    if (scrollY >= 136) {
      document.querySelector(`.main`).style.background =
        "linear-gradient(#376281,#10001f)";
    } else {
      document.querySelector(`.main`).style.background =
        "linear-gradient(to top,#200016, transparent)";
    }
  }
};
