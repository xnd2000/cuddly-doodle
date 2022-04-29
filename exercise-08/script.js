/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "gray";
}

function switchToWhite() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "white";
}

function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "blue";
}

function switchtoYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "yellow";
}

// 2 -- Add an event listener to each circle

grayBtn.addEventListener("click", switchToGray);
whiteBtn.addEventListener("click", switchToWhite);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchtoYellow);
