---
title: 채널 개요
sidebar_label: 채널 개요
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Beginner** |
| 읽는 목적 | 어떤 채널을 붙일지 큰 그림부터 고르기 |
| 추천 환경 | - |
| 현재 위치 | `channels/index` |

:::tip 학습 팁
처음엔 **“내가 어디서 OpenClaw랑 대화할까?”**만 정하면 충분합니다. 복잡한 설정은 각 채널 문서에서 하나씩 따라가면 됩니다.
:::

# 메시징 채널 (Channels)

채널은 OpenClaw가 **어느 채팅창에 들어갈지** 정하는 단계입니다. 쉽게 말해, AI의 머리를 고르는 게 Providers라면, 채널은 **AI가 들어갈 문**을 고르는 일입니다.

<ProgressPill level="Core" progress={48} label="핵심 실습 · 실제 대화 채널 선택" />

<InfoCard title="이 문서의 역할" icon="💬" tone="indigo">
설치를 마친 뒤, 내 사용 방식에 맞는 대화 창을 고르게 도와주는 문서입니다. 혼자 쓰는지, 팀이 같이 쓰는지, Apple 기기를 쓰는지에 따라 선택이 달라집니다.
</InfoCard>

## 📌 이 문서에서 바로 정하는 것
- 어떤 채널이 내 상황에 맞는지
- 빠른 테스트용 채널은 무엇인지
- 회사/팀용 채널은 무엇인지
- Apple·자체 호스팅 환경은 무엇을 보면 되는지

<LearningPath
  title="채널 연결 경로"
  items={[
    { title: '설치 개요', to: '/install/', state: 'done', note: '실행 환경 준비를 마쳤습니다.' },
    { title: '채널 개요', to: '/channels/', state: 'current', note: '어떤 채널을 붙일지 결정합니다.' },
    { title: 'Telegram', to: '/channels/telegram', state: 'next', note: '가장 빠른 테스트 경로입니다.' },
    { title: '채널 페어링', to: '/start/pairing', state: 'next', note: '실제 연결 절차를 완료합니다.' },
  ]}
/>

:::tip 쉽게 이해하기
채널은 **전화기 종류**가 아니라 **전화를 받는 앱**이라고 생각하면 쉽습니다. 같은 사람이라도 메신저가 다르면 만나는 창도 달라지듯, OpenClaw도 여러 채널로 만날 수 있습니다.
:::

## 한눈에 보는 추천

| 상황 | 추천 채널 | 이유 |
|---|---|---|
| 가장 빨리 테스트하고 싶다 | [Telegram](/channels/telegram) | 봇 연결과 개인 DM 테스트가 빠릅니다. |
| 실제 일상 메신저처럼 쓰고 싶다 | [WhatsApp](/channels/whatsapp) | 알림·고객 응대·실사용 흐름과 잘 맞습니다. |
| 회사 팀과 같이 쓰고 싶다 | [Slack](/channels/slack), [Google Chat](/channels/google-chat), [Microsoft Teams](/channels/ms-teams) | 업무 채널, 멘션, 알림 흐름에 익숙합니다. |
| Apple 메시지 경험이 중요하다 | [BlueBubbles](/channels/bluebubbles) | 신규 구성에서는 iMessage보다 권장 경로입니다. |
| 직접 서버를 운영하고 싶다 | [Matrix](/channels/matrix) | 분산형·자체 호스팅에 잘 맞습니다. |

## 채널 선택 체크리스트

### 1) 혼자 빨리 시작하는 경우
- Telegram이 제일 쉽습니다.
- WhatsApp은 실제 생활 메시지 흐름과 비슷합니다.

### 2) 팀과 같이 쓰는 경우
- Slack: 빠른 협업과 알림
- Google Chat: Google Workspace 중심 조직
- Microsoft Teams: Microsoft 365 중심 조직

### 3) 특별한 환경이 필요한 경우
- BlueBubbles: Apple 메시지와 연결하고 싶을 때
- Matrix: 자체 호스팅과 프라이버시를 챙기고 싶을 때
- LINE: 특정 지역 사용자 접점이 중요할 때

## 공통 설정 흐름

1. 채널 서비스에서 봇 또는 앱을 만듭니다.
2. 토큰, 시크릿, 앱 ID 같은 연결 정보를 준비합니다.
3. OpenClaw에 채널 정보를 넣습니다.
4. DM이나 테스트 방에서 첫 메시지를 보내 연결을 확인합니다.
5. 문제가 없으면 실제 운영 채널로 넓혀 갑니다.

:::tip 실전 팁
처음부터 여러 채널을 한꺼번에 붙이지 마세요. **하나를 먼저 성공시키고**, 그다음 두 번째 채널을 붙이는 편이 훨씬 덜 헷갈립니다.
:::

## ✅ 성공 확인
- 테스트 메시지를 보냈을 때 OpenClaw가 답장합니다.
- 채널별 봇 또는 앱이 정상 온라인 상태로 보입니다.
- DM 또는 테스트 룸에서 기본 질의응답이 됩니다.

## 자주 생기는 선택 실수
- **너무 무거운 채널부터 시작**: 처음엔 Telegram처럼 쉬운 경로가 좋습니다.
- **개인용과 팀용을 섞음**: 개인 비서는 개인 채널, 업무 자동화는 팀 채널로 나누는 편이 안전합니다.
- **Apple 사용인데 legacy 문서부터 읽음**: 신규 구성은 iMessage보다 BlueBubbles를 먼저 보세요.

## ➡️ 다음 단계
- 빠른 시작은 [Telegram](/channels/telegram)
- 실제 연결 절차는 [채널 페어링](/start/pairing)
- Apple 메시지 계열은 [BlueBubbles](/channels/bluebubbles)
