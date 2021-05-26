//DECLARE GLOBAL VARIABLES
//triviaQuestionList is set in separate script, contains all questions/answers for game
// using localStorage.setItem("triviaQuestionList", JSON.stringify(trivaQuestionList));
var score = 0;
var timeLeft = 90;
var playerInitials = "abc";
var randomizeAnswersArray = []; 
var triviaQuestion = {

}
var questionList = [];



//DECLARE VARS TO 'GET' ELEMENTS ON PAGE
var timerEl = document.getElementById('currTime');
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
      //for future use - end the game
    }
  }, 1000);

  displayQuestion();
  randomizeAnswersArray = makeRandomFourArray();
  console.log("randomize answers array is " + randomizeAnswersArray);
}

function makeRandomFourArray() {
  var randomFour = [];
  while (randomFour.length !== 4 && randomFour.length < 5) {
    var randy =  Math.floor(Math.random() * 4);
    if (!randomFour.includes(randy))
    {
    randomFour.push(randy);
    }
  }
  return randomFour;
}

function displayQuestion() {

  var tqList = JSON.parse(localStorage.getItem("triviaQuestionList"));
  var tempList = [];
  
  var j = 1;
  document.getElementById("triviaQuestion").innerHTML = tqList[j].question; 

  console.log("tempList length is " + document.getElementById("answerList").children.length);
  tempList = document.getElementById("answerList").children;

  
  tempList[2].innerHTML = tqList[j].filler1; 


  // document.getElementById("answerList.child").innerHTML = tqList[j].filler1; 

  // console.log(tempList);
  // console.log(tempList[j]);
  

  
}



