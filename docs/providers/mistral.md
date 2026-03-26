---
title: Mistral
sidebar_label: Mistral
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Mistral을 연결하고 텍스트·오디오 활용 흐름을 이해하기 |
| 추천 환경 | 유럽계 AI 제공자와 가벼운 멀티모달 구성이 필요한 환경 |
| 현재 위치 | `providers/mistral` |

:::tip 학습 팁
Mistral은 **가볍고 똑똑한 유럽계 AI 팀**으로 생각하면 기억하기 쉬워요.
:::

# Mistral

Mistral은 텍스트 모델과 오디오 전사까지 다룰 수 있는 제공자예요. 한 줄로 말하면, **가볍고 실용적인 범용 AI 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
Mistral은 큰 트럭보다는 **빠르고 잘 움직이는 똑똑한 승합차** 같은 느낌이에요. 필요한 일을 알차게 잘해요.
:::

### 언제 잘 맞을까?
- 유연한 범용 모델이 필요할 때
- 텍스트와 오디오 전사를 함께 고려할 때
- embedding이나 보조 AI 기능까지 묶어서 보고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export MISTRAL_API_KEY="sk-xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export MISTRAL_API_KEY="sk-xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

기본 LLM 연결 예시:

```json
{
  "models": {
    "providers": {
      "mistral": {
        "apiKey": "${MISTRAL_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "mistral/mistral-large-latest"
      }
    }
  }
}
```

오디오 전사까지 붙이고 싶다면:

```json
{
  "tools": {
    "media": {
      "audio": {
        "enabled": true,
        "models": [
          { "provider": "mistral", "model": "voxtral-mini-latest" }
        ]
      }
    }
  }
}
```

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `mistral-large-latest` | 대표 고성능 모델 | 분석, 글쓰기, 일반 업무 |
| `mistral-medium-latest` | 균형형 모델 | 대화, 생산성 작업 |
| `ministral-8b-latest` | 가벼운 모델 | 빠른 작업, 비용 절약 |
| `voxtral-mini-latest` | 오디오 전사 모델 | 음성 받아쓰기 |
| `mistral-embed` | 임베딩 모델 | 검색, memory 기능 |

## ✅ 성공 확인 박스

- [ ] `MISTRAL_API_KEY`를 설정했다
- [ ] config에 `mistral` provider를 넣었다
- [ ] 기본 모델을 `mistral/...`로 지정했다
- [ ] 필요하면 오디오 모델도 추가했다
- [ ] 테스트 질문 또는 전사가 정상 동작했다 🎉

## 다음 단계
- 범용 기본 제공자를 비교하려면 [OpenAI](/providers/openai), [Anthropic](/providers/anthropic)
- 여러 오픈모델을 넓게 실험하려면 [Together AI](/providers/together)

## 막히면 여기로
- Mistral API: https://console.mistral.ai
- 공식 provider 문서: https://docs.openclaw.ai/providers/mistral
