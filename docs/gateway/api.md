---
title: API
sidebar_label: API
sidebar_position: 6
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Advanced** |
| 읽는 목적 | 운영 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `gateway/api` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# REST API 및 프로토콜 (API)

이 문서에서는 OpenClaw Gateway가 어떻게 동작하는지 배웁니다.

## 📌 이 문서에서 배우는 것
- 1. Tools Invoke API
- 2. OpenAI 호환 API
- 3. OpenResponses API

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw Gateway는 채팅 앱용 백엔드일 뿐 아니라, **프로그래밍 방식으로 호출 가능한 제어면 API**도 제공합니다. 최신 기준에서 중요한 API 축은 세 가지입니다.

- **Tools Invoke API**
- **OpenAI 호환 API**
- **OpenResponses API**


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 1. Tools Invoke API

가장 직접적인 엔드포인트입니다. 에이전트 대화 전체를 거치지 않고, **특정 도구를 프로그램에서 바로 호출**할 때 사용합니다.

이 방식이 좋은 경우:

- 파일 읽기/쓰기 같은 자동화 작업
- 사내 스크립트에서 OpenClaw 도구를 재사용하고 싶을 때
- “대화”보다 “함수 호출”이 더 적합한 워크플로우

즉, Tools Invoke는 Gateway를 **도구 실행 서버**처럼 쓰는 인터페이스입니다.

## 2. OpenAI 호환 API

기존 OpenAI SDK나 클라이언트 코드를 크게 바꾸지 않고 OpenClaw에 붙이고 싶다면 이 계층이 유용합니다. OpenClaw는 Gateway 뒤에서 세션, 도구, 라우팅, 채널 연동을 처리하면서도, 바깥에서는 익숙한 OpenAI 스타일 API처럼 보일 수 있습니다.

이 방식이 좋은 경우:

- 기존 앱이 이미 OpenAI SDK를 쓰고 있을 때
- OpenClaw를 사내 agent gateway처럼 앞단에 두고 싶을 때
- 모델 호출과 도구 사용을 같은 제어면 아래에서 묶고 싶을 때

## 3. OpenResponses API

최신 에이전트형 상호작용을 다루기 위한 인터페이스입니다. 단순 텍스트 completions보다, **응답·도구 호출·상태 전이**를 더 에이전트 친화적으로 표현하는 계층으로 이해하면 됩니다.

실무적으로는 OpenResponses API가 다음과 잘 맞습니다.

- 도구 호출이 섞인 멀티턴 상호작용
- 더 구조화된 agent runtime 통합
- 추후 확장 가능한 응답 이벤트 흐름

## 인증

API를 열 때는 반드시 Gateway 인증 전략과 함께 봐야 합니다.

- `auth.mode`
- bind 주소(loopback 권장)
- 리버스 프록시 또는 Tailscale 노출 여부
- `allowFrom` 같은 출발지 제한

API 보안은 HTTP 헤더 하나만의 문제가 아니라, [원격 접근](/gateway/remote)과 [보안](/gateway/security) 설계의 일부입니다.

## API를 사용할 때의 해석

OpenClaw API는 단순한 “LLM 프록시”가 아닙니다. Gateway가 뒤에서 다음을 함께 관리합니다.

- 세션 문맥
- 도구 권한
- 채널/사용자 단위 라우팅
- node 및 브라우저/캔버스 같은 런타임 자원

그래서 같은 요청이라도 일반 모델 API보다 훨씬 **운영체제·채널·도구와 가까운 실행 계층**을 다룰 수 있습니다.

## 언제 어떤 API를 쓰면 좋나

- **도구를 바로 부르고 싶다** → Tools Invoke
- **기존 OpenAI SDK를 최대한 유지하고 싶다** → OpenAI 호환 API
- **에이전트형 응답 흐름을 더 구조적으로 쓰고 싶다** → OpenResponses API

## 관련 문서

- [원격 접근](/gateway/remote)
- [보안](/gateway/security)
- [세션](/concepts/sessions)
- [도구 개요](/tools/)

## 🎯 다음 단계

- 다음으로 [원격 접근](/gateway/remote) 문서를 읽어보세요.
- 다음으로 [보안](/gateway/security) 문서를 읽어보세요.
- 다음으로 [세션](/concepts/sessions) 문서를 읽어보세요.
