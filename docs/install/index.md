---
title: 설치 개요
sidebar_label: 설치 개요
sidebar_position: 1
---

# 설치 개요 (Install Overview)

이 문서에서는 OpenClaw를 설치하고 준비하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 📋 시스템 요구 사양
- 🏗️ 설치 방법 선택
- 🚀 권장 설치 흐름

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw v2026.3.23을 설치하고 실행하는 다양한 방법을 안내합니다. 대부분의 사용자는 **설치 스크립트 + `openclaw onboard --install-daemon`** 조합을 권장합니다.

---

## 📋 시스템 요구 사양

| 항목 | 요구사항 |
|------|---------|
| **Node.js** | Node 24 권장, Node 22.16+ 호환 |
| **운영체제** | macOS, Linux, Windows (WSL2 권장) |
| **메모리** | 최소 4GB RAM 권장 |

아래 명령어를 터미널에 입력하세요:
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

아래 명령어를 터미널에 입력하세요:
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

아래 명령어를 터미널에 입력하세요:
```powershell
# 1. 설치 스크립트 실행
iwr -useb https://openclaw.ai/install.ps1 | iex

# 2. 온보딩
openclaw onboard --install-daemon
```

### npm 직접 설치

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

### pnpm 사용

아래 명령어를 터미널에 입력하세요:
```bash
pnpm add -g openclaw@latest
pnpm approve-builds -g
openclaw onboard --install-daemon
```

---

## 🔧 대체 설치 방법

### 소스에서 직접 빌드

아래 명령어를 터미널에 입력하세요:
```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install && pnpm ui:build && pnpm build
pnpm link --global
openclaw onboard --install-daemon
```

### main 브랜치 직접 설치 (최신 베타)

아래 명령어를 터미널에 입력하세요:
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

아래 명령어를 터미널에 입력하세요:
```bash
openclaw doctor
```

설정 오류나 누락된 항목을 자동으로 진단하고 복구를 안내합니다.

## 🎯 다음 단계

- 다음으로 [설치 스크립트 상세 내역](/install/installer) 문서를 읽어보세요.
- 다음으로 [Docker 가이드](/install/docker) 문서를 읽어보세요.
- 다음으로 [Nix (Home Manager)](/install/nix) 문서를 읽어보세요.
