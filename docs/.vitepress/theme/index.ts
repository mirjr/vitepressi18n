// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import Theme from 'vitepress/theme'
import DefaultTheme from 'vitepress/theme'
import MyLayout from './components/MyLayout.vue'
import './style.css'

export default {
  ...DefaultTheme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
}
