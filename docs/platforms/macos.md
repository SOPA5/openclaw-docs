---
title: macOS
sidebar_label: macOS
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **시작하기** |
| 읽는 목적 | 새 맥북에서 OpenClaw를 처음 설치하고 첫 질문까지 완주하기 |
| 추천 대상 | 맥북을 처음 사거나 터미널이 낯선 분 |
| 현재 위치 | `platforms/macos` |

:::tip 학습 팁
이 문서는 **"터미널이 뭔지 모르는 분"도 처음부터 끝까지 따라올 수 있게** 썼습니다.
막히는 곳이 있으면 문서 맨 아래 **🆘 막히면 여기로** 섹션을 확인하세요!
:::

# 🍎 macOS 설치 가이드

> **새 맥북을 샀다면 여기서 시작하세요!**
> 터미널(Terminal)을 처음 열어보는 분도 이 가이드 하나로 OpenClaw 설치부터 첫 질문까지 완주할 수 있습니다.

---

## ⚡ 빠른 설치

:::tip 💡 공식 권장 방법은?
**npm 직접 설치가 1순위**입니다. Node.js(5단계)만 먼저 설치했다면 바로 실행하세요:

```bash
npm install -g openclaw@latest
```

Node.js가 아직 없는 분, 또는 스크립트로 한방에 하고 싶은 분은 아래 **단계별 설치** 섹션을 따라가세요!
:::

**대안: 설치 스크립트 (공식 스크립트가 제공되는 경우)**

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

> 이 스크립트는 Homebrew, Git, Node.js가 없으면 자동으로 설치를 시도합니다.
> 단, **스크립트가 실제로 제공되는지 공식 사이트에서 먼저 확인**하세요.
> 직접 하나씩 확인하며 설치하고 싶은 분은 아래 **단계별 설치** 를 따라가세요.

---

## 📋 단계별 설치 (권장 — 처음이라면 이쪽으로!)

단계별로 하나씩 따라가면 확실하게 설치할 수 있습니다. 총 **9단계**입니다.

---

## 1단계. 터미널 열기 🖥️

터미널(Terminal)은 Mac에 기본으로 설치된 프로그램입니다.
마치 Mac에게 **직접 말로 명령을 내리는 창**이라고 생각하면 됩니다.

### 터미널 여는 법

1. 키보드에서 **`⌘ Command + Space`** 를 누르세요 (Spotlight 검색 창이 열립니다)
2. **"터미널"** 또는 **"Terminal"** 이라고 입력하세요
3. 검색 결과에서 **터미널(Terminal)** 을 클릭하세요

검은색 창이 뜨면 성공입니다! 🎉

:::tip 💡 자주 쓸 거라면 독(Dock)에 고정하세요!
터미널이 열린 상태에서, 아랫쪽 **Dock**에 있는 터미널 아이콘을 **마우스 오른쪽 버튼으로 클릭** → **옵션 → Dock에 유지**를 선택하면 다음부터 바로 열 수 있어요.
:::

✅ **성공하면 이렇게 보입니다**
```
사용자이름@MacBook-Pro ~ %
```
이런 모양의 커서가 보이면 터미널이 정상적으로 열린 겁니다.

---

## 2단계. Xcode Command Line Tools 설치 🔧

:::tip 💡 Xcode가 뭔가요?
Xcode는 Mac에서 프로그램을 만들 때 쓰는 도구 모음이에요.
그 중 "Command Line Tools"는 우리가 필요한 핵심 부품만 쏙 뽑아 설치하는 거예요.
마치 공구함에서 **드라이버만 꺼내는 것**과 같아요.
:::

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
xcode-select --install
```

팝업 창이 뜨면 **"설치"** 버튼을 클릭하고 기다리세요.
설치에 5~15분 정도 걸릴 수 있습니다. ☕ 잠깐 커피 한 잔 하고 오세요!

설치가 완료되면 아래 명령어로 확인하세요:

```bash
xcode-select -p
```

✅ **성공하면 이렇게 보입니다**
```
/Library/Developer/CommandLineTools
```
이 경로가 표시되면 설치 완료입니다!

---

## 3단계. Homebrew 설치 🍺

:::tip 💡 Homebrew가 뭔가요?
Homebrew는 Mac의 **앱스토어 같은 것**인데, 개발자 도구와 프로그램을 터미널로 쉽게 설치·관리할 수 있게 해주는 도구예요.
"brew install 프로그램이름" 한 줄이면 자동으로 설치됩니다.
Mac 사용자라면 거의 필수로 쓰는 도구예요!
:::

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

> 설치 중간에 **비밀번호를 입력하라고 할 수 있어요.** Mac 로그인 비밀번호를 입력하세요.
> 비밀번호를 입력할 때 화면에 아무것도 안 보이는 게 정상이에요! (보안상 숨겨집니다)

설치가 완료되면 아래 명령어로 확인하세요:

```bash
brew --version
```

✅ **성공하면 이렇게 보입니다**
```
Homebrew 4.x.x
```
버전 숫자가 출력되면 설치 완료입니다!

:::tip ⚠️ Apple Silicon(M1/M2/M3/M4) Mac 사용자 주의
Homebrew 설치 후 이런 메시지가 보일 수 있어요:
```
Run these commands in your terminal to add Homebrew to your PATH:
```
그 아래에 나오는 두 줄 명령어(`echo`로 시작하는 것들)를 그대로 복사해서 실행하세요.
그래야 `brew` 명령어가 제대로 인식됩니다.
:::

---

## 4단계. Git 설치 📦

:::tip 💡 Git이 뭔가요?
Git은 파일의 **변경 이력을 관리**하는 도구예요.
마치 **게임 세이브 포인트**처럼, 언제든 이전 상태로 돌아갈 수 있게 해줍니다.
많은 개발 도구들이 Git을 필요로 해서, 미리 설치해두는 거예요.
:::

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
brew install git
```

설치가 완료되면 아래 명령어로 확인하세요:

```bash
git --version
```

✅ **성공하면 이렇게 보입니다**
```
git version 2.x.x
```
버전 숫자가 출력되면 설치 완료입니다!

---

## 5단계. Node.js 설치 ⚙️

:::tip 💡 Node.js가 뭔가요?
Node.js는 JavaScript를 컴퓨터에서 실행할 수 있게 해주는 엔진이에요.
OpenClaw가 Node.js 위에서 동작하기 때문에 꼭 필요합니다.
마치 게임을 하려면 **게임 플레이어(엔진)** 가 필요한 것처럼요!
:::

Node.js는 **nvm(Node Version Manager)** 으로 설치하는 것을 권장합니다.
nvm을 쓰면 Node.js 버전을 쉽게 바꾸고 관리할 수 있어요.

### 5-1. nvm 설치

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

설치가 끝나면 터미널을 **완전히 닫았다가 다시 열어주세요.**
(새 창을 열어야 nvm이 인식됩니다)

### 5-2. Node.js 24 설치

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
nvm install 24
```

설치가 완료되면 아래 명령어로 확인하세요:

```bash
node --version
```

✅ **성공하면 이렇게 보입니다**
```
v24.x.x
```
`v24`로 시작하는 버전이 출력되면 설치 완료입니다!

---

## 6단계. OpenClaw 설치 🐾

이제 드디어 OpenClaw를 설치할 차례입니다!
세 가지 방법이 있어요. **방법 A가 공식 1순위**입니다!

### 방법 A. npm으로 직접 설치 (공식 1순위) ⭐

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
npm install -g openclaw@latest
```

### 방법 B. 설치 스크립트 (공식 스크립트가 제공되는 경우)

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

> 이 스크립트는 앞 단계에서 설치한 Homebrew, Git, Node.js를 자동으로 확인하고, 없으면 설치를 시도합니다.
> 단, **스크립트가 실제로 제공되는지 공식 사이트에서 먼저 확인**하세요.

### 방법 C. Homebrew로 설치 (macOS 전용)

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
brew install --cask openclaw
```

✅ **설치 검증 3단계 — 꼭 확인하세요!**

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

---

## 7단계. OpenClaw 온보딩 (초기 설정) 🚀

설치가 끝났으면 이제 OpenClaw를 처음 설정해야 합니다.

:::tip 💡 온보딩이 뭔가요?
온보딩(Onboarding)은 새로운 직원이 회사에 처음 왔을 때 하는 **입사 교육** 같은 거예요.
OpenClaw가 여러분의 Mac에 딱 맞게 자리를 잡을 수 있도록 필요한 설정을 해주는 과정이에요.
`--install-daemon` 옵션을 쓰면 Mac을 켤 때마다 OpenClaw가 **자동으로 시작**되도록 등록됩니다.
:::

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
openclaw onboard --install-daemon
```

화면의 안내를 따라 설정을 완료하세요.

✅ **성공하면 이렇게 보입니다**
```
✓ OpenClaw onboarding complete
✓ Gateway daemon registered (LaunchAgent)
```
이런 메시지가 보이면 온보딩 완료입니다!

---

## 8단계. 상태 확인 ✅

OpenClaw가 제대로 작동하고 있는지 확인해봅시다.

:::tip 💡 Gateway가 뭔가요?
Gateway는 OpenClaw의 **중앙 교환대**예요.
여러분이 질문을 보내면, Gateway가 받아서 AI에게 전달하고, 답변을 다시 여러분에게 전해주는 역할을 해요.
Gateway가 켜져 있어야 OpenClaw가 작동합니다!
:::

터미널에 아래 명령어를 복사해서 붙여넣은 뒤 **Enter**를 누르세요:

```bash
openclaw gateway status
```

✅ **성공하면 이렇게 보입니다**
```
● Gateway is running
  PID: 12345
  Port: 18789
  Uptime: ...
```
`running` 상태가 보이면 OpenClaw가 정상적으로 작동 중입니다! 🎉

:::tip ⚠️ Gateway가 꺼져 있다면?
아래 명령어로 직접 시작할 수 있어요:
```bash
openclaw gateway start
```
:::

---

## 9단계. 첫 질문 보내기 💬

이제 OpenClaw와 대화할 준비가 됐어요!
OpenClaw는 **Telegram, Discord, Web** 등 다양한 채널을 통해 사용할 수 있습니다.

채널 연결 방법은 아래 가이드에서 확인하세요:

- [📱 Telegram 채널 연결하기](/channels/telegram)
- [💬 Discord 채널 연결하기](/channels/discord)
- [🌐 웹 대시보드와 채널 연결 시작하기](/start/pairing)

채널을 연결하면 바로 첫 질문을 보낼 수 있어요:

> **"안녕! OpenClaw 설치 완료했어. 뭘 도와줄 수 있어?"**

---

## 🔒 필수 권한 설정 (TCC)

에이전트가 macOS를 대신하여 작동하려면 **시스템 환경설정 > 개인정보 보호 및 보안**에서 다음 권한을 허용해야 합니다.

| 권한 | 용도 | 필수 여부 |
|------|------|---------|
| **자동화(Automation)** | 앱 제어 및 스크립트 실행 | 필수 |
| **손쉬운 사용(Accessibility)** | 마우스 클릭, 키보드 입력 | 필수 |
| **화면 기록(Screen Recording)** | 브라우저/화면 상태 인식 | 브라우저 자동화 시 필요 |
| **마이크(Microphone)** | 음성 입력, TTS | 음성 기능 사용 시 필요 |
| **알림(Notifications)** | 에이전트 완료 알림 | 선택 |
| **카메라(Camera)** | node 카메라 기능 | node 기능 사용 시 필요 |

권한 설정 창을 바로 열려면:

```bash
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

LaunchAgent 파일 위치:
```
~/Library/LaunchAgents/ai.openclaw.gateway.plist
```

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

## ✅ 이 문서를 읽고 나면

- [x] 터미널을 열고 명령어를 입력할 수 있다
- [x] Xcode Command Line Tools가 설치되어 있다
- [x] Homebrew가 설치되어 있다
- [x] Git이 설치되어 있다
- [x] Node.js 24가 설치되어 있다
- [x] OpenClaw가 설치되어 있다
- [x] 온보딩이 완료되어 있다
- [x] Gateway가 `running` 상태이다
- [x] 첫 질문을 보낼 준비가 되어 있다

---

## ➡️ 다음 단계

- [📱 채널 연결하기](/channels/) — Telegram, Discord, Web 등으로 OpenClaw와 대화 시작
- [🤖 에이전트 알아보기](/concepts/agent) — OpenClaw 에이전트가 뭔지 이해하기
- [⚙️ 설정 더 알아보기](/start/onboarding) — 고급 설정 및 온보딩 옵션

---

## 🆘 막히면 여기로

| 증상 | 해결 방법 |
|------|---------|
| `command not found: brew` | [3단계](#3단계-homebrew-설치-) 다시 진행, Apple Silicon이면 PATH 설정 확인 |
| `command not found: nvm` | 터미널을 완전히 닫고 새로 열기 |
| `command not found: node` | `nvm use 24` 실행 후 재시도 |
| `command not found: openclaw` | 터미널 재시작 후 재시도. 안되면 `npm install -g openclaw@latest` |
| Gateway가 `stopped` 상태 | `openclaw gateway start` 실행 |
| 권한 팝업이 계속 뜸 | [필수 권한 설정](#-필수-권한-설정-tcc) 섹션에서 권한 허용 |
| 그 외 문제 | `openclaw doctor` 실행 후 결과 확인 |

더 도움이 필요하면:
- 📖 [공식 문서](https://openclaw.ai/docs)
- 💬 [커뮤니티 Discord](https://openclaw.ai/discord)
- 🐛 [GitHub Issues](https://github.com/openclaw/openclaw/issues)
