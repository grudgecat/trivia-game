//DECLARE GLOBAL VARIABLES
//triviaQuestionList is set in separate script, contains all questions/answers for game
// using localStorage.setItem("triviaQuestionList", JSON.stringify(trivaQuestionList));
var score = 0;
var timeLeft = 20;
var playerInitials = "abc";
var choicesList = [];

  //get the master question list, store in `tqList`
  var tqList = JSON.parse(localStorage.getItem("triviaQuestionList"));
  // var j = tqList.length - 1;  //QUESTION INDEX is j
  j = 0;

//DECLARE VARS TO 'GET' ELEMENTS ON PAGE
var timerEl = document.getElementById('currTime');
var scoreEl = document.getElementById('myScore');
var buttonEl = document.getElementById('gobutton');

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
  
  //display the trivia question & answer choices
    displayQuestion();
    //get user answer - click event declared in userAnswer fxn
    userAnswer();
  return timeLeft;
}

//DISPLAY THE CURRENT QUESTION AND ANSWER TEXT TO PAGE
function displayQuestion() {
  //write question to page for current element index j
  console.log("j is currently " + j);
    document.getElementById("triviaQuestionID").innerHTML = tqList[j].question; 

    //Set up list elements: array of 4 <li>, are children of "answerListID"
    choicesList = document.getElementById("answerListID").children;
    //Display: copy answers array items from local storage tqList[j] into 4 <li> elements
    for(var i =0; i < choicesList.length; i++ ) {
      choicesList[i].textContent = tqList[j].choices[i];
    }
}

//GET USER RESPONSE TO QUIZ QUESTIONS VIA CLICK EVENTS
function userAnswer() {
  //get all four <li> elements as array answerLiEl
  var answerLiEl = document.getElementById("answerListID").getElementsByTagName('li');
  //add click event to each <li> element 
    for (var i = 0; i < answerLiEl.length; i++) {
      answerLiEl[i].addEventListener('click', checkAnswer, false);  //on click, check answer
  }
  //when <li> is clicked, check if equal to answer or not
  function checkAnswer() {
    //equal, so increment timer and score
    console.log("tqList_j_answer is currently " + tqList[j].answer);
    if(this.textContent === tqList[j].answer)  
    {
      console.log("you got it dude");
      timeLeft++;
      // timeLeft = timeLeft +10;
      console.log(timeLeft);
      timerEl.textContent = timeLeft;
      score++;
      scoreEl.textContent = score;
    }
    //not equal, so decrement timer, no change to score
    else
    {
      console.log("nope");
      if (timeLeft <= 0)
        endOfGame();
      else{
        timeLeft--;
        timerEl.textContent = timeLeft;
      }
    }
    //return timeLeft variable to keep local/global vars in sync
    return timeLeft;
  }

}

//CANT GET THIS WORKING.
// function triviaGame() {
//  while(j < tqList.length) {
//     //display the trivia question & answer choices
//     displayQuestion();
//     //get user answer - click event declared in userAnswer fxn
//     userAnswer();
//     //return timeLeft variable to keep local/global vars in sync
//     j++;
//   }
// }

function endOfGame() {
  console.log('end of game');
  timerEl.textContent = 0;
  setTimeout(function(){ alert("End of Game! Well done!"); }, 1000);
  setTimeout(function(){ location.reload(); }, 2000);
}

triviaGame();