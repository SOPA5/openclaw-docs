---
title: Telegram
sidebar_label: Telegram
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Telegram 봇을 가장 빠르게 연결해서 첫 대화를 시작하기 |
| 추천 환경 | 개인 DM으로 먼저 테스트하는 환경 |
| 현재 위치 | `channels/telegram` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Telegram

이 문서에서는 OpenClaw를 다양한 채팅 앱과 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 쓰면 좋은가
- 설정 개요
- DM 정책과 그룹 설정
- 운영 팁

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

Telegram은 OpenClaw에서 가장 빠르게 시작하기 좋은 채널입니다. Bot API 기반이라 설정 난도가 낮고, 테스트와 운영 전환이 모두 쉽습니다.

:::tip 💡 쉽게 이해하기
**Bot**은 사람이 매번 손으로 답하지 않아도 자동으로 반응하는 프로그램이에요. 채팅 앱 안에서 도우미처럼 움직입니다.
:::

## 언제 쓰면 좋은가

- 가장 빠른 PoC
- 개발·테스트 환경
- 개인 DM 기반 생산성 워크플로우

## 설정 개요

1. Telegram Bot을 만들고 Bot Token을 확보합니다.
2. OpenClaw에 Telegram 채널 설정을 추가합니다.
3. 봇과 DM을 시작한 뒤 페어링 절차를 완료합니다.
4. 연결 후 간단한 질문을 보내 응답을 확인합니다.

---

## 🚀 처음부터 끝까지 한 번에 — 완결 설정 흐름

### Step 1. BotFather에서 봇 만들기

1. Telegram에서 **@BotFather** 를 검색해서 열어요.
2. `/newbot` 명령을 보냅니다.
3. 봇 이름 → 봇 username(끝에 `_bot` 필수) 순서로 입력합니다.
4. 완료 후 BotFather가 **Bot Token**을 알려줍니다.  
   예시: `123456789:ABCdefGHIjklMNOpqrSTUvwxYZ`

:::tip 토큰이 뭔가요?
토큰은 봇의 **비밀번호 + 아이디**를 합쳐놓은 긴 문자열이에요.  
이게 있어야 OpenClaw가 "이 봇이 내 거야!"라고 Telegram에 증명할 수 있어요.  
절대 다른 사람한테 알려주지 마세요! 🔐
:::

---

### Step 2. OpenClaw config에 토큰 넣기

`openclaw.json` (또는 `config.json`) 파일에 아래처럼 추가합니다:

```json
{
  "channels": {
    "telegram": {
      "botToken": "123456789:ABCdefGHIjklMNOpqrSTUvwxYZ",
      "dmPolicy": "pairing"
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `botToken` → 내 봇이 맞다고 Telegram에 증명하는 열쇠예요.
- `dmPolicy` → 누가 봇한테 DM을 보낼 수 있는지 정하는 문지기 설정이에요.
:::

---

### Step 3. Gateway 시작하기

```bash
openclaw gateway start
```

또는 systemd로 실행 중이면:

```bash
openclaw gateway status
```

Gateway가 `running` 상태인지 확인하세요.

---

### Step 4. Telegram에서 봇과 DM 시작하기

1. Telegram 앱에서 내가 만든 봇을 검색합니다. (username으로 검색)
2. **START** 버튼을 누릅니다.
3. 봇이 **페어링 코드**를 보내줍니다. (예: `PAIR-XXXXXX`)

---

### Step 5. 페어링 승인하기

서버(또는 로컬 터미널)에서 아래 명령을 실행합니다:

```bash
openclaw pairing approve telegram PAIR-XXXXXX
```

`PAIR-XXXXXX` 자리에 봇이 보내준 실제 코드를 넣으세요.

:::tip 페어링이 뭔가요?
페어링은 "이 사람이 이 봇을 써도 돼!" 라고 허락하는 과정이에요.  
집 열쇠를 복사해주는 것처럼, 한 번만 승인하면 그 이후엔 자동으로 연결돼요.
:::

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] BotFather에서 Bot Token을 받았다
- [ ] `openclaw.json`에 `botToken` 값을 정확히 넣었다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] Telegram에서 봇과 DM을 시작했다
- [ ] `openclaw pairing approve telegram <CODE>` 명령이 성공했다
- [ ] 봇에게 메시지를 보냈을 때 답장이 왔다 🎉

---

:::tip 🔒 왜 DM이 바로 안 될까요?
기본적으로 **모르는 사람의 DM은 자동 차단**될 수 있습니다.
그래서 처음에는 **pairing code를 입력해 승인**해야 대화를 시작할 수 있어요.
:::

## DM 정책 (`dmPolicy`)

`dmPolicy`는 **개인 메시지(DM)를 누구까지 받을지 정하는 문**입니다.

| 값 | 뜻 | 언제 쓰면 좋은가 |
|---|---|---|
| `open` | 누구나 DM을 시작할 수 있음 | 아주 빠르게 테스트할 때 |
| `approved` | 승인된 사람만 계속 사용 가능 | 일반적인 안전 기본값 |
| `knownOnly` | 이미 알고 있는 사용자만 허용 | 운영 중인 개인/소규모 환경 |
| `allowlisted` | 허용 목록에 넣은 사람만 허용 | 가장 엄격하게 막고 싶을 때 |

:::caution 너무 넓게 열지 마세요
`open`은 편하지만, 원하지 않는 사람이 먼저 말을 걸 수 있습니다.
처음 테스트가 끝나면 보통 `approved`나 `allowlisted`로 좁히는 것이 더 안전합니다.
:::

## 그룹 설정

Telegram은 DM뿐 아니라 그룹에서도 쓸 수 있습니다. 이때는 **그룹 설정을 꼭 좁게** 잡는 것이 좋습니다.

- `channels.telegram.groups`: 어떤 그룹에서 동작할지 정하는 설정
- `requireMention`: 봇 이름을 직접 불렀을 때만 반응하게 하는 설정

`requireMention`을 켜 두면, 그룹에서 대화가 많아도 봇이 괜히 끼어들 가능성이 줄어듭니다.

:::tip 그룹은 이렇게 시작하세요
처음에는 **DM에서 먼저 성공 확인** → 그다음 **작은 테스트 그룹** → 마지막에 실제 운영 그룹으로 가는 순서가 가장 안전합니다.
:::

## Webhook mode는 무엇인가요?

Telegram은 보통 Bot API로 연결하지만, 환경에 따라 **webhook mode**를 사용할 수도 있습니다.

- 쉽게 말해 Telegram이 새 메시지를 **바로 알려주는 방식**입니다.
- 서버 주소와 HTTPS 구성이 필요할 수 있습니다.
- 처음 시작하는 사람은 보통 기본 방식으로도 충분합니다.

즉, **빠른 시작은 기본 방식**, **고정 서버 운영은 webhook mode 검토**라고 이해하면 됩니다.

## Pairing 코드 만료 시간

Telegram DM 페어링을 사용할 때 표시되는 **pairing code는 1시간 뒤 만료**됩니다.

- 1시간 안에 승인하지 않으면 새 코드를 다시 받아야 합니다.
- 오래된 코드는 다시 써도 연결되지 않습니다.

:::caution 코드가 안 먹히면 먼저 시간부터 확인하세요
페어링 코드가 맞는데도 승인되지 않으면, 가장 먼저 **1시간이 지났는지** 확인하세요.
그렇다면 새 코드를 다시 받아서 진행하면 됩니다.
:::

## 운영 팁

- “왜 DM이 안 되지?” 싶으면 **봇이 pairing code를 보여줬는지** 먼저 확인하세요.
- 기본적으로 모르는 사람의 DM은 자동 차단될 수 있습니다.
- pairing code를 승인하면 그다음부터는 훨씬 쉽게 이어서 대화할 수 있습니다.

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 그룹에서 바로 시작하지 말고 DM에서 먼저 검증하세요.
- 관리자 권한이 필요한 그룹 기능은 범위를 최소화하세요.
- 허용 사용자 제한이 없으면 원치 않는 접근이 생길 수 있습니다.

## 함께 보면 좋은 문서

- [Grammy](/channels/grammy)
- [페어링](/start/pairing)
- [FAQ](/help/faq)

## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정
- **pairing code 만료**: 승인 코드는 1시간 뒤 만료

## ✅ 성공하면 이렇게 보입니다

- DM에서 봇에게 말을 걸 수 있습니다.
- 필요한 경우 pairing code를 받아 승인할 수 있습니다.
- 그룹에서는 `requireMention` 설정에 따라 꼭 불렀을 때만 반응합니다.

## 🎯 다음 단계

- 다음으로 [Grammy](/channels/grammy) 문서를 읽어보세요.
- 다음으로 [페어링](/start/pairing) 문서를 읽어보세요.
- 다음으로 [FAQ](/help/faq) 문서를 읽어보세요.
- 다음으로 [채널 개요](/channels/) 문서를 읽어보세요.
