//DECLARE GLOBAL VARIABLES
// ---------------------------------------------------------------------------- //
//tqList is declared in separate file 'questionlist.js', contains all questions/answers for game
var score = 0;
var correct = "Correct!";
var incorrect = "Incorrect!";
var timeLeft = 90;
var playerInitials = "abc";
var choicesList = [];
var index = 0;
var length = tqList.length;
console.log(length);
var highScoreList = {
  playerInitials: "MOM",
  playerScore: 50
};
localStorage.setItem("highScoreList", JSON.stringify(highScoreList)); 

//DECLARE VARS TO 'GET' ELEMENTS ONTO PAGE
var timerEl = document.getElementById('currTime');
var scoreEl = document.getElementById('myScore');
var buttonEl = document.getElementById('gobutton');
var statusEl = document.getElementById('status');
var highScoreEl = document.getElementById('highScoresID');

//DECLARE FUNCTIONS
// ---------------------------------------------------------------------------- //

//DECLARE EVENT LISTENERS FOR START BUTTON - START THE GAME
buttonEl.addEventListener("click", countdown);

//FUNCTION TO START TIMER: decrements by 1 second until zero
function countdown() {
  //counter starts with 90 seconds on clock per global var `timeLeft` initialization
  //Hide the start button to prevent mutliple clicks/timer events
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


  document.getElementById("answerListID").addEventListener("click", function(event) {
    // verify list item is grabbed
    if(event.target && event.target.nodeName == "LI") {
      // var userPicked = checkAnswer(event.target.textContent); 
      checkUserResponse(event.target.textContent);
    }
  });

function checkUserResponse(userClicked) {
    if(index < length) {
      if (userClicked == tqList[index].answer) {
          score++;
          scoreEl.textContent = score;
          // statusEl.textContent = correct; 
        }
          else if (timeLeft > 10) {
          timeLeft = timeLeft - 10;
          // statusEl.textContent = incorrect; 
        }
        else {
          timeLeft = 0;
          endOfGame();
        }
      index++;
      if (index == length)
        endOfGame();
      else
      displayQuestion();
     }
      else {
        endOfGame();
    }
    return "";
  }

  function endOfGame() {
    alert("game over");
  }

// function endOfGame() {
//   timerEl.textContent = 0;
//   var inits = prompt('Enter your initials to record your score?', 'ABC');
//   if ((inits) || (inits === "")) {
//     var scoreData = localStorage.getItem("highScoreList");
//     scoreData = scoreData ? JSON.parse(scoreData) : {}; 
//     scoreData["playerInitials"] = inits;
//     scoreData["playerScore"] = score;
//     localStorage.setItem("highScoreList", JSON.stringify(scoreData));
//     writeScore();    
//     EOG();
//   }
//   else
//     EOG();
// }

// function writeScore() {
//   var tempPlayer = parseInt(localStorage["highScoreList.playerInidtials"]);
//   var tempScore = parseInt(localStorage["highScoreList.playerScore"]);
//   var newScore = tempPlayer + "          " + tempScore;
//   // console.log(newScore); 
//   // highScoreEl.appendChild(addHighScorePara(newScore)); 
//   return "";
//  }

// function addHighScorePara(newHS) {
//   console.log(newHS);
//   var tempPara = document.createElement('p');
//   tempPara.textContent = newHS;
//   return tempPara; 
// }

function EOG() {
  // setTimeout(function(){ location.reload(); }, 3000);  
  alert("temp game over man");
}
//Ask first question
displayQuestion();


