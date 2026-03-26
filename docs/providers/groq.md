---
title: Groq
sidebar_label: Groq
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Groq를 연결하고 초고속 추론 장점을 이해하기 |
| 추천 환경 | 속도가 아주 중요한 클라우드 환경 |
| 현재 위치 | `providers/groq` |

:::tip 학습 팁
Groq는 **엄청 빨리 대답하는 엔진**으로 이해하면 좋아요.
:::

# Groq

Groq는 OpenClaw에서 쓸 수 있는 초고속 추론 제공자예요. 한 줄로 말하면, **속도가 진짜 강한 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
Groq는 같은 숙제를 풀더라도 **엄청 빨리 풀어서 바로 내주는 친구** 같아요. 아주 무거운 문제보다, 빠르게 많이 처리할 때 특히 빛나요.
:::

### 언제 잘 맞을까?
- 응답 속도가 제일 중요할 때
- 대화형 서비스에서 기다림을 줄이고 싶을 때
- 오픈소스 모델을 빠르게 돌리고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export GROQ_API_KEY="gsk_xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export GROQ_API_KEY="gsk_xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "groq": {
        "apiKey": "${GROQ_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "groq/llama-3.3-70b-versatile"
      }
    }
  }
}
```

오디오 받아쓰기를 같이 쓰고 싶다면 이런 식으로 확장할 수 있어요:

```json
{
  "media": {
    "understanding": {
      "audio": {
        "models": [
          { "provider": "groq" }
        ]
      }
    }
  }
}
```

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `llama-3.3-70b-versatile` | 균형 좋은 대표 모델 | 일반 대화, 요약, 생산성 작업 |
| `llama-3.1-8b-instant` | 가볍고 빠름 | 짧은 응답, 빠른 처리 |
| `mixtral-8x7b` | 추론이 괜찮은 편 | 분석, 구조화 작업 |
| `gemma2-9b-it` | 작고 효율적 | 가벼운 자동화 |

## ✅ 성공 확인 박스

- [ ] `GROQ_API_KEY`를 설정했다
- [ ] config에 `groq` provider를 넣었다
- [ ] 기본 모델을 `groq/...`로 지정했다
- [ ] 테스트 질문에 아주 빠르게 응답이 왔다 🎉

## 다음 단계
- 더 다양한 모델 창구가 필요하면 [OpenRouter](/providers/openrouter)
- 로컬에서 직접 돌리고 싶으면 [로컬 모델](/providers/local-models)

## 막히면 여기로
- API 키 발급: https://console.groq.com/keys
- 모델 문서: https://console.groq.com/docs/models
- 공식 provider 문서: https://docs.openclaw.ai/providers/groq
