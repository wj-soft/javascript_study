# 비동기 처리
 * 자바스크립트의 대부분의 요청은 비동기로 이루어지고 있다. (ajax, timer함수등)
 * 비동기란?
    - 요청에 대한 응답이 끝나기 전에 다른 요청을 수행하는 형태로 동작
    - 서버에 요청하고 데이터가 올때까지 기다리지 않고 다음요청을 계속수행한다.
    - 비동기처리는 기다리는 시간에 다른작업이 수행되기때문에 효율적이지만, 결과의 순서를 모르기 때문에 복잡하다.

# 비동기를 처리하는 방법

 1. 콜백함수
    - 콜백함수란 다른함수에 의해 호출되어 실행되는 함수다.
    - 순서를 보장하기 위해서는 비동기 함수의 처리 결과에 대한 처리는 비동기 함수의 콜백 함수내에서 처리해야 한다.
    - 함수가 일급객체인 특성을 활용한 것으로 함수 내부에서 하나의 순차적인 작업을 끝내기 위해 return을 콜백함수를 통해 알려주고 작업을 이어나간다.
    - 즉 함수를 정의할때 인자로 콜백함수를 정의하고 이 콜백함수를 통해 결과를 전달한다.
    - 하지만 코드가 복잡해지고 에러처리가 어렵다는 한계를 가지게 되는데 이에대한 대안으로 ES6에서는 promise가 등장했다

    - 간단한 node.js API를 통해 콜백함수가 어떻게 사용되는지 확인해 볼수 있다.
    ```
    ///세번째 매게변수로 callback으로 받아 처리한다.
    fs.open(path, flags[, mode], callback)

    fs.open('<directory>', 'a+', (err, fd) => {
});
    ```



 2. promise
    - 프로미스 객체는 상태정보를 가지고 있다.
    - 프로미스에 의해 반환되는 상태정보를 가지고 후속처리를 한다.
    - 사용예제
```
function foo(x) {

var promise = new Promise((resolve, reject) => {
  // 비동기 작업을 수행한다.

  if (/* 비동기 작업 수행 성공 */) {
    resolve('resolved!');
  }
  else { /* 비동기 작업 수행 실패 */
    reject(Error('rejected!'));
  }
});

return promise;

foo(x)
  .then( 
      //then 메소드는 두 개의 콜백 함수를 인자로 전달 받는다. 첫번째 함수는 성공(fulfilled) 시 호출되는 함수이고 두번째 함수는 실패(rejected) 시 호출된다.
  )

  // 예외 발생 시 호출된다.
  .catch(err => console.log(err));
```

* async / await 패턴
promise가 이행되기를 기다렸다가 결과에 따라 값을 리턴한다

```
function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function f1() {
  var x = await resolveAfter2Seconds(10);
  console.log(x); // 10
}
f1();
```

* 참조 링크
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise
https://developers.google.com/web/fundamentals/primers/promises

https://developers.google.com/web/fundamentals/primers/async-functions?hl=ko
https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await

3. Rx
* 옵저버블을 통해 데이터스트림을 구독하여 이에 반응하는 방식으로 비동기를 처리하는 방법
* 옵저버블이란 연속적인 데이터를 받아 데이터스트림을 만드는 객체로로 옵저버블을 생성, 변환, 필터, 에러처리를 할 수 있다.
* 옵저버는 옵저버블이 생성한 데이터스트림을 구독하고 응답에 따라 반응하게 되는형태로 비동기처리가 가능하기 때문에 이를 반응형 프로그래밍(Reactive Programming)이라고 부른다.
* augular에서 많이 쓰인다 (RxJS를 필수패키지로 선택)
* 옵저버블은 ES7 스펙으로 제안이 되어 있는 비동기 데이터를 처리하기 위한 표준이다.

```
//npm install rxjs  (node.js 예제)

var Rx = require('rxjs/Rx');

myArray = [1, 2, 3, 4, 5];
values = [];

const observable$ = Rx.Observable.from(myArray)
  .map(item => item * 2)
  .subscribe(
    //value에 데이터가 구독되고 이를 처리한다
    value => values.push(value),
    //에러가 발생된 경우
    error => console.log(error),
    //완료된 경우
    () => console.log('Streaming finished')
  )
console.log(values)   [2,4,6,8,10]

```

* 참조링크
http://reactivex.io/
https://xgrommx.github.io/rx-book/why_rx.html


