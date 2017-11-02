document.getElementsByTagName("h1")[0].style.fontSize = "40px";

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.strokeRect(0, 0, 640, 480);

ctx.beginPath();
// Outer circle
ctx.arc(75, 75, 50, 0, Math.PI * 2, true);
// Mouth (clockwise)
ctx.moveTo(110, 75);
ctx.arc(75, 75, 35, 0, Math.PI, false);
// Left eye
ctx.moveTo(70, 65);
ctx.arc(65, 65, 5, 0, Math.PI * 2, true);
// Right eye
ctx.moveTo(95, 65);
ctx.arc(90, 65, 5, 0, Math.PI * 2, true);
// Body
ctx.moveTo(75, 125);
ctx.lineTo(75, 230);
// Left hand
ctx.moveTo(75, 160);
ctx.lineTo(35, 130);
// Right hand
ctx.moveTo(75, 160);
ctx.lineTo(115, 130);
// Left leg
ctx.moveTo(75, 230);
ctx.lineTo(35, 270);
// Right leg
ctx.moveTo(75, 230);
ctx.lineTo(115, 270);
ctx.stroke();