document.getElementById("cityForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const city = document.getElementById("city").value.trim();

  if (city) {
    getFetch(city)
  } else {
    alert("Please enter a city name")
  }
})


function getFetch(city) {
  const formattedCity = city.toLowerCase().replace(/\s+/g, "_");
  const url = `https://api.openbrewerydb.org/v1/breweries?by_city=${formattedCity}&per_page=50`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayBreweries(data);
    })
    .catch((err) => {
      console.error(`Error: ${err}`);
      alert("Failed to fetch data. Please try again later.");
    });
}

function displayBreweries(breweries) {
  const breweryList = document.getElementById("breweryList");
  breweryList.innerHTML = "";
  
  if (breweries.length === 0){
    breweryList.textContent = "No breweries found for the specified city"
    return;
  }

  breweries.forEach((brewery) =>{
    const breweryElement = document.createElement("article");
    breweryElement.classList.add("brewery")

    const name = document.createElement("h2");
    name.textContent = brewery.name

    const address = document.createElement("p");
    address.textContent = brewery.address_1 
      ? `${brewery.address_1}, ${brewery.city} ${brewery.postal_code}`
      : `${brewery.city} ${brewery.postal_code}`;

      const website = document.createElement("p");
      const websiteLink = document.createElement("a");
      websiteLink.href = brewery.website_url;
      websiteLink.textContent = brewery.website_url;
      websiteLink.target = "_blank";
      website.appendChild(websiteLink);
  
      breweryElement.appendChild(name);
      breweryElement.appendChild(address);
      breweryElement.appendChild(website);
      breweryList.appendChild(breweryElement);
  })
}
