//DECLARE GLOBAL VARIABLES
//triviaQuestionList is set in separate script, contains all questions/answers for game
// using localStorage.setItem("triviaQuestionList", JSON.stringify(trivaQuestionList));
//test 2

var score = 0;
var timeLeft = 5;
var playerInitials = "abc";
var choicesList = [];
var answerClicked = false;
var index = 1;
var tqList = [];
tqList = triviaQuestionList;
console.log(typeof(tqList));
console.log(tqList);


  //get the master question list, store in `tqList`
  // var tqList = JSON.parse(localStorage.getItem("triviaQuestionList")); 

//DECLARE VARS TO 'GET' ELEMENTS ON PAGE
var timerEl = document.getElementById('currTime');
var scoreEl = document.getElementById('myScore');
var buttonEl = document.getElementById('gobutton');
var statusEl = document.getElementById('status');

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
  console.log(typeof(tqList));
  if(index < 5) {
    //write question to page for current element index 
    document.getElementById("triviaQuestionID").innerHTML = tqList[index].question; 
    //Set up list elements: array of 4 <li>, are children of "answerListID"
    choicesList = document.getElementById("answerListID").children;
    //Display: copy answers array items from local storage tqList[index] into 4 <li> elements
    for(var i = 0; i < choicesList.length; i++ ) {
      choicesList[i].textContent = tqList[index].choices[i];
    }
  }
  return "";
}
// displayQuestion();

function checkUserResponse() {
  document.getElementById("answerListID").addEventListener("click", function(event) {
    // verify list item is grabbed
    if(event.target && event.target.nodeName == "LI") {
      // var userPicked = checkAnswer(event.target.textContent); 
      console.log(tqList[index]);
      if (event.target.textContent == tqList[index].answer) {
      score++;
      scoreEl.textContent = score;
      }
      else if (timeLeft > 10) {
      timeLeft = timeLeft - 10;
      }
      else {
      timeLeft = 0;
      endOfGame();
      }
    }
  });
}



function endOfGame() {
  timerEl.textContent = 0;
  setTimeout(function(){ alert("End of Game! Well done!"); }, 1000);
  setTimeout(function(){ location.reload(); }, 2000);
}

