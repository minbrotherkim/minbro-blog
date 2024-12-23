import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const isVercel = process.env.VERCEL === '1';

const config: Config = {
  title: 'Minbro\'s Blog',
  tagline: '여행 기록, 그리고 회고',
  favicon: 'img/nuo_favicon.ico',

  url: 'https://minbrotherkim.github.io',
  baseUrl: isVercel ? '/' : '/minbro-blog/',

  organizationName: 'minbrotherkim',
  projectName: 'minbro-blog',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // editUrl:
          //   'https://github.com/minbrotherkim/minbro-blog/tree/main',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/nuo_thumbnail.jpg',
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Minbro\'s Blog',
      logo: {
        alt: '누오',
        src: 'img/nuo_logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'foreign',
          position: 'left',
          label: '해외여행',
        },
        {
          type: 'docSidebar',
          sidebarId: 'domestic',
          position: 'left',
          label: '국내여행',
        },
        {
          type: 'docSidebar',
          sidebarId: 'diary',
          position: 'left',
          label: '연간회고',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/minbrotherkim/minbro-blog',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Minbrotherkim.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
