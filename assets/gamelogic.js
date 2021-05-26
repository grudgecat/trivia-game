//DECLARE GLOBAL VARIABLES
var score = 0;
var timeLeft = 90;
var playerInitials = "abc";
var triviaQuestion = {

}
var questionList = [];

// var numOfQuestions = 50;


//DECLARE VARS TO 'GET' ELEMENTS ON PAGE
var timerEl = document.getElementById('currTime');
var myButton = document.getElementById('gobutton');
// console.log(myButton); 

myButton.addEventListener("click", countdown);

function countdown() {
  //counter starts with 90 seconds on clock
  var timeLeft = 90;
  myButton.style.display = "none";

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
      //for future use - end the game
    }
  }, 1000);

  displayQuestion();
}

function displayQuestion() {

  var tqList = JSON.parse(localStorage.getItem("triviaQuestionList"));
  
  var j = 1;
  document.getElementById("triviaQuestion").innerHTML = tqList[j].question; 
}
