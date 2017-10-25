var fs = require("fs");

var foo = function(err, data) {           // 3번
  if(err) {
    console.error("error 발생");
    console.error(err);
  } else {
    console.log(data);
  }
}

fs.readFile("test.txt", "utf8", foo);     // 1번
console.log("jajaja");                    // 2번
