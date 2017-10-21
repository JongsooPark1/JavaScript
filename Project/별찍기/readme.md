## 러시안룰렛
---
> code

```
alert("지금부터 러시안룰렛 게임을 시작하겠습니다");
var bulletNum = Math.ceil(Math.random() * 6);
console.log(bulletNum);
var name1 = prompt("첫번째로 방아쇠를 당기는 사람의 이름을 입력하세요");
var name2 = prompt("두번째로 방아쇠를 당기는 사람의 이름을 입력하세요");

for (var i = 1; i <= 6; i++) {
  if (i === bulletNum) {
    alert(i+"번째 방아쇠를 당기세요");
    if (i % 2 === 1) {
      alert(name1 + "님이 사망하였습니다 ㅠㅜ");
    } else {
      alert(name2 + "님이 사망하였습니다 ㅠㅜ");
    }
    break;
  }
  alert(i+"번째 방아쇠를 당기세요");
}
```
