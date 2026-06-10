---
title: CLAUDE.md 模板大全
module: agent-guide
difficulty: 入门
lastUpdated: 2026-06-09
---

# CLAUDE.md 模板大全

## 一句话解释

这里提供不同场景下的 CLAUDE.md 模板，你可以直接复制粘贴，改成自己的项目信息就能用。

## 小白类比

CLAUDE.md 模板就像简历模板——你不用从零开始排版，选一个合适的模板填上自己的信息就行。

## 通俗解释

**模板 1：纯静态网站**
```markdown
# 项目名称

## 技术栈
- 纯 HTML + CSS + JavaScript
- 不使用框架
- 第三方库通过 CDN 引入

## 目录结构
- index.html - 入口页面
- css/ - 样式文件
- js/ - JavaScript 文件
- images/ - 图片资源

## 要求
- 中文注释
- 兼容主流浏览器
- 响应式设计（适配手机）
```

**模板 2：前端框架项目**
```markdown
# 项目名称

## 技术栈
- Vue 3 + TypeScript
- Vite 构建工具
- Element Plus UI 框架

## 命令
- npm run dev - 启动开发服务器
- npm run build - 构建生产版本

## 规范
- 组件用 PascalCase 命名
- 函数用 camelCase 命名
- 每个组件不超过 200 行
```

**模板 3：全栈项目**
```markdown
# 项目名称

## 技术栈
- 前端：React + Next.js
- 后端：Node.js + Express
- 数据库：MongoDB

## 目录结构
- /src/app - 前端页面
- /api - 后端 API
- /models - 数据模型

## 要求
- API 遵循 RESTful 规范
- 错误处理要完善
- 写单元测试
```

## 实际例子

根据你的项目类型，选一个模板复制，然后修改技术栈和要求即可。

## 适合做什么

- 快速创建 CLAUDE.md
- 参考模板了解该写什么内容

## 不适合做什么

- 不要照搬模板不改内容
- 不要写和项目无关的要求

## 关键概念

- **项目特定约束**：只和当前项目相关的规则
- **通用规则**：所有项目都可以用的规则
- **分层配置**：全局 CLAUDE.md + 项目 CLAUDE.md

## 下一步

有了好的 CLAUDE.md，接下来看看让 AI Agent 遵守规范的更多技巧。