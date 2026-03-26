---
title: Linux
sidebar_label: Linux
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 새 Linux 컴퓨터에서 OpenClaw를 처음 설치하고 바로 써보기 |
| 추천 환경 | Ubuntu / Debian 계열 기준 |
| 현재 위치 | `platforms/linux` |

:::tip 먼저 마음 편하게 시작하세요
이 문서는 **처음 Linux를 쓰는 사람**도 따라갈 수 있게 아주 쉽게 적었습니다.
터미널을 열고, 명령어를 **복사 → 붙여넣기 → Enter** 순서로 진행하면 됩니다. 😊
:::

# Linux에서 OpenClaw 시작하기

Linux는 OpenClaw를 쓰기 아주 좋은 환경입니다.
특히 Ubuntu 같은 배포판에서는 설치와 관리가 비교적 단순합니다.

이 문서에서는 **새 컴퓨터를 샀다**고 가정하고,
**설치 → 설정 → 상태 확인**까지 한 번에 가겠습니다.

---

## 1) 터미널 여는 법

먼저 **터미널**을 열어야 합니다.
터미널은 컴퓨터에게 글자로 명령을 내리는 창입니다.

### 여는 방법
- 키보드에서 **Ctrl + Alt + T** 를 누르기
- 또는 앱 검색에서 **Terminal** 또는 **터미널** 검색 후 실행

:::tip 쉬운 비유
터미널은 컴퓨터와 직접 대화하는 **채팅창** 같은 거예요.
우리가 글을 쓰면 컴퓨터가 그대로 실행해줍니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 검은색 또는 어두운 창이 열립니다
- 글자를 입력할 수 있는 줄이 보입니다
- 보통 이런 비슷한 모양입니다:

```bash
username@computer:~$
```

---

## 2) 시스템 업데이트

처음에는 운영체제를 최신 상태로 맞추는 게 좋습니다.

터미널을 열고 아래 명령어를 **복사해서 붙여넣은 뒤 Enter**를 누르세요.

```bash
sudo apt update && sudo apt upgrade -y
```

비밀번호를 물으면 Linux 로그인 비밀번호를 입력하세요.

:::tip 쉬운 비유
새 기계를 쓰기 전에 **최신 부품으로 정리 정돈**하는 단계예요.
이걸 먼저 해두면 설치가 더 부드럽게 됩니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 패키지 목록을 읽어옵니다
- 업데이트가 진행됩니다
- 마지막에 다시 명령어 입력 줄로 돌아옵니다

---

## 3) 기본 도구 설치

OpenClaw 설치 전에 기본 준비물을 먼저 설치합니다.

터미널에서 아래 명령어를 실행하세요.

```bash
sudo apt install -y curl git build-essential ca-certificates
```

각 도구는 이런 역할을 합니다.
- `curl`: 인터넷에서 파일 받기
- `git`: 코드/버전 관리
- `build-essential`: 기본 개발 도구 모음
- `ca-certificates`: 안전한 연결을 위한 인증서

:::tip 쉬운 비유
이 단계는 공구함에 **드라이버, 망치, 줄자**를 먼저 넣어두는 거예요.
나중에 설치할 때 필요한 기본 도구입니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 설치 로그가 지나갑니다
- 에러 없이 끝나면 다시 입력 줄이 나타납니다

---

## 4) Node.js 설치

OpenClaw는 Node.js 위에서 실행됩니다.
가장 추천하는 방법은 **nvm**을 이용하는 것입니다.

### 4-1. nvm 설치
터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

설치 후 아래 명령어를 실행하세요.

```bash
source ~/.bashrc
```

### 4-2. Node.js 24 설치
이제 아래 명령어를 실행하세요.

```bash
nvm install 24
```

### 4-3. 설치 확인
아래 명령어를 실행해서 확인합니다.

```bash
node --version
npm --version
```

`node --version` 결과가 `v24.x.x`처럼 보이면 성공입니다.

:::tip 쉬운 비유
Node.js는 OpenClaw의 **엔진**이고,
nvm은 엔진 버전을 쉽게 바꾸는 **리모컨** 같은 도구예요.
:::

### ✅ 성공하면 이렇게 보입니다
- `node --version`이 `v24...`로 시작합니다
- `npm --version`도 숫자가 나옵니다
- `command not found`가 나오지 않습니다

---

## 5) OpenClaw 설치

이제 OpenClaw를 설치합니다.

### 방법 1. npm으로 직접 설치 (공식 1순위) ⭐

터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
npm install -g openclaw@latest
```

### 방법 2. 설치 스크립트 (공식 스크립트가 제공되는 경우)

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

:::tip 💡 스크립트는 언제 쓰나요?
`install.sh`는 Node.js, Git이 아직 없을 때 자동으로 설치를 시도합니다.
Node.js가 이미 설치된 경우라면 **npm 직접 설치가 더 깔끔**합니다.
단, **스크립트가 실제로 제공되는지 공식 사이트에서 먼저 확인**하세요.
:::

설치가 끝나면 아래 **검증 3단계**로 확인하세요.

```bash
openclaw --version
openclaw doctor
openclaw gateway status
```

:::tip ✅ 성공하면 이렇게 보입니다
- `openclaw --version` → 버전 번호 출력
- `openclaw doctor` → 주요 항목 통과
- `openclaw gateway status` → `running` 표시
:::

### ✅ 성공하면 이렇게 보입니다
- 설치 로그가 출력됩니다
- `openclaw --version`이 버전을 보여줍니다
- `command not found`가 뜨지 않습니다

---

## 6) 온보딩 실행

설치가 끝났으면 첫 설정을 시작합니다.

터미널에서 아래 명령어를 실행하세요.

```bash
openclaw onboard --install-daemon
```

이 명령은 보통 다음을 도와줍니다.
- AI 모델 연결
- 채널 연결
- 기본 게이트웨이 설정
- 백그라운드 서비스 등록

`--install-daemon`은 OpenClaw가 **백그라운드에서 계속 동작하도록** 설정하는 옵션입니다.

:::tip 쉬운 비유
온보딩은 새 게임을 켰을 때 처음 나오는 **초기 설정 화면** 같은 거예요.
한 번 해두면 다음부터 편합니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 질문형 설정 화면이 차례대로 진행됩니다
- 설정 완료 메시지가 나옵니다
- 다시 명령어 입력 줄로 돌아옵니다

---

## 7) 상태 확인

이제 OpenClaw가 잘 실행 중인지 확인합니다.

터미널에서 아래 명령어를 실행하세요.

```bash
openclaw gateway status
```

정상이라면 `running` 같은 상태가 보일 수 있습니다.

필요하면 아래 명령어로 추가 점검도 할 수 있습니다.

```bash
openclaw doctor
```

:::tip 쉬운 비유
이 단계는 새로 꽂은 기계의 **전원 램프가 켜졌는지 확인하는 단계**예요.
:::

### ✅ 성공하면 이렇게 보입니다
- 상태 정보가 출력됩니다
- `running` 또는 비슷한 정상 표시가 보입니다
- 큰 오류 없이 응답합니다

---

## 8) 서버/VPS라면 추가로 해야 할 설정

노트북이나 데스크톱이 아니라,
**서버(VPS)** 나 **원격 Linux 머신**에서 OpenClaw를 돌릴 수도 있습니다.

이 경우에는 사용자가 로그아웃해도 서비스가 계속 돌아가도록 설정하는 것이 좋습니다.

### 8-1. linger 켜기
터미널에서 아래 명령어를 실행하세요.

```bash
loginctl enable-linger $USER
```

이 설정을 하면 로그인 세션이 없어도 사용자 서비스가 계속 유지되기 쉬워집니다.

### 8-2. headless 환경 이해하기
서버/VPS는 보통 **화면이 없는 컴퓨터**입니다.
이런 환경을 **headless**라고 부릅니다.

즉,
- 모니터가 없고
- 키보드/마우스로 직접 만지지 않고
- SSH 같은 원격 접속으로 관리하는 경우가 많습니다

OpenClaw의 CLI와 게이트웨이 자체는 이런 환경에서도 잘 동작할 수 있습니다.
다만 브라우저 자동화 같은 일부 기능은 별도 준비가 더 필요할 수 있습니다.

:::tip 쉬운 비유
headless 서버는 **모니터 없는 컴퓨터 창고** 같은 거예요.
눈으로 직접 보진 않지만, 뒤에서 묵묵히 일을 계속합니다.
:::

### 8-3. 서버에서 자주 확인하는 명령어

```bash
openclaw gateway status
journalctl --user -u openclaw -f
```

> 환경에 따라 서비스 이름이나 로그 위치가 조금 다를 수 있습니다. 그래도 보통은 `openclaw gateway status`부터 확인하면 가장 쉽습니다.

### ✅ 성공하면 이렇게 보입니다
- `loginctl enable-linger $USER` 실행 후 에러가 없거나 정상 메시지가 보입니다
- 로그아웃 후에도 서비스가 유지되기 쉬워집니다
- 원격 서버에서도 OpenClaw 상태를 확인할 수 있습니다

---

## ✅ 이 문서를 읽고 나면

이제 여러분은 다음을 할 수 있습니다.

- Linux에서 터미널을 열 수 있습니다
- 시스템 업데이트와 기본 도구 설치를 할 수 있습니다
- **nvm v0.40.3 + Node 24** 조합으로 Node.js를 설치할 수 있습니다
- OpenClaw를 설치하고 온보딩할 수 있습니다
- `openclaw gateway status`로 정상 동작을 확인할 수 있습니다
- 서버/VPS 환경에서 추가로 무엇을 챙겨야 하는지도 알 수 있습니다

---

## ➡️ 다음 단계

이어서 보면 좋은 문서들입니다.

- [시작하기](/start/getting-started)
- [설치 개요](/install/)
- [플랫폼 개요](/platforms/)
- [Windows 가이드](/platforms/windows)

---

## 🆘 막히면 여기로

문제가 생기면 아래 순서대로 확인해보세요.

1. 터미널을 닫았다가 다시 열기
2. 아래 명령어로 상태 확인하기

```bash
node --version
openclaw --version
openclaw gateway status
openclaw doctor
```

3. 비밀번호를 잘못 입력한 건 아닌지 확인하기
4. 인터넷 연결이 정상인지 확인하기

특히 아래 3가지는 꼭 보세요.
- `node --version`이 **v24** 근처인지
- `openclaw --version`이 나오는지
- `openclaw gateway status`가 응답하는지

> 계속 막히면 OpenClaw의 설치 문서나 도움말 문서에서 오류 메시지와 함께 다시 확인해보세요.
