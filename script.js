const ball = document.querySelectorAll('.ball');

function getRandomColor() {
  let numbers = '255';
  let color = 'rgb';
  color += '(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
  return color;
}

for (index = 0; index < ball.length; index += 1) {
  ball[index].style.backgroundColor = getRandomColor();
}