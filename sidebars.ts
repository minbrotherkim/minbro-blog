import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  foreign: [
    {
      type: 'doc',
      id: 'introduction-foreign',
      label: '머릿말',
    },
    {
      type: 'category',
      label: '일본',
      items: [
          'foreign/japan/tokyo',
        'foreign/japan/osaka',
      ],
    },
    {
      type: 'category',
      label: '잉글랜드',
      items: [
        'foreign/england/london',
      ],
    },
  ],
  domestic: [
    {
      type: 'doc',
      id: 'introduction-domestic',
      label: '머릿말',
    },
    {
      type: 'category',
      label: '서울',
      items: [
        'domestic/seoul/gangnam',
        'domestic/seoul/seocho',
      ],
    },
  ],
};

export default sidebars;
