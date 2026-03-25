---
title: 채널 개요
sidebar_label: 채널 개요
sidebar_position: 1
---

# 메시징 채널 (Channels)

OpenClaw는 하나의 Gateway에 여러 메신저 채널을 동시에 연결해, 같은 에이전트를 다양한 대화 창에서 사용할 수 있게 해줍니다. 빠른 시작은 보통 [Telegram](/channels/telegram)이나 [WhatsApp](/channels/whatsapp)에서 하고, Apple 생태계는 [BlueBubbles](/channels/bluebubbles)를 우선 검토하면 됩니다.

## 한눈에 보는 채널 전략

- **가장 빠른 테스트**: Telegram
- **글로벌 메신저 운영**: WhatsApp
- **커뮤니티/서버형 협업**: Discord, Slack
- **업무용 그룹웨어**: Google Chat, Microsoft Teams
- **자체 호스팅·개인화**: Matrix
- **Apple 사용자**: BlueBubbles 우선, iMessage legacy는 호환용 참고

## 지원 채널 전체 목록

공식 채널 인덱스 기준 지원 채널은 아래와 같습니다.

| 채널 | 성격 | 비고 |
|---|---|---|
| WhatsApp | 대중형 메신저 | 멀티 디바이스 운영에 적합 |
| Telegram | 가장 빠른 시작 경로 | Bot API 기반, 테스트 친화적 |
| Discord | 커뮤니티/스레드형 | 서버 운영, 협업, 알림에 적합 |
| Slack | 업무 협업형 | 팀 자동화와 업무 알림에 강함 |
| Google Chat | Google Workspace 연동형 | 조직 내부 워크플로우에 적합 |
| Microsoft Teams | 엔터프라이즈 협업형 | Microsoft 365 환경과 궁합이 좋음 |
| LINE | 아시아권 메신저 | 지역 기반 고객 접점에 유용 |
| Matrix | 분산형/자체 호스팅형 | 프라이버시와 유연성 중시 |
| BlueBubbles | iMessage 권장 경로 | macOS 기반 Apple 메시지 브리지 |
| iMessage (legacy) | 레거시 경로 | 신규 구성은 BlueBubbles 우선 |
| Grammy | Telegram Bot 프레임워크 기반 | Telegram 확장 구현 시 참고 |
| Feishu | 협업 메신저 | 중국권/기업 협업 환경 |
| IRC | 전통 채팅 네트워크 | 경량 텍스트 환경 |
| Mattermost | 자체 호스팅 협업형 | Slack 대안 |
| Nextcloud Talk | Nextcloud 연계형 | 자체 인프라 친화적 |
| Nostr | 탈중앙 소셜/메시징 계열 | 실험적·개방형 생태계 |
| Signal | 보안 중심 메신저 | 프라이버시 지향 |
| Synology Chat | NAS 협업 채널 | Synology 환경 연계 |
| Tlon | 전용 커뮤니티형 | 특수 목적 채널 |
| Twitch | 라이브 스트리밍 채팅 | 방송 연동 자동화 |
| Voice Call | 음성 통화형 | 음성 인터페이스 시나리오 |
| WebChat | 웹 임베드형 | 사이트 내 채팅 위젯 용도 |
| Zalo | 베트남 메신저 | 지역 특화 운영 |
| Zalo Personal | 개인 계정형 Zalo | 개인화 사용 사례 |

## 공통 설정 흐름

1. 채널 제공자 콘솔에서 봇/앱/연동 앱을 생성합니다.
2. 발급받은 토큰·시크릿·앱 ID를 준비합니다.
3. `openclaw onboard --install-daemon` 또는 설정 UI에서 채널을 연결합니다.
4. [페어링 가이드](/start/pairing)를 따라 DM 또는 안전한 승인 흐름으로 연결합니다.
5. 연결 후 `openclaw gateway status`로 Gateway 상태를 확인합니다.

## 채널 선택 가이드

### 개인용으로 시작할 때
- **Telegram**: 가장 빠르게 붙일 수 있고 설정 난도가 낮습니다.
- **WhatsApp**: 실제 일상 사용 흐름과 연결하기 좋습니다.

### 팀/커뮤니티용으로 운영할 때
- **Discord**: 커뮤니티, 스레드, 역할 기반 운영에 적합합니다.
- **Slack / Google Chat / Microsoft Teams**: 회사 업무 자동화에 적합합니다.

### 프라이버시/자체 호스팅을 중시할 때
- **Matrix**: 자체 서버와 연동하기 좋습니다.
- **Mattermost / Nextcloud Talk**: 사내 인프라와 붙이기 좋습니다.

### Apple 메시지 경험이 필요할 때
- **BlueBubbles**를 우선 검토하세요.
- **iMessage (legacy)** 문서는 기존 환경 유지·이해용으로만 참고하세요.

## 다음에 보면 좋은 문서

- [Telegram](/channels/telegram)
- [WhatsApp](/channels/whatsapp)
- [BlueBubbles](/channels/bluebubbles)
- [모델 제공자 개요](/providers/)
- [FAQ](/help/faq)
