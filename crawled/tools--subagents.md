<!-- source: https://openclaw-wheat.vercel.app/tools/subagents -->

-  (/)

- 도구 (Tools)

- 서브 에이전트 (Sub-agents)

# 서브 에이전트 (Sub-agents)

서브 에이전트(Sub-agents)는 하나의 메인 에이전트가 복잡한 작업을 효율적으로 처리하기 위해 백그라운드에서 병렬로 실행하는 독립적인 에이전트 세션입니다.

## 🤖 왜 서브 에이전트가 필요한가요?​ (#-왜-서브-에이전트가-필요한가요)

메인 에이전트(예: 채팅 중인 에이전트)가 시간이 오래 걸리는 작업(예: 전체 코드 베이스 읽기, 대규모 데이터 크롤링)을 하는 동안, 사용자와의 대화는 끊기지 않아야 합니다. 이럴 때 메인 에이전트는 작업을 "서브 에이전트"에게 위임하고 계속 대화를 이어갈 수 있습니다.

---

## 🛠️ 주요 기능 및 명령어​ (#️-주요-기능-및-명령어)

### 1. 독립된 실행 (Parallel execution)​ (#1-독립된-실행-parallel-execution)

서브 에이전트는 메인 에이전트와 별도의 컨텍스트와 도구 상자를 가질 수 있습니다.

### 2. 관리 명령어​ (#2-관리-명령어)

채팅창에서 다음 명령어로 서브 에이전트의 상태를 확인할 수 있습니다.

- `/subagents`: 현재 실행 중인 모든 서브 에이전트 목록 확인.

- `/subagents stop <id>`: 특정 서브 에이전트 작업 중단.

- `/subagents logs <id>`: 서브 에이전트가 현재 무엇을 하고 있는지 로그 확인.

### 3. 결과 보고 (Final Report)​ (#3-결과-보고-final-report)

서브 에이전트가 작업을 마치면 자동으로 메인 채팅방에 최종 보고서를 제출합니다.

## 💡 활용 예시​ (#-활용-예시)

- 코드 리뷰: "내가 짠 코드를 리뷰하는 동안, 서브 에이전트를 만들어서 공식 문서를 좀 더 찾아봐 줘."

- 데이터 수집: "관련 기사 10개를 찾는 동안 나랑은 다른 아이디어를 논의해보자."

도구 샌드박스 (Sandbox)
(/tools/sandbox)다음
apply_patch 도구
(/tools/apply-patch)

- 🤖 왜 서브 에이전트가 필요한가요? (#-왜-서브-에이전트가-필요한가요)

- 🛠️ 주요 기능 및 명령어 (#️-주요-기능-및-명령어)
- 1. 독립된 실행 (Parallel execution) (#1-독립된-실행-parallel-execution)

- 2. 관리 명령어 (#2-관리-명령어)

- 3. 결과 보고 (Final Report) (#3-결과-보고-final-report)

- 💡 활용 예시 (#-활용-예시)

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
