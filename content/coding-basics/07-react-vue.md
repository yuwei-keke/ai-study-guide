---
title: React / Vue 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# React / Vue 是什么

## 一句话解释

React 和 Vue 是两个最流行的前端框架——它们让你更高效地构建复杂的网页应用，而不是一行行手写 HTML。

## 小白类比

如果写网页是盖房子，原生 HTML/CSS/JS 就是一砖一瓦自己砌。React/Vue 就是预制构件——墙板、楼梯、窗户都是现成的，你只需要拼装组合。

## 通俗解释

**React（Meta/Facebook 出品）**
- 最流行的前端框架，用户量最大
- 核心理念：组件化——把页面拆成一个个小组件
- 用 JSX 语法，把 HTML 和 JS 写在一起
- 生态丰富：Next.js（全栈框架）、React Native（手机 App）

**Vue（尤雨溪出品，国人开发）**
- 对初学者最友好的框架
- 核心理念：渐进式——你可以只用一小部分功能
- 模板语法更接近传统 HTML
- 生态：Nuxt.js（全栈框架）、uni-app（跨平台小程序）

**它们的共同点：**
1. 组件化开发——把页面拆成可复用的组件
2. 数据驱动视图——数据变了，页面自动更新
3. 虚拟 DOM——高效更新页面，不用手动操作 DOM

## 实际例子

一个计数器组件：

**React 写法：**
```jsx
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>你点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>点击</button>
    </div>
  );
}
```

**Vue 写法：**
```vue
<template>
  <div>
    <p>你点击了 {{ count }} 次</p>
    <button @click="count++">点击</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
const count = ref(0);
</script>
```

## 适合做什么

- 构建复杂的单页应用（SPA）
- 开发需要频繁更新界面的项目
- 大型团队协作开发
- 做手机 App（React Native / uni-app）

## 不适合做什么

- 简单的静态页面（用原生 HTML 就够了）
- 初学者直接上手（建议先学 HTML/CSS/JS 基础）
- 对性能极致要求的场景（框架有额外开销）

## 关键概念

- **组件（Component）**：可复用的 UI 单元，像乐高积木
- **状态（State）**：组件内部的数据，数据变了页面自动更新
- **单向数据流**：数据从父组件流向子组件，便于追踪和调试

## 下一步

前端框架搞定了，接下来看看后端运行环境——Node.js。