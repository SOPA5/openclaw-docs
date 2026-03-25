---
title: 시스템 프롬프트
sidebar_label: 시스템 프롬프트
sidebar_position: 5
---

# 시스템 프롬프트 (System Prompt)

시스템 프롬프트는 에이전트의 성격, 역할, 사용 가능한 도구의 작동 방식을 정의하는 핵심 명령문입니다.

## 🛠️ 동적 프롬프트 생성 (Dynamic Generation)​

OpenClaw의 시스템 프롬프트는 고정되어 있지 않습니다. 상황에 따라 다음과 같은 정보가 자동으로 결합되어 생성됩니다.

- 에이전트 정의(Definition): 사용자가 지정한 에이전트의 기본 성격 (예: "너는 파이썬 전문가야").

- 도구 매뉴얼(Tool Definitions): 사용 가능한 각 도구(Browser, CLI 등)를 어떻게 쓰는지에 대한 상세한 가이드.

- 환경 제약 사항(Constraints): "파일 수정은 특정 폴더 내에서만 해"와 같은 보안 규칙.

- 프롬프트 템플릿(Identity Templates): OpenClaw가 표준으로 제공하는 최신 에이전트 행동 지침.

---

## 🎨 에이전트 성격 수정하기​

여러분이 만든 특정 에이전트에게 특별한 임무를 주고 싶다면 `systemPrompt` 설정을 수정하세요.

```
agents:
my-dev-agent:
systemPrompt:|
너는 전문 프론트엔드 개발자야.
모든 답변은 한국어로 하고, 코드를 짤 때는 항상 최신 React 패턴을 사용해줘.

```

## 🔍 투명성​

에이전트가 어떤 프롬프트를 가지고 답변하고 있는지 궁금하다면 로그를 확인해 보세요. AI 모델에게 전달된 최종 프롬프트 전문이 기록됩니다. 이는 에이전트가 왜 그렇게 행동했는지 디버깅하는 데 큰 도움이 됩니다.

컨텍스트 관리 (Context)
(/concepts/context)다음
세션 관리 (Sessions)
(/concepts/sessions)

- 🛠️ 동적 프롬프트 생성 (Dynamic Generation)

- 🎨 에이전트 성격 수정하기

- 🔍 투명성

Docs

- 시작하기 (/start/getting-started)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)

More

- GitHub (https://github.com/openclaw/openclaw)

Copyright © 2026 OpenClaw. Built with Docusaurus.

제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)

