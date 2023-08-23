// creo array de colores
const colors = ["red", "blue", "rgba(133,122,300)", "#f15025","green"];

// DOM elements
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// eventListeners

btn.addEventListener("click", function doSomething () {
  //get random number between 0-3 colors [0]
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber]; // select the element we want to the style to change
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}


