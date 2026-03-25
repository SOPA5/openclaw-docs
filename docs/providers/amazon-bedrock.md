---
title: Amazon Bedrock
sidebar_label: Amazon Bedrock
sidebar_position: 6
---

# Amazon Bedrock

이 문서에서는 AI 모델 Provider를 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 적합한가
- 장점
- 주의할 점

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


Amazon Bedrock은 AWS 환경 안에서 다양한 기초 모델을 사용할 수 있게 해주는 엔터프라이즈 지향 제공자입니다. 보안, 계정 통제, 인프라 통합이 중요한 조직에서 특히 유리합니다.


:::tip 💡 쉽게 이해하기
**Provider**는 AI 모델을 제공하는 회사나 서비스예요. 예를 들어 OpenAI나 Anthropic 같은 곳이 여기에 들어갑니다.
:::

## 언제 적합한가

- 이미 AWS를 중심 인프라로 운영할 때
- 조직 보안·감사·권한 체계가 중요할 때
- 여러 모델을 AWS 안에서 통합 관리하고 싶을 때

## 장점

- AWS 계정 정책과 연동하기 쉽습니다.
- 조직용 거버넌스와 감사 요구에 맞추기 좋습니다.
- 엔터프라이즈 표준 인프라에 자연스럽게 붙습니다.

## 주의할 점

- 개인용 빠른 시작보다는 조직용 설계에 가깝습니다.
- IAM, 리전, 정책 설계가 익숙하지 않으면 초기 진입이 어렵게 느껴질 수 있습니다.
- 실제 사용 가능한 모델 라인업은 AWS 계정 조건과 리전에 따라 다를 수 있습니다.

## 설정 흐름

1. AWS 계정과 Bedrock 접근 권한을 준비합니다.
2. 필요한 IAM 정책과 리전 구성을 확인합니다.
3. OpenClaw에 Amazon Bedrock 제공자를 연결합니다.
4. 조직 정책에 맞게 모델 접근을 분리합니다.

## 함께 보면 좋은 문서

- [모델 제공자 개요](/providers/)
- [OpenRouter](/providers/openrouter)
- [로컬 모델](/providers/local-models)
- [FAQ](/help/faq)

## 🎯 다음 단계

- 다음으로 [모델 제공자 개요](/providers/) 문서를 읽어보세요.
- 다음으로 [OpenRouter](/providers/openrouter) 문서를 읽어보세요.
- 다음으로 [로컬 모델](/providers/local-models) 문서를 읽어보세요.
