---
title: 보안
sidebar_label: 보안
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Advanced** |
| 읽는 목적 | 운영 이해와 실전 연결 |
| 추천 환경 | Windows WSL2 + Ubuntu 기준, 필요 시 macOS / Linux / Windows Native 비교 |
| 현재 위치 | `gateway/security` |

:::tip 학습 팁
이 문서는 **혼자 읽어도 이해되게** 정리되어 있지만, 처음이면 문서 끝의 **다음 단계** 링크까지 이어서 보는 게 가장 빠릅니다.
:::

# 보안 감사 및 강화 (Security)

이 문서에서는 OpenClaw Gateway를 더 안전하게 운영하는 방법을 배웁니다.

## 📌 이 문서에서 배우는 것
- 가장 먼저 확인할 4가지
- `openclaw security audit` 사용법
- 기본 보안 점검 흐름
- DM pairing과 `allowFrom`의 의미

걱정하지 마세요, 하나씩 따라하면 됩니다! 😊

OpenClaw 보안의 핵심은 “무조건 다 막기”가 아니라, **누가 들어오는지, 어디까지 할 수 있는지, 민감한 도구를 얼마나 좁게 쓸지**를 함께 관리하는 것입니다.

:::tip 💡 쉽게 이해하기
**Gateway**는 쉽게 말해 "교환대"예요. 여러 앱과 도구, AI 모델 사이를 이어주는 중앙 통로라고 생각하면 이해하기 쉽습니다.
:::

## 가장 먼저 확인할 4가지

1. **Gateway가 어디에 열려 있는가**
2. **인증(`auth.mode`)이 켜져 있는가**
3. **채널 페어링이 얼마나 엄격한가**
4. **강한 도구(`exec`, `browser`, `message`) 권한이 얼마나 넓은가**

이 네 가지를 함께 봐야 실제 위험도를 판단할 수 있습니다.

## 🔍 `openclaw security audit`

OpenClaw는 현재 설치 상태를 빠르게 점검하는 보안 감사 명령을 제공합니다.

아래 명령어를 터미널에 입력하세요:
```bash
openclaw security audit
```

이 명령은 보통 아래 같은 문제를 찾는 데 도움이 됩니다.

- API 키가 설정 파일에 너무 노출되어 있는지
- 에이전트 권한이 너무 넓은지
- 샌드박스 설정이 부족한지
- 위험한 도구 허용 범위가 넓은지
- 인증이나 접근 제한이 약한지

:::tip 먼저 audit, 그다음 doctor
- `openclaw security audit` = **보안 중심 점검**
- `openclaw doctor` = **전체 운영 점검**

둘을 같이 보면 더 안전합니다.
:::

## 기본 보안 점검 흐름

처음에는 아래 순서대로 보면 됩니다.

### 1단계. 보안 감사 실행

```bash
openclaw security audit
```

### 2단계. 전체 상태 점검

```bash
openclaw doctor
```

### 3단계. Gateway 상태 확인

```bash
openclaw gateway status
```

### 4단계. 채널 정책 좁히기

- DM pairing 우선
- `allowFrom` 또는 허용 목록 사용
- 그룹에서는 mention 기반 반응 사용

### 5단계. 강한 도구 최소화

- 꼭 필요한 도구만 허용
- `exec`, `browser`, `message` 같은 강한 도구는 범위를 좁게
- elevated 실행은 정말 필요한 때만 허용

:::caution 공개 URL만 보고 안심하면 안 됩니다
겉으로는 URL 하나만 보이더라도, 인증과 도구 권한이 느슨하면 위험할 수 있습니다.
반대로 URL이 있어도 인증과 페어링, 도구 제한이 엄격하면 훨씬 안전합니다.
:::

## DM pairing이 중요한 이유

OpenClaw는 채널 연결 시 **DM pairing** 같은 안전한 승인 흐름을 중요하게 다룹니다.

이 방식의 장점은 다음과 같습니다.

- 누구나 임의로 봇을 붙잡고 민감한 작업을 시키기 어렵습니다.
- 실제 사용자와 계정을 연결하는 승인 단계가 생깁니다.
- 그룹 채팅이나 공개 공간보다 공격면이 훨씬 작습니다.

실무적으로는 Telegram 같은 빠른 셋업 채널에서도 **DM 기반 페어링**을 기본으로 두는 것이 좋습니다.

## `allowFrom`: 네트워크 단위 안전장치

인증이 있더라도 네트워크 범위를 제한하면 더 안전합니다. `allowFrom`은 **어디서 오는 요청까지 믿을지**를 정하는 설정입니다.

대표적인 사용 예:

- 로컬 네트워크만 허용
- Tailscale tailnet 대역만 허용
- 리버스 프록시/게이트웨이 IP만 허용

이 설정은 인증을 대신하지는 않지만, **실수로 열렸을 때 피해를 줄이는 2차 문** 역할을 합니다.

## 운영자가 챙겨야 할 보안 체크리스트

### 네트워크

- Gateway는 가능하면 loopback bind 유지
- 외부 공개는 신뢰된 프록시나 안전한 원격 접근 방식으로만 처리
- 필요 시 `allowFrom`으로 출발지 제한

### 인증

- `auth.mode` 활성화
- 비밀값은 환경 변수나 SecretRef 계층으로 관리
- 무인증 공개 URL 금지

### 채널/노드

- DM pairing 우선
- 그룹/공용 채널은 멘션, 승인, 권한 범위를 신중하게 설정
- node pairing은 승인 흐름을 좁게 유지

### 도구

- 민감한 도구는 최소 권한 원칙 적용
- sandbox 및 tool policy 함께 사용
- elevated 실행은 정말 필요한 경우에만 허용

## ✅ 성공하면 이렇게 보입니다

- `openclaw security audit`에서 큰 경고가 줄어듭니다.
- `openclaw doctor`에서 운영 문제를 함께 확인할 수 있습니다.
- DM pairing, 인증, `allowFrom`, 도구 제한이 서로 맞물려 안전하게 동작합니다.

## 관련 문서

- [원격 접근](/gateway/remote)
- [샌드박싱](/gateway/sandboxing)
- [도구 샌드박스](/tools/sandbox)

## 🎯 다음 단계

- 다음으로 [원격 접근](/gateway/remote) 문서를 읽어보세요.
- 다음으로 [샌드박싱](/gateway/sandboxing) 문서를 읽어보세요.
- 다음으로 [도구 샌드박스](/tools/sandbox) 문서를 읽어보세요.
