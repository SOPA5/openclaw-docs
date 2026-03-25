---
title: API
sidebar_label: API
sidebar_position: 6
---

-  (/)

- 게이트웨이 (Gateway)

- REST API 및 프로토콜 (API)

# REST API 및 프로토콜 (API)

OpenClaw 게이트웨이는 외부 프로그램이 에이전트의 기능을 호출하거나 상태를 조회할 수 있도록 표준 HTTP 인터페이스를 제공합니다.

## 🚀 주요 엔드포인트​ (#-주요-엔드포인트)

### 1. 도구 직접 호출 (Tools Invoke)​ (#1-도구-직접-호출-tools-invoke)

비결정론적인 대화 없이, 특정 도구만 프로그램적으로 실행하고 싶을 때 사용합니다.

- Method: `POST`

- Path: `/v1/tools/invoke`

- Body:

```
{
"tool":"read_file",
"args":{"path":"package.json"}
}

```

### 2. 에이전트 대화 (Completions)​ (#2-에이전트-대화-completions)

OpenAI API 규격과 호환되는 대화 엔드포인트입니다.

- Path: `/v1/chat/completions`

- 특징: 기존의 OpenAI SDK를 그대로 사용하여 OpenClaw 에이전트와 대화할 수 있습니다.

---

## 🔐 인증 및 보안​ (#-인증-및-보안)

모든 API 호출은 헤더에 인증 토큰을 포함해야 합니다. `Authorization: Bearer <your_gateway_token>`

## 🌐 웹소켓 (Wire Protocol)​ (#-웹소켓-wire-protocol)

실시간 메시지 스트리밍과 이벤트 알림을 위해 내부적인 바이너리 프로토콜(Wire Protocol)을 지원합니다. 주로 대시보드 UI와 게이트웨이 간의 초고속 데이터 전송에 사용됩니다.

## 💡 개발자 지원​ (#-개발자-지원)

API 상세 사양(Swagger/OpenAPI UI)은 게이트웨이가 실행 중일 때 `http://localhost:18789/docs`에서 확인할 수 있습니다.

MCP (Model Context Protocol) 연동
(/gateway/mcp)다음
주요 특징 (Highlights)
(/concepts/features)

- 🚀 주요 엔드포인트 (#-주요-엔드포인트)
- 1. 도구 직접 호출 (Tools Invoke) (#1-도구-직접-호출-tools-invoke)

- 2. 에이전트 대화 (Completions) (#2-에이전트-대화-completions)

- 🔐 인증 및 보안 (#-인증-및-보안)

- 🌐 웹소켓 (Wire Protocol) (#-웹소켓-wire-protocol)

- 💡 개발자 지원 (#-개발자-지원)

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
