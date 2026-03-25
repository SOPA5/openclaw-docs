---
title: Google Chat
sidebar_label: Google Chat
sidebar_position: 7
---

-  (/)

- 채널 (Channels)

- Google Chat 연결 가이드

# Google Chat 연결 가이드

Google Workspace 환경을 사용하는 조직이라면 Google Chat을 통해 에이전트와 소통할 수 있습니다.

## 🏗️ 기본 아키텍처​ (#️-기본-아키텍처)

Google Chat은 Webhook 또는 Google Chat API를 통해 통신합니다. 더 복잡한 대화를 위해서는 API 방식을 권장합니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. Google Cloud 프로젝트 설정​ (#1-google-cloud-프로젝트-설정)

- Google Cloud Console (https://console.cloud.google.com/)에서 새 프로젝트를 만듭니다.

- Google Chat API를 검색하고 활성화합니다.

- `Configuration` 탭에서 봇의 이름, 아바타, 앱 정보를 입력합니다.

### 2. 접속 지점(Endpoint) 설정​ (#2-접속-지점endpoint-설정)

- OpenClaw 게이트웨이 주소(예: `https://your-server.com/hooks/google-chat`)를 입력합니다.

- 로컬 개발 시에는 `ngrok` 등을 사용하여 HTTPS 주소를 생성해야 할 수 있습니다.

### 3. OpenClaw 설정​ (#3-openclaw-설정)

```
openclaw configure set channels.googlechat.enabled true
# 필요한 API 키 또는 서비스 계정 파일 경로를 입력하세요.

```

---

## 💡 주요 이점​ (#-주요-이점)

- Workspace 통합: Google 문서, 캘린더 등과 연동된 에이전트 작업이 더욱 편리해집니다.

- 스페이스(Spaces): 전용 공간에서 팀원들과 함께 에이전트를 도구로 활용할 수 있습니다.

Slack 연결 가이드
(/channels/slack)다음
Microsoft Teams 연결 가이드
(/channels/ms-teams)

- 🏗️ 기본 아키텍처 (#️-기본-아키텍처)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. Google Cloud 프로젝트 설정 (#1-google-cloud-프로젝트-설정)

- 2. 접속 지점(Endpoint) 설정 (#2-접속-지점endpoint-설정)

- 3. OpenClaw 설정 (#3-openclaw-설정)

- 💡 주요 이점 (#-주요-이점)

Docs

- 시작하기 (/start/getting-started)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)

More

- GitHub (https://github.com/openclaw/openclaw)

Copyright © 2026 OpenClaw. Built with Docusaurus.

제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
