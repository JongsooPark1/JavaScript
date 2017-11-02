alert("숫자 게임을 시작하겠습니다 !")
var a = Math.floor(Math.random() * 100);
console.log(a);
var str = "";
for (var i = 1; i >= 1; i++) {
  var b = parseInt(prompt("1과 100 사이의 정수를 입력하세요"));
  if (a > b) {
    str  = makeSpace(100);
    document.write(str + b + "보다 더 큰 값을 입력하세요 ~<br>");
  } else if(a < b) {
    str = makeSpace(187);
    document.write(str + b + "보다 더 작은 값을 입력하세요 ~<br>");
  } else if(a === b) {
    str = makeSpace(155);
    document.write("<br><br>" + str + "정답은 " + a + "입니다 !<br>");
    document.write(str + i + "번만에 맞췄습니다 !");
    break;
  }
}

function makeSpace(n) {
  var str = "";
  for (var i = 0; i < n; i++) {
    str += "&nbsp";
  }
  return str;
}
