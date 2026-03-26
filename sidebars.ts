import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * OpenClaw 학습 가이드 사이드바
 *
 * 유저 플로우 기준 배치:
 * 소개 → 설치 → 초기 설정 → 채널 연결 → 시작하기 → 에이전트 → 고급 → 참고
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    // ─── 1. 소개 (OpenClaw란?) ──────────────────────────────
    {
      type: 'category',
      label: '🏠 소개',
      collapsible: true,
      collapsed: false,
      items: [
        'start/openclaw',        // OpenClaw란?
        'concepts/features',     // 주요 기능
        'start/use-cases',       // 활용 사례
        'start/showcase',        // 쇼케이스
      ],
    },

    // ─── 2. 설치 ─────────────────────────────────────────────
    {
      type: 'category',
      label: '📦 설치',
      collapsible: true,
      collapsed: false,
      items: [
        'install/index',         // 설치 개요 (환경별 분기)
        'install/installer',     // 원클릭 설치
        'install/docker',        // Docker
        'install/nix',           // Nix
        'install/ansible',       // Ansible
        'install/bun',           // Bun
        {
          type: 'category',
          label: '플랫폼별 가이드',
          collapsible: true,
          collapsed: true,
          items: [
            'platforms/macos',
            'platforms/linux',
            'platforms/windows',
            'platforms/mobile',
          ],
        },
      ],
    },

    // ─── 3. 초기 설정 ────────────────────────────────────────
    {
      type: 'category',
      label: '⚙️ 초기 설정',
      collapsible: true,
      collapsed: true,
      items: [
        'start/wizard',          // 설정 마법사
        'start/onboarding',      // 온보딩 가이드
        'gateway/index',         // 게이트웨이 설정
        {
          type: 'category',
          label: 'AI 모델 설정',
          collapsible: true,
          collapsed: true,
          items: [
            'providers/index',
            'providers/anthropic',
            'providers/openai',
            'providers/google-gemini',
            'providers/openrouter',
            'providers/amazon-bedrock',
            'providers/local-models',
          ],
        },
        'platforms/index',       // 플랫폼 설정 개요
      ],
    },

    // ─── 4. 채널 연결 ────────────────────────────────────────
    {
      type: 'category',
      label: '💬 채널 연결',
      collapsible: true,
      collapsed: true,
      items: [
        'start/pairing',         // 채널 페어링 (첫 연결)
        'channels/index',        // 채널 개요
        'channels/telegram',
        'channels/whatsapp',
        'channels/discord',
        'channels/slack',
        'channels/google-chat',
        'channels/ms-teams',
        'channels/line',
        'channels/matrix',
        'channels/bluebubbles',
        'channels/imessage',
        'channels/grammy',
      ],
    },

    // ─── 5. 시작하기 (첫 사용) ────────────────────────────────
    {
      type: 'category',
      label: '🚀 시작하기',
      collapsible: true,
      collapsed: true,
      items: [
        'start/getting-started', // 빠른 시작 (첫 질문까지)
      ],
    },

    // ─── 6. 에이전트 이해하기 ─────────────────────────────────
    {
      type: 'category',
      label: '🤖 에이전트',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/agent',        // 에이전트란?
        'concepts/sessions',     // 세션
        'concepts/memory',       // 메모리
        'concepts/context',      // 컨텍스트
        'concepts/system-prompt', // 시스템 프롬프트
        'tools/subagents',       // 서브에이전트
      ],
    },

    // ─── 7. 고급 기능 ─────────────────────────────────────────
    {
      type: 'category',
      label: '🔧 고급 기능',
      collapsible: true,
      collapsed: true,
      items: [
        'tools/index',           // 도구 개요
        'tools/browser',         // 브라우저
        'tools/lobster',         // Lobster
        'tools/sandbox',         // 샌드박스
        'tools/apply-patch',     // 파일 패치
        'gateway/security',      // 보안
        'gateway/sandboxing',    // 게이트웨이 샌드박싱
        'gateway/mcp',           // MCP
        'gateway/api',           // API
        'gateway/remote',        // 원격 접속
      ],
    },

    // ─── 8. 참고 / 도움말 ─────────────────────────────────────
    {
      type: 'category',
      label: '📚 참고 / 도움말',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/architecture', // 아키텍처
        'help/faq',              // FAQ
      ],
    },
  ],
};

export default sidebars;
