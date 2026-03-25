---
title: Telegram
sidebar_label: Telegram
sidebar_position: 3
---

# Telegram

Telegram은 OpenClaw에서 가장 빠르게 시작하기 좋은 채널입니다. Bot API 기반이라 설정 난도가 낮고, 테스트와 운영 전환이 모두 쉽습니다.

## 언제 쓰면 좋은가

- 가장 빠른 PoC
- 개발·테스트 환경
- 개인 DM 기반 생산성 워크플로우

## 설정 개요

1. Telegram Bot을 만들고 Bot Token을 확보합니다.
2. OpenClaw에 Telegram 채널 설정을 추가합니다.
3. 봇과 DM을 시작한 뒤 페어링 절차를 완료합니다.
4. 연결 후 간단한 질문을 보내 응답을 확인합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 그룹에서 바로 시작하지 말고 DM에서 먼저 검증하세요.
- 관리자 권한이 필요한 그룹 기능은 범위를 최소화하세요.
- 허용 사용자 제한이 없으면 원치 않는 접근이 생길 수 있습니다.

## 함께 보면 좋은 문서

- [Grammy](/channels/grammy)
- [FAQ](/help/faq)

## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정
