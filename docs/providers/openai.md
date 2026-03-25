---
title: OpenAI
sidebar_label: OpenAI
sidebar_position: 3
---

-  (/)

- 모델 (Models)

- OpenAI 설정 가이드

# OpenAI 설정 가이드

OpenAI의 GPT 모델은 OpenClaw에서 가장 범용적으로 사용되는 모델입니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. API 키 발급​ (#1-api-키-발급)

OpenAI Platform (https://platform.openai.com/)에서 `API Keys`를 생성합니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

```
openclaw configure set providers.openai.apiKey "sk-..."
openclaw configure set models.default "openai/gpt-4o"

```

---

## 🌟 주요 지원 모델​ (#-주요-지원-모델)

- GPT-4o (Omni): 텍스트와 이미지를 동시에 처리하는 가장 진보된 모델입니다.

- GPT-4o-mini: 비용 효율적인 가벼운 모델로, 일반적인 비서 작업에 적합합니다.

- o1-preview / o1-mini: 추론 전용 모델로, 복잡한 수학이나 알고리즘 문제 해결 시 유용합니다.

## ⚙️ 고급 설정​ (#️-고급-설정)

### 엔드포인트 커스텀 (Azure 등)​ (#엔드포인트-커스텀-azure-등)

Azure OpenAI 또는 프록시 서버를 사용하는 경우 `baseUrl`을 수정할 수 있습니다.

```
openclaw configure set providers.openai.baseUrl "https://your-proxy.com/v1"

```

### 조직(Organization) ID​ (#조직organization-id)

여러 조직에 속해 있는 경우 특정 조직의 리소스를 사용하도록 지정할 수 있습니다.

```
openclaw configure set providers.openai.organization "org-..."

```

Anthropic 설정 가이드
(/providers/anthropic)다음
Google Gemini 설정 가이드
(/providers/google-gemini)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. API 키 발급 (#1-api-키-발급)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- 🌟 주요 지원 모델 (#-주요-지원-모델)

- ⚙️ 고급 설정 (#️-고급-설정)
- 엔드포인트 커스텀 (Azure 등) (#엔드포인트-커스텀-azure-등)

- 조직(Organization) ID (#조직organization-id)

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
