# changelog

## 2026-03-26 (P0 설치 명령 정렬 + Node 버전 + Docker 문서)

### P0 — 설치 명령 공식 기준 정렬 + Node.js 버전 + Docker 문서 개선
- **problem**: 모든 설치 문서에서 `curl -fsSL https://openclaw.ai/install.sh | bash`가 1순위로 도시되었으나, 공식 README 기준은 `npm install -g openclaw@latest`이 기본 방법입니다. 또한 Node.js 최소 버전이 `22.16+`로 표시되었으나 공식 기준은 `22.14+`입니다. Docker 문서는 성공 확인 박스가 누락되어 있었습니다.
- **cause**: install.sh 스크립트의 실제 존재 여부가 불확실한 상태에서 보조 방법이 주방법으로 게시되었고, Node 버전과 Docker 문서도 장기간 갱신이 누락되었습니다.
- **fix**:
  - **설치 명령 정렬** (전체 7개 파일): `npm install -g openclaw@latest`를 1순위로 올리고, `install.sh`는 "공식 스크립트가 제공되는 경우"라는 조건부 안내로 변경
  - **Node.js 버전**: `22.16+` → `22.14+` 전체 문서 전환
  - **설치 검증 3단계 통일**: `openclaw --version` + `openclaw doctor` + `openclaw gateway status` 순서를 모든 설치 관련 문서에 추가
  - **Docker 문서**: 성공 확인 박스(3단계), healthcheck, `unless-stopped` restart 정책, 실제 compose 환경변수 추가
- **effect**: 사용자가 공식 README와 일치하는 방법으로 설치할 수 있고, install.sh가 제공되지 않는 경우 혁동이 없어집니다. Docker 사용자가 성공 여부를 명확히 확인할 수 있습니다.
- **verification**:
  - 수정된 7개 파일 전체에서 22.16 문자열 없음 확인
  - `npm install -g openclaw@latest` 행이 모든 설치 파일에서 1순위로 도시됨
  - 설치 검증 3단계가 7개 파일 전체에 포함됨
  - Docker 데모 compose + 성공 확인 복스 확인

### 수정 파일 목록
- `docs/install/index.md` — 설치 명령 순위 재정렬, Node 22.14+, 검증 3단계 추가
- `docs/install/installer.md` — npm 직접 설치 1순위 승격, Node 22.14+, 검증 복스
- `docs/install/docker.md` — compose 환경변수/빜륨 마운트 최신화, 성공 확인 3단계 추가
- `docs/platforms/macos.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/platforms/linux.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/platforms/windows.md` — npm 1순위, install.sh 조건부, 검증 스펙
- `docs/gateway/index.md` — npm 1순위, 검증 3단계 추가
- `docs/start/onboarding.md` — CLI 설치 스펙에 검증 3단계 추가
- `docs/help/faq.md` — Node 22.14+ 로 버전 표현 수정

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
