//timer var 
var timerEl = document.getElementById('countdown')
var startButton = document.getElementById('start')
var mainEl = document.getElementById('main');

var message ='Time is up'
var words = message.big('');  

//timer function starts at 60 
function countdown() {
    var timeLeft = 60;

    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
          timerEl.textContent = timeLeft + ' seconds remaining';
          timeLeft--;
        } else if (timeLeft === 1) {
          timerEl.textContent = timeLeft + ' second remaining';
          timeLeft--;
        } else {
          timerEl.textContent = '';
          clearInterval(timeInterval);
          displayMessage();
        }
      }, 1000);
    }
    // display message
    function displayMessage() {
        var wordCount = 0;
         
            if (words[wordCount] === undefined) {
              clearInterval(msgInterval);
            } else {
              mainEl.textContent = words[wordCount];
              wordCount++;
            }
          }

startButton.onclick= countdown;

//the Quiz game vars
var startButton = document.getElementById('start')
var nextButton = document.getElementById('next-btn')
var questionContainerElement= document.getElementById('questions-container')
var questionElement = document.getElementById('questions')
var answerButtonsElement = document.getElementById('answer-btn')
var endButton = document.getElementById('end-game')

let shuffledQuestion, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
currentQuestionIndex++
setNextQuestion()
})

function startGame() {
startButton.classList.add('hide')
shuffledQuestion = question.sort(()=> Math.random()-.5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion (shuffledQuestion[currentQuestionIndex])
}

function showQuestion(question) {
questionElement.innerText = question.questions
question.answers.forEach(answer =>  {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct ) {
        button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)

});
}
//removes unwanted elements
function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectButton = e.target 
    var correct = selectButton.dataset.correct
       setStatusClass(document.body,correct) 
        Array.from(answerButtonsElement.children).forEach( button => {
        setStatusClass(button,button.dataset.correct)
    })
    if (correct) { window.alert('correct')
        
    } else { window.alert('wrong')
        
    }
    if(shuffledQuestion.length > currentQuestionIndex ) {
        nextButton.classList.remove('hide')
    } else {
        endButton.innerText = 'End Game'
        endButton.classList.remove
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    }else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

// the arry of questions for the quiz game
var question = [
    {
     questions: 'How do you apply background color CSS styles to a web page?', 
     answers:[ 
    { text:'background-color',correct:true },
    { text:'colorbackground',correct:false },
    { text:'color-background',correct:false},
    { text:'backcolorground',correct:false}
 ]
},
{
    questions: 'How to Link to a CSS file to your HTML file?', 
    answers:[ 
   { text:'rel-style-sheet',correct:false },
   { text:'',correct:false },
   { text:'<link rel="stylesheet" href="styles.css">',correct:true },
   { text:'<link stylesheet',correct:false }
]
},
{
    questions: 'How do you apply JavaScript to a web page?', 
    answers:[ 
   { text:'<script src="my-code.js"><script>',correct:false },
   { text:'<script "my-code.js"></script>',correct:false },
   { text:'<script .js"></script>',correct:false },
   { text:'<script src="my-code.js"></script>',correct:true },
]
},
{
    questions: 'How to change DOCTYPE for HTML5? ?', 
    answers:[ 
   { text:'<!DOCTYPE >',correct:false},
   { text:'<DOCTYPE html>',correct:false },
   { text:'<!DOC html>',correct:false },
   { text:'<!DOCTYPE html>',correct:true },
]
},
]