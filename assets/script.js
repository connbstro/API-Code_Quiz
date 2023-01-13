// Selects element by class
let timeEl = document.querySelector(".time");
let quizComplete = false;
let scores = [];
let storedScores = "";
if (localStorage.getItem("quizSave")) {
  storedScores = JSON.parse(localStorage.getItem("quizSave"));
}

// Selects element by id
let mainEl = document.getElementById("main");

let secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0 || quizComplete == true) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      // sendMessage();
    }
  }, 1000);
}

let start = document.querySelector("#start");
let startBtn = document.getElementById("startBtn");
let question1 = document.querySelector("#question1");

// Start Quiz
startBtn.addEventListener("click", function () {
  start.setAttribute("data-state", "hidden");
  question1.setAttribute("data-state", "");
  setTime();
  localStorage.setItem("quizScore", "0");

  //   function changeOrange(event) {
  //     // event.stopPropagation();
  //     event.currentTarget.setAttribute(
  //       "style",
  //       "background-color: #EE442F; color: white;"
  //     );
  //   }
});

let currentScore = 0;
let q1 = document.querySelectorAll(".option1");
// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < q1.length; i++) {
  q1[i].addEventListener("click", function () {
    if (this.hasAttribute("data-answer")) {
      currentScore += 1;
      localStorage.setItem("quizScore", currentScore);
      question1.setAttribute("data-state", "hidden");
      question2.setAttribute("data-state", "");
    } else {
      console.log("false!");
      secondsLeft -= 5;
      alert("false!");
      question1.setAttribute("data-state", "hidden");
      question2.setAttribute("data-state", "");
    }
  });
}

let q2 = document.querySelectorAll(".option2");
// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < q2.length; i++) {
  q2[i].addEventListener("click", function () {
    if (this.hasAttribute("data-answer")) {
      currentScore += 1;
      localStorage.setItem("quizScore", currentScore);
      question2.setAttribute("data-state", "hidden");
      question3.setAttribute("data-state", "");
    } else {
      console.log("false!");
      alert("false!");
      question2.setAttribute("data-state", "hidden");
      question3.setAttribute("data-state", "");
      secondsLeft -= 5;
    }
  });
}

let q3 = document.querySelectorAll(".option3");
// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < q3.length; i++) {
  q3[i].addEventListener("click", function () {
    if (this.hasAttribute("data-answer")) {
      currentScore += 1;
      localStorage.setItem("quizScore", currentScore);
      question3.setAttribute("data-state", "hidden");
      // let final = querySelector("#final");
      final.setAttribute("data-state", "");
    } else {
      console.log("false!");
      alert("false!");
      question3.setAttribute("data-state", "hidden");
      final.setAttribute("data-state", "");
      secondsLeft -= 5;
    }
    quizComplete = true;
    document.getElementById("score").innerHTML =
      localStorage.getItem("quizScore");
  });
}

let finalScore = localStorage.getItem("quizScore");
// document.querySelector("#score").value(finalScore);

let form = document.querySelector("#scoreForm");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // create score object from submission
  let initials = document.querySelector("#initials").value;
  let score = localStorage.getItem("quizScore");
  let newScore = {
    initials: initials,
    score: score,
  };

  scores.push(JSON.stringify([newScore]));

  // Add to the existing value
  // let saveScore = saved.push(newScore);
  console.log("submit");

  // set new submission to local storage
  localStorage.setItem("quizSave", scores);
});
