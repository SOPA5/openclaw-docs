---
title: 설정 마법사
sidebar_label: 설정 마법사
sidebar_position: 3
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 입문 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `start/getting-started` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 온보딩 마법사 (CLI)

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🚀 실행 방법
- ⚙️ 마법사가 설정하는 항목
- 🔄 개별 재설정

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


온보딩 마법사는 macOS, Linux, Windows(WSL2) 환경에서 OpenClaw를 설정하는 **권장 방법**입니다. 대화형 프롬프트를 통해 모델, 채널, 데몬까지 한 번에 구성합니다.

---


:::tip 💡 쉽게 이해하기
**OAuth**는 비밀번호를 직접 넘기지 않고도 다른 서비스의 권한만 빌려오는 로그인 방식이에요. "열쇠 전체" 대신 "잠깐 쓰는 출입권"을 주는 느낌입니다.
:::

## 🚀 실행 방법

아래 명령어를 터미널에 입력하세요:
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

아래 명령어를 터미널에 입력하세요:
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

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway status
openclaw dashboard
```

> 관련 가이드: [채널 페어링](/start/pairing) | [플랫폼별 설정](/platforms/)

## 🎯 다음 단계

- 다음으로 [채널 페어링](/start/pairing) 문서를 읽어보세요.
- 다음으로 [플랫폼별 설정](/platforms/) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
