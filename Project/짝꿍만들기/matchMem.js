function makeArray(numMem) {
  var arr = new Array(numMem);
  for (var i = 0; i < numMem; i++) {
    arr[i] = prompt("이름을 입력하세요");
  }
  return arr;
}

function shuffle(arr, numMem) {
  var n = 0;
  var randomName = 0;
  var element = ""
  var nameArr = new Array(numMem);
  for (var i = 0; i < numMem; i++) {
    n = Math.floor(Math.random() * (numMem - i));
    randomName = arr.splice(n, 1);
    element = randomName.join();
    nameArr[i] = element;
  }
  return nameArr;
}

function matchMem(arr, numMem) {
  if (numMem % 2 === 0) {
    for (var i = 0; i < arr.length - 1; i = i + 2) {
      console.log(arr[i] + ", " + arr[i + 1] + " 둘이 짝꿍");
    }
  } else {
    for (var i = 0; i < arr.length - 1; i = i + 2) {
      console.log(arr[i] + ", " + arr[i + 1] + " 둘이 짝꿍");
    }
    console.log(arr[arr.length - 1] + " 님은 왕따 ~~");
  }
}

var memArr = makeArray(7);
var shuffledArr = shuffle(memArr, 7);
matchMem(shuffledArr, 7);
