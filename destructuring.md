# 디스트럭처링 (ES6)

## 배열디스트럭처링
  1) 배열의 요소를 변수에 할당하기
  ```
   const a = [1,2,3];
   const [x, y, z] = a;
   console.log(x);   //1
   console.log(y);   //2
   console.log(z);   //3

  ```
    * 왼쪽부터 할당되고 나머지는 undefined
    * default값을 지정할 수 있음 ```const [x,y,z=3] = [1,2] ``` 

## 객체디스트럭처링
  1)객체의 프로퍼티를 변수에 할당하기
  ```
    const a = {x:1, y:2, z:3}
    const {x,y} = a;
    console.log(x);  //1
    console.log(y);  //2
    console.log(z);  //3
  ```
  2) 객체의 키값으로 접근하여 원하는 값을 변수에 할당하기 
  ```
  const x = {a:1, b:2, c:3, d:4};
  const { a, d } = x;
  console.log(a, d); // 1 4
  ```

  