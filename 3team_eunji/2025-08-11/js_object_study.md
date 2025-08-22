# JavaScript 객체와 메소드 학습 기록

> 자바스크립트 객체의 기본 개념(프로퍼티, 메소드, this 키워드)을 연습한 기록입니다.

## 📚 학습 목표
- 객체의 프로퍼티와 메소드 정의하기
- `this` 키워드 올바르게 사용하기
- 배열 메소드(`push`, `length`) 활용하기
- 조건문을 활용한 데이터 보호 로직 구현하기

---

## 🐕 문제 1: 강아지 정보 관리

### 문제
강아지의 정보를 담는 객체를 만들어보세요.

**프로퍼티:**
- name: "멍멍이"
- age: 3
- breed: "골든 리트리버"
- toys: ["공", "뼈다귀"] (이미 2개 장난감이 있음)

**메소드:**
- `bark()`: "멍멍! 저는 [이름]입니다!" 출력
- `addToy(toy)`: toys 배열에 새로운 장난감 추가
- `getToyCount()`: 장난감 개수 반환

### 내가 처음 작성한 코드
```javascript
const dog = {
  name: "멍멍이",
  age: 3,
  breed: "골든 리트리버",
  toys: ["공", "뼈다귀"],
  bark : function(){
    console.log(`멍멍! 저는 ${name}입니다!`)  // ❌ this 누락
  },
  addToy : function(toy){
    this.toys.push(toy)  // ✅ 정답
  },
  getToyCount : function(){
    return toys.length  // ❌ this 누락
  },
};
```

### 수정된 정답 코드
```javascript
const dog = {
  name: "멍멍이",
  age: 3,
  breed: "골든 리트리버",
  toys: ["공", "뼈다귀"],
  
  bark: function(){
    console.log(`멍멍! 저는 ${this.name}입니다!`)  // ✅ this.name
  },
  
  addToy: function(toy){
    this.toys.push(toy)
  },
  
  getToyCount: function(){
    return this.toys.length  // ✅ this.toys.length
  }
};
```

### 배운 점
- 객체 내부 메소드에서 같은 객체의 프로퍼티에 접근할 때는 반드시 `this` 키워드를 사용해야 함
- `this`는 "이 객체의"라는 의미

---

## 🍕 문제 2: 피자 주문 관리

### 문제
피자 주문 정보를 관리하는 객체를 만들어보세요.

**프로퍼티:**
- customerName: "김피자"
- size: "라지"
- toppings: ["페퍼로니", "치즈"] (이미 2개 토핑이 있음)
- price: 25000

**메소드:**
- `getOrderInfo()`: "고객: [customerName], 사이즈: [size], 가격: [price]원" 출력
- `addTopping(topping)`: toppings 배열에 새로운 토핑 추가하고 가격 3000원 증가
- `getTotalToppings()`: 토핑 개수 반환

### 내가 처음 작성한 코드
```javascript
const pizzaOrder = {
  customerName: "김피자",
  size: "라지",
  toppings: ["페퍼로니", "치즈"],
  price: 25000,
  getOrderInfo: function(){
    console.log(`"고객: ${this.customerName}, 사이즈: ${this.size}, 가격: ${this.price}원"`);
  },
  addTopping: function(topping){
    this.toppings.push(topping);
    price = price + 300;  // ❌ this 누락, 금액 오타
  },
  getTotalToppings: function(){
    return this.toppings.length;
  },
};
```

### 수정된 정답 코드
```javascript
const pizzaOrder = {
  customerName: "김피자",
  size: "라지",
  toppings: ["페퍼로니", "치즈"],
  price: 25000,
  
  getOrderInfo: function(){
    console.log(`고객: ${this.customerName}, 사이즈: ${this.size}, 가격: ${this.price}원`);
  },
  
  addTopping: function(topping){
    this.toppings.push(topping);
    this.price += 3000;  // ✅ this.price와 올바른 금액
  },
  
  getTotalToppings: function(){
    return this.toppings.length;
  }
};
```

### 배운 점
- `this` 키워드 사용이 더 자연스러워짐
- 객체의 프로퍼티 값을 변경할 때도 `this`를 사용해야 함
- `+=` 연산자로 값을 증가시킬 수 있음

---

## 📱 문제 3: 휴대폰 정보 관리

### 문제
휴대폰 정보를 담는 객체를 만들어보세요.

**프로퍼티:**
- brand: "삼성"
- model: "갤럭시"
- battery: 100 (배터리 잔량 %)
- apps: ["전화", "문자", "카메라"] (이미 3개 앱이 설치됨)

**메소드:**
- `getPhoneInfo()`: "[brand] [model] - 배터리: [battery]%" 출력
- `useBattery(amount)`: 배터리를 amount만큼 감소 (0 이하로는 안 됨)
- `installApp(appName)`: apps 배열에 새 앱 추가
- `getAppCount()`: 설치된 앱 개수 반환

### 내가 처음 작성한 코드
```javascript
const phone = {
  brand: "삼성",
  model: "갤럭시",
  battery: 100,
  apps: ["전화", "문자", "카메라"],
  getPhoneInfo: function(){
    console.log(`"${this.brand} ${this.model} - 배터리: ${this.battery}%"`)
  },
  useBattery: function(amount){
    this.battery -= amount  // ❌ 배터리가 음수가 될 수 있음
  },
  installApp: function(appName){
    this.apps.push(appName)
  },
  getAppCount: function(){
    return this.apps.length
  },
};
```

### 수정된 정답 코드
```javascript
const phone = {
  brand: "삼성",
  model: "갤럭시",
  battery: 100,
  apps: ["전화", "문자", "카메라"],
  
  getPhoneInfo: function(){
    console.log(`${this.brand} ${this.model} - 배터리: ${this.battery}%`)
  },
  
  useBattery: function(amount){
    // 방법 1: if문 사용
    if (this.battery - amount >= 0) {
      this.battery -= amount;
    } else {
      this.battery = 0;
    }
    
    // 방법 2: Math.max 사용 (한 줄로 해결)
    // this.battery = Math.max(0, this.battery - amount);
  },
  
  installApp: function(appName){
    this.apps.push(appName)
  },
  
  getAppCount: function(){
    return this.apps.length
  }
};
```

### 연습문제를 통해 배운 점
- 조건문(`if`)을 사용하여 데이터 보호 로직을 구현할 수 있음
- `Math.max()`를 활용하면 더 간결하게 최솟값을 설정할 수 있음
- 객체의 메소드에서도 복잡한 로직을 구현할 수 있음

---

## 🎯 핵심 개념 정리

### 1. this 키워드
```javascript
// 객체 내부에서 자신의 프로퍼티에 접근할 때 사용
const obj = {
  name: "test",
  getName: function(){
    return this.name;  // ✅ this 필수
  }
};
```

### 2. 배열 메소드
```javascript
// 배열에 요소 추가
this.배열이름.push(값);

// 배열 길이 확인
this.배열이름.length;
```


---

*작성일: 2025년 8월 11일*
*학습 시간: 약 1시간*