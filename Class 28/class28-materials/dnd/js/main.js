//Example fetch using DnD5eAPI - place subclasses in ul
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const choice = document.querySelector("input").value;
  const url = `https://www.dnd5eapi.co/api/spells/${choice}`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      document.querySelector("ul").innerHTML = "";
      data.subclasses.forEach((x, index) => {
        console.log(x.name);
        const li = document.createElement("li");
        li.textContent = x.name;
        document.querySelector("ul").appendChild(li);
      });
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
