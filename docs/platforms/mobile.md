---
title: 모바일
sidebar_label: 모바일
sidebar_position: 5
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 환경 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `platforms/index` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 모바일(Mobile) 가이드

이 문서에서는 운영체제별로 OpenClaw를 사용하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 📱 지원 현황
- 🔗 node 페어링 방법
- 사전 조건

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


iOS와 Android 기기를 OpenClaw **node**로 페어링하면 기기의 카메라, 마이크, 화면 등 하드웨어 기능을 에이전트에서 직접 활용할 수 있습니다.

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 📱 지원 현황

| 플랫폼 | 지원 방식 | 주요 기능 |
|--------|---------|---------|
| **iOS** | node로 페어링 | Canvas, Voice (Wake/Talk Mode), Camera, Screen Recording |
| **Android** | node로 페어링 | Canvas, Voice, Camera, 기기 명령 (device commands) |

> 모바일 기기는 Gateway를 직접 실행하지 않습니다. 기존 Gateway(데스크탑/서버)에 **node로 페어링**하여 기기 기능을 확장하는 방식입니다.

---

## 🔗 node 페어링 방법

### 사전 조건

- 데스크탑 또는 서버에 OpenClaw Gateway가 실행 중이어야 합니다.
- 모바일 기기와 Gateway가 동일 네트워크에 있거나, Tailscale/Cloudflare Tunnel로 원격 접속이 가능해야 합니다.

### 페어링 단계

1. Gateway에서 node 페어링 코드 생성:
   ```bash
   openclaw nodes pair
   ```

2. 모바일 앱에서 QR 코드 또는 페어링 코드 입력

3. 페어링 완료 후 node 목록 확인:
   ```bash
   openclaw nodes list
   ```

---

## 🍎 iOS

iOS 기기를 node로 페어링하면 다음 기능을 에이전트에서 활용할 수 있습니다.

| 기능 | 설명 |
|------|------|
| **Canvas** | 에이전트가 iOS 화면에 UI를 렌더링 |
| **Voice Wake Mode** | 웨이크워드로 에이전트 호출 |
| **Talk Mode** | 음성 대화 모드 |
| **Camera** | 카메라로 이미지 캡처 후 에이전트에 전달 |
| **Screen Recording** | 화면 공유를 통한 컨텍스트 제공 |

---

## 🤖 Android

Android 기기를 node로 페어링하면 다음 기능을 활용할 수 있습니다.

| 기능 | 설명 |
|------|------|
| **Canvas** | 에이전트가 Android 화면에 UI를 렌더링 |
| **Voice** | 음성 명령 및 TTS 응답 |
| **Camera** | 카메라 이미지 캡처 |
| **Device Commands** | 기기 설정 변경, 앱 제어 등 |

---

## 🌐 원격 접속 설정

외부 네트워크에서 모바일로 안전하게 Gateway에 접속하려면:

### Tailscale (권장)

아래 명령어를 터미널에 입력하세요:
```bash
# Gateway 서버에 Tailscale 설치
curl -fsSL https://tailscale.com/install.sh | sh
sudo tailscale up

# openclaw.json에서 Tailscale 주소로 바인드
```

복잡한 네트워크 설정 없이 개인 VPN망으로 안전하게 연결됩니다.

### Cloudflare Tunnel

도메인을 통한 HTTPS 보안 접속:

아래 명령어를 터미널에 입력하세요:
```bash
cloudflared tunnel --url http://localhost:18789
```

---

## 🔔 모바일 채팅 채널 연결

모바일에서 에이전트와 소통하는 가장 간편한 방법은 **기존 메신저 앱을 채팅 채널로 연결**하는 것입니다.

- **Telegram**: 가장 빠른 셋업 — Telegram 앱에서 봇과 대화
- **WhatsApp**: QR 코드 페어링 — 기존 WhatsApp 앱 사용
- **Discord**: 모바일 Discord 앱에서 봇과 대화

별도 앱 설치 없이 익숙한 메신저로 에이전트에 접근할 수 있습니다.

> 채팅 채널 설정 방법 → [채널 페어링](/start/pairing)

---

## 🌍 Web Control UI (브라우저 접속)

모바일 브라우저에서 Gateway (중앙 통로) Web UI에 접속하여 에이전트를 제어할 수 있습니다.

아래 예시를 참고하세요:
```
http://{gateway-주소}:18789/
```

Safari 또는 Chrome에서 홈 화면에 추가하면 앱처럼 사용할 수 있습니다 (PWA 방식).

---

> 관련 가이드: [플랫폼 개요](/platforms/) | [채널 페어링](/start/pairing) | [시작하기](/start/getting-started)

## 🎯 다음 단계

- 다음으로 [채널 페어링](/start/pairing) 문서를 읽어보세요.
- 다음으로 [플랫폼 개요](/platforms/) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
