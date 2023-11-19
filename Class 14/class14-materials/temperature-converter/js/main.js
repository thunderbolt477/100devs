//Write your pseduo code first!

// get Number
// do conversion
// display text

let temp = document.getElementById("temp").value;

function cConversion() {
  temp = temp * (9 / 5) + 32;
  document.getElementById("display").innerHTML = `${temp} degrees Celsius`;
}

function fConversion() {
  temp = (temp - 32) * (5 / 9);
  document.getElementById("display").innerHTML = `${temp} degrees Fahrenheit`;
}

document.getElementById("fConversion").addEventListener("click", fConversion);
document.getElementById("cConversion").addEventListener("click", cConversion);
