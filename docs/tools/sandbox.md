---
title: 샌드박스
sidebar_label: 샌드박스
sidebar_position: 4
---

# 도구 샌드박스 (Sandbox)

보안과 시스템 안정성을 위해 에이전트가 어떤 도구를 어느 범위까지 사용할 수 있는지 제어하는 기능을 제공합니다.

## 🛡️ 도구 접근 제어​

사용자는 각 에이전트별로 도구 사용 권한을 세밀하게 설정할 수 있습니다.

### 1. 허용/차단 목록 (`allow` / `deny`)​

```
agents:
junior-dev:
tools:
allow:["read_file","grep_search"]
deny:["run_command","delete_file"]

```

위 설정은 'junior-dev' 에이전트가 파일 읽기와 검색은 할 수 있지만, 직접적인 명령어 실행이나 파일 삭제는 할 수 없도록 제한합니다.

---

## 🏗️ 실행 환경 격리 (Docker)​

가장 강력한 보안 방법은 에이전트의 모든 도구 실행을 Docker 컨테이너 내부로 한정하는 것입니다.

### 설정 활성화​

```
openclaw configure set sandbox.enabled true
openclaw configure set sandbox.provider "docker"

```

### 작동 원리​

- 에이전트가 '파일 생성' 도구를 호출합니다.

- OpenClaw는 호스트 PC가 아닌, 즉석에서 생성된 Docker 컨테이너 내부에서 명령을 실행합니다.

- 결과물만 호스트의 지정된 폴더(Workspace)로 동기화됩니다.

## 👥 사용자 정의 프로필​

사용 목적에 따라 여러 에이전트에게 서로 다른 샌드박스 등급을 부여할 수 있습니다.

- Full Access: 신뢰하는 개인 프로젝트용 에이전트.

- Strict Sandbox: 인터넷에서 받은 코드를 분석하거나 외부 툴을 실행할 때 사용하는 보안 에이전트.

Lobster: 규격화된 워크플로우 엔진
(/tools/lobster)다음
서브 에이전트 (Sub-agents)
(/tools/subagents)

- 🛡️ 도구 접근 제어
- 1. 허용/차단 목록 (`allow` / `deny`)

- 🏗️ 실행 환경 격리 (Docker)
- 설정 활성화

- 작동 원리

- 👥 사용자 정의 프로필

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

