var input = parseInt(prompt('숫자를 입력하세요'));
function printStar1(arg) {
  var arr = [];
  var str = "";
  for (var i = 0; i < arg; i++) {
    arr.push("*");
    str += arr[i];
    console.log(str);
  }
}
printStar1(input);
function printStar2(arg) {
  var str2 = "";
  for (var i = 0; i < arg; i++) {
    var str1 = "";
    for(var j = 0; j < arg - (i + 1); j++) {
      str1 += " ";
    }
    str2 += "*"
    console.log(str1 + str2);
  }
}
printStar2(input);
function printStar3(arg) {
  for (var i = 0; i < arg; i++) {
    var str1 = "";
    var str2 = "";
    for (var j = 0; j < arg - (i + 1); j++) {
      str1 += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      str2 += "*";
    }
    console.log(str1 + str2);
  }
}
printStar3(input);
function printStar4(arg) {
  for (var i = 0; i < arg; i++) {
    var str1 = "";
    var str2 = "";
    for (var j = 0; j < arg - (i + 1); j++) {
      str1 += " ";
    }
    for (var k = 0; k < 2 * i + 1; k++) {
      str2 += "*";
    }
    console.log(str1 + str2);
  }
  for (var  i = 0; i < arg - 1; i ++) {
    var str1 = "";
    var str2 = "";
    for (var j = 0; j < i + 1; j++) {
      str1 += " ";
    }
    for (var k = 0; k < (2 * (arg - 1) - 1) - (2 * i); k++) {
      str2 += "*";
    }
    console.log(str1 + str2);
  }
}
printStar4(input);
function printStar5(arg) {
  var str1 = "";
  var str2 = "";
  if (arg === 1;) {
    console.log("*");
  }
  for (var i = 0; i < arg; i++) {
    str1 += "*";
  }
  console.log(str1);
  for (var i = 0; i < arg - 2; i++) {
    str2 += " ";
  }
  str2 = "*" + str2 + "*";
  for (var i = 0; i < arg - 2; i++) {
    console.log(str2);
  }
  console.log(str1);
}
printStar5(input);
function printStar6(arg) {
  if (arg === 1) {
    console.log("*");
  }
  for (var i = 0; i < arg; i++) {
    var str1 = "";
    var str2 = "";
    for (var j = 0; j < arg - i - 1; j++) {
      str1 += " ";
    }
    str1 += "*";
    for (var k = 0; k < 2 * i - 1; k++) {
      str2 += " ";
    }
    str2 += "*";
    if (i === 0) {
      console.log(str1);
    } else {
      console.log(str1 + str2);
    }
  }
  for (var i = 0; i < arg - 1; i++) {
    var str1 = "";
    var str2 = "";
    for (var j = 0; j < i + 1; j++) {
      str1 += " ";
    }
    str1 += "*";
    for (var k = 0; k < (2 * (arg - 2) - 1) - (2 * i); k++) {
      str2 += " ";
    }
    str2 += "*";
    if (i !== arg - 2) {
      console.log(str1 + str2);
    } else {
      console.log(str1);
    }
  }
}
printStar6(input);
function printStar7(arg) {
  var str1 = "";
  for (var i = 0; i < 2 * arg + 1; i++) {
    str1 += "*";
  }
  console.log(str1);
  for (var i = 0; i < arg - 1; i++) {
    var str2 = "";
    for (var j = 0; j < i + 1; j++) {
      str2 += " ";
    }
    str2 += "*";
    var str3 = "";
    for (var k = 0; k < (arg * 2 + 1) - (2 * i + 4); k++) {
      str3 += " ";
    }
    str3 += "*";
    console.log(str2 + str3);
  }
  for (var i = 0; i < arg - 1; i++) {
    var str2 ="";
    for (var j = 0; j < arg - i - 1; j++) {
      str2 += " ";
    }
    str2 += "*";
    var str3 = "";
    for (var k = 0; k < 2 * i + 1; k++) {
      str3 += " ";
    }
    str3 += "*";
    console.log(str2 + str3);
  }
  console.log(str1);
}
printStar7(input);
