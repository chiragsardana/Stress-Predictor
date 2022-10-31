// creating <tag> variables for the first step when page loads
var userName = $("#name-input");
var startBTN = $("#start-BTN");
var questionsLeft = $("#questions-left");
var question = $("#question");
var choiceA = $("#choiceA");
var choiceB = $("#choiceB");
var choiceC = $("#choiceC");
var choiceD = $("#choiceD");
var congratsMessage = $("#congrats");
var nameScore = $("#name-and-score");
// render the progress number
var count = 0;
// count is for the questions you get correct it will be added to the score variable text
var questionsThatAreLeft = 10;
// ********* Timer Script *********************
// var secondsLeft = 30000000;
// function timeLeft() {
//   var timerInterval = setInterval(function () {
//     secondsLeft--;
//     $("#timer").text(secondsLeft);
//     if (secondsLeft <= 0) {
//       endQuiz();
//       clearInterval(timerInterval);
//       console.log("not clearing interval");
//     }
//   }, 1000); //milliseconds
// }
// // clear localstorage when page loads
localStorage.clear();
// get the name from the local storage

//now "on click" for inputting name and storing to local storage
$("#start-BTN").on("click", function () {
  // need to log name to local storage and keep for end of quiz
  var getName = $("#name-input");
  console.log(getName.val() + " is the name");
  if (getName.val() == "" || getName.val() == " ") {
    window.alert("Wrong Name");
    location.reload();
  } else {
    localStorage.setItem("name", getName.val());

    // // need to start timer
    // changeColor();
    // // timeLeft();
    // // need to clear test div and add questions and answer butns
    hideItems();
    // // switch questionsLeft to show how many questions are left
    questionLeft();
    // // start displaying answer buttons when quiz starts
    renderQuestion();
    $("#question-box").css({ display: "block" });
  }
});

// adding function to hide the first section
function hideItems() {
  $("#startDiv").hide();
}
// changing color of the timer to red
function changeColor() {
  $("#timer").css({ color: "#FC4349" });
}
// change questionsLeft to display how many are left function
function questionLeft() {
  $("#questions-left").text(
    "You have" + " " + questionsThatAreLeft + " " + "questions left"
  );
}
// ********* objects for questions *********************
var questions = [
  {
    question: "I found myself getting upset by quite trivial things.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "B",
  },
  {
    question: "I tended to over-react to situations.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "C",
  },
  {
    question: "I found it difficult to relax.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "A",
  },
  {
    question: "I found myself getting upset rather easily.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "A",
  },
  {
    question: "I felt that I was using a lot of nervous energy.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "C",
  },
  {
    question: "I found myself getting impatient when I was delayed in any way.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "B",
  },
  {
    question: "I felt that I was rather touchy.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "B",
  },
  {
    question: "I found it hard to wind down.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "C",
  },
  {
    question: "I found that I was very irritable.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "C",
  },
  {
    question: "I found it hard to calm down after something upset me.",
    answerA: "Did not apply to me at all",
    answerB: "Applied to me to some degree, or some of the time",
    answerC: "Applied to me to a considerable degree, or a good part of time",
    answerD: "Applied to me very much, or most of the time",
    correct: "A",
  },
];

// creating variables for this use
var lastquestion = questions.length - 1;
var runningQuestion = 0;

// render it to the page
function renderQuestion() {
  var q = questions[runningQuestion];
  question.text(q.question);
  choiceA.text(q.answerA);
  choiceB.text(q.answerB);
  choiceC.text(q.answerC);
  choiceD.text(q.answerD);
}

// check if answer was correct
function checkAnswer(answer) {
    console.log(count+" SBK");
    console.log(answer);
    console.log( questions[runningQuestion].answerA );
    console.log();
  if (answer === "answerA" ) {
    count += 1;
    console.log(count+" is the updated  count ");
    var savedName = localStorage.getItem("name");
    // console.log(savedName);
    console.log(savedName);
    nameScore.text(
      savedName.toUpperCase() + " Your score was " + count + " out of 40"
    );

    // questions left goes down
    questionsThatAreLeft--;
    //need to make question count go down in the text
    questionLeft();
    // if the suer gets it right, add 10 seconds
    console.log("working");
    //need to make the question switch now
    if (runningQuestion < lastquestion) {
      runningQuestion++;
      renderQuestion();
    }
    endQuiz();
    finalResult();
  } else if (answer === "answerB") {
    count += 2;
    console.log(count);
    var savedName = localStorage.getItem("name");
    // console.log(savedName);
    console.log(savedName);
    nameScore.text(
      savedName.toUpperCase() + " Your score was " + count + " out of 40"
    );

    // questions left goes down
    questionsThatAreLeft--;
    //need to make question count go down in the text
    questionLeft();
    // if the suer gets it right, add 10 seconds
    console.log("working");
    //need to make the question switch now
    if (runningQuestion < lastquestion) {
      runningQuestion++;
      renderQuestion();
    }
    endQuiz();
    finalResult();
  } else if (answer === "answerC") {
    count += 3;
    console.log(count);
    var savedName = localStorage.getItem("name");
    // console.log(savedName);
    console.log(savedName);
    nameScore.text(
      savedName.toUpperCase() + " Your score was " + count + " out of 40"
    );

    // questions left goes down
    questionsThatAreLeft--;
    //need to make question count go down in the text
    questionLeft();
    // if the suer gets it right, add 10 seconds
    // secondsLeft += 10;
    console.log("working");
    //need to make the question switch now
    if (runningQuestion < lastquestion) {
      runningQuestion++;
      renderQuestion();
    }
    endQuiz();
    finalResult();
  } else if (answer === "answerD") {
    count += 4;
    console.log(count);
    var savedName = localStorage.getItem("name");
    // console.log(savedName);
    console.log(savedName);
    nameScore.text(
      savedName.toUpperCase() + " Your score was " + count + " out of 40"
    );

    // questions left goes down
    questionsThatAreLeft--;
    //need to make question count go down in the text
    questionLeft();
    // if the suer gets it right, add 10 seconds
    // secondsLeft += 10;
    console.log("working");
    //need to make the question switch now
    if (runningQuestion < lastquestion) {
      runningQuestion++;
      renderQuestion();
    }
    endQuiz();
    // user grade
    finalResult();
    
  } else {
    // need to switch questions when answer is wrong too
    if (runningQuestion < lastquestion) {
      runningQuestion++;
      renderQuestion();
    }
    questionsThatAreLeft--;
    //need to make it go down in the text
    questionLeft();
    // time reduced by 10 seconds if worng
    console.log("not working");
    endQuiz();
  }
}
// end quiz
function endQuiz() {
  if (count === 40 || questionsThatAreLeft === 0) {
    // need to hide the question div
    $("#question-box").css({ display: "none" });
    //need to show the score-card
    $("#score-card").css({ display: "block" });
    // change color of progress bar
    $("#timerContainer").css({ background: "#FC4349" });
    // need to stop and reset timer
    $("#timer").hide();
  }
}
function finalResult(){
    if (count < 14) {
      $("#nice-job").text("Normal");
    } else if (count < 19) {
      $("#nice-job").text("Mild");
    } else if (count < 26) {
      $("#nice-job").text("Moderrate");
    } else if (count < 33) {
      $("#nice-job").text("Severe");
    } else {
      $("#nice-job").text("Extremely Severe");
    }
}
