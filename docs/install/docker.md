---
title: Docker
sidebar_label: Docker
sidebar_position: 3
---

# Docker 설치 가이드

OpenClaw를 Docker 환경에서 사용하는 방법은 크게 두 가지입니다: 게이트웨이 자체를 컨테이너로 실행하거나, 에이전트의 도구 실행을 위한 샌드박스로 활용하는 것입니다.

## 1. 게이트웨이 컨테이너 실행​

서버 환경에서 격리된 상태로 OpenClaw 게이트웨이를 띄우고 싶을 때 사용합니다.

### 빠른 실행​

```
docker run -d \
--name openclaw-gateway \
-p 18789:18789 \
-v ~/.openclaw:/root/.openclaw \
openclaw/gateway:latest

```

### Docker Compose 사용 (권장)​

```
services:
gateway:
image: openclaw/gateway:latest
ports:
-"18789:18789"
volumes:
- ~/.openclaw:/root/.openclaw
restart: always

```

---

## 2. 에이전트 샌드박스로 활용 (Safe Execution)​

에이전트가 코드를 실행하거나 브라우저를 제어할 때, 호스트 시스템을 보호하기 위해 Docker를 샌드박스로 사용할 수 있습니다.

### 설정 방법​

OpenClaw 설정 파일(`config.yml`) 또는 온보딩 과정에서 샌드박스 모드를 활성화하세요.

```
openclaw configure set sandbox.enabled true
openclaw configure set sandbox.provider docker

```

### 주요 이점​

- 격리된 환경: 에이전트가 실행하는 코드가 내 메인 OS에 영향을 주지 않습니다.

- 일관성: 어느 OS에서든 동일한 리눅스 기반 샌드박스 환경에서 도구가 돌아갑니다.

- 자동 정리: 작업이 끝난 후 컨테이너가 자동으로 삭제되도록 설정할 수 있습니다.

## 🐳 이미지 정보​

- `openclaw/gateway`: 핵심 서비스 엔진 포함.

- `openclaw/sandbox`: 도구 실행에 필요한 런타임(Node, Python, Playwright) 포함.

설치 스크립트 정보 (Installer Internals)
(/install/installer)다음
Nix (Home Manager) 설치
(/install/nix)

- 1. 게이트웨이 컨테이너 실행
- 빠른 실행

- Docker Compose 사용 (권장)

- 2. 에이전트 샌드박스로 활용 (Safe Execution)
- 설정 방법

- 주요 이점

- 🐳 이미지 정보

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

