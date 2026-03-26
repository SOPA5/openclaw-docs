---
title: 페어링
sidebar_label: 페어링
sidebar_position: 5
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 입문 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `start/pairing` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 채널 페어링 (Pairing)

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🔗 페어링 방법
- 방법 1. 대화형 설정 (권장)
- 방법 2. QR 코드 방식 (WhatsApp, LINE 등)

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


채팅 채널(Telegram, WhatsApp, Discord, Slack 등)을 OpenClaw Gateway에 연결하는 과정을 **페어링(Pairing)**이라고 합니다. OpenClaw는 23개 이상의 채널을 지원하며, 각 채널은 고유한 연결 방식을 사용합니다.

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 🔗 페어링 방법

### 방법 1. 대화형 설정 (권장)

온보딩 또는 `configure` 명령으로 채널을 선택하면 마법사가 단계별로 안내합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure
```

### 방법 2. QR 코드 방식 (WhatsApp, LINE 등)

게이트웨이 실행 시 터미널에 QR 코드가 표시됩니다. 모바일 앱의 '연결된 기기' 메뉴에서 스캔하세요.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway start
# 터미널에 QR 코드 출력됨
```

### 방법 3. API 토큰 방식 (Telegram, Discord, Slack 등)

각 플랫폼의 개발자 콘솔에서 발급받은 Bot (봇, 자동으로 응답하는 AI 프로그램) Token (토큰, AI가 처리하는 텍스트 단위) 또는 API Key를 설정합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure
# 채널 선택 후 토큰 입력 프롬프트 안내
```

**Telegram Bot 토큰 발급 방법:**
1. Telegram에서 `@BotFather`에게 `/newbot` 명령 전송
2. 봇 이름과 유저명 설정
3. 발급받은 토큰을 openclaw configure에 입력

### 방법 4. 숫자 코드 입력 방식

일부 채널은 화면에 표시되는 8자리 코드를 모바일 앱에 입력하여 페어링을 완료합니다.

---

## 📋 지원 채널 목록

OpenClaw v2026.3.23-2 기준 23개 이상의 채널을 지원합니다.

| 채널 | 페어링 방식 |
|------|------------|
| Telegram | Bot Token |
| Discord | Bot Token |
| Slack | OAuth / API Token |
| WhatsApp | QR 코드 (BlueBubbles 권장) |
| iMessage | BlueBubbles (권장 경로) |
| LINE | API Token |
| Matrix | 계정 자격증명 |
| Microsoft Teams | OAuth |
| Google Chat | 서비스 계정 |
| Signal | 계정 연결 |
| Mattermost | Bot Token |
| Nextcloud Talk | 계정 연결 |
| IRC | 서버 설정 |
| Feishu | App ID + Secret |
| Nostr | 키 쌍 |
| Synology Chat | Webhook |
| Tlon | 계정 연결 |
| Twitch | OAuth |
| WebChat | 기본 내장 |
| Voice Call | 기본 내장 |
| Zalo / Zalo Personal | API Token |

> 각 채널의 상세 설정 방법 → [채널 목록](/channels/)

---

## 🛡️ 페어링 보안

- 페어링 정보는 `~/.openclaw/` 폴더에 암호화되어 저장됩니다.
- `channels.{name}.allowFrom`을 설정하면 특정 사용자만 에이전트에 접근할 수 있습니다.
- 페어링 초기화가 필요하면:

아래 명령어를 터미널에 입력하세요:
```bash
openclaw pairing reset
```

---

## 🔄 여러 채널 동시 연결

하나의 Gateway에 여러 채널을 동시에 연결할 수 있습니다. `openclaw configure`를 채널 수만큼 반복하거나, 설정 파일(`~/.openclaw/openclaw.json`)에서 직접 다중 채널을 구성할 수 있습니다.

## 🎯 다음 단계

- 다음으로 [채널 목록](/channels/) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
- 다음으로 [온보딩](/start/onboarding) 문서를 읽어보세요.
