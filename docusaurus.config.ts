import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Minbro\'s Blog',
  tagline: '여행 기록, 그리고 회고',
  favicon: 'img/favicon.ico',

  url: 'https://minbrotherkim.github.io',
  baseUrl: '/minbro-blog/',

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
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/pikachu.jpg',
    navbar: {
      title: 'Minbro\'s Blog',
      logo: {
        alt: '꽃카',
        src: 'img/logo.png',
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
