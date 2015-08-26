//*********************************************//
              // Luke Haines // 
                // WDI 15 //
//*********************************************//                

$(document).ready(function(){
  console.log('ready');

/*********************************************/
                // FUNCTIONS //
/*********************************************/

    //Displays the intro with slideup onclick
    $('#introScreen').ready(function(){
        intro.delay(5000).slideUp('slow');
    });

    //CLICK COUNTER ON MOUSE-UP - called within ball
    function clickCounter() {

        counter++;
        $("#theCount").text('Shots : ' + counter);
    };

    // FUNCTION: IF BALL HITS HOLE
    function isInTheHole(top, left) {
        
        console.log('top', top, 'left', left);
        var topPos = (top >=300 && top <= 330);
        var leftPos = (left >= 510 && left <= 550);
        console.log(topPos, leftPos);
        return topPos && leftPos;
    };

    // EVENT LISTENERS: for Buttons
    // if ($('#powStrong').click(event1, event2)) {
    //     p = powStrong;
    // }
    // else if ($('#powWeak').click(event1, )


    /*********************************************/
            //DECALRE THE GLOBAL VARIABLES//
    /*********************************************/
    var ball = $("#box"); //<--- Golf Ball
    var r;
    var counter = 0;
    var hole = $('#example');
    var intro = $('#introScreen');
    var powStrong = 250;
    var powMed = 150;
    var powWeak = 50;
    //COORDINATES DEFINED TO THE LEFT
    var y = $('#box').offset().top;
    var x = $('#box').offset().left;


    // GOLF BALL ROTATE FUNCTION
    function playItAll() {
        
        // var RAD2DEG = 180 / Math.PI;            
        //Rotate from the middle of the ball
        ball.centerX = ball.offset().left + ball.width()/2;
        ball.centerY =  ball.offset().top + ball.height()/2;

        var offset, dragging=false;
        ball.mousedown(function(e) {
        dragging = true;
        offset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
        console.log('mousedown');

        // EVENT LISTENER: ADD ARROW TRAJECTORY GUIDE
        $('#box').css('background-image', 'url(images/arrow2.png)');
        })

        // EVENT LISTENER FOR MOUSEUP
        $(document).mouseup(function() {
          dragging = false;
          
            // BALL TRAVEL - HECTIC MATHS!!
            var dx = Math.cos(r) * 100/200; //<--
            var dy = Math.sin(r) * 100/200; //<--0.5 per 10ms
            // var xn = x0 + v * t * cos(theta)
            
            var orgX = x;
            var orgY = y;
            var movement = setInterval(function() {
                $("#box").offset({top: y, left: x});
                
                x += dx;
                y += dy;

                var winning = isInTheHole(y,x);
                console.log('win?', !!winning)
                if (!!winning) {
                    alert('YOU WON MATE!!')
                    clearInterval(movement);
                }

                if (Math.cos(r) !== 0) {
                    if ( Math.abs((x - orgX) * Math.cos(r)) > 200 ) {
                    clearInterval(movement);
                    } 
                }
                else if (Math.abs(y - orgY) > 200) {
                    clearInterval(movement);
                }
            }, 1)

            // Change image back to regular ball
            $('#box').css('background-image', 'url(images/golf-ball.png)');
            
            clickCounter() // <--Call counter function on mouseUp

        })  // <---End of mouseUp
        
        // EVENT LISTENER: DIRECTION OF ROTATE
        $(document).mousemove(function(e) {
              if (dragging) { 
                // Recalculating the end position after drag
                var newOffset = Math.atan2(ball.centerY - e.pageY, e.pageX - ball.centerX);
                // r = Projected angle
                r = (offset - newOffset); // <---Deleted Degree Conversion from here

                ball.css('-webkit-transform', 'rotate(' + r + 'rad)');      
              }
        })
    };

    playItAll();

}); // <--- Closing the Doc Ready