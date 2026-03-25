---
title: 샌드박싱
sidebar_label: 샌드박싱
sidebar_position: 4
---

# 운영 환경에서의 샌드박싱 (Sandboxing)

서버(Gateway) 운영자의 관점에서 에이전트의 도구 실행을 어떻게 물리적으로 격리하고 관리하는지 설명합니다.

## 🏗️ 샌드박스 아키텍처​

게이트웨이는 도구 실행 요청이 올 때마다 설정된 **프로바이더(Provider)**에 따라 실행을 중계합니다.
프로바이더격리 수준특징
Local (기본)낮음가장 빠름, 개발 생산성 높음
Docker높음완벽한 격리, 운영 환경 안정성 확보
GVisor (실험적)최고커널 레벨 격리, 고보안 환경용

---

## 🐳 Docker 샌드박스 운영 상세​

### 1. 이미지 관리​

게이트웨이는 실행 시 필요한 도구들이 포함된 `openclaw/sandbox` 이미지를 사용합니다.

- 커스텀 이미지가 필요하다면 `config.yml`에서 이미지를 변경할 수 있습니다.

### 2. 세션 상태 유지 (Persistence)​

- Isolated 모드: 도구 실행이 끝나면 컨테이너가 즉시 파괴됩니다. 보안상 가장 안전합니다.

- Persistent 모드: 특정 세션 동안 컨테이너를 유지하여, 설치한 패키지나 임시 파일이 유지되도록 합니다.

```
openclaw configure set sandbox.mode "persistent"

```

## 🔒 운영 중 주의사항​

- 리소스 제한: 에이전트가 무한 루프를 도는 등 자원을 독점하지 않도록 CPU/Memory 제한을 걸 수 있습니다 (`sandbox.limits.cpu: 1.0`).

- 네트워크 차단: 샌드박스 내부에서 외부 인터넷 접속을 금지하거나 특정 도메인만 허용하도록 화이트리스트를 운영하는 것을 권장합니다.

보안 감사 및 강화 (Security)
(/gateway/security)다음
MCP (Model Context Protocol) 연동
(/gateway/mcp)

- 🏗️ 샌드박스 아키텍처

- 🐳 Docker 샌드박스 운영 상세
- 1. 이미지 관리

- 2. 세션 상태 유지 (Persistence)

- 🔒 운영 중 주의사항

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


