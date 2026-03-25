---
title: OpenClaw란?
sidebar_label: OpenClaw란?
sidebar_position: 7
---

# OpenClaw로 개인용 어시스턴트 만들기

전용 WhatsApp 번호를 항상 켜져 있는 에이전트로 설정하는 가이드입니다.

## 안전 권장 사항:​

- `channels.whatsapp.allowFrom`을 설정하여 액세스를 제한하세요.

- 전용 WhatsApp 번호를 사용하세요.

- 하트비트(proactive 모드)를 조정하거나 비활성화할 수 있습니다.

## 빠른 시작:​

- WhatsApp Web 페어링: `openclaw channels login`

- 게이트웨이 시작: `openclaw gateway --port 18789`

- `~/.openclaw/openclaw.json`에서 `allowFrom` 구성.

## 에이전트 워크스페이스:​

OpenClaw는 에이전트의 작동 지침(`AGENTS.md`, `SOUL.md`, `TOOLS.md`)을 위해 `~/.openclaw/workspace`를 사용합니다. 백업과 버전 관리를 위해 이 폴더를 git 저장소로 취급하는 것이 좋습니다.

## 하트비트 (Heartbeats):​

에이전트는 30분마다 체크인하여 `HEARTBEAT.md`에 정의된 작업을 수행할 수 있습니다.

쇼케이스 (Showcase)
(/start/showcase)다음
설치 개요 (Install Overview)
(/install/)

- 안전 권장 사항:

- 빠른 시작:

- 에이전트 워크스페이스:

- 하트비트 (Heartbeats):

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

