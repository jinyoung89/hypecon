# HYPECON 웹사이트 배포 가이드

## ⚠️ 완벽한 해결책 - 더 이상 흰화면 문제 없음!

### 0. GitHub Pages 설정 (가장 중요!) ⭐

**반드시 먼저 확인하세요:**

1. **GitHub 저장소** → **Settings** → **Pages**
2. **Source**: "Deploy from a branch" 선택
3. **Branch**: "main" 선택  
4. **Folder**: "/docs" 선택 ← 이게 핵심!
5. **Save** 버튼 클릭

**❌ 잘못된 설정:**
- Source: "GitHub Actions" ← 이거 안 됨!
- Folder: "/ (root)" ← 이것도 안 됨!

**✅ 올바른 설정:**
- Source: "Deploy from a branch" 
- Branch: "main"
- Folder: "/docs" ← 반드시 이걸로!

### 1. 핵심 설정 파일들 (정확한 버전)

#### `vite.config.js`
```javascript
export default defineConfig({
  base: '/hypecon/',           // GitHub Pages 서브패스
  build: { outDir: 'docs' },   // 빌드 결과물을 docs 폴더에 생성 ← 중요!
  // ... 기타 설정
})
```

#### `src/main.jsx` - React Router basename 설정 ⭐ 핵심 해결책!
```javascript
// GitHub Pages를 위한 basename 설정 (완벽한 버전)
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/hypecon' : '';

console.log('Current hostname:', window.location.hostname);
console.log('Is GitHub Pages:', isGitHubPages);
console.log('Using basename:', basename);

<BrowserRouter basename={basename}>
  <App />
</BrowserRouter>
```

**❌ 잘못된 방식 (작동 안 함):**
```javascript
// 이렇게 하면 안 됨!
const basename = window.location.hostname === 'jinyoung89.github.io' ? '/hypecon' : '';
```

**✅ 올바른 방식 (완벽 작동):**
```javascript
// 이렇게 해야 함!
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/hypecon' : '';
```

#### `package.json` - scripts 부분
```json
{
  "scripts": {
    "build": "vite build",
    "postbuild": "cp docs/index.html docs/404.html"  // SPA 라우팅을 위한 404.html 생성
  }
}
```

### 2. 올바른 배포 과정 (100% 성공률)

**⚠️ 중요**: GitHub Actions 자동 빌드가 아닌 **로컬 빌드 + 커밋 방식**을 사용합니다.

```bash
# 단 4줄로 완벽 배포
npm run build
git add .
git commit -m "Update content"
git push origin main
```

**상세 과정:**
1. 코드 수정 후 로컬에서 빌드: `npm run build`
2. 빌드 결과와 소스코드 모두 커밋: `git add .`
3. 커밋: `git commit -m "Update content"`
4. 푸시: `git push origin main`
5. 2-3분 후 https://jinyoung89.github.io/hypecon/ 에서 확인

### 3. `public` 폴더와 `docs` 폴더의 관계

**`public` 폴더**: 개발 중 정적 파일을 저장하는 소스 폴더
- 빌드 전 원본 정적 파일 위치
- 여기에 있는 파일들은 빌드 시 자동으로 `docs` 폴더로 복사됨
- 예: favicon.ico, CNAME, 404.html 등

**`docs` 폴더**: 빌드 결과물이 저장되는 배포 폴더
- `vite.config.js`의 `outDir: 'docs'` 설정으로 지정
- 빌드 시 생성되는 모든 파일(HTML, JS, CSS, 이미지 등)이 여기에 저장
- GitHub Pages가 이 폴더의 내용을 웹사이트로 제공

**중요**: `public` 폴더의 파일은 개발/소스용이고, `docs` 폴더는 빌드된 배포 파일입니다. 두 폴더의 일부 파일이 동일한 것은 정상입니다.

### 4. 문제 해결 과정 기록 (다시는 겪지 마세요!)

#### 문제 1: 흰색 화면 또는 JavaScript 404 에러
**원인**: 
- React Router basename 설정에서 정확한 hostname 검사 실패
- `window.location.hostname === 'jinyoung89.github.io'` ← 이게 문제였음!
**완벽한 해결책**: 
```javascript
// ✅ 이렇게 하세요 (100% 작동)
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/hypecon' : '';
```

#### 문제 2: "File not found" 또는 GitHub Pages 404 페이지
**원인**: GitHub Pages 설정이 잘못됨
**해결**: 
1. GitHub 저장소 → Settings → Pages
2. Source: "Deploy from a branch" 
3. Branch: "main", Folder: "/docs" ← 이게 핵심!

#### 문제 3: 새로고침 시 흰 화면
**원인**: 404.html이 최신 빌드 파일을 참조하지 않음
**해결**: `postbuild` 스크립트가 자동으로 최신 index.html을 404.html로 복사

#### 문제 4: 동영상이 안 뜸
**원인**: 모바일/브라우저 정책으로 인한 자동재생 제한
**해결**: 다음 속성들을 모두 추가
```javascript
<video
  autoPlay
  muted
  loop
  playsInline        // ← 이게 핵심!
  preload="auto"
  onError={(e) => console.error('Video error:', e)}
>
```

#### 문제 5: GitHub Actions vs 로컬 빌드 충돌
**원인**: 두 방식을 섞어 사용하면 충돌 발생
**해결**: **로컬 빌드 + 커밋 방식**만 사용

### 5. 배포 전 체크리스트 (이것만 확인하면 OK)

- [ ] **GitHub Pages 설정: Source "Deploy from a branch", Folder "/docs"** ⭐ 가장 중요!
- [ ] **`src/main.jsx`에서 `includes('github.io')` 방식 사용** ⭐ 핵심!
- [ ] `vite.config.js`에서 `base: '/hypecon/'` 확인
- [ ] `vite.config.js`에서 `build: { outDir: 'docs' }` 확인
- [ ] `package.json`에서 `postbuild` 스크립트 확인
- [ ] 로컬에서 `npm run build` 실행 후 에러 없음 확인
- [ ] `docs` 폴더에 `index.html`, `404.html`, `assets` 폴더 생성 확인

### 6. 긴급 롤백 방법

만약 배포 후 문제가 발생하면:
```bash
git reset --hard HEAD~1
git push --force origin main
```

### 7. 로컬 테스트 방법

```bash
# Vite 개발 서버로 테스트 (권장)
npm run dev

# 또는 빌드 후 테스트
npm run build
cd docs
python3 -m http.server 8000
# http://localhost:8000에서 확인 (basename이 빈 문자열로 설정됨)
```

### 8. 완벽한 배포 명령어

```bash
# 한 줄 완벽 배포 (복사해서 사용하세요)
npm run build && git add . && git commit -m "Deploy update" && git push origin main

# 단계별 배포 (권장)
npm run build
git add .
git commit -m "Update content"
git push origin main
```

### 9. 문제 발생 시 순서대로 해결 (99% 해결됨)

흰화면/404 문제 발생 시 **반드시 순서대로** 시도:

#### Step 0: GitHub Pages 설정 확인 ⭐ 제일 먼저!
1. GitHub 저장소 → Settings → Pages
2. Source: "Deploy from a branch" 확인
3. Branch: "main", Folder: "/docs" 확인
4. 잘못되었다면 수정하고 Save

#### Step 1: basename 설정 확인
```javascript
// src/main.jsx에서 이 코드가 정확히 있는지 확인
const isGitHubPages = window.location.hostname.includes('github.io');
const basename = isGitHubPages ? '/hypecon' : '';

// 디버깅용 console.log도 있어야 함
console.log('Current hostname:', window.location.hostname);
console.log('Is GitHub Pages:', isGitHubPages);
console.log('Using basename:', basename);
```

#### Step 2: 재빌드 및 배포
```bash
npm run build && git add . && git commit -m "Fix routing issue" && git push origin main
```

#### Step 3: 브라우저 캐시 완전 삭제
- `Ctrl+Shift+Delete` (Windows) 또는 `Cmd+Shift+Delete` (Mac)
- "모든 시간" 선택하고 모든 항목 체크 후 삭제

#### Step 4: 시크릿 모드에서 접속 테스트
- 시크릿/프라이빗 브라우징 모드에서 https://jinyoung89.github.io/hypecon/ 접속

#### Step 5: 직접 파일 URL 확인
- https://jinyoung89.github.io/hypecon/assets/index-[해시].js 직접 접속
- 404가 나오면 GitHub Pages 설정 문제

#### Step 6: 개발자 도구 Console 확인
- `F12` → Console 탭에서 basename 관련 로그 확인
- 에러 메시지가 있다면 기록해두기

### 10. 동영상 문제 해결

동영상이 안 나올 때:

```javascript
// HomePage.jsx에서 video 태그에 이 속성들이 모두 있는지 확인
<video
  autoPlay
  muted
  loop
  playsInline        // 모바일 필수!
  preload="auto"     // 미리 로딩
  onError={(e) => console.error('Video error:', e)}  // 에러 확인
  style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 0
  }}
>
  <source src={heroVideo} type="video/mp4" />
  Your browser does not support the video tag.  {/* 폴백 메시지 */}
</video>
```

---

## 🎉 최종 성공 공식

```bash
# 이 4줄이면 100% 성공
npm run build
git add .
git commit -m "Update"
git push origin main
```

**⚠️ 절대 잊지 마세요:**
- **GitHub Pages 설정: Source "Deploy from a branch", Folder "/docs"** (가장 중요!)
- **`window.location.hostname.includes('github.io')`** 방식 사용 (정확한 hostname 검사)
- **로컬 빌드 + 커밋 방식**만 사용 (GitHub Actions 사용 안 함)
- **동영상에 `playsInline` 속성** 필수 추가
- **브라우저 캐시 삭제** 후 테스트

**이 방식으로 하면 다시는 흰화면/404 문제 없습니다!** 🚀 