// the arry of questions for the quiz game
var questions = [
    {
     title: "How do you apply background color CSS styles to a web page?", 
     choices:["background-color","colorbackground","color-background","backcolorground"],
    answer:"background-color",
},
 {
     title: 'How to Link to a CSS file to your HTML file?', 
        choices:['rel-style-sheet','<link stylesheet','<link rel="stylesheet" href="styles.css">',' href="styles.css'], 
        answers:'<link rel="stylesheet" href="styles.css">',
 },
 {
      title:'How do you apply JavaScript to a web page?',  
    choices:['<script src="my-code.js"><script>','<script "my-code.js"></script>','<script .js"></script>','<script src="my-code.js"></script>'],
    answers:'<script src="my-code.js"></script>',
 
},
{
    title:'How to change DOCTYPE for HTML5?',
    choices:['<!DOCTYPE >','<DOCTYPE html>','<!DOC html>','<!DOCTYPE html>'],
    answers:'<!DOCTYPE html>',
},
]

var timerId;
var time = 75;
var currentQuestionIndex = 0;

var startButton = document.querySelector("#start");
var startScreenEl = document.querySelector("#start-screen");
var questionsEl = document.querySelector("#questions");
var timeEl = document.querySelector("#time");
var submitButton = document.querySelector('#submit')

var questionClick = function(event) {
    var userGuess = event.target.value;
    var correctAnswer = questions[currentQuestionIndex].answer

    if (userGuess === correctAnswer) {
        time = time -15;

        if(time < 0) {
            time = 0 
        }

        timeEl.textContent = time;
    }
currentQuestionIndex++;
if (currentQuestionIndex === questions.length) {
    quizEnd();
}else {
    getQuestion();
}
};

var getQuestion = function() {
var currentQuestion = questions[currentQuestionIndex];

var questionTitleEl = document.querySelector("#question-title");
questionTitleEl.textContent = currentQuestion.title;
var choicesEl = document.querySelector("#choices");
choicesEl.innerHTML = '';

for (var i = 0; i < currentQuestion.choices.length; i++ ) {
    var buttonChoicesEl = document.createElement('button');
    buttonChoicesEl.setAttribute("value", currentQuestion.choices[i]);
    buttonChoicesEl.textContent = i + '.' + currentQuestion.choices[i];
    buttonChoicesEl.addEventListener('click', questionClick);

choicesEl.appendChild(buttonChoicesEl);
}
};

var quizEnd = function () {
    clearInterval(timerId);
    questionsEl.classList.toggle('hide');
    var finalScoreEL = document.querySelector('#final-score');
    finalScoreEL.textContent = time;
    var endScreenEl = document.querySelector('#end-screen');
    endScreenEl.classList.toggle('hide');
}

var clockTick = function () {
    time--;
    timeEl.textContent = time;
if (time <= 0) {
    quizEnd();
}
};

var startQuiz = function () {
    startScreenEl.classList.toggle('hide');
    questionsEl.classList.toggle('hide');
    timerId = setInterval(clockTick, 1000);
    getQuestion();
};

var saveHighScore = function() {
    var userInitialsEL = document.querySelector("#initials");
    var userInitialsValue = userInitialsEL.value.trim();
    var newScore = {
        initials: userInitialsValue,
        score: time
    };

var highScore = JSON.parse(localStorage.getItem('highscores')) || [];

highScore.push(newScore);
localStorage.setItem('highscore', JSON.stringify(highScore));
location.href = "highScores.html";
};



startButton.addEventListener('click', startQuiz)
submitButton.addEventListener('click',saveHighScore)



