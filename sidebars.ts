import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * OpenClaw 종합 학습 게시판 사이드바 설정
 * 원본 사이트(https://openclaw-docs-pied.vercel.app) 구조 기반
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    // ─── 시작하기 (Get Started) ─────────────────────────────
    {
      type: 'category',
      label: '시작하기',
      collapsible: true,
      collapsed: false,
      items: [
        'start/getting-started',
        'start/wizard',
        'start/onboarding',
        'start/pairing',
        'start/use-cases',
        'start/openclaw',
      ],
    },

    // ─── 설치 (Install) ────────────────────────────────────
    {
      type: 'category',
      label: '설치',
      collapsible: true,
      collapsed: true,
      items: [
        'install/index',
        'install/installer',
        'install/docker',
        'install/nix',
        'install/ansible',
        'install/bun',
      ],
    },

    // ─── 설정 (Configuration) ──────────────────────────────
    {
      type: 'category',
      label: '설정',
      collapsible: true,
      collapsed: true,
      items: [
        'gateway/index',
        'providers/index',
        'providers/anthropic',
        'providers/openai',
        'providers/google-gemini',
        'providers/openrouter',
        'providers/amazon-bedrock',
        'providers/local-models',
        'platforms/index',
        'platforms/macos',
        'platforms/linux',
        'platforms/windows',
        'platforms/mobile',
        'gateway/remote',
      ],
    },

    // ─── 채널 (Channels) ───────────────────────────────────
    {
      type: 'category',
      label: '채널',
      collapsible: true,
      collapsed: true,
      items: [
        'channels/index',
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

    // ─── 에이전트 (Agents) ─────────────────────────────────
    {
      type: 'category',
      label: '에이전트',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/agent',
        'concepts/sessions',
        'concepts/memory',
        'tools/subagents',
        'concepts/context',
        'concepts/system-prompt',
      ],
    },

    // ─── 고급 기능 (Advanced Features) ─────────────────────
    {
      type: 'category',
      label: '고급 기능',
      collapsible: true,
      collapsed: true,
      items: [
        'tools/index',
        'tools/browser',
        'tools/lobster',
        'tools/sandbox',
        'tools/apply-patch',
        'gateway/security',
        'gateway/sandboxing',
        'gateway/mcp',
        'gateway/api',
      ],
    },

    // ─── 레퍼런스 / 도움말 (Reference / Help) ───────────────
    {
      type: 'category',
      label: '레퍼런스 / 도움말',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/features',
        'concepts/architecture',
        'start/showcase',
        'help/faq',
      ],
    },
  ],
};

export default sidebars;
