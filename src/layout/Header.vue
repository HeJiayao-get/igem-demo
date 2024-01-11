<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
    <el-menu-item index="/">
      <img
        src="https://2023.igem.wiki/zjut-china/assets/logo-4605ZMFq.svg"
        alt="logo"
        width="40"
        height="40"
      />
      <span class="head-title"> ZJUT 2024 </span>
    </el-menu-item>
    <div class="flex-grow"></div>
    <el-menu-item index="/">Home </el-menu-item>
    <el-sub-menu index="2">
      <template #title>Team</template>
      <el-menu-item index="2-1">Team</el-menu-item>
      <el-menu-item index="2-2">Attributions</el-menu-item>
      <el-menu-item index="2-3">Collaboration</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="3">
      <template #title>Project</template>
      <el-menu-item index="2-1">Description</el-menu-item>
      <el-menu-item index="2-2">Engineering</el-menu-item>
      <el-menu-item index="2-3">Experiments</el-menu-item>
      <el-menu-item index="2-3">Results</el-menu-item>
      <el-menu-item index="2-3">Contribution</el-menu-item>
      <el-menu-item index="2-3">Partnership</el-menu-item>
      <el-menu-item index="2-3">Implementation</el-menu-item>
      <el-menu-item index="2-3">Communication</el-menu-item>
      <el-menu-item index="2-3">Notebook</el-menu-item>
    </el-sub-menu>
    <el-menu-item index="/parts">Parts </el-menu-item>
    <el-menu-item index="/project">Project</el-menu-item>
    <el-menu-item index="/human-practices">Human Practices</el-menu-item>
  </el-menu>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const activeIndex = ref<string>("");

const handleSelect = (key: string, keyPath: string[]): void => {
  sessionStorage.setItem("currIdx", key); //保存点击后的菜单选项
  if (keyPath !== null || keyPath !== undefined) {
    //不为空则高亮对应key的菜单选项（key=index）
    if (keyPath) {
      activeIndex.value = key; //将activeIndex设为key，则高亮key对应的菜单
    }
  }
  router.push(`${key}`); //跳转到对应菜单选项的页面
};

// 获取刷新之前的path，如果没有，指定一个默认的
const currIdx = sessionStorage.getItem("currIdx"); //获取刷新前保存的菜单选项

activeIndex.value = currIdx ? currIdx : "main"; //如果currIdx 不存在，则给一个默认激活的菜单
</script>

<style scoped>
.logo {
  display: flex; /* 新增：确保内容垂直居中 */
  align-items: center; /* 新增：确保内容垂直居中 */
  max-height: 100%; /* 确保logo不超过父元素的高度 */
  text-decoration: none;
}

.logo img {
  max-height: 100%; /* 确保图片不超过logo元素的高度 */
  max-width: 100%; /* 确保图片不超宽 */
  height: auto; /* 维持图片的原始宽高比 */
}

.head-title {
  color: black;
  font-size: 1em;
  font-family: Museo Sans Rounded;
}

.flex-grow {
}
</style>
