---
title: Google Gemini
sidebar_label: Google Gemini
sidebar_position: 4
---

# Google Gemini

Google Gemini 제공자는 Google 생태계와 멀티모달 활용에서 강점이 있습니다. 최신 학습 기준에서는 과거 `gemini-1.5` 대신 **Gemini 3 계열** 중심으로 이해하면 됩니다.

## 모델 이해

- **Gemini 3 계열**: 최신 기준 설명의 중심
- 긴 컨텍스트와 멀티모달 활용에 유리
- Google 서비스와 함께 운영하기 좋음

## 언제 적합한가

- 긴 입력을 다뤄야 할 때
- 텍스트 외에 이미지 등 멀티모달 활용이 필요할 때
- Google 생태계와 함께 쓰고 싶을 때

## 설정 흐름

1. Google Gemini 사용에 필요한 프로젝트/인증 정보를 준비합니다.
2. OpenClaw에서 Google 제공자를 활성화합니다.
3. Gemini 3 계열 모델을 기본 또는 보조 모델로 배치합니다.
4. 필요 시 다른 제공자와 fallback 체인을 구성합니다.

## 운영 팁

- 멀티모달 작업은 입력 크기와 응답 비용을 함께 관리하세요.
- 긴 문서 처리에는 Anthropic과 역할을 나눠 비교해보는 것도 좋습니다.
- 검색, 브라우저, 문서 처리 워크플로우와 결합하면 활용 범위가 넓습니다.

## 함께 보면 좋은 문서

- [모델 제공자 개요](/providers/)
- [Anthropic](/providers/anthropic)
- [OpenAI](/providers/openai)
- [FAQ](/help/faq)
