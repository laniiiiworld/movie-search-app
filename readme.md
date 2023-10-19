# 영화 검색 애플리케이션

- OMDb API를 활용하여 만든 영화 검색 애플리케이션
- JavaScript -> TypeScript로 마이그레이션
- Demo:

## 기능

- OMDb API를 이용하여 영화 목록 및 상세 정보 검색 기능 구현

## 사용 기술 및 라이브러리

### 기술

- TypeScript
- JavaScript
- CSS
- HTML

### 라이브러리

- [Reset.css](https://www.jsdelivr.com/package/npm/reset-css)(v5.0.2)

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
