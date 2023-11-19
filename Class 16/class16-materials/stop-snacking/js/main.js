//Create a function that grabs the number of snacks from the input and tells you to stop that many times

function stopSnacking(snacks) {
  for (let i = 0; i < snacks; i++) {
    document.querySelector("#stops").innerHTML += "STOP SNACKING \n";
  }
}

let help = document.querySelector("#help");

help.addEventListener("click", eventHandler);

function eventHandler() {
  let snacks = document.querySelector("input").value;
  document.querySelector("#stops").innerHTML = "";
  stopSnacking(snacks);
}
