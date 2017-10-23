a = [0, 2, 3, 0, 10, -1, -10, 40, 40, 37];

// function makeAcenArr(arr) {
//   var newArr = new Array(arr.length);
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = i + 1; j < arr.length - 1; j++) {
//       if(arr[i] < arr[j]) {
//         newArr.push(arr[i]);
//         arr.splice(arr.indexOf(arr[i]), 1);
//       }
//     }
//   }
//   console.log(arr);
// }

function makeAscenArr(arr) {
  var newArr = [];
  var maxNum = 0;
  var cnt = arr.length;
  for (var i = 0; i < cnt; i++) {
    maxNum = Math.min.apply(null, arr);
    newArr.push(maxNum);
    arr.splice(arr.indexOf(maxNum), 1);
  }
  console.log(newArr);
}

function makeDscenArr(arr) {
  var newArr = [];
  var maxNum = 0;
  var cnt = arr.length;
  for (var i = 0; i < cnt; i++) {
    maxNum = Math.max.apply(null, arr);
    newArr.push(maxNum);
    arr.splice(arr.indexOf(maxNum), 1);
  }
  console.log(newArr);
}

makeDscenArr(a);
