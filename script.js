//Document ready to check page is loaded
$(document).ready(function() {
  console.log("ready!");
});
//Global variables
var question = 0;
var questionNumber = 1;
var answer; //holds answer to question that you answer
var score = 0; //Holds users point, score can go negitive
//Function for when user gets incorrect answer
function incorrect(){
  //alerts user that the answer was incorrect
  alert("That is incorrect");
  //Takes away 1000 from the users score
  score = score - 1000;
  //Moves onto the next question
  question++;
  //Adds to the questionNumber variable to display what question the user is on
  // questionNumber++;
  //writes the variable score to the #score class in html
  $('#score').text(score);
    //writes the questionItem array to the .questions div
    $('.questions').text(questionItems[question]);
      //Writes the answers to the ids with the answers array 0-4
      $('#a').text(answers[question][0]);
      $('#b').text(answers[question][1]);
      $('#c').text(answers[question][2]);
      $('#d').text(answers[question][3]);
      $('#e').text(answers[question][4]);
}
//Function to run if the answer is correct
function correct(){
  //Runs this alert when the answer is correct
  alert("YES!!! That is correct");
  //adds 1000 to score
  score = score + 1000;
}
//function that adds the numbers correctly to questionNumber variable
function addNumbers(){
  questionNumber++;
}
//Array with all questions
var questionItems = ["What is the fastest bird on foot?", "What planet is closest to the sun?", "A heptagon is a shape with how many sides?", "How long is one regular term for a U.S. Representative?",
                      "Which of the following states is NOT on the Gulf of Mexico?", "What is the lowest prime number?", "What is the largest South American country by area?",
                      "Which one of the following states is NOT part of the Four Corners?", "Who was the first person to step foot on the moon?", "'Carefully' is an example of what type of word?",
                      "In the northern hemisphere, in what month is the autumnal equinox?", "Emma has 2 yard sticks. She also has a 12-inch ruler. She laid them end-to-end in a line. How many feet long is the line?",
                      "Inca civilizations were concentrated on what continent", "What state is the Grand Canyon in?", "Who was the first president of the United States?", "Good Job! Are You Smarter than a 5th Grader?"];
//Array with all possible answers
var answers = [["Ostrich", "Sparrow", "Eagle", "Robin", "Roadrunner"],["Venus", "Earth", "Mercury", "Pluto", "Planet X"],["4","6","7","8","9"],["3","1","2","4","6"],
              ["Georgia", "Texas", "Florida", "Alabama", "Louisiana"],["0","1","2","3","5"],["Argentina", "Brazil", "Chile", "Mexico", "Peru"],["New Mexico", "Utah", "Colorado", "Nevada", "Arizona"],
              ["Neil Armstrong", "Edwin 'Buzz' Aldrin", "John Glenn", "Sally Ride", "Alan Shepard"],["Adjective", "Noun", "Verb", "Adverb", "Pronoun"], ["August", "September", "October", "November", "April"],
              ["3 Feet", "5 Feet", "7 Feet", "9 Feet", "11 Feet"], ["South America", "Africa", "North America", "Asia", "Europe"], ["California", "Arizona", "North Dakota", "New Mexico", "South Dakota"],
              ["John Adams", "Abraham Lincon", "Thomas Jefferson", "George Washington","John Jay"], ["A","B","C","D","E"]];
//Array with all correct answers
var correctAnswers = ["Ostrich", "Mercury", "7", "2", "Georgia", "2", "Brazil", "Nevada", "Neil Armstrong", "Adverb", "September", "7 Feet", "South America", "Arizona", "George Washington"];

//Loads the first question and answers on the page
//along with score and question number
$('.questions').text(questionItems[0]);
  $('#a').text(answers[question][0]);
  $('#b').text(answers[question][1]);
  $('#c').text(answers[question][2]);
  $('#d').text(answers[question][3]);
  $('#e').text(answers[question][4]);
$('#questionNumber').text(questionNumber);
$('#score').text(score);
questionNumber++;
$('#reset').css('display', 'none');
// console.log("button click");

//Listener for the answer buttons for click and then holds
//the answer in the answer var and then checks answer to the
//correct answer depending on the question
$('.answers').on('click', function(){
  console.log($(this).text());
  answer = $(this).text();
  //Checks the answer is incorrect runs the incorrect function
  if ( answer !== correctAnswers[question]){
    incorrect();
    // questionNumber++;
    $('#questionNumber').text(questionNumber);
  //Checks the answer is corrects then runs the correct function
  //along with also moving to the next question and changes the
  //score then loads the new question and answers and changes the
  //question number
  } else if ( answer === correctAnswers[question]){
    correct();
    $('#questionNumber').text(questionNumber);
    question++;
    $('#score').text(score);

  $('.questions').text(questionItems[question]);
      $('#a').text(answers[question][0]);
      $('#b').text(answers[question][1]);
      $('#c').text(answers[question][2]);
      $('#d').text(answers[question][3]);
      $('#e').text(answers[question][4]);



    }
    addNumbers();
    //runs the endOfGame function to see if there are more
    //questions left or show the reset button after the game
    //ends
    endOfGame();
  }
);

//end of game
function endOfGame(){
  if (questionNumber < 17) {
    console.log(questionNumber);
    $('#reset').css("display", "none");
  } else {
    //shows the reset button and then hides all the answer
    //buttons
    $('.numberQuestion').css("display", "none");
    $('.quizScore').css({"text-align":"center", "font-size": "3em"});
    $('#reset').css("display", "block");
    $('#a').css('display', 'none');
    $('#b').css('display', 'none');
    $('#c').css('display', 'none');
    $('#d').css('display', 'none');
    $('#e').css('display', 'none');
  }
}


//resets game by reloading the page
//listener for the reset button
$('#reset').on('click', function(){
  location.reload();
});
