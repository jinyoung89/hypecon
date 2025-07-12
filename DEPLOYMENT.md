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

#### `package.json` - scripts 부분
```json
{
  "scripts": {
    "build": "vite build",
    "postbuild": "cp docs/index.html docs/404.html"  // SPA 라우팅을 위한 404.html 생성
  }
}
```

#### `.github/workflows/deploy.yml` - 중요한 부분
```yaml
- name: Upload artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: './docs'  # 반드시 docs 폴더를 참조해야 함
```

### 2. 배포 과정

1. 코드 수정 후 커밋
2. `npm run build` 실행 (로컬에서 테스트용)
3. `git push origin main` 실행
4. GitHub Actions 자동 실행 (2-3분 소요)
5. https://jinyoung89.github.io/hypecon/ 에서 확인

### 3. 자주 발생하는 문제와 해결방법

#### 문제 1: 흰색 화면 또는 `/src/main.jsx` 404 에러
**원인**: 개발용 `index.html`이 배포되었거나 빌드되지 않은 파일이 참조됨
**해결**: 
- `npm run build` 재실행
- 브라우저 캐시 지우기 (Ctrl+Shift+Delete)
- 시크릿 모드에서 접속 테스트

#### 문제 2: GitHub Actions에서 "dist: Cannot open: No such file or directory"
**원인**: 워크플로우가 `dist` 폴더를 찾지만 실제로는 `docs` 폴더에 빌드됨
**해결**: `.github/workflows/deploy.yml`에서 `path: './docs'`로 수정

#### 문제 3: 라우팅 404 에러 (페이지 새로고침 시)
**원인**: SPA 라우팅을 위한 404.html이 없음
**해결**: `postbuild` 스크립트가 자동으로 생성하므로 빌드 재실행

### 4. 배포 전 체크리스트

- [ ] `vite.config.js`에서 `base: '/hypecon/'` 확인
- [ ] `vite.config.js`에서 `build: { outDir: 'docs' }` 확인
- [ ] `package.json`에서 `postbuild` 스크립트 확인
- [ ] `.github/workflows/deploy.yml`에서 `path: './docs'` 확인
- [ ] 로컬에서 `npm run build` 테스트
- [ ] `docs` 폴더에 `index.html`, `404.html`, `assets` 폴더 생성 확인

### 5. 긴급 롤백 방법

만약 배포 후 문제가 발생하면:
1. 이전 커밋으로 되돌리기: `git reset --hard HEAD~1`
2. 강제 푸시: `git push --force origin main`
3. 또는 GitHub에서 이전 성공한 워크플로우 재실행

### 6. 로컬 테스트 방법

배포 전 로컬에서 테스트하려면:
```bash
npm run build
cd docs
python3 -m http.server 8000
# http://localhost:8000에서 확인
```

### 7. 빠른 명령어 모음

```bash
# 전체 배포 과정
npm run build
git add .
git commit -m "Update content"
git push origin main

# 로컬 테스트
npm run build && cd docs && python3 -m http.server 8000

# 캐시 문제 해결
# 브라우저에서 Ctrl+Shift+Delete (캐시 지우기)
# 또는 시크릿 모드에서 접속
```

---

**⚠️ 중요**: 이 설정들을 변경할 때는 반드시 이 문서도 함께 업데이트하세요! 