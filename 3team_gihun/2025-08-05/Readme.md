# 2025-08-05

## 오늘의 공부 내용 핵심 정리

### 1. 공부 진도
 Git  Hub 시작하기~개발 협업 1번 토픽

### 2. 핵심 내용 정리
    (1) git push: -u(또는 --set-upstream) origin master : 로컬 레포지토리의 내용을 처음으로 리모트 레포지토리에 올릴 때 사용

    git push -u origin main 

    (1) git add . 
    :working directory 내의 수정사항이 있는 모든 파일들을 
    staging area에 올리는 커멘드 
    (강의에서 가장 많이 사용했던 커멘드)
   
    (2) git commit -m "<수정 코멘트>"
    :staging area에 있는 내용을 커밋으로 남기기

    (3) git diff(commit id "a") (commit id "b")
    : 두 커밋 간의 차이 비교 

    (4) git reset [옵션] [커밋 아이디] : 옵션에 따라 하는 작업이 달라짐(옵션을 생략하면 --mixed 옵션이 적용됨)

    (5) HEAD가 특정 커밋을 가리키도록 이동시킴(--soft는 여기까지 수행)

    (6) staging area도 특정 커밋처럼 리셋(--mixed는 여기까지 수행)

    (7) working directory도 특정 커밋처럼 리셋(--hard는 여기까지 수행)

      이건 나중에 그림 캡쳐해서 보기쉽게 수정예정
   
   ## git 에서 브랜치 사용하기 

    (1) git branch [새 브랜치 이름] : 새로운 브랜치를 생성
      
      git branch [premium]
      
    (2) git checkout [기존 브랜치 이름] : 그 브랜치로 이동
  
      git checkout [premium]

    (3) git merge [기존 브랜치 이름] : 현재 브랜치에 다른 브랜치를 머지

        HEAD -> main
        git merge [premium]
    
    git 실전 1
    
    (1) git fetch : 로컬 레포지토리에서 현재 HEAD가 가리키는   
        브랜치의 업스트림(upstream) 브랜치로부터 최신 커밋들을 가져옴(가져오기만 한다는 점에서, 가져와서 머지까지 하는 git pull과는 차이가 있음)

       HEAD -> main
       git fetch [premium]

    (2) git blame : 특정 파일의 내용 한줄한줄이 어떤 커밋에 의해 생긴  
        것인지 출력

    (3) git revert : 특정 커밋에서 이루어진 작업을 되돌리는(취소하는) 
        커밋을 새로 생성

    Conflict 에 관하여 

    두 브랜치를 머지 했을때 서로 파일 내부의 요소가 달라서? 발생하는 "충돌"

    수정방법  서브라인 텍스트에서 직접 수정하여 git add . git commit -m ""
             수정내용을 저장하고 커밋새로 하기~

    git push 와 git pull

    리모트 레포지토리에 내용을 working repo로 가지고 오기 git pull(merge도 함께됨??)

    터미널에서 작업한 브랜치를 리모트 레포지토리로 보내기 git push


    느낀점 

    코드를 직접 설계하는 html,css와 다르게 자료를 다루는 방법이라 
    예상보단 쉬웠구 재밌었음 토픽 강의 내용대로 따라 했을때 강의와 다른
    에러 메세지를 직접 해석해보고 방법을 찾고 이해하는 과정이 흥미로웠음
    하지만 결국 git과 git hub(리모트 레포지토리)의 사용을 익숙하게 만들고

    금일 팀 미팅에서 이야기 나누고 팀장님께서 만들어주신 팀 git hub 레포지토리를 사용해보면서  익숙해지게 하고 추후 협업에 있어서 막힘 없이 
    할 수 있는 역량을 키워야 할것 같다

    추신 스프린트 미션 너무 어렵다......
   
    
   