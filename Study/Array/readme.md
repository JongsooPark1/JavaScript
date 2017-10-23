## Array
---

> method


```JavaScript
a = [10, 20, 30, 40, 50];
```

**push()**

맨 뒤에 원소를 추가한다. 배열 a는 원소 추가된 상태
```JavaScript
a.push(60);
```
* return 값 : 6

* a의 상태 : a = [10, 20, 30, 40, 50, 60]

**pop()**

맨 뒤의 원소 출력한다. 배열 a는 마지막 원소 제거된 상태
```JavaScript
a.pop();

```
* return 값 : 50

* a의 상태 : a = [10, 20, 30, 40]

**shift()**

맨 앞의 원소를 출력한다. 배열 a는 첫번째 원소 제거된 상태
```JavaScript
a.shift();
```
* return 값 : 10

* a의 상태 : a = [20, 30, 40, 50]

**unshift()**

맨 앞에 원소를 추가한다. 배열 a는 원소 추가된 상태
```JavaScript
a.unshift(1);
```
* return 값 : 6

* a의 상태 : a = [1, 10 ,20, 30, 40, 50]

**concat()**

맨 뒤부터 원소 추가한다
```JavaScript
a.concat(1, 2, 3);
```
* return 값 : a = [10, 20, 30, 40, 50, 1, 2, 3]

* a의 상태 : a = [10, 20, 30, 40, 50]

*변하지 않는다 !!!*

**join()**

배열을 문자열로 바꿔준다

```JavaScript
a.join();
```
* return 값 : 10,20,30,40,50

* a의 상태 : a = [10, 20, 30, 40, 50]

* 응용

```JavaScript
a.join("aaa");
```
return 값 : 10aaa20aaa30aaa40aaa50

**indexOf()**

원소의 위치를 찾는다(앞에서부터, 중복된 원소 있을 경우 가장 앞의 index return)
```JavaScript
a.indexOf(10);
```

* return 값 : 0 (찾고자 하는 원소가 배열내에 없을 경우 -1 return한다)

* a의 상태 : a = [10, 20, 30, 40, 50]

**lastIndexOf()**
원소의 위치를 찾는다(뒤에서부터, 중복된 원소 있을 경우 가장 뒤의 index return)
```JavaScript
a.lastIndexOf(10);
```

* return 값 : 0 (찾고자 하는 원소가 배열내에 없을 경우 -1 return한다)

* a의 상태 : a = [10, 20, 30, 40, 50]

**slice()**

괄호 안의 start index부터 end index **전** 까지 배열의 값을 지정해서 가져온다

end index는 적지 않아도 무관

음수를 적을 경우) -1은 맨 마지막 원소(50), -2는 그 다음 원소(40)를 가르킨다

기존의 값 안바뀐다. string에도 적용 가능
```JavaScript
a.slice(1, 3);
```
* return 값 : a = [20, 30, 40]

* a의 상태 : a = [10, 20, 30, 40, 50]

**splice()**

index부터 시작해서 몇 개의 원소를 return한다. 마지막 "A"는 기존의 배열에서 제거된 부분에 추가된다. 안적어도 무관

기존의 값 바뀐다. string에는 적용 불가능

```JavaScript
a.splice(1, 3, "A");
```

* return 값 : a = [20, 30, 40]

* a의 상태 : a = [10, "A", 50]

**sort()**

```JavaScript
a = ["a", "k", "d", "z"];
```

문자열 배열에서만 사용할 것 !

순서대로(오름차순) 정렬한다

```JavaScript
a.sort();
```

* return 값 : a = ["a", "d", "k", "z"]

* a의 상태 (변한다) : a = ["a", "d", "k", "z"]

**reverse()**

```JavaScript
a = ["a", "k", "d", "z"];
```

문자열 배열에서만 사용할 것 !

역순으로(내림차순) 정렬한다

```JavaScript
a.reverse();
```
* return 값 : a = ["z", "k", "d", "z"]

* a의 상태 (변한다) : a = ["z", "k", "d", "z"]

**forEach()**
```JavaScript
```

**map()**
```JavaScript
```

**reduce()**
```JavaScript
```
