var questionsObj = [
  {
    question: "Commonly used data types do not include:",
    options: ["boolean", "string", "numbers", "alerts"],
    correctAnswer: "alerts"
  },
  {
    question: "Who defines the standards for Javascript?",
    options: ["Node.js", "ECMA", "Oracle", "Microsoft"],
    correctAnswer: "ECMA"
  },
  {
    question: "Which browsers run Javascript?",
    options: ["Chrome", "All Browsers", "Firefox", "Microsoft Edge"],
    correctAnswer: "All Browsers"
  },
  {
    question: "Which tool can you use to ensure code quality?",
    options: ["ESLint", "LiveServer", "Atom", "Open in Browser"],
    correctAnswer: "ESLint"
  }
];


var currentQuestionIdx = 0;
var timeLeft = questionsObj.length * 15;
var timer;
// decremnt time -- set the timer element = to the amount of time left if the user is out of time end the quiz, when the quiz starts the timer needs to be set to a timer interval
// timer = setInterval(function i call to decrement time & set time element, 1000)

var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("timer");
var timerSpanEl = document.getElementById("timer-span");
var optionsEl = document.getElementById("options");
var submitButtonEl = document.getElementById("submit");
var startButtonEl = document.getElementById("start-button");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");
var nextButtonEl = document.getElementById("next-button");

startButtonEl.addEventListener('click', startGame)

function startGame() {
  console.log('started');
  startButtonEl.setAttribute('class','hide');
  questionsEl.removeAttribute('class', 'hide');
  timer = setInterval(setTime, 1000); 
  timerEl.textContent = timeLeft;
  getQuestion();
}

function getQuestion() {
  console.log("hey");
  var currentQuestion = questionsObj[currentQuestionIdx];

  var titleElement = document.getElementById("question-title");
  titleElement.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach(function (option, i) {
    var optionNode = document.createElement("button");
    optionNode.setAttribute("class", "option");
    optionNode.setAttribute("value", option);

    optionNode.textContent = i + 1 + ". " + option;
    optionNode.onclick = userSubmission;


    optionsEl.appendChild(optionNode);
  });
}

function userSubmission() {
  if (this.value !== questionsObj[currentQuestionIdx].correctAnswer) {
    timeLeft -= 15;
    if (timeLeft < 0) {
      timeLeft = 0
    }
    timerEl.textContent = timeLeft;
    optionNode.classList.add('.btn.wrong')
  }
  currentQuestionIdx++;
  if (currentQuestionIdx === questionsObj.length) {
    endGame();
  } else {
    getQuestion();
  }
}


function setTime() {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      endGame();
    }
}

function endGame() {
  clearInterval(timer);

  //show end screen

  //show final score

  //hiding question section
  questionsEl.setAttribute("class", "hide");
}


function saveScore() {
  //window.location.href = "leaderboard.html";
  var initials = initialsEl.value.trim();

  if (initials !== "") {
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    var newScore = {
      score: timeLeft,
      initials: initials
    };

    highscores.push(newScore);
    window.localStorage.setItem("highscores", JSON.stringify(highscores));

    
  }
}

saveScore(); 

//submitButtonEl.onclick = saveScore();
startButtonEl.onclick = startGame();
//initialsEl.onkeyup = initialsCheck(); //if enter key is pressed, call save highscore function

// print high score, retrieve scores from local storage, sort in descending order (highscores.sort(a,b) return a.score b.score), iterate through and display on page
// clear high scores window.localStorage.removeItem(highscores) window.location(reload)
// clear scores button needs an onclick and should be set equal to clear high score function
// create leaderboard logic in different script file


  // if the value of the question(if this.value) isn't equal to questionsObj.currentQuestionIdx.correctAnswer
  // remove some time unless removing the time would make it less than 0
  // display new time on page
  // provide feedback "right/wrong" feedback.setAttribute i need a set timeout function to take the feedback away 1000ms
  // iterate currentQuestionIdx++
  // if currentQuestionIdx === questionsObj.length end the game otherwise call getQuestion 




// need function to end the quiz, update the time, save high score, check for event of a keypress or a button click call for highscoresave function, start game

