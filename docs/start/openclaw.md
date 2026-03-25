---
title: OpenClaw란?
sidebar_label: OpenClaw란?
sidebar_position: 7
---

# OpenClaw로 개인용 어시스턴트 만들기

OpenClaw는 **자기 호스팅(self-hosted) Gateway** 기반의 AI 에이전트 플랫폼입니다. Telegram, WhatsApp, Discord 등 20개 이상의 채팅 채널과 Anthropic, OpenAI, Google 등 30개 이상의 AI 모델 제공자를 하나의 Gateway로 통합합니다.

---

## 🏗️ 아키텍처 개요

```
채팅 앱 (Telegram, WhatsApp, Slack...) ──┐
CLI / Web Control UI ──────────────────┤──▶ Gateway ◀──▶ AI 제공자
macOS 앱 ──────────────────────────────┤      │         (Anthropic, OpenAI...)
iOS / Android node ────────────────────┘      │
                                          세션·라우팅·채널 관리
```

- **Gateway**: 세션, 라우팅, 채널 연결의 단일 제어면(control plane)
- **단일 프로세스**: 채팅 앱, CLI, Web UI, macOS 앱, iOS/Android node를 모두 연결
- **Self-hosted**: 사용자의 장치 또는 서버에서 직접 실행

---

## 🚀 전용 채널로 개인 어시스턴트 구축하기

### WhatsApp 전용 번호로 설정하기

1. 전용 WhatsApp 번호 준비 (개인 번호와 분리 권장)
2. 게이트웨이에 연결:
   ```bash
   openclaw configure
   # WhatsApp 채널 선택 → QR 코드 스캔
   ```
3. 접근 제한 설정:
   ```json
   // ~/.openclaw/openclaw.json
   {
     "channels": {
       "whatsapp": {
         "allowFrom": ["+821012345678"]
       }
     }
   }
   ```
4. 게이트웨이 시작:
   ```bash
   openclaw gateway start
   ```

### Telegram Bot으로 설정하기

Telegram은 **가장 빠른 셋업 경로**입니다.

1. `@BotFather`에서 봇 토큰 발급
2. `openclaw configure` → Telegram 선택 → 토큰 입력
3. 완료 — 즉시 대화 가능

---

## 📁 에이전트 워크스페이스

OpenClaw 에이전트는 `~/.openclaw/workspace` 폴더를 작업 공간으로 사용합니다.

| 파일 | 역할 |
|------|------|
| `AGENTS.md` | 에이전트 동작 지침 |
| `SOUL.md` | 에이전트 페르소나/톤 |
| `TOOLS.md` | 환경별 도구 힌트 |

이 폴더를 git 저장소로 관리하면 버전 이력과 백업이 편리합니다.

```bash
cd ~/.openclaw/workspace
git init
git add .
git commit -m "initial workspace"
```

---

## ⏰ 하트비트 (Heartbeats)

에이전트는 설정된 간격마다 자동으로 체크인하여 `HEARTBEAT.md`에 정의된 작업을 수행합니다.

```bash
# 하트비트 확인
openclaw status
```

기본 간격은 설정에서 조정하거나 비활성화할 수 있습니다.

---

## 🔒 보안 권장 사항

- `channels.{channel}.allowFrom`으로 특정 사용자만 접근 허용
- 전용 채널 계정(전용 WhatsApp 번호, 전용 Telegram Bot) 사용
- 외부 노출이 필요한 경우 Tailscale 또는 Cloudflare Tunnel 활용
- 정기적으로 `openclaw doctor`로 설정 상태 점검

---

> 관련 가이드: [채널 페어링](/start/pairing) | [플랫폼 설정](/platforms/) | [활용 사례](/start/use-cases)
