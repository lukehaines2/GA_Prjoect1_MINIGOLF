$(document).ready(function(){
  console.log('ready');

/*********************************************/
//DECALRE THE FUNCTIONS
/*********************************************/
// onCollision = {}
// alert {}
// restart game after ball in hole

//CLICK COUNTER ON MOUSE-UP - called within ball
function clickCounter() {
    counter++;
    $("#theCount").text('Shots: ' + counter);
};
console.log(clickCounter);
/*********************************************/
//DECALRE THE EVENT LISTENERS
/*********************************************/
// Ball goes into hole - hidden and restart


/*********************************************/
//DECALRE THE VARIABLES
/*********************************************/
var ball = $("#box"); //<--- Golf Ball
var r;
var counter = 0;
// var wall1;
// var wall2
// var wall3
// var wall4
// var wall5
// var wall6

//COOREDINATES DEFINED TO THE LEFT
var y = $('#box').offset().top;
var x = $('#box').offset().left;
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
    console.log('mousedown');
    //EVENT LISTENER: ADD TRAJECTORY GUIDE
    // $('#box').addClass('arrow');
    $('#box').css('background-image', 'url(images/arrow2.png)');
})

    //EVENT LISTENER FOR MOUSEUP
    $(document).mouseup(function() {
      dragging = false
      // $('#box').removeClass('arrow');
        //Ball travel
        var dx = Math.cos(r) * 100/200; //<--
        var dy = Math.sin(r) * 100/200; //<--0.5 per 10ms
        //var xn = x0 + v * t * cos(theta)
        // var xn = x + 100 * 100/200 * Math.cos(r)
        // var yn = y + 100 * 100/200 * Math.sin(r)
        var orgx = x;
        var orgy = y;
        var movement = setInterval(function(){
            $("#box").offset({top: y, left: x});
            
            x += dx;
            y += dy;
            if (Math.cos(r) !== 0) {
                if ( Math.abs((x - orgx) * Math.cos(r)) > 200 ){
                clearInterval(movement);
                } 
            }
            else if (Math.abs(y - orgy) > 200) {
                clearInterval(movement);
            }
            
        }, 1)
        $('#box').css('background-image', 'url(images/golf-ball.png)');
        clickCounter()
    })
    

    //EVENT LISTENER: DIRECTION OF ROTATE
    $(document).mousemove(function(e) {
      if (dragging) { 
        //Recalculating the end position after drag
        var newOffset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
        // r = Prjected angle
        r = (offset - newOffset); //<---Deleted Degree Conversion
        console.log(r);
        // console.log(newOffset);
        ball.css('-webkit-transform', 'rotate(' + r + 'rad)');
      
      }
    })
    }());


    //COLLISON FUNCTIONS FOR HOLE
    function collidesWith (element1, element2) {
    var Element1 = ball;
    var Element2;

    Element1.top = $(element1).offset().top;
    Element1.left = $(element1).offset().left;
    Element1.right = Number($(element1).offset().left) + Number($(element1).width());
    Element1.bottom = Number($(element1).offset().top) + Number($(element1).height());

    Element2.top = $(element2).offset().top;
    Element2.left = $(element2).offset().left;
    Element2.right = Number($(element2).offset().left) + Number($(element2).width());
    Element2.bottom = Number($(element2).offset().top) + Number($(element2).height());

    if (Element1.right > Element2.left && Element1.left < Element2.right && Element1.top < Element2.bottom && Element1.bottom > Element2.top) {
        // Do your stuff here
    }
}



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