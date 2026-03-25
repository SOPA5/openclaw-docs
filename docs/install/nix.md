---
title: Nix
sidebar_label: Nix
sidebar_position: 4
---

# Nix (Home Manager) 설치

NixOS를 사용하거나 Nix 패키지 매니저를 선호하는 사용자를 위해 `nix-openclaw` 모듈을 제공합니다. 이는 선언적인 방식으로 OpenClaw를 관리할 수 있게 해줍니다.

## ❄️ 설정 방법​

### 1. Flake 추가​

`flake.nix` 파일에 OpenClaw 입력을 추가합니다.

```
{
inputs = {
nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
openclaw.url = "github:openclaw/nix-openclaw";
};
}

```

### 2. Home Manager 모듈 활성화​

Home Manager 설정에서 모듈을 불러오고 활성화합니다.

```
{ inputs, ... }: {
imports = [ inputs.openclaw.homeManagerModules.default ];

services.openclaw = {
enable = true;
package = inputs.openclaw.packages.${pkgs.system}.default;
# 추가 설정 (포트, 로그 등)
port = 18789;
};
}

```

## ✨ 이점​

- 재현성: 어디서든 동일한 버전과 설정의 OpenClaw를 실행할 수 있습니다.

- 자동 업데이트: Flake를 업데이트하는 것만으로 최신 버전을 유지할 수 있습니다.

- 시스템 통합: systemd 서비스로 자동 등록되어 관리됩니다.

Docker 설치 가이드
(/install/docker)다음
Ansible을 이용한 배포
(/install/ansible)

- ❄️ 설정 방법
- 1. Flake 추가

- 2. Home Manager 모듈 활성화

- ✨ 이점

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

