---
title: Anthropic
sidebar_label: Anthropic
sidebar_position: 2
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Anthropic 모델 연결 흐름과 특징을 파악하기 |
| 추천 환경 | - |
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

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

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

```bash
export ANTHROPIC_API_KEY="sk-ant-api03-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

그다음 OpenClaw를 실행하면 됩니다.

영구적으로 등록하려면 `~/.bashrc` 또는 `~/.zshrc`에 위 줄을 추가하세요:

```bash
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-xxx..."' >> ~/.bashrc
source ~/.bashrc
```

:::tip 왜 환경 변수를 쓰나요?
설정 파일에 비밀값을 직접 적는 것보다, **밖에서 안전하게 주입**하는 방식이라 관리가 더 쉬운 경우가 많습니다.  
Git에 올려도 키가 유출되지 않아요! 🔐
:::

---

## 설정 방법 2: OAuth 인증 (`claude setup-token`)

API 키 없이 **Claude 구독** 기반으로 인증하는 방법이에요.

```bash
claude setup-token
```

이 명령을 실행하면:
1. 브라우저가 열립니다
2. Anthropic 계정으로 로그인합니다
3. 토큰이 자동으로 저장됩니다

:::tip OAuth가 API Key랑 다른 점이 뭔가요?
- **API Key** → 돈 내고 사용량만큼 요금이 나오는 방식 (종량제)
- **OAuth / 구독** → 월정액 구독하면 쓸 수 있는 방식 (무제한에 가까운 정액제)  
구독이 있다면 OAuth 방식이 훨씬 유리해요!
:::

---

## 설정 방법 3: config 파일에 직접 넣기

`openclaw.json` 파일에 아래처럼 추가합니다:

```json
{
  "models": {
    "providers": {
      "anthropic": {
        "apiKey": "${ANTHROPIC_API_KEY}",
        "defaultModel": "claude-opus-4-6",
        "thinking": {
          "enabled": false,
          "budgetTokens": 10000
        },
        "caching": {
          "enabled": true
        }
      }
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `apiKey` → 환경 변수에서 키를 읽어와요. 파일에 직접 쓰지 않아서 안전해요.
- `defaultModel` → 기본으로 쓸 Claude 모델 이름이에요.
- `thinking.enabled` → `true`면 Claude가 생각하는 과정을 보여줘요. 복잡한 문제에 좋아요.
- `caching.enabled` → `true`면 같은 내용을 반복할 때 빠르고 저렴하게 해줘요.
:::

즉, **직접 문자열을 박아 넣기보다 환경 변수와 연결**하는 방식이 더 안전합니다.

---

## 공식 모델명 (2025 기준)

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `claude-opus-4-6` | 가장 강력한 추론 능력 | 복잡한 분석, 긴 문서, 코딩 |
| `claude-sonnet-4-5` | 속도와 품질 균형 | 일반 대화, 글쓰기, 요약 |
| `claude-haiku-3-5` | 빠르고 저렴 | 간단한 분류, 빠른 응답 |

:::tip 어떤 모델을 써야 하나요?
처음에는 `claude-sonnet-4-5`로 시작하는 걸 추천해요.  
성능이 충분하면 그대로, 더 깊은 추론이 필요하면 `claude-opus-4-6`으로 올리면 돼요.
:::

---

## 실전 운영 설정

### thinking 모드 (깊은 생각 모드)

복잡한 문제에서 Claude가 단계적으로 추론하게 해주는 기능이에요:

```json
{
  "models": {
    "providers": {
      "anthropic": {
        "thinking": {
          "enabled": true,
          "budgetTokens": 16000
        }
      }
    }
  }
}
```

:::tip `budgetTokens`가 뭔가요?
Claude가 생각에 쓸 수 있는 최대 토큰(글자 수) 예산이에요.  
크게 잡을수록 더 깊이 생각하지만 더 느리고 비싸져요.  
10000~16000 정도가 실전 운영에 적당해요.
:::

---

### caching 모드 (반복 절약 모드)

같은 시스템 프롬프트나 긴 문서를 반복할 때 비용을 확 줄여줘요:

```json
{
  "models": {
    "providers": {
      "anthropic": {
        "caching": {
          "enabled": true
        }
      }
    }
  }
}
```

---

### fast mode (빠른 응답 모드)

간단한 작업에서 빠르게 응답받고 싶을 때:

```json
{
  "models": {
    "providers": {
      "anthropic": {
        "defaultModel": "claude-haiku-3-5",
        "fastMode": true
      }
    }
  }
}
```

## 모델 이해

이 문서에서는 **Claude 4 계열** 기준으로 설명합니다.

- Claude Opus 계열: 깊은 추론과 고난도 작업 (`claude-opus-4-6`)
- Claude Sonnet 계열: 균형형 범용 작업 (`claude-sonnet-4-5`)
- Claude Haiku 계열: 빠른 경량 작업 (`claude-haiku-3-5`)

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
