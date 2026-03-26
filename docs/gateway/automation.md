---
title: 자동화 기능
sidebar_label: 자동화 기능
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate → Advanced** |
| 읽는 목적 | AI 에이전트가 "알아서" 일하게 만드는 자동화 도구 5가지를 모두 익히기 |
| 추천 환경 | Gateway가 daemon으로 실행 중인 환경 |
| 현재 위치 | `gateway/automation` |
| 선수 학습 | [게이트웨이 개요](/gateway/), [세션 개념](/concepts/sessions) |

:::tip 이 문서의 핵심 한 줄
**"한 번 설정해두면 AI가 알아서 일한다"** — 자동화 5가지 도구를 조합하면, 내가 자리를 비워도 에이전트가 바쁘게 움직입니다.
:::

# 자동화 기능 (Automation)

이 문서에서는 OpenClaw가 제공하는 자동화 도구를 배웁니다.

## 📌 이 문서에서 배우는 것
- Cron Jobs: 정해진 시간에 자동으로 실행하기
- Webhooks: 외부 시스템에서 신호 받기
- Heartbeat: 주기적으로 상태 점검하기
- Standing Orders: 에이전트에게 지속 권한 부여하기
- Hooks: 특정 이벤트에 반응하는 미니 스크립트

처음에는 낯설 수 있지만, 순서대로 보면 충분히 따라갈 수 있어요.

---

## 1. 🕐 Cron Jobs — 반복 작업 스케줄링

### 쉽게 이해하기

Cron Jobs는 **알람 시계**예요. "매일 아침 9시에 뉴스 요약해줘", "30분마다 이메일 확인해줘"처럼, **정해진 시간에 자동으로 에이전트를 깨워** 일을 시킵니다.

:::tip 💡 Cron vs Heartbeat — 헷갈릴 때!
| 상황 | 추천 |
|------|------|
| 매일 9시 정확히 리포트 발송 | **Cron** (정확한 시간 필요) |
| 30분마다 메일/캘린더 확인 | **Heartbeat** (여러 체크 묶기) |
| "20분 후에 알림 줘" 일회성 | **Cron** (`--at` 옵션) |
| 백그라운드 프로젝트 모니터링 | **Heartbeat** (컨텍스트 공유) |
:::

### 스케줄 3가지 종류

| kind | 설명 | 예시 |
|------|------|------|
| `at` | 특정 시간 **딱 한 번** 실행 | `"2026-04-01T09:00:00Z"` |
| `every` | 고정 간격으로 **반복** 실행 | `"30m"`, `"2h"` |
| `cron` | 리눅스 cron 표현식 | `"0 9 * * 1-5"` (평일 9시) |

### JSON 설정 예시

```json
// 📌 예시 1: 매일 아침 9시에 뉴스 요약 (cron 방식)
{
  "name": "Morning News Brief",
  "schedule": {
    "kind": "cron",
    "cron": "0 9 * * *",
    "tz": "Asia/Seoul"
  },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "오늘의 주요 뉴스를 요약해줘. 기술, 비즈니스 섹션 중심으로."
  },
  "delivery": {
    "mode": "announce",
    "channel": "telegram"
  }
}
```

```json
// 📌 예시 2: 30분 후 일회성 알림 (at 방식)
{
  "name": "Quick Reminder",
  "schedule": {
    "kind": "at",
    "at": "2026-04-01T10:30:00Z"
  },
  "sessionTarget": "main",
  "payload": {
    "kind": "systemEvent",
    "text": "미팅 준비 시작할 시간이야!"
  },
  "deleteAfterRun": true
}
```

```json
// 📌 예시 3: 매주 월요일 주간 리포트 (cron 방식)
{
  "name": "Weekly Report",
  "schedule": {
    "kind": "cron",
    "cron": "0 8 * * 1",
    "tz": "Asia/Seoul"
  },
  "sessionTarget": "session:weekly-report",
  "payload": {
    "kind": "agentTurn",
    "message": "이번 주 프로젝트 진행 현황을 정리해서 Slack에 올려줘."
  },
  "delivery": {
    "mode": "announce",
    "channel": "slack",
    "to": "channel:C1234567890"
  }
}
```

### CLI로 빠르게 추가하기

```bash
# 매일 아침 뉴스 요약 크론 추가
openclaw cron add \
  --name "Morning Brief" \
  --cron "0 9 * * *" \
  --tz "Asia/Seoul" \
  --session isolated \
  --message "오늘 뉴스 요약해줘" \
  --announce \
  --channel telegram

# 크론 목록 확인
openclaw cron list

# 즉시 실행 테스트
openclaw cron run <job-id>
```

:::note 크론 파일 저장 위치
크론 작업은 `~/.openclaw/cron/jobs.json`에 저장돼요. Gateway가 꺼져도 잃어버리지 않으니 안심하세요!
:::

---

## 2. 🔔 Webhooks — 외부 이벤트 트리거

### 쉽게 이해하기

Webhook은 **초인종** 같은 거예요. 외부 시스템(GitHub, Notion, 내 앱 등)이 "띵동~" 누르면, Gateway가 듣고 에이전트를 실행합니다. 내가 직접 버튼을 안 눌러도, 다른 시스템이 대신 신호를 보내줍니다.

### 설정 방법

```json
// openclaw.json 설정
{
  "hooks": {
    "enabled": true,
    "token": "나만-아는-비밀-토큰-123",
    "path": "/hooks",
    "allowedAgentIds": ["main", "hooks"]
  }
}
```

:::caution 보안 주의
`hooks.token`은 반드시 설정해야 해요. 이 토큰을 가진 사람은 Gateway에 명령을 보낼 수 있으니, 절대 공개하지 마세요!
:::

### 엔드포인트 2가지

**① `/hooks/wake` — 메인 에이전트 깨우기**

```bash
# GitHub에서 PR이 열렸을 때 에이전트에게 알리기
curl -X POST https://내서버.com/hooks/wake \
  -H "Authorization: Bearer 나만-아는-비밀-토큰-123" \
  -H "Content-Type: application/json" \
  -d '{"text": "새 PR이 열렸어: feat/user-auth. 검토 부탁해!", "mode": "now"}'
```

**② `/hooks/agent` — 특정 에이전트에게 작업 보내기**

```json
// POST /hooks/agent
{
  "message": "GitHub PR #42 리뷰해줘. 코드 품질 체크 중심으로.",
  "name": "GitHub PR Review",
  "agentId": "main",
  "deliver": true,
  "channel": "telegram",
  "timeoutSeconds": 120
}
```

### 실전 활용 예시

```javascript
// Node.js 앱에서 에러 발생 시 에이전트에게 알리기
app.use((err, req, res, next) => {
  fetch('https://내서버.com/hooks/wake', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer 나만-아는-비밀-토큰-123',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: `🚨 서버 에러 발생: ${err.message}\n경로: ${req.path}`,
      mode: 'now'
    })
  });
  res.status(500).json({ error: 'Internal Server Error' });
});
```

---

## 3. 💓 Heartbeat — 주기적 상태 점검

### 쉽게 이해하기

Heartbeat는 **심장 박동** 같아요. 에이전트가 주기적으로(기본 30분) 스스로 깨어나서, "지금 확인할 것 없나?" 하고 체크합니다. 이메일, 캘린더, 프로젝트 현황을 한 번에 배치로 확인하기 좋아요.

### 설정 방법

```json
// agents.list[n] 설정에서 heartbeat 구성
{
  "agents": {
    "defaults": {
      "heartbeat": {
        "enabled": true,
        "intervalMs": 1800000,
        "model": "openai/gpt-5.4",
        "lightContext": true,
        "systemPrompt": "지금 확인해야 할 중요한 일이 있으면 알려줘."
      }
    }
  }
}
```

| 설정 키 | 타입 | 기본값 | 설명 |
|---------|------|--------|------|
| `enabled` | boolean | `false` | Heartbeat 활성화 |
| `intervalMs` | number | `1800000` | 간격 (ms), 기본 30분 |
| `model` | string | 에이전트 기본 모델 | Heartbeat 전용 모델 지정 |
| `lightContext` | boolean | `false` | 가벼운 컨텍스트로 실행 (비용 절감) |
| `systemPrompt` | string | - | Heartbeat 전용 시스템 프롬프트 |

### 실전 활용 예시

```
HEARTBEAT.md (에이전트 워크스페이스 파일)

매 심장 박동마다 아래를 확인해:

1. 📬 중요 이메일이나 슬랙 메시지가 있으면 요약해줘
2. 📅 오늘/내일 캘린더 이벤트 있으면 미리 알려줘  
3. 🔥 프로젝트 GitHub에 새 이슈나 PR이 열렸으면 보고해줘
4. ⚡ 위 3가지 모두 없으면 조용히 있어도 돼

심장 박동 횟수: 4시간 간격
```

:::tip Heartbeat 비용 팁
`lightContext: true`로 설정하면 Heartbeat가 훨씬 저렴하게 실행돼요. 중요한 컨텍스트가 없어도 될 때는 꼭 켜두세요!
:::

---

## 4. 📋 Standing Orders — 지속 지시

### 쉽게 이해하기

Standing Orders는 에이전트에게 주는 **상설 명령서**예요. "매번 지시하지 않아도, 이런 상황이 오면 알아서 해줘"라고 미리 정해두는 거죠. 매주 리포트, 주기적 백업 알림 같은 반복 작업에 딱 맞아요.

### 어디에 작성하나요?

`AGENTS.md` 파일에 직접 작성하면 됩니다. 매 세션마다 자동으로 로드되기 때문에, 에이전트가 항상 이 명령서를 기억합니다.

```markdown
<!-- AGENTS.md 안에 작성 -->

## 상설 명령 (Standing Orders)

### 프로그램: 주간 프로젝트 리포트

**권한:** 데이터 수집, 리포트 작성, 팀에게 전달
**트리거:** 매주 금요일 오후 5시 (크론 작업으로 강제)
**승인 기준:** 일반 리포트는 승인 불필요. 이상 수치 발견 시 먼저 보고.
**에스컬레이션:** 데이터 소스 접근 불가 또는 이상 수치(±30%) 발생 시

### 실행 순서
1. GitHub에서 이번 주 커밋/PR/이슈 현황 수집
2. 지난주와 비교 분석
3. `reports/weekly/YYYY-MM-DD.md`에 저장
4. 팀 Slack 채널에 요약 전달
5. 완료 로그를 `logs/agent/` 에 기록

### 하지 말아야 할 것
- 외부 파트너에게 직접 발송 금지
- 원본 데이터 수정 금지
- 수치가 안 좋아 보여도 정확하게 보고할 것
```

### 에스컬레이션 규칙 예시

```markdown
## 긴급 에스컬레이션 조건

아래 상황이면 **즉시 사람에게 알리고 멈춰**:
- 서버 CPU 90% 이상 30분 지속
- 프로덕션 에러율 5% 초과
- 결제 실패 3건 연속 발생
```

---

## 5. 🎣 Hooks — 이벤트 후크

### 쉽게 이해하기

Hooks는 Gateway 안에서 특정 이벤트가 발생할 때 자동으로 실행되는 **미니 스크립트**예요. "/reset 명령을 실행하면 → 자동으로 메모리 저장", "세션이 시작되면 → 부트 파일 실행"처럼, **이벤트에 반응하는 작은 자동화 도구**입니다.

### 기본 제공 Hooks 4가지

| Hook 이름 | 언제 실행 | 하는 일 |
|-----------|-----------|---------|
| `session-memory` | `/new`, `/reset` 명령 시 | 세션 컨텍스트를 `memory/`에 저장 |
| `bootstrap-extra-files` | 세션 부트스트랩 시 | 추가 워크스페이스 파일 주입 |
| `command-logger` | 모든 명령 실행 시 | `logs/commands.log`에 기록 |
| `boot-md` | Gateway 시작 시 | `BOOT.md` 실행 |

### CLI로 관리하기

```bash
# 사용 가능한 Hooks 목록 확인
openclaw hooks list

# session-memory Hook 활성화
openclaw hooks enable session-memory

# Hook 상태 확인
openclaw hooks check

# 특정 Hook 상세 정보
openclaw hooks info session-memory
```

### JSON 설정 예시

```json
// openclaw.json hooks 설정
{
  "hooks": {
    "internal": {
      "enabled": true,
      "load": {
        "extraDirs": ["~/.openclaw/hooks/custom/"]
      }
    }
  }
}
```

:::note Hooks vs Webhooks 차이
- **Hooks**: Gateway *안에서* 이벤트에 반응 (예: /reset 명령 → 메모리 저장)
- **Webhooks**: *외부 시스템*이 Gateway를 호출 (예: GitHub → Gateway 깨우기)

헷갈리면 이렇게 기억하세요: Hooks는 **내부 반응**, Webhooks는 **외부 호출**!
:::

---

## 🗺️ 전체 자동화 지도

```text
외부 이벤트 → [Webhooks] → Gateway → 에이전트 실행
정해진 시간 → [Cron Jobs] → Gateway → 에이전트 실행
주기적 체크 → [Heartbeat] → 에이전트 (자동 깨어남)
지속 규칙 → [Standing Orders] → 에이전트 (상설 명령)
내부 이벤트 → [Hooks] → 미니 스크립트 실행
```

---

## ✅ 실전 활용 예시 모음

### 예시 1: 매일 아침 뉴스 브리핑 자동화

```json
{
  "name": "Morning News Brief",
  "schedule": { "kind": "cron", "cron": "0 8 * * 1-5", "tz": "Asia/Seoul" },
  "sessionTarget": "isolated",
  "payload": {
    "kind": "agentTurn",
    "message": "오늘 IT/비즈니스 뉴스 TOP 5를 한국어로 요약해줘. 각 뉴스에 핵심 포인트 2줄씩."
  },
  "delivery": { "mode": "announce", "channel": "telegram" }
}
```

### 예시 2: 매주 프로젝트 백업 알림

```json
{
  "name": "Weekly Backup Reminder",
  "schedule": { "kind": "cron", "cron": "0 18 * * 5", "tz": "Asia/Seoul" },
  "sessionTarget": "main",
  "payload": {
    "kind": "systemEvent",
    "text": "🗄️ 주간 백업 체크: GitHub repo 백업, DB 스냅샷, 설정 파일 백업 완료 여부 확인해줘."
  }
}
```

### 예시 3: 서버 에러 알림 (Webhook + 에이전트)

```bash
# 서버에서 에러 발생 시 에이전트가 로그 분석 후 Telegram으로 보고
curl -X POST https://내서버.com/hooks/agent \
  -H "Authorization: Bearer MY_SECRET_TOKEN" \
  -d '{
    "message": "서버 에러 로그 분석해줘: ERROR [2026-04-01] DB 연결 실패 x5",
    "deliver": true,
    "channel": "telegram"
  }'
```

### 예시 4: Heartbeat + Standing Orders 조합

```markdown
<!-- AGENTS.md -->
## 심장 박동 지시 (Heartbeat Standing Order)

매 심장 박동마다:
1. GitHub 알림 확인 → 중요한 것만 요약
2. 슬랙 @멘션 확인 → 빠른 답장 필요한 것 플래그
3. 캘린더 1시간 내 이벤트 있으면 미리 알림
4. 위 모두 없으면 조용히 대기
```

---

:::note 📚 더 알아보기
- [설정 레퍼런스](/gateway/config-reference) — openclaw.json 전체 설정 키 정리
- [게이트웨이 API](/gateway/api) — REST API 엔드포인트 상세
- [보안 상세](/gateway/security-advanced) — Sandbox, Tool Policy, Secrets 관리
:::

## 🎯 다음 단계

- [설정 레퍼런스](/gateway/config-reference)로 자동화 관련 설정 키를 전체 확인하세요.
- [게이트웨이 보안](/gateway/security)으로 Webhook 토큰 보안을 강화하세요.
- [MCP](/gateway/mcp)로 외부 도구와 자동화를 연결해보세요.
