// canvas 객체 사용하기
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// 이미지 불러오기
var bgImage = new Image();
var bgload = false;
// bgImage.onload = function () {    // Async, 원래는 이미지를 가져오는데 시간이 걸린다. 그래서 쉬운 작업인 공을 그리는 것부터 시작하고,
//   bgload = true;                 // 배경을 그리기 때문에, 그린 공이 노출되지 않는다. 따라서 이와같이 코드를 변경하여 배경을 먼저 그린 뒤,
// };                                // 공을 그리게 한다.
bgImage.src = "supermario.jpg";

//draw background image
// var drawBackground = function() {
//   ctx.drawImage(bgImage, 300, 0); //전체 이미지에서 x좌표는 300부터, y좌표는 0부터만 보여주기
// }

var bgImage = new Image();

bgImage.src = "supermario.jpg";

//ball 객체 만들기
var ball = {
  x: 10,
  y: 300,
  dx: 10000,
  dy: 10000,
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
        // this.dx = 0;
        this.dx = -1 * (1.2 * this.dx);
      }

      if (this.y < 10 || this.y > 630) {
        // this.dy = 0;
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
  // if (bgload) {
  //   drawBackground();
  // }
  // ctx.drawImage(bgImage, 0, 0);
  ctx.drawImage(bgImage, 0, 0);

  ball.check();
  ball.move();
  ctx.drawBall();
};

setInterval(drawAll, 300);
