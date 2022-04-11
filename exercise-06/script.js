// grab english text

let english_text = document.querySelector("#english_content");

// grab portuguese text
let portuguese_text = document.querySelector("#portuguese_content");

// get eng button
let en_btn = document.querySelector(".en");

//get pt button
let pt_btn = document.querySelector(".pt");

function translateToEnglish() {
  //grab title
  let h1 = document.querySelector("h1");
  //translate title
  h1.textContent = "houses or museums?";
  //hide pr text, show eng text
  portuguese_text.style.display = "none";
  english_text.style.display = "flex";
}

function translateToPortuguese() {
  let h1 = document.querySelector("h1");
  h1.textContent = "casas ou museus?";
  english_text.style.display = "none";
  portuguese_text.style.display = "flex";
}

//add event listener
en_btn.addEventListener("click", translateToEnglish);
pt_btn.addEventListener("click", translateToPortuguese);
