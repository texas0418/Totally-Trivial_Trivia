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
  var questions = [
    {
      question: "What was Ralphie's favorite radio show?",
      imgSrc: "assets/images/gifs/an-xmas-story.gif",
      choiceA: "The Lone Ranger",
      choiceB: "Little Orphan Annie",
      choiceC: "I Love a Mystery",
      choiceD: "The Green Hornet",
      correctAnswer: "B"
    },
    {
      question: "Who did Michael J. Fox replace as the original Marty McFly?",
      imgSrc: "assets/images/gifs/back-to-the-future.gif",
      choiceA: "Michael Anthony Hall",
      choiceB: "Matthew Broderick",
      choiceC: "Eric Stoltz",
      choiceD: "Robert Downey Jr",
      correctAnswer: "C"
    },
    {
      question: "What is the name of the book that you are given when you die?",
      imgSrc: "assets/images/gifs/beetlejuice.gif",
      choiceA: "The Handbook for the Recently Deceased",
      choiceB: "Day of the Dead Handbook",
      choiceC: "Rules of the Dead. An Afterlife Rulebook",
      choiceD: "How to Live Comfortable in the Afterlifer",
      correctAnswer: "A"
    },
    {
      question: "What was on the t-shirt that Axel Foley wore in Beverly Hills Cop?",
      imgSrc: "assets/images/gifs/beverly-hills-cop.gif",
      choiceA: "Mumford Phys Ed Dept",
      choiceB: "Nike",
      choiceC: "NYPD",
      choiceD: "Detroit Police",
      correctAnswer: "A"
    },
    {
      question: "What is Jack Burton's truck name?",
      imgSrc: "assets/images/gifs/big-trouble.gif",
      choiceA: "Big Rig",
      choiceB: "Iron Giant",
      choiceC: "Porkchop Express",
      choiceD: "Cannonball",
      correctAnswer: "C"
    },
    {
      question: "What is the name of the phonebook in the phone booth?",
      imgSrc: "assets/images/gifs/bill-ted.gif",
      choiceA: "Doing Time",
      choiceB: "Back to the Future",
      choiceC: "Future Tense",
      choiceD: "Circuits Of Time",
      correctAnswer: "D"
    },
    {
      question: "Brian got an 'F' in shop class because he couldn't make a ceramic what?",
      imgSrc: "assets/images/gifs/breakfast-club.gif",
      choiceA: "Lion",
      choiceB: "Tiger",
      choiceC: "Bear",
      choiceD: "Elephant",
      correctAnswer: "D"
    },
    {
      question: "What candy does Elliott use to lure E.T. out of the backyard shed?",
      imgSrc: "assets/images/gifs/et.gif",
      choiceA: "Reese’s Pieces",
      choiceB: "Skittles",
      choiceC: "Gummy Bears",
      choiceD: "M&M’s",
      correctAnswer: "A"
    },
    {
      question: "Which character is incorrectly matched with their occupation?",
      imgSrc: "assets/images/gifs/fast-times.gif",
      choiceA: "Spiccoli/Drug Dealer",
      choiceB: "Damone/Ticket Scalper",
      choiceC: "Rat/Movie Theater",
      choiceD: "Stacy/Perry’s Pizza",
      correctAnswer: "A"
    },
    {
      question: "Which of the following was NOT a place visited by Ferris and company?",
      imgSrc: "assets/images/gifs/ferris-bueller.gif",
      choiceA: "Art Institute of Chicago",
      choiceB: "Chez Quis Restauraunt",
      choiceC: "Chicago White Sox Game",
      choiceD: "Chicago Board of Trade",
      correctAnswer: "C"
    },
    {
      question: "Footloose was loosely based on events that took place in which city?",
      imgSrc: "assets/images/gifs/footloose.gif",
      choiceA: "Perry",
      choiceB: "Elmore City",
      choiceC: "Broken Bow",
      choiceD: "Sulfur",
      correctAnswer: "B"
    },
    {
      question: "Which future pop star had an uncredited role as ‘birthday girl’ at the young age of 13?",
      imgSrc: "assets/images/gifs/ghostbusters.gif",
      choiceA: "Debbie Gibson",
      choiceB: "Tiffany",
      choiceC: "Madonna",
      choiceD: "Cyndi Lauper",
      correctAnswer: "A"
    },
    {
      question: "What is the name of the place that Daniel took Ali on their first date?",
      imgSrc: "assets/images/gifs/karate-kid.gif",
      choiceA: "Blondie's Water Park",
      choiceB: "Putt Putt Golf",
      choiceC: "Golf and Stuff",
      choiceD: "Main Event",
      correctAnswer: "C"
    },
    {
      question: "At at the end of the film who becomes the new Dread Pirate Roberts?",
      imgSrc: "assets/images/gifs/princess-bride.gif",
      choiceA: "Miracle Max",
      choiceB: "Inigo Montoya",
      choiceC: "Fezzik",
      choiceD: "Count Rugen",
      correctAnswer: "B"
    },
    {
      question: "In the movie 'Risky Business', Tom Cruise is seen dancing to this Bob Seger song.",
      imgSrc: "assets/images/gifs/risky-business.gif",
      choiceA: "Turn the Page",
      choiceB: "We've Got Tonight",
      choiceC: "Night Moves",
      choiceD: "Old Time Rock & Roll",
      correctAnswer: "D"
    },
    {
      question: "What is the noise that Scott hears at the hardware store in the beginning of the film?",
      imgSrc: "assets/images/gifs/teen-wolf.gif",
      choiceA: "A Kid Blowing A Dog Whistle",
      choiceB: "A Loud Boom Box",
      choiceC: "A Wolf Howl",
      choiceD: "A Gunshot",
      correctAnswer: "A"
    },
    {
      question: "What candy bar does Chunk get for riding up the hill?",
      imgSrc: "assets/images/gifs/goonies.gif",
      choiceA: "Baby Ruth",
      choiceB: "Three Musketeers",
      choiceC: "Snickers",
      choiceD: "Mars Bar",
      correctAnswer: "A"
    },
    {
      question: "Where do the Frog Brothers work?",
      imgSrc: "assets/images/gifs/lost-boys.gif",
      choiceA: "Pizza Place",
      choiceB: "Record Store",
      choiceC: "Comic Book Store",
      choiceD: "Movie Theater",
      correctAnswer: "C"
    },
    {
      question: "What was the hooker’s name (Jamie Lee Curtis character)?",
      imgSrc: "assets/images/gifs/trading-places.gif",
      choiceA: "Penelope",
      choiceB: "Amber",
      choiceC: "Ophelia",
      choiceD: "Clara",
      correctAnswer: "C"
    },
    {
      question: "What type of computer do Wyatt and Gary use to design and build Lisa?",
      imgSrc: "assets/images/gifs/weird-science.gif",
      choiceA: "Apple III",
      choiceB: "Memotech MXT512",
      choiceC: "Commodore VIC-20",
      choiceD: "Texas Instruments TI-99",
      correctAnswer: "B"
    },
  ];
  var backgroundCount = 0;
  var questionsCount = 0;
  var audioFiveSecLeft = new Audio("assets/audio/time-bomb.mp3");
  var audioCorrect = new Audio("assets/audio/hooray.mp3");
  var audioWrong = new Audio("assets/audio/wrong.mp3");
  var clockRunning = false;
  var countdownTimer = 30;
  var intervalId;

  // hides everything on window load except the title box and start button
  window.onload = function() {
    $(".textBoxAnswer").hide();
    $(".textBox").hide();
    $("#countdownTimer").hide();
    $("#pickAnswer").hide();
  };
  // loads background image and updates css
  $(function() {
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")"
    );
  });
  // changes background image, questions and answers on click of answers div area
  $(".textBoxAnswer").click(function() {
    if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
    backgroundCount++;
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")");
    if (questionsCount > questions.length - 1) questionsCount = 0;
    questionsCount++;
    $("#question").html(questions[questionsCount].question);
    $("#A").html(questions[questionsCount].choiceA);
    $("#B").html(questions[questionsCount].choiceB);
    $("#C").html(questions[questionsCount].choiceC);
    $("#D").html(questions[questionsCount].choiceD);
    stopTimer();
    resetTimer();
    startTimer();
  });
// resets timer on each new background and question answer load
  function resetTimer() {
    countdownTimer = 30;
    $("#countdownTimer").text("Time Left: 00:30");
  }
// starts timer
  function startTimer() {
    if (!clockRunning) {
      intervalId = setInterval(count, 1000);
      clockRunning = true;
    }
  }
// stops timer
  function stopTimer() {
    clearInterval(intervalId);
    clockRunning = false;
  }
// timer countdown and background load
  function count() {
    countdownTimer--;
    if (countdownTimer == 0) {
      stopTimer();
      backgroundCount++;
      if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
      $("body").css("background-image", "url(" + backgroundImage[backgroundCount] + ")");
      if (questionsCount > questions.length - 1) questionsCount = 0;
      questionsCount++;
      $("#question").html(questions[questionsCount].question);
      stopTimer();
      resetTimer();
      startTimer();
    }
// converts time to seconds and controls the way the data is displayed
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
// audio alert that starts when there are 5 seconds left on the timer
  setTimeout(fiveSeconds, 1000 * 26);

  function fiveSeconds() {
    audioFiveSecLeft.play();
  }
// on start button click. hide button and shows question and answers on page
  $("#game-start-button").click(function() {
    $("button").hide();
    $(".textBoxAnswer").show();
    $(".textBox").show();
    $("#countdownTimer").show();
    $("#pickAnswer").show();
    resetTimer();
    startTimer();
  });



// When user clicks answer choice, decides if it is correct or wrong.
// function checkAnswer(){

// }

// If the answer is correct, plays audioCorrect, shows correct, shows factoid, plays a gif. 
// function correctAnswer(){
// }

// if answer is wrong, plays audioWrong, shows the correct answer and factoid and plays gif
// function wrongAnswer(){
  
// }






  
});
