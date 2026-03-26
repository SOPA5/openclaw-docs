---
title: vLLM
sidebar_label: vLLM
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | vLLM을 OpenClaw에 연결하고 고성능 서빙 개념을 이해하기 |
| 추천 환경 | GPU 서버에서 고성능 추론 서빙이 필요한 환경 |
| 현재 위치 | `providers/vllm` |

:::tip 학습 팁
vLLM은 **모델을 빠르고 효율적으로 여러 사람에게 나눠주는 서버**라고 생각하면 쉬워요.
:::

# vLLM

vLLM은 오픈소스 모델을 고성능으로 서빙하는 도구예요. 한 줄로 말하면, **내 서버에 있는 모델을 빠르게 배포해서 쓰고 싶을 때 좋은 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
Ollama가 집에서 한 접시씩 요리하는 느낌이라면, vLLM은 **급식실처럼 많은 주문을 효율적으로 처리하는 주방**에 가까워요.
:::

### 언제 잘 맞을까?
- GPU 서버에서 여러 요청을 빠르게 처리하고 싶을 때
- OpenAI 호환 API로 로컬 모델을 연결하고 싶을 때
- context window, max tokens 같은 값을 직접 다루고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export VLLM_API_KEY="vllm-local"
```

> 인증이 없는 로컬 서버라면 아무 값이나 넣어도 되는 경우가 많아요.

### 2) config JSON 스니펫

가장 기본 예시:

```json
{
  "models": {
    "providers": {
      "vllm": {
        "baseUrl": "http://127.0.0.1:8000/v1",
        "apiKey": "${VLLM_API_KEY}",
        "api": "openai-completions"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "vllm/your-model-id"
      }
    }
  }
}
```

모델 정보를 직접 적고 싶다면:

```json
{
  "models": {
    "providers": {
      "vllm": {
        "baseUrl": "http://127.0.0.1:8000/v1",
        "apiKey": "${VLLM_API_KEY}",
        "api": "openai-completions",
        "models": [
          {
            "id": "Qwen/Qwen2.5-32B-Instruct",
            "name": "Qwen 2.5 32B Instruct",
            "reasoning": false,
            "input": ["text"],
            "contextWindow": 128000,
            "maxTokens": 8192
          }
        ]
      }
    }
  }
}
```

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `your-model-id` | vLLM 서버에 올린 실제 모델 ID | 기본 연결 확인 |
| `Qwen/Qwen2.5-32B-Instruct` | 범용 인스트럭트 모델 예시 | 일반 업무, 분석 |
| `meta-llama/Llama-3.3-70B-Instruct` | 큰 범용 모델 예시 | 고품질 대화 |
| `deepseek-ai/DeepSeek-R1-Distill-*` | 추론 계열 예시 | 어려운 분석 |

## ✅ 성공 확인 박스

- [ ] vLLM 서버가 `/v1/models`를 제공한다
- [ ] `VLLM_API_KEY`를 설정했다
- [ ] config에 `vllm` provider를 넣었다
- [ ] 기본 모델을 `vllm/...`로 지정했다
- [ ] 테스트 질문에 서버 모델이 응답했다 🎉

## 다음 단계
- 더 쉬운 로컬 실행이 필요하면 [Ollama](/providers/ollama)
- 여러 모델 경로를 비교하려면 [모델 개요](/providers)

## 막히면 여기로
- 공식 provider 문서: https://docs.openclaw.ai/providers/vllm
