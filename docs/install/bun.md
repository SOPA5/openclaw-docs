---
title: Bun
sidebar_label: Bun
sidebar_position: 6
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | Bun 환경에서 OpenClaw 설치 가능 여부와 흐름 확인하기 |
| 추천 환경 | Bun이 이미 깔린 JavaScript 개발 환경 |
| 현재 위치 | `install/bun` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Bun 기반 실행 (실험적)

이 문서에서는 Bun으로 OpenClaw를 실행하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- Bun이 무엇인지
- 설치 방법
- `bun x openclaw gateway` 실행 방법
- 언제 Node.js로 돌아가야 하는지

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

OpenClaw는 최신 JavaScript 런타임인 Bun을 통한 실행을 **실험적**으로 지원합니다. 빠른 시작 속도와 가벼운 동작이 필요할 때 시도해볼 수 있습니다.

:::caution 아직 실험적입니다
Bun 지원은 현재 **실험적(Experimental)** 단계입니다.
일부 플러그인이나 기능은 Node.js와 다르게 동작할 수 있습니다.
안정적인 운영이 더 중요하다면 **Node 24 + npm 설치**를 권장합니다.
:::

## ⚡ 설치 및 실행

### 1단계. Bun 설치

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://bun.sh/install | bash
```

설치 후 셸을 다시 열거나 아래 명령으로 반영합니다.

```bash
source ~/.bashrc  # 또는 ~/.zshrc
bun --version
```

### 2단계. OpenClaw 실행

OpenClaw CLI를 Bun 런타임 위에서 직접 실행합니다.

아래 명령어를 터미널에 입력하세요:
```bash
bun x openclaw gateway
```

이 명령은 **전역 설치 없이도** Bun으로 OpenClaw를 바로 실행해 보는 방법입니다.

## 📈 성능 이점

- **빠른 부팅**: 게이트웨이 초기화 속도가 빠를 수 있습니다.
- **메모리 효율**: 큰 세션을 다룰 때 가벼울 수 있습니다.
- **기본 지원 API**: Bun의 내장 기능을 활용해 가볍게 동작할 수 있습니다.

## ⚠️ 알려진 제한사항

- 일부 네이티브 Node.js 모듈이 Bun에서 호환되지 않을 수 있음
- 일부 채널 플러그인이 Bun 환경에서 충분히 검증되지 않았을 수 있음
- 문제 발생 시 Node.js 환경으로 전환하는 것이 더 빠를 수 있음

## 🔄 Node.js로 전환

Bun 환경에서 문제가 생기면 Node.js 기반으로 전환하세요.

아래 명령어를 터미널에 입력하세요:
```bash
npm install -g openclaw@latest
openclaw doctor
```

:::tip 처음 테스트는 이렇게 하세요
1. `bun --version` 확인
2. `bun x openclaw gateway` 실행
3. 문제가 생기면 바로 Node.js 경로로 전환

이 순서가 가장 덜 헷갈립니다.
:::

## ✅ 성공하면 이렇게 보입니다

- `bun --version`이 정상 출력됩니다.
- `bun x openclaw gateway`가 실행됩니다.
- 실험적 경로로 OpenClaw를 빠르게 테스트할 수 있습니다.

> 관련 가이드: [설치 개요](/install/) | [설치 스크립트 상세](/install/installer)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [설치 스크립트 상세](/install/installer) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
