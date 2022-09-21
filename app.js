console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
let searchButton = document.querySelector("#submitSearch");
let searchInput = document.querySelector("#searchWord");
let feedbackElement = document.querySelector("#feedback");
let imageElement = document.querySelector("#imageContainer > img");

const GIPHY_URL = "https://api.giphy.com/v1/gifs/translate";
const GIPHY_KEY = "DbVtXYdw6VbrJCgQB4UwhcKYZSCZ0eKQ";

// Exercise 2 Section
searchButton.addEventListener("click", (event) => {
  fetch(`${GIPHY_URL}?api_key=${GIPHY_KEY}&s=${searchInput.value}`)
    .then((res) => res.json())
    .then((body) => {
      // show the gif on the dom
      imageElement.src = body.data.images.original.url;
    })

    .catch((err) => {
      // show the error message on the dom
      console.error(err);
      feedbackElement.textContent = err.message;
    });
});
