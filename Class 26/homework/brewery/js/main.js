document.querySelector("button").addEventListener("click", function () {
  const city = document.getElementById("city").value; // Get the value of the city input
  getFetch(city); // Pass the city value to the getFetch function
});

function getFetch(city) {
  let formatedCity = city.toLowerCase().replace(" ", "_");
  let url = `https://api.openbrewerydb.org/v1/breweries?by_city=${formatedCity}&per_page=50`;

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

  for (let i = 0; i < breweries.length; i++) {
    const breweryElement = document.createElement("div");
    const name = document.createElement("h2");
    name.textContent = breweries[i].name;
    const address = document.createElement("p");
    if (breweries[i].address_1 === null) {
      address.textContent = `${breweries[i].city} ${breweries[i].postal_code}`;
    } else {
      address.textContent = `${breweries[i].address_1}, ${breweries[i].city} ${breweries[i].postal_code}`;
    }

    const website = document.createElement("p");
    website.textContent = breweries[i].website_url;

    breweryElement.appendChild(name);
    breweryElement.appendChild(address);
    breweryElement.appendChild(website);
    breweryList.appendChild(breweryElement);
  }
}

// breweries.forEach((brewery, i) => {
//   const breweryElement = document.createElement("div");
//   breweryElement.classList.add("brewery");

//   const name = document.createElement("h2");
//   name.textContent = brewery[i].name;

//   const type = document.createElement("p");
//   type.textContent = `Type: ${brewery[i].type}`;

//   const city = document.createElement("p");
//   city.textContent = `City: ${brewery[i].city}`;

//   breweryElement.appendChild(name);
//   breweryElement.appendChild(type);
//   breweryElement.appendChild(city);

//   breweryList.appendChild(breweryElement);
// });
