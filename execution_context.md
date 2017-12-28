# 실행컨텍스트 (Execution Context)

## 실행컨텍스트의 정의와 배경지식
  - 간단히 정의하면 실행가능한 자바스크립트 코드가 실행되는 환경을 의미한다.
  - 자바스크립트에서 실행가능한 코드는 전역코드, Eval코드, 함수코드가 있다.
  - 실행컨텍스트는 스택(LIFO:Last In First Out)를 가진다.
  - 실행컨텍스트가 만들어지는 과정은 아래와 같다.
    1. 실행컨텍스트 스택 생성
    2. 전역컨텍스트 생성
    3. 새로운 함수가 호출되는 경우 : 새로운 실행컨텍스트가 생성
      - 전역실행컨택스트의 실행이 완료될때까지 반복되어 스택의 형태로 쌓인다.

## 실행컨텍스트의 생성과정
  * 활성객체의 생성
    - 이과정에서는 매개변수와 사용자가 정의한 변수 및 객체가 저장하고 자바스크립트엔진이 접근할 수 있는 상태로 유지한다.
    - 활성객체 내부에 arguments 객체를 생성한다.

  * 스코프 정보의 생성
    - 유효범위를 나타내는 스코프를 생성하며 연결리스트의 형태로 만들어진다.
    - 만약 내부함수가 실행될 때 참조해야할 변수가 있다면 현재의 컨택스트에서 검색을 하고 만약 찾지 못하는 경우에 상위 실행컨텍스트에서 찾게되며 전역객체까지 검색하게 되는데 이를 스코프체인이라고 한다.
    - 스코프체인은 [[scope]]프로퍼티로 참조할 수 있다.

  * 변수의 생성 및 this 바인딩
    -this는 함수호출패턴에따라 바인딩 되며 참조하는 객체가 없다면 전역객체를 참조한다.

  * 코드의 실행

  <!-- # 쉽게읽기

  전역변수와 함수로만 이루어진 자바스크립트 코드가 있다고 가정해보자.
  코드가 실행되기전에 자바스크립트 엔진은 실행컨텍스트 스택을 만든다.
  전역컨텍스트를 만든다 (호이스팅이 일어난다)
  코드를 순차적으로 읽어가면서 함수를 만나게 되면 실행컨텍스트를 생성한다.
  생성된 실행컨택스트는 전역실행컨택스트 위에 쌓인다 (스택)
  이 과정에서는 매개변수와 사용자가 정의한 변수, 객체가 저장된다.
  그리고 전역변수에 접근할 수 있도록 연결된 리스트형태의 스코프체인을 만든다. 
  다음으로 함수의 호출패턴에 따라 this를 바인딩하고 코드를 실행한다. -->
