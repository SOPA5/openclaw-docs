---
title: Nostr
sidebar_label: Nostr
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 탈중앙화 메시징 프로토콜 Nostr에 OpenClaw를 연결하기 |
| 추천 환경 | 탈중앙화 커뮤니티, 검열 없는 메시지 전달이 필요한 환경 |
| 현재 위치 | `channels/nostr` |

:::tip 학습 팁
Nostr는 꽤 새로운 기술이에요. 처음 들어보셨다면 아래 "쉽게 이해하기" 섹션을 먼저 읽어보세요!
:::

# Nostr

## 📌 이 문서에서 배우는 것
- Nostr가 무엇인지
- 키(key) 준비하기
- OpenClaw와 연결하기
- 성공 확인하는 방법

---

:::tip 💡 Nostr가 뭔가요?
Nostr는 **아무도 서버를 소유하지 않는** 메신저예요.
카카오톡이나 Discord는 하나의 회사가 서버를 운영해요. 그래서 그 회사가 "이 메시지 지워!"라고 하면 지워질 수 있어요.

Nostr는 달라요! 여러 개의 **릴레이 서버(Relay)**에 동시에 메시지를 보내서, 한 곳이 막혀도 다른 곳에서 받을 수 있어요.
마치 편지를 여러 우체국을 통해 동시에 보내는 것처럼요. 📮
:::

## 언제 쓰면 좋은가

- 검열 없이 메시지를 주고받아야 하는 환경
- 탈중앙화 커뮤니티와의 연동
- 특정 플랫폼에 종속되지 않는 알림 시스템 구축

---

## 🚀 설정 방법

### Step 1. Nostr 키 쌍 생성

Nostr는 **비밀 키(nsec)**와 **공개 키(npub)** 두 가지를 사용해요.

```bash
# nostr-tool 설치 (Node.js 필요)
npm install -g nostr-tools

# 키 쌍 생성
node -e "
const { generatePrivateKey, getPublicKey, nip19 } = require('nostr-tools');
const sk = generatePrivateKey();
const pk = getPublicKey(sk);
console.log('nsec (비밀 키):', nip19.nsecEncode(sk));
console.log('npub (공개 키):', nip19.npubEncode(pk));
"
```

:::tip 🔑 키가 뭔가요?
- **nsec (비밀 키)** → 은행 비밀번호예요. 절대 다른 사람에게 알려주면 안 돼요!
- **npub (공개 키)** → 은행 계좌번호예요. 이걸 알려줘야 메시지를 받을 수 있어요.
이 두 개가 있어야 Nostr에서 내 신원을 증명할 수 있어요.
:::

### Step 2. OpenClaw config 설정

```json
{
  "channels": {
    "nostr": {
      "enabled": true,
      "privateKey": "nsec1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "relays": [
        "wss://relay.damus.io",
        "wss://nos.lol",
        "wss://relay.nostr.band"
      ],
      "dmPolicy": "allowlisted",
      "allowFrom": ["npub1xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"]
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `privateKey` → 봇의 비밀 키(nsec)예요. 절대 공개 저장소에 올리지 마세요!
- `relays` → 메시지를 전달할 릴레이 서버 목록이에요. 여러 개를 넣을수록 안정적이에요.
- `allowFrom` → 메시지를 받을 허용 사용자의 공개 키(npub) 목록이에요.
:::

### Step 3. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 4. 연결 테스트

Nostr 클라이언트(예: Damus, Primal, Snort)에서 봇의 npub로 DM을 보내보세요.

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] nsec(비밀 키)와 npub(공개 키)를 생성했다
- [ ] 비밀 키를 안전한 곳에 보관했다 (절대 공유 금지!)
- [ ] `openclaw.json`에 Nostr 설정을 넣었다
- [ ] 릴레이 서버를 최소 2개 이상 등록했다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] Nostr 클라이언트에서 봇에게 DM을 보냈을 때 답장이 왔다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [보안 설정](/gateway/security)으로 비밀 키를 더 안전하게 관리하세요.

## 🆘 막히면 여기로

- 키 생성이 안 된다면 → Node.js와 nostr-tools 설치 여부를 확인하세요
- 릴레이 연결이 안 된다면 → 인터넷 연결과 릴레이 URL(wss://)을 확인하세요
- 메시지가 안 온다면 → `allowFrom`에 상대방 npub가 등록돼 있는지 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
