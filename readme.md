## 프로젝트 설명
Node.js, Express, TypeScript를 기반으로 한 백엔드 서버 템플릿 프로젝트입니다.</br>
프론트엔드 개발시 백엔드 API 서버를 빠르게 구축할 수 있도록 설계된 구조로 MariaDB, Sequelize ORM을 사용해 데이터베이스 연동도 가능합니다.

## 개발 환경

- 언어: TypeScript (tsx 파일 형식으로 개발)
- 환경 변수: `.env.local`, `.env.development`, `.env.production` 파일을 사용하여 설정 (dotenv-flow 사용)

```
URL=서버주소
SERVER_PORT=서버 포트
DATABASE=디비 이름
USERNAME=디비 유저 이름
PASSWORD=디비 유저 패스워드
HOST=디비 호스트
PORT=디비 포트

```

## 기술 스택
Express 프레임워크를 통해 RESTful API 서버를 구현합니다.

- Node.js: v23.7.0
- TypeScript
- Express
- mariaDB, sequelize


