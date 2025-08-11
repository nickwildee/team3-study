# Weekly Branch – 학습 공유 & PR 리뷰 공간

이 브랜치는 조원들이 매일 학습한 내용을 공유하고, 리뷰를 통해 함께 성장하기 위한 공간입니다.

## 📌 PR 작성 규칙

### ✅ 제목

- `[08-05] 조원이름`  
  예시: `[08-05] 혁`

### ✅ 내용


- 오늘 학습한 내용 요약
- 코드 설명 또는 질문
- 피드백 받고 싶은 부분

### ✅ 머지 조건

- 팀원 전원의 Approve
- Squash and Merge 사용

### ✅ 머지 시 커밋 메시지 작성 규칙

PR을 `Squash and Merge`할 때 최종 커밋 메시지는 다음 규칙을 따릅니다:

- 형식: `[날짜] 조원이름 - 학습 정리`
- 예시: `[08-05] 혁 - 학습 정리`
=======
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
git checkout 3팀_혁 (새로 생성할경우 -b 옵션)
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

6. 완료후

```bash
git branch -D 3팀_혁
```

매일 2번부터 새로 반복해주시면 됩니다.

