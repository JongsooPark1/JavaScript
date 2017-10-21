## and others
---

> interpreter and compiler

* interpreter

  code 한 줄 한 줄마다 바로 실행. 따라서 에러 나기 직전까지 실행한다

* compiler

  code 통째로 하나의 파일을 만들어 실행. 따라서 하나의 에러라도 있으면 실행되지 않는다



> 문자열 특징

 문자열은 immutable ! 따라서 값 자체를 바꿀 수 없다

* 일반 자료형

b의 값이 3에서 5로 변경된다

```
var b = 3;
var b = 5;
```

* 문자열

값이 바뀌지 않는다. 첫 번째와 두 번째 값을 저장할 떄마다 메모리의 일정 영역을 따로 차지하며, 이후에 garbage collector에 의해 쓰지 않는 data를 정리한다

```
var a = "Will";
var a = "Honux";
```

+ 보충

```
a = 5;
c= a;
// a의 값 : 5
// c의 값 : 5
a = 6;
// a의 값 : 6
// c의 값 : 5

var foo = function(a) {
	a++;
}
var x = 10;
foo(x);
// x의 값 : 10

///////////////////
var b = [1, 2, 3, 4];
var b2 = b;
// b2의 값 : [1, 2, 3, 4]
b2[0] = 10;
// b2의 값 : [10, 2, 3, 4]
// b의 값 : [10, 2, 3, 4]


a = [1, 2, 3];
var foo2 = function(arr) {
	a.push(4);
}
foo2(a);
// a의 값 : [1, 2, 3, 4]
```


> XOR, XNOR 진리표

![XOR](https://homepages.inf.ed.ac.uk/rbf/HIPR2/figs/ttabxor.gif)



> NaN

  not a number



> break;

  break문은 if문이 아니라 반복문을 빠져나오는 것



> %8.1f의 의미

  소수점이상 최소 6자리, 소수점 이하 1자리. 출력될 자리수를 최소 8자리(소수점포함)를 확보. 빈자리는 공백으로 채움(오른쪽 정렬)

  ex) var f = 1234.56789;

  1234.6 출력



> GIT

![git](https://github.com/JongsooPark1/JavaScript/blob/master/Study/and%20others/work6.png?raw=true)

* ls -al

  Read : 4

  Write : 2

  Execute : 1

* commit

  일종의 객체다. 나머진 전부 참조

  로컬 저장소에 저장. 폴더 내부에 (.git) 생성. 따라서 commit한 시점의 작업 내용으로 돌아갈 수 있다


* master에서 작업하지 말기. 완전히 테스트까지 끝낸 것만 master에서 merge

* rebase는 로컬에서만 한다
