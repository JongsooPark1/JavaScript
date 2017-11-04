## WWW와 HTML
---

### WWW의 3요소

![웹](http://cfile8.uf.tistory.com/image/2678CA44552E9349021EB0)

웹(Web)은 전 세계에 흩어져 있는 정보 자원을 연결하는 네트워크(World Wide Web)을 말합니다. 이 네트워크는 컴퓨터와 인터넷을 이용하여 접속할 수 있고 거미줄(web)처럼 복잡하게 얽혀져 있습니다. 사람들이 웹을 통해 정보자원에 접근하여 이용할 수 있는 것은 다음과 같은 메커니즘을 갖고 있기 때문인데 이것을 웹의 3대 요소라고 부릅니다

* URI : 정보자원의 위치를 표시하기 위한 표기법
* HTTP : 위치 표시가 있는 정보자원에 접근하기 위한 통신 규약
* HTML : 정보자원과 정보자원 사이를 오가기 위한 하이퍼텍스트



### DOM (Document Object Model)

* 문서를 객체를 이용해서 트리 구조로 표현함
* 표준: W3CDOM
* 구현체: Gecko, Webkit 등

### 엘리먼트 (Element)

* 여는 태그와 닫는 태그로 이루어짐
* 태그 사이에 콘텐츠를 가짐
* 태그 안에 속성과 속성의 값을 가짐
* 단일 태그에 콘텐츠가 없을 경우 <tag /> 처럼 표현하는게 원칙인데, 그냥 여는 태그만 가질 수도 있다. (img, br)

### 속성(Attributes)
```html
<a href="http://codesquad.kr" title="코드스쿼드">
```
href와 title은 속성, "" 내부 내용은 속성의 값을 가르킨다

### html5
```html
<!DOCTYPE html>
<html>
<title>HTML Tutorial</title>
<head>
  <meta charset="utf-8">
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>
```

### 블록 엘리먼트

p, h1, div 처럼 줄이 바뀌는 엘리먼트

### 인라인 엘리먼트

span, img, input, button, a 처럼 줄바뀜이 없는 엘리먼트

### HTML에 JS 포함하기
```html
<!DOCTYPE html>
<meta charset="UTF-8">
<html>
<title>HTML Tutorial</ttle>
<head>
</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

<script src="./ex2.js"></script>
</body>
</html>
```
ex2.js
```javascript
var msg = "Hello";
alert(msg);
```

### HTML 객체

HTML 문서도 객체로 간주된다.

* window: 최상위 객체
* document: dom의 최상위 객체
```javascript
var list = document.getElementsByTagName('h1');
list[0].innerHTML;
list[0].innerHTML = "Hello";
var list = document.getElementsById('main');
main.innerHTML = "Hello";
```

### 더 공부하기

HTML : https://www.w3schools.com/html/

CSS : https://www.w3schools.com/css/default.asp

bootstrap : https://www.w3schools.com/bootstrap/default.asp
