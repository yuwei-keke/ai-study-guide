---
title: 如何让 Claude Code 理解项目结构
module: agent-guide
difficulty: 入门
lastUpdated: 2026-06-09
---

# 如何让 Claude Code 理解项目结构

## 一句话解释

Claude Code 会自动扫描你的项目文件，但你可以通过 CLAUDE.md 文件告诉它项目的关键信息，让它干活更准。

## 小白类比

你新来一个公司，第一天会看看公司的组织架构图。CLAUDE.md 就是给 Claude Code 看的"组织架构图"——帮它快速了解项目。

## 通俗解释

**Claude Code 理解项目的方式：**

1. **自动扫描**：Claude Code 会读取项目里的文件结构
2. **读取 CLAUDE.md**：你写的项目说明文件
3. **读取 README.md**：项目的公开说明
4. **分析代码**：通过代码推断项目结构

**让 Claude Code 更好理解项目的方法：**

**写好 CLAUDE.md（最重要）：**
- 说明项目用什么技术栈
- 说明项目的目录结构
- 说明代码规范和要求
- 说明特殊约束（如"不用 npm"）

**保持目录结构清晰：**
```
my-project/
├── index.html      # 入口文件
├── css/            # 样式文件
├── js/             # JavaScript 文件
├── data/           # 数据文件
├── CLAUDE.md       # AI 配置文件
└── README.md       # 项目说明
```

## 实际例子

一个好的 CLAUDE.md 示例：

```markdown
# 我的项目

## 技术栈
- 纯 HTML + CSS + JS，不用框架
- 第三方库通过 CDN 引入

## 目录结构
- index.html 是入口
- css/ 放样式
- js/ 放脚本

## 要求
- 中文注释
- 不用 npm
- 代码简洁
```

## 适合做什么

- 在项目根目录放一个 CLAUDE.md
- 写清楚技术栈和要求
- 保持目录结构清晰

## 不适合做什么

- 不要写太长太复杂的 CLAUDE.md
- 不要放矛盾的指令
- 不要忽略 CLAUDE.md 的作用

## 关键概念

- **CLAUDE.md**：给 Claude Code 的项目配置文件
- **项目上下文**：Claude Code 对项目的理解
- **目录结构**：项目文件夹的组织方式

## 下一步

CLAUDE.md 是让 AI 理解项目的关键，但项目还需要一个 README——下一章讲怎么写 README。