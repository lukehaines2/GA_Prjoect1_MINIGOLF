$(document).ready(function(){
  console.log('ready')



//The Golf ball rotate process
var dragging = false

$(function() {
    var target = $('#target')
    target.mousedown(function() {
        dragging = true
    })
    $(document).mouseup(function() {
        dragging = false
    })
    $(document).mousemove(function(e) {
        if (dragging) {

            var mouse_x = e.pageX;
            var mouse_y = e.pageY;
            var radians = Math.atan2(mouse_x - 10, mouse_y - 10);
            var degree = (radians * (180 / Math.PI) * -1) + 90;
            target.css('-moz-transform', 'rotate(' + degree + 'deg)');
            target.css('-moz-transform-origin', '50% 50%');
            target.css('-webkit-transform', 'rotate(' + degree + 'deg)');
            target.css('-webkit-transform-origin', '50% 50%');
            target.css('-o-transform', 'rotate(' + degree + 'deg)');
            target.css('-o-transform-origin', '50% 50%');
            target.css('-ms-transform', 'rotate(' + degree + 'deg)');
            target.css('-ms-transform-origin', '50% 50%');
        }
    })
})










}); //Closing the Doc Ready