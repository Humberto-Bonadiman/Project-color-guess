const ball = document.querySelectorAll('.ball');
const question = document.querySelector('#rgb-color');
const start = document.querySelector('#reset-game');
const paragraphStart = document.querySelector('#answer');
const points = document.querySelector('#points');
const correct = document.querySelector('.correct');
const allBalls = document.querySelector('#all-balls');
var score = document.querySelector('#score');
const rightAnswer = 3;
var correctAnswer = 0;

function getRandomColor() {
  let color = 'rgb';
  color += '(' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ', ' + (Math.floor(Math.random() * 255) + 1) + ')';
  return color;
}

function changeBallsColor() {
  for (let index = 0; index < ball.length; index += 1) {
    var ballIndex = ball[index];
    ballIndex.style.backgroundColor = getRandomColor();
  }
  var number = Math.floor(Math.random() * 6);
  var rightBall = ball[number];
  rightBall.classList.add('correct');
  question.innerText = rightBall.style.backgroundColor;
}
changeBallsColor();

// fonte (com minhas modificações): https://github.com/tryber/sd-014-b-project-color-guess/pull/17/commits/5a856847b408d1b9d684980f64ed0a1ff0dfddbd
function selectBall(ball) {
  let right = document.querySelector('.correct').style.backgroundColor;
  if (ball.target.style.backgroundColor === right) {
    let answer = document.querySelector('#answer').innerText = 'Acertou!';
    correctAnswer += rightAnswer;
    score.innerText = correctAnswer;
    console.log(ball.target.style.backgroundColor);
    console.log(right);
  } else {
    let answer = document.querySelector('#answer').innerText = 'Errou! Tente novamente!';
    console.log(ball.target.style.backgroundColor);
    console.log(right);
  }
}

allBalls.addEventListener('click', selectBall);

function gameStart(){
  paragraphStart.innerText = "Escolha uma cor";
  changeBallsColor();
}

start.addEventListener('click', gameStart);
