import type { DefaultTheme } from 'vitepress'

export const en: DefaultTheme.Sidebar = {
  '/': [
    {
      text: 'Guide',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Introduction',
          link: '/guide/introduction',
        },
        {
          text: 'Getting Started',
          link: '/guide/',
        },
      ],
    },
    {
      text: 'Config',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Configure Template',
          link: '/config/',
        },
        {
          text: 'Show Related',
          link: '/config/show',
        },
        {
          text: 'Engineering Related',
          link: '/config/engineer',
        },
      ],
    },
    {
      text: 'FAQ',
      items: [
        {
          text: 'FAQ',
          link: '/faq/',
        },
      ],
    },
  ],
}