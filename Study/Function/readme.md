## Function
---
* 줄 수가 지나치게 길어지면 함수로 빼자 (10줄 정도)
* 인덴트가 지나치게 깊어져도 함수로 빼자
* 함수는 반드시 한 가지 일만 하도록 하자


### 구현

1. 선언적 함수

```JavaScript
function functionName1(agr) {
  console.log(agr);
}

functionName1(1);
```

2. 익명 함수 - 1

```JavaScript
var functionName2 = function(agr) {
  console.log(agr);
}

functionName2(2);
```

3. 익명 함수 - 2 (선언과 동시에 호출)

```JavaScript
(function(agr) {
  console.log(agr);
})(3);
```

### return

return은 함수를 종료하는데 사용할 수 있다. 마치 반복문에서 break처럼

따라서 return문 이후의 code는 무시된다
```javascript
var test1 = function(text) {
  if (text === "exit") {
    return;
  }
  console.log("이게 보여요?");
}

test1("hello");
test1("exit");

```
### call by value

되도록 전역 변수는 사용하지 않는다. 아래 두 코드 비교해보고 output이 다르다는 것을 확인해보자
```javascript
var n = 10;
function foo1(n) {  //함수 내의 n은 parameter로 정의된다. 전역변수 n과 다르다
  n = n * 2;
}
console.log(n);

// output : 10
```
```javascript
var a = 11;
function foo2() { //함수 내의 a는 전역변수이다
  a = a * 2;
}
foo2();
console.log(a);

// output : 22
```

### swap
js에서는 아래 코드로 swap 불가능하다. 참조를 사용하는 객체나 배열을 활용하면 구현은 가능하지만, 아래 코드만으로는 절대 불가능 ! C언어에서는 가능
```javascript
var a = 5;
var b = 3;
consoole.log(a, b); // 5 3
mySwap(a, b);
consoole.log(a, b); // 3 5
```

### parameter, argument

* parameter : 함수 선언할 때, 괄호 안에 input 선언값을 parameter(매개변수)라고 한다

* argument : 함수 사용할 때, 괄호 안에 실제 input 값을 argument(인자)라고 한다

### signature (+ default)

함수 이름, parameter type과 개수, return type으로 시그니쳐(함수 틀)를 정의한다

parameter로 default값 설정할 수 있다
```javascript
function printGugu(n = 2) {
  for(var i = 1; i <= 9; i++) {
    console.log(n + " x " + i + " = " + n * i);
  }
}
```

### callback

형태

1.

```javascript
var calc = function(a, b, fn) {
    return fn(a, b);
}

var mysum(n1, n2) {
    return n1 + n2;
}

var x = cal(5, 3, mysum);
```

2.

```javascript
x = cal(10, 20, function(n1, n2) {
    return n1 * n2;
});
```

3. arrow 활용

```javascript
x = cal(15, 20, (a, b) => (a - b));
```
