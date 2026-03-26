---
title: 설정 레퍼런스
sidebar_label: 설정 레퍼런스
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate → Advanced** |
| 읽는 목적 | `openclaw.json`의 모든 주요 설정 키를 한눈에 파악하기 |
| 추천 환경 | Gateway가 설치된 환경, 편집기 열어두기 |
| 현재 위치 | `gateway/config-reference` |
| 파일 경로 | `~/.openclaw/openclaw.json` |

:::tip 이 문서의 핵심 한 줄
**`openclaw.json` 하나가 OpenClaw 전체를 제어합니다** — 이 파일 구조를 알면 Gateway를 마음대로 커스터마이징할 수 있어요.
:::

# 설정 레퍼런스 (Configuration Reference)

이 문서에서는 `openclaw.json`의 주요 설정 키를 모두 정리합니다.

## 📌 이 문서에서 배우는 것
- `openclaw.json`의 전체 구조와 각 섹션 역할
- `gateway`, `agents`, `channels`, `models`, `session`, `tools` 섹션별 상세 설명
- 각 키의 타입, 기본값, 실제 사용 예시
- 실전 설정 스니펫 모음

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

---

## 📁 파일 위치와 편집 방법

```bash
# 설정 파일 위치
~/.openclaw/openclaw.json

# 설정 유효성 검사 (편집 후 꼭 실행!)
openclaw config validate

# 설정 항목 직접 수정 (CLI 사용 권장)
openclaw config set gateway.port 18789

# 현재 설정 확인
openclaw config get gateway
```

:::caution 편집 전 주의!
직접 파일을 편집할 때는 **Gateway를 먼저 중지**하는 게 안전해요. 실행 중에 편집하면 충돌이 날 수 있거든요.
```bash
openclaw gateway stop
# 편집 작업...
openclaw gateway start
```
:::

---

## 📦 전체 섹션 구조

```json
{
  "meta": { ... },          // 버전 정보 (자동 관리)
  "gateway": { ... },       // 🌐 Gateway 서버 설정
  "agents": { ... },        // 🤖 에이전트 동작 설정
  "channels": { ... },      // 📱 채널 (Telegram, Slack 등) 설정
  "models": { ... },        // 🧠 AI 모델 제공자 설정
  "session": { ... },       // 💬 세션 관리 설정
  "tools": { ... },         // 🔧 도구 정책 설정
  "auth": { ... },          // 🔑 인증 설정
  "hooks": { ... },         // 🎣 이벤트 Hooks 설정
  "skills": { ... },        // 📚 스킬 설정
  "plugins": { ... },       // 🧩 플러그인 설정
  "acp": { ... },           // 🤝 ACP 런타임 설정
  "secrets": { ... }        // 🔒 시크릿 관리 설정
}
```

---

## 1. 🌐 gateway — Gateway 서버 설정

Gateway의 네트워크 동작 방식을 제어합니다.

### 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `port` | number | `18789` | Gateway가 열리는 포트 번호 |
| `mode` | string | `"local"` | 실행 모드: `"local"` \| `"remote"` |
| `bind` | string | `"loopback"` | 바인딩 방식: `"loopback"` \| `"all"` \| `"auto"` |
| `auth.mode` | string | `"token"` | 인증 방식: `"token"` \| `"none"` |
| `trustedProxies` | string[] | `["127.0.0.1"]` | 신뢰할 프록시 IP 목록 |
| `channelHealthCheckMinutes` | number | `5` | 채널 상태 점검 주기 (분) |

### 설정 예시

```json
{
  "gateway": {
    "port": 18789,
    "mode": "local",
    "bind": "loopback",
    "auth": {
      "mode": "token",
      "token": {
        "source": "file",
        "provider": "filemain",
        "id": "/gateway/auth/token"
      }
    },
    "trustedProxies": ["127.0.0.1", "::1"],
    "channelHealthCheckMinutes": 5,
    "tailscale": {
      "mode": "off"
    }
  }
}
```

:::tip 로컬 vs 원격 운영
- **로컬 전용**: `bind: "loopback"` — 내 컴퓨터에서만 접근 가능, 가장 안전!
- **원격 운영**: `bind: "all"` + 인증 설정 필수 → [원격 접근 문서](/gateway/remote) 참고
:::

---

## 2. 🤖 agents — 에이전트 동작 설정

에이전트의 모델, 컨텍스트, 압축, 워크스페이스 등 핵심 동작을 설정합니다.

### agents.defaults 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `model.primary` | string | - | 기본 AI 모델 ID |
| `model.fallbacks` | string[] | `[]` | 주 모델 실패 시 대체 모델 목록 |
| `workspace` | string | `~/.openclaw/workspace` | 에이전트 워크스페이스 경로 |
| `bootstrapMaxChars` | number | `16000` | 부트스트랩 파일 1개 최대 크기 |
| `bootstrapTotalMaxChars` | number | `100000` | 부트스트랩 파일 전체 최대 크기 |
| `contextTokens` | number | `600000` | 컨텍스트 윈도우 크기 (토큰) |

### compaction (압축 설정)

컨텍스트가 가득 찼을 때 어떻게 줄일지 설정합니다.

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `compaction.mode` | string | `"auto"` | 압축 모드: `"auto"` \| `"safeguard"` \| `"off"` |
| `compaction.model` | string | 기본 모델 | 압축에 사용할 모델 |
| `compaction.reserveTokensFloor` | number | `50000` | 압축 후 최소 보존 토큰 |
| `compaction.recentTurnsPreserve` | number | `10` | 압축해도 보존할 최근 대화 수 |

### contextPruning (컨텍스트 정리)

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `contextPruning.mode` | string | `"cache-ttl"` | 정리 방식: `"cache-ttl"` \| `"auto"` \| `"off"` |
| `contextPruning.ttl` | string | `"30m"` | 캐시 TTL (예: `"15m"`, `"1h"`) |
| `contextPruning.keepLastAssistants` | number | `3` | 보존할 최근 어시스턴트 응답 수 |
| `contextPruning.softTrimRatio` | number | `0.3` | 부드러운 트리밍 비율 |

### 설정 예시

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-opus-4-6",
        "fallbacks": [
          "openai/gpt-5.4",
          "anthropic/claude-sonnet-4-6"
        ]
      },
      "workspace": "/home/user/.openclaw/workspace",
      "bootstrapMaxChars": 16000,
      "bootstrapTotalMaxChars": 100000,
      "contextTokens": 600000,
      "compaction": {
        "mode": "safeguard",
        "model": "openai/gpt-5.4",
        "reserveTokensFloor": 50000,
        "recentTurnsPreserve": 12,
        "memoryFlush": {
          "enabled": true
        }
      },
      "contextPruning": {
        "mode": "cache-ttl",
        "ttl": "15m",
        "keepLastAssistants": 3,
        "softTrimRatio": 0.3,
        "hardClear": {
          "enabled": true
        }
      },
      "heartbeat": {
        "enabled": true,
        "intervalMs": 14400000,
        "model": "openai/gpt-5.4",
        "lightContext": true
      }
    }
  }
}
```

:::tip 멀티 에이전트 설정
`agents.list` 배열에 여러 에이전트를 정의할 수 있어요.
```json
{
  "agents": {
    "list": [
      { "id": "main", "name": "자비스", "model": { "primary": "anthropic/claude-opus-4-6" } },
      { "id": "worker", "name": "프랭키", "model": { "primary": "anthropic/claude-sonnet-4-6" } }
    ]
  }
}
```
:::

---

## 3. 📱 channels — 채널 설정

Telegram, Slack 등 메시지 채널을 설정합니다.

### channels.telegram 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `enabled` | boolean | `false` | 채널 활성화 |
| `botToken` | object | - | 봇 토큰 (SecretRef 방식 권장) |
| `dmPolicy` | string | `"pairing"` | DM 정책: `"pairing"` \| `"allowlist"` \| `"open"` |
| `allowFrom` | string[] | `[]` | 허용할 사용자 ID 목록 |
| `groupPolicy` | string | `"disabled"` | 그룹 정책: `"disabled"` \| `"allowlist"` |
| `streaming` | string | `"partial"` | 스트리밍: `"partial"` \| `"full"` \| `"off"` |

### 설정 예시

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": {
        "source": "env",
        "provider": "default",
        "id": "TELEGRAM_BOT_TOKEN"
      },
      "dmPolicy": "pairing",
      "allowFrom": ["123456789"],
      "groupPolicy": "disabled",
      "streaming": "partial",
      "actions": {
        "reactions": true,
        "sendMessage": true,
        "deleteMessage": true,
        "sticker": true
      }
    },
    "slack": {
      "enabled": false,
      "botToken": {
        "source": "env",
        "id": "SLACK_BOT_TOKEN"
      }
    }
  }
}
```

:::caution 보안 팁
`botToken`은 절대 값을 직접 적지 마세요! 환경 변수(`source: "env"`)나 파일 시크릿(`source: "file"`)으로 관리하세요.
:::

---

## 4. 🧠 models — AI 모델 제공자 설정

어떤 AI 모델을 사용할지, 어떤 제공자를 통해 연결할지 설정합니다.

### models 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `mode` | string | `"merge"` | 모델 목록 처리: `"merge"` \| `"override"` |
| `providers` | object | `{}` | 제공자별 설정 |

### 제공자별 설정 구조

```json
{
  "models": {
    "mode": "merge",
    "providers": {
      "anthropic": {
        "baseUrl": "https://api.anthropic.com",
        "apiKey": {
          "source": "env",
          "id": "ANTHROPIC_API_KEY"
        },
        "models": [
          {
            "id": "claude-opus-4-6",
            "name": "Claude Opus 4.6",
            "contextWindow": 1000000,
            "maxTokens": 128000
          }
        ]
      },
      "openai": {
        "baseUrl": "https://api.openai.com/v1",
        "api": "openai-responses",
        "apiKey": {
          "source": "env",
          "id": "OPENAI_API_KEY"
        },
        "models": [
          {
            "id": "gpt-5.4",
            "name": "GPT-5.4",
            "contextWindow": 1048576,
            "maxTokens": 32768
          }
        ]
      },
      "google": {
        "baseUrl": "https://generativelanguage.googleapis.com",
        "apiKey": {
          "source": "env",
          "id": "GOOGLE_API_KEY"
        }
      }
    }
  }
}
```

:::tip 모델 별칭(alias) 설정
자주 쓰는 모델에 별칭을 달아두면 편해요:
```json
{
  "agents": {
    "defaults": {
      "models": {
        "anthropic/claude-opus-4-6": { "alias": "opus" },
        "anthropic/claude-sonnet-4-6": { "alias": "sonnet" }
      }
    }
  }
}
```
이렇게 하면 `/model opus`처럼 짧게 쓸 수 있어요!
:::

---

## 5. 💬 session — 세션 관리 설정

대화 세션의 수명, 유지 방식, 자동 초기화 등을 설정합니다.

### 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `dmScope` | string | `"per-channel-peer"` | DM 세션 범위 |
| `reset.mode` | string | `"daily"` | 세션 초기화 방식: `"daily"` \| `"manual"` \| `"off"` |
| `reset.atHour` | number | `4` | 일일 초기화 시각 (24시간, UTC 기준) |
| `threadBindings.enabled` | boolean | `true` | 스레드 바인딩 활성화 |
| `threadBindings.idleHours` | number | `24` | 스레드 비활성 후 만료 시간 (시간) |
| `maintenance.mode` | string | `"enforce"` | 유지관리 모드: `"enforce"` \| `"warn"` \| `"off"` |
| `maintenance.pruneAfter` | string | `"30d"` | 이 기간 지난 세션 정리 |
| `maintenance.maxEntries` | number | `500` | 최대 세션 항목 수 |
| `maintenance.rotateBytes` | string | `"10mb"` | 로그 파일 rotate 기준 크기 |
| `maintenance.maxDiskBytes` | string | `"500mb"` | 세션 디스크 최대 사용량 |

### 설정 예시

```json
{
  "session": {
    "dmScope": "per-channel-peer",
    "reset": {
      "mode": "daily",
      "atHour": 4
    },
    "threadBindings": {
      "enabled": true,
      "idleHours": 24,
      "maxAgeHours": 0
    },
    "maintenance": {
      "mode": "enforce",
      "pruneAfter": "14d",
      "maxEntries": 200,
      "rotateBytes": "10mb",
      "maxDiskBytes": "500mb",
      "highWaterBytes": "400mb"
    }
  }
}
```

:::tip 세션 초기화 시각
`reset.atHour`는 **UTC 기준**이에요. 한국 시간(KST, UTC+9)으로 새벽 1시에 초기화하려면 `atHour: 16`으로 설정하면 돼요!
:::

---

## 6. 🔧 tools — 도구 정책 설정

에이전트가 사용할 수 있는 도구의 허용 범위와 보안 정책을 설정합니다.

### 주요 설정 키

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `profile` | string | `"full"` | 도구 프로파일: `"full"` \| `"restricted"` \| `"minimal"` |
| `exec.strictInlineEval` | boolean | `false` | 인라인 코드 실행 제한 |
| `exec.applyPatch.workspaceOnly` | boolean | `false` | patch 적용을 워크스페이스 내부만 허용 |
| `fs.workspaceOnly` | boolean | `false` | 파일 시스템 접근을 워크스페이스 내부만 허용 |
| `web.search` | object | `{}` | 웹 검색 설정 |
| `web.fetch.firecrawl` | object | - | Firecrawl 크롤링 설정 |

### 설정 예시

```json
{
  "tools": {
    "profile": "full",
    "web": {
      "search": {},
      "fetch": {
        "firecrawl": {
          "apiKey": {
            "source": "env",
            "provider": "default",
            "id": "FIRECRAWL_API_KEY"
          }
        }
      }
    },
    "exec": {
      "strictInlineEval": true,
      "applyPatch": {
        "workspaceOnly": true
      }
    },
    "fs": {
      "workspaceOnly": true
    }
  }
}
```

:::tip 보안 권장 설정
외부에 공개하는 Gateway라면 도구 범위를 제한하세요:
```json
{
  "tools": {
    "profile": "restricted",
    "exec": { "strictInlineEval": true },
    "fs": { "workspaceOnly": true }
  }
}
```
:::

---

## 🗂️ 기타 주요 섹션

### auth — 인증 설정

```json
{
  "auth": {
    "profiles": {
      "main": {
        "provider": "anthropic",
        "mode": "oauth"
      }
    },
    "cooldowns": {
      "default": "5m"
    }
  }
}
```

### acp — ACP 런타임 설정

```json
{
  "acp": {
    "enabled": true,
    "defaultAgent": "opencode",
    "allowedAgents": ["opencode", "claude", "codex", "gemini"],
    "maxConcurrentSessions": 5,
    "stream": {
      "enabled": true
    }
  }
}
```

| 키 | 타입 | 기본값 | 설명 |
|----|------|--------|------|
| `enabled` | boolean | `false` | ACP 런타임 활성화 |
| `defaultAgent` | string | - | 기본 ACP 에이전트 ID |
| `allowedAgents` | string[] | `[]` | 허용할 ACP 에이전트 목록 |
| `maxConcurrentSessions` | number | `3` | 최대 동시 ACP 세션 수 |

### hooks — 이벤트 Hooks 설정

```json
{
  "hooks": {
    "enabled": true,
    "token": "MY_WEBHOOK_SECRET",
    "path": "/hooks",
    "allowedAgentIds": ["main"],
    "internal": {
      "enabled": true
    }
  }
}
```

---

## 📋 실전 설정 스니펫 모음

### 최소 설정 (처음 시작할 때)

```json
{
  "gateway": {
    "port": 18789,
    "bind": "loopback"
  },
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-opus-4-6"
      }
    }
  },
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": {
        "source": "env",
        "id": "TELEGRAM_BOT_TOKEN"
      }
    }
  }
}
```

### 프로덕션 보안 강화 설정

```json
{
  "gateway": {
    "port": 18789,
    "bind": "loopback",
    "auth": {
      "mode": "token"
    }
  },
  "tools": {
    "profile": "restricted",
    "exec": { "strictInlineEval": true },
    "fs": { "workspaceOnly": true }
  },
  "channels": {
    "telegram": {
      "dmPolicy": "pairing",
      "allowFrom": ["YOUR_TELEGRAM_ID"],
      "groupPolicy": "disabled"
    }
  }
}
```

### 멀티 에이전트 + 자동화 설정

```json
{
  "agents": {
    "defaults": {
      "model": {
        "primary": "anthropic/claude-opus-4-6",
        "fallbacks": ["openai/gpt-5.4"]
      },
      "heartbeat": {
        "enabled": true,
        "intervalMs": 14400000,
        "lightContext": true
      }
    },
    "list": [
      {
        "id": "main",
        "name": "Jarvis",
        "model": { "primary": "anthropic/claude-opus-4-6" }
      },
      {
        "id": "worker",
        "name": "Franky",
        "model": { "primary": "anthropic/claude-sonnet-4-6" }
      }
    ]
  },
  "hooks": {
    "enabled": true,
    "token": "MY_SECRET",
    "path": "/hooks"
  }
}
```

---

## ✅ 설정 검증 체크리스트

설정을 바꿨을 때 이것만 확인하면 돼요!

```bash
# 1. 설정 유효성 검사
openclaw config validate

# 2. 전체 상태 점검
openclaw doctor

# 3. Gateway 상태 확인
openclaw gateway status

# 4. 채널 연결 확인
openclaw channels status --probe

# 5. (선택) SIGUSR1로 hot-reload (Gateway 재시작 없이 설정 반영)
kill -USR1 $(cat ~/.openclaw/gateway.pid)
```

:::note 📚 더 알아보기
- [게이트웨이 개요](/gateway/) — Gateway 구조와 동작 방식
- [보안 설정](/gateway/security) — 보안 강화 전체 가이드
- [자동화 기능](/gateway/automation) — Cron/Webhook/Heartbeat 설정
- [원격 접근](/gateway/remote) — 외부에서 Gateway 접근하기
:::

## 🎯 다음 단계

- [자동화 기능](/gateway/automation)으로 Cron, Webhook, Heartbeat를 실제로 설정해보세요.
- [보안 설정](/gateway/security)으로 Gateway를 더 안전하게 만드세요.
- [MCP](/gateway/mcp)로 외부 도구를 연결해보세요.
