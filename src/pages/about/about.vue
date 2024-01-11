<template>
  <!-- 这个部分，就写 HTML -->
  <Layout> about </Layout>
</template>

<script setup lang="ts">
/**
 * script 部分，就相当于原来的 JS script
 * 在这个部分里面去写 JS
 *
 * 简单来说，vue 就是把单个页面的 HTML，JS，CSS放到一个文件里面去写，这样能够更好的组织每一部分的代码
 * 每个页面各司其职
 */
import Layout from "@/layout/Layout.vue";
</script>

<style scoped>
/* 定义样式
     在 style 部分 写 CSS 样式， 加上 scoped 的作用呢，是使得这个 style 里面写的样式 只限于这个页面里面，不会污染全局的CSS 
  */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
