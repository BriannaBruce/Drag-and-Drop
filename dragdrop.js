var $parent = $('.parent');
var $child = $('.child');

var x = 0;
var y = 0;

function onMousedown(event) {
  //listening
 $child.on('mousemove', onMousemove); 
 $child.on('mouseup', onMouseup);
 
 
 x = event.pageX;
 y = event.pageY;
  
  boxX = $child.css('left');
  boxY = $child.css('top');
  
  x = x - parseInt(boxX);
  y = y - parseInt(boxY);
}

function onMousemove(event) {
  var deltaX = event.pageX - x;
  var deltaY = event.pageY - y;
  
  var style = {
    top: deltaY + 'px',
    left: deltaX + 'px'
  }
  
  $child.css(style);
}

function onMouseup(event) {
  $child.off('mousemove', onMousemove); 
  $child.off('mouseup', onMouseup);
  
  
}

$child.on('mousedown', onMousedown);
