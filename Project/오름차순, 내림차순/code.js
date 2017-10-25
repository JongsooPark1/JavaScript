a = [7, 10, 1, -2, 30, 0, 0];


function myMax(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] > arr[i + 1]) {
      arr[i + 1] =arr[i];
    }
  }
  var element = arr.pop();
  console.log(element);
}

function myMin(arr) {
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] < arr[i + 1]) {
      arr[i + 1] = arr[i];
    }
  }
  var element = arr.pop(); 
  console.log(element);
}

function mySwap(arr, index1, index2) {
  var temp = 0;
  temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function descenArr(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if(arr[j] < arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

function ascenArr(arr) {
  var temp = 0;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - i; j++) {
      if(arr[arr.length - 2 - j] > arr[arr.length - 1 - j]) {
        temp = arr[arr.length - 1 - j]
        arr[arr.length - 1 - j] = arr[arr.length - 2 - j];
        arr[arr.length - 2 - j] = temp;
      }
    }
  }
  console.log(arr);
}

function makeArrWithSort(arr) {
  arr.sort(function(a, b) {
  	return a - b;
  });
  console.log("After sort1: ",arr);   // 오름 차순
  arr.sort(function(a, b) {
  	return b - a;
  });
  console.log("After sort2: ",arr);   // 내림 차순
}
