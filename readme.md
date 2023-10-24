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

## 사용 기술 및 라이브러리

### 기술

- TypeScript
- JavaScript
- CSS
- HTML

### 라이브러리

- [Reset.css](https://www.jsdelivr.com/package/npm/reset-css)(v5.0.2)
- [Font Awesome](https://fontawesome.com/)
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
