## 배열 연습하기 (forEach, for of)

### 제 1: 쇼핑 카트 계산기

`shoppingCart` 배열에 담긴 상품 가격의 **총합**을 계산하여 콘솔에 출력하는 코드를 작성하세요.

const shoppingCart = [10000, 25000, 5000, 3000];

```javascript
let sum= 0;
for(let list of shoppingCart){
  sum += list
}
console.log(sum);
```
---

### 문제 2: 대문자 변환

`users` 배열에 담긴 이름들을 모두 **대문자**로 변환하여 **새로운 배열**에 담는 코드를 작성하세요.

const users = ['김민지', '박서준', '이하늬'];


```javascript
const newUsers = users.map((user) ⇒ user.toUpperCase());
```
---

### 문제 3: 특정 조건의 요소만 출력하기

`numbers` 배열에서 **100보다 크거나 같은 숫자만**을 골라 콘솔에 출력하는 코드를 작성하세요.

const numbers = [50, 150, 70, 200, 90, 120];


```javascript
numbers.foreach((num) ≥100 ⇒ console.log(num));
```

3번 오답 노트
```javascript
numbers.foreach((num) ⇒ {
  if(num>=100){
    console.log(num)
  }
});
```
***
>배열이 계속 헷갈리고 적절한 사용처를 모르겠음.
매일 배열문제 풀이 해보려고 함.

>깃 사용법도 까먹을까먹을거 같음. 자주 사용해봐야겠음

>화살표함수 익숙해지지 않아서 어색함

***
