# LANDING_TUTORIAL_DONE

완료 시각: 2026-03-26 KST

## 수행 내용
- `src/pages/index.tsx`, `src/pages/index.module.css` 랜딩 개편
- 빠른 시작 3단계 섹션 추가
- 사용자 상황별 경로 선택 UI 추가
  - 나는 처음이다
  - 이미 설치했다
  - 내 환경이 헷갈린다
- 신규 컴포넌트 추가
  - `src/components/QuickStartSteps.tsx`
  - `src/components/PersonaPathCard.tsx`
  - `src/components/FeatureRibbon.tsx`
- 문서 상단 튜토리얼형 안내 블록 추가
  - `docs/start/getting-started.md`
  - `docs/install/index.md`
- `npm run build` 성공 확인

## 비고
기존 글래스/그라디언트 중심 디자인 톤은 유지하면서, 랜딩에서 바로 다음 행동을 고를 수 있도록 입문 UX를 강화했습니다.
