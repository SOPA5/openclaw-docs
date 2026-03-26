---
title: Docker
sidebar_label: Docker
sidebar_position: 3
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 설치 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `install/docker` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

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

:::tip 💡 왜 Compose를 쓰나요?
`docker run` 한 줄보다 **설정 파일로 관리**하면 나중에 수정, 재시작, 버전 교체가 훨씬 쉽습니다.
:::

아래 예시 설정을 참고하세요:
```yaml
# docker-compose.yml
services:
  gateway:
    image: openclaw/gateway:latest
    container_name: openclaw-gateway
    ports:
      - "18789:18789"
    volumes:
      - ~/.openclaw:/root/.openclaw
    restart: unless-stopped
    environment:
      - NODE_ENV=production
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:18789/health"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
```

```bash
# 컨테이너 시작
docker compose up -d

# 로그 확인
docker compose logs -f gateway

# 상태 확인
docker compose ps
```

### 특정 버전 고정

```yaml
image: openclaw/gateway:2026.3.23-2
```

:::tip 💡 버전 고정 권장
프로덕션 환경에서는 `latest` 대신 **특정 버전을 고정**하는 것을 강력히 권장합니다.
예상치 못한 업데이트로 인한 장애를 예방할 수 있습니다.
:::

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

## ✅ 성공 확인 3단계

Docker로 실행 후 반드시 아래 3단계로 동작을 확인하세요:

```bash
# 1. 컨테이너 상태 확인
docker compose ps
# NAME                STATUS        PORTS
# openclaw-gateway    Up (healthy)  0.0.0.0:18789->18789/tcp

# 2. 헬스체크 확인
curl http://localhost:18789/health
# {"status":"ok"}

# 3. CLI로 연결 확인
openclaw gateway status
# running
```

:::tip ✅ 성공하면 이렇게 보입니다
- `docker compose ps` → `Up (healthy)` 상태
- `curl http://localhost:18789/health` → `{"status":"ok"}` 응답
- `openclaw gateway status` → `running` 표시
:::

---

> 관련 가이드: [설치 개요](/install/) | [Gateway (중앙 통로) 보안](/gateway/security)

## 🎯 다음 단계

- 다음으로 [설치 개요](/install/) 문서를 읽어보세요.
- 다음으로 [Gateway (중앙 통로) 보안](/gateway/security) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
