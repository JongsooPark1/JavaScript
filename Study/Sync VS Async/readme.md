## Sync(동기) VS ASync(비동기)
---
### JS 파일 만들고 터미널로 실행

입력 데이터가 담긴 파일(.txt)을 만들고, code가 담겨 있는 파일(.js)을 만들고 하나의 폴더에 둔다. 그리고 터미널을 이용해 파일(.js)을 실행한다

터미널 명령어 : node 파일이름.js

### Sync

하나의 작업이 완료될 때까지, 다른 일을 하지 못한다

ex) CPU, java, C

입력 데이터가 담긴 파일에 있는 수를 모두 더하는 프로그램 만들기

```JavaScript
var fs = require("fs");
var data = fs.readFileSync("test1.txt", "utf8");
var a = data.split("\n");
var sum = 0;
for (var i = 0; i < a.length; i++) {
  var num = parseInt(a[i]);
  if (!!num) {    // num 데이터가 숫자일때만 sum할 수 있도록 예외 처리
      sum += num;
  } else {
    console.log("잘못된 data 있습니다 !");
  }
}
console.log(sum);
```

* test.txt 파일

1

4

5

d

3

a

4



### ASync

하나의 작업이 완료 되지 않아도 다른 일을 할 수 있다

ex) JavaScript

```JavaScript
var fs = require("fs");

var foo = function(err, data) {           // 3번
  if(err) {
    console.error("error 발생");
    console.error(err);
  } else {
    console.log(data);
  }
}

fs.readFile("test.txt", "utf8", foo);     // 2번, callback함수 활용
console.log("jajaja");                    // 1번

```

* test.txt 파일

Hello

나는 텍스트 파일입니다

하하하하

호호호호호

후후후후

* output

jajaja

Hello

나는 텍스트 파일입니다

하하하하

호호호호호

후후후후

---
 callback에 의해 작업이 지연되어 가장 마지막 작업인 jajaja출력이 가장 먼저 진행되고, 이후 txt파일을 읽고, 마지막으로 foo 함수를 실행하였다


### callback

JavaScript에서는 함수도 객체이기 때문에 파라미터로 넘길 수 있고, 넘겨받은 함수를 언제 실행할지 결정할 수도 있다

따라서, 모든 명령의 실행을 마친 후에 넘겨받은 함수객체를 실행시킬 수도 있는데 이것을 바로 Callback이라고 한다


### Block VS Non-Block

* Bolck

오래 걸려도 무조건 작업 실행한다

* Non-Block

작업 시간이 오래 걸리면 진행할지 하지말지 결정할 수 있다

### Sync, ASync, Block, Non-Block 차이 (보충 자료, 나중에 읽어보기)

https://slipp.net/questions/367

**blocking vs non-blocking**

* 애플리케이션 실행 시 운영체제 대기 큐에 들어가면서 요청에 대한 system call이 완료된 후에 응답을 보낼 경우 blocking

* 애플리케이션 실행 시 운영체제 대기 큐에 들어가지 않고, 실행 여부와 관계없이 바로 응답을 보낼 경우 non-blocking

**non-blocking vs asynchronous**

* system call이 반환될 때 실행된 결과와 함께 반환될 경우 non-blocking

* system call이 반횐될 때 실행된 결과와 함께 반환되지 않는 경우 asynchronous

* asynchronous는 요청에 대해 처리 완료의 여부와 관계없이 바로 응답한다. 이후 운영체제에서 응답할 준비가 완료되는 시점(예를 들어 네트워크로부터 데이터를 받는 요청의 경우 데이터가 준비되는 경우)에 응답한다.

* non-blocking은 요청에 대해 바로 응답할 수 있는 경우 응답을 하고, 바로 응답하기 힘든 경우 에러를 반환한다. 에러를 받을 경우 데이터를 정상적으로 받을 때까지 계속해서 요청을 다시 보낸다. 우리들이 흔히 이야기하는 polling 방식의 구조를 생각하면 된다. 이와 관련해 Blocking / Non-Blocking 글의 Non-blocking I/O Model 그림을 보면 좀 더 명확하게 이해할 수 있다.

* Blocking / Non-Blocking 글을 보면 asynchronous에 대해 다음과 같이 설명하고 있다.

  이와 반대로 비동기형 통지모델은 일단 커널에게 I/O작업을 맡기면 커널의 작업 진행사항에 대해서 프로세스가 인지할 필요가 없는 상황을 말한다. 유저의 프로세스가 I/O 동기화를 신경쓸 필요가 없기에 비동기형이라고 부를 수 있다. 따라서 비동기형 통지모델에서 Notify의 적극적인 주체는 커널이 되며, 유저 프로세스는 수동적인 입장에서 자신이 할일을 하다가 통지가 오면 그때 I/O 처리를 하게 된다.

**synchronous vs asynchronous**

* system call의 완료를 기다리면 synchronous

* system call의 완료를 기다리지 않으면 asynchronous

**synchronous vs blocking**

* 시스템의 반환을 기다리는 동안 대기 큐에 머무는 것이 필수가 아니면 synchronous

* 시스템의 반환을 기다리는 동안 대기 큐에 머무는 것이 필수이면 blocking
