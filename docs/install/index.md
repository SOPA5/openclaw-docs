---
title: 설치 개요
sidebar_label: 설치 개요
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 설치 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `install/index` |

:::tip 학습 팁
이 문서는 **"내 컴퓨터에서는 뭘 먼저 해야 하지?"**를 빨리 정하는 안내판입니다.
처음이라면 **이 문서 → 운영체제 가이드 → 시작하기** 순서로 보면 가장 쉽습니다.
:::

# 설치 개요 (Install Overview)

:::tip 어떤 경로를 고를지 먼저 정하세요
**이 문서는 "내 환경에 맞는 설치 방법을 먼저 고르고 싶다"는 사람을 위한 선택 가이드입니다.**

- **나는 처음이다** → 아래 **설치 전 체크리스트**와 **권장 설치 흐름**만 따라가면 됩니다.
- **이미 설치했다** → [시작하기](/start/getting-started)로 이동해 첫 설정과 첫 질문 흐름을 이어가세요.
- **내 환경이 헷갈린다** → 아래 **운영체제별 시작 링크**에서 내 환경에 맞는 문서부터 누르세요.
:::

## 🚦 설치 전에 먼저 체크하세요

아래 4가지만 미리 보면 설치가 훨씬 덜 헷갈립니다.

- **내 운영체제 확인**: macOS / Linux / Windows WSL2 / Windows PowerShell 중 어디인지
- **인터넷 연결 확인**: 설치 스크립트가 필요한 파일을 내려받습니다
- **로그인 준비**: AI 모델을 쓰려면 보통 OpenAI, Anthropic, Google 같은 계정 또는 API 키가 필요합니다
- **채널 준비**: Telegram, Discord 같은 채팅 앱을 붙일 계획이면 토큰이나 앱 설정이 필요할 수 있습니다

## 🧰 운영체제별 준비물 한눈에 보기

| 내 환경 | 먼저 확인할 것 | 추천 시작 문서 |
|---|---|---|
| macOS | 터미널 사용 가능, 인터넷 연결 | [macOS 가이드](/platforms/macos) |
| Linux | bash 셸 사용 가능, 패키지 설치 권한 | [Linux 가이드](/platforms/linux) |
| Windows + WSL2 | WSL2와 Ubuntu 설치 완료 | [Windows 가이드](/platforms/windows) |
| Windows PowerShell | PowerShell 실행 가능, 일부 기능 차이 이해 | [Windows 가이드](/platforms/windows) |

:::tip Windows라면
처음이라면 **Windows 네이티브보다 WSL2 + Ubuntu**가 더 쉽고 안정적입니다.
문서 예시도 대부분 이 경로를 기준으로 설명합니다.
:::

## 🔑 API 키와 계정도 미리 준비하면 좋아요

설치는 금방 끝나도, **모델 연결 단계**에서 멈추는 경우가 많습니다.
그래서 아래를 미리 준비해두면 좋습니다.

| 목적 | 미리 준비하면 좋은 것 |
|---|---|
| AI 모델 연결 | OpenAI / Anthropic / Google 계정 또는 API 키 |
| 로컬 모델 사용 | Ollama 같은 로컬 모델 환경 |
| Telegram 연결 | 봇 토큰, 연결할 채팅방 |
| Discord 연결 | 봇 앱 설정, 토큰, 권한 |

> 꼭 모든 걸 다 먼저 만들 필요는 없습니다. 다만 **"나는 Telegram도 붙일 거야"**, **"나는 OpenAI 모델을 쓸 거야"** 같은 계획이 있으면 미리 준비해두면 더 빨리 끝납니다.

## 설치 경로 요약 카드

| 내 상황 | 추천 경로 | 이유 |
|---|---|---|
| 빠르게 시작하고 싶다 | 설치 스크립트 + 온보딩 | 가장 쉬운 기본 경로 |
| Windows를 쓴다 | WSL2 권장, 필요하면 PowerShell | 문서/예제가 가장 안정적 |
| Node 환경이 이미 있다 | npm 직접 설치 | 기존 개발 환경에 잘 맞음 |
| 인프라 격리가 필요하다 | Docker / Ansible / Nix | 운영 자동화와 재현성에 유리 |

이 문서는 **내 환경에서 어떤 설치 경로를 고를지 빠르게 결정하는 안내판**입니다. 대부분의 사용자는 설치 스크립트 하나로 끝나지만, 팀 운영·컨테이너·선언적 배포처럼 상황이 달라지면 선택도 달라집니다.

OpenClaw 기준으로 **권장 경로와 대체 경로를 한 화면에서 비교**하고, 바로 다음 단계인 온보딩까지 자연스럽게 이어지도록 구성했습니다.

## 📌 이 문서에서 바로 정하는 것
- 📋 내 환경이 요구 사항을 만족하는지
- 🏗️ 어떤 설치 방식을 고를지
- 🚀 설치 후 첫 실행을 어디로 이어갈지

---

## 📋 시스템 요구 사양

| 항목 | 요구사항 |
|------|---------|
| **Node.js** | Node 24 권장, Node 22.16+ 호환 |
| **운영체제** | macOS, Linux, Windows (WSL2 권장) |
| **메모리** | 최소 4GB RAM 권장 |

```bash
node --version
# v24.x.x 또는 v22.16+ 이상
```

---

## 🧭 운영체제별로 어디서 시작하면 될까요?

- 🍎 **macOS** → [macOS 가이드](/platforms/macos)
- 🐧 **Linux** → [Linux 가이드](/platforms/linux)
- 🪟 **Windows + WSL2 / PowerShell** → [Windows 가이드](/platforms/windows)
- 📱 **모바일/원격 연결 참고** → [모바일 가이드](/platforms/mobile)

## 🏗️ 설치 방법 선택

| 방법 | 추천 대상 |
|------|---------|
| **설치 스크립트 (권장)** | 일반 사용자, 빠른 시작 |
| **npm 직접 설치** | Node.js 환경이 이미 구성된 경우 |
| **Docker** | 컨테이너 환경 선호, 인프라 격리 |
| **Nix** | NixOS 또는 선언적 시스템 관리 |
| **Ansible** | 다중 서버 관리, 자동화 배포 |
| **Bun (실험적)** | Bun 런타임 환경, 빠른 부팅 |

---

## 🚀 권장 설치 흐름

### macOS / Linux / Windows WSL2

```bash
# 1. 설치 스크립트 실행
curl -fsSL https://openclaw.ai/install.sh | bash

# 2. 온보딩 실행 (모델 + 채널 + 데몬 설정)
openclaw onboard --install-daemon

# 3. 상태 확인
openclaw gateway status

# 4. 대시보드 열기
openclaw dashboard
```

:::tip install.sh는 이런 것도 도와줘요
`install.sh`는 환경을 보고 **Homebrew, Git, Node.js 같은 기본 도구를 자동 설치 시도**할 수 있습니다.
그래도 운영체제나 권한 상태에 따라 직접 확인이 필요할 수 있으니, 설치 뒤에는 `node --version`과 `openclaw --version`을 꼭 확인하세요.
:::

### Windows PowerShell (네이티브)

```powershell
# 1. 설치 스크립트 실행
iwr -useb https://openclaw.ai/install.ps1 | iex

# 2. 온보딩
openclaw onboard --install-daemon
```

### npm 직접 설치

```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

### pnpm 사용

```bash
pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon
```

---

## ✨ 성공하면 이렇게 보입니다

설치와 기본 설정이 잘 끝나면 보통 이런 흐름이 보입니다.

```bash
openclaw gateway status
# running

openclaw dashboard
# 브라우저에서 대시보드가 열림
```

이제는 **"설치는 끝났고, 이제 첫 설정과 첫 질문만 하면 되는 상태"**입니다.
다음 문서인 [시작하기](/start/getting-started)로 넘어가면 됩니다.

---

## 🔧 대체 설치 방법

### 소스에서 직접 빌드

```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install && pnpm ui:build && pnpm build
pnpm link --global
openclaw onboard --install-daemon
```

### main 브랜치 직접 설치 (최신 베타)

```bash
npm install -g github:openclaw/openclaw#main
```

> ⚠️ main 브랜치는 베타 상태일 수 있습니다. 안정 버전이 더 중요하면 npm `latest` 태그를 사용하세요.

---

## 🛠️ 고급 설치 옵션

- [설치 스크립트 상세 내역](/install/installer) — 환경 변수, CI/CD 자동화 옵션
- [Docker 가이드](/install/docker) — 컨테이너 실행 및 샌드박스 활용
- [Nix (Home Manager)](/install/nix) — 선언적 재현 가능 설치
- [Ansible](/install/ansible) — 다중 서버 자동화 배포
- [Bun (실험적)](/install/bun) — Bun 런타임 기반 실행

---

## 🩺 설치 후 점검

```bash
openclaw doctor
```

설정 오류나 누락된 항목을 자동으로 진단하고 복구를 안내합니다.

## 🎯 다음 단계

- 설치를 마쳤다면 [시작하기](/start/getting-started)
- 설치 옵션을 더 자세히 보고 싶다면 [설치 스크립트 상세 내역](/install/installer)
- 컨테이너 환경이면 [Docker 가이드](/install/docker)
- 선언적 환경이면 [Nix (Home Manager)](/install/nix)

## ✅ 이 문서를 읽고 나면
- 내 운영체제에 맞는 시작 문서를 고를 수 있습니다.
- 설치 전에 무엇을 준비해야 하는지 알 수 있습니다.
- 설치가 끝난 뒤 어디로 가야 하는지 바로 알 수 있습니다.

## 🆘 막히면 여기로
- 설치 오류나 경로 선택이 헷갈리면 [FAQ](/help/faq)와 [피드백 허브](pathname:///feedback)를 먼저 확인하세요.

## 📝 도움이 안 됐나요?

문서를 읽고도 막히는 부분이 있다면 [피드백 허브](pathname:///feedback)에서 알려주세요. 설치 문제, 검색 실패, 용어 혼란을 모아서 다음 개선에 반영합니다.
