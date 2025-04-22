  var current = 1;

  document.getElementById("que_display").innerHTML = "Which planet is known as the Red Planet?";
  document.getElementById("option1").innerHTML = "Earth";
  document.getElementById("option2").innerHTML = "Mars";
  document.getElementById("option3").innerHTML = "Jupiter";
  document.getElementById("option4").innerHTML = "Venus";

  function checkAnswer(x) {
    if (current == 1) {
      if (x == 2) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 2) {
      if (x == 3) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 3) {
      if (x == 2) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 4) {
      if (x == 1) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 5) {
      if (x == 2) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 6) {
      if (x == 3) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 7) {
      if (x == 2) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      nextQuestion();
    } else if (current == 8) {
      if (x == 3) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
      // No next question, quiz ends after this one
      document.getElementById("que_display").innerHTML = "Quiz Completed!";
      alert("You've completed all the questions!");
        document.getElementById("option1").style.display = "none";
        document.getElementById("option2").style.display = "none";
        document.getElementById("option3").style.display = "none";
        document.getElementById("option4").style.display = "none";
    }
}

  function nextQuestion() {
    if (current == 1) {
      current = 2;
      document.getElementById("que_display").innerHTML = "What is the largest ocean on Earth?";
      document.getElementById("option1").innerHTML = "Atlantic Ocean";
      document.getElementById("option2").innerHTML = "Indian Ocean";
      document.getElementById("option3").innerHTML = "Pacific Ocean";
      document.getElementById("option4").innerHTML = "Arctic Ocean";
    } else if (current == 2) {
      current = 3;
      document.getElementById("que_display").innerHTML = "Who wrote the play 'Romeo and Juliet'?";
      document.getElementById("option1").innerHTML = "William Shakespeare";
      document.getElementById("option2").innerHTML = "Charles Dickens";
      document.getElementById("option3").innerHTML = "Leo Tolstoy";
      document.getElementById("option4").innerHTML = "Mark Twain";
    } else if (current == 3) {
      current = 4;
      document.getElementById("que_display").innerHTML = "What is the chemical symbol for water?";
      document.getElementById("option1").innerHTML = "H2O";
      document.getElementById("option2").innerHTML = "CO2";
      document.getElementById("option3").innerHTML = "O2";
      document.getElementById("option4").innerHTML = "H2";
    } else if (current == 4) {
      current = 5;
      document.getElementById("que_display").innerHTML = "Which country is known as the Land of the Rising Sun?";
      document.getElementById("option1").innerHTML = "China";
      document.getElementById("option2").innerHTML = "Japan";
      document.getElementById("option3").innerHTML = "South Korea";
      document.getElementById("option4").innerHTML = "Thailand";
    } else if (current == 5) {
      current = 6;
      document.getElementById("que_display").innerHTML = "What is the capital of France?";
      document.getElementById("option1").innerHTML = "Berlin";
      document.getElementById("option2").innerHTML = "Madrid";
      document.getElementById("option3").innerHTML = "Paris";
      document.getElementById("option4").innerHTML = "Rome";
    } else if (current == 6) {
      current = 7;
      document.getElementById("que_display").innerHTML = "Who is the founder of Microsoft?";
      document.getElementById("option1").innerHTML = "Steve Jobs";
      document.getElementById("option2").innerHTML = "Bill Gates";
      document.getElementById("option3").innerHTML = "Elon Musk";
      document.getElementById("option4").innerHTML = "Mark Zuckerberg";
    } else if (current == 7) {
      current = 8;
      document.getElementById("que_display").innerHTML = "Which element has the atomic number 1?";
      document.getElementById("option1").innerHTML = "Helium";
      document.getElementById("option2").innerHTML = "Oxygen";
      document.getElementById("option3").innerHTML = "Hydrogen";
      document.getElementById("option4").innerHTML = "Carbon";
    } else if (current == 8) {
      alert("You've completed all the questions!");
    }
  }