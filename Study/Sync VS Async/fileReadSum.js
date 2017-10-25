var fs = require("fs");
var data = fs.readFileSync("test1.txt", "utf8");
var a = data.split("\n");
var sum = 0;
for (var i = 0; i < a.length; i++) {
  var num = parseInt(a[i]);
  if (!!num) {
      sum += num;
  } else {
    console.log("잘못된 data 있습니다 !");
  }
}
console.log(sum);
