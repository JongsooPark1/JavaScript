// $(document).ready(function(){
//     $("p").click(function(){
//         $(this).delay(2000).hide();
//     });
// });

var firstVal = 0;
var secondVal = 0;


function button_click(n) {
  test.screen.value += n;
  test.output.value += n;
}

function eraseNum() {
  var str = test.screen.value;
  test.screen.value = str.slice(0, -1);
  test.output.value = str.slice(0, -1);
}

function clearNum() {
  test.screen.value = "";
  test.output.value = "";
}

function answer() {
        try{
            test.output.value = eval(document.test.output.value);
        }catch(e){
          alert('저는 아직 부족한 계산기라서 정확히 입력해주셔야 해요 ^ㅡ^ㅡ^');
        }
}

// function plus() {
//   test.screen.value += "+";
//   test.output.value = "";
//   firstVal + secondVal;
//   test.output.value = firstVal + secondVal;
// }

// for(var i = 1; i <= 9; i++) {
//   var button = document.getElementById("btn" + i);
//   (function(n) {
//     button.onclick = function() {
//       p2.innerHTML += n;
//     };
//   })(i);
// }

// var button = document.getElementById("btnDot");
// button.onclick = function() {
//   p2.innerHTML += ".";
// }
//
// var button = document.getElementById("btnClear");
// button.onclick = function() {
//   p2.innerHTML = "";
// }
//
// var button = document.getElementById("btnDivide");
// button.onclick = function() {
//   a = parseInt(p2.innerHTML);
//   p2.innerHTML = "";
// }
//
// var button = document.getElementById("btnMultiply");
// button.onclick = function() {
//   p2.innerHTML = 0;
// }
//
// var button = document.getElementById("btnMinus");
// button.onclick = function() {
//   p2.innerHTML = 0;
// }
//
// var button = document.getElementById("btnPlus");
// button.onclick = function() {
//   p2.innerHTML = 0;
// }
