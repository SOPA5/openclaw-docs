---
title: Twilio SMS
sidebar_label: Twilio SMS
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Twilio를 통해 SMS로 OpenClaw와 대화하기 |
| 추천 환경 | 스마트폰 문자(SMS) 기반 알림/응답 자동화 |
| 현재 위치 | `channels/twilio-sms` |

:::tip 학습 팁
Twilio는 전화/문자 기능을 만들 수 있게 해주는 서비스예요. 계정과 전화번호를 먼저 준비하면 나머지는 쉬워요!
:::

# Twilio SMS

## 📌 이 문서에서 배우는 것
- Twilio SMS 채널이 왜 유용한지
- Twilio 계정과 전화번호 준비하기
- Webhook URL 설정하기
- OpenClaw와 연결하기

---

:::tip 💡 Twilio SMS가 뭔가요?
Twilio는 프로그램이 **전화번호를 빌려서 문자를 보내고 받을 수 있게** 해주는 서비스예요.
예를 들어, 은행에서 "입금 알림 문자"가 오는 것처럼, OpenClaw도 Twilio를 통해 일반 문자(SMS)로 여러분에게 연락하거나 여러분의 문자에 자동으로 답할 수 있어요. 📱

앱 설치 없이 **기본 문자 기능**만으로 AI와 대화할 수 있다는 게 가장 큰 장점이에요!
:::

## 언제 쓰면 좋은가

- 앱 설치 없이 SMS로 AI 응답 자동화
- 고객에게 문자로 알림 발송
- 스마트폰만 있으면 연결 가능한 범용 인터페이스

---

## 🚀 설정 방법

### Step 1. Twilio 계정 준비

1. [twilio.com](https://www.twilio.com)에서 계정을 만들고 무료 크레딧을 받으세요.
2. **Console** → **Account Info**에서 다음을 확인하세요:
   - **Account SID** (예: `ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`)
   - **Auth Token** (예: `your-auth-token`)

### Step 2. Twilio 전화번호 구입

1. **Phone Numbers** → **Buy a Number**
2. SMS 기능이 있는 번호 구입 (월 약 $1)
3. 구입한 번호를 메모하세요 (예: `+12025551234`)

### Step 3. OpenClaw Webhook URL 설정

Twilio가 메시지를 받으면 OpenClaw에 전달하려면 Webhook URL이 필요해요.

```bash
# 현재 Gateway의 Webhook URL 확인
openclaw gateway status --show-webhooks
```

확인된 URL을 Twilio Console에 입력하세요:
1. **Phone Numbers** → 구입한 번호 클릭
2. **Messaging** 섹션 → **Webhook** URL에 입력
   - 예: `https://your-server.com/webhooks/twilio`
3. **Save** 클릭

:::tip Webhook이 뭔가요?
Webhook은 "이 주소로 알려줘!"라고 말하는 것이에요.
Twilio가 문자를 받으면 자동으로 OpenClaw 주소로 "새 문자가 왔어요!"라고 알려줘요.
마치 택배 기사가 도착하면 벨을 누르는 것처럼요. 🔔
:::

### Step 4. OpenClaw config 설정

```json
{
  "channels": {
    "twilioSms": {
      "enabled": true,
      "accountSid": "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      "authToken": "your-auth-token",
      "phoneNumber": "+12025551234",
      "dmPolicy": "allowlisted",
      "allowFrom": ["+821099999999"]
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `accountSid` → Twilio 계정 고유 번호예요.
- `authToken` → Twilio 계정 비밀번호예요. 절대 공개하지 마세요!
- `phoneNumber` → 방금 구입한 Twilio 전화번호예요.
- `allowFrom` → 메시지를 보낼 수 있는 전화번호 목록이에요. 비용 절감을 위해 꼭 설정하세요.
:::

### Step 5. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 6. 테스트

`allowFrom`에 등록한 전화번호에서 Twilio 번호로 문자를 보내보세요.

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] Twilio 계정과 Account SID, Auth Token을 확보했다
- [ ] Twilio에서 SMS 가능한 전화번호를 구입했다
- [ ] Twilio Console에 Webhook URL을 등록했다
- [ ] `openclaw.json`에 Twilio SMS 설정을 넣었다
- [ ] `allowFrom`에 테스트 전화번호를 등록했다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] 문자를 보냈을 때 자동 답장이 왔다 🎉

---

:::caution 비용 주의
Twilio SMS는 메시지 건당 요금이 발생해요 (대략 건당 $0.0075~).
`allowFrom`으로 허용 번호를 제한하지 않으면 예상치 못한 비용이 발생할 수 있어요!
:::

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Webhook](/channels/webhook) 문서도 읽어보세요 — Webhook 기반 연동의 원리를 더 깊게 이해할 수 있어요.

## 🆘 막히면 여기로

- Webhook이 동작하지 않는다면 → 서버가 외부에서 접근 가능한 HTTPS URL인지 확인하세요
- `21211 Invalid To Phone Number` 오류가 난다면 → `allowFrom` 번호 형식을 `+국가코드` 형식으로 확인하세요
- 문자를 받아도 응답이 없다면 → `openclaw gateway status`로 Gateway 상태를 먼저 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
