---
title: Windows
sidebar_label: Windows
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | Windows에서 WSL2 기준으로 가장 안정적으로 시작하기 |
| 추천 환경 | **Windows + WSL2 + Ubuntu** |
| 현재 위치 | `platforms/windows` |

:::tip 먼저 아주 쉽게 설명할게요
이 문서는 **"새 컴퓨터를 샀고, 아직 아무것도 잘 모른다"**는 기준으로 썼어요.
차근차근 따라가면 **OpenClaw 설치 → 설정 → 첫 실행 확인**까지 한 번에 갈 수 있습니다. 🙌
:::

# Windows에서 OpenClaw 시작하기

Windows에서는 **WSL2 + Ubuntu 방식**을 가장 추천합니다.
왜냐하면 OpenClaw는 Linux 환경에서 가장 안정적으로 잘 동작하기 때문이에요.

쉽게 말하면:
- **Windows**는 집 전체
- **WSL2의 Ubuntu**는 그 집 안에 만든 **작은 Linux 작업방**
- OpenClaw는 그 작업방에서 쓰면 더 편하고, 덜 막힙니다.

> WSL2를 쓰기 어려운 경우를 위해, 문서 아래쪽에 **Windows 네이티브 경로**도 짧게 안내해두었습니다.

---

## 1) Windows Terminal 설치 추천

먼저 **Windows Terminal**을 설치하는 것을 추천합니다.

### 왜 이걸 쓰나요?
- 창이 깔끔해서 보기 쉬워요
- 탭을 여러 개 열 수 있어요
- PowerShell, Ubuntu 터미널을 한 앱 안에서 바꿔가며 쓸 수 있어요
- 나중에 OpenClaw를 계속 쓸 때 훨씬 편합니다

### 설치 방법
1. **Microsoft Store**를 엽니다.
2. 검색창에 **Windows Terminal**을 입력합니다.
3. **설치(Install)** 버튼을 누릅니다.

:::tip 쉬운 비유
기본 메모장이 아니라 **조금 더 좋은 공책**으로 바꾸는 느낌이에요.
내용은 같아도, 쓰기 훨씬 편해집니다.
:::

> 설치가 끝나면 시작 메뉴에서 **Windows Terminal**을 검색해서 실행해보세요.

### ✅ 성공하면 이렇게 보입니다
- 시작 메뉴에서 **Windows Terminal**이 검색됩니다
- 실행하면 검은색 또는 어두운 창이 열립니다
- 위쪽에 **탭**을 열 수 있는 모양이 보입니다

---

## 2) PowerShell을 관리자 권한으로 여는 법

이제 **관리자 권한 PowerShell**을 열어야 합니다.
WSL2 설치는 보통 관리자 권한이 필요합니다.

### 방법 A. 시작 메뉴에서 열기
1. 시작 버튼을 누릅니다
2. **PowerShell**을 검색합니다
3. **Windows PowerShell** 또는 **PowerShell**에서 **마우스 오른쪽 버튼 클릭**
4. **관리자 권한으로 실행**을 누릅니다

### 방법 B. 시작 버튼 우클릭
1. 시작 버튼에 **마우스 오른쪽 버튼 클릭**
2. 메뉴에서 **터미널(관리자)** 또는 **Windows PowerShell(관리자)** 를 누릅니다

관리자 권한 확인 창이 뜨면 **예(Yes)** 를 누르세요.

:::tip 쉬운 비유
관리자 권한은 **집 열쇠를 가진 보호자 모드**라고 생각하면 됩니다.
보통은 못 하는 설치 작업을 할 수 있게 해줘요.
:::

### ✅ 성공하면 이렇게 보입니다
- 창 제목에 **관리자** 또는 **Administrator** 비슷한 표시가 보입니다
- 검은색/파란색 터미널 창이 열립니다
- 명령어를 입력할 수 있습니다

---

## 3) WSL2 설치

이제 Windows 안에 Linux 작업방을 만드는 단계입니다.

### WSL2가 뭐예요?
WSL2는 **Windows 안에서 Linux를 실행할 수 있게 해주는 기능**입니다.
OpenClaw를 쓰기 아주 좋은 환경이에요.

### 설치 방법
관리자 권한 PowerShell 창에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```powershell
wsl --install
```

설치가 진행되면 안내에 따라 **재부팅**하세요.

재부팅 후에는 보통 Ubuntu가 자동으로 준비됩니다.

:::tip 쉬운 비유
WSL2는 Windows 컴퓨터 안에 **작은 Ubuntu 방을 하나 만드는 것**이에요.
집은 그대로 Windows지만, 작업은 더 잘 되는 Linux 방에서 하는 거예요.
:::

### ✅ 성공하면 이렇게 보입니다
- 설치가 진행됩니다
- 재부팅 안내가 나올 수 있습니다
- 재부팅 후 **Ubuntu**가 열리거나, 시작 메뉴에서 **Ubuntu**를 찾을 수 있습니다

---

## 4) Ubuntu 초기 설정

이제 처음으로 Ubuntu를 열어보겠습니다.

### Ubuntu 여는 법
- 시작 메뉴에서 **Ubuntu** 검색 → 실행
- 또는 **Windows Terminal**을 열고 탭 메뉴에서 **Ubuntu** 선택

처음 실행하면 사용자 정보를 물어봅니다.

### 사용자 이름 / 비밀번호 설정
화면에 보이는 안내에 따라 다음을 정하세요.

- **사용자 이름(username)**: 앞으로 Ubuntu 안에서 쓸 내 이름
- **비밀번호(password)**: 설치나 업데이트할 때 쓸 비밀번호

> 비밀번호를 입력할 때는 **화면에 글자가 안 보여도 정상**입니다. 그냥 입력하고 Enter를 누르세요.

:::tip 쉬운 비유
이건 Ubuntu 방의 **내 책상 이름표와 자물쇠 비밀번호**를 정하는 단계예요.
한 번 정하면 계속 사용하게 됩니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 명령어 입력 줄이 생깁니다
- 보통 이런 비슷한 모습이 보입니다:

```bash
username@computer:~$
```

---

## 5) Ubuntu 업데이트

이제 Ubuntu를 최신 상태로 정리합니다.

Ubuntu 터미널을 열고 아래 명령어를 **복사해서 붙여넣은 뒤 Enter**를 누르세요.

```bash
sudo apt update && sudo apt upgrade -y
```

비밀번호를 물으면, 방금 만든 Ubuntu 비밀번호를 입력하세요.

:::tip 쉬운 비유
새로 산 장난감도 먼저 **업데이트**를 해야 잘 돌아가죠.
Ubuntu도 똑같아요. 먼저 최신 상태로 맞춰두면 나중에 덜 막힙니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 패키지 목록이 내려받아집니다
- 설치/업데이트가 쭉 진행됩니다
- 마지막에 다시 명령어 입력 줄로 돌아옵니다

---

## 6) 기본 도구 설치

OpenClaw 설치 전에 자주 쓰는 기본 도구들을 먼저 설치합니다.

Ubuntu 터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
sudo apt install -y curl git build-essential ca-certificates
```

이 도구들은 각각 이런 역할을 합니다.
- `curl`: 인터넷에서 설치 파일을 받아오는 도구
- `git`: 코드/파일 버전 관리 도구
- `build-essential`: 필요한 기본 제작 도구 모음
- `ca-certificates`: 안전한 사이트 인증서 묶음

:::tip 쉬운 비유
이 단계는 요리하기 전에 **칼, 도마, 냄비**를 꺼내 놓는 거예요.
나중에 필요한 기본 준비물입니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 설치가 끝난 뒤 다시 명령어 입력 줄이 나타납니다
- 에러 없이 완료되면 다음 단계로 가면 됩니다

---

## 7) Node.js 설치

OpenClaw는 Node.js 위에서 동작합니다.
가장 쉬운 방법은 **nvm**으로 설치하는 것입니다.

### 7-1. nvm 설치
Ubuntu 터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

그다음 아래 명령어를 실행하세요.

```bash
source ~/.bashrc
```

### 7-2. Node.js 24 설치
이제 아래 명령어를 실행하세요.

```bash
nvm install 24
```

### 7-3. 설치 확인
아래 명령어로 잘 설치됐는지 확인하세요.

```bash
node --version
npm --version
```

보통 `v24.x.x` 같은 형태가 보이면 성공입니다.

:::tip 쉬운 비유
Node.js는 OpenClaw가 달리는 **엔진**이고,
nvm은 엔진 버전을 쉽게 바꾸는 **리모컨** 같은 거예요.
:::

### ✅ 성공하면 이렇게 보입니다
- `node --version` 결과가 `v24...` 로 시작합니다
- `npm --version`도 숫자가 나옵니다
- `command not found`가 뜨지 않습니다

---

## 8) OpenClaw 설치

이제 진짜 OpenClaw를 설치합니다.

### 방법 1. 설치 스크립트 (공식 1순위) ⭐

Ubuntu 터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```

### 방법 2. npm으로 직접 설치 (대안)

```bash
npm install -g openclaw@latest
```

:::tip 💡 왜 WSL2가 더 추천될까요?
처음 설치라면 `install.sh` + WSL2가 가장 쉽고 안정적인 길입니다.
준비물이 조금 부족해도 같이 챙겨주기 때문이에요.
Node.js가 이미 준비된 경우에는 npm 방법도 사용할 수 있어요.
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
- 설치 로그가 지나갑니다
- `openclaw --version`을 입력했을 때 버전 번호가 나옵니다
- `command not found`가 뜨지 않습니다

---

## 9) 온보딩 실행

:::tip 🌟 이 명령이 핵심이에요
`openclaw onboard --install-daemon`은 **모델 연결 + 채널 연결 + 데몬 설치**를 한 번에 이어주는 핵심 명령입니다.
설치가 끝났다면 이 단계부터 바로 진행하세요.
:::


이제 OpenClaw의 첫 설정을 합니다.

Ubuntu 터미널에서 아래 명령어를 **복사해서 붙여넣고 Enter**를 누르세요.

```bash
openclaw onboard --install-daemon
```

이 명령은 보통 다음을 도와줍니다.
- 사용할 AI 모델 연결
- 채널 연결
- 게이트웨이 설정
- 백그라운드 서비스 등록

`--install-daemon`은 OpenClaw가 **컴퓨터 뒤에서 계속 켜져 있도록** 도와주는 옵션입니다.

:::tip 쉬운 비유
온보딩은 새 휴대폰을 샀을 때 하는 **처음 설정 마법사** 같은 거예요.
한 번 해두면 훨씬 편해집니다.
:::

### ✅ 성공하면 이렇게 보입니다
- 질문형 설정 화면이 진행됩니다
- 설정이 끝나면 완료 안내가 나옵니다
- 다시 명령어 입력 줄로 돌아옵니다

---

## 10) 상태 확인

이제 OpenClaw가 잘 켜졌는지 확인합니다.

Ubuntu 터미널에서 아래 명령어를 실행하세요.

```bash
openclaw gateway status
```

상태에 `running` 또는 비슷한 정상 표시가 보이면 좋습니다.

필요하면 아래 명령어도 참고하세요.

```bash
openclaw doctor
```

:::tip 쉬운 비유
이 단계는 새로 연결한 기계에 **전원이 잘 들어왔는지 확인하는 전원등 체크**예요.
:::

### ✅ 성공하면 이렇게 보입니다
- `running` 같은 정상 상태가 보입니다
- 또는 서비스 정보가 출력됩니다
- 큰 오류 없이 상태를 읽어옵니다

---

## 11) Windows 경로와 WSL 경로 차이 이해하기

이 부분은 처음에 많이 헷갈립니다. 아주 쉽게 정리할게요.

### WSL 안의 파일은 어디에 저장되나요?
Ubuntu에서 작업한 파일은 보통 이런 Linux 경로에 저장됩니다.

```bash
/home/내이름/
```

예를 들면:

```bash
/home/supark/
```

OpenClaw 관련 설정은 보통 사용자 홈 아래 숨김 폴더에 저장됩니다.

```bash
~/.openclaw
```

### Windows 탐색기에서는 어떻게 보이나요?
Windows 탐색기에서는 보통 이런 식으로 접근할 수 있습니다.

```text
\\wsl.localhost\Ubuntu\home\내이름
```

### Windows 드라이브는 Ubuntu에서 어떻게 보이나요?
반대로 Windows의 `C:` 드라이브는 Ubuntu에서 이렇게 보입니다.

```bash
/mnt/c/
```

예를 들면:

```bash
/mnt/c/Users/내이름/Desktop
```

### 어떤 쪽에 저장하는 게 좋나요?
OpenClaw 작업은 가능하면 **WSL 안쪽 경로**에서 하는 것을 추천합니다.

추천:
```bash
/home/내이름/projects
```

덜 추천:
```bash
/mnt/c/Users/내이름/Desktop
```

이유는 WSL 안쪽이 보통 더 안정적이고 빠르기 때문입니다.

:::tip 쉬운 비유
- `/home/...` 는 **Ubuntu 방 안의 책상**
- `/mnt/c/...` 는 **Windows 거실에 있는 책상**

OpenClaw 작업은 자기 방 책상에서 하는 게 더 편한 느낌이라고 생각하면 됩니다.
:::

### ✅ 성공하면 이렇게 보입니다
- Ubuntu에서 `pwd`를 입력하면 `/home/...` 형태가 보입니다
- Windows 탐색기에서도 `\\wsl.localhost\Ubuntu\...` 경로로 파일을 열 수 있습니다
- 두 경로가 서로 연결된다는 걸 이해하면 성공입니다

---

## 12) WSL2를 못 쓰는 경우: Windows 네이티브 경로 간단 안내

회사 PC 정책이나 특별한 환경 때문에 WSL2를 못 쓸 수도 있습니다.
그럴 때는 Windows PowerShell에서 직접 설치할 수 있습니다.

### 설치 명령
**PowerShell**을 열고 아래 명령어를 실행하세요.

```powershell
# 방법 1: 설치 스크립트
iwr -useb https://openclaw.ai/install.ps1 | iex

# 방법 2: npm 직접 설치 (대안)
npm install -g openclaw@latest
```

그다음 온보딩과 검증 3단계를 실행하세요.

```powershell
openclaw onboard --install-daemon
openclaw --version
openclaw doctor
openclaw gateway status
```

### 알아두면 좋은 점
- `install.ps1`은 **Windows 네이티브에서도 작동**합니다.
- 그래도 가능하면 **WSL2 + Ubuntu가 더 추천**됩니다.
- Windows 네이티브는 **간단한 CLI 용도**에는 괜찮지만, 긴 작업이나 문서 예시는 WSL2 쪽이 더 잘 맞습니다.

:::tip 쉬운 비유
Windows 네이티브는 **바로 거실에서 작업하는 방법**,
WSL2는 **작업에 더 잘 맞는 방으로 들어가서 작업하는 방법**이라고 생각하면 됩니다.
:::

### ✅ 성공하면 이렇게 보입니다
- PowerShell에서 OpenClaw 명령어가 실행됩니다
- `openclaw gateway status`가 상태를 보여줍니다
- 다만 가능하면 나중에 WSL2 방식으로 옮기는 것을 추천합니다

---

## ✅ 이 문서를 읽고 나면

이제 여러분은 다음을 할 수 있습니다.

- Windows에서 **WSL2 + Ubuntu**를 준비할 수 있습니다
- Node.js를 **nvm v0.40.3 + Node 24**로 설치할 수 있습니다
- OpenClaw를 설치하고 온보딩할 수 있습니다
- `openclaw gateway status`로 정상 동작 여부를 확인할 수 있습니다
- Windows 경로와 WSL 경로 차이도 이해할 수 있습니다

---

## ➡️ 다음 단계

다음 문서로 이어서 보면 더 편합니다.

- [시작하기](/start/getting-started)
- [설치 개요](/install/)
- [Linux 가이드](/platforms/linux)
- [플랫폼 개요](/platforms/)

---

## 🆘 막히면 여기로

아래 순서대로 확인해보세요.

1. 터미널을 완전히 닫았다가 다시 열기
2. Ubuntu인지 PowerShell인지 현재 창 종류 확인하기
3. 아래 명령어로 상태 확인하기

```bash
node --version
openclaw --version
openclaw gateway status
openclaw doctor
```

그리고 다음도 함께 확인하면 좋습니다.
- `node --version`이 **v24** 근처인지
- 설치한 위치가 **WSL Ubuntu 안쪽**인지
- 비밀번호 입력 시 글자가 안 보여도 정상인지

> 계속 막히면 OpenClaw 문서의 설치/도움말 문서로 이동해서 오류 메시지와 함께 확인하세요.
