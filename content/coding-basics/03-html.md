---
title: HTML 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# HTML 是什么

## 一句话解释

HTML 是网页的**骨架**——它定义了网页上有什么内容（标题、段落、图片、按钮等）。

## 小白类比

想象你要盖一栋房子：

- **HTML** = 房子的框架结构（哪里是墙、哪里是门、哪里是窗）
- **CSS** = 装修（墙刷什么颜色、地板用什么材质）
- **JavaScript** = 家电和智能系统（开关灯、开门、空调遥控）

HTML 不关心"好不好看"，它只关心"有什么"。就像建筑蓝图只画"这里是客厅，那里是卧室"，不负责选家具颜色。

## 通俗解释

HTML 全称是 HyperText Markup Language（超文本标记语言）。它用一对对的"标签"来描述内容：

```html
<h1>这是一个标题</h1>
<p>这是一个段落</p>
<img src="photo.jpg" alt="这是一张图片">
<button>这是一个按钮</button>
```

每个标签都有特定的含义：
- `<h1>` ~ `<h6>`：标题（h1 最大，h6 最小）
- `<p>`：段落
- `<img>`：图片
- `<button>`：按钮
- `<a>`：链接
- `<div>`：容器（用来分组）
- `<input>`：输入框

## 实际例子

你看到的每一个网页，底层都是 HTML。在任何网页上右键 → "查看网页源代码"，你就能看到它的 HTML。

一个完整的 HTML 页面长这样：

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>页面标题</title>
</head>
<body>
  <h1>欢迎来到我的网页</h1>
  <p>这是我的第一个网页，用 HTML 写的。</p>
  <a href="https://www.baidu.com">点击访问百度</a>
</body>
</html>
```

## 在 Claude Code / Codex 中什么时候会用到

每次让 AI 帮你做网页，第一步就是生成 HTML：

```
你：帮我做一个个人介绍页面
AI：（首先会创建一个 index.html 文件，里面是 HTML 代码）
```

你不需要背所有标签，只需要知道：
- 想加标题？用 `<h1>`
- 想加文字？用 `<p>`
- 想加图片？用 `<img>`
- 想加链接？用 `<a>`

其他的让 AI 帮你写就行。

## 常见错误

- **忘记闭合标签**：`<p>内容` 应该写成 `<p>内容</p>`（虽然浏览器会自动修复，但不规范）
- **把内容写在 `<head>` 里**：`<head>` 里放元信息，可见内容要放在 `<body>` 里
- **混淆 HTML 和 CSS**：HTML 管"有什么"，CSS 管"长什么样"

## 示例代码

保存为 `my-page.html`，用浏览器打开：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>我的自我介绍</title>
</head>
<body>
  <h1>你好，我是小明 👋</h1>
  <h2>关于我</h2>
  <p>我是一名大学生，正在学习 AI 编程。</p>

  <h2>我的爱好</h2>
  <ul>
    <li>🎮 打游戏</li>
    <li>📖 看书</li>
    <li>🎵 听音乐</li>
  </ul>

  <h2>联系我</h2>
  <p>邮箱：<a href="mailto:xiaoming@example.com">xiaoming@example.com</a></p>
</body>
</html>
```

## 下一步

- [CSS 是什么](#coding-basics/04-css) — 学习如何让网页变好看
- [JavaScript 是什么](#coding-basics/05-javascript) — 学习如何让网页有交互
