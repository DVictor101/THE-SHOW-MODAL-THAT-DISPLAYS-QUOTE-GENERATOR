"strict";
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttontwo");
const buttonThree = document.querySelector(".buttonthree");
const showModal = document.querySelector(".showmodal");
const main = document.querySelector(".main");
const quotePage = document.querySelector(".quoteSectinContent");

//THE SCRIPT CONTENT STARTS HERE
buttonOne.addEventListener("click", function () {
  showModal.style.display = "block";
});
buttonTwo.addEventListener("click", function () {
  showModal.style.display = "block";
});
buttonThree.addEventListener("click", function () {
  main.classList.add("hidden");
  quotePage.classList.remove("hidden");
});

//THE QOUTE GENERATOR SCRIPT STARTS HERE
//SELECTING THE REQUIRED CLASS

const quoteText = document.querySelector(".quotetext");
const twitterSymbol = document.querySelector(".buttonOned");
const nextQuote = document.querySelector(".buttontwod");
const title = document.querySelector(".title");
const loader = document.getElementById("loader");
const quoteContainer = document.querySelector(".quotecontainer");
const quoteBackButton = document.querySelector(".backbuttonOne");
const quoteNextButton = document.querySelector(".backbuttontwo");
//GET QUOTES FROM API

quoteBackButton.addEventListener("click", function () {
  quotePage.classList.add("hidden");
  main.classList.remove("hidden");
});

let apiQuotes = [];

function newQuotes() {
  const quotes = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

  //TO CHECK IF AUTHOR FIELD IS BLANK AND ADJUST IF NOT

  if (!quotes.author) {
    title.textContent = "unknown";
  } else {
    title.textContent = quotes.author;
  }
  //Check the code lenght to determine the title
  if (quotes.text.length < 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  //set the quote and hide loader

  quoteText.textContent = quotes.text;
}

async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuotes();
  } catch (error) {}
}

//TWEET QUOTE
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${title.textContent} `;
  window.open(twitterUrl, "_blank");
}
//Event Listeneres
nextQuote.addEventListener("click", newQuotes);
twitterSymbol.addEventListener("click", tweetQuote);

//on page load
//getQuotes();
//loading();
//show loading

getQuotes();
