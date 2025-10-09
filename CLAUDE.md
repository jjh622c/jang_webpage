# 장인영 화백 포트폴리오 웹사이트 제작 가이드

## 📋 프로젝트 개요

**작가**: 장인영 화백
**생년**: 1938년
**전문분야**: 전통 십장생도의 현대적 재해석
**타겟층**: 글로벌 아트 컬렉터, 갤러리, 미술관, 한국 미술 애호가

---

## 🎯 디자인 컨셉

**테마**: "전통과 현대의 조화"

- 여백을 살린 미니멀리스트 레이아웃 (한국 미학)
- 전통 오방색을 포인트로 활용: 빨강, 파랑, 초록, 노랑
- 깔끔한 갤러리 스타일 프레젠테이션
- 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- 인터랙티브 작품 라이트박스 갤러리
- 글로벌 도달을 위한 영어 콘텐츠

---

## 🛠 기술 스택

- **프레임워크**: React 18+
- **스타일링**: Tailwind CSS
- **아이콘**: Lucide React
- **언어**: 영어 단일 언어
- **배포**: Vercel, Netlify 등 정적 호스팅 가능

---

## 📁 파일 구조

```
jang-inyoung-portfolio/
├── src/
│   ├── App.jsx (또는 jang-inyoung-portfolio.jsx)
│   └── index.css
├── public/
│   └── images/
│       ├── artworks/
│       │   ├── longevity-01.jpg
│       │   ├── longevity-02.jpg
│       │   └── ... (실제 작품 이미지를 여기에 추가)
│       └── hero-image.jpg
├── package.json
└── README.md
```

---

## 🎨 웹사이트 섹션 구성

### 1. **네비게이션** (고정 헤더)
- About (작가소개)
- Artworks (작품)
- Exhibitions (전시이력)
- Philosophy (철학/십장생)
- Contact (연락처)

### 2. **히어로 섹션**
- 작가명: "Jang In-Young"
- 태그라인: "Modern Interpretation of Tradition"
- 대표 작품 영역 (히어로 이미지용 플레이스홀더)

### 3. **작가 소개 섹션**
- 작가 약력
- 예술적 접근법 (닥지 렐리프 기법)
- 국제적 인정 (독일 BBK 회원, 독일/프랑스/미국 전시)
- 통계: 개인전 20+회, 단체전 300+회, 7개국 이상, 85년 이상 활동

### 4. **작품 갤러리**
- 그리드 레이아웃으로 6개 작품 (데스크톱 3단)
- 클릭하면 상세 정보와 함께 라이트박스 열림
- 네비게이션: 이전/다음 화살표, 닫기 버튼
- 각 작품 정보:
  - 제목: "Longevity and Prosperity I-VI"
  - 연도, 사이즈, 재료
  - 설명

### 5. **전시 이력**
- 타임라인 형식 (연도 표시)
- 주요 전시 (2020-2023)
- 장소 정보

### 6. **십장생 철학 섹션**
- 10개 상징물 그리드 (이모지 포함):
  1. ☀️ Sun - 만물의 근원
  2. ⛰️ Mountain - 불변의 영원
  3. 💧 Water - 생명의 흐름
  4. 🪨 Rock - 견고함
  5. ☁️ Cloud - 자유와 초월
  6. 🌲 Pine - 절개와 지조
  7. 🌿 Herb - 불로장생
  8. 🐢 Turtle - 장수
  9. 🦢 Crane - 고귀함
  10. 🦌 Deer - 부귀

### 7. **연락처 섹션**
- 주소: 부산시 수영구 수미로 50번길 37-1
- 이메일: inyoungart@naver.com
- 전화: +82-10-3562-3225

---

## 🚀 빠른 시작 가이드

### 1단계: React 앱 생성

```bash
npx create-react-app jang-inyoung-portfolio
cd jang-inyoung-portfolio
```

### 2단계: 의존성 설치

```bash
npm install lucide-react
```

### 3단계: Tailwind CSS 설정

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

**tailwind.config.js:**
```javascript
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

**src/index.css:**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 4단계: App.jsx 교체

`jang-inyoung-portfolio.jsx`의 내용을 `src/App.jsx`에 복사

### 5단계: 개발 서버 실행

```bash
npm start
```

브라우저에서 http://localhost:3000 접속

---

## 🖼️ 실제 이미지 추가하기

### 현재 상태: 플레이스홀더 이미지
모든 작품에 이모지 플레이스홀더(🖼️) 사용 중

### 실제 이미지 추가 방법:

**1. 이미지를 `/public/images/artworks/` 폴더에 배치**
   ```
   longevity-01.jpg
   longevity-02.jpg
   longevity-03.jpg
   ... 등
   ```

**2. App.jsx의 artworks 배열 업데이트:**

```javascript
const artworks = [
  {
    id: 1,
    title: 'Longevity and Prosperity I',
    year: '2023',
    medium: 'Mulberry paper, Oil, Acrylic',
    size: '162 x 130 cm',
    description: 'Modern reinterpretation...',
    color: '#E63946',
    image: '/images/artworks/longevity-01.jpg' // 이 줄 추가
  },
  // ... 모든 작품에 반복
];
```

**3. 플레이스홀더를 img 태그로 교체:**

```jsx
// 이전 (플레이스홀더):
<div className="text-6xl mb-4">🖼️</div>

// 이후 (실제 이미지):
<img 
  src={artwork.image} 
  alt={artwork.title}
  className="w-full h-full object-cover"
/>
```

---

## 🎨 색상 구성

**주요 색상** (전통 오방색):
- 빨강: `#E63946` - 에너지, 열정
- 파랑: `#457B9D` - 지혜, 깊이
- 초록: `#2A9D8F` - 자연, 성장
- 노랑: `#F4A261` - 번영, 빛

**중립 색상**:
- 배경: 흰색 `#FFFFFF`
- 텍스트: 회색-900 `#111827`
- 액센트: 회색-50 `#F9FAFB` (섹션 구분용)

---

## 📱 반응형 브레이크포인트

- **모바일**: < 768px (1단 갤러리)
- **태블릿**: 768px - 1024px (2단 갤러리)
- **데스크톱**: > 1024px (3단 갤러리)

---

## ✨ 인터랙티브 기능

1. **부드러운 스크롤 네비게이션**
   - 네비게이션 링크 클릭 시 해당 섹션으로 부드럽게 스크롤
   
2. **작품 라이트박스**
   - 작품 클릭 시 전체 크기로 보기
   - 화살표 키 또는 화면 버튼으로 네비게이션
   - ESC 키로 닫기

3. **호버 효과**
   - 작품에 마우스 올리면 살짝 확대
   - 네비게이션 링크 색상 변경

4. **모바일 메뉴**
   - 햄버거 메뉴
   - 부드러운 슬라이드인 애니메이션

---

## 🚢 배포 옵션

### 옵션 1: Vercel (추천)

```bash
npm install -g vercel
vercel login
vercel
```

### 옵션 2: Netlify

```bash
npm run build
# netlify.com에 'build' 폴더를 드래그 앤 드롭
```

### 옵션 3: GitHub Pages

```bash
npm install gh-pages --save-dev
```

`package.json`에 추가:
```json
"homepage": "https://yourusername.github.io/jang-inyoung-portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

```bash
npm run deploy
```

---

## 📝 다음 단계 (우선순위별)

### 🔴 필수 (반드시 해야 함)

**1. 실제 작품 이미지 추가**
   - 모든 이모지 플레이스홀더를 실제 사진으로 교체
   - 이미지 최적화 (권장: 1200x1500px, 각 500KB 이하)
   - TinyPNG 같은 도구로 압축

**2. 히어로 이미지 추가**
   - 히어로 섹션용 대표 작품
   - 고화질이며 대표성 있는 작품

**3. 연락처 정보 확인**
   - 이메일과 전화번호 재확인
   - 이메일 링크 작동 테스트

### 🟡 중요 (하면 좋음)

**4. 전시 이력 확장**
   - 전시 이력 추가 (현재 5개)
   - 국제 전시 포함

**5. SEO 최적화**
   - `index.html`에 메타 태그 추가
   - 소셜 공유용 Open Graph 태그
   - sitemap.xml 생성

**6. Google Analytics**
   - 방문자 행동 추적
   - 관객 인구통계 파악

**7. 연락 폼**
   - 작동하는 연락 폼 추가 (EmailJS 등 사용)
   - 단순 링크를 폼 제출로 교체

### 🟢 선택 사항 (있으면 더 좋음)

**8. 작가 노트 페이지**
   - 예술 철학 전용 페이지
   - 작업 과정 문서화

**9. 언론/미디어 섹션**
   - 뉴스 기사, 인터뷰
   - 프레스 킷 다운로드

**10. 다국어 지원**
    - 필요시 한국어 옵션 추가
    - i18n 라이브러리 사용

**11. 블로그/소식 섹션**
    - 예정된 전시
    - 최근 작품

**12. 온라인 스토어 연동**
    - 프린트나 원작 판매
    - Shopify 등과 연동

---

## 🔧 커스터마이징 팁

### 색상 변경하기

JSX에서 다음 색상 클래스 검색:
- `bg-red-600` → 원하는 색으로 변경
- `text-blue-600` → 액센트 색상 업데이트
- `border-gray-200` → 테두리 색상 조정

### 폰트 변경하기

`public/index.html`에 구글 폰트 추가:
```html
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
```

`tailwind.config.js` 업데이트:
```javascript
theme: {
  extend: {
    fontFamily: {
      serif: ['Playfair Display', 'serif'],
    }
  }
}
```

### 그리드 레이아웃 수정

갤러리 컬럼 변경:
```jsx
// 현재: 1/2/3 컬럼 (모바일/태블릿/데스크톱)
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"

// 변경: 1/3/4 컬럼으로
className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8"
```

---

## 🐛 문제 해결

### 문제: Tailwind 스타일이 작동하지 않음
**해결법**: `index.css`에 Tailwind 지시어가 있는지 확인:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 문제: 이미지가 로드되지 않음
**해결법**: 
1. 이미지가 `/public/images/` 폴더에 있는지 확인
2. 경로가 `/`로 시작하는지 확인 (예: `/images/artwork.jpg`)
3. 브라우저 캐시 지우고 개발 서버 재시작

### 문제: 배포 오류
**해결법**:
1. 로컬에서 먼저 `npm run build` 실행
2. 콘솔 오류 확인
3. 모든 의존성이 `package.json`에 있는지 확인

---

## 📞 지원

문의사항:
- 이메일: inyoungart@naver.com
- 포트폴리오: https://www.artko.kr/~inyoungart/

---

## 📄 라이센스

© 2025 장인영. All rights reserved.

---

## 🎯 달성한 프로젝트 목표

✅ 깔끔하고 전문적인 아티스트 포트폴리오  
✅ 글로벌 대응 (영어)  
✅ 완전 반응형 디자인  
✅ 인터랙티브 작품 갤러리  
✅ 교육적 콘텐츠 (십장생)  
✅ 유지보수 및 업데이트 용이  
✅ 배포 준비 완료  

---

**최종 업데이트**: 2025-01-XX  
**제작**: Claude AI Assistant  
**프로젝트**: 장인영 화백 포트폴리오 웹사이트
