---
title: 플랫폼 개요
sidebar_label: 플랫폼 개요
sidebar_position: 1
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

# 지원 플랫폼 (Platforms)

이 문서에서는 운영체제별로 OpenClaw를 사용하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 💻 데스크탑 플랫폼
- 📱 모바일 플랫폼
- 🏗️ 아키텍처 개요

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw v2026.3.23은 macOS, Linux, Windows, iOS, Android를 지원합니다. 단일 Gateway가 모든 플랫폼을 연결하는 중앙 제어면 역할을 합니다.

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 💻 데스크탑 플랫폼

| 플랫폼 | 지원 상태 | 주요 특징 |
|--------|---------|---------|
| **macOS** | ✅ 완전 지원 | 컴패니언 앱, 메뉴바, TCC 권한, Canvas/Camera |
| **Linux** | ✅ 완전 지원 | Gateway (중앙 통로) + CLI, headless 서버 운영 최적화 |
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

아래 예시를 참고하세요:
```
macOS 앱 ──────────────────────────────────────┐
iOS / Android node ────────────────────────────┤
CLI / Web Control UI ──────────────────────────┤──▶ Gateway ◀──▶ AI 제공자
채팅 앱 (Telegram, WhatsApp, Discord...) ──────┘
```

- **Gateway (중앙 통로)**: 단일 프로세스로 모든 클라이언트와 채널을 연결
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

아래 명령어를 터미널에 입력하세요:
```bash
# 1. 설치 (플랫폼별 명령은 각 가이드 참조)
curl -fsSL https://openclaw.ai/install.sh | bash  # macOS/Linux/WSL2

# 2. 온보딩
openclaw onboard --install-daemon

# 3. 상태 확인
openclaw gateway status
```

> 플랫폼별 차이가 있는 내용(서비스 등록 방식, 권한 설정 등)은 각 가이드에서 설명합니다.

## 🎯 다음 단계

- 다음으로 [macOS 가이드](/platforms/macos) 문서를 읽어보세요.
- 다음으로 [Linux 가이드](/platforms/linux) 문서를 읽어보세요.
- 다음으로 [Windows 가이드](/platforms/windows) 문서를 읽어보세요.
