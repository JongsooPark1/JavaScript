document.getElementsByTagName("h1")[0].style.fontSize = "40px";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 640, 480);

for(var i = 0; i < 8; i = i + 2) {
  for(var j = 0; j < 8; j = j + 2) {
    ctx.fillStyle = "#0c0c0b";
    ctx.fillRect(i * 80, j * 60, 80, 60);
    ctx.fillRect((i + 1) * 80, (j + 1) * 60, 80, 60);
    ctx.fillStyle = "#eacbaf";
    ctx.fillRect((i + 1) * 80, j * 60, 80, 60);
    ctx.fillRect(i * 80, (j  + 1) * 60, 80, 60);
  }
}