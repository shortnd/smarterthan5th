//Global variables
var question = 0;
var questionNumber = 0;
var answer;

var resetItems = ["A", "B", "C", "D"];
var questionItems = ["What is the fastest bird on foot?", "What planet is closest to the sun?", "A heptagon is a shape with how many sides?", "How long is one regular term for a U.S. Representative?",
                      "Which of the following states is NOT on the Gulf of Mexico?", "What is the lowest prime number?", "What is the largest South American country by area?",
                      "Which one of the following states is NOT part of the Four Corners?", "Who was the first person to step foot on the moon?", "'Carefully' is an example of what type of word?",
                      "In the northern hemisphere, in what month is the autumnal equinox?", "Emma has 2 yard sticks. She also has a 12-inch ruler. She laid them end-to-end in a line. How many feet long is the line?",
                      "Inca civilizations were concentrated on what continent", "What state is the Grand Canyon in?", "Who was the first president of the United States?"];
var answers = [["Ostrich", "Sparrow", "Eagle", "Robin", "Roadrunner"],["Venus", "Earth", "Mercury", "Pluto", "Planet X"],["4","6","7","8","9"],["3","1","2","4","6"],
              ["Georgia", "Texas", "Florida", "Alabama", "Louisiana"],["0","1","2","3","5"],["Argentina", "Brazil", "Chile", "Mexico", "Peru"],["New Mexico", "Utah", "Colorado", "Nevada", "Arizona"],
              ["Neil Armstrong", "Edwin 'Buzz' Aldrin", "John Glenn", "Sally Ride", "Alan Shepard"],["Adjective", "Noun", "Verb", "Adverb", "Pronoun"], ["August", "September", "October", "November", "April"],
              ["3 Feet", "5 Feet", "7 Feet", "9 Feet", "11 Feet"], ["South America", "Africa", "North America", "Asia", "Europe"], ["California", "Arizona", "North Dakota", "New Mexico", "South Dakota"],
              ["John Adams", "Abraham Lincon", "Thomas Jefferson", "George Washington","John Jay"]];
var correctAnswers = ["Ostrich", "Mercury", "7", "2", "Georgia", "2", "Brazil", "Nevada", "Neil Armstrong", "Adverb", "September", "7 Feet", "South America", "Arizona", "George Washington"];


$('.questions').text(questionItems[0]);
  $('#a').text(answers[question][0]);
  $('#b').text(answers[question][1]);
  $('#c').text(answers[question][2]);
  $('#d').text(answers[question][3]);
  $('#e').text(answers[question][4]);
questionNumber++;
$('#questionNumber').text(questionNumber);
console.log("button click");


$('.answers').on('click', function(){
  console.log($(this).text());
  answer = $(this).text();

  if ( answer === correctAnswers[question]){
    alert("YES!!! That is correct");
  } else {
    alert("That is incorrect");
  }
});

$('#next').on('click', function(e){
  $('#questionNumber').text(questionNumber);
  question++;
  // $('#next').css("display", "none");
$('.questions').text(questionItems[question]);
    $('#a').text(answers[question][0]);
    $('#b').text(answers[question][1]);
    $('#c').text(answers[question][2]);
    $('#d').text(answers[question][3]);
    $('#e').text(answers[question][4]);
});
