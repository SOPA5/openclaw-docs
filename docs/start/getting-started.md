---
title: 시작하기
sidebar_label: 시작하기
sidebar_position: 1
---

# 시작하기 (Getting Started)

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 📋 필수 준비물
- 🚀 빠른 시작 (Quick Setup)
- 1단계. OpenClaw 설치

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw v2026.3.23을 설치하고 AI 에이전트와 첫 대화를 나누기까지의 전 과정을 안내합니다.

---

## 📋 필수 준비물

- **Node.js**: Node 24 권장, Node 22.16+ 호환
- **운영체제**: macOS, Linux, 또는 Windows (WSL2 권장)

아래 명령어를 터미널에 입력하세요:
```bash
node --version
# v24.x.x 또는 v22.16+ 이상이어야 합니다
```

---

## 🚀 빠른 시작 (Quick Setup)

이제 차근차근 진행해보겠습니다.
### 1단계. OpenClaw 설치

시스템 환경에 맞는 설치 명령어를 터미널에 입력하세요.

**macOS / Linux / Windows WSL2:**

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows PowerShell (네이티브):**

아래 명령어를 터미널에 입력하세요:
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**npm 직접 설치 (선택):**

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
```

> 상세 설치 방법 → [설치 개요](/install/)

---

### 2단계. 온보딩 실행

설치 후 다음 명령어를 실행하여 AI 모델, 채널, 데몬을 한 번에 설정합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw onboard --install-daemon
```

온보딩 마법사가 대화형으로 다음 항목을 설정해줍니다:

- **모델 제공자**: Anthropic, OpenAI, Google, Ollama 등 30개 이상 지원
- **채팅 채널**: Telegram, Discord, Slack, WhatsApp 등 20개 이상 지원
- **게이트웨이**: 포트, 인증, Tailscale 노출 여부
- **데몬 서비스**: macOS LaunchAgent 또는 Linux systemd 자동 등록

> 온보딩 마법사 상세 안내 → [설정 마법사](/start/wizard)

---

### 3단계. 게이트웨이 상태 확인

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway status
```

`running` 상태가 표시되면 정상입니다.

---

## 🖥️ 대시보드 접속

OpenClaw는 웹 기반 Control UI를 제공합니다. 에이전트 세션, 채널 연결 현황, 로그를 한눈에 확인할 수 있습니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw dashboard
```

또는 브라우저에서 직접 `http://127.0.0.1:18789/` 로 접속하세요.

---

## 🛠️ 다음 단계

| 목표 | 링크 |
|------|------|
| 채팅 채널 연결 | [채널 페어링](/start/pairing) |
| 지원 채널 전체 목록 | [채널 목록](/channels/) |
| 활용 사례 확인 | [활용 사례](/start/use-cases) |
| 플랫폼별 상세 설정 | [플랫폼 가이드](/platforms/) |
| 설치 방법 비교 | [설치 개요](/install/) |

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [설정 마법사](/start/wizard) 문서를 읽어보세요.
- 다음으로 [채널 페어링](/start/pairing) 문서를 읽어보세요.
