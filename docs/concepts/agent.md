---
title: 에이전트
sidebar_label: 에이전트
sidebar_position: 3
---

-  (/)

- 개념 (Concepts)

- 에이전트 런타임 (Agent Runtime)

# 에이전트 런타임 (Agent Runtime)

에이전트 런타임은 AI 모델이 여러분의 환경에서 실제로 행동하고 결정을 내리는 실행 환경입니다.

## ⚙️ 실행 사이클: Plan-Act-Observe​ (#️-실행-사이클-plan-act-observe)

OpenClaw 에이전트는 다음의 3단계 루프를 계속 반복합니다.

- Plan (계획): 사용자의 요청을 분석하고, 현재 도구들을 활용해 어떤 순서로 작업을 처리할지 계획을 세웁니다.

- Act (실행): 계획된 도구(파일 수정, 브라우저 클릭 등)를 실제로 호출합니다.

- Observe (관찰): 도구의 실행 결과(에러 메시지, 캡처된 화면 등)를 살펴보고 다음 단계가 필요한지 판단합니다.

---

## 🛡️ 보안 및 샌드박스 (Sandboxing)​ (#️-보안-및-샌드박스-sandboxing)

에이전트가 위험한 코드를 실행하거나 시스템을 망가뜨리는 것을 방지하기 위해 런타임은 격리될 수 있습니다.

- 로컬 런타임: 내 프로젝트 폴더에서 직접 작업합니다. 속도가 가장 빠릅니다.

- Docker 샌드박스: 별도의 컨테이너 내부에서 작업합니다. 안전하며 환경 오염이 없습니다. 상세 가이드 (/install/docker)

## 🏗️ 주요 구성 요소​ (#️-주요-구성-요소)

- Workspace (작업 공간): 에이전트가 접근할 수 있는 파일 시스템의 범위입니다.

- Toolbox (도구 상자): 에이전트에게 허용된 API 모음입니다. (예: `web-search`, `playwright`)

- Isolation Level (격리 수준): 읽기 전용 모드 또는 전체 권한 모드 설정.

## 🔄 상태 관리​ (#-상태-관리)

런타임은 각 요청마다 새로운 인스턴스로 생성되지만, Session 개념을 통해 이전 대화의 문맥을 공유합니다. 이를 통해 연속적인 작업 처리가 가능해집니다.

아키텍처 개요 (Architecture)
(/concepts/architecture)다음
컨텍스트 관리 (Context)
(/concepts/context)

- ⚙️ 실행 사이클: Plan-Act-Observe (#️-실행-사이클-plan-act-observe)

- 🛡️ 보안 및 샌드박스 (Sandboxing) (#️-보안-및-샌드박스-sandboxing)

- 🏗️ 주요 구성 요소 (#️-주요-구성-요소)

- 🔄 상태 관리 (#-상태-관리)

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
