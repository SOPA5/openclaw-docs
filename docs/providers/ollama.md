---
title: Ollama
sidebar_label: Ollama
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Ollama로 로컬 LLM을 OpenClaw에 연결하는 방법 익히기 |
| 추천 환경 | 내 컴퓨터나 서버에서 직접 모델을 돌리는 환경 |
| 현재 위치 | `providers/ollama` |

:::tip 학습 팁
Ollama는 **내 집 컴퓨터 안에 AI를 데려오는 도구**라고 생각하면 쉬워요.
:::

# Ollama

Ollama는 로컬 LLM 실행 도구예요. 한 줄로 말하면, **내 컴퓨터나 서버에서 AI 모델을 직접 돌리고 싶을 때 좋은 제공자**입니다.

## 제공자 소개

:::tip 쉽게 이해하기
클라우드 AI는 **배달 음식**, Ollama는 **집에서 직접 요리하기**에 가까워요. 손은 조금 더 가지만, 통제하기는 더 쉬워요.
:::

### 언제 잘 맞을까?
- 데이터를 밖으로 덜 보내고 싶을 때
- 비용을 줄이면서 실험하고 싶을 때
- 로컬 GPU나 서버 자원을 이미 갖고 있을 때

## 설정 방법

### 1) 환경변수 설정

```bash
export OLLAMA_API_KEY="ollama-local"
```

> Ollama는 보통 진짜 비밀키가 없어도 돼요. OpenClaw에서 provider를 켜기 위한 표시값처럼 쓰는 경우가 많아요.

### 2) config JSON 스니펫

가장 쉬운 시작 예시:

```json
{
  "models": {
    "providers": {
      "ollama": {
        "apiKey": "${OLLAMA_API_KEY}",
        "baseUrl": "http://127.0.0.1:11434",
        "api": "ollama"
      }
    }
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "ollama/glm-4.7-flash"
      }
    }
  }
}
```

다른 서버를 쓸 때 예시:

```json
{
  "models": {
    "providers": {
      "ollama": {
        "apiKey": "${OLLAMA_API_KEY}",
        "baseUrl": "http://ollama-host:11434",
        "api": "ollama"
      }
    }
  }
}
```

:::tip 중요한 주의
Ollama는 가능하면 `http://host:11434`처럼 **기본 주소를 그대로** 쓰세요. `/v1`을 붙이면 도구 호출이 이상해질 수 있어요.
:::

### 3) 대표 모델명

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `glm-4.7-flash` | 빠른 기본 로컬 모델 | 일반 대화, 기본 업무 |
| `gpt-oss:20b` | 강한 오픈 모델 계열 | 글쓰기, 분석 |
| `llama3.3` | 널리 쓰이는 대표 모델 | 범용 작업 |
| `qwen2.5-coder:32b` | 코딩에 강한 편 | 코드 작성, 코드 이해 |
| `deepseek-r1:32b` | 추론 특화 | 논리 문제, 복잡한 분석 |

## ✅ 성공 확인 박스

- [ ] Ollama를 설치했다
- [ ] `ollama pull`로 최소 1개 모델을 받아왔다
- [ ] `OLLAMA_API_KEY`를 설정했다
- [ ] config에 `ollama` provider를 넣었다
- [ ] 테스트 질문에 로컬 모델이 응답했다 🎉

## 다음 단계
- 더 빠른 로컬 서빙이 필요하면 [vLLM](/providers/vllm)
- 여러 provider를 섞어 쓰고 싶으면 [모델 개요](/providers)

## 막히면 여기로
- Ollama 다운로드: https://ollama.com/download
- 공식 provider 문서: https://docs.openclaw.ai/providers/ollama
