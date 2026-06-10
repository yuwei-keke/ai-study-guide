# AI 学习指导书 - 项目规范

## 项目信息
这是一个 AI 学习知识库项目，用纯 HTML + CSS + JavaScript 实现。
目标用户是零基础学生，内容以中文为主。
项目需要长期维护，内容持续更新。

## 技术栈
- HTML5 + CSS3 + JavaScript (ES6+)
- 不使用任何框架（React、Vue、Angular 等）
- 不使用 TypeScript
- 不使用 npm / pnpm，不引入 Node.js 依赖
- Markdown 渲染用 CDN 引入的 marked.js
- 代码高亮用 CDN 引入的 highlight.js

## 目录结构
- `index.html` - 主页面入口
- `css/` - 样式文件
- `js/` - JavaScript 文件
- `js/app.js` - 主逻辑 + 内嵌数据（MODULES_DATA、NEWS_DATA、SKILLS_DATA）— **唯一数据源**
- `js/content-data.js` - 内嵌 Markdown 内容（CONTENT_DATA）— **唯一内容源**
- `data/` - JSON 数据文件的备份/参考，**不参与运行**，仅供人工查阅
- `content/` - Markdown 内容文件的备份/参考，**不参与运行**

> ⚠️ **重要**：网页只使用 `js/app.js` 和 `js/content-data.js` 中的内嵌数据。
> `data/` 目录下的 JSON 文件和 `content/` 目录下的 .md 文件不会被网页加载。
> 更新数据时，必须同时修改 `js/app.js` 中的内嵌常量。

## 工作流程
1. 修改前先说明：要改哪个文件、改什么内容、为什么改
2. 修改后总结：改了什么、保留了什么、如何查看效果
3. 不确定的地方先给出判断和风险说明
4. 不要一次性大规模重构

## 代码规范
- 代码中写中文注释，方便零基础学生阅读
- 变量名和函数名用英文（驼峰命名）
- 文件名用小写加连字符（如 `01-what-is-ai.md`）
- CSS 使用变量管理主题色（已定义在 `:root` 中）
- JavaScript 使用 ES6+ 语法（const/let、箭头函数、async/await）

## 内容规范
- 每个 Markdown 文件都要有 frontmatter（title、module、difficulty、lastUpdated）
- 内容面向零基础学生，用通俗语言讲解
- 每个概念都要有：一句话解释、小白类比、实际例子
- 每个知识点约 500 字，不要太短也不要太长
- 用中文写作，专业术语附带通俗解释

## 安全规则
1. **不要删除 `content/` 目录下的任何 .md 文件**，除非明确要求
2. **不要修改 `data/modules.json` 的整体结构**，只能添加新条目
3. **不要改变 CSS 变量的命名**，新样式可以添加新变量
4. **不要引入 npm 依赖**，第三方库通过 CDN 引入
5. **不要修改已有文件的核心逻辑**，除非明确要求

## 禁止事项
- 不要使用 document.write
- 不要使用 eval
- 不要在 HTML 中写大量内联样式
- 不要把所有代码写在一个文件里
- 不要使用需要付费的第三方服务作为核心功能
- 不要把 API Key 写死在代码中

## 更新内容时的规范
- 新增 Markdown 文件放在对应的 `content/` 子目录中
- 新增文件后在 `data/modules.json` 中添加索引
- 热点新闻更新在 `data/news.json` 中
- Skills 更新在 `data/skills.json` 中
- 更新后记得修改 `lastUpdated` 日期

## V3 自动更新功能
- 每周一早上 8 点通过 Codex CronCreate 自动更新 NEWS_DATA 和 SKILLS_DATA
- 定时任务 ID: 21947c98，持久化存储在 `.Codex/scheduled_tasks.json`
- 更新方式：WebSearch 搜索最新 AI 新闻和热门技能，然后更新 js/app.js 中的内嵌数据
- 同步更新 `data/news.json` 和 `data/skills.json` 保持一致
- **注意**：定时任务仅在 Codex 打开时才会触发，7 天后自动过期需重新创建
- 手动更新：对 Codex 说"帮我更新 AI 新闻和 Skills 数据"
- 数据来源：36氪、IT之家等中文科技媒体
