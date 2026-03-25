# Final Review

## 리뷰 결과
- 발견 이슈:
  - 홈 페이지와 문서 컴포넌트에 framer-motion 패턴이 중복되어 유지보수 비용이 커질 수 있었음
  - `DocItem/Layout`에서 blur 기반 초기 애니메이션이 모든 문서 페이지에 적용되어 hydration/렌더 비용이 불필요하게 높았음
  - 홈 카드/CTA/툴팁에 키보드 focus-visible 대응이 부족했고, 일부 인터랙션이 hover 중심으로 보였음
  - 모바일에서 blur/shadow 강도가 그대로 유지되어 저사양 기기에서 부담 가능성이 있었음
  - `index.tsx`의 `React.CSSProperties` 사용과 `MDXComponents` 타입 선언이 타입 안정성 면에서 깔끔하지 않았음
- 수정 적용:
  - `src/lib/motion.ts`를 추가해 공통 motion variants/transition/hover preset을 상수화
  - `src/pages/index.tsx`를 리팩터링해 중복 섹션 헤더를 통합하고, count-up cleanup/cancel 로직 및 타입 안정성 개선
  - `AnimatedSection`, `StepCard`, `TipBox`, `DocItem/Layout`, `GlossaryTooltip`에 reduced-motion 대응 및 더 안전한 애니메이션 패턴 적용
  - `GlossaryTooltip`를 버튼 기반 트리거 + tooltip id 연결 구조로 바꿔 a11y 개선
  - `MDXComponents.tsx` 타입 선언을 `satisfies MDXComponentsObject`로 정리
- 성능 최적화:
  - 모바일 breakpoint에서 homepage blur 강도를 단계적으로 낮추고 orb blur도 완화
  - `prefers-reduced-motion: reduce`일 때 CSS animation/transition/hover transform 비활성화
  - 문서 페이지 레이아웃 애니메이션에서 blur 필터 제거, 이동 거리 축소
  - hover lift 효과를 과하지 않게 줄이고 motion preset을 공통화해 초기 애니메이션 강도 축소
- 접근성 개선:
  - 전역 `:focus-visible` 스타일 및 주요 링크/버튼/탐색 요소 focus ring 추가
  - 카드/CTA에 `:focus-within` 스타일 추가
  - hover 전용 정보 노출이던 용어 툴팁을 focus/aria-describedby 기반으로 개선
  - 터치 대상 버튼은 모바일에서 최소 높이 유지
- 남은 권장사항:
  - Docusaurus 3.7.0 → 3.9.x 업그레이드 검토
  - Pretendard CDN `@import`는 render-blocking 우려가 있으므로 추후 self-host 또는 preload 전략 검토
  - 홈 페이지 카드 자체 전체 클릭 UX가 필요하다면 `article + Link` 구조를 명시적으로 재설계하는 것이 좋음
  - 문서 전반의 반복 문장/섹션 템플릿은 후속 콘텐츠 편집 단계에서 한 번 더 다듬으면 완성도가 더 올라감

## 검증
- 문서 샘플링 확인:
  - `docs/start/getting-started.md`
  - `docs/gateway/api.md`
  - `docs/channels/telegram.md`
  - `docs/concepts/architecture.md`
  - `docs/platforms/mobile.md`
  - `docs/providers/openai.md`
  - `docs/help/faq.md`
- 결과:
  - `:::tip` / admonition 문법 샘플 구간 이상 없음
  - MDXComponents override와 문서 문법 충돌 징후 없음
  - `npm run typecheck` 성공
  - `npm run build` 성공
  - `build/index.html`, `build/channels/index.html`, `build/gateway/index.html` 등 산출 확인 완료
