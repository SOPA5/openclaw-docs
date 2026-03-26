---
title: Together AI
sidebar_label: Together AI
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Together AI를 연결하고 여러 오픈모델 접근 방식을 이해하기 |
| 추천 환경 | 다양한 오픈소스 모델을 한 API로 쓰고 싶은 환경 |
| 현재 위치 | `providers/together` |

:::tip 학습 팁
Together AI는 **여러 유명 오픈모델을 한 매장에서 고르는 느낌**이에요.
:::

# Together AI

Together AI는 여러 오픈소스 모델을 한 API에서 쓸 수 있게 해주는 제공자예요. 한 줄로 말하면, **다양한 모델을 편하게 실험하기 좋은 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
모델 하나만 파는 가게가 아니라, **여러 브랜드 장난감을 한 장난감 가게에서 고르는 것**과 비슷해요.
:::

### 언제 잘 맞을까?
- Llama, DeepSeek, Kimi 같은 모델을 넓게 써보고 싶을 때
- 오픈모델 실험을 자주 할 때
- 한 API 형식으로 여러 모델을 관리하고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export TOGETHER_API_KEY="xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export TOGETHER_API_KEY="xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "together": {
        "apiKey": "${TOGETHER_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "together/moonshotai/Kimi-K2.5"
      }
    }
  }
}
```

다른 모델로 바꾸고 싶다면 `primary`만 교체하면 돼요.

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `moonshotai/Kimi-K2.5` | 긴 문맥과 범용 성능 | 긴 문서, 생산성 작업 |
| `meta-llama/Llama-3.3-70B-Instruct-Turbo` | 빠르고 강한 범용 모델 | 일반 대화, 분석 |
| `deepseek-ai/DeepSeek-V3.1` | 코딩·추론에 강한 편 | 코드, 논리 문제 |
| `deepseek-ai/DeepSeek-R1` | 추론 특화 | 어려운 사고형 작업 |
| `Qwen/Qwen2.5-Coder-*` | 코딩 특화 계열 | 개발 보조 |

## ✅ 성공 확인 박스

- [ ] `TOGETHER_API_KEY`를 설정했다
- [ ] config에 `together` provider를 넣었다
- [ ] 기본 모델을 `together/...`로 지정했다
- [ ] 테스트 질문에 정상 응답이 왔다 🎉

## 다음 단계
- 여러 provider를 한 창구에서 더 넓게 비교하려면 [OpenRouter](/providers/openrouter)
- 코딩에 강한 단일 제공자가 필요하면 [DeepSeek](/providers/deepseek)

## 막히면 여기로
- Together AI: https://www.together.ai
- 공식 provider 문서: https://docs.openclaw.ai/providers/together
