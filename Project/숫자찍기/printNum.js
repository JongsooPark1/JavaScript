// function printNum1(startNum, endNum) {
//   var number = [];
//   var str = "";
//   for (var i = startNum; i <= endNum; i++) {
//     number.push(i);
//   }
//   for (var j = 0; j <= endNum - startNum; j++) {
//     str += number[j] + " ";
//   }
//   console.log(str);
// }
// printNum1(3, 8);
// function printNum2(input) {
//   var number = [];
//   var str = "";
//   for (var i = 0; i < input * input; i++) {
//     number.push(i + 1);
//     str += number[i] + " ";
//     if (number[i] % input === 0) {
//       console.log(str);
//       str = "";
//     }
//   }
// }
// printNum2(4);
// function printNum3(input1, input2) {
//   var num = new Array(input1);
//   var str = "";
//   for (var i = 0; i < input1; i++) {
//     num[i] = new Array(input1);
//     for (var j = 0; j < input1; j++) {
//       num[i][j] = input2 * i + input2 * j + 1;
//       str += num[i][j] + " ";
//     }
//     console.log(str);
//     str = "";
//   }
// }
// printNum3(4, 3);
// function printNum4(input) {
//   var num1 = new Array(input);
//   var num2 = new Array(input);
//   var str1 = '';
//   var str2 = '';
//   for (var i = 0; i < input; i++) {
//     num1[i] = new Array(input);
//     num2[i] = new Array(input);
//     if (i % 2 === 0) {
//       for (var j = 0; j < input; j++) {
//         num1[i][j] = input * i + j + 1;
//         str1 += num1[i][j] + ' ';
//       }
//       console.log(str1);
//       str1 = '';
//     } else {
//       for (var j = 0; j < input; j++) {
//         num2[i][j] = input * (i + 1) - j;
//         str2 += num2[i][j] + ' ';
//       }
//       console.log(str2);
//       str2 = '';
//     }
//   }
// }
// printNum4(5);
// function printNum5(input) {
//   for (var i = 0; i < input; i++) {
//     var num = [];
//     var str = "";
//     for (var j = 0; j < i + 1; j++) {
//       num.push(j + 1);
//       str += num[j] + " ";
//     }
//     console.log(str);
//   }
// }
// printNum5(5);
// function printNum6(input) {
//   var arr1 = new Array(input);
//   var arr2 = new Array(input);
//   var str = "";
//   for (var i = 0; i <= input; i++) {
//     arr1[i] = input - i;
//     arr2[i] = i;
//     str = arr1[i] + " " + arr2[i];
//     console.log(str);
//   }
// }
// printNum6(5);
function printNum7(input) {
  var i, j;
  for (var num = 1; num <= input * input; num++) {
    if(i === input - 1) {
      j++;
    }
  }
}
printNum7(4);