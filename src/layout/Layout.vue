<template>
  <div class="layout">
    <Header
      class="header"
      :activeIndex="activeIndex"
      @set-active="updateActiveIndex"
    />
    <div class="main-content">
      <slot></slot>
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import { ref } from "vue";

const activeIndex = ref(-1);

const updateActiveIndex = (index) => {
  activeIndex.value = index;
};
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  background-color: #7ddcc7;
}

.header {
  position: relative;
  top: 0%;
}

.footer {
  position: relative;
  bottom: 0;
  box-shadow: 5px 2px 5px #a6a9ad;
  max-width: 100%;
}
</style>
