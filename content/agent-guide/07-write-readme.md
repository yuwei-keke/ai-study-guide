---
title: 如何写 README.md
module: agent-guide
difficulty: 入门
lastUpdated: 2026-06-09
---

# 如何写 README.md

## 一句话解释

README.md 是项目的"门面"——用 Markdown 格式写清楚项目是什么、怎么安装、怎么用。

## 小白类比

README 就像淘宝商品的详情页：买家看到的第一眼就是它，写得好不好直接决定别人会不会"下单"（使用你的项目）。

## 通俗解释

**README 的基本结构：**

1. **项目名称**：大标题，一句话描述
2. **简介**：这个项目是什么、解决什么问题
3. **功能列表**：项目能做什么
4. **安装方法**：怎么下载和运行
5. **使用方法**：怎么用
6. **技术栈**：用了什么技术
7. **贡献指南**：别人怎么参与
8. **许可证**：代码使用权限

**写 README 的原则：**
- 简洁明了，不要写小说
- 有代码示例
- 有截图或演示链接
- 保持更新

## 实际例子

```markdown
# AI 学习指导书 📚

面向零基础学生的 AI 学习知识库，用纯 HTML/CSS/JS 实现。

## ✨ 功能

- AI 基础知识学习
- 编程基础知识速查
- AI Agent 使用指南
- 提示词教程
- 暗色/亮色主题切换

## 🚀 快速开始

1. 克隆项目
   \`\`\`bash
   git clone https://github.com/xxx/ai-guide.git
   \`\`\`
2. 用浏览器打开 index.html

## 🛠 技术栈

- HTML5 + CSS3 + JavaScript
- marked.js（Markdown 渲染）
- highlight.js（代码高亮）

## 📄 许可证

MIT License
```

## 适合做什么

- 让别人快速了解你的项目
- 在 GitHub 上给项目一个好的第一印象
- 降低使用门槛

## 不适合做什么

- 不要写得太复杂
- 不要忘记更新
- 不要只有英文（如果目标用户是中文用户）

## 关键概念

- **Markdown 语法**：README 用 .md 格式编写
- **Badge**：顶部的小徽章，显示版本、构建状态等
- **MIT License**：最宽松的开源许可证之一

## 下一步

README 是给"人"看的，CLAUDE.md 是给"AI"看的——下一章详细讲怎么写 CLAUDE.md。