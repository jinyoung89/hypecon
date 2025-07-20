# HYPECON 웹사이트 배포 가이드

## 배포 설정 요약

### 1. 핵심 설정 파일들

#### `vite.config.js`
```javascript
export default defineConfig({
  base: '/hypecon/',           // GitHub Pages 서브패스
  build: { outDir: 'docs' },   // 빌드 결과물을 docs 폴더에 생성
  // ... 기타 설정
})
```

#### `src/main.jsx` - React Router basename 설정 ⭐ 중요!
```javascript
// GitHub Pages를 위한 basename 설정
const basename = window.location.hostname === 'jinyoung89.github.io' ? '/hypecon' : '';

<BrowserRouter basename={basename}>
  <App />
</BrowserRouter>
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

### 2. 올바른 배포 과정

**⚠️ 중요**: GitHub Actions 자동 빌드가 아닌 **로컬 빌드 + 커밋 방식**을 사용합니다.

1. 코드 수정 후 로컬에서 빌드: `npm run build`
2. 빌드 결과와 소스코드 모두 커밋: `git add .`
3. 커밋: `git commit -m "Update content"`
4. 푸시: `git push origin main`
5. 2-3분 후 https://jinyoung89.github.io/hypecon/ 에서 확인

### 3. 자주 발생하는 문제와 해결방법

#### 문제 1: 흰색 화면 또는 JavaScript 에러
**원인**: 
- React Router basename 설정 문제가 가장 흔한 원인
- 조건부 basename 설정이 누락됨
**해결**: 
```javascript
// src/main.jsx에서 조건부 basename 설정 확인
const basename = window.location.hostname === 'jinyoung89.github.io' ? '/hypecon' : '';
```

#### 문제 2: 로컬 테스트 시 흰 화면
**원인**: 로컬 서버에서는 `/hypecon/` 경로가 존재하지 않음
**해결**: 위의 조건부 basename 설정으로 해결됨 (로컬에서는 빈 문자열 사용)

#### 문제 3: 라우팅 404 에러 (페이지 새로고침 시)
**원인**: SPA 라우팅을 위한 404.html이 없음
**해결**: `postbuild` 스크립트가 자동으로 생성하므로 빌드 재실행

#### 문제 4: GitHub Actions vs 로컬 빌드 충돌
**원인**: GitHub Actions 자동 빌드와 로컬 빌드 결과가 충돌
**해결**: **로컬 빌드 + 커밋 방식**을 일관되게 사용

### 4. 배포 전 체크리스트

- [ ] `vite.config.js`에서 `base: '/hypecon/'` 확인
- [ ] `vite.config.js`에서 `build: { outDir: 'docs' }` 확인
- [ ] **`src/main.jsx`에서 조건부 basename 설정 확인** ⭐ 핵심!
- [ ] `package.json`에서 `postbuild` 스크립트 확인
- [ ] 로컬에서 `npm run build` 실행 후 에러 없음 확인
- [ ] `docs` 폴더에 `index.html`, `404.html`, `assets` 폴더 생성 확인

### 5. 긴급 롤백 방법

만약 배포 후 문제가 발생하면:
1. 이전 커밋으로 되돌리기: `git reset --hard HEAD~1`
2. 강제 푸시: `git push --force origin main`

### 6. 로컬 테스트 방법

**주의**: 조건부 basename 설정으로 인해 로컬 테스트가 가능합니다.

```bash
npm run build
cd docs
python3 -m http.server 8000
# http://localhost:8000에서 확인 (basename이 빈 문자열로 설정됨)
```

### 7. 올바른 배포 명령어

```bash
# 전체 배포 과정 (권장)
npm run build
git add .
git commit -m "Update content"
git push origin main

# 빠른 배포 (한 줄)
npm run build && git add . && git commit -m "Update content" && git push origin main
```

### 8. 문제 해결 순서

흰화면 문제 발생 시 순서대로 시도:

1. **조건부 basename 확인**
```javascript
// src/main.jsx에서 이 코드가 있는지 확인
const basename = window.location.hostname === 'jinyoung89.github.io' ? '/hypecon' : '';
```

2. **재빌드 및 배포**
```bash
npm run build && git add . && git commit -m "Fix routing issue" && git push origin main
```

3. **브라우저 캐시 지우기** (Ctrl+Shift+Delete)

4. **시크릿 모드에서 접속 테스트**

5. **개발자 도구 Console에서 에러 확인**

---

**⚠️ 중요 사항**: 
- GitHub Actions 자동 빌드는 사용하지 않습니다
- 항상 로컬에서 빌드 후 `docs` 폴더를 커밋합니다
- 조건부 basename 설정이 핵심입니다
- 이 방식이 가장 안정적으로 작동합니다 