---
title: 아키텍처
sidebar_label: 아키텍처
sidebar_position: 2
---

# 아키텍처 개요 (Architecture)

OpenClaw는 효율적인 에이전트 실행과 원격 관리 기능을 위해 설계된 모듈형 분산 시스템 구조를 가지고 있습니다.

## 🏗️ 3대 핵심 구성 요소​

OpenClaw의 엔진은 다음 세 개의 층(Layer)으로 나뉩니다.

### 1. 게이트웨이 (Gateway) - '소통 창구'​

메시징 서비스(Slack, Telegram 등)와 직접 연결되는 최외곽 레이어입니다.

- 역할: 메시지 수신, 에이전트 답변 전송, 인증 및 페어링 관리.

### 2. 허브 (Hub) - '두뇌 및 컨트롤러'​

시스템의 중앙에서 에이전트의 상태를 관리하고 명령을 중계합니다.

- 역할: 에이전트 런타임 생성, 메시지 라우팅, 설정 오케스트레이션.

### 3. 에이전트 (Agent) - '작업 수행자'​

허브에 의해 생성되어 실제로 AI 모델과 대화하며 작업을 수행합니다.

- 역할: AI 생각(Reasoning) 처리, 도구(Browser, CLI) 실행, 결과 보고.

---

## 🔄 데이터 흐름 예시​

사용자가 Telegram에서 메시지를 보낼 때 일어나는 일입니다.

- Telegram -> Gateway: 사용자의 의도가 담긴 발화가 게이트웨이에 도착합니다.

- Gateway -> Hub: 게이트웨이가 허브에 특정 에이전트와 세션의 활성화를 요청합니다.

- Hub -> Agent: 허브가 필요한 컨텍스트(과거 기억, 현재 파일 상태)를 에이전트에게 주입합니다.

- Agent -> AI Model: 에이전트가 "AI 모델"과 대화하여 어떤 작업을 할지 결정합니다.

- Agent -> Tools: 필요 시 브라우저를 열거나 파일을 수정(Tool Use)합니다.

- Agent -> User: 최종 결과를 다시 게이트웨이를 통해 사용자에게 전달합니다.

## ✨ 기술적 특징​

- 확장성: 하나의 게이트웨이로 수십 명의 에이전트를 동시에 돌릴 수 있습니다.

- 플랫폼 독립: 에이전트가 돌고 있는 환경(macOS, Linux)에 관계없이 게이트웨이는 동일한 인터페이스를 제공합니다.

주요 특징 (Highlights)
(/concepts/features)다음
에이전트 런타임 (Agent Runtime)
(/concepts/agent)

- 🏗️ 3대 핵심 구성 요소
- 1. 게이트웨이 (Gateway) - '소통 창구'

- 2. 허브 (Hub) - '두뇌 및 컨트롤러'

- 3. 에이전트 (Agent) - '작업 수행자'

- 🔄 데이터 흐름 예시

- ✨ 기술적 특징

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


