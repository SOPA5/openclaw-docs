---
title: Amazon Bedrock
sidebar_label: Amazon Bedrock
sidebar_position: 6
---

# Amazon Bedrock 설정 가이드

기업 수준의 보안과 안정성이 필요한 경우 AWS의 Bedrock 서비스를 통해 Claude, Llama 등의 모델을 이용할 수 있습니다.

## 🛠️ 설정 방법​

### 1. IAM 권한 설정​

AWS 계정에서 Bedrock 접근 권한이 있는 IAM 사용자 또는 역할을 생성합니다. `AmazonBedrockFullAccess` 정책이 필요합니다.

### 2. 로컬 자격 증명 설정​

AWS CLI가 설치되어 있다면 `aws configure`를 통해 키를 설정하거나, 환경 변수를 사용합니다.

- `AWS_ACCESS_KEY_ID`

- `AWS_SECRET_ACCESS_KEY`

- `AWS_REGION` (예: `us-east-1`)

### 3. OpenClaw 설정​

```
openclaw configure set providers.bedrock.region "us-east-1"
openclaw configure set models.default "bedrock/anthropic.claude-3-5-sonnet-v2:0"

```

---

## 🛡️ 엔터프라이즈 기능​

- 데이터 프라이버시: 전송되는 데이터가 모델 학습에 사용되지 않음을 보장합니다.

- 안정적인 인프라: AWS의 글로벌 인프라 위에서 가동되므로 높은 가용성을 제공합니다.

- Private Link: VPC 내에서만 통신하도록 설정하여 보안을 극대화할 수 있습니다.

OpenRouter 설정 가이드
(/providers/openrouter)다음
로컬 모델 (Ollama, LM Studio)
(/providers/local-models)

- 🛠️ 설정 방법
- 1. IAM 권한 설정

- 2. 로컬 자격 증명 설정

- 3. OpenClaw 설정

- 🛡️ 엔터프라이즈 기능

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)


