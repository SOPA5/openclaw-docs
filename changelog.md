# changelog

## 2026-03-26 (개념 문서 3종 추가: Skills / Multi-agent / Memory Compaction)

### P1 — 개념 학습 문서 확장
- **problem**: concepts 섹션에 스킬 시스템, 멀티 에이전트 구조, 메모리 컴팩션을 설명하는 전용 문서가 없어 초보 사용자가 핵심 개념을 연결해서 이해하기 어려웠습니다.
- **cause**: 기존 문서가 에이전트, 세션, 메모리의 기본 개념까지만 다루고 있었고, 실제 운영에서 자주 쓰는 skills / multi-agent / compaction 설명이 별도 페이지로 분리되지 않았습니다.
- **fix**:
  - `docs/concepts/skills.md` 신규 생성 — 스킬 개념, ClawHub, 설치/목록 명령, `SKILL.md` + YAML frontmatter, workspace skills vs ClawHub skills, 실전 예시 추가
  - `docs/concepts/multi-agent.md` 신규 생성 — 멀티 에이전트 필요성, `openclaw agents list`, `openclaw agents add`, workspace 격리, main vs worker 라우팅, `sessions_spawn`, ACP 런타임, 실전 팀 구조 추가
  - `docs/concepts/memory-compaction.md` 신규 생성 — 세션 메모리, `MEMORY.md`, `memory/*.md`, 컴팩션 개념, `mode`, `model`, `reserveTokensFloor`, memory flush, 장기 기억 팁 추가
  - `sidebars.ts` 업데이트 — 새 문서 3개를 에이전트 섹션에 노출
- **effect**: 사용자가 OpenClaw의 학습 흐름에서 "스킬로 능력 확장 → 여러 에이전트로 역할 분담 → 긴 대화는 메모리와 컴팩션으로 유지"라는 큰 그림을 더 쉽게 이해할 수 있게 되었습니다.
- **verification**:
  - `docs/concepts/skills.md` 생성 확인
  - `docs/concepts/multi-agent.md` 생성 확인
  - `docs/concepts/memory-compaction.md` 생성 확인
  - `sidebars.ts`에 새 문서 3개 연결 확인

## 2026-03-26 (P0 설치 명령 정렬 + Node 버전 + Docker 문서)

### P0 — 설치 명령 공식 기준 정렬 + Node.js 버전 + Docker 문서 개선
- **problem**: 모든 설치 문서에서 `curl -fsSL https://openclaw.ai/install.sh | bash`가 1순위로 도시되었으나, 공식 README 기준은 `npm install -g openclaw@latest`이 기본 방법입니다. 또한 Node.js 최소 버전이 `22.16+`로 표시되었으나 공식 기준은 `22.16+`입니다. Docker 문서는 성공 확인 박스가 누락되어 있었습니다.
- **cause**: install.sh 스크립트의 실제 존재 여부가 불확실한 상태에서 보조 방법이 주방법으로 게시되었고, Node 버전과 Docker 문서도 장기간 갱신이 누락되었습니다.
- **fix**:
  - **설치 명령 정렬** (전체 7개 파일): `npm install -g openclaw@latest`를 1순위로 올리고, `install.sh`는 "공식 스크립트가 제공되는 경우"라는 조건부 안내로 변경
  - **Node.js 버전**: `22.16+` → `22.16+` 전체 문서 전환
  - **설치 검증 3단계 통일**: `openclaw --version` + `openclaw doctor` + `openclaw gateway status` 순서를 모든 설치 관련 문서에 추가
  - **Docker 문서**: 성공 확인 박스(3단계), healthcheck, `unless-stopped` restart 정책, 실제 compose 환경변수 추가
- **effect**: 사용자가 공식 README와 일치하는 방법으로 설치할 수 있고, install.sh가 제공되지 않는 경우 혁동이 없어집니다. Docker 사용자가 성공 여부를 명확히 확인할 수 있습니다.
- **verification**:
  - 수정된 7개 파일 전체에서 22.16 문자열 없음 확인
  - `npm install -g openclaw@latest` 행이 모든 설치 파일에서 1순위로 도시됨
  - 설치 검증 3단계가 7개 파일 전체에 포함됨
  - Docker 데모 compose + 성공 확인 복스 확인

### 수정 파일 목록
- `docs/install/index.md` — 설치 명령 순위 재정렬, Node 22.16+, 검증 3단계 추가
- `docs/install/installer.md` — npm 직접 설치 1순위 승격, Node 22.16+, 검증 복스
- `docs/install/docker.md` — compose 환경변수/빜륨 마운트 최신화, 성공 확인 3단계 추가
- `docs/platforms/macos.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/platforms/linux.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/platforms/windows.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/gateway/index.md` — npm 1순위, 검증 3단계 추가
- `docs/start/onboarding.md` — CLI 설치 스펙에 검증 3단계 추가
- `docs/help/faq.md` — Node 22.16+ 로 버전 표현 수정

## 2026-03-26

### P0 — Discord intents, mobile pairing docs, feedback link verification
- **problem**: Discord 문서에 Privileged Gateway Intents 필수 설정 안내가 빠져 있었고, 모바일 문서에는 현재 CLI에 없는 `openclaw nodes pair` 명령이 남아 있었습니다. 또 여러 문서의 feedback 링크가 `pathname:///feedback` 형태라 실제 동작 여부 확인이 필요했습니다.
- **cause**: 문서가 예전 연결 흐름을 일부 유지하고 있었고, docs 내부에서 pages 경로를 참조하는 링크 규칙 검증이 누락되어 있었습니다.
- **fix**:
  - `docs/channels/discord.md`에 **Message Content Intent**, **Server Members Intent**, Developer Portal 경로, 그룹 메시지 수신 불가 경고를 추가했습니다.
  - `docs/platforms/mobile.md`에서 잘못된 `openclaw nodes pair`를 제거하고, 현재 CLI 기준의 `openclaw devices list` → `openclaw devices approve <requestId>` → `openclaw nodes status` 흐름으로 수정했습니다.
  - `pathname:///feedback` 링크는 빌드 산출물에서 `/feedback`으로 정상 변환되는 것을 확인해 기존 링크를 유지했습니다.
- **effect**: Discord 서버 연결 실패 원인을 더 빨리 찾을 수 있고, 모바일 페어링 문서가 현재 OpenClaw CLI와 맞게 동작합니다. feedback 링크도 docs 내부에서 안전하게 유지됩니다.
- **verification**:
  - `openclaw help`, `openclaw devices --help`, `openclaw qr --help`, `openclaw nodes --help`로 현재 CLI 흐름 확인
  - 기존 build 산출물과 최종 빌드에서 `pathname:///feedback`가 `/feedback`으로 렌더링되는지 확인
  - `npm run build` 통과 확인

### P1 — 학습 메타 차별화 + 반복 안심 문구 정리 + 게이트웨이 제어 평면 설명 보강
- **problem**: 많은 문서가 같은 학습 메타 문구를 반복했고, `걱정하지 마세요` 문구도 여러 페이지에 똑같이 들어가 있어 문서별 개성이 약했습니다. 또한 게이트웨이가 전체 구조에서 맡는 **제어 평면(control plane)** 역할이 아키텍처 문서와 게이트웨이 문서에서 충분히 선명하지 않았습니다.
- **cause**: 학습 UX 개편 때 공통 템플릿이 넓게 적용되면서 문서별 목적/난이도/환경 차이가 충분히 반영되지 않았고, 안심 문구도 일괄 삽입된 상태로 남아 있었습니다.
- **fix**:
  - 학습 메타 테이블이 있는 **51개 문서**의 `현재 단계`를 `Beginner / Intermediate / Advanced`로 정규화하고, 각 문서에 맞는 **읽는 목적** 문구로 개별화했습니다.
  - `추천 환경`은 실제 차이가 있는 설치/플랫폼/특정 운영 문서에만 구체적으로 남기고, 나머지는 `-`로 정리했습니다.
  - 전체 문서에서 `걱정하지 마세요` 반복 문구를 검색해, 필요한 곳은 더 구체적인 표현으로 바꾸고 제목도 자연스럽게 손봤습니다.
  - `docs/concepts/architecture.md`, `docs/gateway/index.md`에 Gateway를 **제어 평면(control plane)** 으로 설명하는 문단과 텍스트 다이어그램을 추가했습니다.
  - `/install/node` 경로는 문서와 사이드바에서 검색했지만 실제 참조가 없어 수정 사항 없음으로 확인했습니다.
- **effect**: 각 문서가 더 분명한 학습 목적을 갖게 되었고, 같은 문장을 계속 보는 느낌이 줄었습니다. 또한 사용자가 Gateway를 단순 통로가 아니라 **채널·세션·도구를 통합 관리하는 중심**으로 더 쉽게 이해할 수 있게 되었습니다.
- **verification**:
  - `rg -n '걱정하지 마세요|/install/node' docs -S` 결과 없음 확인
  - 메타 테이블 포함 문서 51개에서 stage 값이 `Beginner / Intermediate / Advanced`만 남았는지 확인
  - `npm run build` 통과 확인 예정

### 수정 파일 범위
- `docs/channels/*.md` 12개 — 학습 메타 차별화, 반복 안심 문구 정리
- `docs/concepts/*.md` 7개 — 학습 메타 차별화, architecture 제어 평면 설명 추가
- `docs/gateway/*.md` 6개 — 학습 메타 차별화, gateway/index 제어 평면 설명 추가
- `docs/help/faq.md` — 학습 메타 차별화, 반복 안심 문구 정리
- `docs/install/*.md` 6개 — 학습 메타 차별화, 설치 문맥별 환경 정보 정리
- `docs/platforms/*.md` 4개 — 학습 메타 차별화, 모바일 안심 문구 정리
- `docs/providers/*.md` 6개 — 학습 메타 차별화
- `docs/start/*.md` 2개 — 학습 메타 차별화, pairing 안심 문구 정리
- `docs/tools/*.md` 6개 — 학습 메타 차별화
