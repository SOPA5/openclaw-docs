---
title: OpenAI
sidebar_label: OpenAI
sidebar_position: 3
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 모델 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `providers/index` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# OpenAI

이 문서에서는 AI 모델 Provider를 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 지원 인증 방식
- 1) OAuth / Codex 인증
- 2) API key

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenAI는 범용성과 생태계 측면에서 매우 강력한 제공자입니다. 최신 학습 기준에서는 과거 `gpt-4o` 예시보다 **GPT-5 계열** 중심으로 이해하는 것이 맞습니다. 또한 OpenClaw에서는 **OAuth (인증 방식, 비밀번호 대신 권한을 빌려주는 방식) / Codex 인증 흐름**도 중요한 경로로 다룹니다.


:::tip 💡 쉽게 이해하기
**Provider**는 AI 모델을 제공하는 회사나 서비스예요. 예를 들어 OpenAI나 Anthropic 같은 곳이 여기에 들어갑니다.
:::

## 지원 인증 방식

### 1) OAuth / Codex 인증

OpenAI 계정 기반 인증을 사용하면 Codex 계열 워크플로우와 함께 운영하기 좋습니다.

- 계정 중심 인증 흐름
- 코딩 작업과의 궁합이 좋음
- 사용자 입장에서 관리가 단순함

### 2) API key

서버 자동화나 조직 정책상 키 관리가 필요하면 API key도 사용할 수 있습니다.

## 모델 이해

이 문서에서는 **GPT-5 계열**을 기준으로 이해합니다.

- 범용 대화
- 코딩 보조
- 도구 호출 중심 에이전트 작업
- 빠른 응답과 안정적 생태계 활용

## 언제 적합한가

- 범용 기본 모델이 필요할 때
- 코딩/자동화 흐름을 함께 쓸 때
- OpenAI 생태계와 주변 도구 호환성이 중요할 때

## 설정 흐름

1. OpenAI 계정 또는 조직 계정을 준비합니다.
2. 가능하면 OAuth / Codex 인증 경로를 먼저 검토합니다.
3. 필요하면 API key를 추가해 서버형 구성을 만듭니다.
4. 기본 모델, fallback 모델, 코딩용 모델을 분리합니다.

## 운영 팁

- 일반 대화용과 코딩용 모델을 구분하면 비용·속도·품질 균형을 잡기 좋습니다.
- 멀티 제공자 운영 시 Anthropic과 함께 fallback 체인을 구성하면 안정적입니다.
- 응답 속도가 중요한 시나리오와 깊은 추론이 필요한 시나리오를 나눠 쓰는 편이 좋습니다.

## 함께 보면 좋은 문서

- [Anthropic](/providers/anthropic)
- [OpenRouter](/providers/openrouter)
- [FAQ](/help/faq)

## 🎯 다음 단계

- 다음으로 [Anthropic](/providers/anthropic) 문서를 읽어보세요.
- 다음으로 [OpenRouter](/providers/openrouter) 문서를 읽어보세요.
- 다음으로 [FAQ](/help/faq) 문서를 읽어보세요.
