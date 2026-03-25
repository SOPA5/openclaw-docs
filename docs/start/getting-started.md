---
title: 시작하기
sidebar_label: 시작하기
sidebar_position: 1
---

# 시작하기 (Getting Started)

:::tip 처음이라면 이렇게 따라가세요
**이 문서는 "설치했고, 이제 첫 실행과 첫 질문까지 가고 싶다"는 사람을 위한 가장 짧은 가이드입니다.**

- **나는 처음이다** → [설치 개요](/install/)부터 보고 다시 이 문서로 오세요.
- **이미 설치했다** → 아래 **3단계 빠른 시작**부터 바로 진행하세요.
- **내 환경이 헷갈린다** → [설치 개요](/install/)에서 macOS / Linux / Windows WSL2 / PowerShell 경로를 먼저 고르세요.
:::

## 한눈에 보는 3단계 빠른 시작

| 단계 | 지금 할 일 | 이동 |
|---|---|---|
| 1 | OpenClaw 설치 또는 설치 확인 | [설치 개요](/install/) |
| 2 | `openclaw onboard --install-daemon` 실행 | [설정 마법사](/start/wizard) |
| 3 | 상태 확인 후 첫 질문 보내기 | [채널 페어링](/start/pairing) |

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 📋 필수 준비물
- 🚀 빠른 시작 (Quick Setup)
- 💬 첫 질문까지 이어지는 흐름

걱정하지 마세요. 하나씩 따라하면 됩니다.

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

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

**Windows PowerShell (네이티브):**

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**npm 직접 설치 (선택):**

```bash
npm install -g openclaw@latest
```

> 상세 설치 방법 → [설치 개요](/install/)

---

### 2단계. 온보딩 실행

설치 후 다음 명령어를 실행하여 AI 모델, 채널, 데몬을 한 번에 설정합니다.

```bash
openclaw onboard --install-daemon
```

온보딩 마법사가 다음 항목을 순서대로 설정해줍니다:

- **모델 제공자**: Anthropic, OpenAI, Google, Ollama 등 30개 이상 지원
- **채팅 채널**: Telegram, Discord, Slack, WhatsApp 등 20개 이상 지원
- **게이트웨이**: 포트, 인증, Tailscale 노출 여부
- **데몬 서비스**: macOS LaunchAgent 또는 Linux systemd 자동 등록

> 온보딩 마법사 상세 안내 → [설정 마법사](/start/wizard)

---

### 3단계. 게이트웨이 상태 확인

```bash
openclaw gateway status
```

`running` 상태가 표시되면 정상입니다.

---

## 💬 첫 질문 보내기 전에 하면 좋은 것

1. 대시보드를 열어 연결 상태를 확인합니다.
2. 텔레그램이나 디스코드 같은 채널을 연결합니다.
3. 간단한 질문 하나를 보내 OpenClaw가 응답하는지 확인합니다.

예시 질문:

- `오늘 해야 할 일 정리해줘`
- `이 링크 요약해줘`
- `내 메모를 보기 쉽게 정리해줘`

---

## 🖥️ 대시보드 접속

OpenClaw는 웹 기반 Control UI를 제공합니다. 에이전트 세션, 채널 연결 현황, 로그를 한눈에 확인할 수 있습니다.

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
