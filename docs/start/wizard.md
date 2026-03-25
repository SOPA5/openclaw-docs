---
title: 설정 마법사
sidebar_label: 설정 마법사
sidebar_position: 3
---

# 온보딩 마법사 (CLI)

온보딩 마법사는 macOS, Linux, Windows(WSL2) 환경에서 OpenClaw를 설정하는 **권장 방법**입니다. 대화형 프롬프트를 통해 모델, 채널, 데몬까지 한 번에 구성합니다.

---

## 🚀 실행 방법

```bash
openclaw onboard --install-daemon
```

> `--install-daemon` 옵션을 함께 사용하면 macOS LaunchAgent 또는 Linux systemd 서비스가 자동으로 등록됩니다.

---

## ⚙️ 마법사가 설정하는 항목

| 단계 | 내용 |
|------|------|
| **모델 / 인증** | Anthropic API 키, OAuth, OpenAI, Google Gemini 등 30개 이상의 제공자 중 선택 |
| **워크스페이스** | 에이전트 파일 위치 설정 (기본값: `~/.openclaw/workspace`) |
| **게이트웨이** | 포트(기본 18789), 바인드 주소, 인증 모드, Tailscale 노출 여부 |
| **채널** | Telegram, Discord, Slack, WhatsApp 등 20개 이상의 채널 중 선택 및 구성 |
| **데몬 서비스** | macOS LaunchAgent 또는 Linux systemd 자동 설치 |
| **스킬** | 권장 스킬 및 의존성 설치 |

---

## 🔄 개별 재설정

마법사를 전부 다시 실행하지 않고 특정 항목만 변경하려면:

```bash
# 채널만 재설정
openclaw configure

# 게이트웨이 서비스만 재설치
openclaw gateway install

# 진단 및 복구
openclaw doctor
```

---

## 📋 완료 후 확인

```bash
openclaw gateway status
openclaw dashboard
```

> 관련 가이드: [채널 페어링](/start/pairing) | [플랫폼별 설정](/platforms/)
