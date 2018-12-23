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
      choiceA: "The Lone Ranger",
      choiceB: "Little Orphan Annie",
      choiceC: "I Love a Mystery",
      choiceD: "The Green Hornet",
      correctAnswer: "B",
      factoid: "<h2><b>Little Orphan Annie</b></h2><br> After drinking gallons of Ovaltine Ralphie finally receives his long-awaited Orphan Annie Secret Society decoder pin in the mail. After decoding his first message he finds out it’s only a crummy commercial telling him to “Be Sure To Drink Your Ovaltine.”"
    },
    {
      question: "Who did Michael J. Fox replace as the original Marty McFly?",
      choiceA: "Michael Anthony Hall",
      choiceB: "Matthew Broderick",
      choiceC: "Eric Stoltz",
      choiceD: "Robert Downey Jr",
      correctAnswer: "C",
      factoid: "<h2><b>Eric Stoltz</b></h2><br> Back to the Future filmed with Stoltz portraying Marty for five weeks before he was fired for being too dramatic. By then, Michael J Fox was on break from Family Ties and Robert Zemeckis got to hire his first choice for Marty McFly"
    },
    {
      question: "What is the name of the book that you are given when you die?",
      choiceA: "The Handbook for the Recently Deceased",
      choiceB: "Day of the Dead Handbook",
      choiceC: "Rules of the Dead. An Afterlife Rulebook",
      choiceD: "How to Live Comfortable in the Afterlifer",
      correctAnswer: "A",
      factoid: "<h2><b>The Handbook for the Recently Deceased</b></h2> <br> If you want your own “Handbook For the Recently Deceased” look no further than Etsy! <br> <br> Even though the movie is called “Beetlejuice,” the character only has 17 minutes of screen time out of a 92-minute running time. Keaton spent two weeks filming his part."
    },
    {
      question: "What was on the t-shirt that Axel Foley wore in Beverly Hills Cop?",
      choiceA: "Mumford Phys Ed Dept",
      choiceB: "Nike",
      choiceC: "NYPD",
      choiceD: "Detroit Police",
      correctAnswer: "A",
      factoid: "<h2><b>Mumford Phys Ed Dept</b></h2><br> The T-shirt that Eddie Murphy wears in the film is from Mumford, an actual Detroit area school attended by one of the filmmakers. When film came out, the school received orders for the shirts from customers all over the world."
    },
    {
      question: "What is Jack Burton's truck name?",
      choiceA: "Big Rig",
      choiceB: "Iron Giant",
      choiceC: "Porkchop Express",
      choiceD: "Cannonball",
      correctAnswer: "C",
      factoid: "<h2><b>Porkchop Express</b></h2><br> A script extract shared in the book notes that the truck is “pig-filled” as it zooms across the Golden Gate Bridge in those opening shots. The theme continued, as Richter specifies that the giant sandwich Jack stuffs into his mouth between CB radio rants is, in fact, a ham sandwich."
    },
    {
      question: "What is the name of the phonebook in the phone booth?",
      choiceA: "Doing Time",
      choiceB: "Back to the Future",
      choiceC: "Future Tense",
      choiceD: "Circuits of Time",
      correctAnswer: "D",
      factoid: "<h2><b>Circuits Of Time</b></h2><br> The original time machine from the script was a 1969 Chevy Van, but the filmmakers didn’t want people to thing they were ripping off Back to the Future. They changed it to a phone booth and apparently weren’t concerned about Doctor Who. When the van was in the script, Bill and Ted picked up even more historical figures than they did in the final film."
    },
    {
      question: "Brian got an 'F' in shop class because he couldn't make a ceramic what?",
      choiceA: "Lion",
      choiceB: "Tiger",
      choiceC: "Bear",
      choiceD: "Elephant",
      correctAnswer: "D",
      factoid: "<h2><b>Elephant</b></h2><br> Ally Sheedy dubbed Anthony Michael Hall so sweet that her nickname for him was 'Milk and Cookies'. Michael didn’t like it at all.<br> Composer/producer/songwriter Keith Forsey wrote Don’t You (Forget About Me) and asked Billy Idol, Bryan Ferry and Cy Curnin (The Fixx) and finally Simple Minds to record the song. All initially turned him down; Simple Minds agreed after being encouraged by their label. The song became their only number one hit."
    },
    {
      question: "What candy does Elliott use to lure E.T. out of the backyard shed?",
      choiceA: "Reese’s Pieces",
      choiceB: "Skittles",
      choiceC: "Gummy Bears",
      choiceD: "M&M’s",
      correctAnswer: "A",
      factoid: "<h2><b>Reese’s Pieces</b></h2> <br>Spielberg brought his idea to Mars Incorporated, the company that owns M&Ms, to ask if they could use their little candies in a scene where Elliott attracts the inquisitive alien back to his house. Universal Studios legally barred the company from seeing the final script, so Mars passed on the cross-promotional opportunity. Spielberg and company then brought the idea to the Hershey Company to see if they could use Hershey Kisses, but the company was looking to get more exposure for their newest creation, Reese’s Pieces, and suggested the peanut butter filled treats instead. Hershey agreed to spend $1 million for the rights to promote the use of their product in E.T., and Reese’s Pieces became the little alien's candy of choice. The agreement certainly paid off for Hershey, as the company reported a 65 percent increase in profits on Reese's Pieces just two weeks after the film premiere."
    },
    {
      question: "Which character is incorrectly matched with their occupation?",
      choiceA: "Spicoli/Drug Dealer",
      choiceB: "Damone/Ticket Scalper",
      choiceC: "Rat/Movie Theater",
      choiceD: "Stacy/Perry’s Pizza",
      correctAnswer: "A",
      factoid: "<h2><b>Spicoli/Drug Dealer</b></h2> <br>Jeff Spicoli had no job. To put it his way, All I need are some tasty waves, a cool buzz, and I'm fine."
    },
    {
      question: "Which of the following was NOT a place visited by Ferris and company?",
      choiceA: "Art Institute of Chicago",
      choiceB: "Chez Quis Restauraunt",
      choiceC: "Chicago White Sox Game",
      choiceD: "Chicago Board of Trade",
      correctAnswer: "C",
      factoid: "<h2><b>Chicago White Sox Game</b></h2> <br>Broderick, Ruck, and Sara attended the September 24, 1985 game between the Montreal Expos and the Cubs. The game being broadcast at the pizza place, where Rooney catches a glimpse of the teens, was the June 5, 1985 Braves/Cubs afternoon matchup (the Braves and Expos wore similar-looking road jerseys that season). In his review of the film, Gene Siskel complained that real Chicago kids prefer to sit in the bleachers."
    },
    {
      question: "Footloose was loosely based on events that took place in which Oklahoma city?",
      choiceA: "Perry",
      choiceB: "Elmore City",
      choiceC: "Broken Bow",
      choiceD: "Sulfur",
      correctAnswer: "B",
      factoid: "<h2><b>Elmore City</b></h2> <br>Elmore City had forbidden public dancing by law since its founding. In January of 1979, the local high schoolers asked that the rules be changed so that they could have a prom, to the anger of the reverend from the United Pentecostal Church. The kids won and got to dance on prom night. Dean Pitchford (lyricist for Fame songs 'Red Light', 'Fame', and 'I Sing The Body Electric') read about all of it and visited the town. Pitchford had his screenplay after 22 drafts."
    },
    {
      question: "Aykroyd and Ramis originally wrote Bill Murray's role for which actor?",
      choiceA: "John Belushi",
      choiceB: "John Candy",
      choiceC: "Steve Martin",
      choiceD: "Chevy Chase",
      correctAnswer: "A",
      factoid: "<h2><b>John Belushi</b></h2> <br>Dan Aykroid wrote the role of Venkman for his best friend, John Belushi, whose untimely death prevented him from playing the part."
    },
    {
      question: "What is the name of the place that Daniel took Ali on their first date?",
      choiceA: "Blondie's Water Park",
      choiceB: "Putt Putt Golf",
      choiceC: "Golf and Stuff",
      choiceD: "Main Event",
      correctAnswer: "C",
      factoid: "<h2><b>Golf and Stuff</b></h2> <br>DC Comics actually owned the name 'Karate Kid,' thanks to their little known hero of the same name, who was part of the Legion of Superheroes. The comic book giant was kind enough to lend the studio their permission to use the title. At the end of the credits, there's a special thank you to DC Comics for letting them use it."
    },
    {
      question: "At at the end of the film who becomes the new Dread Pirate Roberts?",
      choiceA: "Miracle Max",
      choiceB: "Inigo Montoya",
      choiceC: "Fezzik",
      choiceD: "Count Rugen",
      correctAnswer: "B",
      factoid: "<h2><b>Inigo Montoya</b></h2> <br>Neither Cary Elwes or Mandy Patinkin had any sword-fighting experience before filming. Both trained rigorously, and every frame of Inigo and Westley's sword fight on The Cliffs of Insanity is actually the two actors."
    },
    {
      question: "In the movie 'Risky Business', Tom Cruise is seen dancing to this Bob Seger song.",
      choiceA: "Turn the Page",
      choiceB: "We've Got Tonight",
      choiceC: "Night Moves",
      choiceD: "Old Time Rock & Roll",
      correctAnswer: "D",
      factoid: "<h2><b>Old Time Rock & Roll</b></h2> <br>In what became the movie’s most iconic moment, Cruise uses a candlestick holder as a mic and dances around his house to Bob Seger’s 1978 song 'Old Time Rock and Roll.' 'I was just looking for something that was a timeless rock and roll piece that wouldn’t be dated,” said writer Paul Brickman "
    },
    {
      question: "What is the noise that Scott hears at the hardware store in the beginning of the film?",
      choiceA: "A Kid Blowing A Dog Whistle",
      choiceB: "A Loud Boom Box",
      choiceC: "A Wolf Howl",
      choiceD: "A Gunshot",
      correctAnswer: "A",
      factoid: "<h2><b>A Kid Blowing A Dog Whistle</b></h2> <br>The movie was a rush job. The entire film was shot in 21 days around a break Michael J. Fox had in his Family Ties production schedule."
    },
    {
      question: "What candy bar does Chunk get for riding up the hill?",
      choiceA: "Baby Ruth",
      choiceB: "Three Musketeers",
      choiceC: "Snickers",
      choiceD: "Mars Bar",
      correctAnswer: "A",
      factoid: "<h2><b>Baby Ruth</b></h2> <br>Chunk is Jeff Cohen’s only live action feature film role to date. He left acting to pursue a law degree and is now a founding partner at an entertainment law firm."
    },
    {
      question: "Where do the Frog Brothers work?",
      choiceA: "Pizza Place",
      choiceB: "Record Store",
      choiceC: "Comic Book Store",
      choiceD: "Movie Theater",
      correctAnswer: "C",
      factoid: "<h2><b>Comic Book Store</b></h2> <br>The names of the Frog brothers, Edgar and Alan, are obviously a reference to the classic writer of horror fiction, Edgar Allan Poe."
    },
    {
      question: "What was the hooker’s name (Jamie Lee Curtis' character)?",
      choiceA: "Penelope",
      choiceB: "Amber",
      choiceC: "Ophelia",
      choiceD: "Clara",
      correctAnswer: "C",
      factoid: "<h2><b>Ophelia</b></h2> <br>When it came to casting, Landis said, ‘What really got me in trouble was Jamie Lee Curtis, because up to that point she had only done horror pictures. But Jamie did a terrific job. She somehow made her part, the hooker with a heart of gold, almost believable!’"
    },
    {
      question: "What type of computer do Wyatt and Gary use to design and build Lisa?",
      choiceA: "Apple III",
      choiceB: "Memotech MXT512",
      choiceC: "Commodore VIC-20",
      choiceD: "Texas Instruments TI-99",
      correctAnswer: "B",
      factoid: "<h2><b>Memotech MTX512</b></h2> <br>Wyatt's computer, with which they hack into the Pentagon mainframe, is a Memotech MTX512 with an FDX add-on. Memotech actually went into receivership in 1985 because the MTX series sold so badly."
    },
  ];
  var backgroundCount = 0;
  var questionsCount = 0;
  var audioCorrect = new Audio("assets/audio/hooray.mp3");
  var audioWrong = new Audio("assets/audio/wrong.mp3");
  var audioTimeUp = new Audio("assets/audio/time-up.mp3");
  var clockRunning = false;
  var countdownTimer = 30;
  var intervalId;
  var scoreCorrect = 0;
  var scoreIncorrect = 0;

  // hides everything on window load except the title box and start button
  window.onload = function() {
    $(".textBoxAnswer").hide();
    $(".textBox").hide();
    $("#countdownTimer").hide();
    $("#pickAnswer").hide();
    $(".textResults").hide();
    $(".finalScore").hide();
  };
  // loads background image and updates css
  $(function() {
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")"
    );
  });

  function backgroundChange(){
    if (backgroundCount > backgroundImage.length - 1) backgroundCount = 0;
    backgroundCount++;
    $("body").css(
      "background-image",
      "url(" + backgroundImage[backgroundCount] + ")");
    if (backgroundCount == backgroundImage.length)
    finalScore();
  }

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
      timesUp();
      scoreIncorrect++;
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
    } return minutes + "0:" + seconds;
  }



// on start button click. hide button and shows question and answers on page
  $("#game-start-button").click(function () {
    $("button").hide();
    $(".textBoxAnswer").show();
    $(".textBox").show();
    $("#countdownTimer").show();
    $("#pickAnswer").show();
    resetTimer();
    startTimer();
  });

// function to load next question and answers
function nextQuestion() {
  $(".textResults").hide();
  $(".textBoxAnswer").show();
  $(".textBox").show();
  $("#countdownTimer").show();
  $("#pickAnswer").show();
  resetTimer();
  startTimer();
if (questionsCount < questions.length - 1)
questionsCount++;
    $("#question").html(questions[questionsCount].question);
    $("#A").html(questions[questionsCount].choiceA);
    $("#B").html(questions[questionsCount].choiceB);
    $("#C").html(questions[questionsCount].choiceC);
    $("#D").html(questions[questionsCount].choiceD);
}



// When user clicks answer choice, decides if it is correct or wrong.


  $(".textBoxAnswer").click(function() {
    var userAnswer = $(this).attr("id");
  if (userAnswer == questions[questionsCount].correctAnswer){
    scoreCorrect++;
    correctAnswer();
  } else {
    scoreIncorrect++;
    wrongAnswer();} 
});

// If the answer is correct, plays audioCorrect, shows correct, shows factoid, plays a gif. 

function correctAnswer() {
  $(".textBoxAnswer").hide();
  $("#countdownTimer").hide();
  $("#pickAnswer").hide();
  stopTimer();
  resetTimer();
  $(".textResults").show();
  audioCorrect.play();
  $("#rightWrong").html("<p>" + "CORRECT!".fontcolor("green") + "</p>");
  $("#factoid").html(questions[questionsCount].factoid);
  setTimeout(nextQuestion, 10000);
  setTimeout(backgroundChange, 10000);
}

// if answer is wrong, plays audioWrong, shows the correct answer and factoid and plays gif
function wrongAnswer(){
  $(".textBoxAnswer").hide();
  $("#countdownTimer").hide();
  $("#pickAnswer").hide();
  stopTimer();
  resetTimer();
  $(".textResults").show();
  audioWrong.play();
  $("#rightWrong").html("<p>" + "WRONG!".fontcolor("red") + "</p>");
  $("#factoid").html(questions[questionsCount].factoid);
  setTimeout(nextQuestion, 10000);
  setTimeout(backgroundChange, 10000);
}

function timesUp(){
  $(".textBoxAnswer").hide();
  $("#countdownTimer").hide();
  $("#pickAnswer").hide();
  stopTimer();
  resetTimer();
  $(".textResults").show();
  audioTimeUp.play();
  $("#rightWrong").html("TIME UP!");
  $("#factoid").html(questions[questionsCount].factoid);
  setTimeout(nextQuestion, 10000);
  setTimeout(backgroundChange, 10000);
}


function finalScore(){
  $(".textBoxAnswer").hide();
  $(".textBox").hide();
  $("#countdownTimer").hide();
  $("#pickAnswer").hide();
  $(".textResults").hide();
  $(".finalScore").show();
  stopTimer();
  resetTimer();
  

  $('#finalMessage').html("Thanks for Playing!!");
	$('#correctAnswers').html("Correct Answers: " + scoreCorrect);
	$('#incorrectAnswers').html("Incorrect Answers: " + scoreIncorrect);
}

});

  
