---
title: macOS
sidebar_label: macOS
sidebar_position: 2
---

# macOS 가이드

OpenClaw는 macOS 환경에서 공식 컴패니언 앱과 CLI를 모두 제공합니다. Apple Silicon(M1/M2/M3/M4)과 Intel Mac을 모두 네이티브로 지원합니다.

---

## 🚀 설치 방법

### 방법 1. 설치 스크립트 (CLI 기반 — 권장)

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

`--install-daemon` 옵션으로 **macOS LaunchAgent**가 자동 등록되어 로그인 시 Gateway가 자동 시작됩니다.

### 방법 2. macOS 컴패니언 앱

DMG 파일을 내려받아 `Applications` 폴더로 드래그합니다. 또는 Homebrew로 설치:

```bash
brew install --cask openclaw
```

앱 실행 후 온보딩 화면이 표시됩니다. → [macOS 앱 온보딩 가이드](/start/onboarding)

### 방법 3. npm 직접 설치

```bash
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

---

## 🔒 필수 권한 설정 (TCC)

에이전트가 macOS를 대신하여 작동하려면 `시스템 환경설정 > 개인정보 보호 및 보안`에서 다음 권한을 허용해야 합니다.

| 권한 | 용도 | 필수 여부 |
|------|------|---------|
| **자동화(Automation)** | 앱 제어 및 스크립트 실행 | 필수 |
| **손쉬운 사용(Accessibility)** | 마우스 클릭, 키보드 입력 | 필수 |
| **화면 기록(Screen Recording)** | 브라우저/화면 상태 인식 | 브라우저 자동화 시 필요 |
| **마이크(Microphone)** | 음성 입력, TTS | 음성 기능 사용 시 필요 |
| **알림(Notifications)** | 에이전트 완료 알림 | 선택 |
| **카메라(Camera)** | node 카메라 기능 | node 기능 사용 시 필요 |

### 권한 일괄 설정 방법

```bash
# 터미널 전체 디스크 접근 권한 확인
open "x-apple.systempreferences:com.apple.preference.security?Privacy_Accessibility"
```

---

## 🖥️ Gateway 서비스 관리

macOS에서 Gateway는 **LaunchAgent**로 등록되어 로그인 시 자동 시작됩니다.

```bash
# 상태 확인
openclaw gateway status

# 재시작
openclaw gateway restart

# 중지
openclaw gateway stop

# 시작
openclaw gateway start
```

### LaunchAgent 위치

```
~/Library/LaunchAgents/ai.openclaw.gateway.plist
```

---

## 🍎 macOS 전용 기능

- **메뉴바 아이콘**: 백그라운드 실행 상태 확인 및 빠른 설정
- **Canvas**: node 연결 시 화면/카메라 공유
- **local / remote 모드**: 현재 Mac 또는 원격 서버에서 Gateway 실행 선택
- **system.run**: macOS 시스템 수준 명령 실행

---

## 📂 로그 위치

```
~/Library/Logs/OpenClaw/
```

로그 실시간 확인:

```bash
tail -f ~/Library/Logs/OpenClaw/gateway.log
```

---

## 🩺 문제 해결

```bash
# 전반적인 진단
openclaw doctor

# 권한 문제 확인 시 재설정
openclaw onboard --install-daemon
```

> 관련 가이드: [플랫폼 개요](/platforms/) | [온보딩(macOS 앱)](/start/onboarding)
