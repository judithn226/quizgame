//Creating variables
var startBtn = document.getElementById("start");
var timeBtn = document.getElementById("time");
var mainScreen = document.getElementById("mainScrn");
var questionEl = document.getElementById("questions");
var questEl2 = document.getElementById("question");
var ansBtn = document.getElementById("answerBtns");

var ansBtn1 = document.getElementById("answerBtn1");
var ansBtn2 = document.getElementById("answerBtn2");
var ansBtn2 = document.getElementById("answerBtn3");
var ansBtn3 = document.getElementById("answerBtn4");

var responseEl = document.getElementById("response");
var endScoreEl = document.getElementById("endScore");
var submit = document.getElementById("submitBtn");
var displayEl =document.getElementById("displaymessage");
var goBack = document.getElementById("goBackBtn");
var clearScore = document.getElementById("clearBtn");

var questionIndex = 0;
var secondsLeft =60;
//Creating Question Array
var quizQstns =[
    {
        question: ""
    }
]
