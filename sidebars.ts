import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * OpenClaw 학습 가이드 사이드바
 *
 * 유저 플로우 기준 배치:
 * 소개 → 설치 → 초기 설정 → 채널 연결 → 시작하기 → 에이전트 → 고급 → 자동화 → 참고
 */
const sidebars: SidebarsConfig = {
  docsSidebar: [
    // ─── 1. 소개 ──────────────────────────────────────────────
    {
      type: 'category',
      label: '🏠 소개',
      collapsible: true,
      collapsed: false,
      items: [
        'start/openclaw',
        'concepts/features',
        'start/use-cases',
        'start/showcase',
      ],
    },

    // ─── 2. 설치 ──────────────────────────────────────────────
    {
      type: 'category',
      label: '📦 설치',
      collapsible: true,
      collapsed: false,
      items: [
        'install/index',
        'install/installer',
        'install/docker',
        'install/nix',
        'install/ansible',
        'install/bun',
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
        'start/wizard',
        'start/onboarding',
        'gateway/index',
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
            {
              type: 'category',
              label: '추가 제공자',
              collapsible: true,
              collapsed: true,
              items: [
                'providers/deepseek',
                'providers/groq',
                'providers/ollama',
                'providers/vllm',
                'providers/together',
                'providers/fireworks',
                'providers/mistral',
                'providers/perplexity',
                'providers/cohere',
                'providers/xai',
              ],
            },
          ],
        },
      ],
    },

    // ─── 4. 채널 연결 ────────────────────────────────────────
    {
      type: 'category',
      label: '💬 채널 연결',
      collapsible: true,
      collapsed: true,
      items: [
        'start/pairing',
        'channels/index',
        {
          type: 'category',
          label: '주요 채널',
          collapsible: true,
          collapsed: false,
          items: [
            'channels/telegram',
            'channels/whatsapp',
            'channels/discord',
            'channels/slack',
            'channels/google-chat',
            'channels/ms-teams',
            'channels/line',
            'channels/matrix',
          ],
        },
        {
          type: 'category',
          label: '추가 채널',
          collapsible: true,
          collapsed: true,
          items: [
            'channels/signal',
            'channels/irc',
            'channels/nostr',
            'channels/rocket-chat',
            'channels/mattermost',
            'channels/zulip',
            'channels/twilio-sms',
            'channels/webhook',
            'channels/bluebubbles',
            'channels/imessage',
            'channels/grammy',
          ],
        },
      ],
    },

    // ─── 5. 시작하기 ─────────────────────────────────────────
    {
      type: 'category',
      label: '🚀 시작하기',
      collapsible: true,
      collapsed: true,
      items: [
        'start/getting-started',
        'start/use-cases',
      ],
    },

    // ─── 6. 에이전트 ─────────────────────────────────────────
    {
      type: 'category',
      label: '🤖 에이전트',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/agent',
        'concepts/multi-agent',
        'concepts/sessions',
        'concepts/memory',
        'concepts/memory-compaction',
        'concepts/skills',
        'concepts/nodes',
        'concepts/context',
        'concepts/system-prompt',
        'tools/subagents',
      ],
    },

    // ─── 7. 고급 기능 ────────────────────────────────────────
    {
      type: 'category',
      label: '🔧 고급 기능',
      collapsible: true,
      collapsed: true,
      items: [
        'tools/index',
        'tools/browser',
        'tools/lobster',
        'tools/sandbox',
        'tools/apply-patch',
        'tools/voice-talk',
        'tools/canvas',
        'tools/plugin-sdk',
        'gateway/security',
        'gateway/security-advanced',
        'gateway/sandboxing',
        'gateway/mcp',
        'gateway/api',
        'gateway/remote',
        'gateway/tailscale',
      ],
    },

    // ─── 8. 자동화 ───────────────────────────────────────────
    {
      type: 'category',
      label: '⚡ 자동화',
      collapsible: true,
      collapsed: true,
      items: [
        'gateway/automation',
      ],
    },

    // ─── 9. 참고 / 도움말 ────────────────────────────────────
    {
      type: 'category',
      label: '📚 참고 / 도움말',
      collapsible: true,
      collapsed: true,
      items: [
        'concepts/architecture',
        'gateway/config-reference',
        'help/faq',
      ],
    },
  ],
};

export default sidebars;
