---
title: 브라우저
sidebar_label: 브라우저
sidebar_position: 2
---

# 브라우저 도구 (Browser Tool)

OpenClaw 에이전트는 내장된 Playwright 엔진을 사용하여 실제 브라우저를 열고 웹 사이트와 상호작용할 수 있습니다.

## 🌐 작동 방식​

에이전트가 브라우저 도구를 호출하면 백그라운드에서 Chromium 인스턴스가 생성됩니다. 에이전트는 다음과 같은 동작을 수행합니다.

- 특정 URL로 이동 (`goto`)

- 검색 결과 또는 페이지 텍스트 읽기 (`content`)

- 버튼 클릭 및 폼 입력 (`click`, `type`)

- 현재 화면 스크린샷 캡처 (`screenshot`)

---

## 🔒 프라이버시 및 격리​

- 별도 프로필: 여러분의 개인 브라우저(Chrome, Safari 등)와는 완전히 분리된 전용 프로필(`openclaw`) 환경에서 돌아갑니다. 여러분의 북마크나 저장된 비밀번호에 에이전트가 접근하지 못합니다.

- 인증 세션: 필요 시 특정 사이트(예: GitHub, Gmail)에 에이전트를 로그인시킨 뒤 세션을 유지하여 반복적인 작업을 시킬 수 있습니다.

## 🛠️ 고급 활용 (CDP 연결)​

이미 실행 중인 브라우저를 제어하고 싶다면 **Chrome DevTools Protocol (CDP)**을 통해 연결할 수 있습니다.

```
openclaw configure set tools.browser.cdpUrl "http://localhost:9222"

```

## ⚠️ 리눅스 환경 주의사항​

리눅스 서버(데스크탑 환경이 없는 경우)에서 브라우저 도구를 사용하려면 `xvfb` 또는 `--headless` 옵션 설정이 필요할 수 있습니다.

도구 및 기술 (Tools)
(/tools/)다음
Lobster: 규격화된 워크플로우 엔진
(/tools/lobster)

- 🌐 작동 방식

- 🔒 프라이버시 및 격리

- 🛠️ 고급 활용 (CDP 연결)

- ⚠️ 리눅스 환경 주의사항

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

