---
title: Rocket.Chat
sidebar_label: Rocket.Chat
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 자체 호스팅 팀 채팅 Rocket.Chat에 OpenClaw 봇 연결하기 |
| 추천 환경 | 사내 Rocket.Chat 서버 운영 중인 팀, 자체 서버 채팅 환경 |
| 현재 위치 | `channels/rocket-chat` |

:::tip 학습 팁
Rocket.Chat은 회사 서버에 직접 설치해서 쓰는 채팅이에요. 봇 계정을 만들고 API 키를 받는 것이 핵심이에요!
:::

# Rocket.Chat

## 📌 이 문서에서 배우는 것
- Rocket.Chat 채널이 왜 유용한지
- 봇 계정과 API 키 준비하기
- OpenClaw와 연결하기
- 성공 확인하는 방법

---

:::tip 💡 Rocket.Chat이 뭔가요?
Rocket.Chat은 Slack처럼 생긴 채팅 도구인데, **직접 서버에 설치해서 쓸 수 있어요**.
회사가 직접 서버를 운영하면 메시지가 외부 회사 서버에 저장되지 않아서 더 안전해요.
학교 급식실을 직접 운영하는 것처럼, 내 서버에서 내가 통제하는 채팅 환경이에요. 🏢
:::

## 언제 쓰면 좋은가

- 사내 Rocket.Chat 서버에 AI 봇 추가
- 프로젝트 알림 자동화
- 고객 지원 자동 응답 시스템 구축

---

## 🚀 설정 방법

### Step 1. 봇 계정 만들기

Rocket.Chat 관리자 패널에서 봇 전용 계정을 생성하세요.

1. **관리자 패널** → **사용자** → **새 사용자 추가**
2. 이름, 이메일, 사용자명 입력 (예: `openclawbot`)
3. **봇 역할(bot role)** 을 체크하세요
4. 비밀번호를 설정하고 저장

### Step 2. Personal Access Token 발급

봇 계정으로 로그인한 후:

1. **프로필** → **Personal Access Tokens**
2. **새 토큰 추가** → 토큰 이름 입력
3. 생성된 **User ID**와 **Token** 값을 복사해두세요

:::tip 토큰이 왜 필요한가요?
토큰은 "이 봇이 진짜 내 계정이야"라고 증명하는 비밀 열쇠예요.
매번 아이디/비밀번호를 입력하는 대신 이 토큰 하나로 자동 로그인이 돼요!
:::

### Step 3. OpenClaw config 설정

```json
{
  "channels": {
    "rocketChat": {
      "enabled": true,
      "serverUrl": "https://chat.mycompany.com",
      "userId": "your-bot-user-id",
      "authToken": "your-personal-access-token",
      "rooms": ["general", "support", "alerts"],
      "dmPolicy": "knownOnly"
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `serverUrl` → 우리 회사 Rocket.Chat 서버 주소예요.
- `userId` → 봇 계정의 User ID예요 (Step 2에서 복사한 값).
- `authToken` → 봇 계정의 Personal Access Token이에요 (Step 2에서 복사한 값).
- `rooms` → 봇이 참여할 채팅방 이름 목록이에요.
:::

### Step 4. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 5. 연결 확인

Rocket.Chat에서 봇이 설정한 채널에 접속해 있는지 확인하고, 메시지를 보내보세요.

```bash
# 채널 상태 확인
openclaw channels status --probe
```

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] Rocket.Chat에 봇 전용 계정을 만들었다
- [ ] Personal Access Token과 User ID를 발급받았다
- [ ] `openclaw.json`에 Rocket.Chat 설정을 넣었다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] 설정한 채널에서 봇에게 메시지를 보냈을 때 답장이 왔다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Mattermost](/channels/mattermost) 문서도 읽어보세요 — 비슷한 자체 호스팅 채팅이에요.

## 🆘 막히면 여기로

- 연결이 안 된다면 → `serverUrl`이 올바른지, HTTPS인지 확인하세요
- `401 Unauthorized` 오류가 난다면 → User ID와 authToken을 다시 확인하세요
- 봇이 채널에 없다면 → Rocket.Chat에서 봇 계정을 해당 채널에 초대했는지 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
