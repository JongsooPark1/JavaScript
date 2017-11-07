// canvas 객체 사용하기
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 이미지 불러오기
var bgImage = new Image();
var bgload = false;
bgImage.onload = function() {
  bgload = true;
};
bgImage.src = "./animation.jpg";

//ball 객체 만들기
var ball = {
  x: 10,
  y: 300,
  dx: 100,
  dy: 100,
  radius: 10,
  color: "red",
  move: function() {
    this.x += this.dx;
    this.y += this.dy;
  },
  setSpeed: function(x, y) {
    this.dx = x;
    this.dy = y;
  },
  check: function() {
      if (this.x < 10 || this.x > 1014) {
        this.dx = -1 * (1.2 * this.dx);
      }

      if (this.y < 10 || this.y > 630) {
        this.dy = -1 * (1.2 * this.dy);
    }
  }
};

//공 그리기
ctx.drawBall = function() {
  this.beginPath();
  this.fillStyle = ball.color;
  this.ellipse(ball.x, ball.y, ball.radius, ball.radius,
     0, 0, 2 * Math.PI);
  this.fill();
};

// 볼 초기 속도 정하기
ball.setSpeed(5, -1);

var drawAll = function() {
  if (bgload) {
     ctx.drawImage(bgImage, 0, 0);
  }
  ball.check();
  ball.move();
  ctx.drawBall();
};

setInterval(drawAll, 300);
