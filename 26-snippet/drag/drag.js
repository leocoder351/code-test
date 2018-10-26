let $drag = document.getElementById('box');

$drag.addEventListener('mousedown', function (event) {
  event.preventDefault();

  let distanceX = event.clientX - $drag.offsetLeft,
      distanceY = event.clientY - $drag.offsetTop;
  
  function handleOnMouoseMove (event) {
    let left = event.clientX - distanceX,
        top = event.clientY - distanceY;
    
    if (left <= 0) left = 0;
    if (left >= 1100) left = 1100;

    if (top <= 0) top = 0;
    if (top >= 500) top = 500;

    $drag.style.left = left + 'px';
    $drag.style.top = top + 'px';
  }

  function handleOnMouoseUp (event) {
    document.removeEventListener('mousemove', handleOnMouoseMove);
    document.removeEventListener('mouseup', handleOnMouoseUp);
  }

  document.addEventListener('mousemove', handleOnMouoseMove);
  document.addEventListener('mouseup', handleOnMouoseUp);
});