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
var playerScore = 0;
var name="";
var positions = ["50% 5%", "30% 80%", "30% 20%", "80% 50%"]
var num = 0;
var currentImage = 0;
var images = [
  {
    url: "url(img/picture1.jpg)",
    name: "dog"
  },
  {
    url: "url(img/picture2.jpg)",
    name: "cat"
  },
  {
    url: "url(img/picture3.jpg)",
    name: "hamster"
  },
  {
    url: "url(img/picture4.jpg)",
    name: "duck"
  },
  {
    url: "url(img/picture5.jpg)",
    name: "raccoon"
  },
  {
    url: "url(img/picture6.jpg)",
    name: "eagle"
  },
  {
    url: "url(img/picture7.jpg)",
    name: "shovel"
  }
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

      if (currentImage >= images.length){
        gameEnd();
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
    }
  }
})

function nextImg() {
  $circle.css(
    'background-image', images[currentImage].url
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

// //avatar
// $('#avatarBox').on('click', function(e){
//   $instructionScreen.removeClass("hide");
//   $('html').addClass("black");
//   $avatarScreen.hide();
// });
//startbutton hover animation
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

  var timer=4;
  var timerID= setInterval(function(e){
    timer--;
    $timer.text(timer);
    console.log(timer);
      if (timer<=0){
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

function startTimer () {
  var timer=150;
  var timerID= setInterval(function(e){
    $gameTimer.text(timer);
    timer--;
      if (timer<=0){
        clearInterval(timerID);
        gameEnd();
      }
      }, 1000);
}
