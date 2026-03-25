---
title: 설치 개요
sidebar_label: 설치 개요
sidebar_position: 1
---

# 설치 개요 (Install Overview)

:::tip 어떤 경로를 고를지 먼저 정하세요
**이 문서는 "내 환경에 맞는 설치 방법을 먼저 고르고 싶다"는 사람을 위한 선택 가이드입니다.**

- **나는 처음이다** → 아래 **권장 설치 흐름**만 따라가면 됩니다.
- **이미 설치했다** → [시작하기](/start/getting-started)로 이동해 온보딩, 상태 확인, 첫 질문 흐름을 이어가세요.
- **내 환경이 헷갈린다** → 아래 표에서 운영체제와 설치 방식을 먼저 고르세요.
:::

## 설치 경로 요약 카드

| 내 상황 | 추천 경로 | 이유 |
|---|---|---|
| 빠르게 시작하고 싶다 | 설치 스크립트 + 온보딩 | 가장 쉬운 기본 경로 |
| Windows를 쓴다 | WSL2 권장, 필요하면 PowerShell | 문서/예제가 가장 안정적 |
| Node 환경이 이미 있다 | npm 직접 설치 | 기존 개발 환경에 잘 맞음 |
| 인프라 격리가 필요하다 | Docker / Ansible / Nix | 운영 자동화와 재현성에 유리 |

이 문서에서는 OpenClaw를 설치하고 준비하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 📋 시스템 요구 사양
- 🏗️ 설치 방법 선택
- 🚀 권장 설치 흐름

걱정하지 마세요. 하나씩 따라하면 됩니다.

OpenClaw v2026.3.23을 설치하고 실행하는 다양한 방법을 안내합니다. 대부분의 사용자는 **설치 스크립트 + `openclaw onboard --install-daemon`** 조합을 권장합니다.

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

> ⚠️ main 브랜치는 `2026.3.24-beta.1` 등 베타 상태입니다. 안정 버전은 npm `latest` 태그(v2026.3.23)를 사용하세요.

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

- 처음 실행까지 이어가려면 [시작하기](/start/getting-started)
- 상세 설치 옵션이 필요하면 [설치 스크립트 상세 내역](/install/installer)
- 컨테이너 환경이면 [Docker 가이드](/install/docker)
- 선언적 환경이면 [Nix (Home Manager)](/install/nix)
