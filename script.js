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
var y = offset[0]
var x = offset[1]
//COOREDINATES DEFINED TO THE LEFT
var y = 407;
var x = 8;
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
      $('#box').addClass('arrow');
    })
    //EVENT LISTENER FOR MOUSEUP
    $(document).mouseup(function() {
      dragging = false
      $('#box').removeClass('arrow');
        //Ball travel
        var dx = Math.cos(r) * 100/200;
        var dy = Math.sin(r) * 100/200;
        var password = setInterval(function(){
            x += dx;
            y += dy;
            // console.log(x);
            // console.log(y);
            $("#box").offset({top: y, left: x});
        if ( Math.abs(x * Math.cos(r)) > 100 ){
            clearInterval(password);
        } 
        }, 2)

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
       
        // r = r * Math.PI / 180;
        // console.log('display angle' + r * Math.PI / 180);
        // console.log('print' + r);


        
    // $("#box").click(function(event){
    //   $(this).animate({'margin-left': + dx , 'margin-top': + dy }, 2000); 
    //   // console.log("last r", r);
    // });
      
      }
    })
    }());

  
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



}); //Closing the Doc Ready