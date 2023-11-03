document.querySelector("#check").addEventListener("click", check);

function check() {
  const day = document.querySelector("#day").value;

  //Conditionals go here
  if (day.toLowerCase() === "tuesday" || day.toLowerCase() === "thursday") {
    document.querySelector("#placeToSee").innerHTML = "Class Day";
  } else if (
    day.toLowerCase() === "saturday" ||
    day.toLowerCase() === "sunday"
  ) {
    document.querySelector("#placeToSee").innerHTML = "Weekend";
  } else {
    document.querySelector("#placeToSee").innerHTML = "Grind Day";
  }
  // document.getElementById("queryForm").reset();
}
