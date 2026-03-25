<!-- source: https://openclaw-wheat.vercel.app/platforms/windows -->

-  (/)

- 플랫폼 (Platforms)

- Windows 설치 및 설정

# Windows 설치 및 설정

Windows 환경에서 OpenClaw를 사용하는 가장 좋은 방법은 네이티브 실행 파일을 사용하거나 WSL2(Windows Subsystem for Linux)와 함께 사용하는 것입니다.

## 🚀 설치 방법​ (#-설치-방법)

### 1. 네이티브 설치 (`.exe`)​ (#1-네이티브-설치-exe)

공식 설치 파일(installer)을 내려받아 실행합니다. 윈도우의 기본 보안 경고가 나타날 경우 '추가 정보'를 눌러 '실행'을 선택하세요.

### 2. WSL2 사용 (개발자 추천)​ (#2-wsl2-사용-개발자-추천)

Linux와 동일한 개발 환경을 선호한다면 WSL2 내부에서 설치 스크립트를 실행하는 것이 좋습니다.

```
curl -fsSL https://openclaw.ai/install.sh | bash

```

---

## 🛠️ Windows 전용 가이드​ (#️-windows-전용-가이드)

### PowerShell 연동​ (#powershell-연동)

Windows 터미널(PowerShell)에서 OpenClaw 명령어를 자유롭게 활용할 수 있도록 환경 변수가 자동으로 추가됩니다.

### 경로 인식 문제​ (#경로-인식-문제)

에이전트가 `C:\Users\...` 와 같은 Windows 경로와 `/mnt/c/Users/...` 와 같은 WSL2 경로를 올바르게 인식하도록 매핑 정보가 포함되어 있습니다.

## 🔒 방화벽 설정​ (#-방화벽-설정)

게이트웨이가 외부 기기(모바일 앱 등)와 통신하려면 Windows Defender 방화벽에서 18789 포트 허용이 필요할 수 있습니다.

- `제어판 > 시스템 및 보안 > Windows Defender 방화벽 > 고급 설정`에서 인바운드 규칙을 추가하세요.

Linux 설치 및 설정
(/platforms/linux)다음
모바일(Mobile) 사용 가이드
(/platforms/mobile)

- 🚀 설치 방법 (#-설치-방법)
- 1. 네이티브 설치 (`.exe`) (#1-네이티브-설치-exe)

- 2. WSL2 사용 (개발자 추천) (#2-wsl2-사용-개발자-추천)

- 🛠️ Windows 전용 가이드 (#️-windows-전용-가이드)
- PowerShell 연동 (#powershell-연동)

- 경로 인식 문제 (#경로-인식-문제)

- 🔒 방화벽 설정 (#-방화벽-설정)

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
