---
title: 온보딩
sidebar_label: 온보딩
sidebar_position: 4
---

# 온보딩 (macOS 앱)

이 문서에서는 OpenClaw를 처음 시작할 때 필요한 핵심 흐름을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🍎 macOS 앱 온보딩 단계
- 1단계. macOS 보안 경고 승인
- 2단계. 로컬 vs 원격 선택

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


macOS 컴패니언 앱을 통한 온보딩 가이드입니다. CLI 온보딩 대신 GUI 기반으로 OpenClaw를 설정하고 싶은 macOS 사용자에게 적합합니다.

> CLI 방식을 선호한다면 → [설정 마법사](/start/wizard)

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 🍎 macOS 앱 온보딩 단계

이제 차근차근 진행해보겠습니다.
### 1단계. macOS 보안 경고 승인

처음 실행 시 Apple의 Gatekeeper 보안 경고가 나타납니다.

- `시스템 환경설정 > 개인정보 보호 및 보안`에서 앱 실행을 허용합니다.
- 또는 터미널에서 다음 명령어로 우회할 수 있습니다:
  ```bash
  xattr -dr com.apple.quarantine /Applications/OpenClaw.app
  ```

### 2단계. 로컬 vs 원격 선택

게이트웨이를 **이 Mac**에서 실행할지, 아니면 **원격 서버**에서 실행할지 선택합니다.

- **로컬 모드**: 현재 Mac에서 Gateway를 직접 실행합니다.
- **원격 모드**: 별도 서버에서 실행 중인 Gateway에 연결합니다. (서버 URL 입력 필요)

### 3단계. 권한 설정 (TCC)

에이전트가 Mac을 대신하여 작동하려면 다음 권한이 필요합니다. 각 권한 요청 시 허용을 선택하세요.

| 권한 | 용도 |
|------|------|
| 자동화(Automation) | 앱 제어 및 스크립트 실행 |
| 손쉬운 사용(Accessibility) | 마우스 클릭, 키보드 입력 |
| 화면 기록(Screen Recording) | 브라우저/화면 상태 인식 |
| 마이크(Microphone) | 음성 입력 및 TTS |
| 알림(Notifications) | 에이전트 완료 알림 |

### 4단계. CLI 설치 (선택)

macOS 앱에서 npm 또는 pnpm을 통해 글로벌 CLI를 함께 설치할 수 있습니다.

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
```

### 5단계. 온보딩 채팅 시작

설정이 완료되면 에이전트가 자신을 소개하고 다음 단계를 안내하는 전용 온보딩 세션이 시작됩니다.

---

## 📋 앱 설치 방법

### DMG 파일 사용

공식 사이트에서 `.dmg` 파일을 내려받아 `Applications` 폴더로 드래그합니다.

### Homebrew 사용

아래 명령어를 터미널에 입력하세요:
```bash
brew install --cask openclaw
```

---

## 🔄 설정 변경

온보딩 완료 후 설정을 변경하려면:

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure
```

> 관련 가이드: [macOS 상세 설정](/platforms/macos) | [채널 페어링](/start/pairing)

## 🎯 다음 단계

- 다음으로 [설정 마법사](/start/wizard) 문서를 읽어보세요.
- 다음으로 [macOS 상세 설정](/platforms/macos) 문서를 읽어보세요.
- 다음으로 [채널 페어링](/start/pairing) 문서를 읽어보세요.
