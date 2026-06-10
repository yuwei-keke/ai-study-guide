---
title: Vercel / Netlify / Cloudflare Pages
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# Vercel / Netlify / Cloudflare Pages

## 一句话解释

这三个平台让你免费、一键部署静态网站——不用买服务器，不用配置环境，推代码就自动上线。

## 小白类比

传统部署就像自己开店：要租店面、装修、办手续。用 Vercel/Netlify 就像在商场租一个现成的柜台：拎包入驻，水电全包。

## 通俗解释

**Vercel**
- Next.js 框架的开发商，部署体验最好
- 免费额度很慷慨，个人项目完全够用
- 自动 HTTPS、自定义域名、全球 CDN
- 支持前端框架（React、Vue、Svelte 等）

**Netlify**
- 和 Vercel 类似的平台
- 对纯静态网站支持很好
- 有表单收集、函数计算等附加功能
- 免费版每月 100GB 流量

**Cloudflare Pages**
- Cloudflare 出品，全球 CDN 最快
- 免费额度几乎无限
- 适合对性能要求高的项目

## 实际例子

用 Vercel 部署的步骤：

```bash
# 1. 安装 Vercel CLI
npm install -g vercel

# 2. 在项目目录运行
vercel

# 3. 按提示操作，1 分钟后网站就上线了
# 会给你一个 xxx.vercel.app 的地址
```

或者更简单：直接在 Vercel 网站上关联 GitHub 仓库，每次 push 代码自动部署。

## 适合做什么

- 部署个人博客和作品集
- 部署前端项目和静态网站
- 快速上线 MVP 产品

## 不适合做什么

- 不适合需要后端服务的项目（需要用 Vercel Functions 或其他方案）
- 免费版有流量和构建次数限制
- 不要存放敏感数据

## 关键概念

- **静态网站**：只有 HTML/CSS/JS，没有后端
- **持续部署**：代码一推就自动部署
- **Serverless**：不用管服务器，平台自动处理

## 下一步

如果你想在自己电脑上模拟一个和生产环境一样的运行环境，可以了解 Docker。