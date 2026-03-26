---
title: 페어링
sidebar_label: 페어링
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 처음 연결할 때 페어링 과정을 헷갈리지 않고 끝내기 |
| 추천 환경 | QR 또는 코드 입력이 가능한 첫 연결 환경 |
| 현재 위치 | `start/pairing` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 채널 페어링 (Pairing)

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🔗 페어링 방법
- CLI 기반 페어링 흐름
- 코드 승인 방법
- 코드 만료 시간

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

채팅 채널(Telegram, WhatsApp, Discord, Slack 등)을 OpenClaw Gateway에 연결하는 과정을 **페어링(Pairing)**이라고 합니다. OpenClaw는 여러 채널을 지원하며, 채널마다 연결 방식이 조금씩 다릅니다.

---

:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 🔗 페어링 방법

:::tip 🔒 왜 DM이 바로 안 될까요?
기본적으로 **모르는 사람의 DM은 자동 차단**될 수 있습니다.
이때는 화면이나 DM에 보이는 **pairing code를 입력해 승인**해야 대화를 시작할 수 있어요.
:::


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

각 플랫폼의 개발자 콘솔에서 발급받은 Bot Token 또는 API Key를 설정합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure
# 채널 선택 후 토큰 입력 프롬프트 안내
```

**Telegram Bot 토큰 발급 방법:**
1. Telegram에서 `@BotFather`에게 `/newbot` 명령 전송
2. 봇 이름과 유저명 설정
3. 발급받은 토큰을 `openclaw configure`에 입력

### 방법 4. 숫자 코드 입력 방식

일부 채널은 화면에 표시되는 코드를 승인해서 페어링을 마칩니다.

---

## CLI 기반 페어링 흐름

OpenClaw는 **명령어로도 페어링 상태를 보고 승인**할 수 있습니다.

### 1) 현재 대기 중인 코드 보기

아래 명령어를 터미널에 입력하세요:
```bash
openclaw pairing list <channel>
```

예시:
```bash
openclaw pairing list telegram
```

이 명령은 현재 채널에서 **승인 대기 중인 pairing code**가 있는지 보여줍니다.

### 2) 코드 승인하기

아래 명령어를 터미널에 입력하세요:
```bash
openclaw pairing approve <channel> <CODE>
```

예시:
```bash
openclaw pairing approve telegram ABCD1234
```

이 명령은 화면이나 DM에 표시된 코드를 승인해서, 그 사용자를 연결해 줍니다.

즉, **기본적으로 모르는 사람의 DM은 그냥 바로 열리지 않을 수 있고**, 이 코드 승인 과정을 지나야 대화를 시작할 수 있습니다.

### 3) 필요하면 다시 확인하기

승인 후에도 헷갈리면 다시 `pairing list`를 실행해서 대기 중인 코드가 남아 있는지 확인하면 됩니다.

:::tip 이렇게 이해하면 쉬워요
- `list` = 지금 대기표가 있는지 보기
- `approve` = 그 대기표를 확인하고 통과시키기
:::

## Pairing 코드 만료 시간

Pairing 코드는 **1시간 뒤 만료**됩니다.

- 1시간 안에 승인하지 않으면 새 코드를 다시 받아야 합니다.
- 오래된 코드는 다시 입력해도 승인되지 않습니다.

:::caution 코드가 안 되면 오타보다 시간을 먼저 보세요
코드가 맞는 것 같은데 승인이 안 되면, 가장 흔한 이유는 **이미 1시간이 지나서 만료된 경우**입니다.
:::

## 📋 지원 채널 목록

OpenClaw 문서 기준으로 여러 채널을 지원합니다.

| 채널 | 페어링 방식 |
|------|------------|
| Telegram | Bot Token + DM/승인 흐름 |
| Discord | Bot Token |
| Slack | OAuth / API Token |
| WhatsApp | QR 코드 |
| iMessage | BlueBubbles |
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

- 페어링 정보는 `~/.openclaw/` 폴더에 저장됩니다.
- `channels.{name}.allowFrom`을 설정하면 특정 사용자만 에이전트에 접근할 수 있습니다.
- DM 기반 승인 흐름을 쓰면 공개 공간보다 더 안전합니다.
- 기본적으로 모르는 사람의 DM은 자동 차단될 수 있습니다.
- 그래서 “왜 DM이 안 되지?” 싶으면 pairing code가 나왔는지 먼저 확인하세요.

페어링 초기화가 필요하면:

아래 명령어를 터미널에 입력하세요:
```bash
openclaw pairing reset
```

## 🔄 여러 채널 동시 연결

하나의 Gateway에 여러 채널을 동시에 연결할 수 있습니다. `openclaw configure`를 채널 수만큼 반복하거나, 설정 파일(`~/.openclaw/openclaw.json`)에서 직접 다중 채널을 구성할 수 있습니다.

## ✅ 성공하면 이렇게 보입니다

- `openclaw pairing list <channel>`에서 대기 중인 코드가 보입니다.
- `openclaw pairing approve <channel> <CODE>` 실행 후 승인 상태로 바뀝니다.
- 실제 채널에서 봇에게 메시지를 보내면 응답을 확인할 수 있습니다.

## 🎯 다음 단계

- 다음으로 [채널 목록](/channels/) 문서를 읽어보세요.
- 다음으로 [Telegram](/channels/telegram) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
- 다음으로 [온보딩](/start/onboarding) 문서를 읽어보세요.
