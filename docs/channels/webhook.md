---
title: Webhook (범용)
sidebar_label: Webhook
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 모든 외부 서비스와 Webhook으로 OpenClaw 연결하기 |
| 추천 환경 | 전용 채널이 없는 서비스 연동, 커스텀 자동화 워크플로우 |
| 현재 위치 | `channels/webhook` |

:::tip 학습 팁
Webhook은 채널 이름이 아니라 **연결 방법**의 이름이에요. 공식 채널이 없는 서비스도 Webhook으로 연결할 수 있어요!
:::

# Webhook (범용)

## 📌 이 문서에서 배우는 것
- Webhook이 무엇이고 언제 쓰는지
- Incoming Webhook과 Outgoing Webhook 차이
- OpenClaw Webhook 설정하기
- 성공 확인하는 방법

---

:::tip 💡 Webhook이 뭔가요?
Webhook은 **"이 URL로 알림을 보내줘"** 라고 서비스들끼리 약속하는 방식이에요.

예를 들면:
- GitHub에서 코드가 변경됐을 때 → OpenClaw에 자동으로 알림
- 결제가 완료됐을 때 → OpenClaw에서 자동 확인 메시지 발송
- 새 주문이 들어왔을 때 → OpenClaw에서 담당자에게 알림

마치 택배가 도착하면 문자로 알려주는 것처럼, 뭔가 일이 생기면 **즉시 연락해주는 자동 알림 시스템**이에요! 📬
:::

## 언제 쓰면 좋은가

- 공식 OpenClaw 채널이 없는 서비스 연동 (예: 쇼핑몰, 결제, 모니터링 도구)
- n8n, Zapier, Make 같은 자동화 도구와 연결
- GitHub, GitLab, CI/CD 파이프라인 이벤트 수신
- 커스텀 애플리케이션에서 OpenClaw로 이벤트 전달

---

## 🔄 두 가지 Webhook 방향

### Incoming Webhook (받기)
외부 서비스 → OpenClaw로 데이터가 들어오는 방향

### Outgoing Webhook (보내기)
OpenClaw → 외부 서비스로 데이터를 보내는 방향

대부분의 경우 두 가지를 함께 써요. OpenClaw가 외부 이벤트를 받고(Incoming), 처리 결과를 다시 돌려보내는(Outgoing) 방식이에요.

---

## 🚀 설정 방법

### Step 1. Incoming Webhook 설정

OpenClaw가 외부 서비스의 데이터를 받을 수 있는 URL을 설정해요.

```json
{
  "channels": {
    "webhook": {
      "enabled": true,
      "incoming": {
        "enabled": true,
        "path": "/webhooks/incoming",
        "secret": "your-webhook-secret-key",
        "allowedIPs": [],
        "verifySignature": true
      },
      "outgoing": {
        "enabled": true,
        "defaultUrl": "https://hooks.external-service.com/xxxxx",
        "retryCount": 3,
        "timeoutMs": 5000
      }
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `incoming.path` → 외부 서비스가 데이터를 보낼 URL 경로예요. 최종 URL은 `https://your-server.com/webhooks/incoming`이 돼요.
- `incoming.secret` → 외부 서비스가 보낸 데이터가 진짜인지 확인하는 비밀 키예요.
- `incoming.verifySignature` → 가짜 요청을 걸러내는 보안 기능이에요.
- `outgoing.defaultUrl` → OpenClaw가 결과를 보낼 기본 주소예요.
- `outgoing.retryCount` → 전송 실패 시 재시도 횟수예요.
:::

### Step 2. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status --show-webhooks
```

`--show-webhooks` 옵션을 쓰면 외부 서비스에 등록할 Webhook URL을 바로 확인할 수 있어요.

### Step 3. 외부 서비스에 Webhook URL 등록

예: GitHub 저장소에 등록하는 경우

1. GitHub 저장소 → **Settings** → **Webhooks** → **Add webhook**
2. **Payload URL**: `https://your-server.com/webhooks/incoming`
3. **Content type**: `application/json`
4. **Secret**: `your-webhook-secret-key` (config와 동일하게)
5. 받을 이벤트 선택 (예: Push, Pull Request)
6. **Add webhook** 클릭

:::tip 🔒 Secret은 왜 필요한가요?
Secret이 없으면 누구나 위조된 Webhook을 보낼 수 있어요.
Secret을 설정하면 GitHub은 메시지에 서명(Signature)을 붙여요. OpenClaw는 그 서명이 맞는지 확인하고, 맞지 않으면 무시해요.
자물쇠와 열쇠처럼요! 🔑
:::

### Step 4. 테스트

```bash
# curl로 Incoming Webhook 테스트
curl -X POST https://your-server.com/webhooks/incoming \
  -H "Content-Type: application/json" \
  -d '{"event": "test", "message": "Hello, OpenClaw!"}'
```

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] `openclaw.json`에 Webhook 설정을 넣었다
- [ ] `secret` 값을 설정했다 (보안을 위해 필수!)
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] `--show-webhooks`로 Webhook URL을 확인했다
- [ ] 외부 서비스에 Webhook URL을 등록했다
- [ ] `curl` 테스트 또는 외부 서비스 이벤트로 연결을 확인했다 🎉

---

## 📋 Webhook 활용 예시

| 활용 사례 | Incoming 이벤트 | OpenClaw 동작 |
|---|---|---|
| GitHub PR 알림 | PR 생성/머지 이벤트 | 팀 채널에 알림 발송 |
| 결제 완료 알림 | 결제 성공 이벤트 | 확인 문자 자동 발송 |
| 서버 모니터링 | 장애 감지 이벤트 | 담당자에게 즉시 알림 |
| n8n 워크플로우 | n8n Webhook 노드 | AI 분석 후 결과 반환 |

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [Twilio SMS](/channels/twilio-sms) 문서도 읽어보세요 — Webhook을 활용하는 채널의 실제 예시예요.

## 🆘 막히면 여기로

- Webhook을 받지 못한다면 → 서버가 외부에서 접근 가능한 HTTPS URL인지 확인하세요
- `401 Unauthorized` 오류가 난다면 → `secret` 값이 외부 서비스와 동일한지 확인하세요
- 서명 검증 오류가 난다면 → `verifySignature: false`로 임시 비활성화 후 테스트하세요 (운영에선 다시 활성화!)
- [FAQ](/help/faq) 문서도 함께 확인해보세요
