---
title: 게이트웨이 개요
sidebar_label: 게이트웨이 개요
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Advanced** |
| 읽는 목적 | 운영 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `gateway/index` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 게이트웨이 및 운영 (Gateway (중앙 통로) & Ops)

이 문서에서는 OpenClaw Gateway가 어떻게 동작하는지 배웁니다.

## 📌 이 문서에서 배우는 것
- Gateway가 하는 일
- 설치와 운영의 최신 기본 흐름
- 운영할 때 꼭 알아둘 포인트

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw의 중심은 **Gateway**입니다. Gateway는 채널, 에이전트, 세션, 웹 UI, CLI, 모바일 node를 한곳에서 묶는 **단일 제어면(control plane)** 입니다. 사용자는 Telegram, Discord, WebChat, Control UI, macOS 앱, iOS/Android node처럼 서로 다른 진입점에서 OpenClaw를 만나지만, 실제 상태와 라우팅은 모두 Gateway가 관리합니다.


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## Gateway가 하는 일

Gateway는 크게 다섯 가지를 맡습니다.

- **채널 연결**: Telegram, WhatsApp, Discord 등 여러 채널에서 메시지를 받습니다.
- **세션 제어**: 사용자별/대화방별 세션을 만들고 이어붙이고 정리합니다.
- **에이전트 실행**: 메인 에이전트, 그룹 격리 세션, 서브에이전트, ACP 런타임 요청을 중계합니다.
- **도구 노출**: 파일 편집, 셸 실행, 브라우저 자동화, 이미지/음성/문서 처리 같은 도구를 에이전트에 제공합니다.
- **운영 진입점 제공**: CLI, Web Control UI, API, node pairing, doctor 진단을 같은 런타임 위에서 동작하게 합니다.

즉, OpenClaw는 “각 앱마다 따로 에이전트가 있는 구조”가 아니라, **하나의 Gateway 위에 여러 인터페이스가 붙는 구조**로 이해하면 가장 정확합니다.

## 설치와 운영의 최신 기본 흐름

공식 문서 기준 권장 설치 흐름은 다음과 같습니다.

아래 명령어를 터미널에 입력하세요:
```bash
# 1. npm으로 설치 (공식 기본 방법)
npm install -g openclaw@latest

# 2. 온보딩
openclaw onboard --install-daemon

# 3. 설치 검증 3단계
openclaw --version
openclaw doctor
openclaw gateway status
```

:::tip 💡 설치 스크립트를 쓰는 경우
공식 설치 스크립트가 제공되는 경우, 아래 방법도 사용할 수 있습니다:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
:::

운영 중 자주 쓰는 명령은 아래 세 가지입니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway status
openclaw gateway install
openclaw doctor
```

- `openclaw gateway status`: Gateway가 살아 있는지, 어디에 바인딩되어 있는지 확인합니다.
- `openclaw gateway install`: 서비스/daemon 설치를 직접 수행할 때 사용합니다.
- `openclaw doctor`: 설정, 권한, 연결, 보안 상태를 점검하고 복구 방향을 안내합니다.

## 운영할 때 꼭 알아둘 포인트

### 1. Gateway는 항상 켜져 있는 서비스로 보는 것이 맞습니다

개발 중 잠깐 수동 실행할 수는 있지만, 실사용 환경에서는 daemon 또는 서비스로 설치해 두는 것이 기본입니다.

### 2. 로컬 우선, 원격은 명시적으로 여는 구조입니다

기본적으로는 loopback(예: `127.0.0.1`)에 바인딩하고, 외부 접근이 필요할 때만 인증과 프록시를 추가하는 방식이 안전합니다. 자세한 내용은 [원격 접근](/gateway/remote)에서 설명합니다.

### 3. 보안은 “토큰 하나”보다 정책 조합이 중요합니다

실무에서는 다음 조합으로 보안을 봐야 합니다.

- `auth.mode`
- 채널별 페어링 정책
- `allowFrom` 같은 IP/네트워크 제한
- 도구 정책과 샌드박스
- `openclaw doctor`를 통한 정기 감사

자세한 내용은 [보안](/gateway/security), [샌드박싱](/gateway/sandboxing) 문서를 참고하세요.

## Gateway (중앙 통로) 아래에 매달리는 구성요소

Gateway를 기준으로 보면 OpenClaw 문서의 큰 축이 자연스럽게 정리됩니다.

- **원격 연결** → [원격 접근](/gateway/remote)
- **보안/감사** → [보안](/gateway/security)
- **도구 격리** → [샌드박싱](/gateway/sandboxing)
- **플러그인/MCP 확장** → [MCP](/gateway/mcp)
- **외부 연동** → [API](/gateway/api)
- **제품 기능 개요** → [기능](/concepts/features)
- **전체 구조** → [아키텍처](/concepts/architecture)

## 한 줄 요약

OpenClaw를 이해하는 가장 좋은 출발점은 이것입니다.

> **OpenClaw = self-hosted Gateway 중심의 멀티채널·멀티에이전트 제어면**

이 관점만 잡히면 채널, 세션, node, 도구, API, Web UI가 왜 한 제품 안에서 자연스럽게 연결되는지 훨씬 쉽게 보입니다.

## 🎯 다음 단계

- 다음으로 [원격 접근](/gateway/remote) 문서를 읽어보세요.
- 다음으로 [보안](/gateway/security) 문서를 읽어보세요.
- 다음으로 [샌드박싱](/gateway/sandboxing) 문서를 읽어보세요.
