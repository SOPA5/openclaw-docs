---
title: Google Gemini
sidebar_label: Google Gemini
sidebar_position: 4
---

-  (/)

- 모델 (Models)

- Google Gemini 설정 가이드

# Google Gemini 설정 가이드

Google Gemini는 매우 긴 컨텍스트 창(수백만 토큰)을 지원하여, 방대한 양의 문서나 코드 베이스를 한 번에 분석할 때 유리합니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. API 키 발급​ (#1-api-키-발급)

Google AI Studio (https://aistudio.google.com/)에서 무료 또는 유료 API 키를 발급받을 수 있습니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

```
openclaw configure set providers.google.apiKey "AIza..."
openclaw configure set models.default "google/gemini-1.5-pro"

```

---

## 🚀 주요 특징​ (#-주요-특징)

- 1M+ 컨텍스트: 수십 권의 책 분량이나 긴 비디오 파일도 한 번에 입력으로 넣을 수 있습니다.

- Google Search 통합: 에이전트가 최신 구글 검색 결과를 활용하여 답변하도록 설정할 수 있습니다.

- 저렴한 비용: 성능 대비 토큰 당 가격이 매우 경쟁력 있습니다.

## 🏢 Enterprise (Vertex AI)​ (#-enterprise-vertex-ai)

기업용 환경인 Google Cloud Vertex AI를 연동하려면 추가적인 인증 및 프로젝트 설정이 필요합니다. 상세 설정은 Vertex AI 가이드 (https://cloud.google.com/vertex-ai)를 참고하세요.

```
openclaw configure set providers.google.useVertex true

```

OpenAI 설정 가이드
(/providers/openai)다음
OpenRouter 설정 가이드
(/providers/openrouter)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. API 키 발급 (#1-api-키-발급)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- 🚀 주요 특징 (#-주요-특징)

- 🏢 Enterprise (Vertex AI) (#-enterprise-vertex-ai)

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
