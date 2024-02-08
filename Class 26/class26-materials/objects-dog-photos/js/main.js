//Get a dog photo from the dog.ceo api and place the photo in the DOM
const url =
  "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";

fetch("https://dog.ceo/api/breeds/image/random")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
