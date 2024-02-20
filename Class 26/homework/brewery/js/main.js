document.querySelector("button").addEventListener("click", function () {
  const city = document.getElementById("city").value; // Get the value of the city input
  getFetch(city); // Pass the city value to the getFetch function
});

function getFetch(city) {
  let formatedCity = city.toLowerCase().replace(" ", "&20");
  let url = `https://api.openbrewerydb.org/v1/breweries?by_city=${formatedCity}&per_page=3`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayBreweries(data);
    })
    .catch((err) => {
      console.log(`error: ${err}`);
    });
}

function displayBreweries(breweries) {
  const breweryList = document.getElementById("breweryList");
  breweryList.innerHTML = "";

  breweryList.forEach((brewery) => {
    const breweryElement = document.createElement("div");
    breweryElement.classList.add("brewery");

    const name = document.createElement("h2");
    name.textContent = brewery.name;

    const type = document.createElement("p");
    type.textContent = `Type: ${brewery.type}`;

    const city = document.createElement("p");
    city.textContent = `City: ${brewery.city}`;

    breweryElement.appendChild(name);
    breweryElement.appendChild(type);
    breweryElement.appendChild(city);

    breweryList.appendChild(breweryElement);
  });
}
