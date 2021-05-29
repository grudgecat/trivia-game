
//DISPLAY THE CURRENT QUESTION AND ANSWER TEXT TO PAGE
function displayQuestion() {
  //write question to page for current element index j
    document.getElementById("triviaQuestionID").innerHTML = tqList[j].question; 
    //Set up list elements: array of 4 <li>, are children of "answerListID"
    choicesList = document.getElementById("answerListID").children;
    //Display: copy answers array items from local storage tqList[j] into 4 <li> elements
    for(var i =0; i < choicesList.length; i++ ) {
      choicesList[i].textContent = tqList[j].choices[i];
    }
}

function checkAnswer() {
  //equal, so increment timer and score
  console.log("checkAnswer was called!");
  // console.log("tqList_j_answer is currently " + typeof tqList[j].answer);

  if(choicesList[i].textContent === tqList[j].answer)  
  {
    console.log("you got it dude");
    timeLeft++;
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

//GET USER RESPONSE TO QUIZ QUESTIONS VIA CLICK EVENTS
function userAnswer() {
  //get all four <li> elements as array answerLiEl
  var answerLiEl = document.getElementById("answerListID").getElementsByTagName('li');
  //add click event to each <li> element 
    for (var i = 0; i < answerLiEl.length; i++) {
      answerLiEl[i].addEventListener('click', checkAnswer);  //on click, check answer
  }
  //when <li> is clicked, check if equal to answer or not
}

function endOfGame() {
  timerEl.textContent = 0;
  setTimeout(function(){ alert("End of Game! Well done!"); }, 1000);
  setTimeout(function(){ location.reload(); }, 2000);
}

//CANT GET THIS WORKING.
function triviaGame() {
 while(j < tqList.length) {
    //display the trivia question & answer choices
    displayQuestion();
    //get user answer - click event declared in userAnswer fxn
    userAnswer();
    //return timeLeft variable to keep local/global vars in sync
    j++;
    console.log(j);
  }
}

