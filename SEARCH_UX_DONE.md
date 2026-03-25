# SEARCH_UX_DONE

## 1. 조사 결과: Docusaurus 3.7 검색 옵션

### 사실
- 현재 프로젝트는 `@docusaurus/core` / `@docusaurus/preset-classic` `3.7.0` 기반이다.
- Docusaurus 공식 문서 기준 검색 옵션은 크게 4가지다.
  1. **Algolia DocSearch**: Docusaurus의 공식 1st-party 지원
  2. **Typesense DocSearch**: 커뮤니티 옵션
  3. **Local Search**: 커뮤니티 플러그인/테마 기반
  4. **Custom SearchBar**: 직접 구현
- 이 프로젝트는 기존에 검색 설정이 없었고, navbar에도 검색 아이템이 없었다.
- 현재 사이트는 docs-only 모드(`routeBasePath: '/'`)라서, 검색 접근성이 더 중요하다. 사용자가 문서를 탐색하다가 길을 잃기 쉽기 때문이다.

### 해석
- **가장 안정적인 장기안**은 Algolia다.
- 하지만 지금 단계에서 **가장 가볍고 바로 적용 가능한 현실안**은 로컬 검색이다.
- 검색 기능 자체뿐 아니라, **"검색이 있다는 걸 사용자가 눈치채게 하는 UX"**가 핵심 문제였다.

---

## 2. 옵션 분류

### A. 로컬 검색(즉시 적용 가능)
채택안: `@easyops-cn/docusaurus-search-local`

#### 채택 이유
- Docusaurus v3 지원이 명시되어 있음
- 서버/외부 크롤러 없이 정적 빌드에 검색 인덱스를 포함할 수 있음
- docs-only 모드에서도 사용 가능
- `Ctrl/⌘ + K` 단축키, 결과 하이라이트, navbar 검색 UI를 제공함
- 지금 프로젝트 규모에서 충분히 가볍고 운영 부담이 적음

#### 적용 범위
- 패키지 설치
- Docusaurus theme 등록
- navbar 검색 버튼 노출
- 문서 페이지 검색 결과 하이라이트 활성화
- 홈/상단에서 검색 진입 안내 추가

### B. Algolia 스타일(설계 권장안)
현재는 **설계만 권장**, 즉시 적용은 보류.

#### 권장 상황
- 문서량이 크게 늘어남
- 다국어/버전별 문서 운영이 커짐
- 검색 품질(랭킹, typo tolerance, analytics)이 중요해짐
- 검색 페이지/검색 경험을 더 제품 수준으로 키우고 싶음

#### 설계 메모
- Docusaurus classic preset은 `themeConfig.algolia`를 통해 공식 연동 가능
- 배포 URL과 sitemap이 이미 있어 기본 구조는 나쁘지 않음
- 추후 필요한 값:
  - `appId`
  - `apiKey`
  - `indexName`
  - optional `contextualSearch`, `searchPagePath`

#### 판단
- 지금은 과함
- docs MVP 단계에서는 운영 복잡도 대비 이득이 크지 않음

### C. 문서 내 빠른 탐색 UX 개선
즉시 효과가 크고, 검색 솔루션과 별개로 계속 유효한 보완책.

#### 적용/권장 항목
- navbar에 검색 버튼을 확실히 노출
- 상단 announcement bar로 검색 단축키 안내
- 홈 히어로 영역에 검색 진입 힌트 추가
- 검색 결과 도착 페이지에서 검색어 하이라이트 활성화

#### 추가 권장(이번엔 미적용)
- 주요 섹션 첫 문단 아래에 "이 문서에서 자주 찾는 키워드" 블록
- 큰 카테고리 랜딩 페이지에 "무엇을 찾고 있나요?" 퀵 링크
- 모바일에서 검색 버튼 대비 강화

---

## 3. 실제 적용한 변경

### 3-1. 로컬 검색 추가
- 패키지 설치: `@easyops-cn/docusaurus-search-local@0.55.1`
- `docusaurus.config.ts`에 theme 등록
- docs-only 모드에 맞게 `docsRouteBasePath: '/'` 설정
- `indexDocs: true`, `indexPages: true`, `indexBlog: false`
- `highlightSearchTermsOnTargetPage: true`
- `searchResultLimits: 8`
- `explicitSearchResultPath: true`
- `searchBarPosition: 'right'`
- `searchBarShortcut: true`
- `searchBarShortcutHint: true`

### 3-2. 검색 진입 UX 개선
- navbar에 `type: 'search'` 추가
- 상단 announcement bar에 검색 안내 문구 추가
- 홈 히어로 아래에 검색 힌트 카드 추가
  - 상단 검색 버튼 안내
  - `Ctrl/⌘ + K` 단축키 안내
  - 예시 검색어 제안

### 3-3. 왜 이 조합이 좋은가
- 검색 기능을 넣는 것만으로는 부족하다.
- 사용자는 **검색창이 있는지 몰라서 못 쓰는 경우**가 많다.
- 그래서 이번 변경은
  1. 검색 기능 자체 제공
  2. 검색 진입점 노출
  3. 검색 사용법 교육
  4. 검색 결과 도착 후 하이라이트
  를 한 번에 해결하는 구조다.

---

## 4. 빌드/안정성 관점 평가

### 장점
- 외부 SaaS 의존성이 없음
- 정적 사이트 배포와 잘 맞음
- 운영 비용이 거의 없음
- 지금 문서량에서는 충분히 빠를 가능성이 높음

### 한계
- Algolia 대비 검색 정교함/분석/운영 기능은 약함
- 문서량이 매우 커지면 인덱스 크기와 성능을 다시 점검해야 함
- 검색 품질은 문서 제목/헤딩/본문 구조 품질에 영향을 받음

### 권고
- 현재 단계: **로컬 검색 유지**
- 문서가 본격 확장되면: **Algolia DocSearch로 전환 검토**

---

## 5. 적용 파일
- `package.json`
- `package-lock.json`
- `docusaurus.config.ts`
- `src/pages/index.tsx`
- `src/pages/index.module.css`

---

## 6. 최종 결론

### 결론
이번 프로젝트에는 **Algolia보다 로컬 검색이 더 맞다.**

이유는 간단하다.
- 지금은 문서 검색의 "절대 품질"보다
- 사용자가 **검색을 발견하고 바로 쓰게 만드는 것**이 더 중요하기 때문이다.

그래서 이번 작업은
- **로컬 검색 기능 추가**
- **검색 버튼 노출**
- **단축키 안내**
- **홈 검색 CTA 보강**
을 묶어서 적용했다.

이 정도면 현재 Docusaurus 3.7 환경에서 **가볍고 안정적으로 체감 효과가 큰 검색 UX 개선안**으로 적절하다.
