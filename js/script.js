console.log("Hello to all the developers who visit here ❤️. This code already is in the repositiory of Git.")

let changeBackground = document.querySelector(".js-changeBackground");
let container = document.querySelector(".container")
let lightBlueBackground = document.querySelector(".lightBlueBackground");
let nextColorName = document.querySelector(".js-nextColorName");

changeBackground.addEventListener("click", () => {
  container.classList.toggle("lightBlueBackground");
  nextColorName.innerText = container.classList.contains("lightBlueBackground") ? "lightgray" : "lightblue";
});
