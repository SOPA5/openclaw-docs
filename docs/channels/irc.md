---
title: IRC
sidebar_label: IRC
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | IRC 서버에 OpenClaw 봇을 연결해서 채널에서 대화하기 |
| 추천 환경 | 개발자 커뮤니티, 오픈소스 프로젝트 지원, 레거시 시스템 연동 |
| 현재 위치 | `channels/irc` |

:::tip 학습 팁
IRC는 아주 오래된 채팅 방식이지만, 지금도 개발자들이 많이 쓰는 도구예요. 구조가 단순해서 이해하기 쉽습니다!
:::

# IRC

## 📌 이 문서에서 배우는 것
- IRC가 무엇인지
- IRC 서버에 봇 계정 만들기
- OpenClaw와 연결하기
- 성공 확인하는 방법

---

:::tip 💡 IRC가 뭔가요?
IRC(Internet Relay Chat)는 **인터넷 채팅의 할아버지**예요. 1988년에 만들어진 정말 오래된 채팅 시스템이지만, 지금도 수천 명의 개발자들이 오픈소스 프로젝트 채팅에 쓰고 있어요.
채팅방을 "채널(#channel)"이라고 부르고, `#python`, `#linux` 같은 이름을 씁니다.
:::

## 언제 쓰면 좋은가

- 오픈소스 커뮤니티에서 자동화 봇 운영
- Libera.Chat, OFTC 같은 공개 IRC 네트워크 연동
- 레거시 개발 팀 내부 채팅 자동화

---

## 🚀 설정 방법

### Step 1. IRC 봇 닉네임 준비

IRC에서는 전화번호 대신 **닉네임(nickname)**을 사용해요. 봇 전용 닉네임을 하나 정하세요.

예시: `MyOpenClawBot`

### Step 2. NickServ 등록 (선택, 권장)

주요 IRC 네트워크는 닉네임 등록(`NickServ`)을 지원해요. 등록하면 봇 닉네임이 다른 사람에게 빼앗기지 않아요.

```
/msg NickServ REGISTER <password> <email>
```

### Step 3. OpenClaw config 설정

```json
{
  "channels": {
    "irc": {
      "enabled": true,
      "server": "irc.libera.chat",
      "port": 6697,
      "tls": true,
      "nickname": "MyOpenClawBot",
      "password": "your-nickserv-password",
      "channels": ["#mychannel", "#support"],
      "dmPolicy": "knownOnly"
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `server` → 연결할 IRC 서버 주소예요. Libera.Chat이 가장 널리 쓰여요.
- `port: 6697` → 보안 연결(TLS)용 포트예요. 일반 포트는 6667이지만 TLS를 쓰는 게 훨씬 안전해요.
- `tls: true` → 메시지를 암호화해서 주고받아요.
- `nickname` → 봇의 채팅 이름이에요.
- `channels` → 봇이 참여할 채팅방 목록이에요. 앞에 `#`을 꼭 붙이세요!
:::

### Step 4. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 5. 연결 확인

IRC 클라이언트(예: HexChat, irssi)로 같은 채널에 접속해서 봇이 온라인인지 확인하세요.

```bash
# 봇이 연결됐는지 확인 (IRC 클라이언트에서)
/who MyOpenClawBot
```

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] 봇 닉네임을 정했다
- [ ] (선택) NickServ에 닉네임을 등록했다
- [ ] `openclaw.json`에 IRC 설정을 넣었다
- [ ] `port: 6697`, `tls: true`로 보안 연결을 설정했다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] IRC 채널에서 봇이 온라인으로 보인다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Matrix](/channels/matrix) 문서도 읽어보세요 — IRC보다 현대적인 대안이에요.

## 🆘 막히면 여기로

- 봇이 연결되지 않는다면 → 서버 주소와 포트 번호를 다시 확인하세요
- 닉네임이 이미 사용 중이라면 → 다른 닉네임을 선택하거나 NickServ 등록 여부를 확인하세요
- TLS 오류가 난다면 → `tls: true`와 포트 `6697`이 맞는지 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
