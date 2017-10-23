## 함수 구현
---
함수를 사용하지 않고 함수 구현해보기

> shift()

```
var a = [6, 2, 3, 4, 3];

function myShift(arr) {
  var num = arr[0];
  for (var i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }
  arr.length--;
  return num;
}
console.log(myShift(a));
```

> unshift()

```
var a = [6, 2, 3, 4, 3];

function myUnshift(arr, input) {
  for (var i = 0; i < arr.length; i++) {
    arr[arr.length - i] = arr[arr.length - i - 1];
  }
  arr[0] = input;
  return arr.length;
}
console.log(myUnshift(a, 5));
```

> pop()
```
function myPop(arr) {
  var b = arr[arr.length - 1];
  arr.length--;
  return b;
}
```
