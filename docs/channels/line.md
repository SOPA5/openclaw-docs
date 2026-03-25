---
title: LINE
sidebar_label: LINE
sidebar_position: 9
---

-  (/)

- 채널 (Channels)

- LINE 연결 가이드

# LINE 연결 가이드

LINE은 한국과 일본을 포함한 아시아 지역에서 매우 강력한 채널입니다. OpenClaw는 LINE Messaging API를 완벽하게 지원합니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. LINE Developers 계정 생성​ (#1-line-developers-계정-생성)

- LINE Developers (https://developers.line.biz/) 포털에 로그인합니다.

- `Messaging API` 채널을 새로 생성합니다.

### 2. 채널 정보 복사​ (#2-채널-정보-복사)

- Channel Secret: `Basic settings` 탭에서 확인.

- Channel Access Token: `Messaging API` 탭 하단에서 'Issue' 클릭 후 복사.

### 3. Webhook 설정​ (#3-webhook-설정)

- `Messaging API` 탭에서 `Webhook URL`을 OpenClaw 게이트웨이 주소로 설정합니다. (예: `https://your-domain.com/hooks/line`)

- `Use webhook` 옵션을 활성화(ON)합니다.

### 4. OpenClaw 설정​ (#4-openclaw-설정)

```
openclaw configure set channels.line.enabled true
openclaw configure set channels.line.secret "Channel Secret"
openclaw configure set channels.line.token "Channel Access Token"

```

---

## 🎌 주요 활용처​ (#-주요-활용처)

- CS 봇: 고객의 질문에 대답하고 상품 정보를 제공하는 전문 상담 에이전트.

- 리치 메뉴(Rich Menu): 봇과의 대화창 하단에 고정된 메뉴를 통해 주요 기능을 버튼 하나로 실행하세요.

Microsoft Teams 연결 가이드
(/channels/ms-teams)다음
Matrix 연결 가이드
(/channels/matrix)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. LINE Developers 계정 생성 (#1-line-developers-계정-생성)

- 2. 채널 정보 복사 (#2-채널-정보-복사)

- 3. Webhook 설정 (#3-webhook-설정)

- 4. OpenClaw 설정 (#4-openclaw-설정)

- 🎌 주요 활용처 (#-주요-활용처)

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
