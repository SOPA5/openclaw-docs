---
title: 플러그인 SDK
sidebar_label: 플러그인 SDK
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | OpenClaw 플러그인을 만들 때 큰 흐름과 기본 구조를 이해하기 |
| 추천 환경 | OpenClaw가 설치된 개발 환경 |
| 현재 위치 | `tools/plugin-sdk` |

:::tip 학습 팁
이 문서는 **플러그인을 처음 만드는 사람**도 따라갈 수 있게 쉽게 설명합니다.
명령어를 전부 외우는 것보다, **플러그인이 어디에 쓰이고 어떤 파일이 중요한지** 먼저 잡는 게 핵심이에요.
:::

# 플러그인 SDK (Plugin SDK)

플러그인은 OpenClaw의 기능을 **더 크게 확장하는 모듈**입니다.

쉽게 말하면:
- **스킬**은 "이럴 때 이렇게 해"라고 알려주는 **설명서**에 가깝고
- **플러그인**은 진짜로 **새 손발이나 새 부품을 붙이는 것**에 가깝습니다.

예를 들어 새 채널(Discord), 새 모델 제공자(OpenAI), 새 검색 기능(Brave), 새 메모리 방식 같은 것은 보통 플러그인으로 들어옵니다.

## 📌 이 문서에서 배우는 것
- 플러그인이 무엇인지
- 플러그인과 스킬의 차이
- 플러그인 매니페스트 파일 구조
- 플러그인을 만드는 기본 흐름
- OpenClaw에 함께 들어있는 번들 플러그인 예시
- MCP 서버와 플러그인의 관계
- 아주 작은 실전 예시

:::tip 쉽게 이해하기
플러그인은 **레고 블록 추가**예요.
원래 있던 성에 새로운 문, 다리, 망원경, 로봇 팔을 붙이는 느낌이라고 생각하면 쉬워요.
:::

## 플러그인이란?

플러그인은 OpenClaw에 새로운 기능을 추가하는 확장 모듈입니다.

플러그인으로 할 수 있는 일은 아주 많습니다.
예를 들면:

- 새 **채널** 연결하기
- 새 **AI 모델 제공자** 추가하기
- 새 **검색/크롤링 도구** 연결하기
- 새 **음성(TTS/STT)** 기능 붙이기
- 새 **메모리 엔진**이나 **툴** 등록하기
- 필요한 경우 **HTTP 라우트**, **CLI 명령**, **이벤트 훅** 만들기

즉, 플러그인은 OpenClaw의 몸체를 더 크게 확장하는 방법입니다.

## 플러그인 vs 스킬

둘은 비슷해 보여도 역할이 다릅니다.

| 구분 | 플러그인 | 스킬 |
|---|---|---|
| 하는 일 | 기능 자체를 추가함 | 기능을 더 잘 쓰는 방법을 알려줌 |
| 예시 | 새 채널, 새 모델, 새 툴 추가 | GitHub 작업 절차, 날씨 응답 방식 안내 |
| 코드 필요 여부 | 보통 필요함 | 보통 문서(`SKILL.md`) 중심 |
| 비유 | 새 공구를 공구상자에 넣기 | 공구 사용 설명서 붙이기 |

### 한 줄로 정리하면
- **플러그인** = 기능 추가
- **스킬** = 사용법 추가

:::tip 같이 쓰면 가장 강해요
많은 경우 **플러그인으로 기능을 붙이고**, **스킬로 그 기능을 잘 쓰게** 만들면 가장 좋습니다.
:::

## 플러그인 구조: 매니페스트 파일

플러그인에는 보통 **매니페스트(manifest)** 파일이 들어갑니다.
OpenClaw의 실제 파일 이름은 보통 **`openclaw.plugin.json`** 입니다.

사용자가 흔히 "manifest.json"이라고 부르기도 하지만,
OpenClaw에서는 **정확한 파일명 `openclaw.plugin.json`** 을 쓰는 경우가 많습니다.

가장 작은 예시는 이렇게 생겼습니다.

```json
{
  "id": "my-plugin",
  "name": "My Plugin",
  "description": "Adds a custom tool to OpenClaw",
  "configSchema": {
    "type": "object",
    "additionalProperties": false
  }
}
```

### 이 파일에서 중요한 것
- `id`: 플러그인 식별자
- `name`: 사람이 읽는 이름
- `description`: 어떤 기능인지 설명
- `configSchema`: 설정 파일에서 어떤 옵션을 받을지 정의

즉, 이 파일은 플러그인의 **이름표 + 규칙표**라고 보면 됩니다.

## 플러그인 개발 기본 흐름

처음 만들 때는 보통 아래 순서로 갑니다.

### 1) 무엇을 만들지 정하기
먼저 결정합니다.

- 새 채널 플러그인인가?
- 새 모델 제공자인가?
- 새 툴인가?
- 검색/음성/이미지 기능인가?

### 2) 패키지와 매니페스트 만들기
보통 다음 정보가 필요합니다.

- `package.json`
- `openclaw.plugin.json`
- 실제 코드 엔트리 파일 (`index.ts` 등)

예시:

```json
{
  "name": "@myorg/openclaw-my-plugin",
  "version": "1.0.0",
  "type": "module",
  "openclaw": {
    "extensions": ["./index.ts"]
  }
}
```

### 3) 엔트리 파일에서 기능 등록하기
플러그인 코드는 보통 SDK의 엔트리 함수를 사용해 시작합니다.

아주 작은 툴 플러그인 예시는 이렇게 볼 수 있습니다.

```ts
import { definePluginEntry } from "openclaw/plugin-sdk/plugin-entry";
import { Type } from "@sinclair/typebox";

export default definePluginEntry({
  id: "my-plugin",
  name: "My Plugin",
  description: "Adds a custom tool to OpenClaw",
  register(api) {
    api.registerTool({
      name: "my_tool",
      description: "Do a thing",
      parameters: Type.Object({ input: Type.String() }),
      async execute(_id, params) {
        return {
          content: [{ type: "text", text: `Got: ${params.input}` }],
        };
      },
    });
  },
});
```

여기서 핵심은 `register(api)` 안에서 기능을 붙인다는 점입니다.

예를 들면 이런 등록이 가능합니다.
- `api.registerTool(...)`
- `api.registerProvider(...)`
- `api.registerChannel(...)`
- `api.registerCommand(...)`
- `api.registerHook(...)`
- `api.registerHttpRoute(...)`

### 4) 설치하고 켜기
플러그인은 보통 이렇게 설치합니다.

```bash
openclaw plugins install <package-name>
```

설치 후에는 보통 상태를 확인하거나 설정을 넣습니다.

```bash
openclaw plugins list
openclaw plugins inspect <id>
openclaw plugins enable <id>
```

### 5) Gateway에 설정 반영하기
플러그인 설정은 보통 `plugins.entries.<id>.config` 아래에 들어갑니다.

예시:

```json5
{
  plugins: {
    entries: {
      brave: {
        enabled: true,
        config: {
          webSearch: {
            apiKey: "${BRAVE_API_KEY}"
          }
        }
      }
    }
  }
}
```

## 번들 플러그인 예시

OpenClaw에는 처음부터 함께 들어오는 **bundled plugins** 가 있습니다.
즉, 설치본 안에 이미 포함된 플러그인들이에요.

아래는 이해하기 쉬운 대표 예시입니다.

| 플러그인 | 하는 일 |
|---|---|
| `brave` | Brave Search 기반 웹 검색 기능 |
| `firecrawl` | Firecrawl 기반 검색/크롤링 기능 |
| `duckduckgo` | DuckDuckGo 검색 기능 |
| `telegram` | Telegram 채널 연결 |
| `discord` | Discord 채널 연결 |
| `slack` | Slack 채널 연결 |
| `anthropic` | Anthropic 모델 제공자 |
| `openai` | OpenAI / OpenAI Codex 제공자 |
| `google` | Google Gemini 제공자 |
| `openrouter` | OpenRouter 제공자 |
| `memory-core` | 기본 메모리 플러그인 |
| `memory-lancedb` | 확장형 장기 메모리 플러그인 |
| `device-pair` | 기기 페어링 요청과 승인 관련 기능 |
| `talk-voice` | Talk Mode 음성 선택 관리 |

:::tip 중요한 점
번들 플러그인이라고 해서 항상 전부 켜져 있는 것은 아닙니다.
어떤 것은 기본 활성화이고, 어떤 것은 **명시적으로 enable** 해야 합니다.
:::

## MCP 서버를 플러그인으로 연결한다는 뜻

MCP는 외부 도구를 연결하는 **표준 규칙**입니다.
플러그인은 OpenClaw 안에서 기능을 묶어 넣는 **패키지 방식**이고요.

둘은 경쟁 관계가 아니라, 같이 움직일 수 있습니다.

### 쉽게 말하면
- **MCP** = 외부 도구와 약속하는 연결 규칙
- **플러그인** = 그 연결을 OpenClaw 안에 넣어 배포하는 포장 상자

예를 들어 어떤 회사가 내부 문서 검색 MCP 서버를 만들었다고 해 볼게요.
그러면 OpenClaw용 플러그인이:

1. 그 MCP 서버에 연결하고
2. 필요한 설정값을 받고
3. 도구를 등록해서
4. 에이전트가 쓸 수 있게 보여줄 수 있습니다.

즉, **MCP 서버를 직접 붙일 수도 있고**, **그 연결을 더 쉽게 쓰도록 플러그인으로 감쌀 수도 있다**고 이해하면 됩니다.

:::tip 실무 감각
외부 기능을 안정적으로 여러 사람이 쓰게 하려면,
그냥 흩어져 연결하는 것보다 **플러그인 형태로 정리**하는 쪽이 더 관리하기 쉬운 경우가 많습니다.
:::

## 실전 예시: 간단한 검색 도구 플러그인 상상하기

상황:
우리 팀이 사내 문서 검색 서버를 갖고 있다고 해 봅시다.

원하는 것:
- 에이전트가 "사내 위키에서 찾아줘" 같은 요청을 처리하면 좋겠음

이럴 때 흐름은 보통 이렇습니다.

1. 검색 서버(MCP 또는 API)가 있음
2. OpenClaw 플러그인을 만듦
3. 플러그인 안에서 `api.registerTool(...)` 로 검색 툴 등록
4. 설정에서 서버 주소와 토큰을 넣음
5. 필요하면 스킬로 "언제 이 검색 툴을 우선 써야 하는지" 알려줌

결과:
에이전트는 그냥 말로만 답하는 것이 아니라,
**실제로 우리 회사 문서를 뒤져서** 더 정확하게 답할 수 있게 됩니다.

## 자주 헷갈리는 포인트

### 1) 스킬만 있으면 플러그인 없이도 될까?
가벼운 절차 안내는 가능합니다.
하지만 **새 기능 자체**를 붙이는 것은 보통 플러그인이 맡습니다.

### 2) 매니페스트 파일 이름이 `manifest.json` 인가요?
OpenClaw 문맥에서는 보통 **`openclaw.plugin.json`** 이 핵심입니다.
"manifest"는 역할을 설명하는 일반 표현으로 이해하면 됩니다.

### 3) 플러그인은 꼭 OpenClaw 저장소 안에 넣어야 하나요?
아니요.
외부 패키지로 배포하고 `openclaw plugins install` 로 설치할 수 있습니다.

## ✅ 성공 확인
- 플러그인이 "기능 자체를 추가하는 모듈"이라는 뜻을 설명할 수 있습니다.
- 스킬과 플러그인의 차이를 구분할 수 있습니다.
- `openclaw.plugin.json` 이 왜 중요한지 설명할 수 있습니다.
- 플러그인이 툴, 채널, 제공자, 메모리 등을 등록할 수 있다는 걸 이해했습니다.
- MCP와 플러그인이 함께 쓰일 수 있다는 점을 설명할 수 있습니다.

## ➡️ 다음 단계
- [도구 개요](/tools/)
- [MCP](/gateway/mcp)
- [스킬](/concepts/skills)
