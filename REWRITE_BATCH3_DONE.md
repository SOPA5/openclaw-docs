# REWRITE BATCH 3 DONE

## 수정 파일 목록

### 게이트웨이
- docs/gateway/index.md
- docs/gateway/remote.md
- docs/gateway/security.md
- docs/gateway/sandboxing.md
- docs/gateway/mcp.md
- docs/gateway/api.md

### 개념
- docs/concepts/features.md
- docs/concepts/architecture.md
- docs/concepts/agent.md
- docs/concepts/context.md
- docs/concepts/system-prompt.md
- docs/concepts/sessions.md
- docs/concepts/memory.md

### 도구
- docs/tools/index.md
- docs/tools/browser.md
- docs/tools/lobster.md
- docs/tools/sandbox.md
- docs/tools/subagents.md
- docs/tools/apply-patch.md

## 주요 변경사항 요약

- OFFICIAL_REFERENCE.md 기준으로 전체 서술을 최신 OpenClaw 구조에 맞게 전면 재작성
- Gateway를 단일 제어면(control plane)으로 재정의
- 최신 운영 명령어 `openclaw gateway status`, `openclaw gateway install`, `openclaw doctor` 반영
- 원격 접근 문서를 Tailscale Serve/Funnel, `auth.mode`, loopback bind, `allowFrom` 중심으로 재구성
- 보안 문서를 DM pairing, 네트워크 제한, doctor 감사 중심으로 재작성
- 샌드박싱 문서를 sandbox mode / tool policy / elevated 구분 중심으로 재작성
- MCP 문서를 plugins / skills / mcp 현재 구조 관점으로 재정리
- API 문서를 Tools Invoke / OpenAI 호환 / OpenResponses API 기준으로 개정
- features 문서에 20개+ 채널, 34개+ 제공자, iOS/Android node, Canvas, TTS, Voice 등 최신 기능 반영
- architecture 문서에 Gateway 중심 mermaid 다이어그램 추가
- agent/context/system-prompt/sessions/memory 문서를 최신 개념 체계에 맞게 전면 재작성
- tools/index 문서를 실제 tool taxonomy 기준으로 정리
- browser 문서를 openclaw 관리 브라우저, `profile="user"`, `snapshot`/`act` 패턴 중심으로 개정
- lobster 문서를 워크플로우/자동화 플러그인 위치로 재정의
- subagents 문서를 `sessions_spawn` 및 sessions_* / ACP runtime 기준으로 개정
- apply_patch 문서를 멀티 헝크 패치 도구로 재정의
