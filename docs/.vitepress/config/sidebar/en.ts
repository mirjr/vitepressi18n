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
          link: '/pages/guide/introduction',
        },
        {
          text: 'Getting Started',
          link: '/pages/guide/',
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
          link: '/pages/config/',
        },
        {
          text: 'Show Related',
          link: '/pages/config/show',
        },
        {
          text: 'Engineering Related',
          link: '/pages/config/engineer',
        },
      ],
    },
    {
      text: 'FAQ',
      items: [
        {
          text: 'FAQ',
          link: '/pages/faq/',
        },
      ],
    },
  ],
}