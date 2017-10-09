# Variable & Data Type
* 변수 (Variable)
    * 개념
		* 값(value)은 메모리에 할당되고 메모리상의 주로를 가지게 된다.
		* 변수란 메모리상의 주소에 접근하기 위해 쉬운용어로 지정한 식별자이다.다
    * 자바스크립트 변수의 특징
        * 동적타이핑언어(Dynamic Typing) - 자동으로 자료형이 결정 됨 (Type Inference)
        * 7가지 자료형(Data Type)
            * 기본자료형(Primitive data type) : Boolean, null, underfined, Number, String, Symbol
            * 객체형(Object type) : Object 
        * 변수의 중복선언이 가능함 (문법적으로 허용되지만 사용하지 않는 것이 좋다)
        * 변수호이스팅(Variable Hoisting) : 코드 실행전에 변수의 선언문을(선언단계 및 초기화 단계) 맨위로 올리는 현상
	* 문제점
		* 함수내부에 선언된 변수를 제외하면 전역변수로 지정이 되어 side effect가 발생할 수 있다.
		* ES6에서는 let과 const 키워드를 도입하며 단점을 보완하였음

* 데이터 타입 (Data Type)
    * 기본자료형 (Primitive Data Type)
        * Boolean : true와 false의 두가지 값을 가지는 논리적인 요소
        * null : 변수에 값이 없음을 명시 (typeof로 확인 시 object로 표시되는 설계상 오류가 있음)
        * undefined : 값이 할당되지 않은 변수
        * Number : 숫자 (정수, 실수)
            * +/- Infinity
            * NaN (not - a number)
        * String : 문자열 (작은따움표 또는 큰따움표에 텍스트를 넣어 생성함)
        * Symbol : 변경불가능한 기본자료형 (ES6에 새롭게 추가)
    * 객체형 (Object type, 참조형)
        * 데이터와 그 데이터에 관련된 동작을 모두포함할 수 있음
        * 프로퍼티와 매소드를 모두 포함할 수있는 독립적인 주체
        * 기본자료형을 제외한 나머지 값들은 모두 객체

# 연산자 (Operators)
* 정의 : 하나 또는 그 이상의 값을 하나로 만들때 사용하는 기호
    * 연산자의 종류
        1. 산술연산자 (Arithmetic Operators)  : 덧셈, 뻴셈, 곱셈, 나눗셈 등 일반적인 산술연산
        2. 대입연산자 (Assignment Operators)  : = , += , -=
        3. 비교연산자 (Comparison Operators) : 값을 비교하여 Boolean으로 반환 (<, >, =>, =<, ===, !==, ?:삼항연산자)
        4. 논리연산자 (Logical Operators) : Boolean 값과 함께 사용하여 Boolean 값을반환 (&& || !)
        5. 단축평가 (Short-Circuit Evaluation)
        6. 타입연산자 (Type Operators) : 데이터타입을 문자열로 반환
        7. !! : 피연산자를 Bolean 값으로 반환

# 제어문 (Control flow statement)
* 정의 : 조건에 따른 명령실행이나 반복실행이 필요할 때 사용되는 구문
    * 제어문의 종류
        1. 블록구문 (Block statement)
            * 함수, 객체리터럴, 흐름제어구문에 사용됨 (중괄호로 표기)
        2. 조건문 (Conditional statement)
            * 정의 : 조건식이 true 인지 false인지에 따라 달리 실행되는 구문들의 집합 (if, switch)
        3. 반복문 (Loop)
            * 정의 : 조건식이 false일떄가지 반복실행하는 구문 (for, while, do while)


# 객체(Object)
* 정의 : 데이터와 그 데이터에 관련되는 동작(절차, 방법, 기능)을 모두 포함할 수 있는 개념적 존재 (프로퍼티와 매서드를 포함하는 독립적 주체)
	* 프로퍼티(Property) : 이름(name)과 값(key)으로 구성된 컨테이너
	* 메소드(Method) : 함수에 포함되는 개념으로 객체에 제한되어있는 함수를 정의
* javascript에서 기본자료형을 제외한 모든 자료형은 객체이다 (ex 배열, 함수, 정규표현식 등)
* 객체의 생성방법
	1. 객체리터럴
		* 중괄호를 사용하여 객체를 생성
		* object 생성자 함수의 축약된 형태 (자바스크립트 엔진은 객체 리터럴을 object() 생성자 함수로 해석)
		* `var 객체명 = {이름(name):값(value)}`
	2. object 생성자 함수
		* object생성자함수로 빈 객체를 만들고 이후에 프로퍼티와 매소드를 추가함
		* `var 객체명 = new Object();` : 빈객체의 생성
		* `객체명.이름 = '값'` : 프로퍼티의 추가
	3. 생성자함수
		* 객체를 생성하기 위한 템플릿을 만들고 동일한 객체 여러개를 간편하개 생성하는 방식
		* 생성자함수의 이름은 일반함수와 구분하기 위해 첫글자를 대문자로 작성
		* 생성자함수에서 선언된 변수는 외부에서 접근불가
		* this가 붙은 프로퍼티는 생성자 함수로 생성될 인스턴스(instance)로 외부에서 참조가 가능함
		* `function Person(name, gender){
        this.name = name;
        this.gender = gender;
        }` : name과 gender를 프로퍼티로 갖는 생성자 함수 Person을 생성
        * `var person1 = new Person('Lee','male');` name:Lee, gender:male을 프로퍼티로 갖는 person1 객체를 생성



* 객체의 접근방법
	1. 프로퍼티 이름 : 예약어 / undifined 는 이름으로 사용할 수 없음
	2. 프로퍼티 값 읽기
		* 마침표(.) 표기법, 대괄호([]) 표기법
		* `객체명.프로퍼티명`, `객체명[프로퍼티명]`
	3. 프로퍼티 값 갱신과 동적생성
		* 객체가 소유하고 있는 프로퍼티에 새로운 값을 할당하면 값이 갱신
		* 객체가 소유하고 있지 않은 프로퍼티에 값을 할당하면 동적생성
		* `객체명[프로퍼티명] = '값'; `
	4. 프로퍼티 삭제 : delete 연산자를 이용
		* `delete 객체명.프로퍼티명;` 
	5. for-in : 객체의 프로퍼티를 순회하는 기능
		* `for (var 변수명 in 겍체명)`
	6. Pass-by-reference
		* 참조형 (객체의 모든 연산이 실제값이 아닌 참조값으로 처리)
		* 반의어 : Pass-by-value (값으로 전달되어 immutable)
	7. 객체의 분류
		* Built-in Objcet(내장객체)
			* Standard Built-in Objects (or Global Objects)
			* BOM (Browser Object Model)
			* DOM (Document Object Model)
		* Host Object

# 함수 (Fuction)
* 함수란?
	* 특정작업을 수행하기 위한 구문들의 묶음
	* 기능 : 코드의 재사용, 객체 생성, 객체의 행위 지정(메소드), 정보의 구성 및 은닉, 클로저, 모듈화 등
	* 함수도 객체에 포함되어 다른 값들 처럼 사용할 수 있으며, 호출할 수 있다는 고유한 특징을 가짐
	(변수나 객체, 배열 등에 저장될 수 있고 다른 함수에 전달되는 인수로도 사용될 수 있으며 함수의 반환값이 될 수도 있다.)

* 함수의 정의
	1. 함수선언식(Function declaration)
		* `function 함수명(매개변수){
        실행되어야할 구문;
        };`
	2. 함수표현식(Function expression)
		* `var 변수명 = function 함수명(매개변수){
        실행되어야할 구문;
        };`
        * 함수명은 일반적으로 생략가능하며 정의된 변수명으로 호출됨
        * 함수의 일급객체 특성을 이용한 함수 정의방법
	3. Function() 생성자 함수
		* `var 함수명 = new Function(매개변수, 실행구문)`
		* 함수선언식과 함수표현식은 모두 함수 리터럴 방식으로 함수를 정의하는데 이것은 결국 내장 함수 Function() 생성자 함수로 함수를 생성하는 것을 단순화 시킨 것이다.
		* 일반적으로 사용하지 않는다.
* 함수 호이스팅(Function Hoisting)
	* 함수선언식으로 정의된 경우 함수호이스팅이 발생되어 함수선언, 초기화, 할당이 한번에 처리됨
	* 함수표현식으로 정의된 경우 변수호이스팅이 발생되어생성 및 초기화와 할당이 분리되어 진행됨

* First-class object (일급 객체)
	* 정의 : 프로그래밍 언어의 기본적 조작을 제한없이 사용할 수 있는 대상
	* 만족조건 (함수는 일급객체임)
		* 무명의 리터럴로 표현이 가능하다.
		* 변수나 자료 구조(객체, 배열…)에 저장할 수 있다.
		* 함수의 파라미터로 전달할 수 있다.
		* 반환값(return value)으로 사용할 수 있다.


* 매개변수
	* 인수와 인자
	* Call-by-value
	* Call-by-reference

* 반환값 (return value)
	* 생략가능 (생력 시 암묵적으로 undifined를 반환)
	* return키워드를 만나면 함수가 종료됨 (return 이후 구문은 실행되지 않는다)

* 함수 객체의 프로퍼티
	* arguments  : 매개변수로 부터 전달된 인수
	* caller : 자신을 호출한 함수
	* length : 매개변수의 갯수
	* name : 함수명
	* [[prototype]] : 자산의 프로토타입
	* prototype : 객체의 부모역할을 하는 객체 (함수객체가 가지는 프로퍼티)

* 함수의 다양한 형태
	* 즉시호출함수표현식 (IIFE, Immediately Invoke Function Expression)
		* 정의와 동시에 실행되며 다시 호출이 불가능함, 변수명 충돌방지를 위한 목적으로 사용됨
		* `(function 함수명(){});` : 함수명은 생략 가능(익명함수)
	* 내부함수 : 함수 내부에서 선언된 함수로 외부에서 접근할 수 없음
	* 콜백함수 : 특정이벤트 발생시 실행되는 함수


# 프로토타입과 객체지향 (Javascript Prototype)
* 프로토타입 : 자바스크립트의 객체의 부모역할을 하는 객체 (객체 생성 시 자동생성되고, 프로퍼티와 매소드를 상속 됨)
* [[Prititype]] : 자신의 프로토타입을 가리키는 숨겨진 프로퍼티
* prototype 프로퍼티 : 함수 객체가 가지고 있는 프로퍼티로 생성될 객체의 부모 역할을 하는 객체(프로토타입 객체)를 가리킨다.
* constructor 프로퍼티 : 자신을 생성한 객체를 가리킨다.
* Prototype chain
	* 객체의 생성은 객체리터럴, 생성자함수, Object() 생성자함수의 3가지 방법이 있다.
	* 객체리터럴의 방법을 사용하는경우 내부적으로 Object()생성자함수로 객체를 생성하게 된다.
	* 따라서 객체리터럴 또는 Object()로 객체를 생성하게 되면 객체와 함께 Object.prototype가 생성이된다.
	* 만약 Person() 생성자함수로 객체를 생성한다면 Person.prototype가 만들어지고 생성된 객체에 프로퍼티와 매소드가 상속이 된다.
	* Person() 생성자 함수의 프로토타입은 Function.prototype가 되고 결국 Object()로 생성된 것이기 때문에 Object.prototype로 프로토타입 체인이 끝난다.
	* 객체 리터럴 방식이나 생성자 함수 방식이나 결국은 모든 객체의 부모 객체인 Object.prototype 객체에서 프로토타입 체인이 끝난다. 이때 Object.prototype 객체를 프로토타입 체인의 종점(End of prototype chain)이라 한다.


# Javascript Scope
* Scope란 함수의 유효범위로 어디서든 참조가능한 전역scope와 정의된 함수내에서만 참조가능한 지역scope가 있다.
* 모든 변수는 Scope를 가지게 되고 자바스크립트는 함수내에서 선언된 변수를 제외하고 모두 전역변수가 된다.
* ECMAscript6에서는 let keyword를 통해 지역변수를 사용할 수 있다.

# Jacascript this
* this는 기본적으로 window객체를 가리키다.
* this가 매서드 앞에 있을때는 호출한 자의 주인을 가리킨다.
* this는 생성자 함수에서는 먼저 빈객체를 생성하여 이를 가리킨 후 프로퍼티 값으로 동적추가가 되어 반환된다.
