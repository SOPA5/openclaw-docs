<!-- source: https://openclaw-wheat.vercel.app/gateway/remote -->

-  (/)

- 게이트웨이 (Gateway)

- 원격 접속 및 접근 관리

# 원격 접속 및 접근 관리

집이나 사무실의 워크스테이션에서 실행 중인 OpenClaw 게이트웨이를 외부(모바일, 출장용 노트북 등)에서도 안전하게 사용할 수 있게 해주는 가이드입니다.

## 🏗️ 연결 개념​ (#️-연결-개념)

- Server (Gateway): 여러분의 메인 PC나 서버에 설치되어 24시간 도는 에이전트 본체입니다.

- Client: 게이트웨이에 접속하여 에이전트와 대화하는 기기입니다.

---

## 📡 주요 연결 방식​ (#-주요-연결-방식)

### 1. SSH 터널링 (가장 범용적인 방식)​ (#1-ssh-터널링-가장-범용적인-방식)

방화벽 뒤에 있는 서버에 접근할 때 가장 안전하고 표준적인 방법입니다.

- 포트 포워딩: 로컬의 `18789` 포트를 원격 서버로 터널링합니다.

### 2. Tailscale (강력 추천)​ (#2-tailscale-강력-추천)

복잡한 설정 없이 모든 기기를 하나의 가상 개인 네트워크(VPN)로 묶어줍니다.

- 서버와 클라이언트에 각각 Tailscale을 설치합니다.

- 서버에 배정된 "MagicDNS" 주소나 IP를 통해 안전하게 게이트웨이에 접근합니다.

### 3. Cloudflare Tunnel​ (#3-cloudflare-tunnel)

고정 IP가 없거나 도메인을 통해 접근하고 싶을 때 유용합니다.

- 로컬 `18789` 포트를 HTTPS URL(예: `https://agent.yourdomain.com`)로 노출합니다.

## 🔒 보안 설정​ (#-보안-설정)

원격 접속을 허용할 때는 반드시 **인증 토큰(Auth Token)**을 설정해야 합니다.

```
openclaw configure set gateway.token "여러분의_강력한_비밀번호"

```

## 📱 앱 연동 (Client Setup)​ (#-앱-연동-client-setup)

모바일 앱이나 외부 도구에서 `Gateway URL`과 `Auth Token`을 입력하면 즉시 개인 비서와 대화를 이어갈 수 있습니다.

게이트웨이 및 운영 (Gateway & Ops)
(/gateway/)다음
보안 감사 및 강화 (Security)
(/gateway/security)

- 🏗️ 연결 개념 (#️-연결-개념)

- 📡 주요 연결 방식 (#-주요-연결-방식)
- 1. SSH 터널링 (가장 범용적인 방식) (#1-ssh-터널링-가장-범용적인-방식)

- 2. Tailscale (강력 추천) (#2-tailscale-강력-추천)

- 3. Cloudflare Tunnel (#3-cloudflare-tunnel)

- 🔒 보안 설정 (#-보안-설정)

- 📱 앱 연동 (Client Setup) (#-앱-연동-client-setup)

Docs

- 시작하기 (/start/getting-started)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)

More

- GitHub (https://github.com/openclaw/openclaw)

Copyright © 2026 OpenClaw. Built with Docusaurus.

제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
