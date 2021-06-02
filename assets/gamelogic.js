//DECLARE GLOBAL VARIABLES
// ---------------------------------------------------------------------------- //
//tqList is declared in separate file 'questionlist.js', contains all questions/answers for game
var score = 0;
var timeLeft =90;
var inits = "";
var choicesList = [];
var index = 0;
var length = tqList.length;
var gameStarted = false;
// var highScores = JSON.parse(window.localStorage.getItem("highscores")) || []; //MOVED THIS DECLARATION LOWER NEXT TO WRITE SCORES FXN FOR VISIBILITY


//DECLARE VARS TO 'GET' ELEMENTS ONTO PAGE
var timerEl = document.getElementById('currTime');
var scoreEl = document.getElementById('myScore');
var buttonEl = document.getElementById('gobutton');

//DECLARE FUNCTIONS
// ---------------------------------------------------------------------------- //

//DECLARE EVENT LISTENERS FOR START BUTTON - START THE GAME
buttonEl.addEventListener("click", countdown);

//FUNCTION TO START TIMER: decrements by 1 second until zero
function countdown() {
  //counter starts with 90 seconds on clock per global var `timeLeft` initialization
  //Hide the start button to prevent mutliple clicks/timer events
  gameStarted = true;
  buttonEl.style.display = "none";

  // Use the `setInterval()` method to 1 sec per interval
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show time left
      timerEl.textContent = timeLeft;
      // then Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Time gets to zero, stop timer event & set timer display to static zero
      timerEl.textContent = "0";
      clearInterval(timeInterval);
      //CALL END THE GAME FXN
      endOfGame();
    }
  }, 1000);
  // return timeLeft; 
  return "";
}

//DISPLAY THE CURRENT QUESTION AND ANSWER TEXT TO PAGE
function displayQuestion() {
  if(index < length) {
    //write question to page for current element index 
    // statusEl.textContent = ""; 
    document.getElementById("triviaQuestionID").innerHTML = tqList[index].question; 
    //Set up list elements: array of 4 <li>, are children of "answerListID"
    choicesList = document.getElementById("answerListID").children;
    for(var i = 0; i < choicesList.length; i++ ) {
      choicesList[i].textContent = tqList[index].choices[i];
    }
  }
  return "";
}

//ADD EVENT LISTENER TO GET USER ANSWER CLICKS
  document.getElementById("answerListID").addEventListener("click", function(event) {
    // verify list item is grabbed
    if(event.target && event.target.nodeName == "LI") {
      if(gameStarted == false) {
        alert("Please click start button to begin game.")
      }
      else {
        checkUserResponse(event.target.textContent);
      }
      
    }
  });

//CHECK USER RESPONSE AGAINST CORRECT ANSWER
function checkUserResponse(userClicked) {
    if(index < length) {
      if (userClicked == tqList[index].answer) 
        { 
        //correct answer
        score++;
        scoreEl.textContent = score;
        }
        //incorrect answer, deduct time
        else if (timeLeft > 10) 
        {             
        timeLeft = timeLeft - 10;
        }
        else
        {
          timeLeft = 0;
          // endOfGame(); 
        }
      index++;

        if (index == length) {
          alert("should never get here");  //remove me later
          // endOfGame(); 
        }
        else
          displayQuestion();
        }
      else {
        endOfGame(); 
      }
    return "";
  }

var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

//End of Game caused by running out of time or by reaching last question in list
function endOfGame() {
  timerEl.textContent = 0;  //set timer text output to const zero
  inits = prompt("Enter your initials to record your score?", "ABC"); 
  if ((inits) || (inits === "")) {
    inits = inits.toUpperCase();
    console.log(inits);
    writeScores(inits);
     EOG(); 
  }
  else
    EOG();
}
//push initials and score data to local storage with `highScores` key
function writeScores(initials) {
  var addScore = {
    initials:initials,
     score:score
    };
  highScores.push(addScore);
  localStorage.setItem("highScores", JSON.stringify(highScores)); 
}

//actual end of game calls page reset
function EOG() {
  setTimeout(function(){ location.reload(); }, 500);  
}

//Ask first question
displayQuestion();


