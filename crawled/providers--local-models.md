<!-- source: https://openclaw-wheat.vercel.app/providers/local-models -->

-  (/)

- 모델 (Models)

- 로컬 모델 (Ollama, LM Studio)

# 로컬 모델 (Ollama, LM Studio)

인터넷 연결 없이 프라이버시를 완벽하게 보호하며 에이전트를 가동하고 싶다면 로컬 모델을 사용하세요. 별도의 API 비용이 발생하지 않습니다.

## 🦙 Ollama 사용하기​ (#-ollama-사용하기)

Ollama는 로컬에서 LLM을 돌리는 가장 쉬운 도구입니다.

### 1. Ollama 설치 및 실행​ (#1-ollama-설치-및-실행)

Ollama 공식 사이트 (https://ollama.com/)에서 앱을 내려받아 실행합니다.

### 2. 모델 다운로드​ (#2-모델-다운로드)

```
ollama run llama3.1

```

### 3. OpenClaw 설정​ (#3-openclaw-설정)

```
openclaw configure set providers.ollama.baseUrl "http://localhost:11434"
openclaw configure set models.default "ollama/llama3.1"

```

---

## 💻 LM Studio 사용하기​ (#-lm-studio-사용하기)

LM Studio는 GUI 환경에서 다양한 오픈 소스 모델(HuggingFace)을 시도해보기 좋습니다.

### 1. 서버 모드 활성화​ (#1-서버-모드-활성화)

LM Studio에서 모델을 불러온 후, 왼쪽 메뉴의 Local Server 탭에서 `Start Server`를 누릅니다. 기본 주소는 보통 `http://localhost:1234`입니다.

### 2. OpenClaw 설정 (OpenAI 호환 방식)​ (#2-openclaw-설정-openai-호환-방식)

LM Studio는 OpenAI API 규격을 따르므로 다음과 같이 설정합니다.

```
openclaw configure set providers.openai.baseUrl "http://localhost:1234/v1"
openclaw configure set providers.openai.apiKey "lm-studio" # 아무 값이나 입력
openclaw configure set models.default "openai/any-model"

```

---

## ⚠️ 로컬 모델 사용 시 팁​ (#️-로컬-모델-사용-시-팁)

- 사양 확인: 원활한 실행을 위해 Apple Silicon (M1/M2/M3) 또는 NVIDIA GPU가 필요합니다.

- 추론 속도: 클라우드 모델에 비해 답변 속도가 느릴 수 있으니, 작은 사양의 모델 (8B 이하)부터 시도해 보세요.

- 도구 사용: `llama3.1` 또는 `qwen2.5-coder`와 같이 도구 사용(Tool Call) 능력이 검증된 모델을 권장합니다.

Amazon Bedrock 설정 가이드
(/providers/amazon-bedrock)다음
지원 플랫폼 (Platforms)
(/platforms/)

- 🦙 Ollama 사용하기 (#-ollama-사용하기)
- 1. Ollama 설치 및 실행 (#1-ollama-설치-및-실행)

- 2. 모델 다운로드 (#2-모델-다운로드)

- 3. OpenClaw 설정 (#3-openclaw-설정)

- 💻 LM Studio 사용하기 (#-lm-studio-사용하기)
- 1. 서버 모드 활성화 (#1-서버-모드-활성화)

- 2. OpenClaw 설정 (OpenAI 호환 방식) (#2-openclaw-설정-openai-호환-방식)

- ⚠️ 로컬 모델 사용 시 팁 (#️-로컬-모델-사용-시-팁)

Docs

- 시작하기 (/start/getting-started)

Community

- Discord (https://discord.gg/openclaw)

- Twitter (https://twitter.com/openclaw)

More

- GitHub (https://github.com/openclaw/openclaw)

Copyright © 2026 OpenClaw. Built with Docusaurus.

제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
제플몰 CLAWBOX 출시! 지금 만나러 가기 (https://claude.ai/public/artifacts/4d0774a0-b077-4563-b044-098d565c24b7)
