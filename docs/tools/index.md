---
title: 도구 개요
sidebar_label: 도구 개요
sidebar_position: 1
---

# 도구 및 기술 (Tools)

OpenClaw의 도구는 “모델이 외부 세계에 손을 뻗는 방법”입니다. 최신 기준에서 도구 체계는 몇 개의 유명 기능만 나열하는 방식보다, **실제 tool taxonomy**로 이해하는 것이 더 정확합니다.

## 핵심 taxonomy

### 파일 도구

- `read`
- `write`
- `edit`
- `apply_patch`

문서 작성, 코드 수정, 설정 변경, 패치 적용에 사용합니다.

### 실행 도구

- `exec`
- `process`

셸 명령 실행, 백그라운드 프로세스 관리, 긴 작업의 상태 추적을 담당합니다.

### 웹/브라우저 도구

- `browser`
- `web_search`
- `web_fetch`

브라우저 자동화, 웹 검색, 페이지 본문 수집을 맡습니다.

### 커뮤니케이션 도구

- `message`
- `tts`

채널 메시지 전송과 음성 출력 계층입니다.

### 디바이스/시각 인터페이스 도구

- `canvas`
- `nodes` 계열(환경에 따라 제공)

페어링된 node의 Canvas나 장치 표면과 상호작용할 때 씁니다.

### 미디어/문서 도구

- `image`
- `image_generate`
- `pdf`

이미지 분석·생성, PDF 이해를 다룹니다.

### 세션/오케스트레이션 도구

- `sessions_spawn`
- `sessions_list`
- `sessions_history`
- `sessions_yield`

세션 생성, 위임, 결과 회수를 다룹니다.

## 중요한 해석

OpenClaw에서 도구는 단순 플러그인이 아닙니다. Gateway가 제공하는 도구들은 세션, 권한, 샌드박스, API와 모두 연결되어 있습니다. 그래서 같은 `exec`라도 어떤 세션에서, 어떤 정책 아래, 어떤 승인 경계로 쓰느냐가 매우 중요합니다.

## 도구·스킬·플러그인의 차이

헷갈리기 쉬운 세 가지를 구분하면 다음과 같습니다.

- **도구(Tool)**: 실제 함수/실행 인터페이스
- **스킬(Skill)**: 언제 어떤 도구를 어떤 순서로 쓸지 알려주는 지침
- **플러그인(Plugin)**: 도구/스킬/채널/제공자를 패키징하는 확장 단위

## 자주 같이 읽는 문서

- [브라우저](/tools/browser)
- [Lobster](/tools/lobster)
- [샌드박스](/tools/sandbox)
- [서브에이전트](/tools/subagents)
- [Apply Patch](/tools/apply-patch)
