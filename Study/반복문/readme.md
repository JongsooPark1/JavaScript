## 반복문
---


### for ... in 문

배열엔 쓰지 않고 객체에 사용한다
아래 코드 for(var x in h)에서 x는 객체의 key를 나타내고, h는 객체를 나타낸다

```javascript
// 1. 객체의 키와 값 출력
var h = {name : "해나",
         status : "잠못잠",
         money : 99999,
         age : 23,
         pc : 5,
        //  hoho : "11",
         pet : ["에비츄", "스누피", "가필드"],
         work : function(money) {
           this.money += money;
         }
        };

var sum = 0;
var sum1 = 0;

// 2. 밸류 값이 숫자인 것만 더하기
for (var x in h) {
  console.log(x + " : " + h[x]);
  var a = parseInt(h[x]);   // 객체 h의 hoho key 같은 경우엔 안된다
  if(!!a) {
    sum += h[x];
  }
  if(typeof(h[x]) === "number") {
    sum1 += h[x];
  }
}
console.log(sum);
console.log(sum1);
```

### continue

아래에서 continue를 만나면 for의 i++(증감식)로 돌아가고, i < 5 인지 확인 한 뒤 for문 아래를 실행한다 !!!

```javascript
console.log("start");

for (var i = 0; i < 5; i++) {
  console.log("1 %d", i);
  if(i >= 3) {
    continue;
  }
  console.log("2 %d", i);
}
console.log("end");
```

* output

start

1 0

2 0

1 1

2 1

1 2

2 2

1 3

1 4

end
