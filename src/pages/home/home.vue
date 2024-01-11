<template>
  <!-- 这个部分，就写 HTML -->
  <Layout>
    <div class="home">
      <div class="cover"><img src="" alt="" /></div>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import Layout from "@/layout/Layout.vue";
</script>

<style scoped>
.home {
  min-height: 100vh;
}
.cover {
  min-height: 100vh;
  background-color: #0093e9;
  background-image: linear-gradient(180deg, #0093e9 0%, #80d0c7 100%);
}
</style>
