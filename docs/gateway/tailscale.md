---
title: Tailscale 원격 접속
sidebar_label: Tailscale
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | 인터넷 밖에서도 내 OpenClaw에 안전하게 붙는 방법 배우기 |
| 추천 환경 | 집 PC, 개인 서버, 노트북, 모바일 원격 사용 |
| 현재 위치 | `gateway/tailscale` |

:::tip 학습 팁
이 문서는 **원격 접근을 처음 여는 사람**에게 특히 잘 맞아요.
먼저 [원격 접근](/gateway/remote) 문서를 보면 흐름이 더 잘 보입니다.
:::

# Tailscale로 안전하게 원격 접속하기

이 문서에서는 OpenClaw를 **집 밖에서도 안전하게 쓰는 방법**을 배웁니다.

## 📌 이 문서에서 배우는 것
- Tailscale이 무엇인지
- 설치 방법
- OpenClaw와 Tailscale을 어떻게 붙이는지
- `gateway.remote`를 어떻게 생각하면 되는지
- 모바일에서 접속하는 방법
- 실전 예시

:::tip 💡 아주 쉽게 설명하면
**Tailscale은 “인터넷 어디서든 내 컴퓨터에 안전하게 접속하는 터널”**이에요.
아무에게나 문을 활짝 여는 대신, **허락된 내 기기들끼리만 비밀 통로를 만드는 것**에 가깝습니다.
:::

## 왜 Tailscale을 많이 쓰나요?

OpenClaw Gateway를 그냥 인터넷에 바로 열면 위험할 수 있습니다.
반면 Tailscale을 쓰면:

- 공인 포트를 직접 열지 않아도 되고
- 내 계정으로 로그인한 기기끼리만 붙을 수 있고
- 집 PC, 노트북, 휴대폰에서 같은 개인 네트워크처럼 쓸 수 있습니다

즉, **편하고 안전한 중간 다리**라고 생각하면 됩니다.

## 기본 그림

가장 안전한 기본 구조는 아래와 같습니다.

1. OpenClaw Gateway는 내 컴퓨터 안의 로컬 주소에만 열어 둡니다.
2. Tailscale이 그 앞에서 안전한 길을 만들어 줍니다.
3. 내 휴대폰이나 다른 노트북은 Tailscale을 통해 접속합니다.

이 방식은 **Gateway 자체를 인터넷에 바로 노출하지 않는 것**이 핵심입니다.

## 설치 방법

### 1단계. Tailscale 설치

운영체제에 맞는 방법으로 Tailscale을 설치합니다.

보통 흐름은 이렇습니다.

- macOS / Windows / Linux에 Tailscale 설치
- 같은 계정으로 로그인
- 내 기기들이 같은 tailnet에 들어왔는지 확인

### 2단계. 내 기기 연결 확인

설치 후에는 보통 각 기기에 Tailscale 주소가 생깁니다.
이 주소는 같은 tailnet 안에서만 잘 보이는 **전용 주소**라고 생각하면 됩니다.

### 3단계. OpenClaw 호스트도 로그인

OpenClaw가 돌아가는 컴퓨터에도 Tailscale이 설치되어 있어야 합니다.
그래야 모바일이나 다른 컴퓨터가 그 호스트를 찾아갈 수 있습니다.

:::tip 먼저 작은 연결 테스트
처음에는 브라우저나 앱에서 바로 붙기 전에,
**OpenClaw가 있는 기기가 Tailscale에 정상 로그인됐는지**부터 확인하면 덜 헷갈립니다.
:::

## OpenClaw + Tailscale 연동

여기서 중요한 생각은 하나입니다.

**Gateway는 로컬에 두고, 원격 길은 Tailscale이 맡는다.**

### 권장 구조

- Gateway bind: `127.0.0.1` 같은 loopback 유지
- 인증: `auth.mode` 유지
- 원격 노출: Tailscale 계층 사용

이렇게 하면 Gateway가 바깥에 그대로 드러나지 않아서 더 안전합니다.

## `gateway.remote` 설정은 뭐예요?

`gateway.remote`는 쉽게 말하면 **“다른 기기들이 나를 어디 주소로 찾아오면 되는지” 알려 주는 표지판**입니다.

예를 들어:
- 로컬에서는 `127.0.0.1`
- 원격에서는 Tailscale 주소 또는 그 위의 안전한 주소

즉, OpenClaw 앱이나 노드가 **어느 원격 주소를 바라봐야 하는지** 연결해 주는 역할입니다.

### 설정할 때 생각할 점

- 이 주소가 진짜 원격에서 닿는가?
- 인증이 켜져 있는가?
- 모바일 앱이 같은 Tailscale 네트워크에 있는가?
- Gateway를 직접 공개하지 않았는가?

### 좋은 기본 원칙

- Gateway는 로컬 bind 유지
- 원격 주소는 Tailscale 쪽 주소 사용
- 공개 인터넷 URL보다 private tailnet 주소를 우선 사용

## 모바일에서 원격 접속하기

모바일에서도 흐름은 비슷합니다.

### 준비물
- 휴대폰에 Tailscale 앱 설치
- 같은 계정으로 로그인
- OpenClaw 호스트도 Tailscale 로그인 완료

### 접속 흐름

1. 휴대폰이 Tailscale에 연결됨
2. 휴대폰이 OpenClaw 호스트의 Tailscale 주소를 찾음
3. OpenClaw 앱 또는 연결 대상이 그 주소로 접속
4. 인증을 통과하면 사용 가능

이렇게 하면 카페, 출장, 외부 네트워크에서도
**내 장비끼리만 연결된 안전한 통로**를 통해 접근할 수 있습니다.

:::tip 모바일에서 안 될 때 먼저 볼 것
1. 휴대폰 Tailscale 로그인 상태
2. OpenClaw 호스트 Tailscale 로그인 상태
3. 같은 tailnet인지
4. Gateway 인증이 맞는지
5. 원격 주소를 잘못 적지 않았는지
:::

## 실전 예시

### 예시 1. 집 PC의 OpenClaw를 회사에서 쓰기

- 집 PC에 OpenClaw 설치
- 집 PC에 Tailscale 설치
- Gateway는 로컬 bind 유지
- 회사 노트북도 Tailscale 로그인
- 회사 노트북에서 집 PC의 Tailscale 주소로 접속

장점:
- 공유기 포트포워딩이 필요 없는 경우가 많음
- 집 PC를 인터넷에 직접 노출하지 않아도 됨

### 예시 2. 휴대폰으로 내 서버에 붙기

- VPS나 홈서버에 OpenClaw 설치
- 서버에 Tailscale 설치
- 휴대폰에도 Tailscale 설치
- 앱에서 원격 주소를 Tailscale 주소로 설정

장점:
- 외부에서도 내 AI 도구에 접근 가능
- 공개 인터넷보다 더 좁은 범위에서 운영 가능

## 함께 쓰면 좋은 보안 장치

Tailscale만 믿고 끝내지 말고, 아래도 함께 챙기면 좋습니다.

- `auth.mode` 켜기
- `allowFrom`으로 범위 더 줄이기
- 강한 도구(`exec`, `browser`) 최소화
- `openclaw security audit` 실행

즉, Tailscale은 **안전한 길**이고,
OpenClaw 보안 설정은 **문과 자물쇠**라고 생각하면 됩니다.
둘 다 있어야 더 든든합니다.

## ✅ 성공 확인

아래처럼 보이면 잘 되고 있는 것입니다.

- OpenClaw 호스트가 Tailscale 네트워크에 정상 연결됨
- 모바일이나 다른 노트북이 같은 tailnet에 들어옴
- 원격 주소가 `gateway.remote`에 맞게 정리됨
- Gateway는 여전히 로컬 bind + 인증 상태를 유지함
- 집 밖에서도 안전하게 OpenClaw에 붙을 수 있음

## 함께 읽기

- [원격 접근](/gateway/remote)
- [보안](/gateway/security)
- [보안 상세](/gateway/security-advanced)

## 🎯 다음 단계

- 다음으로 [보안](/gateway/security) 문서를 읽어보세요.
- 다음으로 [보안 상세](/gateway/security-advanced) 문서를 읽어보세요.
- 다음으로 [API](/gateway/api) 문서를 읽어보세요.
