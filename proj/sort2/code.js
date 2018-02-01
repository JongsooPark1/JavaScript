var a = [1, 0, -1, 0, 32, 15, 47, 9];
var b = ["a", "x", "d", "k", "k", "b"];
var c = [h3, h1, h2, h4, h5];
function Human(name, money) {
  this.name = name;
  this.money = money;
};
var h1 = new Human("will", 10);
var h2 = new Human("honux", 20);
var h3 = new Human("hun", 30);
var h4 = new Human("Jack", 40);
var h5 = new Human("Koo", 50);

// 라이브러리 사용
// 1. 숫자
function makeSort(arr) {
  arr.sort(function(a, b) {
  	return a - b;
  });
//   위 코드와 동일
//   arr.sort((a, b) => (a - b));
  return arr;
}

// 2. 문자는 그냥 sort로
arr.sort();

// 3. 객체
function makeSort2(arr) {
  arr.sort((a, b) => (b.money - a.money));
  return arr;
}

// sort
// 1. bubbleSort
function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 2. selectionSort
function selectionSort(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		var min = arr[i];
		var pos = i;
		for(var j = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j];
				pos = j;
			}
		}
		arr[pos] = arr[i];
		arr[i] = min;
	}
}

// 셔플
// honux shuffle
function shuffle(arr) {
	for(var i = 0; i < this.length * 5; i++) {
		var idx1 = Math.floor(Math.random() * this.length);
		var idx2 = Math.floor(Math.random() * this.length);
		var temp = this[idx1];
		this[idx1] = this[idx2];
		this[idx2] = temp;
	}
};

// will shuffle...overhead 발생
function shuffle(arr) {
  for (var i = 0; i < arr.length; i++) {
    var a = Math.floor((Math.random() * arr.length));
    var c = arr.splice(a, 1);
    arr.push(c[0]);
  }
  return arr;
}
// knuth shuffle...가장 효율적
function shuffle2(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    var idx1 = Math.floor(Math.random() * i);
    var temp = arr[idx1];
    arr[idx1] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
