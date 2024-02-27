//Example fetch using pokemonapi.co
document.querySelector("button").addEventListener("click", getFetch);

function getFetch() {
  // const choice = document.querySelector("input").value;
  // console.log(choice);
  const isbn = 9780980200447;
  const url = `https://openlibrary.org/isbn/9780140328721.json`;

  fetch(url)
    .then((res) => res.json()) // parse response as JSON
    .then((data) => {
      console.log(data.title);
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}
