---
title: 로컬 모델
sidebar_label: 로컬 모델
sidebar_position: 7
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 모델 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `providers/local-models` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 로컬 모델

이 문서에서는 AI 모델 Provider를 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 대표 경로
- 언제 적합한가
- 장점

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


로컬 모델은 OpenClaw를 사용자의 장치나 사내 서버 위에서 직접 추론하게 만드는 방식입니다. 공식 기준에서는 **Ollama, vLLM, SGLang** 같은 경로가 대표적입니다. 프라이버시, 비용 통제, 자체 인프라 최적화가 중요할 때 적합합니다.


:::tip 💡 쉽게 이해하기
**Provider**는 AI 모델을 제공하는 회사나 서비스예요. 예를 들어 OpenAI나 Anthropic 같은 곳이 여기에 들어갑니다.
:::

## 대표 경로

- **Ollama**: 가장 쉬운 로컬 입문 경로
- **vLLM**: 고성능 자체 호스팅 서빙
- **SGLang**: 구조화된 추론/서빙 시나리오

## 언제 적합한가

- 민감한 데이터를 외부 API로 보내고 싶지 않을 때
- 장기적으로 사용량이 많아 비용 통제가 중요할 때
- GPU 서버나 자체 인프라를 이미 보유하고 있을 때

## 장점

- 데이터 통제권이 높습니다.
- 외부 API 비용 의존도를 줄일 수 있습니다.
- 모델 교체와 실험 자유도가 큽니다.

## 주의할 점

- 성능은 하드웨어에 크게 좌우됩니다.
- 운영·모니터링·업데이트 책임이 사용자에게 있습니다.
- 모델 품질과 응답 속도는 상용 API보다 편차가 클 수 있습니다.

## 설정 흐름

1. Ollama, vLLM, SGLang 중 목적에 맞는 런타임을 선택합니다.
2. 로컬 또는 사내 서버에서 추론 엔드포인트를 준비합니다.
3. OpenClaw에 해당 제공자를 연결합니다.
4. 로컬 모델은 보조 모델부터 붙여서 안정성을 확인합니다.

## 함께 보면 좋은 문서

- [모델 제공자 개요](/providers/)
- [Amazon Bedrock](/providers/amazon-bedrock)
- [OpenRouter](/providers/openrouter)
- [FAQ](/help/faq)

## 🎯 다음 단계

- 다음으로 [모델 제공자 개요](/providers/) 문서를 읽어보세요.
- 다음으로 [Amazon Bedrock](/providers/amazon-bedrock) 문서를 읽어보세요.
- 다음으로 [OpenRouter](/providers/openrouter) 문서를 읽어보세요.
