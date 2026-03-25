---
title: 서브에이전트
sidebar_label: 서브에이전트
sidebar_position: 5
---

# 서브 에이전트 (Sub-agents)

이 문서에서는 OpenClaw 도구를 안전하고 효과적으로 쓰는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 핵심 도구
- `sessions_spawn`
- `sessions_list`

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw의 서브에이전트는 단순 백그라운드 작업자가 아닙니다. 최신 구조에서는 **`sessions_spawn`과 세션 도구군을 기반으로 한 오케스트레이션 메커니즘**으로 이해하는 것이 가장 정확합니다.

## 핵심 도구

### `sessions_spawn`

새 세션을 띄우는 기본 도구입니다. OpenClaw 내부 서브에이전트를 실행할 수도 있고, 상황에 따라 ACP 런타임 세션을 시작할 수도 있습니다.

### `sessions_list`

현재 또는 최근 세션을 확인합니다.

### `sessions_history`

특정 세션의 메시지 기록과 결과를 읽습니다.

### `sessions_yield`

현재 턴을 종료하고, 자식 작업의 결과가 도착할 때까지 흐름을 넘기는 데 사용합니다.

## OpenClaw 서브에이전트와 ACP 런타임의 차이

이 둘은 비슷해 보여도 다릅니다.

### OpenClaw 서브에이전트

- OpenClaw 내부 런타임에서 동작
- 같은 워크스페이스/도구 철학을 공유하기 쉬움
- 연구, 문서 정리, 분석 같은 병렬 작업에 적합

### ACP runtime

- Codex, Claude Code, Gemini CLI 같은 외부 코딩 런타임과 연결
- thread/session 개념이 별도로 붙을 수 있음
- 코딩/리팩터/대형 구현 작업에 강함

즉, `sessions_spawn`은 하나지만, 그 뒤에 붙는 런타임은 여러 종류일 수 있습니다.

## 언제 서브에이전트를 쓰면 좋은가

- 오래 걸리는 리서치를 병렬로 분리할 때
- 큰 문서 묶음을 나눠 읽을 때
- 구현과 검수를 분리할 때
- 메인 에이전트가 사용자와 대화를 유지해야 할 때

## 좋은 운용 원칙

- 하위 작업은 명확하게 잘라서 위임
- 자식 세션 결과는 다시 통합해서 보고
- 긴 기다림은 polling보다 `sessions_yield` 우선
- ACP 세션은 일반 서브에이전트처럼 취급하지 않기

## 관련 문서

- [세션](/concepts/sessions)
- [에이전트](/concepts/agent)
- [도구 개요](/tools/)

## 🎯 다음 단계

- 다음으로 [세션](/concepts/sessions) 문서를 읽어보세요.
- 다음으로 [에이전트](/concepts/agent) 문서를 읽어보세요.
- 다음으로 [도구 개요](/tools/) 문서를 읽어보세요.
