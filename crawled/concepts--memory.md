<!-- source: https://openclaw-wheat.vercel.app/concepts/memory -->

-  (/)

- 개념 (Concepts)

- 기억 시스템 (Memory)

# 기억 시스템 (Memory)

OpenClaw의 기억(Memory) 시스템은 에이전트가 과거의 대화, 사용자의 취향, 그리고 중요한 정보를 영구적으로 보존하게 해줍니다.

## 🏦 기억의 원천 (Source of Truth)​ (#-기억의-원천-source-of-truth)

OpenClaw는 복잡한 데이터베이스 대신 사람이 읽기 편한 Markdown 파일을 기본 저장소로 사용합니다.

- `MEMORY.md`: 사용자에 대한 핵심 정보(이름, 취향, 프로젝트 개요 등)를 저장하는 핵심 파일입니다. 작업 공간 루트나 `~/.openclaw`에 위치합니다.

- 일일 로그 (Daily Logs): 매일 발생한 중요한 사건이나 지식들을 날짜별로 기록합니다.

---

## 🧠 기억의 종류​ (#-기억의-종류)

### 1. 단기 기억 (Context Window)​ (#1-단기-기억-context-window)

현재 대화 세션 중인 내용입니다. 세션이 유지되는 동안만 유효합니다.

### 2. 장기 기억 (Persistent Memory)​ (#2-장기-기억-persistent-memory)

대화가 끝나도 사라지지 않는 정보입니다. OpenClaw는 에이전트가 스스로 판단하여 "이건 나중에 또 쓸 것 같아"라고 생각되는 정보를 `MEMORY.md`에 추가하라고 권고합니다.

## 🔍 기억 검색 (Retrieval)​ (#-기억-검색-retrieval)

기억의 양이 많아지면 모든 것을 AI에게 한꺼번에 줄 수 없습니다.

- RAG (Retrieval-Augmented Generation): 사용자 질문과 가장 연관성 높은 기억 조각들만 뽑아서 AI에게 전달합니다.

- 하이브리드 검색: 단순 키워드 검색과 의미 기반 검색(Vector Search)을 동시에 사용하여 정확도를 높입니다.

## 🛠️ 사용자가 기억을 관리하는 법​ (#️-사용자가-기억을-관리하는-법)

- 직접 수정: 메모리는 마크다운 파일이므로 언제든 여러분이 직접 열어서 수정하거나 삭제할 수 있습니다.

- 지시하기: "내 이름은 철수라는 걸 기억해줘"라고 직접 에이전트에게 지시하면 에이전트가 스스로 메모리 파일을 업데이트합니다.

세션 관리 (Sessions)
(/concepts/sessions)다음
도구 및 기술 (Tools)
(/tools/)

- 🏦 기억의 원천 (Source of Truth) (#-기억의-원천-source-of-truth)

- 🧠 기억의 종류 (#-기억의-종류)
- 1. 단기 기억 (Context Window) (#1-단기-기억-context-window)

- 2. 장기 기억 (Persistent Memory) (#2-장기-기억-persistent-memory)

- 🔍 기억 검색 (Retrieval) (#-기억-검색-retrieval)

- 🛠️ 사용자가 기억을 관리하는 법 (#️-사용자가-기억을-관리하는-법)

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
