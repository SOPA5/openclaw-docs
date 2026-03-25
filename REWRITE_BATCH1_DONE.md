# OpenClaw 학습 게시판 문서 전면 개정 — 1차 완료

**작업 완료일**: 2026-03-25  
**기준 문서**: `OFFICIAL_REFERENCE.md` (v2026.3.23 기준)  
**작업자**: franky (subagent)

---

## ✅ 수정 완료 파일 목록

### 시작하기 (7개)

| 파일 | 주요 변경사항 |
|------|-------------|
| `docs/start/getting-started.md` | Node 24 권장/Node 22.16+ 호환으로 업데이트, `onboard --install-daemon` 추가, 5단계 흐름으로 재구성 |
| `docs/start/use-cases.md` | 5→6개 사례로 확장, 모바일 node 활용 사례 추가, 20개+ 채널/30개+ 제공자 언급 |
| `docs/start/wizard.md` | `onboard --install-daemon` 기준으로 재작성, 설정 항목 테이블 정리, 개별 재설정 명령 추가 |
| `docs/start/onboarding.md` | macOS 앱 전용 가이드로 명확화, TCC 권한 테이블 추가, DMG/Homebrew 설치 병기 |
| `docs/start/pairing.md` | 23개 채널 전체 목록 테이블 추가, 4가지 페어링 방식 상세 설명, `allowFrom` 보안 설정 포함 |
| `docs/start/showcase.md` | 모든 사례에 **(출처 미확인)** 표시 추가, 섹션별 설명 보강 |
| `docs/start/openclaw.md` | Gateway 아키텍처 다이어그램 추가, WhatsApp+Telegram 설정 예시 상세화, 워크스페이스 테이블 추가 |

### 설치 (6개)

| 파일 | 주요 변경사항 |
|------|-------------|
| `docs/install/index.md` | Node 24 권장 명시, 6가지 설치 방법 테이블, pnpm/소스빌드/main 브랜치 대체 경로 추가, `openclaw doctor` 안내 |
| `docs/install/installer.md` | 환경 변수 테이블(PREFIX/VERSION/SKIP_GATEWAY) 추가, 스크립트 작동 원리 명확화, 업데이트 명령 추가 |
| `docs/install/docker.md` | 특정 버전 고정 예시 추가, 헬스체크 설정 추가, sandbox 설정을 JSON/CLI 양방향 예시 제공 |
| `docs/install/nix.md` | autoStart 옵션 추가, 롤백 가능 이점 추가, 문제 해결 섹션 추가 |
| `docs/install/ansible.md` | vars.yml 예시 추가, 보안 항목 테이블 정리, 버전 업데이트 명령 추가 |
| `docs/install/bun.md` | 알려진 제한사항 섹션 추가, Node.js로 전환 방법 추가, 경고 박스 명확화 |

### 플랫폼 (5개)

| 파일 | 주요 변경사항 |
|------|-------------|
| `docs/platforms/index.md` | iOS/Android node 현황 반영, 아키텍처 다이어그램 추가, 플랫폼별 특징 테이블 업데이트 |
| `docs/platforms/macos.md` | 3가지 설치 방법 분리, TCC 권한 테이블(6개 항목), LaunchAgent 경로 명시, 로그 위치 추가 |
| `docs/platforms/linux.md` | systemd 명령 상세화, headless 모드/Xvfb 설명 추가, 배포판별(Ubuntu/Fedora/Arch) 설정 분리 |
| `docs/platforms/windows.md` | WSL2(권장)/네이티브 경로 명확히 분리, PowerShell 방화벽 설정 명령 추가, Windows Scheduled Task 방식 명시 |
| `docs/platforms/mobile.md` | "출시 예정" 삭제, node 페어링 현재 상태로 전면 재작성, iOS/Android 기능 테이블 각각 분리, Tailscale/Cloudflare Tunnel 연결 가이드 추가 |

---

## 🔑 전반적인 개정 원칙 준수 현황

- [x] **OFFICIAL_REFERENCE.md** 기준 최신 정보 반영
- [x] **frontmatter** (title, sidebar_label, sidebar_position) 전부 유지
- [x] **v2026.3.23** 버전 기준 작성
- [x] **Node 24 권장, Node 22.16+ 호환** 명시
- [x] **`curl | bash` + `npm install -g openclaw@latest` + `openclaw onboard --install-daemon`** 설치 명령 기준
- [x] **20개 이상 채널, 30개 이상 제공자** 언급
- [x] **OS별 탭/섹션 분리** (platforms/windows.md: WSL2/네이티브, platforms/linux.md: 배포판별)
- [x] **공통 내용 중복 없이** 차이가 있는 부분만 분기
- [x] **깨진 링크 없이** 현재 docs 세트 내 링크만 사용
- [x] **한국어 작성**, 코드/명령어는 원문 유지
- [x] **showcase.md** 모든 사례에 "(출처 미확인)" 표시
- [x] **platforms/mobile.md** "출시 예정" 삭제, node 페어링 현재 상태로 재작성

---

## 📎 참고 링크 검증

내부 링크 사용 패턴:
- `/start/getting-started`, `/start/wizard`, `/start/pairing`, `/start/showcase`, `/start/use-cases`, `/start/onboarding`, `/start/openclaw`
- `/install/`, `/install/installer`, `/install/docker`, `/install/nix`, `/install/ansible`, `/install/bun`
- `/platforms/`, `/platforms/macos`, `/platforms/linux`, `/platforms/windows`, `/platforms/mobile`
- `/channels/`, `/providers/`, `/gateway/security`

모든 링크는 현재 docs 세트에 존재하는 파일을 참조합니다.
