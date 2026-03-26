---
title: xAI
sidebar_label: xAI
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | xAI를 연결하고 Grok 계열 모델을 이해하기 |
| 추천 환경 | Grok 모델과 xAI 웹 검색을 함께 쓰고 싶은 환경 |
| 현재 위치 | `providers/xai` |

:::tip 학습 팁
xAI는 **Grok 모델을 쓰는 입구**라고 생각하면 쉬워요.
:::

# xAI

xAI는 Grok 모델을 제공하는 AI 제공자예요. 한 줄로 말하면, **Grok 계열 모델을 OpenClaw에서 쓰고 싶을 때 연결하는 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
xAI는 **Grok이라는 장난감 세트의 본사**예요. 이 문서는 그 장난감을 OpenClaw에 연결하는 설명서예요.
:::

### 언제 잘 맞을까?
- Grok 모델을 직접 써보고 싶을 때
- 빠른 모델과 추론형 모델을 같이 비교하고 싶을 때
- xAI 웹 검색 provider까지 함께 쓰고 싶을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export XAI_API_KEY="xai-xxxxxxxxxxxxxxxx"
```

영구 저장:

```bash
echo 'export XAI_API_KEY="xai-xxxxxxxxxxxxxxxx"' >> ~/.bashrc
source ~/.bashrc
```

### 2) config JSON 스니펫

```json
{
  "models": {
    "providers": {
      "xai": {
        "apiKey": "${XAI_API_KEY}"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "xai/grok-4"
      }
    }
  }
}
```

웹 검색까지 xAI 쪽으로 맞추고 싶다면:

```json
{
  "tools": {
    "web": {
      "search": {
        "provider": "grok"
      }
    }
  }
}
```

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `grok-4` | 대표 기본 모델 | 일반 대화, 분석 |
| `grok-4-fast-reasoning` | 빠른 추론형 | 생각이 필요한 작업 |
| `grok-4-fast-non-reasoning` | 빠른 일반형 | 짧고 빠른 응답 |
| `grok-4.20-reasoning` | 더 깊은 추론 계열 | 복잡한 문제 |
| `grok-code-fast-1` | 코드 특화 계열 | 코딩 작업 |

## ✅ 성공 확인 박스

- [ ] `XAI_API_KEY`를 설정했다
- [ ] config에 `xai` provider를 넣었다
- [ ] 기본 모델을 `xai/...`로 지정했다
- [ ] 필요하면 웹 검색 provider도 맞췄다
- [ ] 테스트 질문에 정상 응답이 왔다 🎉

## 다음 단계
- 초고속 추론 쪽을 비교하려면 [Groq](/providers/groq)
- 여러 provider를 넓게 비교하려면 [모델 개요](/providers)

## 막히면 여기로
- 공식 provider 문서: https://docs.openclaw.ai/providers/xai
