# 함수

## 함수의 정의
  * 함수의 생성방법
    - 함수선언문 : `function '함수명' ('매개변수') {'함수바디'}`
    - 함수표현식 : `var 함수명 = function('매개변수') {'함수바디'};`
    - Function() 생성자함수 : `var 함수명 = new Function(매개변수,함수바디)`
  
  * 일반적으로 함수선언문과 함수표현식이 주로 사용되며 이는 리터럴방식으로 함수를 생성한 것이다.

  * 함수표현식의 경우 변수에 무명함수를 리터럴방식으로 생성한 방식이다.

  * 함수표현식에 기명함수를 할당하면 외부에서 함수명으로 호출은 불가능하지만, 이는 함수 내부에서 함수의 이름으로 재귀호출이 가능하다.
  ```
  // 함수표현식을 활용한 재귀호출 처리 예제(팩토리얼 구하기)
  var factorialVar = function factorial(n){
  if(n <=1){
    return 1
  }
  return n * factorial(n-1);
}

console.log(factorialVar(3))
  ```

  * Function() 생성자함수의 경우 잘 사용되지 않지만 함수선언문과 함수표현식은 결국 Function()생성자함수로 만들어 진 것이고 타인의 코드를 읽기 위해서는 알아둘 필요가 있다.

## 호이스팅과 함수
  * 호이스팅이란 끌어올린다는 뜻으로 자바스크립트에서는 변수 및 함수의 선언문을 해당 Scope의 맨 위로 옮기는 것을 말한다.
  
  * 자바스크립트에서 함수호이스팅의 경우 함수의 선언 / 초기화 / 할당이 동시에 이루어지고, 변수호이스팅은 변수의 생성과 초기화 작업이 분리되어 진행되며 값은 undifine로 초기화되고 실제값의 할당은 할당문에서 이루어 진다.
  
  * 따라서 때문에 함수선언문으로 함수를 정의한 경우 선언위치와 상관없이 어디서나 함수를 호출 할 수 있다.

  * 반면에 함수표현식의 경우 변수호이스팅이 되기 때문에 할당문 이후에서 함수를 호출 할 수 있다.


## 함수의 활용
  * 함수는 일급객체이다
    - 일급객체란? (값으로 할당할 수 있고 함수의 파라미터로 전달할 수 있으며 결과값으로 반환이 가능한 조건을 만족하는 객체)
  * 즉 함수는 객체로서 값으로 활용할 수 있다. 

## 함수객체의 프로퍼티
  * arguments : 함수 호출 시 전달된 인수(argument)들의 정보를 담고있는 유사배열객체
  * length  : 함수 정의 시 작성된 매개변수 갯수
  * arguments와 length이 다른 경우 : length가 큰 경우 undefines로 할당되거나 반대의 경우 초과된 인수는 무시 함
  * name : 함수명을 나타내며 익명함수의 경우 빈문자열
  * '__ proto __ : 자신의 프로토타입 [[prototype]]로 표현되기도 함
  * prototype : 함수객체만이 가지고 있는 프로퍼티 (프로토타입체이닝 학습)

## 함수의 형태
  * 콜백함수 : 이벤트나 특정시점에 호출되는 함수
  ```
    //이벤트에 의한 콜백함수 (클릭이벤트 발생시 함수가 호출)
    addEventListener('click', function() {});
    //특정시점에 호출되는 함수
    setTimeout(function () {}, 1000);
  ```
  * 즉시실행함수 : 함수를 정의함과 동시에 실행되는 함수
  ```(function(name){console.log(name)})('lee')```
  * 내부함수 : 함수내부에 선언된 함수 (내부함수에서는 부모함수의 변수에 접근이 가능함)


## 함수의 호출패턴에 따른 this
  * 매서드 호출(method invocation) : 해당메서드를 호출한 객체로 바인딩
  ```
  var person = {
  name : 'lee',
  hi : function() {
    console.log(this === person); // 결과값 : true;
    console.log('hi, ' + this.name);  // 결과값 : "hi, lee"
  }
};
  ```
  * 함수호출 시 : this는 전역객체에 바인딩 (브라우저의 경우 window객체에 바인딩) 
  * 생성자함수 : 빈 객체를 생성하여 this를 바인딩
  ```
  var Person = function(name) {
  this.name = name;
  this.hi = function() {
    console.log('hi, ' + this.name); 
  };
};

var me = new Person('lee');
console.log(me); // 결과값 : Person {name: "lee", hi: ƒ}
me.hi();         // 결과값 : "hi, lee"
  ```


* call()과 apply()를 이용하여 this를 바인딩할 수 있음
  * 두 매서드는 첫번째 인자로 this를 바인딩함.
  * call()은 값을 인자로 넘기고 apply()는 배열을 인자로 넘긴다.
```
//call()
var person = { name: 'lee' };  
function hiName(string) {  
  console.log(string + this.name);
}

hiName.call(person, 'Hello ');  // 결과값 :  "Hello lee"

function returnNumber(number) {  
  console.log(this)
}

returnNumber.call(2);  // 결과값 : 2

//apply()
var person = { name: 'lee' };  
function hiName(string, number) {  
  console.log(this === person);
  console.log(string + this.name);
  console.log('age : ' + number + '세')
}

hiName.apply(person, ['hi',20]);  // 결과값 : "hilee"  "age : 20세"

```