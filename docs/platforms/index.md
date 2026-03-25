---
title: 플랫폼 개요
sidebar_label: 플랫폼 개요
sidebar_position: 1
---

# 지원 플랫폼 (Platforms)

OpenClaw v2026.3.23은 macOS, Linux, Windows, iOS, Android를 지원합니다. 단일 Gateway가 모든 플랫폼을 연결하는 중앙 제어면 역할을 합니다.

---

## 💻 데스크탑 플랫폼

| 플랫폼 | 지원 상태 | 주요 특징 |
|--------|---------|---------|
| **macOS** | ✅ 완전 지원 | 컴패니언 앱, 메뉴바, TCC 권한, Canvas/Camera |
| **Linux** | ✅ 완전 지원 | Gateway + CLI, headless 서버 운영 최적화 |
| **Windows WSL2** | ✅ 권장 경로 | 전체 기능 안정적 지원, Linux 호환 |
| **Windows Native** | ✅ 지원됨 | core CLI/Gateway, Scheduled Task 방식 |

---

## 📱 모바일 플랫폼

| 플랫폼 | 지원 상태 | 주요 특징 |
|--------|---------|---------|
| **iOS** | ✅ node 페어링 | Canvas, Voice, Camera, Screen Recording |
| **Android** | ✅ node 페어링 | Canvas, Voice, Camera, 기기 명령 |

모바일 기기는 독립 실행이 아니라 **Gateway에 node로 페어링**하여 사용합니다.

---

## 🏗️ 아키텍처 개요

```
macOS 앱 ──────────────────────────────────────┐
iOS / Android node ────────────────────────────┤
CLI / Web Control UI ──────────────────────────┤──▶ Gateway ◀──▶ AI 제공자
채팅 앱 (Telegram, WhatsApp, Discord...) ──────┘
```

- **Gateway**: 단일 프로세스로 모든 클라이언트와 채널을 연결
- **Node**: iOS/Android/macOS 기기를 연결하여 로컬 기능(카메라, 음성 등) 활용
- **Self-hosted**: 사용자의 장치 또는 서버에서 직접 실행

---

## 🛠️ 플랫폼별 가이드

- [macOS 가이드](/platforms/macos) — 컴패니언 앱, TCC 권한, 메뉴바
- [Linux 가이드](/platforms/linux) — 서버 설정, systemd, headless 운영
- [Windows 가이드](/platforms/windows) — WSL2 권장 흐름, 네이티브 설치
- [모바일 가이드](/platforms/mobile) — iOS/Android node 페어링

---

## 🚀 공통 설치 흐름

모든 데스크탑 플랫폼에서 권장하는 기본 흐름은 동일합니다:

```bash
# 1. 설치 (플랫폼별 명령은 각 가이드 참조)
curl -fsSL https://openclaw.ai/install.sh | bash  # macOS/Linux/WSL2

# 2. 온보딩
openclaw onboard --install-daemon

# 3. 상태 확인
openclaw gateway status
```

> 플랫폼별 차이가 있는 내용(서비스 등록 방식, 권한 설정 등)은 각 가이드에서 설명합니다.
