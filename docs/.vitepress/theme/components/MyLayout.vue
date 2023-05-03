<template>
  <Layout>
    <template #aside-outline-before>
      <Comments />
    </template>
  </Layout>
</template>

<script lang="ts" setup>
import DefaultTheme from 'vitepress/theme'
import Comments from './Comments.vue'
const { Layout } = DefaultTheme
</script>