---
title: 게이트웨이 개요
sidebar_label: 게이트웨이 개요
sidebar_position: 1
---

# 게이트웨이 및 운영 (Gateway & Ops)

OpenClaw의 모든 통신과 에이전트 수명을 관리하는 게이트웨이(Gateway) 프로세스와 이를 안정적으로 운영하기 위한 환경 설정 가이드를 제공합니다.

## 🏗️ 게이트웨이란 무엇인가요?​

게이트웨이는 OpenClaw 시스템의 핵심 엔진이자 중앙 컨트롤 센터입니다.

- 항상 가동 (Daemon): 백그라운드에서 상주하며 메시징 채널(Slack 등)로부터 들어오는 요청을 기다립니다.

- 상태 관리: 진행 중인 에이전트 세션, 메모리, 설정값의 일관성을 유지합니다.

- 인터페이스 제공: CLI, 웹 대시보드, 그리고 외부 API가 소통할 수 있는 창구 역할을 합니다.

---

## 🚀 주요 운영 섹션​

### 📡 원격 접속 및 활성화 (/gateway/remote)​

로컬에 설치된 게이트웨이에 모바일 앱이나 외부 기기로부터 안전하게 연결하는 방법을 설명합니다.

### 🛡️ 보안 강화 (Security Audit) (/gateway/security)​

인증 정보 유출 방지 및 시스템 권한 점검을 통해 안전한 운영 환경을 구축합니다.

### 🐳 샌드박스 운영 (/gateway/sandboxing)​

에이전트의 도구 실행을 Docker 등으로 완벽하게 격리하여 서버를 보호합니다.

### 🔌 API 및 프로토콜 (/gateway/api)​

REST API 및 MCP(Model Context Protocol)를 통해 외부 서비스를 연동하는 기술 스펙을 다룹니다.

## ⚙️ 런타임 갱신 (Hot-reload)​

OpenClaw 게이트웨이는 설정 파일(`config.yml`)의 변경 사항을 자동으로 감지합니다. 서비스를 껐다 켤 필요 없이 즉시 새로운 설정이 반영됩니다.

게이트웨이 수명 주기 (Lifecycle)
(/platforms/mac-child-process)다음
원격 접속 및 접근 관리
(/gateway/remote)

- 🏗️ 게이트웨이란 무엇인가요?

- 🚀 주요 운영 섹션
- 📡 원격 접속 및 활성화

- 🛡️ 보안 강화 (Security Audit)

- 🐳 샌드박스 운영

- 🔌 API 및 프로토콜

- ⚙️ 런타임 갱신 (Hot-reload)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


