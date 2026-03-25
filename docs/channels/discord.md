---
title: Discord
sidebar_label: Discord
sidebar_position: 5
---

# Discord 연결 가이드

Discord는 커뮤니티 관리나 팀 프로젝트에서 OpenClaw 에이전트를 활용하기에 최적화된 플랫폼입니다.

## 🛠️ 설정 방법​

### 1. 개발자 포털에서 앱 생성​

- Discord Developer Portal (https://discord.com/developers/applications)에 접속합니다.

- `New Application`을 클릭하여 봇을 생성합니다.

- Bot 메뉴에서 `Reset Token`을 눌러 토큰을 발급받고 복사합니다.

### 2. 특권 인텐트(Privileged Intents) 활성화​

에이전트가 메시지를 읽고 반응하려면 다음 항목을 반드시 켜야 합니다.

- Presence Intent

- Server Members Intent

- Message Content Intent (가장 중요)

### 3. OpenClaw 설정​

```
openclaw configure set channels.discord.enabled true
openclaw configure set channels.discord.token "여러분의_토큰_입력"

```

---

## 🔗 서버에 초대하기​

- 개발자 포털의 `OAuth2 -> URL Generator` 메뉴로 이동합니다.

- `bot` 스코프와 필요한 권한(Administrator 권한 추천)을 선택합니다.

- 생성된 URL을 브라우저에 입력하여 여러분의 서버에 봇을 초대하세요.

## 🚀 활용 팁​

- 스레드(Threads): 에이전트는 스레드를 감지하고 문맥에 맞는 대화를 이어갈 수 있습니다.

- 멘션(@Bots): 특정 멘션에만 반응하도록 설정하여 서버의 소음을 줄일 수 있습니다.

grammY (Telegram Framework)
(/channels/grammy)다음
Slack 연결 가이드
(/channels/slack)

- 🛠️ 설정 방법
- 1. 개발자 포털에서 앱 생성

- 2. 특권 인텐트(Privileged Intents) 활성화

- 3. OpenClaw 설정

- 🔗 서버에 초대하기

- 🚀 활용 팁

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

