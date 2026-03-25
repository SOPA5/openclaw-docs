---
title: Grammy
sidebar_label: Grammy
sidebar_position: 4
---

# Grammy

Grammy는 Telegram Bot 생태계에서 자주 쓰이는 프레임워크 기반 경로를 이해할 때 유용한 문서입니다. Telegram 확장 구현이나 구조 이해가 필요할 때 참고하면 좋습니다.

## 언제 쓰면 좋은가

- Telegram 채널을 조금 더 세밀하게 확장하고 싶을 때
- Bot 로직 구조를 이해하고 싶을 때
- Telegram 기반 커스텀 경험을 설계할 때

## 설정 개요

1. 기본 Telegram 연결 개념을 먼저 이해합니다.
2. Grammy 기반 확장 또는 커스텀 동작이 필요한 경우 구조를 설계합니다.
3. 실제 사용자 진입은 보통 [Telegram](/channels/telegram) 문서 흐름으로 시작합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 일반 사용자는 Telegram 문서만으로도 충분한 경우가 많습니다.
- 프레임워크 선택보다 먼저 채널 요구사항과 권한 범위를 정하는 것이 중요합니다.

## 참고

실제 운영 입문은 보통 [Telegram](/channels/telegram)에서 시작하고, Grammy는 구현 이해용 보조 문서로 보면 됩니다.

## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정
