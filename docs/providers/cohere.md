---
title: Cohere
sidebar_label: Cohere
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Cohere를 OpenClaw에 연결하고 기업형 활용 감각을 익히기 |
| 추천 환경 | 검색, 임베딩, 기업형 텍스트 작업이 중요한 환경 |
| 현재 위치 | `providers/cohere` |

:::tip 학습 팁
Cohere는 **회사에서 문서 다루기 좋은 AI 도구 상자**처럼 생각하면 쉬워요.
:::

# Cohere

Cohere는 텍스트 생성, 검색, 임베딩 쪽에서 많이 쓰이는 AI 제공자예요. 한 줄로 말하면, **문서 작업과 기업형 활용에 잘 맞는 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
Cohere는 단순히 말만 잘하는 친구라기보다, **문서를 잘 읽고 잘 정리하는 사무 전문가** 같은 느낌이에요.
:::

### 언제 잘 맞을까?
- 문서 검색과 텍스트 이해가 중요할 때
- 임베딩이나 RAG 흐름을 고려할 때
- 기업형 텍스트 처리 도구를 찾을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export COHERE_API_KEY="xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export COHERE_API_KEY="xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "cohere": {
        "apiKey": "${COHERE_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "cohere/command-r-plus"
      }
    }
  }
}
```

검색/임베딩 중심으로 설계할 때도 Cohere를 보조 provider로 둘 수 있어요.

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `command-r-plus` | 대표 고성능 모델 | 문서 질의응답, 분석 |
| `command-r` | 균형형 모델 | 일반 업무, 요약 |
| `command-light` | 가벼운 모델 | 빠른 응답 |
| `embed-english-v3.0` | 임베딩 모델 | 검색, RAG |
| `embed-multilingual-v3.0` | 다국어 임베딩 | 다국어 검색 |

## ✅ 성공 확인 박스

- [ ] `COHERE_API_KEY`를 설정했다
- [ ] config에 `cohere` provider를 넣었다
- [ ] 기본 모델을 `cohere/...`로 지정했다
- [ ] 테스트 질문 또는 검색 흐름이 정상 동작했다 🎉

## 다음 단계
- 검색 특화 웹 조사 기능이 필요하면 [Perplexity](/providers/perplexity)
- 범용 기본 제공자를 비교하려면 [OpenAI](/providers/openai), [Anthropic](/providers/anthropic)

## 막히면 여기로
- Cohere 대시보드: https://dashboard.cohere.com
- 공식 provider 문서는 OpenClaw 사이트에서 최신 상태를 다시 확인하세요
