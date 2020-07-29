//Creating variables
// var startButton = document.getElementById("start");
// var timeBtn = document.getElementById("time");
// var mainScreen = document.getElementById("mainScrn");
// var questionEl = document.getElementById("questions");
// var questEl2 = document.getElementById("question");
// var ansBtn = document.getElementById("answerBtns");

// var ansBtn1 = document.getElementById("answerBtn1");
// var ansBtn2 = document.getElementById("answerBtn2");
// var ansBtn2 = document.getElementById("answerBtn3");
// var ansBtn3 = document.getElementById("answerBtn4");

// var responseEl = document.getElementById("response");
// var endScoreEl = document.getElementById("endScore");
// var submit = document.getElementById("submitBtn");
// var displayEl = document.getElementById("displaymessage");
// var goBack = document.getElementById("goBackBtn");
// var clearScore = document.getElementById("clearBtn");

// var startQuiz = document.getElementById("start");

// var questionIndex = 0;
// var secondsLeft = 60;
//Creating Question Array

var startBtn = document.querySelector("#startBtn");
var counter = 0;

startBtn.addEventListener("click", function () {
  gameContainer.innerTML = "";
});
var questionArr = [
  {
    question: "What tag is used to link Javascript to HTML?",
    answer: ["<img>", "<p>", "<a>", "<script>"],
    correctAnswer: "<script>",
  },
  {
    question: "What kind of brackets are used to denote an array",
    answer: ["curly brackets", "square brackets", "parentheses", "commas"],
    correctAnswer: "square brackets",
  },
  {
    question: "How do you create the syntax for a working function",
    answer: [
      "function {}",
      "function.getElementbyId",
      "function()",
      "function.omgHelp()",
    ],
    correctAnswer: "function()",
  },
  {
    question:
      "If var x = 5, var y = 2, and var z = x + y, what number does var z =?",
    answer: ["7", "9", "10", "x"],
    correctAnswer: "7",
  },
  {
    question: "Which Javascript property returns the length of a string?",
    answer: [
      ".Judith",
      ".length",
      ".graballthevariablesinthisarray",
      ".lengthinesss",
    ],
    correctAnswer: ".length",
  },
  {
    question: "What is the proper way to write code to the console?",
    answer: ["console.herewego()", "console()", "console.log()", "log.this()"],
    correctAnswer: "console.log()",
  },
];

// Making Start Button active
startButton.addEventListener = ("click", startQuiz);

//Starting the quiz and hiding the start screen

function renderQuestions() {
  var currentQuestions = questionArr[counter];

  var newQuestionH1 = document.createElement("h1");
  newQuestionH1.textContent = currentQuestions.q;
  gameContainer.appendChild(newQuestionH1);
}

// Begin timer for the quiz
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeBtn.textContent = "Time: " + secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft === 0 || quizQstns.length === questionIndex) {
      clearInterval(timerInterval);
      finalScore();
    }
  }, 1000);
}

// Checking if Answer buttons are clicked
ansBtn1.addEventListener("click", checkAnswer);
ansBtn2.addEventListener("click", checkAnswer);
ansBtn3.addEventListener("click", checkAnswer);
ansBtn4.addEventListener("click", checkAnswer);

function question() {
  questionEl.textContent = quizQstns[questionIndex].question;

  ansBtn1.textContent = quizQstns[questionIndex].choice1;
  ansBtn1.setAttribute("data-answer", quizQstns[questionIndex].choice1);

  ansBtn2.textContent = quizQstns[questionIndex].choice2;
  ansBtn2.setAttribute("data-answer", quizQstns[questionIndex].choice2);

  ansBtn3.textContent = quizQstns[questionIndex].choice3;
  ansBtn3.setAttribute("data-answer", quizQstns[questionIndex].choice3);

  ansBtn4.textContent = quizQstns[questionIndex].choice4;
  ansBtn4.setAttribute("data-answer", quizQstns[questionIndex].choice4);
}

function checkAnswer() {
  var answer = quizQstns[questionIndex].correctAnswer;

  if (answer === event.target.getAttribute("data-answer")) {
    responseEl.textContent = "Correct!";
    questionIndex++;
    question();
  } else {
    secondsLeft = secondsLeft - 10;
    responseEl.textContent = "Wrong!";
    questionIndex++;
    question();
  }
}

function finalScore() {
  questionEl.classList.add("hide");
  finalScore.classList.remove("hide");
  endScoreEl.textContent = "Your Final Score: " + secondsLeft;
}

submit.addEventListener("click", function () {
  var usrInitials = document.getElementById("inlineFormInput").value.trim();

  var usrScore = { initials: usrInitials, score: secondsLeft };
  var usrHighscore = document.getElementById("userHighScoreList");

  if (usrIntials === "") {
    displayMessageElement.textContent = "Intials must be entered!";
  } else {
    localStorage.setItem("usrScore", JSON.stringify(usrScore));
  }
});
