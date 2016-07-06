//variables
var $userName = $('#userName');
var $nameScreen = $('#enterName');
var $avatarScreen = $('#chooseAvatar');
var $countScreen = $('#countScreen')
var $timer = $('#countdown-timer'); //countdown
var $instructionScreen = $('#instructionScreen');
var $imgScreen = $('#imgScreen');
var $circle = $('#circle');
var $answer = $('#answer');
var $endGame = $('#endGame');
var $gameTimer = $('#timer'); //game timer
var $score = $('#score');
var $restart = $('#restart');
var $winGame = $('#winGame');
var playerScore = 0;
var name="";
var positions = ["50% 5%", "30% 80%", "30% 20%", "80% 50%"]
var num = 0;
var currentImage = 0;
var images = [
  {url: "url(img/picture1.jpg)", name: "dog"},
  {url: "url(img/picture23.jpg)", name: "ice cream"},
  {url: "url(img/picture24.jpg)", name: "lollipop"},
  {url: "url(img/picture25.jpg)", name: "smartphone"},
  {url: "url(img/picture26.jpg)", name: "gameboy"},
  {url: "url(img/picture21.jpg)", name: "omelette"},
  {url: "url(img/picture22.jpg)", name: "chocolate"},
  {url: "url(img/picture16.jpg)", name: "owl"},
  {url: "url(img/picture17.jpg)", name: "polar bear"},
  {url: "url(img/picture18.jpg)", name: "saturn"},
  {url: "url(img/picture19.jpg)", name: "minions"},
  {url: "url(img/picture20.jpg)", name: "cherry"},
  {url: "url(img/picture3.jpg)", name: "hamster"},
  {url: "url(img/picture4.jpg)", name: "duck"},
  {url: "url(img/picture2.jpg)", name: "cat"},
  {url: "url(img/picture5.jpg)", name: "raccoon"},
  {url: "url(img/picture6.jpg)", name: "eagle"},
  {url: "url(img/picture7.jpg)", name: "shovel"},
  {url: "url(img/picture8.jpg)", name: "burrito"},
  {url: "url(img/picture9.jpg)", name: "fish"},
  {url: "url(img/picture10.jpg)", name: "ferret"},
  {url: "url(img/picture11.jpg)", name: "cheesecake"},
  {url: "url(img/picture12.jpg)", name: "coffee"},
  {url: "url(img/picture13.jpg)", name: "corbin"},
  {url: "url(img/picture14.jpg)", name: "spaghetti"},
  {url: "url(img/picture15.jpg)", name: "bee"}
]


// when the user types a name and hits enter
// get the value from the input
// compare the value to the current images[] name
// if they match move to the next image and increase the score
// if they don't match return false

$answer.on('keyup', function(e){
  if (e.keyCode === 13) {
    var guess = $answer.val();
    $answer.val('');
    if (images[currentImage].name === guess){
      console.log('right');
      currentImage++;

      playerScore +=1;
      $score.text(playerScore);
      positions[0];

      if (currentImage >= images.length){
        winGame();
      }

      nextImg();
    } else {
      $('input').addClass("fade-in");
      setTimeout(function() {
      $('input').addClass("fade-out");
    }, 300);
      setTimeout(function() {
      $('input').removeClass("fade-in");
      $('input').removeClass("fade-out");
    }, 1000);
      console.log('wrong');
      penalty();

    }
  }
})

function nextImg() {
  $circle.css(
    'background-image', images[currentImage].url
  );
}
//win game
function winGame() {
  $imgScreen.hide();
  $winGame.removeClass("hide");
  $('html').css(
    'background-image', "url(img/starBack.gif)"
  );
}
//end game score
function gameEnd() {
  $imgScreen.hide();
  $endGame.removeClass("hide");
  $('#endScore').text(name + "'s Score: " + playerScore);
}
//restart
$restart.on('click', function(){
  location.reload();
});

//restart hover animation
$restart.hover(function(){
   $(this).attr("src", "img/dogRestart.gif");
 },
  function(){
  $(this).attr("src", "img/dogRestartstatic.png");
});
//user enters name and switches screen from entername to instruction
$userName.focus();
$userName.on('keyup', function(e){
  if (e.keyCode === 13) {
    name = $userName.val();
    $nameScreen.hide();
    $instructionScreen.removeClass("hide");
    $('html').addClass("black");
  }
});

//GAME START
$('#startButton').hover(function(){
   $(this).attr("src", "img/dogButton.gif");
 },
  function(){
  $(this).attr("src", "img/dogButtonstatic.png");
});

//start button click function
$('#startButton').on('click', function(e){
  $countScreen.removeClass("hide");
  $instructionScreen.hide();
  $('html').removeClass("black");


  var timer2=4;
  var timerID= setInterval(function(e){
    timer2--;
    $timer.text(timer2);
    console.log(timer2);
      if (timer2<=0){
        clearInterval(timerID);
        $countScreen.hide();
        $imgScreen.removeClass("hide");
        $answer.focus();
        startTimer();
      }
      }, 1000);
});

$(document).on('keydown', function(event){
  switch(event.which){
    case 39://left arrow key
      $circle.stop().css(
       "backgroundPosition", positions[num]
      );
      if (num+1 < positions.length){
        console.log(num + 'left');
        num ++;
      }
      break;
    case 37: // right arrow
      $circle.stop().css(
        "backgroundPosition", positions[num]
      );
      if (num > 0) {
        console.log(num+'right');
        num--;
      }
      break;
  }
});

//subtract 5secs to timer
function penalty(){
  timer-=5;
}

function startTimer () {
  timer=150;
  var timerID = setInterval(function(e){
    $gameTimer.text(timer);
    timer--;
      if (timer<=0){
        clearInterval(timerID);
        gameEnd();
      }
      }, 1000);
}

//write here
