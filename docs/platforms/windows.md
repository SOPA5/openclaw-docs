---
title: Windows
sidebar_label: Windows
sidebar_position: 4
---

# Windows 가이드

OpenClaw는 Windows에서 두 가지 경로를 지원합니다. **WSL2가 더 안정적인 전체 경험**을 제공하므로 권장합니다. Windows 네이티브 경로도 지원되지만 일부 기능에 제한이 있을 수 있습니다.

> ⚠️ Windows 네이티브 컴패니언 앱은 아직 계획 단계입니다.

---

## 경로 선택

| 경로 | 안정성 | 권장 대상 |
|------|--------|---------|
| **Windows WSL2** | ✅ 권장 | 개발자, 전체 기능이 필요한 경우 |
| **Windows 네이티브** | ⚠️ 기본 지원 | WSL2 사용이 어려운 환경 |

---

## WSL2 경로 (권장)

### 사전 준비: WSL2 설치

```powershell
# PowerShell (관리자)
wsl --install
# 재부팅 후 Ubuntu 배포판 선택
```

### WSL2에서 OpenClaw 설치

WSL2 터미널(Ubuntu)에서 Linux와 동일한 방법으로 설치합니다:

```bash
# WSL2 터미널에서 실행
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

### WSL2 서비스 관리

```bash
# systemd 상태 확인
openclaw gateway status

# 서비스 재시작
openclaw gateway restart
```

> WSL2에서의 상세 Linux 설정 → [Linux 가이드](/platforms/linux)

---

## Windows 네이티브 경로

### 설치 방법

**PowerShell 스크립트 사용:**

```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

**npm 직접 설치:**

```powershell
npm install -g openclaw@latest
openclaw onboard --install-daemon
```

### Windows 서비스 등록

Windows 네이티브에서 Gateway는 **Windows Scheduled Task**로 등록됩니다. 실패 시 시작 폴더(Startup Folder) 방식으로 폴백합니다.

```powershell
# 서비스 상태 확인
openclaw gateway status

# 서비스 재설치
openclaw gateway install
```

---

## Windows 네이티브 전용 설정

### PowerShell 환경 변수

설치 스크립트가 PowerShell 프로파일에 환경 변수를 자동으로 추가합니다. 수동으로 추가하려면:

```powershell
$env:PATH += ";$env:APPDATA\npm"
```

### Windows 경로 매핑

에이전트가 `C:\Users\...` (Windows 경로)와 `/mnt/c/Users/...` (WSL2 경로)를 올바르게 인식하도록 내부 매핑이 포함되어 있습니다.

### 방화벽 설정

외부 기기(모바일 앱 등)와 통신하려면 18789 포트 허용이 필요합니다:

1. `제어판 > 시스템 및 보안 > Windows Defender 방화벽 > 고급 설정`
2. **인바운드 규칙 > 새 규칙** 추가
3. 포트: `18789`, 프로토콜: TCP

또는 PowerShell로:

```powershell
New-NetFirewallRule -DisplayName "OpenClaw Gateway" -Direction Inbound -Protocol TCP -LocalPort 18789 -Action Allow
```

---

## 🩺 공통 문제 해결

```bash
# 진단 (WSL2 터미널 또는 PowerShell)
openclaw doctor
```

| 증상 | 해결 방법 |
|------|---------|
| Node.js 버전 오류 | Node 22.16+ 설치 필요 (Node 24 권장) |
| 포트 충돌 | `openclaw configure`에서 포트 변경 |
| WSL2 네트워크 이슈 | WSL2 IP 확인: `ip addr show eth0` |

> 관련 가이드: [플랫폼 개요](/platforms/) | [Linux 가이드](/platforms/linux) | [설치 개요](/install/)
