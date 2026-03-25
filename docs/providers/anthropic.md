---
title: Anthropic
sidebar_label: Anthropic
sidebar_position: 2
---

-  (/)

- 모델 (Models)

- Anthropic 설정 가이드

# Anthropic 설정 가이드

Anthropic의 Claude 3.5 Sonnet은 OpenClaw 에이전트가 가장 똑똑하게 동작하는 모델 중 하나입니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. API 키 발급​ (#1-api-키-발급)

Anthropic Console (https://console.anthropic.com/)에서 계정을 만들고 `API Keys` 메뉴에서 새 키를 발급받습니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

```
openclaw configure set providers.anthropic.apiKey "sk-ant-..."
openclaw configure set models.default "anthropic/claude-3-5-sonnet-latest"

```

---

## ✨ 주요 기능 및 팁​ (#-주요-기능-및-팁)

### 프롬프트 캐싱 (Prompt Caching)​ (#프롬프트-캐싱-prompt-caching)

OpenClaw는 Anthropic의 프롬프트 캐싱 기능을 기본적으로 지원합니다. 이를 통해 긴 문서를 반복적으로 요약하거나 코딩 작업을 할 때 비용을 최대 90%까지 절감하고 응답 속도를 높일 수 있습니다.

### 권장 모델​ (#권장-모델)

- Claude 3.5 Sonnet (추천): 속도와 지능의 균형이 가장 완벽합니다.

- Claude 3.5 Haiku: 매우 빠른 속도가 필요한 단순 작업에 적합합니다.

- Claude 3 Opus: 복잡한 논리 구조가 필요한 특수 상황에 사용합니다.

## ⚠️ 주의사항​ (#️-주의사항)

Anthropic 모델은 도구 사용(Tool Use) 능력이 뛰어나지만, API 크레딧이 부족할 경우 에러가 발생할 수 있으니 콘솔에서 잔액을 확인하세요.

모델 제공자 (Providers)
(/providers/)다음
OpenAI 설정 가이드
(/providers/openai)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. API 키 발급 (#1-api-키-발급)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- ✨ 주요 기능 및 팁 (#-주요-기능-및-팁)
- 프롬프트 캐싱 (Prompt Caching) (#프롬프트-캐싱-prompt-caching)

- 권장 모델 (#권장-모델)

- ⚠️ 주의사항 (#️-주의사항)

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
