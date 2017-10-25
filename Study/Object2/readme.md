# 객체
***

## 객체란 무엇인가?

상태(속성)와 행동(메소드)을 가진다

## 객체 지향 프로그래밍

* 유지보수가 쉬워진다

* 대형 프로그램을 짜기 쉬워진다

* 객체와 객체가 협력해서 일을 한다

* 객체는 일에 책임을 진다

* 객체는 객체에 메시지를 보낸다

* 객체는 자율적으로 일을 한다

## 객체 만들기
```JavaScript
var m1 = {
  name: "Honux",
  hp: 100,
  mp: 50,
  power: 10,
  attack: function(target) {
    target.hp -= this.power;
  }
  eat : function(target) {
    this.hp += target.energy;
    target.energy = 0;
  }
};

var c1 = {
   type: "Coffee",
   energy: 10
};

m1.attack(m1);
m1.eat(c1);
```

## this 키워드

함수(메소드) 안에서 사용시 주로 함수를 소유한 객체 객체 안에서 사용시 객체 자체를 가르킴

*주의!*

* this의 값을 바꿀 수는 없다.

* this = m2 (totally wrong!)

## 함수를 이용해서 생성자 만들기

같은 형식의 객체를 여러개 만들 때, 위의 객체를 만드는 방법으로는 매우 불편하다. 객체 생성마다 코드를 일일이 작성해야하기 때문. 따라서 생성자를 이용한다

```JavaScript
function Human(name, hp, mp, power) {   //생성자 이름 첫글자 대문자
  this.name = name; //m1.name = name;
  this.hp = hp;
  this.mp = mp;
  this.power = power;
  this.attack = function(target) {
    target.hp -= this.power;
  };
  this.show = function() {
    console.log("%s %d %d %d",
      this.name, this.hp, this.mp, this.power);
  };
} //no semicolon!

var m1 = new Human("Honux", 100, 20, 10);
var m2 = new Human("Crong", 999, 1, 99);
```

위와 같이 객체에 공통적으로 포함되는 속성과 method를 적어도 작동하지만, method는 prototype을 이용하여 따로 분리한다. 메모리를 덜 차지하기 위해

```javascript
function Human(name, hp, mp, power) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.power = power;
}   // no semicolon !

Human.prototype.attack = function(target) {
  target.hp -= this.power;
}
Human.prototype.eat = function(target) {
  this.hp += target.energy;
}
Human.prototype.show = function(target) {
  console.log("%s, ")
}

var m1 = new Human("Will", 10, 20, 30);
var m2 = new Human("Honux", 100, 200, 300);
```

**기본 생성자들**

var a = new String(); //a = "";

var b = new Object(); //b = {};

var c = new Array(); //c = [];

생성자를 이용해 생성된 객체는 prototype 속성을 갖는다

## 객체 맴버에 접근하는 방법

a.name;

a["name"];

## 모든 객체의 키 값 가져오기

Object.keys(m1);

배열로 return한다

## 연습문제 1

Human 객체를 하나 만들고 모든 키와 값을 출력해 봅시다.

Object.keys(m1) 사용할 것

```javascript
function Human(name, hp, mp, power) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.power = power;
}

var h1 = new Human("Will", 10, 20, 30);
var keysArr = Object.keys(h1);

for(var i = 0; i < keysArr.length; i++) {
  var keyName = keysArr[i];
  console.log(keyName + " : " + h1[keyName]);
  //h1.keyName못쓴다 왜냐하면 keyName이 이미 string이기 때문. 따라서 h1["keyName"]도 못쓴다
}
```

## 연습문제 2

객체를 하나 만들고 모든 키와 값을 표시하는 함수를 만들어 보기
```javascript
function Human(name, hp, mp, power) {
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.power = power;
  this.attack = function(target) {
    console.log(this.power);
  }
}
var h1 = new Human("Will", 10, 20, 30);

function showKeys(target) {
  var keysArr = Object.keys(target);
  for(var i = 0; i < keysArr.length; i++) {
    var keyName = keysArr[i];
     console.log(keyName + " : " + target[keyName]);
  }
}

showKeys(m2);
```

## 배열과 객체

* 객체 안에 속성값이 배열이 될 수 있음

* 객체의 배열도 가능

* 객체와 참조

* 객체도 마찬가지로 참조 변수에 할당됨
