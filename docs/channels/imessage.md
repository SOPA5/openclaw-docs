---
title: iMessage
sidebar_label: iMessage
sidebar_position: 12
---

# iMessage

이 문서에서는 OpenClaw를 다양한 채팅 앱과 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 쓰면 좋은가
- 설정 개요
- 운영 팁

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


iMessage 문서는 legacy 경로를 설명하는 참고 문서입니다. 공식 기준에서는 신규 구성 시 [BlueBubbles](/channels/bluebubbles)를 권장 경로로 보는 편이 더 안전합니다.


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 언제 쓰면 좋은가

- 기존 iMessage legacy 환경을 유지해야 할 때
- 과거 설정을 이해하거나 이전할 때
- BlueBubbles와의 차이를 파악할 때

## 설정 개요

1. 먼저 [BlueBubbles](/channels/bluebubbles) 문서를 확인하세요.
2. 기존 legacy 환경을 유지해야 할 때만 iMessage 경로를 검토합니다.
3. 테스트는 반드시 제한된 환경에서 진행합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 신규 도입 관점에서는 권장 우선순위가 아닙니다.
- macOS 권한, 연결 안정성, 유지보수 복잡도를 함께 고려해야 합니다.
- 장기 운영 계획이 있다면 BlueBubbles 전환 검토가 유리합니다.

## 권장 경로

새로 시작한다면 [BlueBubbles](/channels/bluebubbles)부터 보는 것을 권장합니다.

## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정

## 🎯 다음 단계

- 다음으로 [BlueBubbles](/channels/bluebubbles) 문서를 읽어보세요.
- 다음으로 [채널 개요](/channels/) 문서를 읽어보세요.
- 다음으로 [페어링 가이드](/start/pairing) 문서를 읽어보세요.
