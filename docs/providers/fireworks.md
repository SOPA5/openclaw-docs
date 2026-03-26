---
title: Fireworks AI
sidebar_label: Fireworks AI
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Fireworks AI를 연결하고 빠른 오픈모델 API 활용법을 이해하기 |
| 추천 환경 | 빠른 서버형 오픈모델이 필요한 클라우드 환경 |
| 현재 위치 | `providers/fireworks` |

:::tip 학습 팁
Fireworks AI는 **오픈소스 모델을 빠르게 배달해주는 서비스**라고 생각하면 쉬워요.
:::

# Fireworks AI

Fireworks AI는 여러 오픈모델을 빠르게 제공하는 클라우드 AI 제공자예요. 한 줄로 말하면, **오픈모델을 빠른 API로 쓰고 싶을 때 좋은 선택**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
직접 서버를 세팅하지 않고도, **이미 잘 차려진 주방에서 빠르게 요리를 받아오는 느낌**이에요.
:::

### 언제 잘 맞을까?
- 직접 GPU 서버를 운영하고 싶지 않을 때
- 오픈모델을 빠르게 API로 쓰고 싶을 때
- 추론 속도와 운영 편의성을 함께 원할 때

## 설정 방법

### 1) 환경변수 설정

```bash
export FIREWORKS_API_KEY="fw_xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export FIREWORKS_API_KEY="fw_xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "fireworks": {
        "apiKey": "${FIREWORKS_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "fireworks/accounts/fireworks/models/llama-v3p3-70b-instruct"
      }
    }
  }
}
```

> Fireworks는 OpenAI 호환 스타일로 쓰는 경우가 많아서, 실제 모델 ID는 콘솔에 보이는 이름을 그대로 확인하는 것이 가장 안전해요.

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `accounts/fireworks/models/llama-v3p3-70b-instruct` | 범용 대표 예시 | 일반 대화, 요약 |
| `accounts/fireworks/models/deepseek-v3` | 강한 오픈모델 예시 | 분석, 코딩 |
| `accounts/fireworks/models/qwen2p5-coder-32b-instruct` | 코딩 계열 예시 | 개발 보조 |
| `accounts/fireworks/models/mixtral-8x7b-instruct` | 균형형 예시 | 생산성 작업 |

## ✅ 성공 확인 박스

- [ ] `FIREWORKS_API_KEY`를 설정했다
- [ ] config에 `fireworks` provider를 넣었다
- [ ] 기본 모델을 `fireworks/...`로 지정했다
- [ ] 테스트 질문에 정상 응답이 왔다 🎉

## 다음 단계
- 직접 서버까지 통제하고 싶으면 [vLLM](/providers/vllm)
- 비슷하게 여러 오픈모델을 폭넓게 쓰려면 [Together AI](/providers/together)

## 막히면 여기로
- Fireworks AI: https://fireworks.ai
- 모델 ID는 Fireworks 콘솔에서 다시 확인하세요
