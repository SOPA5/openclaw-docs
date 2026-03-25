# LEARNING_PROGRESS_DONE

## 목표
문서 전반에 재사용 가능한 시각 카드/인포그래픽 패턴과 학습 진도 시스템을 설계하고, 샘플 문서에 안전하게 반영한다.

## 이번 작업에서 추가한 패턴
- `ProgressPill`: Beginner / Core / Advanced 단계 + 현재 문서 진도 표시
- `LearningPath`: 현재 문서 위치, 이전/다음 추천 문서 경로 시각화
- `InfoCard`: 핵심 설명/역할/왜 중요한지 강조 카드
- `ComparisonGrid`: A/B 또는 필수/선택 비교 카드
- 기존 `StepCard`, `TipBox`와 조합 가능한 구조로 유지

## 패턴 설계 원칙
1. MDX 문서 안에서 바로 사용할 수 있어야 함
2. 인라인 스타일 중심으로 빌드 안정성 우선
3. 글로벌 CSS 의존 최소화 (`glass-card`, `brand-gradient` 정도만 재사용)
4. 모든 문서에 일괄 적용하지 않고, 샘플 반영 후 확장 가능한 구조로 설계

## 수정한 파일
### 컴포넌트
- `src/components/ProgressPill.tsx`
- `src/components/LearningPath.tsx`
- `src/components/InfoCard.tsx`
- `src/components/ComparisonGrid.tsx`
- `src/theme/MDXComponents.tsx` (MDX 전역 등록)

### 샘플 적용 문서
- `docs/start/getting-started.md`
- `docs/install/index.md`
- `docs/concepts/features.md`
- `docs/tools/index.md`
- `docs/channels/index.md`

## 샘플 반영 방식
- 각 문서 상단에 `ProgressPill`로 현재 학습 단계 표시
- 문서 성격에 맞는 `InfoCard` 배치
- `LearningPath`로 이전/현재/다음 문서 흐름 명확화
- 필요한 문서에 `ComparisonGrid`로 선택 기준 시각화
- 절차형 문서에는 기존 `StepCard` 유지/강화

## 문서별 단계 예시
- `시작하기`: Beginner / 20%
- `설치 개요`: Beginner / 35%
- `채널 개요`: Core / 48%
- `기능`: Core / 60%
- `도구 개요`: Core / 72%

## 기대 효과
- 사용자가 “지금 내가 어디까지 왔는지” 직관적으로 파악 가능
- 다음에 읽을 문서를 바로 클릭할 수 있어 학습 흐름이 끊기지 않음
- 텍스트 벽을 줄이고 핵심 정보의 위계가 명확해짐
- 다른 문서에도 같은 패턴을 낮은 비용으로 확장 가능

## 주의 / 확장 포인트
- 현재는 샘플 5개만 적용했으며, 전체 57개 문서 일괄 적용은 하지 않음
- 이후 확장 시 문서 카테고리별 기본 진도 규칙(Beginner/Core/Advanced)만 정하면 빠르게 확산 가능
- 필요하면 다음 단계에서 `DocHeaderMeta`, `NextDocCard`, `ChecklistCard` 같은 추가 컴포넌트도 설계 가능
