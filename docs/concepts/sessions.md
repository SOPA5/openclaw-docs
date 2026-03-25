---
title: 세션
sidebar_label: 세션
sidebar_position: 6
---

# 세션 관리 (Sessions)

세션(Session)은 에이전트와 사용자가 나눈 하나의 대화 뭉치이자 작업 단위입니다.

## 🧱 세션의 역할​

- 격리: 각 대화(세션)는 독립적인 메모리와 작업 기록을 가집니다.

- 정리: 불필요하게 길어진 대화는 요약되거나 오래된 기록은 자동으로 아카이브됩니다.

- 워크스페이스 연동: 에이전트는 특정 세션 내에서 사용자의 파일을 보고 수정할 수 있습니다.

---

## 📂 세션 구조​

모든 세션 데이터는 로컬 환경에 저장됩니다.

- 경로: `~/.openclaw/sessions/`

- 형식: 각 세션은 고유 ID를 폴더명으로 가지며, 내부에는 대화 로그와 일시적인 작업 파일들이 저장됩니다.

## 🛠️ 세션 활용 가이드​

### 1. 세션 만기 및 정리 (Pruning)​

대화가 너무 길어지면 AI 모델의 컨텍스트 제한을 넘길 수 있습니다. OpenClaw는 다음 세 가지 방식으로 세션을 관리합니다.

- 자동 요약: 이전 대화 맥락을 짧게 요약하여 핵심만 남깁니다.

- 슬라이딩 윈도우: 가장 최근의 N개 메시지만 전달합니다.

- 압축(Compaction): 중복된 시스템 지시어나 도구 출력물을 줄입니다.

### 2. 세션 재활용​

이전에 하던 작업을 이어서 하고 싶다면 세션 ID를 지정하여 대화를 시작할 수 있습니다.

## ⚠️ 주의사항​

세션을 삭제하면 해당 대화의 맥락이 초기화됩니다. 중요한 작업 기록은 장기 기억(Memory) (/concepts/memory) 시스템으로 저장하도록 유도하세요.

시스템 프롬프트 (System Prompt)
(/concepts/system-prompt)다음
기억 시스템 (Memory)
(/concepts/memory)

- 🧱 세션의 역할

- 📂 세션 구조

- 🛠️ 세션 활용 가이드
- 1. 세션 만기 및 정리 (Pruning)

- 2. 세션 재활용

- ⚠️ 주의사항

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

