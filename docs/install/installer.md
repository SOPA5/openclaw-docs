---
title: 인스톨러
sidebar_label: 인스톨러
sidebar_position: 2
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 설치 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `install/installer` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 설치 스크립트 (Installer Internals)

이 문서에서는 OpenClaw를 설치하고 준비하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 🛠️ 제공되는 스크립트
- `install.sh` — macOS / Linux / Windows WSL2
- `install.ps1` — Windows PowerShell (네이티브)

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw는 복잡한 설치 과정을 자동화하기 위해 플랫폼별 셸 스크립트를 제공합니다. 각 스크립트의 작동 방식, 옵션, 환경 변수를 설명합니다.

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 🚀 공식 권장 설치 방법

### npm 직접 설치 (1순위 — 공식 기본)

Node.js가 설치된 모든 환경에서 사용 가능한 공식 권장 방법입니다.

```bash
npm install -g openclaw@latest
```

---

## 🛠️ 제공되는 설치 스크립트 (2순위)

### `install.sh` — macOS / Linux / Windows WSL2

공식 설치 스크립트가 제공되는 경우, 시스템 환경을 자동 감지하고 필요한 구성 요소를 설치합니다.

:::tip 💡 언제 스크립트를 쓰나요?
`install.sh`는 Node.js, Git 같은 기본 도구가 아직 없을 때 자동으로 설치를 시도해줍니다.
이미 Node.js 환경이 갖춰진 경우라면 **npm 직접 설치가 더 깔끔**합니다.
:::

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### `install.ps1` — Windows PowerShell (네이티브)

Windows 네이티브 환경에서 CLI와 Gateway를 설정합니다.

아래 명령어를 터미널에 입력하세요:
```powershell
iwr -useb https://openclaw.ai/install.ps1 | iex
```

---

## ⚙️ 환경 변수 (고급 옵션)

CI/CD 환경이나 무인(Unattended) 설치 시 다음 환경 변수를 사용할 수 있습니다.

| 환경 변수 | 설명 | 기본값 |
|-----------|------|--------|
| `PREFIX` | 바이너리 설치 경로 | `/usr/local/bin` |
| `VERSION` | 설치할 특정 버전 지정 | `latest` |
| `SKIP_GATEWAY` | 게이트웨이 초기 실행 건너뜀 | `false` |

### 예시: 특정 경로에 설치

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | PREFIX=$HOME/.local/bin bash
```

### 예시: 특정 버전 설치

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | VERSION=2026.3.23-2 bash
```

---

## 🔍 스크립트 작동 원리

스크립트는 다음 순서로 실행됩니다:

1. **OS 및 아키텍처 감지** — x64 / ARM64, macOS / Linux 구분
2. **Node.js 버전 확인** — Node 24 권장, Node 22.14+ 필요
3. **패키지 설치** — `npm install -g openclaw@latest`
4. **권한 설정** — 실행 권한 부여
5. **초기화 안내** — `openclaw onboard --install-daemon` 실행 유도

---

## ✅ 설치 검증 3단계 — 꼭 확인하세요!

설치 후 반드시 아래 3단계를 순서대로 실행하세요:

```bash
openclaw --version
openclaw doctor
openclaw gateway status
```

:::tip 성공하면 이렇게 보입니다
- `openclaw --version` → 버전 번호 출력
- `openclaw doctor` → 주요 항목 통과
- `openclaw gateway status` → `running` 표시
:::

## 📋 설치 완료 후 권장 명령

아래 명령어를 터미널에 입력하세요:
```bash
# 온보딩 (모델 + 채널 + 데몬 설정)
openclaw onboard --install-daemon

# 상태 확인
openclaw gateway status

# 진단
openclaw doctor
```

---

## 🔄 업데이트

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
```

또는 설치 스크립트를 다시 실행하면 최신 버전으로 업데이트됩니다.

> 관련 가이드: [설치 개요](/install/) | [온보딩 마법사](/start/wizard)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [온보딩 마법사](/start/wizard) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
