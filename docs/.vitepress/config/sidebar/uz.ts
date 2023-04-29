import type { DefaultTheme } from 'vitepress'

export const uz: DefaultTheme.Sidebar = {
  '/uz/': [
    {
      text: 'Qo\'llanma',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Kirish',
          link: '/uz/pages/guide/introduction',
        },
        {
          text: 'Boshlash',
          link: '/uz/pages/guide/',
        },
      ],
    },
    {
      text: 'Konfiguratsiya',
      collapsible: true,
      collapsed: false,
      items: [
        {
          text: 'Shablonni sozlash',
          link: '/uz/pages/config/',
        },
        {
          text: 'Tegishli ko\'rsatish',
          link: '/uz/pages/config/show',
        },
        {
          text: 'Muhandislik bilan bog\'liq',
          link: '/uz/pages/config/engineer',
        },
      ],
    },
    {
      text: 'FAQ',
      items: [
        {
          text: 'FAQ',
          link: '/uz/pages/faq/',
        },
      ],
    },
  ],
}