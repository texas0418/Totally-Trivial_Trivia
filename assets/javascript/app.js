$(document).ready(function () {

var backgroundImage = [
  "assets/images/a-christmas-story.jpg",
  "assets/images/back-to-the-future.jpg",
  "assets/images/beetlejuice.jpg",
  "assets/images/beverly-hills-cop.jpg",
  "assets/images/big-trouble.jpg",
  "assets/images/bill-ted.jpg",
  "assets/images/breakfast-club.jpg",
  "assets/images/et-movie.jpg",
  "assets/images/fast-times.jpg",
  "assets/images/ferris.jpg",
  "assets/images/footloose.jpg",
  "assets/images/ghostbusters.jpg",
  "assets/images/karate-kid.jpg",
  "assets/images/princess-bride.jpg",
  "assets/images/risky-business.jpg",
  "assets/images/teen-wolf.jpg",
  "assets/images/the-goonies.jpg",
  "assets/images/the-lost-boys.jpg",
  "assets/images/trading-places.jpg",
  "assets/images/weird-science.jpg",
];
var questions = [];
var backgroundCount = 0;
var audioFiveSecLeft = "time-bomb.mp3";
var audioCorrect = "hooray.mp3";
var audioWrong = "wrong.mp3";

window.onload = function() {
  $(".textBoxAnswer").hide();
  $(".textBox").hide();
  $("#countdownTimer").hide();
  $("#pickAnswer").hide();
};

function start() {
  if (!clockRunning) {
    intervalId = setInterval(count, 1000);
    clockRunning = true;
  }
}

// Hide questions and answers divs on page load.
// $(document).ready(function() {
  
// });

// Load background and rotate background on answrr click
  $(function() {
    $("body").css("background-image", "url(" + backgroundImage[backgroundCount] + ")"); 
  });

  $(".textBoxAnswer").click (function(){
    backgroundCount++;
    if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
    $("body").css("background-image", "url(" + backgroundImage[backgroundCount] + ")");
  });

// //load questions and answers on start button click and remove start button
$("#game-start-button").click (function() {
  $("button").hide();
  $(".textBoxAnswer").show();
  $(".textBox").show();
  $("#countdownTimer").show();
  $("#pickAnswer").show();
});
});
