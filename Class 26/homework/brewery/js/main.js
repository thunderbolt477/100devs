//Example fetch using pokemonapi.co
// document.querySelector("button").addEventListener("click", getFetch);

// function getFetch(){
//   const choice = document.querySelector('input').value
//   const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

fetch("https://api.openbrewerydb.org/v1/breweries")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    document.querySelector("h2").innerText = data[0].name;
  })
  .catch((err) => {
    console.log(`error: ${err}`);
  });
