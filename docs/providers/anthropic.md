---
title: Anthropic
sidebar_label: Anthropic
sidebar_position: 2
---

# Anthropic

Anthropic은 OpenClaw에서 가장 핵심적인 상용 제공자 중 하나입니다. 현재 문서 기준으로는 **Claude 4 계열**을 중심으로 이해하는 것이 맞고, 인증 방식은 **OAuth/구독(subscription) 기반 경로를 우선**으로 보는 것이 좋습니다. 필요하면 API key 방식도 함께 지원됩니다.

## 권장 인증 방식

### 1) OAuth / Subscription 인증 우선

OpenClaw 최신 흐름에서는 Anthropic을 구독형 인증 또는 OAuth 기반으로 연결하는 방식이 강조됩니다.

- 사용 시작이 간단합니다.
- 일반 사용자 관점에서 키 관리 부담이 줄어듭니다.
- 장기 운영 시 계정 기반 인증 흐름을 관리하기 쉽습니다.

### 2) API key도 지원

조직 정책상 키 기반 통제가 필요하거나 서버 환경에서 직접 관리해야 하면 API key 방식도 사용할 수 있습니다.

## 모델 이해

이 문서에서는 과거 `claude-3-5-sonnet` 예시 대신 **Claude 4 계열** 기준으로 설명합니다.

- Claude Opus 4 계열: 깊은 추론과 고난도 작업
- Claude Sonnet 4 계열: 균형형 범용 작업

## 언제 적합한가

- 긴 문서 이해와 고품질 글쓰기
- 복잡한 추론과 분석
- 에이전트 중심 워크플로우
- 고품질 기본 모델을 하나 정해야 할 때

## 설정 흐름

1. Anthropic 계정을 준비합니다.
2. 가능하면 OAuth/구독 인증을 우선 사용합니다.
3. 필요 시 API key를 발급받아 OpenClaw에 연결합니다.
4. 기본 모델과 fallback 모델을 분리해 운영합니다.

## 운영 팁

- 메인 모델과 백업 모델을 나눠두면 안정성이 좋아집니다.
- 긴 작업이 많다면 Sonnet/Opus 역할을 구분해 두는 편이 좋습니다.
- 다른 제공자와 함께 fallback 체인을 구성하면 장애 대응이 쉬워집니다.

## 함께 보면 좋은 문서

- [모델 제공자 개요](/providers/)
- [OpenAI](/providers/openai)
- [Google Gemini](/providers/google-gemini)
- [FAQ](/help/faq)
