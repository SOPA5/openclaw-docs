---
title: 시작하기
sidebar_label: 시작하기
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 입문 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `start/getting-started` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

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

이 문서는 **설치 직후부터 첫 질문을 보내기 전까지** 막히지 않게 이어주는 출발선입니다. 복잡한 개념 설명보다, 지금 당장 무엇을 실행하면 되는지에 집중합니다.

OpenClaw v2026.3.23-2 기준으로 **설치 확인 → 온보딩 → 상태 점검 → 첫 대화**까지 가장 짧은 흐름만 추려 안내합니다.

## 📌 이 문서에서 바로 하는 것
- 📋 설치 전제 확인
- 🚀 첫 실행 명령 따라가기
- 💬 채널 연결 전 마지막 점검

---

## 📋 필수 준비물

OpenClaw를 설치하기 전에 아래 2가지가 먼저 준비되어야 합니다.

### 1. 운영체제

| 운영체제 | 지원 여부 | 비고 |
|----------|-----------|------|
| macOS | ✅ | 바로 사용 가능 |
| Linux (Ubuntu 등) | ✅ | 바로 사용 가능 |
| Windows + WSL2 | ✅ 권장 | WSL2 안에서 Ubuntu를 설치한 뒤 진행 |
| Windows Native (PowerShell) | ⚠️ 가능 | 일부 기능 제한, WSL2 권장 |

:::tip Windows 사용자라면
Windows에서는 **WSL2 + Ubuntu** 환경을 강력히 권장합니다.
WSL2가 뭔지 모르겠다면, 아래 순서로 설치하세요:

1. **PowerShell을 관리자 권한으로 실행**합니다
2. 아래 명령어를 입력합니다:
```powershell
wsl --install
```
3. 컴퓨터를 **재부팅**합니다
4. 재부팅 후 자동으로 **Ubuntu 설치 화면**이 뜹니다. 사용자 이름과 비밀번호를 설정하세요
5. 이후 모든 OpenClaw 작업은 **Ubuntu 터미널** 안에서 진행합니다

> 상세 가이드 → [Windows 플랫폼 가이드](/platforms/windows)
:::

---

### 2. Node.js 설치

OpenClaw는 **Node.js v24** (권장) 또는 **v22.16 이상**이 필요합니다.

#### Node.js가 이미 있는지 확인하기

터미널을 열고 아래 명령어를 입력하세요:

```bash
node --version
```

- `v24.x.x` 또는 `v22.16.x` 이상이 나오면 → **그대로 다음 단계로** 이동하세요
- `command not found` 또는 버전이 너무 낮으면 → **아래 설치 방법을 따라가세요**

#### Node.js 설치 방법 (처음이라면 이대로 따라하세요)

**방법 A. nvm으로 설치 (가장 권장)**

nvm(Node Version Manager)을 쓰면 버전 관리가 편합니다.

```bash
# 1. nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# 2. 터미널을 껐다 다시 열거나, 아래 명령어 실행
source ~/.bashrc

# 3. Node.js v24 설치
nvm install 24

# 4. 설치 확인
node --version
# v24.x.x 가 나오면 성공!
```

**방법 B. 공식 설치 파일로 설치**

[Node.js 공식 사이트](https://nodejs.org/)에서 **LTS** 또는 **Current** 버전을 다운로드해서 설치하세요.

- **macOS / Windows**: `.pkg` 또는 `.msi` 파일 다운로드 → 더블클릭 → 안내에 따라 설치
- **Linux**: 위의 nvm 방법을 권장합니다

**방법 C. 패키지 매니저로 설치**

```bash
# macOS (Homebrew)
brew install node

# Ubuntu / Debian
sudo apt update && sudo apt install -y nodejs npm

# 버전이 낮게 깔릴 수 있으므로, 최신이 필요하면 nvm 방법을 추천합니다
```

:::caution 버전 확인을 꼭 하세요
어떤 방법으로 설치했든, 마지막에 반드시 `node --version`을 확인하세요.
**v22.16 미만**이면 OpenClaw가 제대로 동작하지 않을 수 있습니다.
:::

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

- **모델 제공자**: Anthropic, OpenAI, Google, Ollama 등 34개 이상 지원
- **채팅 채널**: Telegram, Discord, Slack, WhatsApp 등 23개 이상 지원
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
## ✅ 이 문서를 읽고 나면
- OpenClaw를 설치한 뒤 첫 실행, 상태 확인, 첫 질문까지 이어지는 전체 흐름을 이해하게 됩니다.

## ➡️ 다음 단계
- [채널 페어링](/start/pairing)으로 이동해 실제 대화 채널을 연결하세요.

## 🆘 막히면 여기로
- 설치나 검색이 헷갈리면 [FAQ](/help/faq)와 [피드백 허브](/feedback)에서 바로 확인하고 알려주세요.


## 📝 도움이 안 됐나요?

문서를 읽고도 막히는 부분이 있다면 [피드백 허브](/feedback)에서 알려주세요. 설치 문제, 검색 실패, 용어 혼란을 모아서 다음 개선에 반영합니다.

