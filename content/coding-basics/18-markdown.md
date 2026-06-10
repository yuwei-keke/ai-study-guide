---
title: Markdown 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# Markdown 是什么

## 一句话解释

Markdown 是一种"简化版的排版语言"——用简单的符号就能写出格式化的文档，不需要鼠标点来点去。

## 小白类比

你发微信时用 *文字* 表示斜体、**文字** 表示加粗，其实你已经在用类似 Markdown 的思路了。Markdown 把这种思路规范化了。

## 通俗解释

Markdown 是一种轻量级标记语言，由 John Gruber 在 2004 年创建。它用简单的符号来表示格式。

**常用语法：**
- `# 标题` → 一级标题（# 越多标题越小）
- `**加粗** → 加粗文字
- `*斜体*` → 斜体文字
- `- 列表项` → 无序列表
- `1. 列表项` → 有序列表
- `[链接文字](网址)` → 超链接
- `![图片描述](图片地址)` → 图片
- ```代码块``` → 代码块
- `> 引用` → 引用块

## 实际例子

```markdown
# 我的笔记

## 今天学了什么

- 学了 **HTML** 基础
- 学了 *CSS* 样式
- 做了一个[小网页](https://example.com)

## 代码示例

\`\`\`javascript
console.log('Hello World');
\`\`\`

> 学习编程最重要的是多练习！
```

渲染后会变成格式化的文档，有标题、加粗、链接、代码块和引用。

## 适合做什么

- 写技术文档和 README
- 写博客文章
- 做笔记
- GitHub 上写 Issue 和评论

## 不适合做什么

- 不适合做复杂排版（如多栏布局、精确图片位置）
- 不适合替代 Word 做正式报告
- 不同平台的 Markdown 渲染可能有差异

## 关键概念

- **渲染**：把 Markdown 符号转换成可视化格式的过程
- **GFM（GitHub Flavored Markdown）**：GitHub 扩展的 Markdown 语法
- **frontmatter**：Markdown 文件头部的元数据（用 YAML 格式）

## 下一步

知道了 Markdown，接下来了解环境变量——管理配置和密钥的重要方式。