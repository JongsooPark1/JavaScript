## Object
---

> 객체 생성 방법

1.
```JavaScript
var grades = {"Will": 10, "Honux": 6, "Jack": 80};
```




2.
```JavaScript
var grades = {};
grades["Will"] = 10;
grades["Honux"] = 6;
grades["Jack"] = 80;
```




3.
```JavaScript
var grades = new Object();
grades["Will"] = 10;
grades["Honux"] = 6;
grades["Jack"] = 80;
```

위의 code에서 "" 내부를 key, 숫자를 value라고 한다





> for in loop

```JavaScript
var grades = {"Will": 10, "Honux": 6, "Jack": 80};
for(key in grades) {
    console.log("key : "+key+" value : "+grades[key]);
}
```
* 객체뿐만 아니라 배열에서도 사용 가능




> 객체 지향 프로그래밍
* 서로 연관되어 있는 값과 기능을 하나의 그룹안에 넣어 사용하는 것
```JavaScript
var grades = {
    'list': {"Will": 10, "Honux": 6, "Jack": 80},
    'show' : function(){
        for(var name in this.list){
            console.log(name, this.list[name]);
        }
    }
};
grades.show();
```
위의 this는 this가 사용된 함수를 포함하는 객체를 의미한다
