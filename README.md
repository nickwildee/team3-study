# 3팀 학습 내용 공유 저장소

## 목적

- 학습 내용 공유
- 서로의 코드 리뷰

## 브랜치 구조

- main: 한 주 단위 정리본
- weekly : PR 리뷰 및 머지 대상
- 각자 이름 브랜치 : 개인 작업용

## 디렉토리 구조

```js
main
  └── sungWoo/ //본인 이름으로 된 디렉토리
        └── 08-05/ // 날짜별 디렉토리 생성
              └── index.html // 해당일자 작업물
              └── style.css
              └── ...
```

### ✅ 3팀 학습 저장소 사용법 안내

1. 저장소 클론

```bash
git clone https://github.com/your-org/your-repo.git
cd team3-study
```

2. 본인 브랜치로 체크아웃 후 본인 이름으로 된 디렉토리 추가후 이동

```bash
git checkout 3팀_혁
mkdir 3team_hyeok
cd 3team_hyeok
```

3. 오늘 날짜 폴더 생성 후 학습 내용 정리

```bash
mkdir 2025-08-05
```

4. 완료 후

```bash
git add .
git commit -m "[08-05] 학습 내용 정리"
git push origin 3팀_혁
```

5. PR요청

커밋을 완료하면 이런 메세지와 함께 url이 보일텐데,
해당 url 주소로 이동하면 PR 요청 화면이 나타납니다.
!!!반드시!!! base를 main이 아닌 weekly로 설정하여 PR 요청 해주세요!

```bash
remote:
remote: Create a pull request for '3팀_혁' on GitHub by visiting:
remote:      https://github.com/nickwildee/team3-study/pull/new/3%ED%8C%80_%EC%A2%85%EC%9D%B8
remote:
```

6. 완료!
