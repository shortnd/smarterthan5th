//Global variables
var question = 0;
var questionNumber = 1;
var answer;
var score = 0;
function incorrect(){
  alert("That is incorrect");
  score = score - 1000;
  question++;
  questionNumber++;
  $('#score').text(score);
    $('.questions').text(questionItems[question]);
      $('#a').text(answers[question][0]);
      $('#b').text(answers[question][1]);
      $('#c').text(answers[question][2]);
      $('#d').text(answers[question][3]);
      $('#e').text(answers[question][4]);
}
function correct(){
  alert("YES!!! That is correct");
  score = score + 1000;
  $('#next').css('display', 'block');
}



var questionItems = ["What is the fastest bird on foot?", "What planet is closest to the sun?", "A heptagon is a shape with how many sides?", "How long is one regular term for a U.S. Representative?",
                      "Which of the following states is NOT on the Gulf of Mexico?", "What is the lowest prime number?", "What is the largest South American country by area?",
                      "Which one of the following states is NOT part of the Four Corners?", "Who was the first person to step foot on the moon?", "'Carefully' is an example of what type of word?",
                      "In the northern hemisphere, in what month is the autumnal equinox?", "Emma has 2 yard sticks. She also has a 12-inch ruler. She laid them end-to-end in a line. How many feet long is the line?",
                      "Inca civilizations were concentrated on what continent", "What state is the Grand Canyon in?", "Who was the first president of the United States?", "Good Job! Are You Smarter than a 5th Grade?"];
var answers = [["Ostrich", "Sparrow", "Eagle", "Robin", "Roadrunner"],["Venus", "Earth", "Mercury", "Pluto", "Planet X"],["4","6","7","8","9"],["3","1","2","4","6"],
              ["Georgia", "Texas", "Florida", "Alabama", "Louisiana"],["0","1","2","3","5"],["Argentina", "Brazil", "Chile", "Mexico", "Peru"],["New Mexico", "Utah", "Colorado", "Nevada", "Arizona"],
              ["Neil Armstrong", "Edwin 'Buzz' Aldrin", "John Glenn", "Sally Ride", "Alan Shepard"],["Adjective", "Noun", "Verb", "Adverb", "Pronoun"], ["August", "September", "October", "November", "April"],
              ["3 Feet", "5 Feet", "7 Feet", "9 Feet", "11 Feet"], ["South America", "Africa", "North America", "Asia", "Europe"], ["California", "Arizona", "North Dakota", "New Mexico", "South Dakota"],
              ["John Adams", "Abraham Lincon", "Thomas Jefferson", "George Washington","John Jay"], ["A","B","C","D","E"]];
var correctAnswers = ["Ostrich", "Mercury", "7", "2", "Georgia", "2", "Brazil", "Nevada", "Neil Armstrong", "Adverb", "September", "7 Feet", "South America", "Arizona", "George Washington"];


$('.questions').text(questionItems[0]);
  $('#a').text(answers[question][0]);
  $('#b').text(answers[question][1]);
  $('#c').text(answers[question][2]);
  $('#d').text(answers[question][3]);
  $('#e').text(answers[question][4]);
$('#questionNumber').text(questionNumber);
$('#score').text(score);
questionNumber++;
$('#next').css('display', 'none');
$('#reset').css('display', 'none');
console.log("button click");


$('.answers').on('click', function(){
  console.log($(this).text());
  answer = $(this).text();
  if ( answer !== correctAnswers[question]){
    incorrect();
  } else if ( answer === correctAnswers[question]){
    correct();
    $('#questionNumber').text(questionNumber);
    question++;
    $('#score').text(score);

    $('#next').css("display", "none");
  $('.questions').text(questionItems[question]);
      $('#a').text(answers[question][0]);
      $('#b').text(answers[question][1]);
      $('#c').text(answers[question][2]);
      $('#d').text(answers[question][3]);
      $('#e').text(answers[question][4]);

      questionNumber++;
      endOfGame();
    }
  }
);

$('#next').on('click', function(){
//   $('#questionNumber').text(questionNumber);
//   question++;
//   $('#score').text(score);
//
//   $('#next').css("display", "none");
// $('.questions').text(questionItems[question]);
//     $('#a').text(answers[question][0]);
//     $('#b').text(answers[question][1]);
//     $('#c').text(answers[question][2]);
//     $('#d').text(answers[question][3]);
//     $('#e').text(answers[question][4]);
//
//     questionNumber++;
//     endOfGame();
});



//end of game
function endOfGame(){
  if (questionNumber < 17) {
    console.log(questionNumber);
    $('#reset').css("display", "none");
  } else {
    // alert("Game Over!");
    $('#next').css("display", "none");
    $('#reset').css("display", "block");
    $('#a').css('display', 'none');
    $('#b').css('display', 'none');
    $('#c').css('display', 'none');
    $('#d').css('display', 'none');
    $('#e').css('display', 'none');
  }
}


//resets game by reloading the page
$('#reset').on('click', function(){
  location.reload();
});
