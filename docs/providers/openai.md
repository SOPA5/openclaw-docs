---
title: OpenAI
sidebar_label: OpenAI
sidebar_position: 3
---

## 🧭 학습 메타

| 항목 | 내용 |
|---|---|
| 현재 단계 | **Intermediate** |
| 읽는 목적 | OpenAI 모델을 연결할 때 필요한 준비를 이해하기 |
| 추천 환경 | - |
| 현재 위치 | `providers/openai` |

:::tip 학습 팁
처음엔 최신 모델 이름을 전부 외우지 않아도 괜찮습니다. **이 제공자가 나한테 맞는지**만 먼저 판단하면 됩니다.
:::

# OpenAI

OpenAI는 OpenClaw에서 쓰는 대표적인 Provider 중 하나입니다. 한 줄로 말하면, **범용성과 코딩 생태계가 모두 중요한 제공자**.

## 📌 이 문서에서 배우는 것
- 어떤 상황에 잘 맞는지
- 인증은 어떻게 시작하는지
- 운영할 때 무엇을 나눠 생각해야 하는지
- 다음에 어떤 제공자를 같이 보면 좋은지

:::tip 쉽게 이해하기
Provider를 고르는 일은 **식당을 고르는 것**과 비슷합니다. 같은 배고픔을 해결해도, 빠르게 먹고 싶은지, 고급 코스를 먹고 싶은지, 집에서 직접 요리하고 싶은지에 따라 선택이 달라집니다.
:::

## 언제 적합한가
- 범용 기본 모델이 필요할 때
- 코딩 작업과 일반 대화를 함께 운영할 때
- 주변 도구 생태계와 호환성이 중요할 때

## 설정 흐름
1. OAuth 또는 Codex 인증 경로를 먼저 검토합니다.
2. 필요하면 API key 방식도 준비합니다.
3. OpenClaw에서 기본 모델과 필요 시 fallback 모델을 정합니다.
4. 짧은 테스트 질문으로 연결 상태를 확인합니다.

---

## 🚀 처음부터 끝까지 한 번에 — 완결 설정 흐름

### Step 1. API 키 발급

1. **https://platform.openai.com/api-keys** 접속
2. **Create new secret key** 클릭
3. 이름 입력 후 **Create secret key** 클릭
4. 키 복사 (형태: `sk-proj-...` 또는 `sk-...`) ← **한 번만 보여요! 꼭 저장!**

:::tip API 키가 뭔가요?
API 키는 OpenAI에게 "이 요청은 내 계정에서 온 거야!"라고 증명하는 비밀번호예요.  
`sk-`로 시작하는 긴 문자열이에요. 잃어버리면 새로 만들어야 해요.
:::

---

### Step 2. 환경 변수 설정

```bash
export OPENAI_API_KEY="sk-proj-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

영구 등록:

```bash
echo 'export OPENAI_API_KEY="sk-proj-xxx..."' >> ~/.bashrc
source ~/.bashrc
```

또는 `.env` 파일 사용:

```bash
# .env 파일 생성
echo 'OPENAI_API_KEY=sk-proj-xxx...' > ~/.openclaw/.env
```

:::tip 환경 변수로 쓰는 게 왜 좋은가요?
설정 파일에 키를 직접 쓰면 Git에 올렸을 때 유출될 수 있어요.  
환경 변수로 넣으면 코드와 키를 분리할 수 있어서 훨씬 안전해요! 🔐
:::

---

### Step 3. config 파일에 설정 넣기

`openclaw.json` 파일에 아래처럼 추가합니다:

```json
{
  "models": {
    "providers": {
      "openai": {
        "apiKey": "${OPENAI_API_KEY}",
        "defaultModel": "gpt-4.1",
        "fallbackModel": "gpt-4.1-mini"
      }
    }
  }
}
```

:::tip 이 설정이 뭘 하는 건가요?
- `apiKey` → 환경 변수에서 키를 읽어와요. 파일에 직접 안 써서 안전해요.
- `defaultModel` → 기본으로 쓸 OpenAI 모델 이름이에요.
- `fallbackModel` → 기본 모델이 안 되면 대신 쓸 모델이에요. 안전망이에요!
:::

---

### Step 4. Gateway 재시작

```bash
openclaw gateway restart
```

---

### ✅ 성공 확인 박스

- [ ] OpenAI API 키를 발급받았다
- [ ] 환경 변수 `OPENAI_API_KEY`를 설정했다
- [ ] `openclaw.json`에 provider 설정을 넣었다
- [ ] Gateway를 재시작했다
- [ ] 짧은 테스트 질문을 보냈을 때 응답이 왔다 🎉

---

## 공식 모델명 (2025 기준)

| 모델 | 특징 | 추천 용도 |
|---|---|---|
| `gpt-4.1` | 최신 GPT-4 계열, 높은 정확도 | 복잡한 분석, 코딩, 긴 문서 |
| `gpt-4.1-mini` | 빠르고 저렴한 경량 모델 | 일반 대화, 간단한 작업 |
| `gpt-4.1-nano` | 초경량, 초저비용 | 분류, 빠른 응답 |
| `o3` | 최고 추론 능력 (느림) | 수학, 코딩, 고난도 문제 |
| `o4-mini` | 추론 + 속도 균형 | 코딩 도우미, 분석 |
| `gpt-image-1` | 이미지 생성 | 이미지 생성/편집 |

:::tip 어떤 모델을 써야 하나요?
- **일반 작업**: `gpt-4.1-mini` — 빠르고 저렴해요
- **복잡한 작업**: `gpt-4.1` — 품질이 더 좋아요
- **코딩/수학**: `o4-mini` — 추론 특화예요
- **비용 절약**: `gpt-4.1-nano` — 가장 저렴해요
:::

---

## Codex OAuth 인증 (구독 기반)

API 키 없이 OpenAI 구독으로 인증하는 방법:

```bash
# Codex CLI OAuth 인증
codex auth login
```

브라우저에서 OpenAI 계정으로 로그인하면 자동으로 인증돼요.

인증 후 config:

```json
{
  "models": {
    "providers": {
      "openai-codex": {
        "authMode": "oauth",
        "defaultModel": "gpt-4.1"
      }
    }
  }
}
```

:::tip OAuth vs API Key
- **API Key** → 사용한 만큼 요금 (종량제)
- **OAuth/구독** → 월정액 구독 기반 (실용적!)  
구독이 있다면 OAuth 방식을 추천해요.
:::

## ✅ 성공 확인
- 인증 오류 없이 Provider가 연결됩니다.
- 기본 모델을 하나 지정할 수 있습니다.
- 짧은 질의응답이 정상 동작합니다.
- 필요하면 fallback 모델도 함께 설정됩니다.

## 운영 팁
- 일반 대화용과 코딩용 모델을 나누면 운영이 더 편합니다.
- 처음에는 한 Provider만 붙이고, 안정화 후 fallback을 추가하세요.
- 비용, 속도, 품질은 항상 같이 봐야 합니다. 하나만 최고라고 전체가 최고는 아닙니다.

## 실전 예시
- **빠른 시작**: 기본 모델 1개만 두고 질의응답부터 검증합니다.
- **안정성 강화**: 주 Provider 1개 + 보조 Provider 1개로 fallback 체인을 만듭니다.

## ➡️ 다음 단계
- [Anthropic](/providers/anthropic)
- [OpenRouter](/providers/openrouter)
- [FAQ](/help/faq)
