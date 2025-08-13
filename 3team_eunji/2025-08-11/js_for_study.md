# for문 연습하기

기본 구조
for( 초기화; 조건; 동작;){ }

***

## 연습예제 5문항


1. 1부터 10까지 출력하기
> for문을 사용하여 1부터 10까지의 숫자를 순서대로 콘솔에 출력하는 코드를 작성하세요.


2. 배열의 요소 출력하기
> 주어진 배열 fruits의 모든 요소를 for문을 사용하여 콘솔에 출력하는 코드를 작성하세요.

`const fruits = ['사과', '바나나', '딸기', '포도'];`

3. 짝수만 출력하기
> for문과 조건문(if)을 함께 사용하여 1부터 20까지의 숫자 중 짝수만 콘솔에 출력하는 코드를 작성하세요.

4. 역순으로 출력하기
> for문을 사용하여 10부터 1까지의 숫자를 역순으로 콘솔에 출력하는 코드를 작성하세요.

5. 두 배열 합치기
> 두 개의 배열 arr1과 arr2를 for문을 사용하여 새로운 배열 combinedArr에 합치는 코드를 작성하세요.

`const arr1 = [1, 2, 3];`
`const arr2 = [4, 5, 6];`
`const combinedArr = [];`


***
## 문제풀이

1. 
``` javascript
for(i = 1; i <= 10; i++){
  console.log(i);
}
```

2. 
``` javascript
for(i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}
```

3. 
``` javascript
for(i = 0; i <= 20; i++){
  if(i%2 ===0){
    console.log(i)
  }
}
```

4. 
``` javascript
for(i = 10; i > 0; i--){
  console.log(i)
}
```

5. 
``` javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combinedArr = [];

// arr1의 요소 추가
for (let i = 0; i < arr1.length; i++) {
  combinedArr.push(arr1[i]);
}

// arr2의 요소 추가
for (let i = 0; i < arr2.length; i++) {
  combinedArr.push(arr2[i]);
}

console.log(combinedArr); // [1, 2, 3, 4, 5, 6]
```
***

> 예제를 통해 연습한 문법
> -  push, length, 배열호출법
