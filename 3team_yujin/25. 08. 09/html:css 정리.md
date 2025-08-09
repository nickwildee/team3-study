# HTML/CSS

* 엄청 많이 쓰여서 외우고 있는 내용은 제외하고 작성
* 참고자료: 강의, 강의 정리 페이지, 토요일 특강 노션 자료
* 스프린트 미션이나 실습시 헷갈렸던 부분 추가 정리

## HTML

* 인코딩 정하는 문법:   
  ```html
  <meta charset="utf-8">
    ```





## CSS
### 폰트
* 구글폰트 사용법:   
   1. 구글폰트 검색 후 검색창에 원하는 폰트 검색하기
  2. get font
  3. embed 코드 복사 후 <head>태그 아래 붙이기
    
* css에서 font-family 작성시 폰트에 띄어쓰기가 있다면 작은 따옴표로 감싸준다. 
 
### 상대적인 크기 단위
* 퍼센트 : ex. 부모 태그의 절반 값만 쓰고 싶으면 `height: 50%`로 사용 할 수 있음.

* em: 1em은 부모 태그의 글자크기이다.    
  ex.   
  부모태그: 4px   
  자식태그: 2em  -> 8px을 뜻함

* rem: 1rem은 html의 글자크기

### 텍스트 스타일링
* line-height: 줄간격, 폰트 사이즈가 1에 해당한다. 폰트가 16px이고 `line-height:2`이면 줄간격은 32px이다.

* text-decoration: ⚠️ `<a>`태그 자체에 써야하고 부모 태그에 쓰면 안먹는다.

### 배경 이미지

* 이미지 넣는 법:   
    ```css
    background-image: url('flowers.png');
    ```
  * 여러개 넣을 수도 있다. 가장 위에 넣은게 가장 위에 보임

* 이미지 관련 설정   
  * background-position
  * background-repeat
  * background-size 
    * cover와 contain의 차이: cover는 비율을 유지하면서 꽉 차게라서 이미지가 짤릴 수 있지만, contain은 짤리지 않는 범위에서 가장 큰 사이즈이다.  

* 그라데이션: linear-gradient(시작색상, 종료색상)
  ```css
   background-image: linear-gradient(#000000, #ffffff);

   background-image:
  linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.2));

* 그림자: box-shadow
  ```css
  box-shadow: 5px 10px 15px 8px rgba(0, 0, 0, 0.6);
  /* 가로: 5px
    세로: 10px
    흐린 정도(Blur): 15px
    퍼지는 정도(Spread): 8px
    색상: rgba(0, 0, 0, 0.6)*/
  ```
* 불투명도: opacity
  ```css
  opacity: 0; /* 투명 */
  opacity: 0.6;
  opacity: 1; /* 불투명 */
  ```
  ⚠️ 요소 전체를 반투명하게 만들기 때문에 배경만 반투명하게 하고 싶을 때는 rgba를 쓰자

### 박스 모델
* overflow: 넘치는 요소 관련 속성
  * hidden : 감추기
  * auto: 넘치면 스크롤
  * scroll: 항상 스크롤

* 마진 상쇄: 부모 자식 간 마진 상쇄에서 부모의 padding이나 border는 경계로 생각하고 상쇄가 일어나지 않는다.

### Display

* inline-block: 인라인처럼 배치되지만 블록처럼 크기를 가지고 싶을 때 사용함 따라서 inline과 달리 width, height, margin, padding을 가지고 있다.   
  ⚠️ margin, padding은 인라인 진행 방향(=가로)만 제대로 사용가능함

### 선택자
* 가상 클래스   
:hover - 마우스를 올렸을 때   
:active - 클릭한 상태   
:visited - 방문한 적이 있는 링크   
:focus - 포커싱 됐을 때

* `*` : 모든 요소 선택할 때 사용함  
ex. `.gallery > *` -> 갤러리의 모든 자식 요소

* n번째 자식 선택자
  * .gallery: nth-child(3) - 갤러리의 3번째 자식
  * .gallery: nth-child(even) - 갤러리의 짝수번째 자식
  * 첫번째, 마지막 자식: .gallery: first-child, .gallery: last-child
  -> 인라인 블록 가로마진 같은 곳에서 사용 가능

  

