"strict";

//THE VARIABLE FOR ALL MAJOR PAGES
const main = document.querySelector("main");
const quotePage = document.querySelector(".quoteSectinContent");
const guesSection = document.querySelector(".guessection");

//THE VARIABLE FOR BUTTONS AND DISPLAY CONTENT
const buttonOne = document.querySelector(".buttonOne");
const buttonTwo = document.querySelector(".buttontwo");
const buttonThree = document.querySelector(".buttonthree");
const showModal = document.querySelector(".showmodal");
const guessBackButton = document.getElementById("guessid");
const guessModalButton = document.getElementById("guessmodal");
const quoteBackButton = document.querySelector(".backbuttonOne");

//THE SHOW MODALS BUTTON SCRIPT CONTENT STARTS HERE
buttonOne.addEventListener("click", function () {
  showModal.style.display = "block";
});
buttonTwo.addEventListener("click", function () {
  main.classList.add("hidden");
  guesSection.classList.remove("hidden");
});
buttonThree.addEventListener("click", function () {
  main.classList.add("hidden");

  quotePage.classList.remove("hidden");
});
quoteBackButton.addEventListener("click", function () {
  main.classList.remove("hidden");

  quotePage.classList.add("hidden");
});
guessBackButton.addEventListener("click", function () {
  main.classList.remove("hidden");
  guesSection.classList.add("hidden");
});

//THE QOUTE GENERATOR SCRIPT STARTS HERE
//SELECTING THE REQUIRED CLASS

const quoteText = document.querySelector(".quotetext");
const twitterSymbol = document.querySelector(".buttonOned");
const nextQuote = document.querySelector(".buttontwod");
const title = document.querySelector(".title");
const loader = document.getElementById("loader");
const quoteContainer = document.querySelector(".quotecontainer");

const quoteNextButton = document.querySelector(".backbuttontwo");
//GET QUOTES FROM API

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
//THE GET QUOTE SCRIPT ENDS HERE*********************************************************************************************************************************************************************

//THE GUESS MY NUMBER SCRIPT STARTS HERE
//the guess number variables
const guessSectionBody = document.querySelector(".guessection");
const againButton = document.getElementById("again__btn");
const unKnownBox = document.querySelector(".random-div__box");
const inputBox = document.querySelector(".numinput");
const checkButton = document.querySelector(".numberinput__btn");
const WinOrLossDeclaration = document.querySelector(".correct__pone");
const scoreValue = document.querySelector(".scorevalue");
const highScore = document.querySelector(".highscorevalue");
const parentScore = document.querySelector(".correct__ptwo");
const highScoreParent = document.querySelector(".correct__pthree");
//the guess number declaration
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore01 = 0;

checkButton.addEventListener("click", function () {
  const guess = Number(inputBox.value);

  if (!guess) {
    WinOrLossDeclaration.textContent = "⛔ No Number";
  } else if (guess === secretNumber) {
    unKnownBox.textContent = secretNumber;
    WinOrLossDeclaration.textContent = "💯 Correct Number!";
    parentScore.style.color = "white";
    guessSectionBody.style.backgroundColor = "#06106a";
    unKnownBox.style.width = "15rem";
    highScoreParent.style.color = "white";
    WinOrLossDeclaration.style.color = "white";
    highScore.style.color = "white";
    scoreValue.style.color = "white";
    if (score > highScore01) {
      highScore01 = score;
      highScore.textContent = highScore01;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      WinOrLossDeclaration.textContent = "📉 Number too high";
      score--;
      scoreValue.textContent = score;
    } else {
      WinOrLossDeclaration.textContent = "💥 You loss the game";
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      WinOrLossDeclaration.textContent = "📈 Number too low";
      score--;
      scoreValue.textContent = score;
    } else {
      WinOrLossDeclaration.textContent = "💥 You loss the game";
    }
  }
});
againButton.addEventListener("click", function () {
  WinOrLossDeclaration.textContent = "📉 Start Guessing";
  score = 20;
  scoreValue.textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  inputBox.value = "";
  parentScore.style.color = "black";
  unKnownBox.textContent = "?";
  guessSectionBody.style.backgroundColor = "#9ca0c2";
  unKnownBox.style.width = "6rem";
  highScoreParent.style.color = "black";
  WinOrLossDeclaration.style.color = "black";
  highScore.style.color = "black";
  scoreValue.style.color = "black";
});
