---
title: Linux
sidebar_label: Linux
sidebar_position: 3
---

# Linux 설치 및 설정

OpenClaw는 다양한 Linux 배포판에서 원활하게 동작하며, 특히 서버 환경에서 에이전트를 가동하는 데 최적화되어 있습니다.

## 📦 설치 패키지 종류​

### 1. AppImage (권장)​

별도의 설치 과정 없이 실행 가능한 파일입니다.

- 실행 전 `fuse` 패키지가 설치되어 있어야 합니다.

- `chmod +x OpenClaw.AppImage` 후 실행하세요.

### 2. Debian/Ubuntu (`.deb`)​

시스템에 직접 설치하고 업데이트를 관리하기 좋습니다.

```
sudo dpkg -i openclaw.deb

```

---

## ⚙️ 주요 설정 및 팁​

### 헤드리스(Headless) 모드​

화면이 없는 서버 환경에서는 CLI 전용으로 게이트웨이를 실행하세요.

```
openclaw gateway --headless

```

### 샌드박스 보안​

리눅스 에이전트가 코드를 실행할 때 호스트 시스템을 보호하기 위해 Docker 기반 샌드박스를 사용하는 것을 강력히 권장합니다.

- Docker 샌드박스 설정 (/install/docker)

## 🛠️ 문제 해결​

- X11/Wayland: 브라우저 자동화 도구(Playwright) 사용 시 디스플레이 서버 설정이 필요할 수 있습니다.

- 권한: `/dev/null` 또는 특정 폴더 접근 권한 문제를 확인하세요.

macOS 가이드
(/platforms/macos)다음
Windows 설치 및 설정
(/platforms/windows)

- 📦 설치 패키지 종류
- 1. AppImage (권장)

- 2. Debian/Ubuntu (`.deb`)

- ⚙️ 주요 설정 및 팁
- 헤드리스(Headless) 모드

- 샌드박스 보안

- 🛠️ 문제 해결

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

