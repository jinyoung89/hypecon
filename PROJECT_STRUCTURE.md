# HYPECON 프로젝트 구조 및 개발 가이드

## 프로젝트 구조

현재 프로젝트는 다음과 같은 구조로 되어 있습니다:

```
/Users/jinyoung/Desktop/HYPECON_Source_Code/
  └── hypecon-site/                  # 외부 폴더 (사용하지 않음)
      ├── vite.config.js             # 외부 vite 설정 (사용하지 않음)
      └── hypecon-website/           # 실제 프로젝트 폴더 ⭐️
          ├── vite.config.js         # 실제 프로젝트의 vite 설정
          ├── src/                   # 소스 코드
          ├── public/                # 정적 파일
          ├── package.json           # 의존성 정보
          └── ...
```

## ⚠️ 중요: 작업 디렉토리

모든 개발 작업은 **반드시 `hypecon-website` 디렉토리에서만** 진행해야 합니다.
상위 폴더인 `hypecon-site`에서 작업하면 의존성 문제가 발생합니다.

## 개발 서버 실행 방법

```bash
# 올바른 디렉토리로 이동
cd /Users/jinyoung/Desktop/HYPECON_Source_Code/hypecon-site/hypecon-website

# 개발 서버 실행
npm run dev
```

## 개발 서버 접속 주소

- 개발 환경: http://localhost:5173/
- 배포 환경: https://[username].github.io/hypecon/

## 배포 방법

배포 방법은 `DEPLOYMENT.md` 파일을 참조하세요.

## 문제 해결

### 포트 충돌이 발생하는 경우

여러 개의 vite 서버가 실행 중일 수 있습니다. 다음 명령어로 모든 vite 서버를 종료한 후 다시 시작하세요:

```bash
# 모든 vite 서버 종료
pkill -f vite

# 올바른 디렉토리에서 서버 재시작
cd /Users/jinyoung/Desktop/HYPECON_Source_Code/hypecon-site/hypecon-website
npm run dev
```

### 의존성 문제가 발생하는 경우

```bash
# 올바른 디렉토리에서 의존성 설치
cd /Users/jinyoung/Desktop/HYPECON_Source_Code/hypecon-site/hypecon-website
npm install --legacy-peer-deps
```

## CSS 변수 및 스타일 가이드

프로젝트에서 사용하는 주요 CSS 변수:

```css
:root {
  --hypecon-main: #00E5A8;   /* 메인 컬러 */
  --hypecon-dark: #000000;   /* 다크 컬러 */
  --hypecon-white: #FFFFFF;  /* 화이트 컬러 */
  --hypecon-pink: #E447AF;   /* 핑크 컬러 */
  --hypecon-teal: #00E5A8;   /* 틸 컬러 */
}
```

## 폰트 사용 가이드

- 한글: Noto Sans CJK KR
- 영문 제목: Bebas Neue, Montserrat
- 영문 본문: Montserrat 