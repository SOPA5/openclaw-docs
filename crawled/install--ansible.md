<!-- source: https://openclaw-wheat.vercel.app/install/ansible -->

-  (/)

- 설치 (Install)

- Ansible을 이용한 배포

# Ansible을 이용한 배포

여러 대의 서버를 관리하거나, 보안이 강화된 전문적인 배포 환경을 구축하고자 할 때 Ansible Playbook을 활용할 수 있습니다.

## 🛡️ 보안 우선 아키텍처​ (#️-보안-우선-아키텍처)

제공되는 Ansible 모듈은 다음과 같은 보안 모범 사례를 자동으로 적용합니다.

- UFW 방화벽 설정: 필수 포트 외에는 차단합니다.

- Tailscale 통합: 외부 노출 없이 안전한 VPN망을 통해 게이트웨이에 접근하도록 설정할 수 있습니다.

- 시스템 서비스 등록: `systemd`를 통해 장애 발생 시 자동 재시작됩니다.

## 🚀 배포 시작하기​ (#-배포-시작하기)

### 1. 레포지토리 준비​ (#1-레포지토리-준비)

OpenClaw Ansible 설정이 포함된 레포지토리를 클론합니다.

```
git clone https://github.com/openclaw/ansible-openclaw
cd ansible-openclaw

```

### 2. 인벤토리 및 변수 설정​ (#2-인벤토리-및-변수-설정)

`inventory.ini`에 대상 서버를 적고, `vars.yml`에 필요한 설정(예: 에이전트 이름)을 입력합니다.

### 3. Playbook 실행​ (#3-playbook-실행)

```
ansible-playbook -i inventory.ini site.yml

```

## 📋 주요 기능​ (#-주요-기능)

- 무중단 업데이트: 기존 서비스를 안전하게 중단하고 새 버전을 배포합니다.

- 다중 노드 관리: 하나의 명령으로 여러 리전의 게이트웨이를 동시에 관리합니다.

- 로그 집계 설정: 중앙 로그 서버로 데이터를 보내도록 구성할 수 있습니다.

Nix (Home Manager) 설치
(/install/nix)다음
Bun 기반 실행 (실험적)
(/install/bun)

- 🛡️ 보안 우선 아키텍처 (#️-보안-우선-아키텍처)

- 🚀 배포 시작하기 (#-배포-시작하기)
- 1. 레포지토리 준비 (#1-레포지토리-준비)

- 2. 인벤토리 및 변수 설정 (#2-인벤토리-및-변수-설정)

- 3. Playbook 실행 (#3-playbook-실행)

- 📋 주요 기능 (#-주요-기능)

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
