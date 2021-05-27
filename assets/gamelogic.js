//DECLARE GLOBAL VARIABLES
//triviaQuestionList is set in separate script, contains all questions/answers for game
// using localStorage.setItem("triviaQuestionList", JSON.stringify(trivaQuestionList));
var score = 0;
var timeLeft = 90;
var playerInitials = "abc";
var choicesList = [];
var j = 0;  //QUESTION INDEX is j

  //get the master question list, store in `tqList`
  var tqList = JSON.parse(localStorage.getItem("triviaQuestionList"));
  // console.log(tqList);
  var tqLength = tqList.length;
  console.log(tqLength);

//DECLARE VARS TO 'GET' ELEMENTS ON PAGE
var timerEl = document.getElementById('currTime');
var scoreEl = document.getElementById('myScore');
var buttonEl = document.getElementById('gobutton');

buttonEl.addEventListener("click", countdown);

function countdown() {
  //counter starts with 90 seconds on clock
  var timeLeft = 90;
  buttonEl.style.display = "none";

  // Use the `setInterval()` method to 1 sec countdown
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show time left
      timerEl.textContent = timeLeft;
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else {
      // Time gets to zero, stop timer & countdown
      timerEl.textContent = "0";
      clearInterval(timeInterval);
      //for future use - CALL END THE GAME FXN
    }
  }, 1000);
  
  console.log(timeInterval);
  //display the trivia question
  displayQuestion();
  //get user answer
  userAnswer();
  return timeLeft;
}

//DISPLAY THE CURRENT QUESTION AND ANSWER TEXT TO PAGE
function displayQuestion() {
  //write question to page for current element index j
    document.getElementById("triviaQuestionID").innerHTML = tqList[j].question; 

    // var choicesList = [];
    choicesList = document.getElementById("answerListID").children;
  
    for(var i =0; i < choicesList.length; i++ ) {
      choicesList[i].textContent = tqList[j].choices[i];
    }
}

function userAnswer() {
  var answerLiEl = document.getElementById("answerListID").getElementsByTagName('li');
  //add click event to all li elements in answer list
  for (var i = 0; i < answerLiEl.length; i++) {
      answerLiEl[i].addEventListener('click', checkAnswer, false);  //on click, check answer
  }

  function checkAnswer() {
    if(this.textContent === tqList[j].answer)
    {
      console.log("you got it dude");
      timeLeft++;
      // timeLeft = timeLeft +10;
      console.log(timeLeft);
      score++;
      timerEl.textContent = timeLeft;
    }
    else
    {
      console.log("nope");
      timeLeft--;
    }
    return timeLeft;
  }
}
