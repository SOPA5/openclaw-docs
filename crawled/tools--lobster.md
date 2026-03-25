<!-- source: https://openclaw-wheat.vercel.app/tools/lobster -->

-  (/)

- 도구 (Tools)

- Lobster: 규격화된 워크플로우 엔진

# Lobster: 규격화된 워크플로우 엔진

Lobster는 OpenClaw 내부에서 복잡하고 비결정론적인 작업들을 하나의 확정적인 파이프라인으로 묶어 실행하는 전용 워크플로우 런타임입니다.

## 🏗️ Lobster가 해결하는 문제​ (#️-lobster가-해결하는-문제)

AI 에이전트와의 일반적인 채팅은 자유롭지만, 반복되는 복잡한 작업(예: 기사 요약 후 특정 이메일로 발송)은 매번 지시하기 번거롭고 에러가 발생할 확률이 높습니다. Lobster는 이를 프로그래밍 방식의 워크플로우로 정의하여 해결합니다.

## 🚀 주요 특징​ (#-주요-특징)

- Typed Input/Output: 모든 단계의 입력과 출력이 규격화되어 있습니다.

- State Persistence (상태 보존): 작업 중간에 연결이 끊기거나 에러가 나도, 마지막으로 성공한 '체크포인트'부터 다시 시작할 수 있습니다.

- Human-in-the-loop: 중요한 단계(예: 결제, 삭제) 전에는 반드시 사용자의 버튼 클릭 승인을 대기하는 '게이트'를 둘 수 있습니다.

---

## 🛠️ 활용 예시​ (#️-활용-예시)

- GitHub 이슈 트래커: 새로운 이슈가 올라오면 자동으로 요약하여 슬랙으로 보내고, 관련 코드를 분석하여 제안합니다.

- 배포 파이프라인: 코드를 빌드하고, 테스트가 통과하면 스테이징 서버에 배포한 뒤 결과를 브리핑합니다.

## ⚙️ 실행 방법​ (#️-실행-방법)

CLI에서 Lobster 전용 작업(Task)을 호출하여 시작할 수 있습니다.

```
openclaw task run my-automated-workflow

```

브라우저 도구 (Browser Tool)
(/tools/browser)다음
도구 샌드박스 (Sandbox)
(/tools/sandbox)

- 🏗️ Lobster가 해결하는 문제 (#️-lobster가-해결하는-문제)

- 🚀 주요 특징 (#-주요-특징)

- 🛠️ 활용 예시 (#️-활용-예시)

- ⚙️ 실행 방법 (#️-실행-방법)

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
