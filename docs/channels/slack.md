---
title: Slack
sidebar_label: Slack
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Slack 워크스페이스에 OpenClaw를 붙이는 준비를 하기 |
| 추천 환경 | Slack 앱을 설치할 수 있는 워크스페이스 |
| 현재 위치 | `channels/slack` |

:::tip 학습 팁
처음에는 **앱 하나만 성공시키는 것**이 목표입니다. 채널을 여러 개 한꺼번에 붙이면 어디서 막혔는지 찾기 어려워집니다.
:::

# Slack

Slack은 OpenClaw를 **실제 대화창에 들여보내는 방법** 중 하나입니다. 어떤 채널이든 원리는 비슷하지만, Slack은 특히 **팀 채널에서 알림과 답변을 같이 쓰고 싶은 경우**에 잘 맞습니다.

## 📌 이 문서에서 배우는 것
- 언제 Slack을 쓰면 좋은지
- 연결 준비물은 무엇인지
- 처음 테스트를 어떻게 하면 좋은지
- 운영할 때 주의할 점

:::tip 쉽게 이해하기
채널 연결은 **새 친구를 집에 초대하는 것**과 비슷합니다. 주소와 출입문 비밀번호가 맞아야 들어올 수 있듯이, 토큰·시크릿·앱 설정이 맞아야 OpenClaw가 대화방에 들어올 수 있습니다.
:::

## 언제 쓰면 좋은가
- 팀 채널에서 알림과 답변을 같이 쓰고 싶을 때
- 멘션 기반으로 필요한 순간에만 불러 쓰고 싶을 때
- 업무 자동화 결과를 협업 공간에 바로 남기고 싶을 때

## 설정 개요
1. Slack 앱을 만들고 필요한 권한을 설정합니다.
2. Bot Token과 필요한 시크릿을 준비합니다.
3. OpenClaw에 Slack 채널 정보를 넣습니다.
4. 테스트 채널에서 멘션이나 DM으로 응답을 확인합니다.

---

## 🚀 처음부터 끝까지 한 번에 — 완결 설정 흐름

### Step 1. Slack App 만들기

1. **https://api.slack.com/apps** 접속
2. **Create New App** 클릭
3. **From scratch** 선택
4. App 이름 입력 + 워크스페이스 선택
5. **Create App** 클릭

---

### Step 2. Bot Token Scopes 설정

왼쪽 메뉴 **OAuth & Permissions** → **Scopes** → **Bot Token Scopes** 에서 추가:

| Scope | 용도 |
|---|---|
| `app_mentions:read` | @멘션 읽기 |
| `chat:write` | 메시지 보내기 |
| `im:history` | DM 기록 읽기 |
| `im:read` | DM 채널 목록 |
| `im:write` | DM 열기 |
| `channels:history` | 채널 메시지 읽기 |

:::tip Scope가 뭔가요?
Scope는 봇이 할 수 있는 일의 "허락 범위"예요.  
`chat:write`를 안 주면 봇이 메시지를 보낼 수 없고,  
`im:history`를 안 주면 DM 내용을 읽을 수 없어요.  
필요한 것만 딱 주는 게 안전해요! 🔒
:::

---

### Step 3. 앱 설치 및 Bot Token 받기

1. **OAuth & Permissions** 페이지 상단 → **Install to Workspace** 클릭
2. 권한 요청 화면에서 **허용** 클릭
3. **Bot User OAuth Token** 복사 (형태: `xoxb-YOUR-SLACK-BOT-TOKEN...`)

---

### Step 4. Signing Secret 받기

왼쪽 메뉴 **Basic Information** → **App Credentials** → **Signing Secret** 복사

---

### Step 5. config 파일에 설정 넣기

`openclaw.json` 파일에 아래처럼 추가합니다:

```json
{
  "channels": {
    "slack": {
      "botToken": "xoxb-YOUR-SLACK-BOT-TOKEN",
      "signingSecret": "abcdef1234567890abcdef1234567890",
      "dmPolicy": "approved",
      "requireMention": true
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `botToken` → `xoxb-YOUR-SLACK-BOT-TOKEN`로 시작하는 봇의 신분증이에요. Slack에 "나 진짜 이 봇이야!"라고 증명해요.
- `signingSecret` → Slack이 보낸 요청이 진짜인지 확인하는 열쇠예요. 해킹 방지용이에요.
- `dmPolicy` → 누가 봇한테 DM을 보낼 수 있는지 정하는 규칙이에요.
- `requireMention` → `true`면 @봇이름 을 불러야만 반응해요. 채널에서 잡음 줄이기 딱이에요.
:::

---

### Step 6. Gateway 재시작

```bash
openclaw gateway restart
```

---

### ✅ 성공 확인 박스

- [ ] api.slack.com에서 Slack App을 만들었다
- [ ] Bot Token Scopes 6개를 추가했다
- [ ] 워크스페이스에 앱을 설치했다
- [ ] `xoxb-YOUR-SLACK-BOT-TOKEN`로 시작하는 Bot Token을 받았다
- [ ] Signing Secret도 받았다
- [ ] `openclaw.json`에 두 값을 정확히 넣었다
- [ ] Gateway를 재시작했다
- [ ] 테스트 채널에서 @봇이름 으로 메시지를 보냈을 때 답장이 왔다 🎉

## ✅ 성공 확인
- 테스트 대화에서 메시지를 보냈을 때 응답이 돌아옵니다.
- 연결 오류 없이 채널 앱 또는 봇이 정상 상태로 보입니다.
- DM 또는 작은 테스트 방에서 기본 질의응답이 됩니다.

## 운영 팁
- 처음엔 전사 채널보다 작은 테스트 채널에서 검증하세요.
- 멘션 규칙을 정하면 소음이 줄어듭니다.
- 알림 봇처럼만 쓸지, 대화형 비서처럼 쓸지 먼저 정하면 설정이 쉬워집니다.

## 실전 예시
- **개인 비서형**: 나만 보는 테스트 대화에서 일정 요약이나 알림을 받습니다.
- **운영형**: 작은 테스트 방에서 팀 알림, 질문 답변, 상태 확인 흐름을 먼저 검증합니다.

## 주의할 점
- 처음부터 공개 채널이나 큰 그룹에 넣지 마세요.
- 토큰·시크릿은 일반 채팅방에 올리지 마세요.
- 채널별 멘션 규칙, 답장 규칙, 알림 빈도를 먼저 정해두면 운영이 편합니다.

## ➡️ 다음 단계
- [채널 개요](/channels/)
- [채널 페어링](/start/pairing)
- [시작하기](/start/getting-started)
