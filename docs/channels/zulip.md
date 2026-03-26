---
title: Zulip
sidebar_label: Zulip
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 스레드 중심 팀 채팅 Zulip에 OpenClaw 봇 연결하기 |
| 추천 환경 | 스레드 기반 토론이 많은 팀, 오픈소스 커뮤니티 |
| 현재 위치 | `channels/zulip` |

:::tip 학습 팁
Zulip은 "스트림(Stream)"과 "토픽(Topic)"이라는 독특한 구조를 써요. 처음엔 낯설지만 익숙해지면 정말 편하답니다!
:::

# Zulip

## 📌 이 문서에서 배우는 것
- Zulip의 독특한 메시지 구조
- API 키 준비하기
- OpenClaw와 연결하기
- 성공 확인하는 방법

---

:::tip 💡 Zulip이 뭔가요?
Zulip은 **스레드(Thread)를 아주 잘 정리하는 팀 채팅**이에요.

일반 채팅은 메시지가 시간순으로만 쌓이는데, Zulip은 **스트림(채널) > 토픽(주제)** 구조로 대화를 주제별로 나눠요.
예를 들어, "개발" 스트림 안에 "버그 수정", "새 기능", "배포 이슈" 같은 토픽이 각각 따로 있어서 대화가 섞이지 않아요.
마치 폴더 안에 파일을 주제별로 정리하는 것처럼요! 📁
:::

## 언제 쓰면 좋은가

- 주제별 스레드 관리가 중요한 팀
- 오픈소스 프로젝트 커뮤니티 (Python, Rust 등 많이 사용)
- 비동기 협업이 많은 원격 팀

---

## 🚀 설정 방법

### Step 1. Bot 계정 생성

Zulip 조직 설정에서 봇을 추가하세요.

1. Zulip 앱에서 **Settings** → **Your bots**
2. **Add a new bot** 클릭
3. **Bot type: Generic bot** 선택
4. Full name과 Email 입력 (예: `openclawbot@yourorg.zulipchat.com`)
5. **Create bot** 클릭
6. 생성된 **API key**를 복사해두세요

:::tip API Key가 뭔가요?
API Key는 봇이 Zulip 서버에 "나야!"라고 증명하는 긴 문자열이에요.
마치 출입증처럼, 이게 있어야 봇이 메시지를 보내고 받을 수 있어요!
:::

### Step 2. OpenClaw config 설정

```json
{
  "channels": {
    "zulip": {
      "enabled": true,
      "siteUrl": "https://yourorg.zulipchat.com",
      "email": "openclawbot-bot@yourorg.zulipchat.com",
      "apiKey": "your-bot-api-key",
      "subscriptions": [
        { "stream": "general", "topic": "bot-alerts" },
        { "stream": "development", "topic": "ci-cd" }
      ],
      "dmPolicy": "knownOnly"
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `siteUrl` → Zulip 조직 주소예요. 클라우드면 `*.zulipchat.com`, 자체 설치면 내부 URL이에요.
- `email` → 봇 계정의 이메일 (Bot email)이에요.
- `apiKey` → Step 1에서 복사한 API Key예요.
- `subscriptions` → 봇이 참여할 스트림과 토픽 목록이에요. `stream`은 채널, `topic`은 주제 이름이에요.
:::

### Step 3. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 4. 연결 확인

```bash
openclaw channels status --probe
```

Zulip에서 봇이 구독한 스트림의 토픽에 메시지를 보내보세요.

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] Zulip Settings에서 Bot 계정을 만들었다
- [ ] API Key를 복사해뒀다
- [ ] `openclaw.json`에 Zulip 설정을 넣었다
- [ ] `subscriptions`에 스트림과 토픽을 올바르게 입력했다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] Zulip 스트림에서 봇에게 메시지를 보냈을 때 답장이 왔다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Mattermost](/channels/mattermost) 문서도 읽어보세요 — 다른 자체 호스팅 팀 채팅이에요.

## 🆘 막히면 여기로

- `401 Unauthorized` 오류가 난다면 → email과 apiKey 조합이 맞는지 확인하세요
- 봇이 메시지를 못 받는다면 → 봇이 해당 스트림을 구독하고 있는지 Zulip 설정에서 확인하세요
- 자체 호스팅 Zulip이라면 → `siteUrl`이 올바른 내부 URL인지 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
