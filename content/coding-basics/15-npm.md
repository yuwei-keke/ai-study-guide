---
title: npm / pnpm 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# npm / pnpm 是什么

## 一句话解释

npm 是 Node.js 的"应用商店"——别人写好的代码包（库），你用一条命令就能下载到自己项目里用。

## 小白类比

你要做一道菜，需要面粉、酱油、醋。你不会自己种小麦、酿酱油吧？你去超市买现成的。npm 就是代码世界的超市——你需要什么功能，直接"买"（安装）一个现成的包。

## 通俗解释

npm（Node Package Manager）是 Node.js 自带的包管理器。它管理着上百万个开源代码包。

**npm 能做什么：**
1. **安装包**：一行命令下载别人写好的代码
2. **管理依赖**：自动记录你的项目用了哪些包
3. **运行脚本**：定义和执行项目命令
4. **发布包**：把你写的包分享给别人

**常用命令：**
```bash
# 初始化项目（创建 package.json）
npm init

# 安装一个包
npm install lodash

# 安装开发专用的包
npm install --save-dev prettier

# 运行 package.json 里定义的脚本
npm run dev
```

**pnpm 是什么：**
pnpm 是 npm 的替代品，速度更快、占用空间更小。功能和 npm 一样，只是性能更好。

## 实际例子

你想在项目里用 lodash 这个工具库：

```bash
npm install lodash
```

然后在代码里就能用了：
```javascript
import _ from 'lodash';
const result = _.chunk(['a', 'b', 'c', 'd'], 2);
// 结果：[['a', 'b'], ['c', 'd']]
```

## 适合做什么

- 安装和管理项目依赖的第三方库
- 定义项目命令（如 npm run dev 启动开发服务器）
- 分享自己写的开源工具

## 不适合做什么

- 不要盲目安装来路不明的包（可能有安全风险）
- 不要把 node_modules 文件夹提交到 Git（太大了）
- 不要同时用 npm 和 pnpm 管理同一个项目

## 关键概念

- **package.json**：项目的配置文件，记录了依赖列表和脚本命令
- **node_modules**：存放安装的包的文件夹，通常很大
- **语义化版本**：版本号格式如 1.2.3，分别表示主版本.次版本.补丁

## 下一步

说到 npm 就不得不提 package.json——下一章来了解这个重要的配置文件。