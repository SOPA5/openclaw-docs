---
title: BlueBubbles
sidebar_label: BlueBubbles
sidebar_position: 11
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 연결 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `channels/bluebubbles` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# BlueBubbles

이 문서에서는 OpenClaw를 다양한 채팅 앱과 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 쓰면 좋은가
- 설정 개요
- 운영 팁

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


BlueBubbles는 OpenClaw에서 iMessage 경험을 연결할 때 권장되는 경로입니다. 공식 기준에서도 Apple 메시지 사용자는 BlueBubbles를 우선 검토하도록 안내합니다.


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 언제 쓰면 좋은가

- Apple 생태계 사용자
- iMessage 경험을 유지하고 싶을 때
- macOS 기반 개인 비서 환경

## 설정 개요

1. macOS 환경과 BlueBubbles 브리지 구성을 준비합니다.
2. OpenClaw에서 BlueBubbles 채널을 연결합니다.
3. Apple 메시지 흐름이 정상적으로 전달되는지 테스트합니다.
4. 필요하면 원격 운영과 보안 정책을 추가로 점검합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- macOS 의존성이 있으므로 운영 장치 상태가 중요합니다.
- Apple 메시지 접근 권한과 브리지 보안을 함께 점검해야 합니다.
- 신규 구축은 legacy iMessage보다 BlueBubbles를 우선 선택하는 편이 좋습니다.

## iMessage와의 관계

기존 레거시 경로는 [iMessage](/channels/imessage) 문서에 정리되어 있지만, 신규 설치와 장기 운영 관점에서는 BlueBubbles 우선이 더 안전합니다.

## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정

## 🎯 다음 단계

- 다음으로 [iMessage](/channels/imessage) 문서를 읽어보세요.
- 다음으로 [채널 개요](/channels/) 문서를 읽어보세요.
- 다음으로 [페어링 가이드](/start/pairing) 문서를 읽어보세요.
