// Selects element by class
let timeEl = document.querySelector(".time");

// Selects element by id
let mainEl = document.getElementById("main");

let secondsLeft = 75;

function setTime() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left.";

    if (secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      sendMessage();
    }
  }, 1000);
}

let start = document.querySelector("#start");
let startBtn = document.querySelector("#startBtn");
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

let q1 = document.querySelectorAll(".option1");
// Loops through divTags to set each one to have the color blue and the font size of 30px
for (var i = 0; i < q1.length; i++) {
  q1[i].addEventListener("click", function () {
    if (this.hasAttribute("data-answer")) {
      console.log("true!");
      localStorage.setItem("quizScore", "1");
    } else {
      console.log("false!");
      secondsLeft -= 5;
    }
  });
}
