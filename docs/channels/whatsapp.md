---
title: WhatsApp
sidebar_label: WhatsApp
sidebar_position: 2
---

# WhatsApp 연결 가이드

WhatsApp은 전 세계적으로 가장 널리 사용되는 채널 중 하나입니다. OpenClaw는 `Baileys` 라이브러리를 사용하여 전화기 없이도 독립적으로 동작하는 멀티 디바이스 연결을 지원합니다.

## ✨ 주요 기능​

- 텍스트 및 미디어: 사진, 동영상, 음성 메시지 처리 가능.

- 그룹 대화: 그룹 내에서 에이전트를 호출하고 답변을 받을 수 있습니다.

- 반응(Reactions): 에이전트가 메시지에 이모지 반응을 남길 수 있습니다.

---

## 🛠️ 설정 방법​

### 1. 채널 활성화​

터미널에서 WhatsApp 채널을 활성화합니다.

```
openclaw configure set channels.whatsapp.enabled true

```

### 2. QR 코드 스캔 (Pairing)​

준비가 되면 게이트웨이를 실행하고 표시되는 QR 코드를 WhatsApp 앱으로 스캔합니다.

- 게이트웨이 실행: `openclaw gateway`

- 핸드폰의 WhatsApp 실행 -> 설정 -> 연결된 기기 -> 기기 연결 클릭.

- 터미널에 나타난 QR 코드를 스캔합니다.

### 3. 페어링 코드 사용 (대안)​

QR 스캔이 어려운 환경에서는 페어링 코드를 사용할 수 있습니다.

```
openclaw configure set channels.whatsapp.pairingCode true

```

이후 생성된 8자리 코드를 WhatsApp의 '연결된 기기' 메뉴에 입력합니다.

---

## 🛡️ 보안 및 주의사항​

- 차단 방지(Anti-ban): 짧은 시간 내에 너무 많은 메시지를 보내거나 낯선 사람에게 먼저 메시지를 보내는 행위는 계정 차단의 위험이 있습니다.

- 세션 유지: `~/.openclaw` 폴더에 인증 정보가 저장되므로, 이 폴더를 안전하게 보관하세요.

- 종단간 암호화: OpenClaw는 WhatsApp의 기본적인 암호화 방식을 그대로 따릅니다.

메시징 채널 (Channels)
(/channels/)다음
Telegram 연결 가이드
(/channels/telegram)

- ✨ 주요 기능

- 🛠️ 설정 방법
- 1. 채널 활성화

- 2. QR 코드 스캔 (Pairing)

- 3. 페어링 코드 사용 (대안)

- 🛡️ 보안 및 주의사항

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

