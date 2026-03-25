---
title: 모델 개요
sidebar_label: 모델 개요
sidebar_position: 1
---

# 모델 제공자 (Providers)

이 문서에서는 AI 모델 Provider를 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 핵심 선택 기준
- 지원 제공자 전체 목록
- 최신 모델명 기준

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw는 공식 기준상 **35개 이상 모델 제공자**를 지원합니다. 클라우드 모델, 게이트웨이형 집선 제공자, 자체 호스팅 추론 서버, 로컬 모델 런타임까지 하나의 Gateway 안에서 함께 운영할 수 있습니다.


:::tip 💡 쉽게 이해하기
**Provider**는 AI 모델을 제공하는 회사나 서비스예요. 예를 들어 OpenAI나 Anthropic 같은 곳이 여기에 들어갑니다.
:::

## 핵심 선택 기준

- **가장 간편한 구독형 사용**: [Anthropic](/providers/anthropic), [OpenAI](/providers/openai)
- **멀티모델 집선**: [OpenRouter](/providers/openrouter)
- **기업 AWS 환경**: [Amazon Bedrock](/providers/amazon-bedrock)
- **로컬/자체 호스팅**: [로컬 모델](/providers/local-models)
- **Google 생태계 및 Gemini 사용**: [Google Gemini](/providers/google-gemini)

## 지원 제공자 전체 목록

공식 Provider Directory 기준 주요 제공자는 아래와 같습니다.

| 제공자 | 분류 | 비고 |
|---|---|---|
| Anthropic | 구독/OAuth + API key | Claude 4 계열 중심 |
| OpenAI | OAuth/Codex + API key | GPT-5 계열 중심 |
| Google (Gemini) | 클라우드 | Gemini 3 계열 중심 |
| OpenRouter | 멀티모델 집선 | 여러 벤더 모델을 한 API로 접근 |
| Amazon Bedrock | 엔터프라이즈 클라우드 | AWS 보안/거버넌스 통합 |
| Ollama | 로컬 런타임 | 가장 대중적인 로컬 실행 경로 |
| vLLM | 자체 호스팅 서버 | 고성능 서빙 |
| SGLang | 자체 호스팅 서버 | 구조화된 추론/서빙 |
| Cloudflare AI Gateway | 게이트웨이형 | 라우팅·관측성 강화 |
| DeepSeek | 클라우드 | 추론/가성비 계열 |
| GitHub Copilot | 개발자 도구형 | 코딩 워크플로우 친화적 |
| GLM | 클라우드 | 다국어 활용 가능 |
| Groq | 고속 추론 | 저지연 응답 강점 |
| Hugging Face (Inference) | 허브/추론 API | 오픈 모델 접근성 우수 |
| Kilocode | 특화 제공자 | 커뮤니티/실험적 용도 |
| LiteLLM | 집선 레이어 | 여러 모델 백엔드 연결 |
| MiniMax | 클라우드 | 멀티모달 계열 |
| Mistral | 클라우드 | 유럽계 모델 제공자 |
| Model Studio (Alibaba Cloud) | 엔터프라이즈 클라우드 | Alibaba Cloud 연계 |
| Moonshot AI | 클라우드 | Kimi 계열 생태계 |
| NVIDIA | 가속기/클라우드 | NVIDIA 추론 생태계 |
| OpenCode | 에이전트/모델 경로 | 코딩 워크플로우 연계 |
| OpenCode Go | 에이전트/모델 경로 | OpenCode 계열 확장 |
| Perplexity | 검색 결합형 | 답변+검색 활용 |
| Qianfan | Baidu 계열 | 중국권 인프라 연계 |
| Qwen | 모델 계열 | Qwen 모델 접근 |
| Synthetic | 실험/합성 계열 | 특수 목적 제공자 |
| Together AI | 멀티모델 호스팅 | 오픈 모델 폭넓게 제공 |
| Venice | 특화 클라우드 | 선택형 제공자 |
| Vercel AI Gateway | 게이트웨이형 | 앱 스택 연계 용이 |
| Volcengine (Doubao) | 클라우드 | ByteDance 계열 |
| xAI | 클라우드 | Grok 계열 |
| Xiaomi | 클라우드 | 생태계 연계형 |
| Z.AI | 클라우드 | 신흥 제공자 |
| Deepgram | 전사(STT) | 음성 전사 전용 |
| Claude Max API Proxy | 커뮤니티 도구 | 보조/우회 운영용 |

## 최신 모델명 기준

과거 예시였던 `claude-3-5-sonnet`, `gpt-4o`, `gemini-1.5` 같은 표기는 현재 기준 문서에서는 권장하지 않습니다. 학습 게시판 문서에서는 아래 기준으로 이해하면 됩니다.

- Anthropic: **Claude 4 계열**
- OpenAI: **GPT-5 계열**
- Google: **Gemini 3 계열**

## 공통 설정 흐름

1. 원하는 제공자에서 인증 정보를 준비합니다.
2. `openclaw onboard --install-daemon`으로 기본 설정을 시작합니다.
3. 필요하면 제공자별 설정 문서를 보고 세부 옵션을 조정합니다.
4. 기본 모델과 fallback 모델을 분리해 두면 운영이 안정적입니다.

## 다음에 보면 좋은 문서

- [Anthropic](/providers/anthropic)
- [OpenAI](/providers/openai)
- [Google Gemini](/providers/google-gemini)
- [OpenRouter](/providers/openrouter)
- [Amazon Bedrock](/providers/amazon-bedrock)
- [로컬 모델](/providers/local-models)
- [FAQ](/help/faq)

## 🎯 다음 단계

- 다음으로 [Anthropic](/providers/anthropic) 문서를 읽어보세요.
- 다음으로 [OpenAI](/providers/openai) 문서를 읽어보세요.
- 다음으로 [OpenRouter](/providers/openrouter) 문서를 읽어보세요.
