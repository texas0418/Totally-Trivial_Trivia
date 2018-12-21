$(document).ready(function() {
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
    "assets/images/weird-science.jpg"
  ];
  var questions = [];
  var firstAnswer = [];
  var secondAnswer = [];
  var thirdAnswer = [];
  var fourthAnswer = [];
  var correctAnswer = [];
  var backgroundCount = 0;
  var audioFiveSecLeft = new Audio("assets/audio/time-bomb.mp3");
  var audioCorrect = new Audio("assets/audio/hooray.mp3");
  var audioWrong = new Audio("assets/audio/wrong.mp3");
  var clockRunning = false;
  var countdownTimer = 30;
  var intervalId;

  window.onload = function() {
    $(".textBoxAnswer").hide();
    $(".textBox").hide();
    $("#countdownTimer").hide();
    $("#pickAnswer").hide();
  };

  $(function() {
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")"
    );
  });

  $(".textBoxAnswer").click(function() {
    backgroundCount++;
    if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")"
    );
    stopTimer();
    resetTimer();
    startTimer();
  });


  function resetTimer() {
    countdownTimer = 30;
    $("#countdownTimer").text("Time Left: 00:30");
  }

  function startTimer() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }

  function stopTimer() {
    clearInterval(intervalId);
    clockRunning = false;
  }

  function count() {
    countdownTimer--;
    if (countdownTimer == 0) {
      stopTimer();
      backgroundCount++;
      if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
      $("body").css("background-image", "url(" + backgroundImage[backgroundCount] + ")");
      stopTimer();
      resetTimer();
      startTimer();
    }

    var converted = timeConverter(countdownTimer);
    console.log(converted);

    $("#countdownTimer").text("Time Left: " + converted);
  }

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  }

  setTimeout(fiveSeconds, 1000 * 26);

  function fiveSeconds() {
    audioFiveSecLeft.play();
  }

  $("#game-start-button").click(function() {
    $("button").hide();
    $(".textBoxAnswer").show();
    $(".textBox").show();
    $("#countdownTimer").show();
    $("#pickAnswer").show();
    resetTimer();
    startTimer();
  });
});
