# 영화 검색 애플리케이션

- OMDb API를 활용하여 만든 영화 검색 애플리케이션
- JavaScript -> TypeScript로 마이그레이션
- Demo: [영화 검색 애플리케이션](https://movie-search-lani.vercel.app)

## 기능

- 데스크탑, 태블릿, 모바일 버전에서 확인할 수 있는 반응형 웹
- OMDb API를 이용하여 영화 목록 및 상세 정보 검색 기능 구현
- 영화 목록을 더 가져오기 위한 "View more.." 버튼 구현
- 영화 목록을 가져올 때 로딩 애니메이션 제공
- JavaScript로 구현한 router 기능을 이용하여 메인(Search), 상세(Movie), About 페이지 이동
- CSS로 상세 페이지 로딩 스켈레톤 구현
- 인증정보(OMDb API Key) 보안 강화를 위해 Serverless 함수 사용

## 사용 기술 및 라이브러리

### 기술

- TypeScript
- JavaScript
- CSS
- HTML

### 라이브러리

- [Reset.css](https://www.jsdelivr.com/package/npm/reset-css)(v5.0.2)
- dotenv(v16.3.1)

### API

- [OMDb API](https://www.omdbapi.com/)

### 익스텐션

- Comment tagged templates

### parcel 번들러

- 설치

  ```bash
  npm i -D parcel
  ```

- package.json

  ```json
    "scripts": {
      "dev": "parcel ./index.html",
      "build": "parcel build ./index.html"
    },
  ```

- 실행

  ```bash
  npm run dev
  ```

### Serverless Function 사용을 위한 Vercel 구성

- Vercel 설치

  ```bash
  npm i -D vercel
  ```

- node-fetch 설치

  ```bash
  npm i node-fetch@2
  ```

  - Vercel 패키지가 동작하는 NodeJS 환경에서 fetch함수를 사용하기 위해 설치
  - CommonJS방식을 사용하기 위해 2버전을 지정하여 설치

- package.json

  ```json
    "type": "module",
    "scripts": {
      //...
      "vercel": "vercel dev",
    },
  ```

- vercel.json 생성

  ```json
  {
    "devCommand": "npm run dev",
    "buildCommand": "npm run build"
  }
  ```

- 실행

  ```bash
  npm run vercel
  ```

## 유용한 사이트

- [JSON → TypeScript 인터페이스로 변환](https://transform.tools/json-to-typescript)
