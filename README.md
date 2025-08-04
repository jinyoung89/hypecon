# HYPECON Website

> **HYPECON WEEK 2025** - 스타일과 트렌드가 만나는 특별한 경험

HYPECON은 K-pop 문화와 스타일을 중심으로 한 글로벌 이벤트입니다. 이 프로젝트는 HYPECON 공식 웹사이트의 소스코드입니다.

## 🌟 프로젝트 개요

- **프레임워크**: React 18 + Vite
- **언어**: JavaScript (ES6+)
- **스타일링**: CSS3 (반응형 디자인)
- **다국어**: 한국어/영어 지원
- **배포**: GitHub Pages
- **도메인**: [www.hypeconweek.com](https://www.hypeconweek.com)

## 🚀 빠른 시작

### 필수 조건
- Node.js 18+ 
- npm 또는 yarn

### 설치 및 실행
```bash
# 저장소 클론
git clone https://github.com/jinyoung89/hypecon.git
cd hypecon-site

# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 미리보기
npm run preview
```

## 📁 프로젝트 구조

```
hypecon-site/
├── 📁 docs/                    # 배포 빌드 파일 (GitHub Pages)
├── 📁 public/                  # 정적 자산
├── 📁 src/
│   ├── 📁 assets/              # 이미지, 동영상, 아이콘
│   │   ├── 📁 images/          # 이미지 파일
│   │   ├── 📁 videos/          # 동영상 파일
│   │   └── 📁 icons/           # SVG 아이콘
│   ├── 📁 components/          # 재사용 컴포넌트
│   │   └── 📁 ui/              # UI 컴포넌트
│   ├── 📁 contexts/            # React Context
│   │   └── LanguageContext.jsx # 다국어 관리
│   ├── 📁 hooks/               # 커스텀 훅
│   ├── 📁 lib/                 # 유틸리티 라이브러리
│   ├── 📁 locales/             # 다국어 번역
│   │   ├── ko.js               # 한국어
│   │   ├── en.js               # 영어
│   │   └── translations.js     # 번역 유틸리티
│   ├── 📁 pages/               # 페이지 컴포넌트
│   │   ├── HomePage.jsx        # 홈페이지
│   │   ├── AwardPage.jsx       # 스타일 어워드
│   │   ├── BrandPage.jsx       # 브랜드 큐레이션
│   │   ├── ExhibitionPage.jsx  # 전시 체험
│   │   ├── BuyerPage.jsx       # 바이어 프로그램
│   │   ├── InfluencerPage.jsx  # 인플루언서 프로그램
│   │   ├── TicketPage.jsx      # 티켓 정보
│   │   ├── AboutPage.jsx       # 소개
│   │   ├── ContactPage.jsx     # 연락처
│   │   └── *.css               # 페이지별 스타일
│   ├── App.jsx                 # 메인 앱 컴포넌트
│   ├── App.css                 # 글로벌 스타일
│   └── main.jsx                # 앱 진입점
├── package.json                # 패키지 설정
├── vite.config.js              # Vite 설정
└── README.md                   # 프로젝트 문서
```

## 🌍 주요 기능

### 📱 **다국어 지원**
- 한국어/영어 실시간 전환
- Context API 기반 상태 관리
- 페이지별 완전 번역 지원

### 🎨 **반응형 디자인**
- 모바일/태블릿/데스크톱 최적화
- `clamp()` 함수 활용한 유동적 타이포그래피
- 모든 해상도 대응 (320px ~ 1920px+)

### 🌐 **페이지 구성**
| 페이지 | 설명 | 주요 기능 |
|--------|------|-----------|
| **Home** | 메인 랜딩 | 히어로 비디오, 티켓 알림 |
| **Style Awards** | 스타일 어워드 | 카테고리, 심사 과정, FAQ |
| **Brand Curation** | 브랜드 큐레이션 | 참여 브랜드, 혜택 |
| **Exhibition** | 전시 체험 | 체험존, 포토존 안내 |
| **Buyer Program** | 바이어 프로그램 | B2B 매칭, 신청 |
| **Influencer** | 인플루언서 | 선정 기준, 혜택 |
| **Ticket** | 티켓 정보 | 가격, 혜택, 예매 방법 |
| **About** | 소개 | HYPECON 개요, 비전 |
| **Contact** | 연락처 | 문의 정보 |


## 🎯 스타일 가이드

### 폰트 시스템
```css
/* 타이틀 폰트 */
font-family: 'Bebas Neue', sans-serif;

/* 한글 우선 */
font-family: "Noto Sans KR", "Noto Sans", "Apple SD Gothic Neo", -apple-system, BlinkMacSystemFont, sans-serif;

/* 영문 우선 */
font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
```

### 색상 팔레트
```css
:root {
  --hypecon-main: #00E5A8;        /* 메인 컬러 */
  --hypecon-yellow: #E1F800;      /* 포인트 컬러 */
  --hypecon-dark: #000000;        /* 다크 */
  --hypecon-white: #FFFFFF;       /* 화이트 */
  --hypecon-gray: #f5f5f7;        /* 그레이 */
}
```

### 반응형 브레이크포인트
- **Mobile**: ~ 767px
- **Tablet**: 768px ~ 1279px  
- **Desktop**: 1280px+

## 🚀 배포

### 자동 배포 (GitHub Pages)
1. `main` 브랜치에 푸시
2. GitHub Actions 자동 실행
3. `docs/` 디렉토리 빌드 및 배포

### 수동 배포
```bash
# 빌드
npm run build

# Git 커밋 및 푸시
git add .
git commit -m "Deploy: 변경사항 설명"
git push origin main
```

---