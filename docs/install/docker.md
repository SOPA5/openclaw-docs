---
title: Docker
sidebar_label: Docker
sidebar_position: 3
---

# Docker 설치 가이드

이 문서에서는 OpenClaw를 설치하고 준비하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 1. Gateway (중앙 통로) 컨테이너 실행
- 빠른 실행
- Docker Compose 사용 (권장)

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


OpenClaw를 Docker 환경에서 사용하는 방법은 두 가지입니다:

1. **Gateway를 컨테이너로 실행** — 서버 환경에서 격리된 상태로 운영
2. **에이전트 도구 샌드박스로 활용** — 코드 실행 시 호스트 시스템 보호

---


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 1. Gateway (중앙 통로) 컨테이너 실행

서버 환경에서 OpenClaw Gateway를 Docker로 띄울 때 사용합니다.

### 빠른 실행

아래 명령어를 터미널에 입력하세요:
```bash
docker run -d \
  --name openclaw-gateway \
  -p 18789:18789 \
  -v ~/.openclaw:/root/.openclaw \
  openclaw/gateway:latest
```

### Docker Compose 사용 (권장)

아래 예시 설정을 참고하세요:
```yaml
# docker-compose.yml
services:
  gateway:
    image: openclaw/gateway:latest
    ports:
      - "18789:18789"
    volumes:
      - ~/.openclaw:/root/.openclaw
    restart: always
```

```bash
docker compose up -d
```

### 특정 버전 고정

아래 예시 설정을 참고하세요:
```yaml
image: openclaw/gateway:2026.3.23
```

---

## 2. 에이전트 샌드박스로 활용 (Safe Execution)

에이전트가 코드를 실행하거나 브라우저를 제어할 때, 호스트 시스템을 보호하기 위해 Docker를 샌드박스로 사용할 수 있습니다.

### 샌드박스 활성화

아래 명령어를 터미널에 입력하세요:
```bash
openclaw configure set sandbox.enabled true
openclaw configure set sandbox.provider docker
```

또는 `~/.openclaw/openclaw.json`에서 직접 설정:

아래 예시 설정을 참고하세요:
```json
{
  "sandbox": {
    "enabled": true,
    "provider": "docker"
  }
}
```

### 주요 이점

- **격리된 환경**: 에이전트가 실행하는 코드가 메인 OS에 영향을 주지 않음
- **일관성**: 어느 OS에서든 동일한 Linux 기반 샌드박스에서 도구 실행
- **자동 정리**: 작업 완료 후 컨테이너 자동 삭제

---

## 🐳 이미지 정보

| 이미지 | 포함 내용 |
|--------|---------|
| `openclaw/gateway:latest` | 핵심 Gateway 서비스 엔진 |
| `openclaw/sandbox:latest` | 도구 실행용 런타임 (Node, Python, Playwright) |

---

## 🔧 헬스체크 설정

아래 예시 설정을 참고하세요:
```yaml
services:
  gateway:
    image: openclaw/gateway:latest
    ports:
      - "18789:18789"
    volumes:
      - ~/.openclaw:/root/.openclaw
    restart: always
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:18789/health"]
      interval: 30s
      timeout: 10s
      retries: 3
```

---

> 관련 가이드: [설치 개요](/install/) | [Gateway (중앙 통로) 보안](/gateway/security)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [Gateway (중앙 통로) 보안](/gateway/security) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
