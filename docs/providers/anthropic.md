---
title: Anthropic
sidebar_label: Anthropic
sidebar_position: 2
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 모델 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `providers/anthropic` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Anthropic

이 문서에서는 Anthropic 모델 Provider를 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 권장 인증 방식
- API 키 발급 위치
- `ANTHROPIC_API_KEY` 설정 방법
- config 방식 설정

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊

Anthropic은 OpenClaw에서 자주 쓰는 핵심 제공자 중 하나입니다. 보통 **Claude 계열 모델**을 사용할 때 연결합니다.

:::tip 💡 쉽게 이해하기
**Provider**는 AI 모델을 제공하는 회사나 서비스예요. 예를 들어 OpenAI나 Anthropic 같은 곳이 여기에 들어갑니다.
:::

## 권장 인증 방식

### 1) OAuth / Subscription 인증 우선

OpenClaw 최신 흐름에서는 Anthropic을 구독형 인증 또는 OAuth 기반으로 연결하는 방식이 강조됩니다.

- 사용 시작이 간단합니다.
- 일반 사용자 관점에서 키 관리 부담이 줄어듭니다.
- 장기 운영 시 계정 기반 인증 흐름을 관리하기 쉽습니다.

### 2) API key도 지원

조직 정책상 키 기반 통제가 필요하거나 서버 환경에서 직접 관리해야 하면 API key 방식도 사용할 수 있습니다.

## API 키는 어디서 받나요?

Anthropic API 키는 **`console.anthropic.com`**에서 발급할 수 있습니다.

기본 흐름은 이렇습니다.

1. `https://console.anthropic.com`에 로그인합니다.
2. API Keys 메뉴로 이동합니다.
3. 새 키를 발급합니다.
4. 발급 직후 복사해서 안전한 곳에 보관합니다.

:::caution API 키는 비밀번호처럼 다뤄야 합니다
한 번 노출된 키는 다른 사람이 대신 사용할 수 있습니다.
Git 저장소, 공개 문서, 스크린샷에 그대로 넣지 마세요.
:::

## 설정 방법 1: 환경 변수 (`ANTHROPIC_API_KEY`)

가장 흔한 방법은 환경 변수로 넣는 것입니다.

아래 예시를 참고하세요:
```bash
export ANTHROPIC_API_KEY="your_api_key_here"
```

그다음 OpenClaw를 실행하면 됩니다.

:::tip 왜 환경 변수를 쓰나요?
설정 파일에 비밀값을 직접 적는 것보다, **밖에서 안전하게 주입**하는 방식이라 관리가 더 쉬운 경우가 많습니다.
:::

## 설정 방법 2: config에 넣기

환경에 따라 config에서 Anthropic 설정을 연결할 수도 있습니다.

예를 들면, provider 설정에서 Anthropic API 키를 참조하도록 구성할 수 있습니다.

아래 예시는 개념 예시입니다.
```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "${ANTHROPIC_API_KEY}"
      }
    }
  }
}
```

즉, **직접 문자열을 박아 넣기보다 환경 변수와 연결**하는 방식이 더 안전합니다.

## 모델 이해

이 문서에서는 **Claude 4 계열** 기준으로 설명합니다.

- Claude Opus 계열: 깊은 추론과 고난도 작업
- Claude Sonnet 계열: 균형형 범용 작업

## 언제 적합한가

- 긴 문서 이해와 고품질 글쓰기
- 복잡한 추론과 분석
- 에이전트 중심 워크플로우
- 고품질 기본 모델을 하나 정해야 할 때

## 설정 흐름

1. Anthropic 계정을 준비합니다.
2. 가능하면 OAuth/구독 인증을 우선 사용합니다.
3. 필요 시 `console.anthropic.com`에서 API 키를 발급합니다.
4. `ANTHROPIC_API_KEY` 환경 변수 또는 config 참조로 연결합니다.
5. 기본 모델과 fallback 모델을 분리해 운영합니다.

## 운영 팁

- 메인 모델과 백업 모델을 나눠두면 안정성이 좋아집니다.
- 긴 작업이 많다면 Sonnet/Opus 역할을 구분해 두는 편이 좋습니다.
- 다른 제공자와 함께 fallback 체인을 구성하면 장애 대응이 쉬워집니다.

## ✅ 성공하면 이렇게 보입니다

- Anthropic 모델 호출 시 인증 오류가 나지 않습니다.
- 환경 변수 또는 config 참조가 정상 로드됩니다.
- OpenClaw에서 Claude 계열 모델을 선택해 응답을 받을 수 있습니다.

## 함께 보면 좋은 문서

- [모델 제공자 개요](/providers/)
- [OpenAI](/providers/openai)
- [Google Gemini](/providers/google-gemini)
- [FAQ](/help/faq)

## 🎯 다음 단계

- 다음으로 [모델 제공자 개요](/providers/) 문서를 읽어보세요.
- 다음으로 [OpenAI](/providers/openai) 문서를 읽어보세요.
- 다음으로 [Google Gemini](/providers/google-gemini) 문서를 읽어보세요.
