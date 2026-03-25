<!-- source: https://openclaw-wheat.vercel.app/gateway/security -->

-  (/)

- 게이트웨이 (Gateway)

- 보안 감사 및 강화 (Security)

# 보안 감사 및 강화 (Security)

사용자의 개인정보(파일)와 시스템 권한을 보호하기 위해 OpenClaw는 다양한 보안 검사 기능을 제공합니다.

## 🔍 보안 감사 (Security Audit)​ (#-보안-감사-security-audit)

터미널에서 현재 설치된 환경의 보안 취약점을 즉시 점검할 수 있습니다.

```
openclaw security audit

```

### 주요 점검 항목​ (#주요-점검-항목)

- API Key 노출: 설정 파일에 API 키가 암호화되지 않고 노출되어 있는지 확인합니다.

- 부적절한 권한: 에이전트가 시스템 전체(`/`)에 대한 쓰기 권한을 가지고 있는지 확인합니다.

- 샌드박스 설정: 민감한 도구가 격리된 환경(Docker 등)에서 실행 중인지 체크합니다.

---

## 🛡️ 보안 강화 규칙 (Audit Rules)​ (#️-보안-강화-규칙-audit-rules)

문제가 발견된 경우 `--fix` 옵션으로 자동 권장 설정을 적용할 수 있습니다.

- 파일 시스템 제한: 에이전트가 작업할 수 있는 폴더를 특정 프로젝트 폴더로 한정합니다.

- 명령어 차단: 위험한 명령어(`rm -rf /`, `curl -o` 등)를 블랙리스트에 추가하여 실행을 방지합니다.

- 인증 토큰 강제: 외부 접속 시 반드시 복잡한 토큰을 사용하도록 설정합니다.

## 💡 수동 강화 팁​ (#-수동-강화-팁)

- 환경 변수 사용: API 키를 `config.yml`에 직접 적는 대신 환경 변수(`ANTHROPIC_API_KEY` 등)를 통해 로드하는 것을 권장합니다.

- 개별 에이전트 권한: 각 에이전트별로 `tools.deny` 설정을 적극 활용하여 최소 권한 원칙(Principle of Least Privilege)을 준수하세요.

원격 접속 및 접근 관리
(/gateway/remote)다음
운영 환경에서의 샌드박싱 (Sandboxing)
(/gateway/sandboxing)

- 🔍 보안 감사 (Security Audit) (#-보안-감사-security-audit)
- 주요 점검 항목 (#주요-점검-항목)

- 🛡️ 보안 강화 규칙 (Audit Rules) (#️-보안-강화-규칙-audit-rules)

- 💡 수동 강화 팁 (#-수동-강화-팁)

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
