---
title: Linux
sidebar_label: Linux
sidebar_position: 3
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 환경 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `platforms/linux` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Linux 가이드

이 문서에서는 운영체제별로 OpenClaw를 사용하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🚀 설치 방법
- 방법 1. 설치 스크립트 (권장)
- 방법 2. npm 직접 설치

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw는 다양한 Linux 배포판에서 완전히 지원됩니다. 특히 **서버 환경에서 에이전트를 24시간 가동**하는 데 최적화되어 있습니다.

> Linux 네이티브 컴패니언 앱은 아직 계획 단계입니다. 현재는 CLI + Gateway (중앙 통로) + 브라우저 Control UI로 운영합니다.

---

## 🚀 설치 방법

### 방법 1. 설치 스크립트 (권장)

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

`--install-daemon` 옵션으로 **systemd 서비스**가 자동 등록됩니다.

### 방법 2. npm 직접 설치

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

### 방법 3. 소스 빌드

아래 명령어를 터미널에 입력하세요:
```bash
git clone https://github.com/openclaw/openclaw.git
cd openclaw
pnpm install && pnpm ui:build && pnpm build
pnpm link --global
openclaw onboard --install-daemon
```

---

## ⚙️ systemd 서비스 관리

`openclaw onboard --install-daemon` 실행 시 systemd 서비스가 자동 등록됩니다.

아래 명령어를 터미널에 입력하세요:
```bash
# 상태 확인
systemctl --user status openclaw
# 또는
openclaw gateway status

# 서비스 재시작
systemctl --user restart openclaw

# 서비스 시작/중지
systemctl --user start openclaw
systemctl --user stop openclaw

# 로그 확인
journalctl --user -u openclaw -f
```

### 수동 서비스 등록

자동 등록 대신 직접 설치하려면:

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway install
```

---

## 🖥️ 헤드리스(Headless) 모드

화면이 없는 서버 환경에서는 CLI 전용으로 게이트웨이를 실행합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway start
```

브라우저 자동화 도구(Playwright)를 서버에서 사용하려면 Xvfb 가상 디스플레이가 필요할 수 있습니다:

아래 명령어를 터미널에 입력하세요:
```bash
# Ubuntu/Debian
sudo apt-get install -y xvfb
Xvfb :99 -screen 0 1280x720x24 &
export DISPLAY=:99
```

---

## 🛡️ 샌드박스 보안

에이전트가 코드를 실행할 때 호스트 시스템을 보호하기 위해 Docker 기반 샌드박스를 권장합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure set sandbox.enabled true
openclaw configure set sandbox.provider docker
```

→ [Docker 샌드박스 설정](/install/docker)

---

## 📦 배포판별 추가 설정

### Ubuntu / Debian

아래 명령어를 터미널에 입력하세요:
```bash
# Node.js 24 설치 (nvm 사용 권장)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 24
nvm use 24
```

### Fedora / RHEL

아래 명령어를 터미널에 입력하세요:
```bash
# Node.js 24
sudo dnf module install nodejs:24
```

### Arch Linux

아래 명령어를 터미널에 입력하세요:
```bash
sudo pacman -S nodejs npm
```

---

## 🩺 문제 해결

| 증상 | 해결 방법 |
|------|---------|
| 권한 오류 | `openclaw doctor` 실행 |
| X11/Wayland 오류 | Xvfb 설치 또는 `DISPLAY` 환경변수 확인 |
| Node.js 버전 오류 | `node --version` → Node 22.16+ 필요 |
| systemd 실패 | `journalctl --user -u openclaw -xe` 로그 확인 |

아래 명령어를 터미널에 입력하세요:
```bash
openclaw doctor
```

> 관련 가이드: [플랫폼 개요](/platforms/) | [Docker 가이드](/install/docker) | [Ansible 배포](/install/ansible)

## 🎯 다음 단계

- 다음으로 [Docker 샌드박스 설정](/install/docker) 문서를 읽어보세요.
- 다음으로 [플랫폼 개요](/platforms/) 문서를 읽어보세요.
- 다음으로 [Docker 가이드](/install/docker) 문서를 읽어보세요.
