---
title: 인스톨러
sidebar_label: 인스톨러
sidebar_position: 2
---

# 설치 스크립트 정보 (Installer Internals)

OpenClaw는 복잡한 설치 과정을 자동화하기 위해 여러 가지 쉘 스크립트를 제공합니다. 각 스크립트의 작동 방식과 옵션을 설명합니다.

## 🛠️ 제공되는 스크립트​

### 1. `install.sh` (macOS/Linux 통합)​

가장 일반적으로 사용되는 진입점 스크립트입니다. 시스템 환경을 감지하고 필요한 바이너리를 내려받습니다.

```
curl -fsSL https://openclaw.ai/install.sh | bash

```

### 2. `install.ps1` (Windows PowerShell)​

Windows 환경에서 명령행 도구와 게이트웨이를 설정할 때 사용합니다.

```
iwr -useb https://openclaw.ai/install.ps1 | iex

```

---

## ⚙️ 자동화 및 고급 옵션​

CI/CD 환경이나 무인 설치(Unattended install)를 위해 다음과 같은 환경 변수를 사용할 수 있습니다.
환경 변수설명
`PREFIX`바이너리가 설치될 경로를 지정합니다. (기본값: `/usr/local/bin`)
`VERSION`특정 버전의 OpenClaw를 설치하고자 할 때 사용합니다.
`SKIP_GATEWAY`게이트웨이 초기 실행 프로세스를 건너뜁니다.

### 예시: 특정 경로에 설치하기​

```
curl -fsSL https://openclaw.ai/install.sh | PREFIX=$HOME/.local/bin bash

```

## 🔍 작동 원리​

- OS 및 아키텍처 감지: 현재 시스템이 x64인지 ARM64인지, macOS인지 Linux인지 확인합니다.

- 바이너리 다운로드: 최신 릴리스에서 적절한 바이너리를 가져옵니다.

- 권한 설정: 실행 권한(`chmod +x`)을 부여합니다.

- 초기화: `openclaw onboard` 명령어를 실행하여 필수 환경 설정을 돕습니다.

설치 개요 (Install Overview)
(/install/)다음
Docker 설치 가이드
(/install/docker)

- 🛠️ 제공되는 스크립트
- 1. `install.sh` (macOS/Linux 통합)

- 2. `install.ps1` (Windows PowerShell)

- ⚙️ 자동화 및 고급 옵션
- 예시: 특정 경로에 설치하기

- 🔍 작동 원리

Docs

- 시작하기 (/start/getting-started)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)

More

- GitHub (https://github.com/openclaw/openclaw)

Copyright © 2026 OpenClaw. Built with Docusaurus.

제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)

