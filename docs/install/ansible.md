---
title: Ansible
sidebar_label: Ansible
sidebar_position: 5
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 설치 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `install/ansible` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Ansible을 이용한 배포

이 문서에서는 여러 대의 서버에 OpenClaw를 자동으로 배포하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 Ansible을 쓰면 좋은가
- 레포지토리 준비
- 인벤토리와 변수 설정
- Playbook 실행

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊

여러 대의 서버를 관리하거나, 보안이 강화된 전문 배포 환경을 만들고 싶을 때 Ansible Playbook을 활용할 수 있습니다.

## 언제 쓰면 좋은가

- 서버가 2대 이상이다
- 같은 설정을 여러 번 반복하고 싶지 않다
- 사람이 손으로 하나씩 설치하는 실수를 줄이고 싶다
- 팀이 같은 방식으로 배포해야 한다

:::tip 쉽게 말하면
Ansible은 **여러 컴퓨터에 같은 일을 자동으로 시키는 리모컨**이라고 생각하면 됩니다.
:::

## 🛡️ 보안 우선 아키텍처

제공되는 Ansible 구성은 보통 아래 같은 보안 모범 사례를 함께 적용하는 데 도움이 됩니다.

- **UFW 방화벽 설정**: 꼭 필요한 포트만 열기
- **Tailscale 통합**: 외부에 크게 열지 않고 안전하게 접속하기
- **systemd 서비스 등록**: 장애가 나도 자동 재시작되게 하기

## 🚀 배포 시작하기

### 1단계. 레포지토리 준비

OpenClaw Ansible 설정이 포함된 레포지토리를 가져옵니다.

아래 명령어를 터미널에 입력하세요:
```bash
git clone https://github.com/openclaw/ansible-openclaw
cd ansible-openclaw
```

### 2단계. 인벤토리 및 변수 설정

`inventory.ini`에 대상 서버를 적습니다.

아래 예시를 참고하세요:
```ini
[openclaw_servers]
server1.example.com ansible_user=ubuntu
server2.example.com ansible_user=ubuntu
```

`vars.yml`에는 필요한 설정값을 넣습니다.

아래 예시를 참고하세요:
```yaml
openclaw_port: 18789
openclaw_workspace: "/home/ubuntu/.openclaw/workspace"
```

:::tip 처음에는 서버 1대로 시작하세요
처음부터 여러 서버를 한 번에 배포하면, 어디서 잘못됐는지 찾기 어렵습니다.
먼저 1대로 성공 확인 후 서버를 늘리는 것이 쉽습니다.
:::

### 3단계. Playbook 실행

아래 명령어를 터미널에 입력하세요:
```bash
ansible-playbook -i inventory.ini site.yml
```

## 📋 주요 기능

- **반복 배포 자동화**: 같은 과정을 여러 서버에 똑같이 적용
- **다중 노드 관리**: 한 번에 여러 서버 관리
- **보안 설정 묶음 적용**: 방화벽, 서비스 등록, 접근 방식 정리
- **운영 표준화**: 팀원마다 설치 결과가 달라지는 문제 줄이기

## ⚠️ 주의할 점

- Ansible은 편하지만, 잘못된 설정이 여러 서버에 한 번에 적용될 수 있습니다.
- 그래서 처음에는 **테스트 서버**에서 먼저 검증하는 것이 좋습니다.
- 실제 운영 전에는 `inventory.ini` 대상 서버와 변수값을 꼭 다시 확인하세요.

## ✅ 성공하면 이렇게 보입니다

- `ansible-playbook -i inventory.ini site.yml`가 오류 없이 끝납니다.
- 대상 서버에서 OpenClaw 서비스가 준비됩니다.
- 서버마다 같은 구조로 배포되어 운영이 쉬워집니다.

> 관련 가이드: [설치 개요](/install/) | [Linux 플랫폼 가이드](/platforms/linux)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [Linux 플랫폼 가이드](/platforms/linux) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
