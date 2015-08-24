$(document).ready(function(){
  console.log('ready');

/*********************************************/
//DECALRE THE VARIABLES
/*********************************************/
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
// local Main = {}
// local startButtonListeners = {}
// local showCredits = {}
// local hideCredits = {}
// local showGameView = {}
// local gameListeners = {}
// local shoot = {}
// local onCollision = {}
// local alert = {}

var ball = $("#box");
//GOLF BALL ROTATE FUNCTION
(function() {
    
    var RAD2DEG = 180 / Math.PI;            
    
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
    //EVENT LISTENER FOR DIRECTION
    $(document).mousemove(function(e) {
      if (dragging) { 
        //Recalculating the end position after drag
        var newOffset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
        var r = (offset - newOffset) * RAD2DEG;
        
        ball.css('-webkit-transform', 'rotate(' + r + 'deg)');
      }
    })
    }());

FUNCTION TO MOVE THE BALL FORWARD

var moveLeft;
function moveBall() {
    var ball = $('pushBall');
    var currentLeft = parseInt(ball.css('left'));
    var newLeft = currentLeft + 50;
    
    if (newLeft >= ($(window).width() - parseInt(ball.css('width')) ) ){
      console.log('hello')
        clearInterval(walkRight)
        walkLeft = setInterval(moveballBack, 1000);
    };
  ball.css('left', newLeft + 'px')
  }

  var walkRight = setInterval(moveBall, 1500);
}








// //The Golf ball rotate process
// var dragging = false

// $(function() {
//     var target = $('#target')
//     target.mousedown(function() {
//         dragging = true
//     })
//     $(document).mouseup(function() {
//         dragging = false
//     })
//     $(document).mousemove(function(e) {
//         if (dragging) {

//             var mouse_x = e.pageX;
//             var mouse_y = e.pageY;
//             var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
//             var degree = (radians * (180 / Math.PI) * -1) + 90;
//             target.css('-moz-transform', 'rotate(' + degree + 'deg)');
//             target.css('-moz-transform-origin', '50% 50%');
//             target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
//             target.css('-webkit-transform-origin', '50% 50%');
//             target.css('-o-transform', 'rotate(' + degree + 'deg)');
//             target.css('-o-transform-origin', '50% 50%');
//             target.css('-ms-transform', 'rotate(' + degree + 'deg)');
//             target.css('-ms-transform-origin', '50% 50%');
//         }
//     })
// })



}); //Closing the Doc Ready