---
title: 자주 묻는 질문 (FAQ)
sidebar_label: FAQ
sidebar_position: 1
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 지원 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `help/faq` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 자주 묻는 질문 (FAQ)

이 문서에서는 자주 헷갈리는 질문의 답을 빠르게 찾는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 설치/초기 실행
- Q. 설치가 안 돼요.
- Q. 대시보드나 명령어가 안 열려요.

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


이 문서는 OpenClaw 학습 게시판용 **트러블슈팅 허브**입니다. 문제가 생기면 아래 순서대로 보면 됩니다.

- 설치가 안 된다 → [설치/초기 실행](#설치초기-실행)
- 채널 연결이 안 된다 → [채널 연결 문제](#채널-연결-문제)
- 모델이 응답하지 않는다 → [모델/인증 문제](#모델인증-문제)
- 전체 시스템이 멈춘 것 같다 → [게이트웨이 문제](#게이트웨이-문제)


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 설치/초기 실행

### Q. 설치가 안 돼요.

가장 먼저 공식 권장 설치 흐름을 다시 확인하세요.

아래 명령어를 터미널에 입력하세요:
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
openclaw onboard --install-daemon
```

확인 순서:
1. Node 버전이 **Node 24 권장 / Node 22.16+ 지원** 범위인지 확인
2. 설치 후 `openclaw gateway status` 실행
3. 문제가 있으면 `openclaw doctor` 실행

### Q. 대시보드나 명령어가 안 열려요.

- 설치는 되었지만 Gateway가 안 떠 있으면 명령은 일부 동작해도 실제 채널 응답은 안 됩니다.
- 먼저 아래 명령으로 상태를 확인하세요.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway status
```

### Q. 새 기기에서 다시 시작하려면 무엇부터 보면 되나요?

- 설치 스크립트 실행
- `openclaw onboard --install-daemon`
- 대시보드 또는 첫 채널 연결
- 채널 연결 전 모델 인증부터 먼저 점검

## 채널 연결 문제

### Q. 어떤 채널로 시작하는 게 가장 쉬운가요?

보통은 [Telegram](/channels/telegram)이 가장 빠릅니다. 그다음이 [WhatsApp](/channels/whatsapp)입니다.

### Q. 채널은 하나만 연결할 수 있나요?

아니요. OpenClaw는 하나의 Gateway에 여러 채널을 동시에 붙일 수 있습니다.

### Q. 그룹 채팅에서 봇이 너무 자주 반응해요.

그룹 운영에서는 아래 3가지를 먼저 정리하세요.

- DM 페어링 우선
- `allowFrom`으로 허용 사용자 제한
- mention/reply 규칙 설정

자세한 방향은 각 채널 문서 하단의 **보안 설정** 섹션을 참고하세요.

### Q. Apple 메시지/iMessage를 쓰고 싶어요.

신규 구성이라면 [BlueBubbles](/channels/bluebubbles)를 먼저 보세요. [iMessage](/channels/imessage)는 legacy 참고 문서 성격이 더 강합니다.

### Q. 회사 메신저에 붙이고 싶어요.

조직 환경에 따라 아래 경로를 먼저 보세요.

- Google Workspace 중심: [Google Chat](/channels/google-chat)
- Microsoft 365 중심: [Microsoft Teams](/channels/ms-teams)
- 협업형 서버/커뮤니티: [Slack](/channels/slack), [Discord](/channels/discord)

## 모델/인증 문제

### Q. 어떤 모델 제공자로 시작하는 게 좋나요?

가장 무난한 시작점은 아래 중 하나입니다.

- 고품질 범용: [Anthropic](/providers/anthropic)
- 범용+생태계: [OpenAI](/providers/openai)
- 멀티모달/Google 생태계: [Google Gemini](/providers/google-gemini)
- 여러 모델 실험: [OpenRouter](/providers/openrouter)

### Q. 문서에서 보던 옛 모델명이 안 보입니다.

최신 기준에서는 과거 예시 대신 아래처럼 이해하세요.

- `claude-3-5-sonnet` → **Claude 4 계열**
- `gpt-4o` → **GPT-5 계열**
- `gemini-1.5` → **Gemini 3 계열**

### Q. Anthropic은 API key만 되나요?

아니요. 최신 기준에서는 **OAuth/구독 인증이 우선 강조**되고, 필요하면 API key도 지원합니다. 자세한 내용은 [Anthropic](/providers/anthropic) 문서를 보세요.

### Q. OpenAI는 Codex/OAuth도 포함되나요?

네. 최신 기준에서는 **OAuth / Codex 인증 흐름**도 중요한 경로입니다. 자세한 내용은 [OpenAI](/providers/openai) 문서를 보세요.

### Q. 로컬에서 모델을 돌리고 싶어요.

[로컬 모델](/providers/local-models) 문서를 보세요. 대표 경로는 Ollama, vLLM, SGLang입니다.

## 게이트웨이 문제

### Q. 에이전트가 아예 응답하지 않아요.

가장 먼저 확인할 것:

1. `openclaw gateway status`
2. 채널 연결 상태
3. 모델 인증 상태
4. 최근에 설치/설정을 바꿨는지 여부

### Q. Gateway가 중심이라는 말이 무슨 뜻인가요?

OpenClaw는 **Gateway가 세션, 라우팅, 채널 연결을 중앙에서 관리하는 구조**입니다. 그래서 문제가 생기면 채널만 보지 말고 Gateway (중앙 통로) 상태를 함께 봐야 합니다.

### Q. 무엇이 문제인지 모르겠어요.

아래 순서로 좁혀보면 됩니다.

1. 설치 문제인지 확인
2. 채널 문제인지 확인
3. 모델 인증 문제인지 확인
4. 마지막으로 Gateway 자체 상태 확인

## 빠른 점검 체크리스트

아래 명령어를 터미널에 입력하세요:
```bash
openclaw gateway status
openclaw doctor
```

그리고 아래 문서를 순서대로 확인하세요.

1. [채널 개요](/channels/)
2. [모델 제공자 개요](/providers/)
3. [Telegram](/channels/telegram) 또는 [WhatsApp](/channels/whatsapp)
4. [Anthropic](/providers/anthropic) 또는 [OpenAI](/providers/openai)

## 추가로 보면 좋은 문서

- [시작하기](/start/getting-started)
- [페어링](/start/pairing)
- [채널 개요](/channels/)
- [모델 제공자 개요](/providers/)

## 🎯 다음 단계

- 다음으로 [Telegram](/channels/telegram) 문서를 읽어보세요.
- 다음으로 [WhatsApp](/channels/whatsapp) 문서를 읽어보세요.
- 다음으로 [BlueBubbles](/channels/bluebubbles) 문서를 읽어보세요.
