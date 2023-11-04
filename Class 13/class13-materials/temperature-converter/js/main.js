//Write your pseduo code first!

// if you want c or f
// what you are converting from
// posting the conversion
// the math for conversion

document.querySelector("#submit").addEventListener("click", conversion);

function conversion() {
  let temp = document.getElementById("temp").value;
  convertedTemp = temp * (9 / 5) + 32;
  document.getElementById("displayText").innerHTML = convertedTemp;
}
