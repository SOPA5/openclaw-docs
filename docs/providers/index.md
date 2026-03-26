---
title: 모델 개요
sidebar_label: 모델 개요
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 모델 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `providers/index` |

:::tip 학습 팁
처음에는 **제일 좋아 보이는 모델**을 찾으려 하기보다, **내 환경에 맞는 제공자 종류**를 먼저 고르세요. 그래야 선택이 훨씬 쉬워집니다.
:::

# 모델 제공자 (Providers)

Provider는 OpenClaw에 붙는 **AI 두뇌를 공급하는 회사나 서비스**입니다. 쉽게 말해, 채널이 대화창이라면 Provider는 **생각을 만드는 엔진**입니다.

## 📌 이 문서에서 바로 정하는 것
- 가장 쉬운 시작 경로
- 비용과 속도를 어떻게 볼지
- 회사용·로컬용·멀티모델용 경로
- 다음에 읽을 세부 문서

:::tip 쉽게 이해하기
같은 자동차라도 어떤 엔진을 넣느냐에 따라 힘, 연비, 소리가 달라지죠. Provider도 비슷합니다. 같은 OpenClaw라도 어떤 Provider를 고르느냐에 따라 응답 스타일과 운영 방식이 달라집니다.
:::

## 가장 먼저 나누는 5가지 선택

| 상황 | 먼저 볼 문서 | 이유 |
|---|---|---|
| 가장 간단하게 시작하고 싶다 | [OpenAI](/providers/openai), [Anthropic](/providers/anthropic) | 구독/OAuth 기반으로 시작하기 쉽습니다. |
| 여러 모델을 한곳에서 고르고 싶다 | [OpenRouter](/providers/openrouter) | 모델 선택 폭이 넓습니다. |
| 회사 AWS 환경에 맞추고 싶다 | [Amazon Bedrock](/providers/amazon-bedrock) | 보안·조직 정책과 맞추기 좋습니다. |
| 내 컴퓨터나 서버에서 직접 돌리고 싶다 | [로컬 모델](/providers/local-models) | 데이터 통제와 실험 자유도가 큽니다. |
| Google 생태계와 같이 쓰고 싶다 | [Google Gemini](/providers/google-gemini) | Gemini 계열 모델과 연결됩니다. |

## 고를 때 보는 기준
- **인증 방식**: OAuth, 구독, API key, 클라우드 계정
- **운영 위치**: 클라우드, 게이트웨이, 로컬 서버
- **목적**: 일반 대화, 코딩, 멀티모달, 기업 보안
- **확장성**: 한 제공자만 쓸지, fallback을 함께 둘지

## 실전 추천 조합
- **처음 시작**: OpenAI 또는 Anthropic 한 개만 먼저 연결
- **안정성 강화**: 주 제공자 1개 + fallback 1개
- **여러 모델 비교**: OpenRouter
- **사내 보안 우선**: Amazon Bedrock
- **실험과 비용 통제**: 로컬 모델

## ✅ 성공 확인
- 제공자 인증이 정상 완료됩니다.
- 기본 모델을 하나 지정할 수 있습니다.
- 간단한 질문에 응답이 돌아옵니다.
- 실패 시 fallback 모델이 준비되어 있으면 더 안정적입니다.

## 자주 생기는 실수
- 처음부터 제공자를 너무 많이 붙임
- 대화용 모델과 코딩용 모델을 안 나눔
- 회사 정책이 있는데 개인용 API 방식부터 시작함
- 로컬 모델 성능 요구를 너무 가볍게 봄

## ➡️ 다음 단계
- 기본 클라우드 경로: [OpenAI](/providers/openai), [Anthropic](/providers/anthropic)
- 멀티모델 경로: [OpenRouter](/providers/openrouter)
- 기업 AWS 경로: [Amazon Bedrock](/providers/amazon-bedrock)
- 로컬 실행 경로: [로컬 모델](/providers/local-models)
