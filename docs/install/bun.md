---
title: Bun
sidebar_label: Bun
sidebar_position: 6
---

# Bun 기반 실행 (실험적)

OpenClaw는 최신 JavaScript 런타임인 Bun을 통한 실행을 실험적으로 지원합니다. 빠른 시작 속도와 고성능을 원하는 사용자에게 적합합니다.
경고

Bun 지원은 현재 실험적(Experimental) 단계입니다. 일부 플러그인이나 기능이 Node.js와 다르게 작동할 수 있습니다.

## ⚡ 설치 및 실행​

### 1. Bun 설치​

먼저 시스템에 Bun이 설치되어 있어야 합니다.

```
curl -fsSL https://bun.sh/install | bash

```

### 2. OpenClaw 실행​

OpenClaw CLI를 Bun 런타임 위에서 명시적으로 실행합니다.

```
bun x openclaw gateway

```

## 📈 성능 이점​

- 빠른 부팅: 게이트웨이 초기화 속도가 Node.js 대비 약 2~3배 빠릅니다.

- 메모리 효율: 대규모 에이전트 세션을 처리할 때 메모리 소모가 적을 수 있습니다.

- 기본 지원: Bun의 내장 SQLite 및 웹 API를 활용하여 더 가볍게 동작합니다.

Ansible을 이용한 배포
(/install/ansible)다음
Fly.io에 배포하기
(/install/)

- ⚡ 설치 및 실행
- 1. Bun 설치

- 2. OpenClaw 실행

- 📈 성능 이점

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


