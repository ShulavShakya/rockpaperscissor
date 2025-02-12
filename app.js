let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndx = Math.floor(Math.random() * 3);
  return options[randIndx];
};

//draw game
const drawGame = () => {
  console.log("Game was draw");
  wltext.innerText = "Game was draw. Try again?";
  wltext.style.backgroundColor = "#002";
};

const showWinner = (userWin) => {
  if (userWin) {
    userScore++;
    console.log("You win");
    us.innerText = userScore;
    wltext.innerText = "You win";
    wltext.style.backgroundColor = "green";
  } else {
    compScore++;
    cs.innerText = compScore;
    console.log("You lose.");
    wltext.innerText = "You lose";
    wltext.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice = ", userChoice);
  uc.innerHTML = userChoice;
  //generate computer choice
  const compChoice = genCompChoice();
  console.log("comp choice = ", compChoice);
  cc.innerHTML = compChoice;

  if (userChoice === compChoice) {
    //drawgame
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === rock) {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === paper) {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin);
  }
};

//userchoice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

let wltext = document.getElementById("msg");
let us = document.getElementById("user-score");
let cs = document.getElementById("comp-score");
let uc = document.getElementById("uc");
let cc = document.getElementById("cc");
