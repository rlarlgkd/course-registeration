# 아직 실행 불가

# course-registeration

학생들을 위한 수강신청 앱 <br/>
백엔드 : Node JS <br/>
프론트 엔드 : HTML, CSS, JAVASCRIPT <br/>
템플릿 엔진 : NUNJUCKS <br/>
웹서버 : NGINX (예정) <br/>

### 사용법

```sh
$ npm install
# 필요한 패키지 설치

$ npx sequelize db:create
# mysql에 register 데이터베이스 생성

$ npm start
# http://localhost:3000 로 들어가서 서버 켜졌는지 확인
```

### MYSQL 데이터베이스 테이블

![registerationdb drawio](https://user-images.githubusercontent.com/33505398/198501755-7df48161-a1e8-4ecd-a3de-c7fbacfe15dd.png)

### UML

![웹사이트순서 drawio](https://user-images.githubusercontent.com/33505398/198506735-39b3ef10-939d-4ad4-b7ec-859b1d2ce56b.png)

### 유의 사항

npm i passport@0.5 로 해야 로그아웃 에러 안 뜸
mysql에서 사용자 root 에 비밀번호 1234로 설정

### 더미 데이터
```sh

insert into classes (id, name, room, capacity) values (1,'수학', '215호',40);
insert into classes (id, name, room, capacity) values (2,'컴퓨터 기초', '315호',40);
insert into classes (id, name, room, capacity) values (3,'교양1', '135호',40);
insert into classes (id, name, room, capacity) values (4,'교양2', '425호',40);
insert into classes (id, name, room, capacity) values (5,'필수1', '115호',40);
insert into classes (id, name, room, capacity) values (6,'필수2', '515호',40);

select * from classes;
commit;

```

### 추후 예정


