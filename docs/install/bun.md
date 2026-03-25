---
title: Bun
sidebar_label: Bun
sidebar_position: 6
---

# Bun 기반 실행 (실험적)

OpenClaw는 최신 JavaScript 런타임인 Bun을 통한 실행을 실험적으로 지원합니다. 빠른 시작 속도와 고성능을 원하는 사용자에게 적합합니다.

> ⚠️ **주의**: Bun 지원은 현재 **실험적(Experimental)** 단계입니다. 일부 플러그인이나 기능이 Node.js 환경과 다르게 작동할 수 있습니다. 안정적인 운영이 필요하다면 Node 24 + npm 설치를 권장합니다.

---

## ⚡ 설치 및 실행

### 1단계. Bun 설치

```bash
curl -fsSL https://bun.sh/install | bash
```

설치 후 셸을 재시작하거나:

```bash
source ~/.bashrc  # 또는 ~/.zshrc
bun --version
```

### 2단계. OpenClaw 실행

Bun 런타임에서 OpenClaw CLI를 명시적으로 실행합니다.

```bash
# Gateway 실행
bun x openclaw gateway

# 또는 전역 설치 후 실행
bun add -g openclaw@latest
openclaw onboard --install-daemon
```

---

## 📈 성능 이점

| 항목 | 내용 |
|------|------|
| **빠른 부팅** | Gateway 초기화 속도가 Node.js 대비 약 2~3배 빠름 |
| **메모리 효율** | 대규모 에이전트 세션 처리 시 메모리 소모 감소 |
| **내장 API** | Bun의 내장 SQLite 및 웹 API 활용으로 가벼운 동작 |

---

## ⚠️ 알려진 제한사항

- 일부 네이티브 Node.js 모듈이 Bun에서 호환되지 않을 수 있음
- 채널 플러그인 중 일부가 Bun 환경에서 테스트되지 않음
- 문제 발생 시 Node.js 환경으로 전환 권장

---

## 🔄 Node.js로 전환

Bun 환경에서 문제가 발생하면 Node.js 기반으로 전환합니다:

```bash
# Node.js 환경으로 재설치
npm install -g openclaw@latest
openclaw doctor
```

---

> 관련 가이드: [설치 개요](/install/) | [설치 스크립트 상세](/install/installer)
