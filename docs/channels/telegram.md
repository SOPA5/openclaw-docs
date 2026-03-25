---
title: Telegram
sidebar_label: Telegram
sidebar_position: 3
---

-  (/)

- 채널 (Channels)

- Telegram 연결 가이드

# Telegram 연결 가이드

Telegram은 설정이 가장 간단하고 API가 강력하여 OpenClaw 입문자에게 가장 추천하는 채널입니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. 봇 생성 (BotFather)​ (#1-봇-생성-botfather)

- Telegram에서 @BotFather (https://t.me/botfather)를 검색하고 대화를 시작합니다.

- `/newbot`을 입력하고 안내에 따라 봇의 이름과 아이디를 정합니다.

- 생성이 완료되면 제공되는 HTTP API Access Token을 복사합니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

확보한 토큰을 OpenClaw에 입력합니다.

```
openclaw configure set channels.telegram.enabled true
openclaw configure set channels.telegram.token "여러분의_토큰_입력"

```

### 3. 게이트웨이 재시작​ (#3-게이트웨이-재시작)

```
openclaw gateway restart

```

---

## 💬 대화 시작하기​ (#-대화-시작하기)

작동 여부를 확인하려면 봇에게 `/start` 또는 간단한 인사를 보내보세요.

### 그룹 메시지 설정​ (#그룹-메시지-설정)

- 그룹에서 봇이 모든 메시지를 읽게 하려면 BotFather에서 Privacy Mode를 `Disabled`로 설정해야 합니다.

- (추천) 봇의 관리자 권한을 부여하여 더 원활하게 동작하게 할 수 있습니다.

## ⚙️ 상세 옵션 (Advanced)​ (#️-상세-옵션-advanced)

OpenClaw는 내부적으로 `grammY` 프레임워크를 사용합니다. 폰트, 커스텀 명령어 등 세부 설정은 grammY 상세 가이드 (/channels/grammy)를 참고하세요.

WhatsApp 연결 가이드
(/channels/whatsapp)다음
grammY (Telegram Framework)
(/channels/grammy)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. 봇 생성 (BotFather) (#1-봇-생성-botfather)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- 3. 게이트웨이 재시작 (#3-게이트웨이-재시작)

- 💬 대화 시작하기 (#-대화-시작하기)
- 그룹 메시지 설정 (#그룹-메시지-설정)

- ⚙️ 상세 옵션 (Advanced) (#️-상세-옵션-advanced)

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
