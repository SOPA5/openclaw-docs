---
title: 기능
sidebar_label: 기능
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 이해 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `concepts/features` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 주요 특징 (Highlights)

이 문서에서는 OpenClaw의 핵심 개념을 쉽게 이해하는 방법을 배웁니다.

<ProgressPill level="Core" progress={60} label="핵심 개념 · 제품 전체 그림 이해" />

<InfoCard title="이 문서의 역할" icon="🧠" tone="cyan">
이 문서는 설치 방법보다 한 단계 더 올라가서, OpenClaw가 어떤 제품인지 큰 그림을 잡아주는 문서입니다.
</InfoCard>

## 📌 이 문서에서 배우는 것
- 한눈에 보는 최신 기능
- 채널
- 모델 제공자
- 모바일 node와 자동화

걱정하지 마세요. 큰 그림만 잡으면 됩니다.

OpenClaw는 단순 채팅 봇이 아닙니다. **self-hosted Gateway (중앙 통로)**를 중심으로 채널, 에이전트, 도구, 모바일 node, 음성, 웹 UI를 한 제품 안에 묶은 운영 플랫폼입니다.

<LearningPath
  title="개념 학습 경로"
  items={[
    { title: '시작하기', to: '/start/getting-started', state: 'done', note: '실행 흐름을 먼저 익혔습니다.' },
    { title: '주요 특징', to: '/concepts/features', state: 'current', note: 'OpenClaw의 전체 기능 지도를 봅니다.' },
    { title: '아키텍처', to: '/concepts/architecture', state: 'next', note: '구조를 더 깊게 이해합니다.' },
    { title: '에이전트', to: '/concepts/agent', state: 'next', note: '멀티에이전트 동작 방식을 봅니다.' },
  ]}
/>

:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 한눈에 보는 최신 기능

<ComparisonGrid
  left={{
    title: '사용자 입장에서 보이는 것',
    badge: '겉으로 보이는 가치',
    children: (
      <ul>
        <li>20개+ 채널 지원</li>
        <li>34개+ 모델 제공자 지원</li>
        <li>Canvas, Camera, Voice, TTS 지원</li>
        <li>Web UI / WebChat / companion app 제공</li>
      </ul>
    ),
  }}
  right={{
    title: '운영자 입장에서 중요한 것',
    badge: '안쪽 구조',
    children: (
      <ul>
        <li>Gateway 중심 연결 구조</li>
        <li>멀티에이전트 라우팅</li>
        <li>격리 세션과 도구 실행</li>
        <li>fallback, 자동화, 디바이스 확장</li>
      </ul>
    ),
  }}
/>

- **20개+ 채널 지원**
- **34개+ 모델 제공자 지원**
- **iOS / Android node 지원**
- **Canvas, Camera, Voice, TTS 지원**
- **브라우저 자동화, 셸 실행, 파일 편집 같은 실제 작업 도구 제공**
- **멀티에이전트 라우팅과 격리 세션 지원**
- **Web Control UI / WebChat / macOS companion app 지원**

공식 features 문서에서는 공급자 수를 35+로 요약하기도 합니다. 실무적으로는 “30개를 훨씬 넘는 폭넓은 제공자 디렉터리”로 이해하면 됩니다.

## 채널

OpenClaw는 하나의 Gateway로 매우 다양한 채널을 동시에 붙일 수 있습니다.

- Telegram
- WhatsApp
- Discord
- Slack
- Signal
- LINE
- Matrix
- Mattermost
- Microsoft Teams
- Google Chat
- IRC
- Twitch
- WebChat
- Voice Call
- Zalo / Zalo Personal
- BlueBubbles 기반 iMessage 경로

핵심은 “많은 채널을 지원한다”보다, **모든 채널이 하나의 Gateway와 세션 체계에 연결된다**는 점입니다.

## 모델 제공자

지원 범위가 넓습니다. Anthropic, OpenAI, Google, Groq, Ollama, OpenRouter, Bedrock, vLLM, SGLang, Perplexity, xAI 등 다양한 제공자를 같은 제품 안에서 다룰 수 있습니다.

이 구조 덕분에 OpenClaw는 다음을 모두 지원하기 쉽습니다.

- 구독형/OAuth 기반 모델 사용
- self-hosted 모델 백엔드 연결
- 팀별/에이전트별 모델 라우팅
- 장애 대비 fallback 구성

## 모바일 node와 디바이스 확장

<InfoCard title="왜 중요한가요?" icon="📱" tone="green">
OpenClaw는 서버 안에만 머무는 에이전트가 아니라, 실제 휴대폰과 장치 기능까지 끌어올 수 있는 런타임입니다.
</InfoCard>

대표 기능:

- Canvas
- Camera
- Voice / Talk Mode
- Screen Recording
- 기기 명령 실행

즉, OpenClaw는 “메신저 에이전트”를 넘어 **장치 연결형 agent runtime**으로 확장됩니다.

## 멀티모달 입출력

- 이미지 분석
- 이미지 생성
- 오디오 입력
- 음성 노트 전사
- 문서/PDF 처리
- TTS
- Voice 인터랙션

이 기능들은 [도구 개요](/tools/)와 연결되어 실제 작업 흐름으로 이어집니다.

## 에이전트와 자동화

OpenClaw는 멀티에이전트 구조를 기본적으로 지원합니다.

- 메인 에이전트
- 그룹 격리 세션
- 서브에이전트
- ACP 기반 외부 코딩 런타임
- 스킬 기반 절차화
- 스케줄링/heartbeat/cron

그래서 “대화”와 “작업 실행”이 분리되지 않고 같은 플랫폼 안에서 이어집니다.

## UI와 운영 진입점

- CLI
- Web Control UI
- WebChat
- macOS companion app
- iOS / Android node
- 각종 채팅 채널

## 다음에 읽으면 좋은 문서

- [아키텍처](/concepts/architecture)
- [에이전트](/concepts/agent)
- [도구 개요](/tools/)
