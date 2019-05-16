let $drag = document.getElementById('box');

$drag.addEventListener('mousedown', function (event) {
  event.preventDefault();

  console.log('$drag.offsetLeft', $drag.offsetLeft)
  console.log('$drag.offsetTop', $drag.offsetTop)
  console.log('event.clientX', event.clientX)
  console.log('event.clientY', event.clientY)

  let distanceX = event.clientX - $drag.offsetLeft;
  let distanceY = event.clientY - $drag.offsetTop;

  function handleMouseMove (event) {
    let left = event.clientX - distanceX;
    let top = event.clientY - distanceY;

    if (left <= 0) left = 0;
    if (left >= (1200 - 100)) left = 1100;

    if (top <= 0) top = 0;
    if (top >= (600 - 100)) top = 500;
  
    $drag.style.left = left + 'px';
    $drag.style.top = top + 'px';
  }

  function handleMouseUp (event) {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }

  document.addEventListener('mousemove', handleMouseMove);
  document.addEventListener('mouseup', handleMouseUp);
});