## Function
---
> 함수 표현 방식


1. 선언적 함수
```
function functionName1(agr) {
  console.log(agr);
}

functionName1(1);
```
위의 code에서 agr은 매개변수이고, 1은 인자라고 한다


2. 익명 함수 - 1
```
var functionName2 = function(agr) {
  console.log(agr);
}

functionName2(2);
```


3. 익명 함수 - 2 (선언과 동시에 호출)
```
(function(agr) {
  console.log(agr);
})(3);
```


> return
* return은 결과를 반환하는 것 외에 함수를 중지시키는 역할도 한다
* 따라서 return 이후의 code는 무시된다
