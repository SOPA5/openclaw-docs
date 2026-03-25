# 문서 감사 결과

## 감사 기준 / 근거
- 감사 대상: `projects/openclaw-docs/docs/` 하위 57개 문서 전부 직접 열람
- 외부 대조 기준:
  - 공식 문서 홈: https://docs.openclaw.ai/
  - 공식 문서 인덱스: https://docs.openclaw.ai/llms.txt
  - GitHub README: https://github.com/openclaw/openclaw
- 기준 시점: 2026-03
- 기준 사실:
  - 최신 안정 버전: **2026.3.22**
  - 현재 개발 헤드/README 기준 패키지 버전: **2026.3.24-beta.1**
  - Node.js 요구사항: **권장 Node 24, 호환 Node 22.16+**
  - 핵심 지원 채널(요청 기준): Telegram, Discord, Slack, WhatsApp, LINE, Matrix, Google Chat, MS Teams, iMessage(BlueBubbles), iMessage(Legacy)
  - 공식 README 실제 지원 채널 범위는 위보다 더 넓음(예: Signal, IRC, Mattermost, Feishu 등)
  - 지원 모델 제공자(요청 기준): Anthropic, OpenAI, Google Gemini, OpenRouter, Amazon Bedrock, 로컬(Ollama, LM Studio)
  - 지원 OS: macOS, Linux, Windows(WSL2), Windows(Native)

## 요약
- 총 문서: 57개
- 정상: 0개
- 수정 필요: 57개
- 콘텐츠 미비(placeholder): 0개
- OS별 가이드 추가 필요: 9개

## 총평
이번 세트는 **전반적으로 초안/구버전 요약본 성격**이 강합니다. 특히 다음 문제가 반복됩니다.

1. **현재 공식 문서 구조와 어긋나는 경로/명령어/개념**이 많음
   - 예: `/cli`, `/platforms/mac-child-process`, `/templates/identity`, `/install/render` 같은 링크가 로컬 세트 안에서 깨짐
   - 실제 공식 문서 경로는 `docs.openclaw.ai/cli/...`, `platforms/mac/...` 식으로 더 세분화됨
2. **설치·운영 관련 정보가 2026-03 기준 최신 흐름과 불일치**
   - 최신 추천 경로는 `npm install -g openclaw@latest` + `openclaw onboard --install-daemon`
   - 문서 다수는 `curl | bash`, `gateway restart`, `openclaw gateway --headless`, `openclaw channels login` 등 과거/불명확 흐름을 중심으로 설명
3. **지원 범위 축소/누락**
   - 채널 개요/기능 개요/플랫폼 개요가 현재 공식 범위를 충분히 반영하지 못함
4. **플랫폼 분기 부족**
   - Windows Native / WSL2 / Linux / macOS 차이가 중요한 문서에서 분기 안내가 약함
5. **문서 하단 네비게이션/커뮤니티 블록이 기계적으로 붙어 있고 일부는 잘못된 경로를 가리킴**

## 수정 필요 목록
| 파일 | 문제 유형 | 상세 내용 | 권장 조치 |
|------|----------|----------|----------|
| channels/bluebubbles.md | 과거정보/OS분기필요 | BlueBubbles는 macOS 의존 채널인데 macOS 전용 조건/권한/원격 운영 조건이 약함. `configure set` 예시는 최신 설정 체계와 대조 필요. | macOS 전용 가이드로 재작성, 공식 BlueBubbles + OpenClaw 현재 채널 설정 경로 반영 |
| channels/discord.md | 과거정보/부정확 | 내용 자체는 큰 틀은 맞지만 최신 DM pairing, allowlist, thread/session 동작 같은 현재 운영 모델이 없음. | 최신 Discord 채널 문서 기준으로 pairing/dmPolicy/allowFrom 중심으로 업데이트 |
| channels/google-chat.md | 과거정보 | 경로명이 로컬 문서에선 `google-chat.md`인데 공식 문서는 `googlechat.md`. 설명도 Webhook/API 혼합 초안 수준. | 공식 문서 경로/설정명 기준으로 재정리 |
| channels/grammy.md | 미비/과거정보 | 내부 구현 라이브러리 소개만 있고 실제 사용자 가치가 낮음. 현재 채널 문서 체계 대비 상세도 부족. | Telegram 세부 설정 문서로 승격하거나 제거/통합 |
| channels/imessage.md | 과거정보/OS분기필요 | Legacy 방식은 macOS 전용/비권장이지만 권한, 제약, BlueBubbles 대비 차이 설명이 부족함. | macOS 전용 경고와 레거시 한계/대체 경로 명확화 |
| channels/index.md | 부정확/과거정보 | 지원 채널 표가 현재 공식 범위를 축소 표기. `기타`로 뭉뚱그려 최신 채널 확장성 반영 못함. `/install/render` 링크 깨짐. | 공식 채널 목록 기준으로 표 갱신, 깨진 링크 제거 |
| channels/line.md | 과거정보 | 기본 흐름은 맞으나 최신 pairing/security/allowlist 관점이 빠짐. | 최신 설정 키와 운영 보안 섹션 추가 |
| channels/matrix.md | 과거정보 | 기본 설명은 가능하나 현재 공식 채널/마이그레이션 관점 누락. | Matrix 최신 문서 기준으로 인증/운영/트러블슈팅 보강 |
| channels/ms-teams.md | 과거정보 | 현재 공식 문서 경로는 `msteams`; Azure Bot 설명은 가능하나 최신 운영 모델과 간격 있음. | 공식 Teams 문서와 용어/경로 정렬 |
| channels/slack.md | 과거정보/부정확 | Socket Mode 중심 설명만 있고 최신 DM pairing, allowlist, group rules 설명 부족. | 현재 Slack 채널 정책 반영 |
| channels/telegram.md | 과거정보/부정확 | `openclaw gateway restart`를 필수처럼 안내. 최신 문서는 pairing/DM policy/allowlist/security 중심. | 최신 텔레그램 채널 흐름으로 재작성 |
| channels/whatsapp.md | 과거정보/부정확 | `openclaw gateway` 실행 후 QR 스캔 중심 설명은 구식. README는 `openclaw channels login`/pairing/allowFrom 등을 강조. | 최신 로그인/페어링/보안 경로 반영 |
| concepts/agent.md | 과거정보 | Plan-Act-Observe 설명은 무난하지만 현재 공식 런타임 구조(도구 스트리밍, ACP/세션 도구 등)를 반영하지 못함. | 최신 agent/runtime 문서 기반으로 확장 |
| concepts/architecture.md | 부정확 | Gateway-Hub-Agent 3계층 설명은 현재 공식 구조와 정확히 일치하지 않음. 공식은 Gateway control plane 중심 설명. | 공식 architecture/protocol 기준으로 개념 재정의 |
| concepts/context.md | 과거정보 | 기본 개념은 맞지만 context engine/compaction/session pruning 등 최신 핵심이 빠짐. | 최신 context/context-engine 문서와 통합 |
| concepts/features.md | 부정확/과거정보 | 지원 채널을 WhatsApp/Telegram/Discord/iMessage 중심으로 축소 표기. Mattermost만 언급하고 현재 공식 채널 폭을 반영 못함. macOS companion 앱만 강조하고 현행 web/control UI, iOS/Android node 기능 설명 부족. | 공식 README/Features 기준으로 전면 갱신 |
| concepts/memory.md | 과거정보/부정확 | `MEMORY.md` 중심 설명은 일부 맞지만 현재 메모리 설정/검색/flush/reference 문서 체계를 반영 못함. | memory config/reference 관점 추가 |
| concepts/sessions.md | 과거정보 | 세션 폴더 설명은 가능하나 현재 공식 세션 모델(main/group isolation, pruning, session tools)보다 단순화됨. | 최신 session/session-pruning/session-tool 문서 반영 |
| concepts/system-prompt.md | 과거정보 | 설명은 가능하지만 현재 system prompt는 skill/bootstrap/tooling/runtime 정책과 강하게 결합됨. | 공식 문서 수준으로 구체화 |
| gateway/api.md | 부정확 | `/v1/tools/invoke`, `/v1/chat/completions`, `/docs` 설명은 일부 맞을 수 있으나 공식 문서는 Tools Invoke/OpenAI/OpenResponses API로 분리됨. `read_file` 같은 예시 툴명도 현재 표면과 다름. | 공식 HTTP API 문서 기준으로 재작성 |
| gateway/index.md | 부정확 | `config.yml` 자동 감지 hot-reload 등은 현재 정식 설명과 어긋날 가능성 큼. `/platforms/mac-child-process` 링크 깨짐. | gateway runbook/configuration/doctor 기준으로 재작성 |
| gateway/mcp.md | 과거정보/부정확 | MCP를 `mcporter`/macOS app Settings > Skills 중심으로 설명하는데 현재 plugin/skills/mcp 구조와 다름. YAML 예시도 최신 config 체계와 불일치 가능성 큼. | 최신 plugins/sdk/skills 문서 기준으로 갱신 |
| gateway/remote.md | 과거정보 | 원격 접근 개념은 맞지만 최신 Tailscale Serve/Funnel, auth.mode, bind loopback 규칙 등 핵심 운영값 누락. | 공식 remote/tailscale/authentication 문서 반영 |
| gateway/sandboxing.md | 과거정보/부정확 | GVisor, `sandbox.mode persistent` 등 설명은 현재 공식 문서와 정확성 검증 필요. 최신 docs는 sandbox/tool policy/elevated를 구분함. | 현재 sandboxing + sandbox-vs-tool-policy-vs-elevated 기준으로 재작성 |
| gateway/security.md | 과거정보/부정확 | `openclaw security audit`/`--fix` 서술은 공식 CLI surface와 정확히 일치하는지 재검증 필요. DM pairing/allowlists 같은 현재 핵심 보안 모델도 빠짐. | 최신 security/doctor/authentication 문서 기준으로 보강 |
| help/faq.md | 과거정보/깨진링크 | 답변이 너무 얕고 `/templates/identity` 링크가 깨짐. 현재 help/faq/troubleshooting 구조 반영 부족. | FAQ를 트러블슈팅 허브형으로 재작성 |
| install/ansible.md | 과거정보/부정확 | `openclaw/ansible-openclaw` 레포 안내는 공식 docs 전체 흐름 대비 검증 필요. 설치/운영 상수도 최신 문서 체계와 분리됨. | 공식 설치 페이지 존재 여부 확인 후 사실 확인 기반으로 갱신 |
| install/bun.md | 과거정보/부정확 | README는 Bun을 지원하지만 권장 런타임은 Node 24/22.16+. 이 문서는 성능 수치(2~3배 등)를 근거 없이 단정. `/install/fly` 링크도 깨짐. | Bun은 보조 실행 경로로 축소, 정량 성능 표현 삭제 |
| install/docker.md | 과거정보/부정확/OS분기필요 | `openclaw/gateway:latest`, `openclaw/sandbox` 이미지/설정명이 현재 공식과 일치하는지 불명확. Docker gateway vs Docker sandbox 구분은 좋지만 최신 compose/runtime 문서 기준 재검증 필요. | 공식 Docker 문서로 치환, Linux/macOS/WSL2 주의점 분기 추가 |
| install/index.md | 과거정보/깨진링크/OS분기필요 | 설치 경로가 너무 요약적이고 `/install/fly`, `/install/gcp`, `/install/railway`, `/install/render` 링크가 로컬 세트에서 모두 깨짐. 최신 추천 설치 명령(`npm install -g` + `onboard --install-daemon`)도 빠짐. | 공식 install/index 기준으로 전면 교체 |
| install/installer.md | 과거정보/부정확/OS분기필요 | `curl https://openclaw.ai/install.sh | bash`, `install.ps1` 중심은 과거 흐름. 현재 공식 quick start는 npm/pnpm/bun + onboard. | 설치 스크립트 문서를 보조 경로로 낮추고 최신 권장 경로를 최상단에 배치 |
| install/nix.md | 과거정보 | Nix 자체는 유지 가능하지만 repo/module 경로 및 예시가 최신인지 재검증 필요. | 공식 nix 문서 기준으로 업데이트 |
| platforms/index.md | 과거정보/부정확/OS분기필요 | `.dmg`, `.deb`, `.exe`, PWA 중심 표는 현재 공식 제품 구성을 과도 단순화. Windows Native vs WSL2 차이가 분명히 드러나지 않음. | OS 매트릭스 표를 최신 기준으로 재작성 |
| platforms/linux.md | 과거정보/부정확 | AppImage/`.deb`/`--headless` 중심 설명은 현재 공식 onboarding/daemon 흐름과 다름. | Linux는 Node 설치 + onboard + systemd 기준으로 재작성 |
| platforms/macos.md | 과거정보/깨진링크 | `/platforms/mac-permissions`, `/platforms/mac-logging`, `/platforms/mac-child-process` 링크가 로컬에서 깨짐. 현재 공식은 `platforms/mac/...` 하위 문서 구조. | macOS 문서를 세분 링크 구조에 맞게 정리 |
| platforms/mobile.md | 부정확 | 공식 모바일 앱을 `출시 예정`으로 적었는데 현재 README는 iOS/Android nodes를 실제 기능으로 소개. `/platforms/mac-logging` 링크도 무관하게 깨짐. | iOS/Android node 현재 상태 기준으로 전면 수정 |
| platforms/windows.md | 과거정보/OS분기필요 | Windows Native와 WSL2가 한 문단에 섞여 있고, 어느 경로가 권장/제한인지 충분히 구분되지 않음. `.exe` 설치와 CLI/onboard 흐름도 최신 문서와 대조 필요. | Windows Native vs WSL2 비교표 추가, 최신 권장 경로 명시 |
| providers/amazon-bedrock.md | 과거정보/부정확 | 모델 예시가 `claude-3-5-sonnet-v2`로 고정되어 오래됨. 현재 제공자/모델 문서와 불일치 가능성이 큼. | Bedrock 최신 모델 식별자와 auth 방식을 공식 문서로 갱신 |
| providers/anthropic.md | 과거정보/부정확 | Anthropic을 API 키 중심으로만 설명. 현재 공식/README는 OAuth·subscription 모드와 최신 Claude 세대 중심. `claude-3-5-sonnet-latest`도 과거 모델명. | 최신 Claude 4.x / OAuth / auth profile 설명 반영 |
| providers/google-gemini.md | 과거정보/부정확 | `gemini-1.5-pro` 예시는 구세대. 현재 요청 기준 제공자는 Google Gemini이지만 모델명/인증 흐름은 최신화 필요. | 최신 Google provider 설정과 모델명으로 교체 |
| providers/index.md | 과거정보/부정확 | 지원 제공자 표가 너무 좁음. 공식 docs/llms.txt 기준 제공자 수가 훨씬 많고 현재 문서 구조도 `concepts/model-providers` + `providers/*`로 확장됨. | 최소한 요청 기준 7개 + 공식 주요 provider 범위를 반영 |
| providers/local-models.md | 과거정보 | 방향은 맞지만 LM Studio를 OpenAI 호환으로만 설명하는 등 단순화가 큼. 현재 공식 local-models/ollama/provider setup 관점 보강 필요. | Ollama/LM Studio 각각 별도 섹션 강화 |
| providers/openai.md | 과거정보/부정확 | `gpt-4o`, `o1-preview` 중심은 구세대. 공식 운영은 OpenAI OAuth/Codex 계열도 중요. | 최신 OpenAI provider/auth 문서 기준 업데이트 |
| providers/openrouter.md | 과거정보 | 기본 소개는 가능하지만 모델 예시가 오래됨. 현재 OpenRouter 사용 방식/모델 선택 전략 보강 필요. | 최신 예시 모델로 교체 |
| start/getting-started.md | 과거정보/부정확/OS분기필요 | 최신 공식 quick start(`npm install -g openclaw@latest`, `openclaw onboard --install-daemon`)가 빠지고 `curl | bash` 중심. `/cli` 링크도 깨짐. Node 요구사항도 `v22 이상`으로만 적어 최신 권장치(24 / 22.16+)가 없음. | 공식 getting-started 기준으로 전면 재작성 |
| start/onboarding.md | 과거정보/OS분기필요 | macOS 앱 전용 문서인데 CLI onboarding/wizard와의 관계가 약함. 현재 공식 흐름은 macOS 앱뿐 아니라 전체 onboard 경험을 포함. | macOS 앱 온보딩과 CLI 온보딩을 명확히 분리 |
| start/openclaw.md | 과거정보/부정확 | `channels.whatsapp.allowFrom`, `openclaw channels login`, 30분 heartbeat 등 특정 시점 설정에 치우쳐 있고 현재 범용 getting-started 문서와 어긋남. | 개인 비서 시나리오 문서로 재배치하거나 최신 설정 기준 보정 |
| start/pairing.md | 과거정보 | `openclaw pairing reset` 등 서술은 가능하나 현재 pairing이 채널별/DM pairing/코드 승인 모델로 더 정교함. | 공식 pairing 문서 기준으로 갱신 |
| start/showcase.md | 과거정보/검증필요 | 사례들이 흥미롭지만 출처/날짜/현재 유효성 검증이 없음. 실사용 사례 문서는 증거 링크 필요. | 각 사례에 출처 링크/작성일/현재 상태 추가 |
| start/use-cases.md | 과거정보 | use case 자체는 무난하지만 카카오톡 예시 등 공식 지원 채널 범위와 어긋나는 표현이 있음. | 공식 지원 채널 기준으로 예시 재정리 |
| start/wizard.md | 과거정보/OS분기필요 | `openclaw onboard` 소개는 맞지만 Windows Native 지원 맥락과 WSL2 권장, daemon 설치 차이, auth 선택(OAuth/API key) 최신 흐름이 부족. | OS별 onboard 분기 섹션 추가 |
| tools/apply-patch.md | 부정확/깨진링크 | 실제 OpenClaw 현재 사용자 표면은 `apply_patch`라는 별도 노출 도구보다 편집/patch 워크플로우가 달라질 수 있음. `/cli/` 링크 깨짐. | 현재 도구 표면 기준으로 재정의 또는 문서 제거 |
| tools/browser.md | 과거정보/부정확 | Playwright 내장 엔진 중심 설명은 현재 browser tool의 `openclaw` 관리 브라우저 + `profile=user` + snapshot/act 모델을 반영 못함. | 최신 browser tool 문서 기준으로 전면 수정 |
| tools/index.md | 과거정보/부정확 | 핵심 도구 표가 Playwright/CLI/File Editor/Sub-agents/Lobster 중심인데 현재 실제 tool surface(exec/process/browser/message/canvas/tts/image/pdf 등)와 차이가 큼. | 현재 tool taxonomy로 재구성 |
| tools/lobster.md | 과거정보/검증필요 | Lobster를 핵심 워크플로우 엔진으로 단정하지만 공식 현재 사용자 문서에서 중심축인지 재검증 필요. | 최신 automation/skills/session tools와의 관계 재정리 |
| tools/sandbox.md | 과거정보/부정확 | `allow:[read_file] deny:[run_command]` 예시는 현재 실제 tool 명세와 불일치. | 최신 tool policy 이름으로 교체 |
| tools/subagents.md | 과거정보/부정확 | `/subagents`, `/subagents stop` 식 채팅 명령 중심 설명은 현재 `sessions_spawn`, `sessions_*`, ACP runtime 등을 반영 못함. | 현재 세션/서브에이전트/ACP 구조에 맞게 재작성 |

## OS별 가이드 필요 문서
다음 문서는 **Windows Native / WSL2 / Linux / macOS** 분기를 추가하는 것이 좋습니다.

- `install/index.md`
  - 현재는 설치 옵션만 나열됨
  - 실제로는 OS별 권장 경로가 다름
- `install/installer.md`
  - 스크립트 기반 설치와 npm/onboard 흐름을 OS별로 구분 필요
- `install/docker.md`
  - Docker Desktop(Windows/macOS) vs Linux Engine vs WSL2 차이 필요
- `platforms/index.md`
  - 개요 문서이므로 OS 매트릭스가 핵심
- `platforms/windows.md`
  - Windows Native vs WSL2를 명시적으로 분리해야 함
- `platforms/linux.md`
  - 데스크탑 Linux vs 헤드리스 서버 Linux 분기 필요
- `platforms/macos.md`
  - 앱/권한/게이트웨이/원격 연결 분리 필요
- `start/getting-started.md`
  - 가장 먼저 보는 문서라 OS 선택 분기 필수
- `start/wizard.md`
  - onboard 경로, daemon 설치, 권한/서비스 설치 차이를 OS별로 안내 필요

## 깨진 내부 링크
전수 점검 결과, 아래 링크는 현재 로컬 문서 세트 안에서 깨져 있습니다.

- `channels/index.md` → `/install/render`
- `gateway/index.md` → `/platforms/mac-child-process`
- `help/faq.md` → `/templates/identity`
- `install/bun.md` → `/install/fly`
- `install/index.md` → `/install/fly`, `/install/gcp`, `/install/railway`, `/install/render`
- `platforms/macos.md` → `/platforms/mac-child-process`, `/platforms/mac-logging`, `/platforms/mac-permissions`
- `platforms/mobile.md` → `/platforms/mac-logging`
- `start/getting-started.md` → `/cli`
- `tools/apply-patch.md` → `/cli/`

## 콘텐츠 미비(placeholder) 판정
- 57개 전부 frontmatter-only 수준은 아님
- 다만 **placeholder는 없지만, 여러 문서가 “짧은 초안 + 현재 공식 문서 대비 세부 부족” 상태**임
- 특히 아래는 실질 정보량이 약함
  - `channels/grammy.md`
  - `start/onboarding.md`
  - `start/showcase.md`
  - `tools/lobster.md`

## 보강 제안
1. **공식 문서 구조를 먼저 따라가서 정보 구조를 재정렬**
   - channels / gateway / install / platforms / providers / concepts / cli / help 구조로 맞추기
2. **설치/시작 흐름을 최신 권장 경로로 통일**
   - `npm install -g openclaw@latest`
   - `openclaw onboard --install-daemon`
3. **Node 버전 표기를 통일**
   - `권장 Node 24, 호환 Node 22.16+`
4. **채널 문서에 공통 보안 박스 추가**
   - DM pairing
   - allowFrom
   - group mention rules
   - token/secret 저장 위치
5. **플랫폼 문서에 OS 매트릭스 추가**
   - macOS / Linux / Windows Native / Windows WSL2
   - 권장도, 지원 수준, 제한 사항, 권장 설치 방식
6. **Provider 문서에 “인증 방식” 열 추가**
   - OAuth / API Key / local server / cloud account
7. **모든 문서 하단 링크 자동 검증 도입**
   - broken internal link CI 체크 추천
8. **사례/쇼케이스 문서에는 출처·날짜·검증 상태 추가**
   - ‘실제 사례’ 문서는 반드시 링크/증거 필요

## 우선 수정 순위
1. `start/getting-started.md`
2. `install/index.md`
3. `install/installer.md`
4. `platforms/index.md`
5. `platforms/windows.md`
6. `platforms/mobile.md`
7. `concepts/features.md`
8. `tools/index.md`
9. `gateway/index.md`
10. 채널 문서 일괄 업데이트
