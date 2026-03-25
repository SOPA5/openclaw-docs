---
title: 도구 개요
sidebar_label: 도구 개요
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Advanced** |
| 읽는 목적 | 실전 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `tools/index` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 도구 및 기술 (Tools)

이 문서에서는 OpenClaw 도구를 안전하고 효과적으로 쓰는 방법을 배웁니다.

<ProgressPill level="Core" progress={72} label="핵심 개념 · 실제 작업 도구 이해" />

<InfoCard title="이 문서의 역할" icon="🛠️" tone="amber">
이제부터는 '무엇을 할 수 있는가'보다 '어떤 도구를 언제 쓰는가'를 이해하는 단계입니다.
</InfoCard>

## 📌 이 문서에서 배우는 것
- 핵심 taxonomy
- 파일 도구
- 실행 도구
- 세션/오케스트레이션 도구

걱정하지 마세요. 큰 분류만 잡아도 절반은 이해한 것입니다.

OpenClaw의 도구는 “모델이 외부 세계에 손을 뻗는 방법”입니다. 최신 기준에서 도구 체계는 몇 개의 유명 기능만 나열하는 방식보다, **실제 tool taxonomy**로 이해하는 것이 더 정확합니다.

<LearningPath
  title="도구 이해 경로"
  items={[
    { title: '주요 특징', to: '/concepts/features', state: 'done', note: '제품의 전체 그림을 먼저 이해했습니다.' },
    { title: '도구 개요', to: '/tools/', state: 'current', note: '도구 분류와 역할을 정리합니다.' },
    { title: '브라우저', to: '/tools/browser', state: 'next', note: '대표적인 실행형 도구를 더 자세히 봅니다.' },
    { title: '서브에이전트', to: '/tools/subagents', state: 'next', note: '오케스트레이션 구조를 확장합니다.' },
  ]}
/>

:::tip 💡 쉽게 이해하기
**도구**는 AI가 실제 행동을 할 수 있게 해주는 손과 발입니다. 읽고, 쓰고, 실행하고, 검색하고, 브라우저를 조작할 수 있게 해줍니다.
:::

## 핵심 taxonomy

<ComparisonGrid
  left={{
    title: '읽기/쓰기/실행',
    badge: '기본 행동',
    children: (
      <ul>
        <li>파일 읽기와 편집</li>
        <li>셸 명령 실행</li>
        <li>웹 검색과 브라우저 조작</li>
      </ul>
    ),
  }}
  right={{
    title: '오케스트레이션/출력',
    badge: '확장 행동',
    children: (
      <ul>
        <li>메시지와 TTS 출력</li>
        <li>이미지/PDF 처리</li>
        <li>세션 생성과 위임</li>
      </ul>
    ),
  }}
/>

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

- **도구(Tool)**: 실제 함수/실행 인터페이스
- **스킬(Skill)**: 언제 어떤 도구를 어떤 순서로 쓸지 알려주는 지침
- **플러그인(Plugin (플러그인, 기능을 추가하는 확장 모듈))**: 도구/스킬/채널/제공자를 패키징하는 확장 단위

<TipBox title="이 문서 다음 추천">
도구 개요를 읽었으면 이제 <strong>개별 도구 문서</strong>로 내려가세요. 처음에는 <a href="/tools/browser">브라우저</a>와 <a href="/tools/subagents">서브에이전트</a>가 이해 효율이 좋습니다.
</TipBox>

## 자주 같이 읽는 문서

- [브라우저](/tools/browser)
- [Lobster](/tools/lobster)
- [샌드박스](/tools/sandbox)
- [서브에이전트](/tools/subagents)
- [Apply Patch](/tools/apply-patch)
