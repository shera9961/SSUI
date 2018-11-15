Github remote 방법
==================

### 1. 저장소 권한 부여

- Settings > Collaborators > 권한 부여할 ID 입력.

![gitremote01](https://user-images.githubusercontent.com/43169339/48525004-d1bfa800-e8c5-11e8-8309-a8d5132efcfb.PNG)

- 권한 받은 사용자는 자신의 Email에 들어가 버튼 클릭.

![gitremote02](https://user-images.githubusercontent.com/43169339/48525191-84900600-e8c6-11e8-9a3e-d28b54a9a977.PNG)
***



### 2. 작업환경 셋팅

- 저장소 복사할 폴더 생성.

![gitremote03](https://user-images.githubusercontent.com/43169339/48525513-c8cfd600-e8c7-11e8-97da-0ab8233373c9.PNG)



- 폴더 생성후 저장소 복사.

```sh
$ git clone 저장소 주소 . (끝에 . 입력해야 생성한 폴더에 파일만 복사함)
```
![gitremote04](https://user-images.githubusercontent.com/43169339/48525731-86f35f80-e8c8-11e8-8b45-09d749d7d3f3.PNG)



- 저장소 REMOTE 연결 및 확인.
```sh
$ git remote add origin 저장소 주소

$ git remote -v (remote 확인)

$ git remote remove origin (remote 삭제 - 연결이 잘못되어 있으면 삭제 후 다시 연결)
```
![gitremote05](https://user-images.githubusercontent.com/43169339/48526074-a50d8f80-e8c9-11e8-9732-adc4dd3f915e.PNG)
***


### 3. 저장소 업로드

- 수정된 파일 또는 추가된 파일 추가.
```sh
$ git add Test.txt

$ git add . (전체 파일 추가)
```


- 파일 커밋.
```sh
$ git commit -m "Test"
```


- 푸쉬.
```sh
$ git push
```
![gitremote06](https://user-images.githubusercontent.com/43169339/48526364-c02ccf00-e8ca-11e8-92c4-7e0a51316629.PNG)