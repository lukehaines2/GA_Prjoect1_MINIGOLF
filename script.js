$(document).ready(function(){
  console.log('ready');

/*********************************************/
//DECALRE THE VARIABLES
/*********************************************/
var ball = $("#box"); //<--- Golf Ball
var r;
// var wall1;
// var wall2
// var wall3
// var wall4
// var wall5
// var wall6
// var TrajectoryLine //Transparent white line that indicates shooting direction and force
// var scores // Stores the scoring in alert image

/*********************************************/
//DECALRE THE FUNCTIONS
/*********************************************/
// Main = {}
// startButtonListeners = {}
// showCredits = {}
// hideCredits = {}
// showGameView = {}
// gameListeners = {}
// shoot = {}
// onCollision = {}
// alert = {}
// restart game after ball in hole

/*********************************************/
//DECALRE THE EVENT LISTENERS
/*********************************************/
// Ball goes into hole - hidden and restart
// Shoot ball - On mouseup
// Ball count

var y = 50;
var x = 50;
// GOLF BALL ROTATE FUNCTION
(function() {
    
    var RAD2DEG = 180 / Math.PI;            
    //Rotate from the middle of the ball
    ball.centerX = ball.offset().left + ball.width()/2;
    ball.centerY =  ball.offset().top + ball.height()/2;

    var offset, dragging=false;
    ball.mousedown(function(e) {
      dragging = true;
      offset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
    })
    //EVENT LISTENER FOR MOUSEUP
    $(document).mouseup(function() {
      dragging = false
    })
    //EVENT LISTENER: ADD TRAJECTORY GUIDE

    //EVENT LISTENER: DIRECTION
    $(document).mousemove(function(e) {
      if (dragging) { 
        //Recalculating the end position after drag
        var newOffset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
        r = (offset - newOffset) * RAD2DEG;
        console.log(r);
        // console.log(newOffset);
        ball.css('-webkit-transform', 'rotate(' + r + 'deg)');
        r = r * Math.PI / 180;
        console.log('display angle' + r * Math.PI / 180);
        console.log('print' + r);
        var dx = Math.cos(r) * 50;
        var dy = Math.sin(r) * 50;
        x += dx;
        y += dy;
        console.log(dx);
        console.log(dy);

        $("#rollBall").click(function(event){
      $(this).animate({'margin-left': + dx , 'margin-right': + dy}, 2000); 
      // console.log("last r", r);
    });
      }
    })
    }());

// var left = 0;
// $('#rollBall').click(function() {
//       $(this).animate({
//         left: '-=100'
//       }, 5000, function() {
//         // Animation complete.
//       });
//     });



//FUNCTION TO MOVE THE BALL FORWARD
// var walkLeft;
// function moveBall() {
//     var ball = $('#rollBall');
//     var currentLeft = parseInt(ball.css('left'));
//     var newLeft = currentLeft + 50;
    
//     if (newLeft >= ($(window).width() - parseInt(ball.css('width')) ) ){
//       console.log('hello')
//         clearInterval(walkRight)
//         walkLeft = setInterval(moveBallBack, 1000);
//     };
//   ball.css('left', newLeft + 'px')
//   }

//   var walkRight = setInterval(moveBall, 1500);

var walkLeft;
  function moveCatBack () {
    //change the newLeft to - not + 50
    //repeat the general command from the other fucntion but make it go right to left. 
    //Call it from the right margin??
    var cat = $('#rollBall');
    var currentLeft = parseInt(cat.css('left'));
    var newLeft = currentLeft - 50;
    var newHeight = Math.random() * $(window).height();
   
    // if (newLeft >= ($(window).width() + parseInt(cat.css('width')) ) ){
    //   console.log('at the edge')
    //     clearInterval(walkLeft)
    //     return
    cat.css({'left': newLeft, 'top': newHeight});

  }

  function moveCat () {
    var cat = $('#rollBall');
    var currentLeft = parseInt(cat.css('left'));
    var newLeft = currentLeft + 50;
    
    if (newLeft >= ($(window).width() - parseInt(cat.css('width')) ) ){
      console.log('hello')
        clearInterval(walkRight)
        walkLeft = setInterval(moveCatBack, 1000);
    };
  cat.css('left', newLeft + 'px')
  }

  var walkRight = setInterval(moveCat, 1500);



}); //Closing the Doc Ready