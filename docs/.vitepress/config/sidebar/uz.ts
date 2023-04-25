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
          link: '/uz/guide/introduction',
        },
        {
          text: 'Boshlash',
          link: '/uz/guide/',
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
          link: '/uz/config/',
        },
        {
          text: 'Tegishli ko\'rsatish',
          link: '/uz/config/show',
        },
        {
          text: 'Muhandislik bilan bog\'liq',
          link: '/uz/config/engineer',
        },
      ],
    },
    {
      text: 'FAQ',
      items: [
        {
          text: 'FAQ',
          link: '/uz/faq/',
        },
      ],
    },
  ],
}