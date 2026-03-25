---
title: Microsoft Teams
sidebar_label: Microsoft Teams
sidebar_position: 8
---

# Microsoft Teams

Microsoft Teams는 Microsoft 365 환경에서 가장 자연스럽게 붙는 엔터프라이즈 채널입니다. 사내 협업, 승인, 알림, 운영 보조에 적합합니다.

## 언제 쓰면 좋은가

- 기업 내부 협업
- 승인·보고·알림 자동화
- Microsoft 생태계 중심 조직

## 설정 개요

1. Teams 앱 또는 봇 등록에 필요한 자격 증명을 준비합니다.
2. Microsoft 365 환경에서 앱 배포 또는 허용 절차를 진행합니다.
3. OpenClaw에 Microsoft Teams 채널을 연결합니다.
4. 테스트 팀 또는 테스트 채널에서 먼저 확인합니다.

## 운영 팁

- 설치와 서비스 구성은 `openclaw onboard --install-daemon` 흐름을 우선 사용하세요.
- 연결 후에는 `openclaw gateway status`로 Gateway가 정상인지 먼저 확인하세요.
- 첫 테스트는 DM에서 짧은 메시지로 시작하면 문제를 가장 빨리 분리할 수 있습니다.
- 여러 채널을 동시에 붙여도 되지만, 초기 검증은 한 채널씩 순서대로 하는 편이 안전합니다.

## 주의할 점

- 엔터프라이즈 정책 때문에 앱 승인 시간이 걸릴 수 있습니다.
- 운영 범위를 한 팀 또는 한 채널로 좁혀서 시작하는 편이 좋습니다.
- 민감한 조직 데이터 접근은 별도 검토가 필요합니다.
## 🔒 보안 설정
- **DM 페어링**: 개인 메시지로 봇과 1:1 연결
- **allowFrom**: 허용된 사용자만 접근 가능하도록 설정
- **그룹 정책**: 그룹 채팅 시 mention/reply 규칙 설정
