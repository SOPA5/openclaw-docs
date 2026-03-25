import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'OpenClaw 종합 학습 게시판',
  tagline: 'OpenClaw AI 에이전트 플랫폼 완벽 가이드',
  favicon: 'img/favicon.ico',

  // Vercel 배포용 URL
  url: 'https://openclaw-docs.vercel.app',
  baseUrl: '/',

  organizationName: 'SOPA5',
  projectName: 'openclaw-docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
    localeConfigs: {
      ko: {
        label: '한국어',
        direction: 'ltr',
        htmlLang: 'ko',
      },
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl:
            'https://github.com/SOPA5/openclaw-docs/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 소셜 카드 이미지
    image: 'img/openclaw-social-card.png',

    // 다크모드 토글
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'OpenClaw',
      logo: {
        alt: 'OpenClaw 로고',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docsSidebar',
          position: 'left',
          label: '문서',
        },
        {
          href: 'https://github.com/SOPA5/openclaw-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: '문서',
          items: [
            {
              label: '시작하기',
              to: '/start/getting-started',
            },
            {
              label: '설치',
              to: '/install/',
            },
            {
              label: '채널',
              to: '/channels/',
            },
          ],
        },
        {
          title: '커뮤니티',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/openclaw',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/openclaw',
            },
          ],
        },
        {
          title: '더 보기',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SOPA5/openclaw-docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SOPA5. Docusaurus로 제작.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'typescript', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
