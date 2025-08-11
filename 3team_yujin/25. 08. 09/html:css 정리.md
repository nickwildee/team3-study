# HTML/CSS

* 엄청 많이 쓰여서 외우고 있는 내용은 제외하고 작성
* 참고자료: 강의, 강의 정리 페이지, 토요일 특강 노션 자료
* 스프린트 미션이나 실습시 헷갈렸던 부분 추가 정리

## HTML

* 인코딩 정하는 문법:   
  ```html
  <meta charset="utf-8">
    ```

### 다양항 링크 동작

* 이메일 보내기: mail.to  
  전화 걸기: tel
  ```html
  <!-- test@example.com으로 이메일 보내기 -->
  <a href="mailto:test@example.com">메일 보내기</a>

  <!-- 한국의 010-1234-0123으로 전화걸기 -->
  <a href="tel:+821012340123">전화 걸기</a>
  ```

* URI 프래그먼트(URI Fragment):   
  페이지의 특정 부분을 가리키는 주소입니다. 원하는 곳에 id 속성을 지정해 두고, 링크 주소로 사용할 때는 맨 끝에 #으로 시작하는 #아이디-이름 을 쓰면 됩니다. ex. `<a href="id">`


* 원하는 창 열기: target 속성
  * target="_blank"(새창)
  * target="_self"(현재 창)
  * 특정한 창 - 최초 movie는 새창에서 열리고 그 다음은 모두 movie로 지정한 창에서 열림
    ```html
    <a href="https://movie.naver.com" target="movie"><!-- 내가 원하는 창 -->
    네이버 영화
      </a>
      <a href="https://movie.daum.net" target="movie"><!-- 내가 원하는 창 -->
      다음 영화
      </a>
      <a href="https://imbd.com" target="movie"><!-- 내가 원하는 창 -->
      imbd
      </a>

### 텍스트 태그
* `<em>`: 이텔릭체 처럼 보임, 강조   
* `<s>`: 취소선
* `<blockquote>`: 인용 (들여쓰기 됨)
* `<q>`: 짧은 인용 (큰 따옴표 붙음)
* `<pre>/<code>`:긴 코드, 짧은 코드

### 리스트 정리
* 순서 있는 리스트 : `<ol>`태그 안에 각각의 항목을 `<li>`태그로 작성
  * 순서 없는 리스트는 `<ul>` 태그 안에 작성

* 순서 리스트 스타일링 `<ol type='스타일'>`형태로 ol태그 안에 작성 또는 list-style css 속성 사용

* 리스트를 한줄로 작성하고 싶을 때는 `display: inline-block` 사용하기

### 테이블
* 테이블 태그: `<table>`
* 테이블의 행: `<tr>`
* 각 데이터: `<td>`
* 머리글:`<thead>`, 머리글의 데이터: `<th>`
* 머리글 있는 테이블의 본문: `<tbody>`
* 바닥글: `<tfoot>`

### 멀티미디어
* 비디오: 이미지와 다르게 종료 태그 있음, 일부 브라우저에는 꼭 muted 속성 사용, 너비와 높이는 단위 없이 지정
  * autoplay, muted, controls 등 속성 있음

* 오디오: 비디오랑 비슷

* **iframe: 인라인 프레임, html문서를 html문서에 넣을 때 사용함**
  ```html
  <iframe src="banner.html" width="750" height="135">
  </iframe>
  ```
### 폼
->스프린트 미션 2 완료 후 추가예정

### 다른 코드 불러오기
  자바스크립트 파일을 불러올 때 사용하는 태그입니다. 파일의 위치는 src로 적어 줍니다. 주로 `<body>` 태그 안에서 맨 마지막에 써 줍니다. 이때 종료 태그인 `</script>`를 쓰는 것도 꼭 기억해 주세요.

### 시맨틱 태그
* `<article>`: 하나의 완성된, 독립적인 내용을 나타내는 영역
* `<figure>`: 이미지와 이미지의 설명을 담고있는 영역


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

### 포지셔닝
* relative: 요소의 원래 위치 기준으로 배치, 원래 자리 차지
* absolute: 부모 요소 기준으로 배치, 원래 자치 차지 안함
* fixed: 원래 자리 차지 않함, 겹치지 않게 마진 주는 것으로 해결함
* sticky: 원래 자리 차지함
* z-index: 높은게 위에 위치함, 부모태그의 z-index가 설정되면 그 부모 태그의 형제 태그끼리의 우선순위임 부모A: 1, 자식 a:3, 부모B:2 일때 자식 a는 1이랑 같음

### flexbox
* flex-basis, grow, shrink
: 원래 크기, 늘릴 때 순위, 줄일 때 순위
* flex-wrap: 요소가 넘치는 경우
