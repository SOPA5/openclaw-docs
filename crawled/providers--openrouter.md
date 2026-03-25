<!-- source: https://openclaw-wheat.vercel.app/providers/openrouter -->

-  (/)

- 모델 (Models)

- OpenRouter 설정 가이드

# OpenRouter 설정 가이드

OpenRouter는 수많은 LLM 제공자를 하나의 API 인터페이스로 통합해주는 서비스입니다. 이를 통해 DeepSeek, Llama 3, Mistral 등의 오픈 소스 모델을 쉽게 사용할 수 있습니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. API 키 발급​ (#1-api-키-발급)

OpenRouter.ai (https://openrouter.ai/)에서 계정을 만들고 API 키를 발급받습니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

```
openclaw configure set providers.openrouter.apiKey "sk-or-..."

```

### 3. 모델 선택​ (#3-모델-선택)

OpenRouter에서 제공하는 모델 경로를 그대로 사용합니다.

```
# DeepSeek 사용 예시
openclaw configure set models.default "openrouter/deepseek/deepseek-chat"

# Llama 3.1 사용 예시
openclaw configure set models.default "openrouter/meta-llama/llama-3.1-70b-instruct"

```

---

## 💎 왜 OpenRouter인가요?​ (#-왜-openrouter인가요)

- 단일 API 키: 수십 개의 업체를 각각 가입할 필요가 없습니다.

- 최저가 경쟁: 동일한 모델에 대해 가장 저렴한 제공자를 자동으로 선택해주는 기능을 제공합니다.

- 다양한 모델: 공식 사이트에 출시되자마자 최신 오픈 소스 모델들이 가장 먼저 업데이트됩니다.

Google Gemini 설정 가이드
(/providers/google-gemini)다음
Amazon Bedrock 설정 가이드
(/providers/amazon-bedrock)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. API 키 발급 (#1-api-키-발급)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- 3. 모델 선택 (#3-모델-선택)

- 💎 왜 OpenRouter인가요? (#-왜-openrouter인가요)

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
