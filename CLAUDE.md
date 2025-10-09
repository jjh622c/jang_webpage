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
- 전통 오방색을 포인트로 활용: 빨강, 파랑, 노랑, 흰색, 검정 (회색 배경에 표시)
- 깔끗한 갤러리 스타일 프레젠테이션
- 완전 반응형 디자인 (모바일/태블릿/데스크톱)
- 인터랙티브 작품 라이트박스 갤러리
- 글로벌 도달을 위한 영어 콘텐츠

---

## 🛠 기술 스택

- **프레임워크**: React 18.2.0
- **스타일링**: Tailwind CSS 3.3.5
- **아이콘**: Lucide React
- **이미지 포맷**: WebP (85% 용량 절감)
- **언어**: 영어 단일 언어
- **호스팅**: Vercel
- **저장소**: GitHub (https://github.com/jjh622c/jang_webpage)

---

## 📁 파일 구조

```
jang_webpage/
├── src/
│   ├── App.jsx          # 메인 React 컴포넌트
│   ├── index.js         # React 진입점
│   └── index.css        # Tailwind CSS 포함
├── public/
│   ├── index.html       # HTML 템플릿
│   └── images/
│       ├── artworks/    # 작품 이미지 (WebP)
│       │   ├── artwork-01.webp
│       │   ├── artwork-02.webp
│       │   └── ... (artwork-06.webp까지)
│       └── hero.webp    # 히어로 섹션 이미지
├── build/               # 빌드 결과물 (배포용)
├── .gitignore           # Git 무시 파일 (카탈로그 폴더 포함)
├── .vercelignore        # Vercel 무시 파일
├── package.json         # 의존성 관리
├── tailwind.config.js   # Tailwind 설정
├── postcss.config.js    # PostCSS 설정
├── vercel.json          # Vercel 배포 설정
└── CLAUDE.md            # 프로젝트 문서
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

## 🖼️ 이미지 최적화 완료

### ✅ 현재 상태: WebP 포맷으로 최적화 완료

**적용된 이미지:**
- 히어로 이미지: `hero.webp` (432KB → 270KB, 37% 감소)
- 작품 이미지 6개: `artwork-01.webp` ~ `artwork-06.webp`
- 전체 용량: 37MB → 5.5MB (85% 감소)

### 이미지 최적화 방법 (참고용)

**Sharp 라이브러리를 사용한 자동 변환:**

```bash
npm install sharp
```

```javascript
// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages() {
  const inputDir = './public/images';
  const files = ['hero.jpg', ...Array.from({length: 6}, (_, i) =>
    `artworks/artwork-${String(i+1).padStart(2, '0')}.jpg`)];

  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const outputPath = inputPath.replace('.jpg', '.webp');

    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);

    console.log(`✓ ${file} → WebP`);
  }
}

optimizeImages();
```

### 추가 이미지 업데이트 방법

**새 이미지를 추가하려면:**

1. 원본 이미지를 `/public/images/artworks/`에 추가
2. Sharp로 WebP 변환 또는 온라인 도구 사용 (https://squoosh.app/)
3. `src/App.jsx`의 artworks 배열에 추가:

```javascript
{
  id: 7,
  title: 'New Artwork Title',
  year: '2024',
  medium: 'Mulberry paper, Oil, Acrylic',
  size: '130 x 162 cm',
  description: 'Description here...',
  color: '#E63946',
  image: '/images/artworks/artwork-07.webp'
}
```

---

## 🎨 색상 구성

**주요 색상** (전통 오방색 - Korean Five Elements Colors):
- 🔴 빨강 (적색): `#E63946` - 에너지, 열정 (Fire)
- 🔵 파랑 (청색): `#457B9D` - 지혜, 깊이 (Wood)
- 🟡 노랑 (황색): `#F4A261` - 번영, 빛 (Earth)
- ⚪ 흰색 (백색): `#FFFFFF` - 순수, 정의 (Metal)
- ⚫ 검정 (흑색): `#000000` - 지혜, 신비 (Water)

**오방색 표시:**
- 회색 배경 (`#F3F4F6`)에 5가지 색상 바 형태로 표시
- 흰색 바에는 테두리 (`border-gray-200`) 추가로 가시성 확보

**중립 색상**:
- 배경: 흰색 `#FFFFFF`
- 텍스트: 회색-900 `#111827`
- 액센트: 회색-50 `#F9FAFB` (섹션 구분용)
- 오방색 컨테이너 배경: 회색-100 `#F3F4F6`

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

## 🚢 배포 (Vercel)

### ✅ 현재 배포 상태

**프로덕션 URL:** https://jangwebpage-by6ymigis-jjh622cs-projects.vercel.app

**GitHub 저장소:** https://github.com/jjh622c/jang_webpage

**배포 플랫폼:** Vercel

### 배포 설정 확인사항

**중요: Vercel Deployment Protection 설정**

Vercel에서 외부 접속 시 이메일을 요구하는 경우, 다음 설정을 확인하세요:

1. https://vercel.com/jjh622cs-projects/jang_webpage/settings 접속
2. 왼쪽 메뉴 "Deployment Protection" 클릭
3. 다음 옵션을 비활성화:
   - ❌ Vercel Authentication
   - ❌ Password Protection
   - ❌ Trusted IPs
4. "Public Access" 활성화 확인
5. 저장 후 재배포

### 로컬에서 Vercel 배포

```bash
# Vercel CLI로 배포
npx vercel --prod --yes

# 또는 GitHub에 push하면 자동 배포
git add .
git commit -m "Update content"
git push origin main
```

### 배포 설정 파일

**vercel.json:**
```json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ],
  "routes": [
    { "src": "/static/(.*)", "dest": "/static/$1" },
    { "src": "/images/(.*)", "dest": "/images/$1" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

**package.json scripts:**
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "vercel-build": "react-scripts build"
  }
}
```

---

## 📝 완료된 작업 및 다음 단계

### ✅ 완료된 작업

**1. 이미지 최적화 완료**
   - ✅ 모든 작품 이미지 WebP 변환 (85% 용량 절감)
   - ✅ 히어로 이미지 적용 (릴리프 기법 강조 작품)
   - ✅ 6개 작품 이미지 배치 완료

**2. 디자인 개선 완료**
   - ✅ 오방색 5가지 모두 표시 (회색 배경 적용)
   - ✅ 전통과 현대의 조화 콘셉트 구현
   - ✅ 완전 반응형 디자인

**3. 배포 완료**
   - ✅ GitHub 저장소 생성 및 push
   - ✅ Vercel 프로덕션 배포
   - ✅ Git 히스토리 정리 (대용량 파일 제거)

### 🟡 권장 개선사항

**1. Vercel Deployment Protection 비활성화**
   - 현재 외부 접속 시 이메일 요구됨
   - Settings → Deployment Protection에서 Public Access 활성화

**2. 전시 이력 확장**
   - 전시 이력 추가 (현재 5개)
   - 국제 전시 포함

**3. SEO 최적화**
   - `index.html`에 메타 태그 추가
   - 소셜 공유용 Open Graph 태그
   - sitemap.xml 생성

**4. Google Analytics**
   - 방문자 행동 추적
   - 관객 인구통계 파악

**5. 연락 폼**
   - 작동하는 연락 폼 추가 (EmailJS 등 사용)
   - 단순 링크를 폼 제출로 교체

### 🟢 선택 사항 (있으면 더 좋음)

**6. 작가 노트 페이지**
   - 예술 철학 전용 페이지
   - 작업 과정 문서화

**7. 언론/미디어 섹션**
   - 뉴스 기사, 인터뷰
   - 프레스 킷 다운로드

**8. 다국어 지원**
   - 필요시 한국어 옵션 추가
   - i18n 라이브러리 사용

**9. 블로그/소식 섹션**
   - 예정된 전시
   - 최근 작품

**10. 온라인 스토어 연동**
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

---

## 🔗 주요 링크

**프로덕션 웹사이트:** https://jangwebpage-by6ymigis-jjh622cs-projects.vercel.app

**GitHub 저장소:** https://github.com/jjh622c/jang_webpage

**Vercel 대시보드:** https://vercel.com/jjh622cs-projects/jang_webpage

**로컬 개발 서버:** http://localhost:3000

---

**최종 업데이트**: 2025-10-09
**제작**: Claude AI Assistant
**프로젝트**: 장인영 화백 포트폴리오 웹사이트
**버전**: 1.0.0 (배포 완료)
