# 스프린트 미션 1 리뷰

### 이동경로 넣기

* 이동경로를 /login으로 넣는다는 것은 https://도메인주소/login으로 url 경로를 이동시킨다는 뜻,   
 따라서 https://도메인주소/로 접속하는 것은 index.html을 요청하는 것이고    
 https://도메인주소/login으로 접속하는 것은 login 폴더 안에 있는 index.html을 반환한다.   
따라서 현재 프로젝트에서 login폴더 안에 index.html을 만들면 http://도메인주소/login으로 접속하면 login/index.html을 반환한다.

### 시맨틱 태그
* h1은 한 페이지에 하나가 되어야한다.

### 클래스명

* 대문자, 소문자, 띄어쓰기 표현 등은 하나로 통일할 것
* 스타일 속성 통일 중 예외가 있을 때, 모두 같은 클래스명으로 지정한 뒤 예외가 있는 부분만 새로운 클래스명을 하나 더 부여한다.    
  ```css
    Search, hot-item, Register를 하나의 클래스로 통일하고
  .text-right{
    text-align: right;
  }
  이런식으로 클래스를 추가해서 쓰는 방법도 있습니다~!
  ```
### 웹접근성
*  ```<html lang="ko">``` 넣기

### 보안 관련 설정
* 새창에서 열릴 때 target="_blank"와 함께 rel="noopener noreferrer" 추가하기.
