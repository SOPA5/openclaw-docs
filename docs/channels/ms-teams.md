---
title: Microsoft Teams
sidebar_label: Microsoft Teams
sidebar_position: 8
---

-  (/)

- 채널 (Channels)

- Microsoft Teams 연결 가이드

# Microsoft Teams 연결 가이드

엔터프라이즈 환경에서 Teams를 사용하는 경우 Azure Bot Service를 통해 OpenClaw를 연결할 수 있습니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. Azure Bot 등록​ (#1-azure-bot-등록)

- Azure Portal (https://portal.azure.com/)에서 'Azure Bot' 서비스를 검색하고 생성합니다.

- Messaging endpoint에 OpenClaw 게이트웨이의 공개 URL을 입력합니다.

- `Microsoft App ID`와 `Client Secret`을 발급받습니다.

### 2. Teams 채널 추가​ (#2-teams-채널-추가)

- 생성된 Azure Bot 리소스 내의 `Channels` 메뉴에서 Microsoft Teams를 선택하고 활성화합니다.

### 3. OpenClaw 설정​ (#3-openclaw-설정)

```
openclaw configure set channels.msteams.enabled true
openclaw configure set channels.msteams.appId "앱_아이디"
openclaw configure set channels.msteams.appPassword "클라이언트_시크릿"

```

---

## 🏢 대규모 조직을 위한 팁​ (#-대규모-조직을-위한-팁)

- 매니페스트 생성: `App Studio`를 이용해 설치 패키지(JSON)를 만들고 조직의 Teams 관리자에게 승인을 요청하세요.

- 개인 탭(Personal Tabs): 에이전트와의 대화뿐만 아니라 대시보드를 Teams 내부에 탭으로 삽입할 수 있습니다.

Google Chat 연결 가이드
(/channels/google-chat)다음
LINE 연결 가이드
(/channels/line)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. Azure Bot 등록 (#1-azure-bot-등록)

- 2. Teams 채널 추가 (#2-teams-채널-추가)

- 3. OpenClaw 설정 (#3-openclaw-설정)

- 🏢 대규모 조직을 위한 팁 (#-대규모-조직을-위한-팁)

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
