document.getElementById("purple").addEventListener("click", changePurple);
document.getElementById("green").addEventListener("click", changeGreen);
document.getElementById("blue").addEventListener("click", changeBlue);
document.getElementById("silver").addEventListener("click", changeSilver);

function changePurple() {
  document.querySelector("body").style.background = "rgba(241, 63, 247, 1)";
  document.querySelector("body").style.color = "white";
}

function changeGreen() {
  document.querySelector("body").style.background = "rgba(0, 253, 81, 1)";
  document.querySelector("body").style.color = "white";
}

function changeBlue() {
  document.querySelector("body").style.background = "rgba(0, 254, 255)";
  document.querySelector("body").style.color = "white";
}

function changeSilver() {
  document.querySelector("body").style.background = "rgba(74, 61, 67, 0.22)";
  document.querySelector("body").style.color = "white";
}
