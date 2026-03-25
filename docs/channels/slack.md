---
title: Slack
sidebar_label: Slack
sidebar_position: 6
---

-  (/)

- 채널 (Channels)

- Slack 연결 가이드

# Slack 연결 가이드

Slack 채널은 기업 환경에서 업무 효율을 높이는 데 특화되어 있습니다. OpenClaw는 방화벽 설정이 필요 없는 Socket Mode를 기본으로 지원합니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. Slack App 생성​ (#1-slack-app-생성)

- Slack API (https://api.slack.com/apps) 페이지에서 `Create New App`을 클릭합니다.

- `From scratch`를 선택하고 이름을 입력합니다.

### 2. 권한 및 봇 설정​ (#2-권한-및-봇-설정)

- Socket Mode: `Settings -> Socket Mode`에서 활성화하고 `App-level Token`을 생성합니다. (`xapp-`으로 시작)

- Event Subscriptions: `App Home -> Event Subscriptions`에서 활성화하고 `app_mention`, `message.channels`, `message.im` 이벤트를 추가합니다.

- OAuth & Permissions: `Bot Token Scopes`에 `chat:write`, `im:history`, `app_mentions:read` 등을 추가하고 `Bot User OAuth Token`을 가져옵니다. (`xoxb-`으로 시작)

### 3. OpenClaw 설정​ (#3-openclaw-설정)

```
openclaw configure set channels.slack.enabled true
openclaw configure set channels.slack.token "xoxb-..."
openclaw configure set channels.slack.appToken "xapp-..."

```

---

## ⚡ 업무 자동화 활용​ (#-업무-자동화-활용)

- DM 비서: 개인 메시지를 통해 일정 관리나 파일 요약을 요청하세요.

- 채널 협업: 팀 채널에 초대하여 회의록 정리나 코드 리뷰를 에이전트에게 시킬 수 있습니다.

- 멘션 반응: 에이전트 이름이 불릴 때만 똑똑하게 개입합니다.

Discord 연결 가이드
(/channels/discord)다음
Google Chat 연결 가이드
(/channels/google-chat)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. Slack App 생성 (#1-slack-app-생성)

- 2. 권한 및 봇 설정 (#2-권한-및-봇-설정)

- 3. OpenClaw 설정 (#3-openclaw-설정)

- ⚡ 업무 자동화 활용 (#-업무-자동화-활용)

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
