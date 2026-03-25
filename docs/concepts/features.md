---
title: 기능
sidebar_label: 기능
sidebar_position: 1
---

# 주요 특징 (Highlights)

OpenClaw는 단순 채팅 봇이 아닙니다. **self-hosted Gateway**를 중심으로 채널, 에이전트, 도구, 모바일 node, 음성, 웹 UI를 한 제품 안에 묶은 운영 플랫폼입니다.

## 한눈에 보는 최신 기능

- **20개+ 채널 지원**
- **34개+ 모델 제공자 지원**
- **iOS / Android node 지원**
- **Canvas, Camera, Voice, TTS 지원**
- **브라우저 자동화, 셸 실행, 파일 편집 같은 실제 작업 도구 제공**
- **멀티에이전트 라우팅과 격리 세션 지원**
- **Web Control UI / WebChat / macOS companion app 지원**

공식 features 문서에서는 공급자 수를 35+로 요약하기도 합니다. 실무적으로는 “30개를 훨씬 넘는 폭넓은 제공자 디렉터리”로 이해하면 됩니다.

## 채널

OpenClaw는 하나의 Gateway로 매우 다양한 채널을 동시에 붙일 수 있습니다. 대표 예시는 다음과 같습니다.

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

OpenClaw는 서버만 다루는 제품이 아닙니다. **iOS와 Android를 node처럼 페어링**해 실제 디바이스 기능을 끌어올 수 있습니다.

대표 기능:

- Canvas
- Camera
- Voice / Talk Mode
- Screen Recording
- 기기 명령 실행

즉, OpenClaw는 “메신저 에이전트”를 넘어 **장치 연결형 agent runtime**으로 확장됩니다.

## 멀티모달 입출력

텍스트만 처리하는 구조가 아닙니다.

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

사용자는 여러 방식으로 같은 Gateway에 붙을 수 있습니다.

- CLI
- Web Control UI
- WebChat
- macOS companion app
- iOS / Android node
- 각종 채팅 채널

이 구조 덕분에 하나의 OpenClaw 인스턴스를 개인 비서, 운영 봇, 자동화 허브처럼 다양하게 활용할 수 있습니다.

## 다음에 읽으면 좋은 문서

- [아키텍처](/concepts/architecture)
- [에이전트](/concepts/agent)
- [도구 개요](/tools/)
