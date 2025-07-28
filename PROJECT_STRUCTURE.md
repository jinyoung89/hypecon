# HYPECON 웹사이트 프로젝트 구조

## 프로젝트 개요
HYPECON 웹사이트는 Vite와 React를 사용하여 구축된 SPA(Single Page Application)입니다. 이 웹사이트는 GitHub Pages를 통해 배포되며, 다국어 지원(한국어/영어)을 제공합니다.

## 디렉토리 구조

```
hypecon-site/
├── docs/                  # 빌드 결과물 (GitHub Pages 배포용)
├── public/                # 정적 파일
│   ├── CNAME             # 커스텀 도메인 설정 (www.hypeconweek.com)
│   └── ...
├── src/                   # 소스 코드
│   ├── assets/            # 이미지, 비디오 등 미디어 파일
│   ├── components/        # 재사용 가능한 React 컴포넌트
│   ├── contexts/          # React Context API를 사용한 상태 관리
│   │   └── LanguageContext.jsx  # 다국어 지원을 위한 컨텍스트
│   ├── locales/           # 다국어 지원을 위한 번역 파일
│   │   ├── en.js          # 영어 번역
│   │   ├── ko.js          # 한국어 번역
│   │   └── translations.js # 번역 유틸리티 함수
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── AboutPage.jsx  # 소개 페이지
│   │   ├── AwardPage.jsx  # 어워드 페이지
│   │   ├── BrandPage.jsx  # 브랜드 페이지
│   │   ├── ContactPage.jsx # 연락처 페이지
│   │   ├── ExperiencePage.jsx # 경험 페이지
│   │   ├── HomePage.jsx   # 홈 페이지
│   │   └── *.css          # 페이지별 스타일시트
│   ├── App.css            # 글로벌 스타일
│   ├── App.jsx            # 메인 앱 컴포넌트
│   └── main.jsx           # 앱 진입점 (React Router 설정 포함)
├── .github/               # GitHub Actions 워크플로우
├── DEPLOYMENT.md          # 배포 가이드
├── index.html             # HTML 템플릿
├── package.json           # 프로젝트 메타데이터 및 의존성
├── vite.config.js         # Vite 설정
└── README.md              # 프로젝트 문서
```

## 주요 기능 및 구현

### 다국어 지원 (i18n)
- `LanguageContext.jsx`: 언어 전환 및 현재 언어 상태 관리
- `locales/`: 한국어(`ko.js`)와 영어(`en.js`) 번역 파일
- `translations.js`: 번역 키를 통해 텍스트를 가져오는 유틸리티 함수

### 라우팅
- React Router를 사용하여 SPA 라우팅 구현
- GitHub Pages 배포를 위한 `basename` 설정

### 페이지
- **홈페이지**: 메인 랜딩 페이지, 비디오 배경, 티켓 알림 및 등록 버튼
- **어워드 페이지**: 스타일 어워드 정보, 카테고리, 선정 과정, 혜택, FAQ
- **브랜드 페이지**: 브랜드 참여 정보 및 혜택
- **경험 페이지**: 행사 경험 및 활동 소개
- **소개 페이지**: HYPECON에 대한 소개
- **연락처 페이지**: 문의 정보 및 연락처

### 외부 링크 연동
- 인플루언서 등록: Google Forms 링크
- 바이어/프레스 등록: Google Forms 링크
- 티켓 오픈 알림 신청: Google Forms 링크

### 반응형 디자인
- 모바일 및 데스크톱 뷰 최적화
- `clamp()` 함수를 사용한 유동적인 타이포그래피 및 레이아웃

## 배포 프로세스
1. `npm run build` 명령으로 `docs/` 디렉토리에 빌드
2. 빌드 후 자동으로 `docs/404.html` 생성 (SPA 라우팅 지원)
3. Git을 통해 변경사항 커밋 및 푸시
4. GitHub Pages가 `docs/` 디렉토리의 내용을 배포

## 커스텀 도메인
- `www.hypeconweek.com` 도메인 사용
- `CNAME` 파일을 통해 GitHub Pages와 연결
