//variables
var $userName = $('#userName');
var $nameScreen = $('#enterName');
var name="";
var $avatarScreen = $('#chooseAvatar');
var $countScreen = $('#countScreen')
var $timer = $('#countdown-timer');

//user enters name and switches screen from entername-->chooseAvatar
$userName.on('keyup', function(e){
  if(e.keyCode === 13){
  name = $userName.val();
  $nameScreen.hide();
  $avatarScreen.removeClass("hide");
  }
});

//avatar
$('#avatarBox').on('click', function(e){
    $countScreen.removeClass("hide");
  $avatarScreen.hide();

var timer=4;
  setInterval(function(){
  timer--;
    $timer.text(timer);
    console.log(timer);
      if (timer<=0){
        $countScreen.hide();
      }
      }, 1000);
});
