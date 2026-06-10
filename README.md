<div align="center">

# 📘 AI 学习指导书

给零基础学习者的 AI 入门课程站：先听懂术语，再学会提问，最后用 AI Agent 做真实项目。

[🚀 开始探索](https://yuwei-keke.github.io/ai-study-guide/) ·
[📚 学习地图](https://yuwei-keke.github.io/ai-study-guide/#learning-map) ·
[🔎 术语速查](https://yuwei-keke.github.io/ai-study-guide/#glossary) ·
[🎯 AI Skills](https://yuwei-keke.github.io/ai-study-guide/#skills)

![Static Site](https://img.shields.io/badge/site-GitHub%20Pages-2ea44f)
![No Framework](https://img.shields.io/badge/framework-none-blue)
![Language](https://img.shields.io/badge/language-中文-orange)
![License](https://img.shields.io/badge/license-personal%20learning-lightgrey)

</div>

## 项目简介

这是一个可以在线阅读、也可以本地运行的 AI 学习知识库，包含以下内容：

- **AI 基础知识**：10 个核心概念的通俗讲解
- **编程基础知识**：27 个编程概念的零基础入门
- **AI Agent 配置指南**：Claude Code / Codex 的使用和配置
- **提示词教程**：如何给 AI 写好提示词
- **AI 术语速查表**：解释 Token、RAG、Agent、MCP 等常见名词
- **热门 AI Skills**：当前值得学习的 AI 技能
- **AI 热点新闻**：最新 AI 圈动态

## 如何运行

### 方法一：直接打开（最简单）

双击 `index.html` 文件，用浏览器打开即可。

> ⚠️ 注意：直接打开时，搜索和内容加载功能可能受限（浏览器安全限制）。推荐使用方法二。

### 方法二：用 VS Code 的 Live Server（推荐）

1. 安装 [VS Code](https://code.visualstudio.com/)
2. 在 VS Code 中安装 "Live Server" 插件
3. 用 VS Code 打开本项目文件夹
4. 右键点击 `index.html` → "Open with Live Server"
5. 浏览器会自动打开，所有功能正常

### 方法三：用 Python 启动本地服务器

```bash
# 在项目目录下运行
python -m http.server 8080
# 然后浏览器打开 http://localhost:8080
```

## 可选：截图级页面检查

项目本身不依赖 npm。下面的检查只用于开发时验证页面截图和控制台错误，Playwright 安装在系统临时目录，不会写入项目依赖。

```powershell
# 1. 启动本地服务
python -m http.server 8080

# 2. 安装一次临时 Playwright 包
npm install --prefix "$env:TEMP\ai-study-playwright" playwright

# 3. 运行截图级检查
$env:NODE_PATH="$env:TEMP\ai-study-playwright\node_modules"
$env:CHROME_EXE="C:\Program Files\Google\Chrome\Application\chrome.exe"
$env:SHOT_DIR="$env:TEMP\ai-study-playwright\screenshots"
node scripts\visual-check.js
```

检查会覆盖首页、术语表、新闻页、文章页、文章目录点击、移动端布局和控制台错误。

## 发布到 GitHub Pages

这是一个纯静态项目，可以直接用 GitHub Pages 托管。

1. 在 GitHub 创建一个公开仓库，例如 `ai-study-guide`
2. 本地添加远程仓库并推送：

```bash
git remote add origin https://github.com/你的用户名/ai-study-guide.git
git push -u origin main
```

3. 打开仓库的 `Settings` → `Pages`
4. `Build and deployment` 选择 `Deploy from a branch`
5. `Branch` 选择 `main`，目录选择 `/root`
6. 保存后等待几分钟，访问：

```text
https://你的用户名.github.io/ai-study-guide/
```

## 项目结构

```
AI Study/
├── index.html              # 主页面
├── css/style.css           # 全局样式
├── js/app.js               # 主逻辑
├── data/
│   ├── modules.json        # 模块索引备份/人工查阅
│   ├── skills.json         # AI Skills 数据备份/人工查阅
│   ├── news.json           # AI 热点新闻数据备份/人工查阅
│   └── glossary.json       # AI 术语表备份/人工查阅
├── content/
│   ├── ai-basics/          # AI 基础知识
│   ├── coding-basics/      # 编程基础知识
│   ├── agent-guide/        # AI Agent 配置指南
│   └── prompt-tutorial/    # 提示词教程
├── templates/              # 模板文件
├── README.md               # 项目说明（本文件）
└── CLAUDE.md               # Claude Code 项目规范
```

## 功能说明

- ✅ 左侧导航栏，按模块分类浏览
- ✅ Markdown 内容渲染，支持代码高亮
- ✅ 全文搜索
- ✅ 暗色模式切换
- ✅ 移动端适配
- ✅ 代码块一键复制
- ✅ 返回顶部按钮
- ✅ 收藏和最近浏览
- ✅ 7 天入门学习路线
- ✅ AI 术语速查表
- ✅ 新闻来源核验信息

## 如何添加新内容

> ⚠️ 重要：网页运行时优先读取 `js/app.js` 和 `js/content-data.js` 中的内嵌数据。
> `data/` 和 `content/` 目录主要用于备份、人工查阅和长期维护。
> 如果希望网页立即显示更新，必须同步修改对应的内嵌数据。

### 添加新章节

1. 在 `content/` 对应目录下创建新的 `.md` 文件
2. 在 `data/modules.json` 中添加对应的章节条目
3. 在 `js/app.js` 的 `MODULES_DATA` 中添加同样的章节条目
4. 在 `js/content-data.js` 的 `CONTENT_DATA` 中添加同样的 Markdown 内容
5. 刷新浏览器查看效果

### 更新热点新闻

1. 编辑 `data/news.json` 文件
2. 同步更新 `js/app.js` 中的 `NEWS_DATA`
3. 每条新闻建议填写 `sourceName`、`sourceUrl`、`verifiedAt`、`confidence`
4. 刷新浏览器查看效果

### 更新 Skills

1. 编辑 `data/skills.json` 文件
2. 同步更新 `js/app.js` 中的 `SKILLS_DATA`
3. 按照已有格式添加学习路线、推荐工具、常见坑和示例提示词
4. 刷新浏览器查看效果

### 更新术语表

1. 编辑 `data/glossary.json` 文件
2. 同步更新 `js/app.js` 中的 `GLOSSARY_DATA`
3. 每个术语保持固定结构：一句话解释、小白类比、实际例子、常见误区
4. 刷新浏览器查看效果

## 技术栈

- HTML5 + CSS3 + JavaScript（ES6+）
- [marked.js](https://marked.js.org/) - Markdown 渲染
- [highlight.js](https://highlightjs.org/) - 代码高亮
- 无框架依赖，纯原生实现

## 适合谁

- 零基础想了解 AI 的学生
- 想学习 AI 编程的初学者
- 想提高效率的普通人
- 想了解 AI 工具的职场人

## 许可

本项目为个人学习资料，内容持续更新中。
