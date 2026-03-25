import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * OpenClaw 종합 학습 게시판 사이드바 설정
 * 원본 사이트(https://openclaw-wheat.vercel.app) 구조 기반
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
        'start/use-cases',
        'start/wizard',
        'start/onboarding',
        'start/pairing',
        'start/showcase',
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

    // ─── 채널 (Channels) ───────────────────────────────────
    {
      type: 'category',
      label: '채널',
      collapsible: true,
      collapsed: true,
      items: [
        'channels/index',
        'channels/whatsapp',
        'channels/telegram',
        'channels/grammy',
        'channels/discord',
        'channels/slack',
        'channels/google-chat',
        'channels/ms-teams',
        'channels/line',
        'channels/matrix',
        'channels/bluebubbles',
        'channels/imessage',
      ],
    },

    // ─── 모델 (Models / Providers) ─────────────────────────
    {
      type: 'category',
      label: '모델',
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

    // ─── 플랫폼 (Platforms) ────────────────────────────────
    {
      type: 'category',
      label: '플랫폼',
      collapsible: true,
      collapsed: true,
      items: [
        'platforms/index',
        'platforms/macos',
        'platforms/linux',
        'platforms/windows',
        'platforms/mobile',
      ],
    },

    // ─── 게이트웨이 (Gateway) ──────────────────────────────
    {
      type: 'category',
      label: '게이트웨이',
      collapsible: true,
      collapsed: true,
      items: [
        'gateway/index',
        'gateway/remote',
        'gateway/security',
        'gateway/sandboxing',
        'gateway/mcp',
        'gateway/api',
      ],
    },

    // ─── 개념 (Concepts) ───────────────────────────────────
    {
      type: 'category',
      label: '개념',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/features',
        'concepts/architecture',
        'concepts/agent',
        'concepts/context',
        'concepts/system-prompt',
        'concepts/sessions',
        'concepts/memory',
      ],
    },

    // ─── 도구 (Tools) ──────────────────────────────────────
    {
      type: 'category',
      label: '도구',
      collapsible: true,
      collapsed: true,
      items: [
        'tools/index',
        'tools/browser',
        'tools/lobster',
        'tools/sandbox',
        'tools/subagents',
        'tools/apply-patch',
      ],
    },

    // ─── 도움말 (Help) ─────────────────────────────────────
    {
      type: 'category',
      label: '도움말',
      collapsible: true,
      collapsed: true,
      items: [
        'help/faq',
      ],
    },
  ],
};

export default sidebars;
