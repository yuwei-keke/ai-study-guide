---
title: package.json 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# package.json 是什么

## 一句话解释

package.json 是 Node.js 项目的"身份证"——它记录了项目名称、版本、依赖包和可运行的脚本命令。

## 小白类比

package.json 就像一份菜谱：上面写着菜名（项目名）、需要哪些食材（依赖）、怎么做这道菜（脚本命令）。有了菜谱，任何人拿到都能做出一样的菜。

## 通俗解释

每个 Node.js 项目的根目录下都有一个 package.json 文件。它是项目的配置中心。

**package.json 里有什么：**
- **name**：项目名称
- **version**：项目版本号
- **dependencies**：项目运行时需要的包
- **devDependencies**：开发时需要的包（打包后不需要）
- **scripts**：自定义的命令（如 npm run dev）
- **description**：项目描述

## 实际例子

```json
{
  "name": "my-website",
  "version": "1.0.0",
  "description": "我的个人网站",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}
```

有了这个文件，别人拿到你的项目后，只需要运行 `npm install` 就能自动安装所有依赖。

## 适合做什么

- 记录项目信息和依赖
- 定义快捷命令（npm run xxx）
- 让项目可复现（别人能一键安装所有依赖）

## 不适合做什么

- 不要手动编辑 node_modules 里的内容
- 不要在 dependencies 里放开发工具（应该放 devDependencies）

## 关键概念

- **dependencies vs devDependencies**：前者是运行必需的，后者是开发才用的
- **语义化版本**：^3.4.0 表示兼容 3.4.0 以上的 3.x 版本
- **lock 文件**：package-lock.json 锁定每个包的精确版本

## 下一步

每个项目通常还有一个 README 文件——下一章来了解它是什么。