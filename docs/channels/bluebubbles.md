---
title: BlueBubbles
sidebar_label: BlueBubbles
sidebar_position: 11
---

-  (/)

- 채널 (Channels)

- iMessage (BlueBubbles) 연결 가이드

# iMessage (BlueBubbles) 연결 가이드

Apple의 iMessage를 통해 에이전트와 대화하고 싶다면 BlueBubbles를 사용하는 것이 가장 안정적이고 권장되는 방식입니다.

## 🏗️ 작동 원리​ (#️-작동-원리)

iMessage는 폐쇄적인 시스템이므로, 중간에서 가교 역할을 할 서버가 필요합니다.

- macOS 기기: iMessage를 수신할 Mac (실제 맥 혹은 가상 머신).

- BlueBubbles Server: Mac 위에서 돌아가며 메시지를 API로 변환합니다.

- OpenClaw: BlueBubbles API를 통해 메시지를 주고받습니다.

## 🛠️ 설정 방법​ (#️-설정-방법)

### 1. BlueBubbles 서버 설정​ (#1-bluebubbles-서버-설정)

- BlueBubbles 공식 문서 (https://docs.bluebubbles.app/)를 참고하여 Mac에 서버를 설치하고 실행합니다.

- `Settings -> API` 메뉴에서 API Key를 활성화합니다.

### 2. OpenClaw 설정​ (#2-openclaw-설정)

```
openclaw configure set channels.bluebubbles.enabled true
openclaw configure set channels.bluebubbles.serverUrl "http://your-mac-ip:1234"
openclaw configure set channels.bluebubbles.password "여러분의_API_Key"

```

---

## 🌟 BlueBubbles의 장점​ (#-bluebubbles의-장점)

- 풍부한 기능: 이모지 반응(Tapbacks), 답장(Replies), 타이핑 상태 확인 등이 지원됩니다.

- 안정성: 단순 스크립트 기반 방식보다 연결 유지가 훨씬 강력합니다.

- 아이클라우드 통합: 내 기존 전화번호나 Apple ID를 그대로 활용할 수 있습니다.

레거시 방식(imsg) 보기 (/channels/imessage)

Matrix 연결 가이드
(/channels/matrix)다음
iMessage (Legacy - imsg) 가이드
(/channels/imessage)

- 🏗️ 작동 원리 (#️-작동-원리)

- 🛠️ 설정 방법 (#️-설정-방법)
- 1. BlueBubbles 서버 설정 (#1-bluebubbles-서버-설정)

- 2. OpenClaw 설정 (#2-openclaw-설정)

- 🌟 BlueBubbles의 장점 (#-bluebubbles의-장점)

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
