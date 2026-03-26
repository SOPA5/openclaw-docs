---
title: Perplexity
sidebar_label: Perplexity
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Perplexity를 OpenClaw에 연결하고 웹 검색 제공자 역할을 이해하기 |
| 추천 환경 | 최신 웹 검색이 중요한 환경 |
| 현재 위치 | `providers/perplexity` |

:::tip 학습 팁
Perplexity는 **모델 제공자라기보다 인터넷 조사 전문가**에 더 가까워요.
:::

# Perplexity

Perplexity는 OpenClaw에서 **웹 검색용 제공자**로 주로 사용돼요. 한 줄로 말하면, **인터넷에서 최신 정보를 찾아오는 데 강한 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
일반 모델이 머릿속 기억으로 답하는 학생이라면, Perplexity는 **도서관과 인터넷을 바로 찾아보는 학생** 같아요.
:::

### 언제 잘 맞을까?
- 최신 웹 정보를 자주 찾아야 할 때
- 검색 결과에 출처가 중요할 때
- 일반 LLM과 검색 기능을 나눠 운영하고 싶을 때

## 설정 방법

### 1) 환경변수 설정

직접 Perplexity 키를 쓸 때:

```bash
export PERPLEXITY_API_KEY="pplx-xxxxxxxxxxxxxxxx"
```

OpenRouter를 통해 Sonar를 쓸 때는 `OPENROUTER_API_KEY`를 쓸 수도 있어요.

### 2) config JSON 스니펫

Perplexity 검색 provider 설정 예시:

```json
{
  "plugins": {
    "entries": {
      "perplexity": {
        "config": {
          "webSearch": {
            "apiKey": "${PERPLEXITY_API_KEY}"
          }
        }
      }
    }
  }
}
```

도구 레벨에서 웹 검색 provider를 맞추는 예시:

```json
{
  "tools": {
    "web": {
      "search": {
        "provider": "perplexity"
      }
    }
  }
}
```

### 3) 대표 모드 / 모델명

| 이름 | 특징 | 추천 용도 |
|---|---|---|
| `pplx-` API key | Perplexity 기본 검색 API | 최신 검색, 필터 검색 |
| `sonar` 계열 | 요약형 검색 응답 | 답변 + 출처가 함께 필요한 경우 |
| OpenRouter 경유 Sonar | OpenRouter 키 사용 | 기존 OpenRouter 운영과 함께 쓰기 |

## ✅ 성공 확인 박스

- [ ] `PERPLEXITY_API_KEY` 또는 `OPENROUTER_API_KEY`를 준비했다
- [ ] config에 Perplexity 검색 설정을 넣었다
- [ ] 웹 검색 provider가 `perplexity`로 연결됐다
- [ ] 최신 정보 질문에서 검색 결과가 잘 나왔다 🎉

## 다음 단계
- 일반 대화용 모델도 같이 붙이려면 [OpenAI](/providers/openai) 또는 [Anthropic](/providers/anthropic)
- 더 넓은 provider 비교는 [모델 개요](/providers)

## 막히면 여기로
- 공식 provider 문서: https://docs.openclaw.ai/providers/perplexity-provider
- 도구 문서도 함께 확인하면 좋아요
