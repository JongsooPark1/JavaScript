## Hoisting
---

### What is hoisting ?

모든 변수선언은 호이스트 된다. 호이스트란, 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는 것을 의미한다

즉, 변수가 함수내에서 정의되었을 경우 선언이 함수의 최상위로, 함수 바깥에서 정의되었을 경우는 전역 컨텍스트의 최상위로 변경된다

```javascript

function showName() {
     console.log("First Name : " + name);
     var name = "Ford";
     console.log("Last Name : " + name);
}
showName();
// First Name : undefined
// Last Name : Ford
// First Name이 undefined인 이유는 지역변수 name이 호이스트 되었기 때문입니다.

```

위의 코드는 javascript 엔진에 의해 아래와 같이 해석된다

```javascript
function showName() {
     var name; // name 변수는 호이스트 되었습니다. 할당은 이후에 발생하기 때문에, 이 시점에 name의 값은 undefined 입니다.
     console.log("First name : " + name); // First Name : undefined
     name = "Ford"; // name에 값이 할당 되었습니다.
     console.log("Last Name : " + name); // Last Name : Ford
}
showName();
```

호이스트 되었을때, 함수 선언은 변수선언을 덮어 쓴다

```javascript
// 다음 두 변수와 함수는 myName으로 이름이 같습니다.
var myName; // string
function myName() {
     console.log("Rich");
}
// 함수 선언은 변수명을 덮어 씁니다.
console.log(typeof myName); // function
```

하지만, 변수에 값이 할당될 경우에는 반대로 변수가 함수선언을 덮어 쓴다

```javascript
var myName = "Richard";
function myName() {
     console.log("Rich");
}
console.log(typeof myName); //string
```
