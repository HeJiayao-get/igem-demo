import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { createRouter, createWebHashHistory } from "vue-router";

// 定义路由页面
const routes = [
  { path: "/", component: () => import("./pages/home/home.vue") },
  { path: "/about", component: () => import("./pages/about/about.vue") },
  { path: "/parts", component: () => import("./pages/parts/parts.vue") },
  {
    path: "/human-practices",
    component: () => import("./pages/humanPractices/humanPractices.vue"),
  },
  {
    path: "/404",
    name: "NotFound",
    component: () => import("./pages/404/404.vue"),
    hidden: true,
    meta: { title: "404" },
  },
  // 当什么都没有匹配到的时候，重定向页面到 404 页面
  { path: "/:pathMatch(.*)", redirect: "/404", name: "notMatch", hidden: true },
];

const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
});

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.mount("#app");
