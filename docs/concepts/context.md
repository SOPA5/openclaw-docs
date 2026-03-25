---
title: 컨텍스트
sidebar_label: 컨텍스트
sidebar_position: 4
---

-  (/)

- 개념 (Concepts)

- 컨텍스트 관리 (Context)

# 컨텍스트 관리 (Context)

에이전트가 단순히 답변만 하는 것이 아니라, '상황을 파악'하고 똑똑하게 행동하기 위해 사용하는 컨텍스트(Context) 시스템을 설명합니다.

## 🧩 컨텍스트의 3요소​ (#-컨텍스트의-3요소)

OpenClaw는 AI 모델에게 다음 정보를 실시간으로 조합하여 전달합니다.

### 1. 상황 인식 (Situational Awareness)​ (#1-상황-인식-situational-awareness)

현재 에이전트가 어떤 환경에 있는지 알려줍니다.

- 현재 프로젝트의 파일 구조

- 현재 시간 및 날짜

- 사용 중인 운영체제 및 환경 변수

### 2. 세션 히스토리 (Session History)​ (#2-세션-히스토리-session-history)

현재 대화에서 오고 간 최근 메시지들입니다.

- 사용자의 질문과 에이전트의 이전 답변

- 방금 실행한 도구의 결과(출력물)

### 3. 지식 및 기억 (Memory)​ (#3-지식-및-기억-memory)

장기적으로 저장된 정보입니다.

- Memory 시스템 (/concepts/memory)에서 불러온 관련 정보

- 사용자가 에이전트에게 "기억해둬"라고 요청한 내용

---

## 🔄 컨텍스트 주입 방식​ (#-컨텍스트-주입-방식)

허브(Hub)는 에이전트를 깨울 때(Wake-up) 마다 현재 작업 공간을 스캔하여 '압축된 컨텍스트'를 생성합니다.

- 능동적인 스캔: 특정 파일이 수정되면 에이전트의 컨텍스트에 즉시 반영됩니다.

- 토큰 최적화: 너무 많은 정보를 다 주지 않고, 현재 작업과 가장 연관성 높은 파일들만 골라서 AI에게 보여줍니다.

## 💡 활용 팁​ (#-활용-팁)

에이전트가 상황 파악을 잘 못한다면 대화창에 **"현재 폴더 구조를 보여줘"**라고 지시하거나, 중요한 파일을 열어둔 채로(Focus) 대화를 시작해 보세요.

에이전트 런타임 (Agent Runtime)
(/concepts/agent)다음
시스템 프롬프트 (System Prompt)
(/concepts/system-prompt)

- 🧩 컨텍스트의 3요소 (#-컨텍스트의-3요소)
- 1. 상황 인식 (Situational Awareness) (#1-상황-인식-situational-awareness)

- 2. 세션 히스토리 (Session History) (#2-세션-히스토리-session-history)

- 3. 지식 및 기억 (Memory) (#3-지식-및-기억-memory)

- 🔄 컨텍스트 주입 방식 (#-컨텍스트-주입-방식)

- 💡 활용 팁 (#-활용-팁)

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
