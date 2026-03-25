---
title: Nix
sidebar_label: Nix
sidebar_position: 4
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 설치 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `install/index` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Nix (Home Manager) 설치

이 문서에서는 OpenClaw를 설치하고 준비하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- ❄️ 설치 방법
- 1단계. Flake에 입력 추가
- 2단계. Home Manager 모듈 활성화

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


NixOS를 사용하거나 Nix 패키지 매니저를 선호하는 사용자를 위해 `nix-openclaw` 모듈을 제공합니다. 선언적 방식으로 OpenClaw를 재현 가능하게 관리할 수 있습니다.

---

## ❄️ 설치 방법

이제 차근차근 진행해보겠습니다.
### 1단계. Flake에 입력 추가

`flake.nix` 파일에 OpenClaw 입력을 추가합니다.

아래 예시를 참고하세요:
```nix
{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    openclaw.url = "github:openclaw/nix-openclaw";
  };
}
```

### 2단계. Home Manager 모듈 활성화

Home Manager 설정에서 모듈을 불러오고 활성화합니다.

아래 예시를 참고하세요:
```nix
{ inputs, pkgs, ... }: {
  imports = [ inputs.openclaw.homeManagerModules.default ];

  services.openclaw = {
    enable = true;
    package = inputs.openclaw.packages.${pkgs.system}.default;
    # 포트 설정 (기본값: 18789)
    port = 18789;
    # 온보딩 후 데몬 자동 시작
    autoStart = true;
  };
}
```

### 3단계. 적용

아래 명령어를 터미널에 입력하세요:
```bash
home-manager switch
```

---

## ✨ 이점

| 항목 | 설명 |
|------|------|
| **재현성** | 어디서든 동일한 버전과 설정으로 실행 |
| **선언적 관리** | 설정 파일 한 곳에서 전체 환경 정의 |
| **자동 업데이트** | `nix flake update` 한 줄로 최신 버전 유지 |
| **시스템 통합** | systemd 서비스로 자동 등록 및 관리 |
| **롤백 가능** | 이전 버전으로 언제든 되돌릴 수 있음 |

---

## 🔄 버전 업데이트

아래 명령어를 터미널에 입력하세요:
```bash
# Flake 입력 업데이트
nix flake update

# Home Manager 재적용
home-manager switch
```

---

## 🩺 문제 해결

아래 명령어를 터미널에 입력하세요:
```bash
# systemd 서비스 상태 확인
systemctl --user status openclaw

# 로그 확인
journalctl --user -u openclaw -f

# 수동으로 openclaw 실행
openclaw doctor
```

---

> 관련 가이드: [설치 개요](/install/) | [Linux 플랫폼 가이드](/platforms/linux)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [Linux 플랫폼 가이드](/platforms/linux) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
