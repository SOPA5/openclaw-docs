---
title: Signal
sidebar_label: Signal
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | Signal 메신저를 OpenClaw에 연결해 보안 메시지를 주고받기 |
| 추천 환경 | 개인 보안이 중요한 환경, 조직 내부 비공개 채널 |
| 현재 위치 | `channels/signal` |

:::tip 학습 팁
Signal은 보안이 아주 중요한 채널이에요. 설정이 조금 복잡하지만, 이 문서를 순서대로 따라가면 충분히 연결할 수 있어요!
:::

# Signal

## 📌 이 문서에서 배우는 것
- Signal 채널이 왜 필요한지
- Signal CLI를 준비하는 방법
- OpenClaw와 연결하는 방법
- 성공 확인하는 방법

---

:::tip 💡 Signal이 뭔가요?
Signal은 **암호화(Encryption)**로 유명한 메신저예요. 메시지를 보낼 때 보내는 사람과 받는 사람만 볼 수 있게 잠가둡니다.
카카오톡처럼 채팅하지만, **중간에 누군가 몰래 볼 수 없게** 설계된 가장 안전한 메신저 중 하나예요. 🔐
:::

## 언제 쓰면 좋은가

- 메시지 보안이 최우선인 개인/팀 환경
- 외부에 노출되면 안 되는 민감한 자동화 알림
- 기업 내부 보안 채널 구축 시

---

## 🚀 설정 방법

### Step 1. signal-cli 설치

Signal은 공식 API를 직접 제공하지 않아서, `signal-cli`라는 도구를 먼저 설치해야 해요.

```bash
# Java가 필요합니다 (Java 17 이상)
java -version

# signal-cli 다운로드 (최신 버전 확인: https://github.com/AsamK/signal-cli)
wget https://github.com/AsamK/signal-cli/releases/download/v0.13.0/signal-cli-0.13.0.tar.gz
tar -xzf signal-cli-0.13.0.tar.gz
sudo mv signal-cli-0.13.0 /opt/signal-cli
```

### Step 2. 전화번호 등록

Signal은 전화번호 기반으로 작동해요. 봇 전용 전화번호(예: 가상 번호)를 준비하세요.

```bash
# SMS 인증으로 번호 등록
/opt/signal-cli/bin/signal-cli -u +821012345678 register

# SMS로 받은 인증 코드 입력
/opt/signal-cli/bin/signal-cli -u +821012345678 verify 123456
```

### Step 3. OpenClaw config 설정

```json
{
  "channels": {
    "signal": {
      "enabled": true,
      "phoneNumber": "+821012345678",
      "signalCliPath": "/opt/signal-cli/bin/signal-cli",
      "dmPolicy": "allowlisted",
      "allowFrom": ["+821099999999"]
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `phoneNumber` → 봇으로 쓸 Signal 번호예요.
- `signalCliPath` → 방금 설치한 signal-cli 프로그램 위치예요.
- `dmPolicy: allowlisted` → 허용 목록에 있는 번호만 메시지를 보낼 수 있어요. 보안을 위해 꼭 설정하세요!
- `allowFrom` → 허용할 전화번호 목록이에요.
:::

### Step 4. Gateway 시작

```bash
openclaw gateway start
openclaw gateway status
```

### Step 5. 연결 테스트

Signal 앱에서 등록한 번호로 메시지를 보내보세요.

---

### ✅ 성공 확인 박스

아래 항목을 하나씩 체크하세요:

- [ ] Java 17 이상이 설치되어 있다
- [ ] signal-cli가 `/opt/signal-cli`에 정상 설치됐다
- [ ] 전화번호 등록 및 SMS 인증이 완료됐다
- [ ] `openclaw.json`에 Signal 설정을 넣었다
- [ ] `openclaw gateway start`가 오류 없이 실행됐다
- [ ] Signal 앱에서 메시지를 보냈을 때 답장이 왔다 🎉

---

## 🎯 다음 단계

- [채널 개요](/channels/)로 돌아가서 다른 채널도 살펴보세요.
- [보안 설정](/gateway/security)으로 더 안전하게 운영하세요.

## 🆘 막히면 여기로

- signal-cli 설치가 안 된다면 → Java 버전을 먼저 확인하세요 (`java -version`)
- 메시지가 전달이 안 된다면 → `openclaw gateway status`로 게이트웨이 상태를 확인하세요
- 인증 코드가 안 온다면 → 가상 번호가 SMS를 받을 수 있는지 확인하세요
- [FAQ](/help/faq) 문서도 함께 확인해보세요
