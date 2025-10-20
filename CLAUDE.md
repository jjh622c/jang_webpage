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
│       │   ├── artwork-new-01.webp
│       │   ├── artwork-new-02.webp
│       │   └── ... (artwork-new-12.webp까지)
│       ├── about/       # About 섹션 사진 (선택)
│       │   ├── photo-1.jpg
│       │   ├── photo-2.jpg
│       │   └── photo-3.jpg
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
- News (소식/블로그)
- Philosophy (철학/십장생)
- Contact (연락처)

### 2. **히어로 섹션**
- 작가명: "Jang In-Young"
- 태그라인: "Modern Interpretation of Tradition"
- 오방색 (빨강, 파랑, 노랑, 흰색, 검정) 표시
- 대표 작품 이미지

### 3. **작품 슬라이드 배경 섹션** (NEW)
- 풀스크린 자동 슬라이드 (5초 간격)
- 작품 6개 순환 표시
- 그라데이션 오버레이로 텍스트 가독성 확보
- 작품 제목, 연도, 크기, 설명 표시
- 하단에 점 형태 인디케이터 (클릭으로 수동 전환)

### 4. **작가 소개 섹션**
- 작가 약력 및 학력
  - 부산여자대학교 교수 (31년 교육 경력)
  - 철학박사 (동아대학교)
  - 저서 6권, 논문 13편
- 예술적 접근법
  - 주석가루와 닥나무종이를 이용한 독특한 릴리프 기법
  - 기하학적 구성과 오방색의 현대적 해석
  - 전통 십장생도의 현대적 재해석
- 국제적 인정
  - 독일 예술가협회(BBK) 회원
  - 독일 국제문화박물관 영구 소장 (십장생 작품)
  - 10개국 이상 전시 (독일, 프랑스, 미국, 일본, 중국, 터키, 스위스 등)
- 주요 수상
  - 대통령 근정포장 (2003년)
  - 제65회 부산광역시 문화상 시각예술부문 (2022년)
  - 제12회 삼양문화상 대상 (2015년)
- 통계: **개인전 23회**, **단체전 300+회**, **10+개국**, **58+년 활동** (1966-2024)
- **이미지 캐러셀** (실제 사진 추가 완료):
  - photo-1.jpg: 김영삼 대통령과 전시회
  - photo-2.jpg: 독일 YTN 기자 인터뷰 (국제문화박물관 전시)
  - photo-3.jpg: 제65회 부산광역시 문화상 수상증
  - 좌우 네비게이션 버튼
  - 하단 점 인디케이터
  - 검은 배경 + 그라데이션 오버레이

### 5. **작품 갤러리**
- 기본: 3개 작품만 표시 (우선순위 높은 작품)
- "View All Artworks" 버튼으로 전체 보기
- 전체 보기: 12개 작품 그리드 (데스크톱 3단)
- "Show Less" 버튼으로 다시 축소 및 자동 스크롤
- 클릭하면 상세 정보와 함께 라이트박스 열림
- 네비게이션: 이전/다음 화살표, 닫기 버튼
- 각 작품 정보:
  - 실제 작품 제목 (한글 및 영문)
  - 연도 (2010-2023)
  - 정확한 사이즈 (10F ~ 50F 캔버스 규격)
  - 재료 (주석가루, 닥나무종이, 캔버스, 아크릴 등)
  - 작품 설명 (십장생 상징, 릴리프 기법, 풍경 특성 등)

### 6. **전시 이력**
- 타임라인 형식 (연도 표시)
- 주요 전시 (2019-2023)
- 장소 정보

### 7. **소식 & 업데이트 섹션** (NEW)
- 최신 전시, 언론 보도, 수상 소식
- 카드 형식 3개 표시
- 카테고리별 태그 (Exhibition, Press, Award)
- 날짜, 제목, 요약
- "Read more" 버튼
- "View All News" 버튼

### 8. **십장생 철학 섹션**
- 10개 상징물 그리드 (전통 한자 사용):
  1. 日 Sun - 만물의 근원
  2. 山 Mountain - 불변의 영원
  3. 水 Water - 생명의 흐름
  4. 石 Rock - 견고함
  5. 雲 Cloud - 자유와 초월
  6. 松 Pine - 절개와 지조
  7. 草 Herb - 불로장생
  8. 龜 Turtle - 장수
  9. 鶴 Crane - 고귀함
  10. 鹿 Deer - 부귀
- 호버 시 테두리 색상 변경 및 그라데이션 효과

### 9. **연락처 섹션**
- 주소: 부산시 수영구 수미로 50번길 37-1
- 이메일: inyoungart@naver.com
- 전화: 1577-9219

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
- 작품 이미지 12개: `artwork-new-01.webp` ~ `artwork-new-12.webp`
- 전체 용량 (신규 작품): 14MB → 9.7MB (평균 31% 감소)
- 최적화 상세:
  - artwork-new-01.webp: 1318KB → 871KB (33.9% 절감)
  - artwork-new-02.webp: 3201KB → 1946KB (39.2% 절감)
  - artwork-new-03.webp: 1193KB → 801KB (32.8% 절감)
  - artwork-new-04.webp: 855KB → 727KB (14.9% 절감)
  - artwork-new-05.webp: 991KB → 621KB (37.3% 절감)
  - artwork-new-06.webp: 858KB → 602KB (29.8% 절감)
  - artwork-new-07.webp: 1718KB → 1181KB (31.3% 절감)
  - artwork-new-08.webp: 1076KB → 725KB (32.7% 절감)
  - artwork-new-09.webp: 703KB → 554KB (21.2% 절감)
  - artwork-new-10.webp: 1097KB → 764KB (30.3% 절감)
  - artwork-new-11.webp: 489KB → 340KB (30.5% 절감)
  - artwork-new-12.webp: 784KB → 540KB (31.2% 절감)

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

## 🎨 작품 큐레이션 프로세스 (v1.2.0)

### 📁 출처 폴더 분석

**분석 폴더:**
- `c:\Users\mind6\OneDrive\사진\삶의 형이사학 그림 베스트\베스트` (5개 작품)
- `c:\Users\mind6\OneDrive\사진\삶의 형이사학 그림 베스트\기타 괜찮은거` (21개 작품)

### 🔍 작품 분류

**Category 1: 기하학적 추상 십장생도** (7개 선정)
- 기하학적 십장생도 50F (2013) - 주석가루 릴리프 기법
- 기하학적 장생도 30F (2013) - 기하학적 패턴
- 기하학적 십장생도 30F (2016) - 주석가루, 태양 상징
- 십장생 이야기 30F (2016) - 주석가루, 석양
- 장생복락도 25M (2023) - 주석가루, 균형잡힌 구도
- 장생복락도 10F (2011) - 닥나무종이 릴리프
- 서기(瑞氣) 30F (2010) - 뛰어난 릴리프 질감

**Category 2: 풍경 십장생도** (4개 선정)
- 십장생-오봉도 10F (2023) - 오봉(오악) 전통 상징
- 장생 이야기 20F (베스트) - 산, 학, 두꺼운 물감
- 꿈은 이루어진다 10F (2020) - 인물 요소, 축제
- 십장생 이야기 30P (2021) - 생동감 있는 색채

**Category 3: 마을 & 자연 풍경** (3개 고려)
- 고향마을 50F (2020) - 목가적 한국 마을 풍경
- 향촌의 봄 20F (2020) - 봄 풍경
- 내장산의 추경 20F (2016) - 가을 단풍

**Category 4: 특별 주제** (2개 고려)
- 금강산 해빙 10F (2011) - 북한 명산, 얼음 녹는 장면
- 초하루 해맞이축제 10F (2010) - 새해 일출 축제

### 🎯 선정 기준 (증거 기반)

**우선순위 1 (갤러리 처음 3개):**
1. **기하학적 십장생도 50F** - 최대 사이즈, 릴리프 기법 강조, 가장 vibrant한 색채
2. **십장생-오봉도 10F** - 전통 왕실 상징 오봉, 표현력 있는 붓터치
3. **서기(瑞氣) 30F** - 뛰어난 질감, 문화적 의미(서기 = 상서로운 기운)

**우선순위 2 (4-6번):**
4. **기하학적 장생도 30F** - 스타일 변주, 동일하게 생동감 있는 색채
5. **꿈은 이루어진다** - 접근 가능한 서사, 인간적 요소
6. **고향마을 50F** - 대형 작품, 풍경 실력 시연

**확장 갤러리 (7-12번):**
- 다양한 크기와 기법 전시
- 시기별 작품 분포 (2010-2023)
- 추상/구상/풍경 균형

### 📊 최적화 결과

**파일명 규칙:**
- `artwork-new-01.webp` ~ `artwork-new-12.webp`
- 메타데이터 보존 (파일명에서 제목, 연도, 사이즈 추출)

**WebP 변환:**
- 평균 31% 용량 절감
- 품질 80% 유지
- 시각적 품질 손실 없음

### 🚀 배포 준비 완료

**변경 사항:**
- `src/App.jsx`: artworks 배열 완전 교체 (6개 → 12개)
- 실제 작품 정보: 제목, 연도, 재료, 사이즈, 설명
- 히어로 슬라이드: 12개 작품 모두 순환 표시
- 초기 갤러리: 3개 작품 (View More로 12개 전체 표시)

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

3. **자동 슬라이드쇼** (NEW)
   - 작품 배경 섹션에서 5초마다 자동 전환
   - 수동 컨트롤: 하단 점 인디케이터 클릭

4. **이미지 캐러셀** (NEW)
   - About 섹션: 좌우 화살표로 사진 전환
   - 하단 점 인디케이터로 빠른 이동

5. **동적 갤러리 확장** (NEW)
   - "View All Artworks" 버튼으로 전체 작품 보기
   - "Show Less" 버튼으로 축소 및 자동 스크롤

6. **호버 효과**
   - 작품에 마우스 올리면 살짝 확대
   - 십장생 카드에 마우스 올리면 테두리 색상 변경 및 그라데이션
   - 네비게이션 링크 색상 변경
   - 뉴스 카드 그림자 확대

7. **모바일 메뉴**
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
   - ✅ Ten Symbols 섹션 전통 한자 디자인으로 개선
   - ✅ 호버 효과 및 애니메이션 추가

**3. 새로운 기능 추가 (2025-10-19)**
   - ✅ 작품 슬라이드 배경 섹션 (자동 5초 전환)
   - ✅ About 섹션 이미지 캐러셀
   - ✅ 갤러리 "더보기/줄이기" 버튼
   - ✅ News & Updates 섹션 (카드 형식)
   - ✅ 연락처 전화번호 업데이트 (1577-9219)
   - ✅ 네비게이션에 News 메뉴 추가

**4. About 섹션 실제 콘텐츠 추가 (2025-10-20)**
   - ✅ 실제 수상 사진 3장 추가 (김영삼 대통령, YTN 인터뷰, 부산문화상)
   - ✅ 경력 정보 정확화 (23개인전, 10+개국, 58+년 활동)
   - ✅ 주요 수상 이력 추가 (대통령 포장, 부산문화상, 삼양문화상)
   - ✅ 학력 및 저술 활동 추가 (철학박사, 저서 6권, 논문 13편)
   - ✅ 이미지 캐러셀 플레이스홀더 제거 및 실제 사진 표시
   - ✅ 증거 기반 사진 선정 및 우선순위 결정

**5. 배포 완료**
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

**3. News 섹션 콘텐츠 확장**
   - 실제 뉴스 데이터로 교체
   - "View All News" 페이지 구현
   - "Read more" 링크 기능 추가

**4. SEO 최적화**
   - `index.html`에 메타 태그 추가
   - 소셜 공유용 Open Graph 태그
   - sitemap.xml 생성

**5. Google Analytics**
   - 방문자 행동 추적
   - 관객 인구통계 파악

**6. 연락 폼**
   - 작동하는 연락 폼 추가 (EmailJS 등 사용)
   - 단순 링크를 폼 제출로 교체

### 🟢 선택 사항 (있으면 더 좋음)

**7. 작품 자동 등록 시스템**
   - 폴더에 이미지와 텍스트 파일 추가만으로 작품 등록
   - JSON 또는 마크다운 기반 메타데이터

**8. 작가 노트 페이지**
   - 예술 철학 전용 페이지
   - 작업 과정 문서화

**9. 다국어 지원**
   - 필요시 한국어 옵션 추가
   - i18n 라이브러리 사용

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

**최종 업데이트**: 2025-10-20
**제작**: Claude AI Assistant
**프로젝트**: 장인영 화백 포트폴리오 웹사이트
**버전**: 1.3.0 (About 섹션 실제 콘텐츠 완성)

---

## 📋 버전 히스토리

**v1.3.0** (2025-10-20)
- ✅ About 섹션 실제 수상 사진 3장 추가
  - photo-1.jpg: 김영삼 대통령과 전시회 (국가 최고 권위자 인정)
  - photo-2.jpg: 독일 YTN 기자 인터뷰 (국제 활동 증명)
  - photo-3.jpg: 제65회 부산광역시 문화상 수상증 (최신 수상 2022)
- ✅ 경력 정보 정확화 및 확장
  - 통계 업데이트: 23개인전, 300+단체전, 10+개국, 58+년 활동
  - 주요 수상 추가: 대통령 근정포장(2003), 부산문화상(2022), 삼양문화상(2015)
  - 학력 정보: 철학박사, 저서 6권, 논문 13편, 교육경력 31년
- ✅ 이미지 캐러셀 플레이스홀더 제거 및 실제 사진 표시
- ✅ 증거 기반 사진 선정 프로세스 문서화
- ✅ About 섹션 본문 상세화 (독일 국제문화박물관 영구 소장 등)

**v1.2.0** (2025-10-19)
- ✅ 실제 작품 이미지로 전면 교체 (12개 작품)
- ✅ 작가의 "베스트" 및 "기타 괜찮은거" 폴더에서 큐레이션
- ✅ 작품 정보 업데이트 (실제 제목, 연도, 재료, 사이즈)
- ✅ WebP 최적화 (평균 31% 용량 절감)
- ✅ 갤러리 확장 (6개 → 12개 작품)
- ✅ 작품 분류:
  - 기하학적 추상 십장생도 7개
  - 풍경 십장생도 4개
  - 마을/자연 풍경 3개
  - 특별 주제 작품 2개
- ✅ 증거 기반 작품 배치 및 순서 최적화

**v1.1.0** (2025-10-19)
- ✅ 작품 슬라이드 배경 섹션 추가
- ✅ About 이미지 캐러셀 추가
- ✅ 갤러리 더보기/줄이기 버튼 추가
- ✅ News & Updates 섹션 추가
- ✅ Ten Symbols 한자 디자인 개선
- ✅ 연락처 전화번호 업데이트

**v1.0.0** (2025-10-09)
- ✅ 초기 배포
- ✅ 이미지 WebP 최적화
- ✅ 오방색 디자인 완성
- ✅ Vercel 프로덕션 배포
