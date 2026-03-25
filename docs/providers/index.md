---
title: 모델 개요
sidebar_label: 모델 개요
sidebar_position: 1
---

# 모델 제공자 (Providers)

OpenClaw는 다양한 AI 모델 제공자(LLM Providers)를 지원합니다. API 키 하나만으로 최신 클라우드 모델부터 로컬에서 돌아가는 오픈 소스 모델까지 자유롭게 연결할 수 있습니다.

## 🚀 지원되는 주요 제공자​

제공자주요 모델특징
AnthropicClaude 3.5 Sonnet코딩 및 논리적 추론 최강자
OpenAIGPT-4o, o1가장 범용적이고 안정적인 성능
Google GeminiGemini 1.5 Pro긴 컨텍스트 창(Long Context) 지원
OpenRouterDeepSeek, Llama 3수백 개의 모델을 하나의 API로 접근
Amazon BedrockClaude, Llama (AWS)기업용 보안 및 인프라 통합
로컬 (Local)Ollama, LM Studio프라이버시 보호 및 비용 무료

---

## ⚙️ 설정 방법 (Common)​

대부분의 모델은 다음과 같은 방식으로 설정합니다.

### 1. 온보딩 마법사 사용 (추천)​

```
openclaw onboard

```

마법사를 따라가며 사용하려는 모델을 선택하고 API 키를 입력하면 자동으로 설정 파일이 생성됩니다.

### 2. 수동 설정​

`~/.openclaw/config.yml` 파일에서 직접 수정할 수도 있습니다.

```
models:
default: anthropic/claude-3-5-sonnet-latest
providers:
anthropic:
apiKey:"your-api-key"

```

세부 제공자별 설정 가이드 (/providers/anthropic)

iMessage (Legacy - imsg) 가이드
(/channels/imessage)다음
Anthropic 설정 가이드
(/providers/anthropic)

- 🚀 지원되는 주요 제공자

- ⚙️ 설정 방법 (Common)
- 1. 온보딩 마법사 사용 (추천)

- 2. 수동 설정

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


