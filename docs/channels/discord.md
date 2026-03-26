---
title: Discord
sidebar_label: Discord
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Discord 서버나 DM에서 OpenClaw를 쓰는 흐름을 잡기 |
| 추천 환경 | Discord 서버 권한을 확인할 수 있는 환경 |
| 현재 위치 | `channels/discord` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Discord

이 문서에서는 OpenClaw를 다양한 채팅 앱과 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 쓰면 좋은가
- 설정 개요
- 운영 팁

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.


Discord는 커뮤니티 운영, 스레드 기반 협업, 봇 명령 자동화에 강한 채널입니다. 서버 단위 운영이 필요한 경우 특히 유용합니다.


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 언제 쓰면 좋은가

- 커뮤니티 서버 운영
- 팀 협업 및 알림 자동화
- 역할/채널 분리를 활용한 운영

## 설정 개요

1. Discord Developer Portal에서 앱과 봇을 생성합니다.
2. 필요한 토큰과 권한 범위를 준비합니다.
3. OpenClaw에 Discord 채널을 연결합니다.
4. 테스트 서버에서 DM 또는 제한된 채널로 먼저 검증합니다.

---

## 🚀 처음부터 끝까지 한 번에 — 완결 설정 흐름

### Step 1. Discord Developer Portal에서 봇 만들기

1. **https://discord.com/developers/applications** 접속
2. **New Application** 클릭 → 앱 이름 입력
3. 왼쪽 메뉴에서 **Bot** 클릭
4. **Add Bot** → **Yes, do it!** 클릭
5. **Token** 섹션에서 **Reset Token** → 토큰 복사 (한 번만 보여요! 꼭 저장하세요)

---

### Step 2. Privileged Gateway Intents 켜기

Bot 메뉴 하단의 **Privileged Gateway Intents** 섹션에서:

- ✅ **Presence Intent** 켜기
- ✅ **Server Members Intent** 켜기  
- ✅ **Message Content Intent** 켜기 ← **이게 없으면 메시지를 못 읽어요!**

**Save Changes** 버튼 클릭!

:::caution 이거 안 켜면 봇이 벙어리가 돼요
Message Content Intent를 켜지 않으면 봇이 채팅 내용을 읽을 수 없어요.  
서버에서 @멘션해도 조용히 있다면 이 설정부터 확인하세요.
:::

---

### Step 3. 봇을 서버에 초대하기

OAuth2 → URL Generator에서:

- **Scopes**: `bot` 체크
- **Bot Permissions**: `Send Messages`, `Read Message History`, `Add Reactions` 체크
- 생성된 URL을 복사해서 브라우저에 열기 → 테스트 서버에 초대

---

### Step 4. config 파일에 설정 넣기

`openclaw.json` 파일에 아래처럼 추가합니다:

```json
{
  "channels": {
    "discord": {
      "botToken": "YOUR_DISCORD_BOT_TOKEN_HERE",
      "dmPolicy": "approved",
      "requireMention": true,
      "allowedGuilds": ["YOUR_SERVER_ID_HERE"]
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `botToken` → Discord가 "이 봇이 진짜야!"라고 확인하는 비밀 열쇠예요.
- `dmPolicy` → 누가 DM으로 봇을 쓸 수 있는지 정하는 규칙이에요.
- `requireMention` → `true`면 @봇이름 을 불러야만 봇이 반응해요. 시끄러운 채널에서 유용해요.
- `allowedGuilds` → 봇이 활동할 서버 ID 목록이에요. 없으면 모든 서버에서 반응해요.
:::

:::tip 서버 ID 어디서 찾나요?
Discord 설정 → 고급 → **개발자 모드** 켜기 → 서버 이름 우클릭 → **ID 복사**
:::

---

### Step 5. Gateway 시작/재시작

```bash
openclaw gateway restart
```

---

### ✅ 성공 확인 박스

- [ ] Developer Portal에서 봇 토큰을 받았다
- [ ] Privileged Intents 3개 모두 켰다 (특히 Message Content Intent!)
- [ ] 봇을 테스트 서버에 초대했다
- [ ] `openclaw.json`에 `botToken` 설정을 넣었다
- [ ] Gateway를 재시작했다
- [ ] 테스트 서버에서 @봇이름 으로 메시지를 보냈을 때 답장이 왔다 🎉

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 꼭 켜야 하는 Discord 권한

Discord에서 봇을 만들 때는 **Privileged Gateway Intents**를 꼭 켜야 합니다.
이건 봇이 서버 안에서 중요한 정보를 읽을 수 있게 해주는 스위치예요.

- ✅ **Message Content Intent** — 이걸 안 켜면 봇이 메시지 내용을 읽을 수 없어요.
- ✅ **Server Members Intent** — 서버 멤버 정보를 확인할 때 필요해요.
- ✅ **Presence Intent** — 사용자 온라인 상태 확인 시 필요해요.

설정 경로:

1. **Discord Developer Portal** (`discord.com/developers/applications`) 열기
2. 내 앱 선택
3. 왼쪽 메뉴 **Bot** 클릭
4. 아래로 스크롤 → **Privileged Gateway Intents** 섹션 찾기
5. 3개 토글 모두 켜기
6. **Save Changes** 클릭

:::caution 꼭 확인하세요
**이 설정 없이는 봇이 그룹 메시지를 받을 수 없습니다.**
서버에서 봇이 조용히 아무 반응도 안 한다면, 이 설정부터 먼저 확인하세요.
:::

## 주의할 점

- 과도한 권한을 가진 봇은 보안 리스크가 큽니다.
- 공개 서버에서는 응답 범위와 트리거 조건을 먼저 제한하세요.
- 특정 채널 전용으로 시작한 뒤 점진적으로 넓히는 편이 안전합니다.
## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정

## 🎯 다음 단계

- 다음으로 [채널 개요](/channels/) 문서를 읽어보세요.
- 다음으로 [페어링 가이드](/start/pairing) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
