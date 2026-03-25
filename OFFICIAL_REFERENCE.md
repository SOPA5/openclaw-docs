# OpenClaw 공식 문서 최신 기준 (2026-03-25)

## 버전 정보
- 최신 안정(stable): `v2026.3.23`  
  출처: https://github.com/openclaw/openclaw/releases/latest
- 메인 브랜치 현재 패키지 버전: `2026.3.24-beta.1` (즉, main은 베타 선행 상태)  
  출처: https://raw.githubusercontent.com/openclaw/openclaw/main/package.json
- 안정 채널 정의: README 기준 stable은 `vYYYY.M.D` 형식의 tagged release이며 npm dist-tag `latest`를 사용  
  출처: https://github.com/openclaw/openclaw
- Node.js 요구사항: **Node 24 권장**, **Node 22.16+ 호환 지원**  
  출처: https://github.com/openclaw/openclaw, https://docs.openclaw.ai/, https://docs.openclaw.ai/start/getting-started, https://docs.openclaw.ai/install/
- 대표 설치 명령:
  - macOS / Linux / WSL2: `curl -fsSL https://openclaw.ai/install.sh | bash`
  - Windows PowerShell: `iwr -useb https://openclaw.ai/install.ps1 | iex`
  - npm 직접 설치: `npm install -g openclaw@latest`
  - 권장 온보딩: `openclaw onboard --install-daemon`
  출처: https://docs.openclaw.ai/start/getting-started, https://docs.openclaw.ai/install/, https://github.com/openclaw/openclaw

## 문서 구조 개요
`llms.txt` 기준 OpenClaw 공식 문서는 다음 축으로 구성된다.
- automation
- channels
- cli
- concepts
- gateway
- help
- install
- nodes
- platforms
- plugins
- providers
- reference
- start
- web
출처: https://docs.openclaw.ai/llms.txt

## 공식 제품/아키텍처 한 줄 정의
- OpenClaw는 **자기 호스팅(self-hosted) Gateway**로, WhatsApp/Telegram/Discord/iMessage 등 여러 채널과 AI 에이전트를 연결한다.
- Gateway가 **세션, 라우팅, 채널 연결의 단일 제어면(control plane)** 역할을 한다.
- 단일 Gateway 프로세스가 채팅 앱, CLI, Web Control UI, macOS 앱, iOS/Android 노드를 연결한다.
출처: https://docs.openclaw.ai/, https://github.com/openclaw/openclaw

## 지원 채널 전체 목록
공식 채널 인덱스(`/channels`) 기준:
- BlueBubbles
- Discord
- Feishu
- Google Chat
- iMessage (legacy)
- IRC
- LINE
- Matrix
- Mattermost
- Microsoft Teams
- Nextcloud Talk
- Nostr
- Signal
- Slack
- Synology Chat
- Telegram
- Tlon
- Twitch
- Voice Call
- WebChat
- WhatsApp
- Zalo
- Zalo Personal

보충 설명:
- BlueBubbles는 **iMessage 권장 경로**로 명시됨
- Telegram은 **가장 빠른 셋업 경로**로 반복 언급됨
- 여러 채널을 동시에 구성 가능
출처: https://docs.openclaw.ai/channels/, https://github.com/openclaw/openclaw

## 지원 모델 제공자 전체 목록
공식 Provider Directory(`/providers`) 기준:
- Amazon Bedrock
- Anthropic
- Cloudflare AI Gateway
- DeepSeek
- GitHub Copilot
- GLM
- Google (Gemini)
- Groq
- Hugging Face (Inference)
- Kilocode
- LiteLLM
- MiniMax
- Mistral
- Model Studio (Alibaba Cloud)
- Moonshot AI
- NVIDIA
- Ollama
- OpenAI
- OpenCode
- OpenCode Go
- OpenRouter
- Perplexity
- Qianfan
- Qwen
- SGLang
- Synthetic
- Together AI
- Venice
- Vercel AI Gateway
- vLLM
- Volcengine (Doubao)
- xAI
- Xiaomi
- Z.AI

추가 항목:
- 전사(음성 전사) 제공자: Deepgram
- 커뮤니티 도구: Claude Max API Proxy
- Features 문서에는 **35+ model providers**라고 요약됨
출처: https://docs.openclaw.ai/providers/, https://docs.openclaw.ai/concepts/features

## 지원 플랫폼 (OS별)
- macOS:
  - 공식 **macOS companion app** 제공
  - 메뉴바 앱, 권한(TCC) 관리, Canvas/Camera/Screen Recording/system.run 노출
  - local/remote mode 지원
  출처: https://docs.openclaw.ai/platforms/macos
- Linux:
  - Gateway **완전 지원**
  - Node 런타임 권장
  - 네이티브 Linux companion app은 아직 계획 단계
  출처: https://docs.openclaw.ai/platforms/linux, https://docs.openclaw.ai/platforms/
- Windows Native:
  - **지원됨**, 하지만 문서상 WSL2보다 덜 안정적
  - core CLI / Gateway 사용 가능
  - Windows Scheduled Task 우선, 실패 시 Startup-folder fallback
  - 네이티브 Windows companion app은 아직 계획 단계
  출처: https://docs.openclaw.ai/platforms/windows
- Windows WSL2:
  - **권장 경로**
  - 전체 경험(full experience)에 더 안정적이라고 명시
  - Linux 호환성 기반으로 CLI/Gateway/tooling 운영
  출처: https://docs.openclaw.ai/platforms/windows, https://docs.openclaw.ai/start/getting-started, https://docs.openclaw.ai/install/
- iOS:
  - node로 페어링, Canvas/Voice Wake/Talk Mode/Camera/Screen Recording 지원
  출처: https://github.com/openclaw/openclaw, https://docs.openclaw.ai/platforms/
- Android:
  - node로 페어링, chat/voice/Canvas/camera/device commands 지원
  출처: https://github.com/openclaw/openclaw, https://docs.openclaw.ai/platforms/

## 최신 설치 흐름
### 가장 권장되는 흐름
1. 설치 스크립트 실행
   - macOS / Linux / WSL2: `curl -fsSL https://openclaw.ai/install.sh | bash`
   - Windows: `iwr -useb https://openclaw.ai/install.ps1 | iex`
2. 온보딩 실행: `openclaw onboard --install-daemon`
3. Gateway 상태 확인: `openclaw gateway status`
4. 대시보드 열기: `openclaw dashboard`
5. 브라우저 Control UI 또는 Telegram 등 채널에서 첫 메시지 전송

### 대체 설치 흐름
- npm: `npm install -g openclaw@latest && openclaw onboard --install-daemon`
- pnpm: `pnpm add -g openclaw@latest && pnpm approve-builds -g && openclaw onboard --install-daemon`
- 소스 빌드:
  ```bash
  git clone https://github.com/openclaw/openclaw.git
  cd openclaw
  pnpm install && pnpm ui:build && pnpm build
  pnpm link --global
  openclaw onboard --install-daemon
  ```
- GitHub main 직접 설치: `npm install -g github:openclaw/openclaw#main`

### 서비스 설치 경로
- 권장: `openclaw onboard --install-daemon`
- 직접 설치: `openclaw gateway install`
- 대화형 구성: `openclaw configure` → Gateway service
- 복구/수리: `openclaw doctor`

출처: https://docs.openclaw.ai/start/getting-started, https://docs.openclaw.ai/install/, https://docs.openclaw.ai/platforms/, https://docs.openclaw.ai/platforms/linux, https://docs.openclaw.ai/platforms/windows, https://github.com/openclaw/openclaw

## 최신 도구 목록
공식 Tools 문서(`/tools`) 기준 OpenClaw 기본 내장 도구:
- `exec` / `process` — 셸 명령 실행, 백그라운드 프로세스 관리
- `browser` — Chromium 브라우저 제어
- `web_search` / `web_fetch` — 웹 검색, 페이지 본문 수집
- `read` / `write` / `edit` — 워크스페이스 파일 I/O
- `apply_patch` — 멀티 헝크 패치
- `message` — 여러 채널로 메시지 전송
- `canvas` — node Canvas 제어
- `nodes` — 페어링된 디바이스 탐색/대상 지정
- `cron` / `gateway` — 스케줄 작업 및 Gateway 관리
- `image` / `image_generate` — 이미지 분석/생성
- `sessions_*` / `agents_list` — 세션 및 서브에이전트 관리

플러그인 제공 도구 예시:
- Lobster
- LLM Task
- Diffs
- OpenProse

도구 계층 구조:
- Tools = 에이전트가 실제 호출하는 함수
- Skills = 도구를 언제/어떻게 쓸지 알려주는 지침
- Plugins = channels/providers/tools/skills 등을 패키징하는 확장 단위
출처: https://docs.openclaw.ai/tools/

## 최신 기능 목록
Features 문서 기준 핵심 기능:
- 멀티채널 Gateway
- 플러그인 채널 확장
- 멀티 에이전트 라우팅 + 격리 세션
- 이미지/오디오/비디오/문서 입출력
- 음성 노트 전사
- TTS
- WebChat / 브라우저 Control UI
- macOS companion app
- iOS / Android node
- 브라우저 자동화, exec, 샌드박싱
- 웹 검색 (Brave, Perplexity, Gemini, Grok, Kimi, Firecrawl)
- Cron / heartbeat scheduling
- Skills / plugins / workflow pipelines (Lobster)
- OAuth 기반 subscription auth
- self-hosted provider 지원 (vLLM, SGLang, Ollama 등)
출처: https://docs.openclaw.ai/concepts/features

## 최신 개념/아키텍처
### 공식 구조 요약
- Gateway가 중심이다.
- 여러 채널/클라이언트가 Gateway에 붙는다.
- Gateway는 Pi agent, CLI, Web Control UI, macOS app, iOS/Android nodes와 연결된다.
- 공식 홈페이지의 mermaid 다이어그램과 README 설명이 같은 구조를 가리킨다.
출처: https://docs.openclaw.ai/, https://github.com/openclaw/openclaw

### 아키텍처 핵심 포인트
- **Self-hosted**: 사용자가 자신의 장치/서버에서 실행
- **Single control plane**: 세션/라우팅/채널 연결을 Gateway가 중앙 관리
- **Multi-channel**: 하나의 Gateway로 여러 메신저 동시 연결
- **Agent-native**: 도구 사용, 세션, 메모리, 멀티 에이전트 라우팅 내장
- **Node 확장**: macOS / iOS / Android 장치를 node처럼 연결해 로컬 장치 기능 실행
- **Control UI**: 브라우저 기반 대시보드 제공
출처: https://docs.openclaw.ai/, https://docs.openclaw.ai/platforms/, https://github.com/openclaw/openclaw

## 빠른 실무 요약
- 지금 공식 기준의 가장 안전한 해석은 **stable = v2026.3.23**, **main = 2026.3.24-beta.1**이다.
- 설치는 문서 전반에서 **설치 스크립트 + `openclaw onboard --install-daemon`** 조합을 가장 강하게 권장한다.
- 운영 OS는 **macOS / Linux / Windows 모두 지원**하지만, Windows는 **WSL2 권장**이 공식 입장이다.
- 채널은 20개 이상, 제공자는 30개 이상이며, OpenClaw의 중심 개념은 **단일 Gateway 기반 멀티채널 + 멀티에이전트 제어면**이다.

## 출처 목록
- https://docs.openclaw.ai/llms.txt
- https://github.com/openclaw/openclaw
- https://github.com/openclaw/openclaw/releases/latest
- https://raw.githubusercontent.com/openclaw/openclaw/main/package.json
- https://docs.openclaw.ai/
- https://docs.openclaw.ai/start/getting-started
- https://docs.openclaw.ai/install/
- https://docs.openclaw.ai/channels/
- https://docs.openclaw.ai/providers/
- https://docs.openclaw.ai/platforms/
- https://docs.openclaw.ai/platforms/linux
- https://docs.openclaw.ai/platforms/windows
- https://docs.openclaw.ai/platforms/macos
- https://docs.openclaw.ai/concepts/features
- https://docs.openclaw.ai/tools/
