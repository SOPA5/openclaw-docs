---
title: Ansible
sidebar_label: Ansible
sidebar_position: 5
---

# Ansible을 이용한 배포

여러 대의 서버를 관리하거나 보안이 강화된 전문 배포 환경을 구축할 때 Ansible Playbook을 활용할 수 있습니다.

---

## 🚀 배포 시작하기

### 1단계. 레포지토리 클론

```bash
git clone https://github.com/openclaw/ansible-openclaw
cd ansible-openclaw
```

### 2단계. 인벤토리 및 변수 설정

`inventory.ini`에 대상 서버를 등록합니다:

```ini
[openclaw_servers]
server1.example.com ansible_user=ubuntu
server2.example.com ansible_user=ubuntu
```

`vars.yml`에 필요한 설정을 입력합니다:

```yaml
openclaw_version: "2026.3.23"
openclaw_port: 18789
openclaw_workspace: "/home/ubuntu/.openclaw/workspace"
```

### 3단계. Playbook 실행

```bash
ansible-playbook -i inventory.ini site.yml
```

---

## 🛡️ 보안 우선 아키텍처

Ansible 모듈은 다음 보안 모범 사례를 자동으로 적용합니다.

| 항목 | 내용 |
|------|------|
| **UFW 방화벽** | 필수 포트(18789)만 허용, 나머지 차단 |
| **Tailscale 통합** | VPN망을 통한 안전한 접근 구성 |
| **systemd 서비스** | 장애 발생 시 자동 재시작 |
| **최소 권한 원칙** | 전용 서비스 계정으로 실행 |

---

## 📋 주요 기능

- **무중단 업데이트**: 기존 서비스를 안전하게 중단하고 새 버전 배포
- **다중 노드 관리**: 하나의 명령으로 여러 리전의 Gateway 동시 관리
- **로그 집계**: 중앙 로그 서버로 데이터 전송 구성
- **Node.js 버전 관리**: Node 24 설치 및 환경 구성 자동화

---

## 🔄 버전 업데이트

```bash
# vars.yml에서 버전 변경 후
ansible-playbook -i inventory.ini site.yml --tags=update
```

---

> 관련 가이드: [설치 개요](/install/) | [Linux 플랫폼 가이드](/platforms/linux)
