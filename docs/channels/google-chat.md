---
title: Google Chat
sidebar_label: Google Chat
sidebar_position: 7
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Core** |
| 읽는 목적 | 연결 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `channels/google-chat` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# Google Chat

이 문서에서는 OpenClaw를 다양한 채팅 앱과 연결하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 언제 쓰면 좋은가
- 설정 개요
- 운영 팁

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊


Google Chat은 Google Workspace 중심 조직에서 자연스럽게 도입하기 좋은 채널입니다. 문서, 캘린더, 메일 등 Google 생태계와 운영 맥락을 맞추기 쉽습니다.


:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 언제 쓰면 좋은가

- Google Workspace 기반 조직
- 내부 업무 봇
- 공지, 요약, 승인 보조 흐름

## 설정 개요

1. Google Chat 앱 또는 연동 구성을 준비합니다.
2. 필요한 인증 정보와 앱 설정을 완료합니다.
3. OpenClaw에서 Google Chat 채널을 활성화합니다.
4. 스페이스 또는 DM에서 제한적으로 테스트합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 조직 정책에 따라 앱 승인 절차가 필요할 수 있습니다.
- 스페이스 전체 노출 전에 응답 트리거를 분명히 정하세요.
- Google Workspace 권한 범위는 최소 권한 원칙을 따르세요.
## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정

## 🎯 다음 단계

- 다음으로 [채널 개요](/channels/) 문서를 읽어보세요.
- 다음으로 [페어링 가이드](/start/pairing) 문서를 읽어보세요.
- 다음으로 [시작하기](/start/getting-started) 문서를 읽어보세요.
