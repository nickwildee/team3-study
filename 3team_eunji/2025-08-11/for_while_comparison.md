# for문과 while문 사용 가이드

## 📋 개요

반복문은 프로그래밍에서 같은 작업을 여러 번 수행할 때 사용하는 제어 구조입니다. `for문`과 `while문`은 각각 다른 상황에 적합한 특성을 가지고 있습니다.

---

## 🔄 for문 (For Loop)

### 특징
- **반복 횟수가 명확할 때** 사용
- 초기화, 조건, 증감이 한 줄에 명시됨
- 코드가 간결하고 구조적

### 사용하기 좋은 상황

#### ✅ 권장 사용 사례
- 배열이나 리스트의 모든 요소를 순회할 때
- 정확한 횟수만큼 반복해야 할 때
- 숫자 범위를 순차적으로 처리할 때
- 인덱스가 필요한 반복 작업

### 코드 예시

```javascript
// 배열 순회 (for...of)
const fruits = ['apple', 'banana', 'orange'];
for (const fruit of fruits) {
    console.log(fruit);
}

// 전통적인 for문 (인덱스 사용)
for (let i = 0; i < fruits.length; i++) {
    console.log(`${i}: ${fruits[i]}`);
}

// 객체 속성 순회 (for...in)
const person = {name: 'John', age: 30, city: 'Seoul'};
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// 숫자 범위 반복
for (let i = 1; i <= 5; i++) {
    console.log(`숫자: ${i}`);
}
```

---

## 🔁 while문 (While Loop)

### 특징
- **조건이 참인 동안** 계속 반복
- 반복 횟수가 미리 정해지지 않음
- 조건에 따라 동적으로 반복 결정

### 사용하기 좋은 상황

#### ✅ 권장 사용 사례
- 특정 조건이 만족될 때까지 반복
- 사용자 입력을 받을 때
- 파일을 읽거나 데이터를 처리할 때
- 게임 루프나 서버 대기 상태

### 코드 예시

```javascript
// 조건 기반 반복 (사용자 입력)
let userInput = "";
while (userInput !== "종료") {
    userInput = prompt("명령을 입력하세요 (종료하려면 '종료' 입력):");
    console.log(`입력받은 명령: ${userInput}`);
}

// 숫자 카운터
let count = 0;
while (count < 5) {
    console.log(`카운트: ${count}`);
    count++;
}

// 배열 요소 처리 (조건부)
let numbers = [1, 2, 3, 4, 5, 6];
while (numbers.length > 0) {
    const num = numbers.pop();
    console.log(`처리 중: ${num}`);
}

// 게임 루프 예시
let gameRunning = true;
let score = 0;
while (gameRunning) {
    // 게임 로직
    score += 10;
    if (score >= 100) {
        gameRunning = false;
        console.log("게임 종료!");
    }
}
```

---

## ⚖️ 주요 차이점

| 구분 | for문 | while문 |
|------|-------|---------|
| **반복 횟수** | 명확함 | 미정 |
| **구조** | 초기화, 조건, 증감이 한 곳에 | 조건만 명시 |
| **가독성** | 간결하고 구조적 | 직관적이고 유연 |
| **사용 시기** | 횟수 기반 반복 | 조건 기반 반복 |
| **성능** | 약간 더 효율적 | 거의 동일 |

---

## 🎯 선택 가이드라인

### for문을 선택하세요 when:
- 📊 배열, 리스트, 컬렉션을 순회할 때
- 🔢 정확한 횟수만큼 반복할 때
- 📈 순차적인 숫자 처리가 필요할 때
- 🎯 반복 패턴이 명확할 때

### while문을 선택하세요 when:
- ❓ 반복 횟수를 미리 알 수 없을 때
- 🎮 사용자 상호작용이 필요할 때
- 📂 파일이나 스트림 처리할 때
- 🔄 특정 조건이 만족될 때까지 대기해야 할 때

---

## ⚠️ 주의사항

### 무한루프 방지
```javascript
// ❌ 위험한 코드
while (true) {
    console.log("무한루프!");  // 종료 조건이 없음
}

// ✅ 안전한 코드
let count = 0;
while (count < 100) {  // 명확한 종료 조건
    console.log(`안전한 반복: ${count}`);
    count++;
}

// ✅ break 문으로 안전하게 종료
while (true) {
    const input = prompt("계속하시겠습니까? (y/n)");
    if (input === 'n') {
        break;  // 루프 종료
    }
    console.log("계속 진행합니다.");
}
```

---


> 💡 **JavaScript 팁**: 
> - **간단한 배열 처리**는 `forEach`, `map`, `filter` 같은 배열 메서드 사용
> - **복잡한 로직이나 제어가 필요한 경우** `for문`이나 `while문` 사용
> - **비동기 처리**가 필요하면 `for...of`와 `async/await` 조합 추천