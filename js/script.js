//variables
var $userName = $('#userName');
var $nameScreen = $('#enterName');
var $avatarScreen = $('#chooseAvatar');
var $countScreen = $('#countScreen')
var $timer = $('#countdown-timer');
var $instructionScreen = $('#instructionScreen');
var $imgScreen = $('#imgScreen');
var $circle = $('#circle');
var $answer = $('#answer');
var name="";
var positions = ["50% 5%", "30% 80%","30% 20%", "90%"]
var num = 0;
var currentImage = 0;
var images = [
  {
    url: "images/picture1.jpg",
    name: "dog"
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
    if (images[currentImage].name === guess){
      console.log('right');
      currentImage++;
    } else {
      console.log('wrong');
    }
  }
})

//user enters name and switches screen from entername-->chooseAvatar
$userName.on('keyup', function(e){
  if (e.keyCode === 13) {
    name = $userName.val();
    $nameScreen.hide();
    $avatarScreen.removeClass("hide");
  }
});

//avatar
$('#avatarBox').on('click', function(e){
  $instructionScreen.removeClass("hide");
  $('html').addClass("black");
  $avatarScreen.hide();
});

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
      }
      }, 1000);
});

$circle.attr("tabindex",-1).focus();

$(document).on('keydown', function(event){
  switch(event.which){
    case 39://left arrow key
      $circle.stop().css(
       "backgroundPosition", positions[num]
      );
      if (num+1 < positions.length){
        num ++;
      }
      break;
    case 37: // right arrow
      $circle.stop().css(
        "backgroundPosition", positions[num]
      );
      if (num-1 > 0) {
        num--;
      }
      break;
  }
});
