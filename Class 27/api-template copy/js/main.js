//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  const url =
    "https://api.nasa.gov/planetary/apod?api_key=mlhH5LztXFC6ezXfxDvBmObxvrlSnAGC3hA1kiBf";

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data);
      // document.querySelector("img").src = data.hdurl;
      // document.querySelector("h2").innerText = data.explanation;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
  s;
}
