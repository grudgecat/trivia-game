//DECLARE GLOBAL VARIABLES
// ---------------------------------------------------------------------------- //
//tqList is declared in separate file 'questionlist.js', contains all questions/answers for game
var score = 0;
var timeLeft =20;
var inits = "bob";
var choicesList = [];
var index = 0;
var length = tqList.length;

var highScores = {
  length: 0,

  addElem: function addElem(elem) {
      [].push.call(this, elem)
  }
}

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
      if (userClicked == tqList[index].answer) {  //correct answer
          score++;
          scoreEl.textContent = score;
        }
          else if (timeLeft > 10) {             //incorrect answer, deduct time
          timeLeft = timeLeft - 10;
        }
        else {
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
        alert("should never get here");  //remove me later
        // endOfGame(); 
    }
    return "";
  }

function endOfGame() {
  timerEl.textContent = 0;  //set timer text output to const zero

  inits = prompt("Enter your initials to record your score?", "ABC"); 
  if ((inits) || (inits === "")) {
  writeScores(inits);  
     EOG(); 
  }
  else
    EOG();
}

function writeScores(initials) {
  console.log(highScores);
  if (localStorage.getItem("highScores") !== null)
  {
    JSON.parse(localStorage.getItem("highScores"));
    console.log("HS is NOT null");
    highScores.addElem({initials:initials, score:score});
  }
  else
  {
    highScores.addElem({initials:initials, score:score});
    console.log("HS is null");
  }
  localStorage.setItem("highScores", JSON.stringify(highScores));
  console.log("stringify should be called here");
  return "";
}


function EOG() {
  // setTimeout(function(){ location.reload(); }, 2000);  
  alert("eog called");
}

//Ask first question
displayQuestion();


