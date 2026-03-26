---
title: Mattermost
sidebar_label: Mattermost
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 오픈소스 팀 채팅 Mattermost에 OpenClaw 봇 연결하기 |
| 추천 환경 | 자체 서버 운영 팀, Slack 대안을 찾는 기업 환경 |
| 현재 위치 | `channels/mattermost` |

:::tip 학습 팁
Mattermost는 Slack과 아주 비슷하게 생겼어요. Slack을 써봤다면 금방 익숙해질 거예요!
:::

# Mattermost

## 📌 이 문서에서 배우는 것
- Mattermost 채널의 장점
- Bot 계정과 Access Token 준비하기
- OpenClaw와 연결하기
- 성공 확인하는 방법

---

:::tip 💡 Mattermost가 뭔가요?
Mattermost는 **Slack처럼 생긴 오픈소스 팀 채팅**이에요. 오픈소스라서 무료로 쓸 수 있고, 직접 서버에 설치할 수 있어요.
"오픈소스"란 프로그램의 설계도(소스코드)를 공개해서 누구나 무료로 쓸 수 있게 한 것이에요.
많은 기업들이 Slack의 비용 부담 없이 Mattermost로 비슷한 기능을 구현하고 있어요. 💼
:::

## 언제 쓰면 좋은가

- Slack 대신 자체 호스팅 팀 채팅 운영
- 오픈소스 커뮤니티 자동화 봇
- DevOps 알림 및 CI/CD 연동

---

## 🚀 설정 방법

### Step 1. Bot 계정 생성

Mattermost 시스템 콘솔에서 봇 계정을 만드세요.

1. **System Console** → **Integrations** → **Bot Accounts**
2. **Enable Bot Account Creation** → `true`
3. **Add Bot Account** 클릭
4. Username 입력 (예: `openclawbot`)
5. **Save** 후 생성된 **Access Token** 복사

:::tip Bot Account가 뭔가요?
Bot Account는 사람이 아닌 **프로그램 전용 계정**이에요.
일반 사용자 계정과 다르게 로그인 화면 없이 토큰으로만 작동해서 자동화에 딱 맞아요!
:::

### Step 2. 봇을 채널에 초대

Mattermost 채널에서 봇 계정을 멤버로 추가하세요.

```
/invite @openclawbot
```

### Step 3. OpenClaw config 설정

```json
{
  "channels": {
    "mattermost": {
      "enabled": true,
      "serverUrl": "https://mattermost.mycompany.com",
      "accessToken": "your-bot-access-token",
      "teamName": "myteam",
      "channels": ["town-square", "alerts", "dev-team"],
      "dmPolicy": "knownOnly",
      "useWebSocket": true
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `serverUrl` → Mattermost 서버 주소예요.
- `accessToken` → 봇의 Access Token이에요 (Step 1에서 복사한 값).
- `teamName` → 봇이 참여할 팀 이름이에요.
- `channels` → 봇이 활동할 채널 목록이에요.
- `useWebSocket: true` → 메시지를 실시간으로 받는 빠른 연결 방식이에요.
:::

### Step 4. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 5. 연결 확인

```bash
openclaw channels status --probe
```

Mattermost 채널에서 봇에게 메시지를 보내서 응답을 확인하세요.

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] System Console에서 Bot Account를 생성했다
- [ ] Access Token을 복사해뒀다
- [ ] 봇을 사용할 채널에 초대했다 (`/invite @openclawbot`)
- [ ] `openclaw.json`에 Mattermost 설정을 넣었다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] 채널에서 봇에게 메시지를 보냈을 때 답장이 왔다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Rocket.Chat](/channels/rocket-chat) 문서도 읽어보세요 — 비슷한 자체 호스팅 채팅이에요.
- [Zulip](/channels/zulip) 문서도 읽어보세요 — 스레드 중심 팀 채팅이에요.

## 🆘 막히면 여기로

- `403 Forbidden` 오류가 난다면 → System Console에서 Bot Accounts가 활성화됐는지 확인하세요
- WebSocket 연결이 실패한다면 → `useWebSocket: false`로 바꿔서 HTTP polling 방식을 써보세요
- 봇이 응답하지 않는다면 → 봇이 해당 채널의 멤버인지 확인하세요 (`/invite` 필요)
- [FAQ](/help/faq) 문서도 함께 확인해보세요
