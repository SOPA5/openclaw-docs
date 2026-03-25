---
title: MCP
sidebar_label: MCP
sidebar_position: 5
---

# MCP (Model Context Protocol) 연동

OpenClaw는 최신 인공지능 도구 통합 표준인 **MCP (Model Context Protocol)**를 적극적으로 지원합니다. 이를 통해 수많은 서드파티 도구들을 에이전트의 능력(Skills)으로 즉시 가져올 수 있습니다.

## 🏗️ mcporter 런타임​

OpenClaw 내부에는 MCP 서버를 구동하고 통신을 중계하는 mcporter라는 전용 런타임이 포함되어 있습니다.

## 🛠️ MCP 서버 추가하기​

### 1. 데스크탑 앱에서 추가 (추천)​

- macOS 앱의 `Settings > Skills` 메뉴로 이동합니다.

- `Add Skill`을 누르고 MCP 서버의 주소(또는 npx 명령어)를 입력합니다.
- 예시: `npx @modelcontextprotocol/server-github`

### 2. CLI에서 추가​

`config.yml`의 `mcp` 섹션을 직접 수정합니다.

```
mcp:
servers:
github:
command:"npx"
args:["@modelcontextprotocol/server-github"]
env:
GITHUB_PERSONAL_ACCESS_TOKEN:"..."

```

---

## 🔌 주요 활용 시나리오​

- GitHub 연동: 이슈 관리, 코드 다운로드, 풀 리퀘스트 분석.

- 브라우저 제어: MCP 표준에 맞춘 외부 브라우저 엔진 통합.

- 데이터베이스 조회: SQL 쿼리를 직접 실행하는 DB 도구 연결.

## 🌐 MCP 클라이언트 기능​

OpenClaw는 단순한 MCP 호스트를 넘어, 다른 MCP 클라이언트에 기능을 제공하거나 서로 소통할 수 있는 기능(Bridging)을 확장하고 있습니다.

운영 환경에서의 샌드박싱 (Sandboxing)
(/gateway/sandboxing)다음
REST API 및 프로토콜 (API)
(/gateway/api)

- 🏗️ mcporter 런타임

- 🛠️ MCP 서버 추가하기
- 1. 데스크탑 앱에서 추가 (추천)

- 2. CLI에서 추가

- 🔌 주요 활용 시나리오

- 🌐 MCP 클라이언트 기능

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

