---
title: DeepSeek
sidebar_label: DeepSeek
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | DeepSeek를 OpenClaw에 연결하고 모델 특징을 이해하기 |
| 추천 환경 | 빠른 비용 효율이 중요한 클라우드 환경 |
| 현재 위치 | `providers/deepseek` |

:::tip 학습 팁
DeepSeek는 **똑똑한데 비교적 가성비가 좋은 두뇌**라고 생각하면 쉬워요.
:::

# DeepSeek

DeepSeek는 OpenClaw에서 쓸 수 있는 AI 제공자입니다. 한 줄로 말하면, **코딩·추론·가성비가 강한 제공자**예요.

## 제공자 소개

:::tip 쉽게 이해하기
DeepSeek는 **문제를 오래 생각하는 친구**에 가까워요. 그냥 대답만 하는 모델도 있고, 더 깊게 생각하는 모델도 있어요.
:::

### 언제 잘 맞을까?
- 비용을 너무 크게 쓰고 싶지 않을 때
- 코딩이나 논리 문제를 자주 다룰 때
- 일반 대화용 모델과 추론용 모델을 나눠 쓰고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export DEEPSEEK_API_KEY="sk-xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export DEEPSEEK_API_KEY="sk-xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

:::tip 왜 환경변수로 넣나요?
비밀키를 문서 파일에 직접 쓰지 않아서 더 안전해요. 비밀번호를 메모장 맨 앞에 붙여두지 않는 것과 같아요.
:::

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "deepseek": {
        "apiKey": "${DEEPSEEK_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-chat"
      }
    }
  }
}
```

필요하면 추론 모델로 바꿀 수 있어요:

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "deepseek/deepseek-reasoner"
      }
    }
  }
}
```

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `deepseek-chat` | 일반 대화형 모델 | 일상 질문, 글쓰기, 일반 작업 |
| `deepseek-reasoner` | 더 깊게 생각하는 모델 | 코딩, 논리 문제, 어려운 분석 |

## ✅ 성공 확인 박스

- [ ] `DEEPSEEK_API_KEY`를 설정했다
- [ ] config에 `deepseek` provider를 넣었다
- [ ] 기본 모델을 `deepseek/...` 형식으로 지정했다
- [ ] 테스트 질문에 정상 응답이 왔다 🎉

## 다음 단계
- 더 범용적인 기본 제공자가 필요하면 [OpenAI](/providers/openai)
- 여러 모델을 한 번에 비교하고 싶으면 [OpenRouter](/providers/openrouter)

## 막히면 여기로
- API 키 발급: https://platform.deepseek.com/api_keys
- 공식 provider 문서: https://docs.openclaw.ai/providers/deepseek
