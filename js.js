var $circle = document.getElementById('circle');
var startPosition = {};
var touched = false;

$circle.addEventListener('mousedown', function (event) {
    touched = true;
    startPosition = {
        x: event.offsetX,
        y: event.offsetY
    }
});

$circle.addEventListener('mouseup', function () {
    touched = false;
});

document.body.addEventListener('mousemove', function (event) {
    if(!touched) {
        return;
    }
    $circle.style.top = (event.pageY - startPosition.y) + 'px';
    $circle.style.left = (event.pageX - startPosition.x) + 'px';
});