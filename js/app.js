// ===== AI 学习指导书 - 主逻辑 =====

// ===== 内嵌数据（解决 file:// 协议下无法 fetch 本地文件的问题）=====

const MODULES_DATA = [
  {
    "id": "home",
    "title": "首页",
    "icon": "🏠",
    "description": "学习路线图与最新动态",
    "type": "home"
  },
  {
    "id": "ai-basics",
    "title": "AI 基础知识",
    "icon": "🤖",
    "description": "零基础了解 AI 核心概念",
    "chapters": [
      { "id": "01-what-is-ai", "title": "AI 是什么", "file": "content/ai-basics/01-what-is-ai.md" },
      { "id": "02-what-is-llm", "title": "大模型是什么", "file": "content/ai-basics/02-what-is-llm.md" },
      { "id": "03-ai-tools-compare", "title": "主流 AI 工具对比", "file": "content/ai-basics/03-ai-tools-compare.md" },
      { "id": "04-what-is-agent", "title": "什么是 AI Agent", "file": "content/ai-basics/04-what-is-agent.md" },
      { "id": "05-what-is-vibe-coding", "title": "什么是 Vibe Coding", "file": "content/ai-basics/05-what-is-vibe-coding.md" },
      { "id": "06-coding-tools-compare", "title": "AI 编程工具对比", "file": "content/ai-basics/06-coding-tools-compare.md" },
      { "id": "07-ai-for-students", "title": "AI 能帮学生做什么", "file": "content/ai-basics/07-ai-for-students.md" },
      { "id": "08-ai-efficiency", "title": "AI 提升效率的常见场景", "file": "content/ai-basics/08-ai-efficiency.md" },
      { "id": "09-ai-mistakes", "title": "使用 AI 时常见误区", "file": "content/ai-basics/09-ai-mistakes.md" },
      { "id": "10-ai-safety", "title": "AI 使用安全注意事项", "file": "content/ai-basics/10-ai-safety.md" }
    ]
  },
  {
    "id": "coding-basics",
    "title": "编程基础知识",
    "icon": "💻",
    "description": "AI 编程必须了解的基础知识",
    "chapters": [
      { "id": "01-frontend", "title": "前端是什么", "file": "content/coding-basics/01-frontend.md" },
      { "id": "02-backend", "title": "后端是什么", "file": "content/coding-basics/02-backend.md" },
      { "id": "03-html", "title": "HTML 是什么", "file": "content/coding-basics/03-html.md" },
      { "id": "04-css", "title": "CSS 是什么", "file": "content/coding-basics/04-css.md" },
      { "id": "05-javascript", "title": "JavaScript 是什么", "file": "content/coding-basics/05-javascript.md" },
      { "id": "06-typescript", "title": "TypeScript 是什么", "file": "content/coding-basics/06-typescript.md" },
      { "id": "07-react-vue", "title": "React / Vue 是什么", "file": "content/coding-basics/07-react-vue.md" },
      { "id": "08-nodejs", "title": "Node.js 是什么", "file": "content/coding-basics/08-nodejs.md" },
      { "id": "09-database", "title": "数据库是什么", "file": "content/coding-basics/09-database.md" },
      { "id": "10-api", "title": "API 是什么", "file": "content/coding-basics/10-api.md" },
      { "id": "11-localhost", "title": "本地运行与 localhost", "file": "content/coding-basics/11-localhost.md" },
      { "id": "12-port", "title": "端口是什么", "file": "content/coding-basics/12-port.md" },
      { "id": "13-git", "title": "Git 是什么", "file": "content/coding-basics/13-git.md" },
      { "id": "14-github", "title": "GitHub 是什么", "file": "content/coding-basics/14-github.md" },
      { "id": "15-npm", "title": "npm / pnpm 是什么", "file": "content/coding-basics/15-npm.md" },
      { "id": "16-package-json", "title": "package.json 是什么", "file": "content/coding-basics/16-package-json.md" },
      { "id": "17-readme", "title": "README 是什么", "file": "content/coding-basics/17-readme.md" },
      { "id": "18-markdown", "title": "Markdown 是什么", "file": "content/coding-basics/18-markdown.md" },
      { "id": "19-env", "title": "环境变量 .env 是什么", "file": "content/coding-basics/19-env.md" },
      { "id": "20-api-key", "title": "API Key 是什么", "file": "content/coding-basics/20-api-key.md" },
      { "id": "21-separation", "title": "前后端分离是什么", "file": "content/coding-basics/21-separation.md" },
      { "id": "22-deploy", "title": "部署是什么意思", "file": "content/coding-basics/22-deploy.md" },
      { "id": "23-vercel", "title": "Vercel / Netlify / Cloudflare Pages", "file": "content/coding-basics/23-vercel.md" },
      { "id": "24-docker", "title": "Docker 是什么", "file": "content/coding-basics/24-docker.md" },
      { "id": "25-wsl", "title": "WSL 是什么", "file": "content/coding-basics/25-wsl.md" },
      { "id": "26-terminal", "title": "终端 / 命令行是什么", "file": "content/coding-basics/26-terminal.md" }
    ]
  },
  {
    "id": "agent-guide",
    "title": "AI Agent 配置指南",
    "icon": "⚙️",
    "description": "Claude Code / Codex 环境配置与使用",
    "chapters": [
      { "id": "01-what-is-claude-code", "title": "Claude Code 是什么", "file": "content/agent-guide/01-what-is-claude-code.md" },
      { "id": "02-what-is-codex", "title": "Codex 是什么", "file": "content/agent-guide/02-what-is-codex.md" },
      { "id": "03-claude-vs-codex", "title": "Claude Code 和 Codex 的区别", "file": "content/agent-guide/03-claude-vs-codex.md" },
      { "id": "04-environment-setup", "title": "使用 AI Agent 前的环境准备", "file": "content/agent-guide/04-environment-setup.md" },
      { "id": "05-tools-overview", "title": "Node.js、Git、VS Code 等工具的作用", "file": "content/agent-guide/05-tools-overview.md" },
      { "id": "06-project-structure", "title": "如何让 Claude Code 理解项目结构", "file": "content/agent-guide/06-project-structure.md" },
      { "id": "07-write-readme", "title": "如何写 README.md", "file": "content/agent-guide/07-write-readme.md" },
      { "id": "08-write-claude-md", "title": "如何写 CLAUDE.md", "file": "content/agent-guide/08-write-claude-md.md" },
      { "id": "09-claude-md-templates", "title": "CLAUDE.md 模板大全", "file": "content/agent-guide/09-claude-md-templates.md" },
      { "id": "10-agent-best-practices", "title": "让 AI Agent 遵守规范的技巧", "file": "content/agent-guide/10-agent-best-practices.md" }
    ]
  },
  {
    "id": "prompt-tutorial",
    "title": "提示词教程",
    "icon": "✍️",
    "description": "如何给 AI Agent 写好提示词",
    "chapters": [
      { "id": "01-why-prompt-matters", "title": "为什么提示词很重要", "file": "content/prompt-tutorial/01-why-prompt-matters.md" },
      { "id": "02-good-prompt-structure", "title": "好提示词的结构", "file": "content/prompt-tutorial/02-good-prompt-structure.md" },
      { "id": "03-prompt-templates", "title": "提示词模板大全", "file": "content/prompt-tutorial/03-prompt-templates.md" },
      { "id": "04-prompt-tips", "title": "提示词进阶技巧", "file": "content/prompt-tutorial/04-prompt-tips.md" }
    ]
  },
  {
    "id": "glossary",
    "title": "AI 术语速查表",
    "icon": "🔎",
    "description": "遇到陌生名词时随时查",
    "type": "glossary"
  },
  {
    "id": "skills",
    "title": "热门 AI Skills",
    "icon": "🎯",
    "description": "当前值得学习的 AI 技能",
    "type": "skills"
  },
  {
    "id": "news",
    "title": "AI 热点新闻",
    "icon": "📰",
    "description": "最新 AI 圈热点动态",
    "type": "news"
  }
];

const NEWS_DATA = {
  "lastUpdated": "2026-06-10",
  "items": [
    {
      "id": "news-001",
      "title": "苹果 WWDC26 发布 Siri AI，全面拥抱 AI 时代",
      "summary": "苹果在 2026 全球开发者大会上推出全新 Siri AI，集成到灵动岛，支持独立 App 运行。iOS 27 首次实现本地写实 AI 生图，部分高级功能需要 12GB 内存。",
      "whyImportant": "苹果一直是科技风向标，Siri AI 意味着 AI 正式融入每个人的手机日常，不再只是聊天机器人。",
      "forWho": "所有 iPhone/iPad 用户，关注科技趋势的学生",
      "howToUse": "等 iOS 27 正式发布后更新系统，就能体验全新的 Siri AI 功能。",
      "sourceName": "Apple Developer",
      "sourceUrl": "https://developer.apple.com/videos/play/wwdc2026/121/",
      "verifiedAt": "2026-06-10",
      "confidence": "高",
      "links": ["https://developer.apple.com/videos/play/wwdc2026/121/"],
      "date": "2026-06-09",
      "tags": ["苹果", "Siri", "WWDC"]
    },
    {
      "id": "news-002",
      "title": "OpenAI 秘密提交 IPO 申请，AI 行业迎来上市潮",
      "summary": "OpenAI 已向美国 SEC 秘密提交 IPO 申请，最快可能于秋季上市。同期 Anthropic 也在筹备上市，AI 行业进入资本化爆发期。",
      "whyImportant": "AI 公司上市意味着行业从'烧钱研发'进入'商业化运营'阶段，AI 技术会加速普及到日常生活。",
      "forWho": "关注 AI 行业发展的学生和投资者",
      "howToUse": "关注 OpenAI 和 Anthropic 的产品更新，上市后可能会有更多免费或低价的 AI 服务。",
      "sourceName": "AP News",
      "sourceUrl": "https://apnews.com/article/c7583994426b1b097120786d6a0b8308",
      "verifiedAt": "2026-06-10",
      "confidence": "高",
      "links": ["https://apnews.com/article/c7583994426b1b097120786d6a0b8308"],
      "date": "2026-06-09",
      "tags": ["OpenAI", "IPO", "融资"]
    },
    {
      "id": "news-003",
      "title": "中国 AI 大模型周调用量连续六周超越美国",
      "summary": "OpenRouter 数据显示，中国模型周调用量达 14.19 万亿 Token，连续六周超越美国。DeepSeek-V4-Flash 蝉联榜首，MiniMax M3 首周即冲入前三。",
      "whyImportant": "国产 AI 模型正在崛起，意味着中国学生有更多免费、好用的 AI 工具可以选择。",
      "forWho": "所有中国 AI 用户，特别是预算有限的学生",
      "howToUse": "可以优先试试 DeepSeek、MiniMax 等国产模型，免费且中文理解能力强。",
      "sourceName": "新浪科技 / IT之家",
      "sourceUrl": "https://finance.sina.com.cn/tech/digi/2026-06-08/doc-iniasfpw7260329.shtml",
      "verifiedAt": "2026-06-10",
      "confidence": "中",
      "links": ["https://finance.sina.com.cn/tech/digi/2026-06-08/doc-iniasfpw7260329.shtml"],
      "date": "2026-06-08",
      "tags": ["国产AI", "DeepSeek", "开源"]
    },
    {
      "id": "news-004",
      "title": "京东腾讯联手，围绕 AI Agent 展开合作",
      "summary": "京东与腾讯联手，将京东的商品供应链与腾讯的入口资源对接，围绕 AI Agent 展开深度合作。",
      "whyImportant": "大厂开始把 AI Agent 落地到实际业务中，说明 AI Agent 不再是概念，而是真正能帮企业赚钱的工具。",
      "forWho": "想了解 AI Agent 实际应用的学生",
      "howToUse": "关注京东和腾讯的 AI 产品更新，体验 AI Agent 在购物、客服等场景的应用。",
      "sourceName": "新浪财经 / 鞭牛士",
      "sourceUrl": "https://finance.sina.com.cn/roll/2026-06-07/doc-iniaruya7378681.shtml",
      "verifiedAt": "2026-06-10",
      "confidence": "中",
      "links": ["https://finance.sina.com.cn/roll/2026-06-07/doc-iniaruya7378681.shtml"],
      "date": "2026-06-07",
      "tags": ["AI Agent", "京东", "腾讯"]
    },
    {
      "id": "news-005",
      "title": "月之暗面估值暴涨近 7 倍，再启 20 亿美元融资",
      "summary": "Kimi 背后的公司月之暗面半年估值暴涨近 7 倍，正在启动新一轮 20 亿美元融资，全球 AI 行业进入 IPO 爆发期。",
      "whyImportant": "月之暗面是中国 AI 独角兽代表，Kimi 是很多学生常用的 AI 工具，融资成功意味着产品会持续迭代。",
      "forWho": "使用 Kimi 的学生和关注中国 AI 行业的人",
      "howToUse": "继续使用 Kimi 产品，关注其新功能更新。",
      "sourceName": "Pandaily",
      "sourceUrl": "https://pandaily.com/moonshot-ai-2b-funding-20b-valuation",
      "verifiedAt": "2026-06-10",
      "confidence": "中",
      "links": ["https://pandaily.com/moonshot-ai-2b-funding-20b-valuation"],
      "date": "2026-06-09",
      "tags": ["Kimi", "融资", "独角兽"]
    }
  ]
};

const LEARNING_PLAN_DATA = [
  {
    "day": "第 1 天",
    "title": "先知道 AI 是什么",
    "goal": "建立最基础的 AI、模型、提示词概念，不追求技术细节。",
    "links": [
      { "text": "AI 是什么", "href": "#ai-basics/01-what-is-ai" },
      { "text": "大模型是什么", "href": "#ai-basics/02-what-is-llm" }
    ]
  },
  {
    "day": "第 2 天",
    "title": "学会和 AI 说清楚需求",
    "goal": "掌握提示词的基本结构，能让 AI 输出更稳定。",
    "links": [
      { "text": "为什么提示词很重要", "href": "#prompt-tutorial/01-why-prompt-matters" },
      { "text": "提示词模板大全", "href": "#prompt-tutorial/03-prompt-templates" }
    ]
  },
  {
    "day": "第 3 天",
    "title": "补齐网页和编程常识",
    "goal": "理解前端、HTML、API 这些常见词，后面和 Agent 合作会轻松很多。",
    "links": [
      { "text": "前端是什么", "href": "#coding-basics/01-frontend" },
      { "text": "HTML 是什么", "href": "#coding-basics/03-html" },
      { "text": "API 是什么", "href": "#coding-basics/10-api" }
    ]
  },
  {
    "day": "第 4 天",
    "title": "理解 AI Agent",
    "goal": "知道普通聊天 AI 和能操作工具的 Agent 有什么区别。",
    "links": [
      { "text": "什么是 AI Agent", "href": "#ai-basics/04-what-is-agent" },
      { "text": "如何写 CLAUDE.md", "href": "#agent-guide/08-write-claude-md" }
    ]
  },
  {
    "day": "第 5 天",
    "title": "建立自己的提示词模板库",
    "goal": "把常用学习、写作、整理资料任务沉淀成模板。",
    "links": [
      { "text": "提示词模板大全", "href": "#prompt-tutorial/03-prompt-templates" },
      { "text": "热门 AI Skills", "href": "#skills" }
    ]
  },
  {
    "day": "第 6 天",
    "title": "开始做一个小项目",
    "goal": "用 AI 做一个很小的网页或资料整理任务，练习把需求讲清楚。",
    "links": [
      { "text": "编程基础知识", "href": "#coding-basics/01-frontend" },
      { "text": "AI Agent 配置指南", "href": "#agent-guide/08-write-claude-md" }
    ]
  },
  {
    "day": "第 7 天",
    "title": "复盘并补术语",
    "goal": "把看不懂的词加入收藏，回到术语表补齐概念。",
    "links": [
      { "text": "AI 术语速查表", "href": "#glossary" },
      { "text": "AI 热点新闻", "href": "#news" }
    ]
  }
];

const GLOSSARY_DATA = [
  {
    "term": "大模型",
    "english": "Large Model / LLM",
    "explanation": "能理解和生成文字、图片、代码等内容的 AI 模型。",
    "analogy": "像一个读过很多资料的助手，能根据你的问题组织答案。",
    "example": "ChatGPT、Claude、DeepSeek、Kimi 都属于大模型产品。",
    "pitfall": "大模型不是万能老师，它可能一本正经地说错。"
  },
  {
    "term": "Token",
    "english": "Token",
    "explanation": "AI 处理文字时使用的基本单位，可以粗略理解成“字词碎片”。",
    "analogy": "像把一篇文章切成很多小积木，模型一块一块处理。",
    "example": "你输入越长、AI 回答越长，消耗的 Token 就越多。",
    "pitfall": "Token 不完全等于汉字数，不同模型的计算方式会有差异。"
  },
  {
    "term": "上下文窗口",
    "english": "Context Window",
    "explanation": "AI 一次对话中能看到和记住的文字范围。",
    "analogy": "像人的短期记忆，窗口越大，一次能看进来的资料越多。",
    "example": "长文档分析、代码项目理解都需要较大的上下文窗口。",
    "pitfall": "窗口大不代表一定理解好，资料太乱也会影响答案。"
  },
  {
    "term": "提示词",
    "english": "Prompt",
    "explanation": "你给 AI 的任务说明，包括背景、目标、要求和输出格式。",
    "analogy": "像给同学布置作业，要求越清楚，结果越接近预期。",
    "example": "“帮我用小白能懂的话解释 API，并给 3 个例子。”",
    "pitfall": "只说“帮我写一下”通常会得到很泛的答案。"
  },
  {
    "term": "AI Agent",
    "english": "AI Agent",
    "explanation": "能根据目标自主规划步骤、调用工具并完成任务的 AI。",
    "analogy": "普通 AI 像答疑同学，Agent 更像能帮你跑腿做事的助理。",
    "example": "Codex 读取项目、修改代码、运行测试，就是 Agent 工作方式。",
    "pitfall": "Agent 需要边界和检查，不能把重要权限完全交出去。"
  },
  {
    "term": "RAG",
    "english": "Retrieval-Augmented Generation",
    "explanation": "先从资料库检索相关内容，再让 AI 基于资料回答问题。",
    "analogy": "像考试前先翻课本找依据，再组织答案。",
    "example": "把自己的 PDF、笔记做成知识库问答系统。",
    "pitfall": "资料质量差，AI 回答也会差。"
  },
  {
    "term": "API",
    "english": "Application Programming Interface",
    "explanation": "软件之间互相调用能力和数据的接口。",
    "analogy": "像餐厅菜单，你按菜单点菜，厨房按约定给你结果。",
    "example": "网页通过 OpenAI API 调用模型生成回答。",
    "pitfall": "API Key 要保密，不能直接写进公开网页。"
  },
  {
    "term": "幻觉",
    "english": "Hallucination",
    "explanation": "AI 编造不存在或不准确的信息。",
    "analogy": "像学生不会题但硬凑了一个看起来很像答案的回答。",
    "example": "AI 可能编造论文标题、新闻来源或不存在的函数。",
    "pitfall": "越重要的信息越要查来源，不要只看 AI 的语气自信。"
  },
  {
    "term": "MCP",
    "english": "Model Context Protocol",
    "explanation": "一种让 AI Agent 连接外部工具和数据源的协议。",
    "analogy": "像给 AI 装上一组标准插座，方便接数据库、浏览器、文件系统等工具。",
    "example": "让 Codex 或 Claude Code 通过 MCP 访问 GitHub、数据库或浏览器。",
    "pitfall": "接入工具越多，越要注意权限和数据安全。"
  },
  {
    "term": "工作流",
    "english": "Workflow",
    "explanation": "把一件事拆成固定步骤，让人或 AI 按顺序完成。",
    "analogy": "像做饭菜谱：先备菜，再下锅，再调味，最后装盘。",
    "example": "每天搜索新闻、筛选、总结、写入网页，就是一个工作流。",
    "pitfall": "工作流要考虑失败情况，比如网页打不开、数据为空。"
  }
];

const SKILLS_DATA = {
  "skills": [
    {
      "id": "prompt-engineering",
      "name": "Prompt Engineering 提示词工程",
      "difficulty": "入门",
      "forWho": "所有 AI 用户",
      "whatCanDo": "学会写好提示词，让 AI 更准确地理解你的需求，大幅提升 AI 输出质量。这是使用任何 AI 工具的基础技能。",
      "learningPath": [
        "了解提示词的基本结构（角色、背景、目标、要求）",
        "练习使用提示词模板",
        "在实际任务中不断优化提示词",
        "总结自己的提示词模板库"
      ],
      "tools": ["ChatGPT", "Claude", "DeepSeek", "Kimi"],
      "projects": ["建立自己的提示词模板库", "用 AI 完成一篇高质量的文章", "用提示词让 AI 扮演不同角色完成任务"],
      "pitfalls": ["不要写太模糊的提示词", "不要期望一次就能得到完美结果", "不同 AI 工具对提示词的响应不同，要针对性调整"],
      "examplePrompt": "【角色】你是一个资深产品经理\n【背景】我想做一个小程序\n【目标】帮我写一份产品需求文档\n【要求】包含功能列表、用户故事、页面流程"
    },
    {
      "id": "ai-agent-development",
      "name": "AI Agent 智能体开发",
      "difficulty": "中级",
      "forWho": "想让 AI 自主完成复杂任务的学生和开发者",
      "whatCanDo": "构建能自主规划、执行任务的 AI Agent，让它帮你操作文件、调用工具、完成多步骤工作。2026 年最热门的 AI 方向。",
      "learningPath": [
        "了解 AI Agent 的基本概念（感知-决策-执行循环）",
        "学习使用 Claude Code 或 OpenAI Codex",
        "掌握 CLAUDE.md 配置和 MCP 协议",
        "尝试构建自己的自动化 Agent 工作流"
      ],
      "tools": ["Claude Code", "OpenAI Codex", "MCP 协议", "LangChain"],
      "projects": ["做一个自动整理文件的 Agent", "做一个自动回复邮件的 Agent", "用 Agent 搭建个人知识库"],
      "pitfalls": ["Agent 不是万能的，复杂任务需要人来拆解", "一定要给 Agent 设定边界和权限", "注意 API 调用成本"],
      "examplePrompt": "帮我做一个 AI Agent，功能是：\n1. 每天自动搜索某个话题的最新资讯\n2. 整理成结构化的摘要\n3. 保存到本地文件\n4. 如果有重要信息发送通知"
    },
    {
      "id": "rag-knowledge-base",
      "name": "RAG 知识库搭建",
      "difficulty": "中级",
      "forWho": "想让 AI 基于自己的数据回答问题的学生和企业",
      "whatCanDo": "搭建检索增强生成（RAG）系统，让 AI 能读取你的文档、笔记、资料，基于你的私有数据回答问题，而不是只靠训练数据。",
      "learningPath": [
        "了解 RAG 的基本原理（检索+生成）",
        "学习向量数据库的使用（如 ChromaDB、Pinecone）",
        "练习用 LangChain 或 LlamaIndex 搭建简单 RAG",
        "优化检索质量和回答准确度"
      ],
      "tools": ["LangChain", "LlamaIndex", "ChromaDB", "OpenAI API", "Claude API"],
      "projects": ["搭建一个基于课程笔记的问答系统", "做一个能读 PDF 的 AI 助手", "构建个人知识库搜索引擎"],
      "pitfalls": ["文档质量直接影响回答质量，垃圾进垃圾出", "向量数据库需要一定的服务器资源", "注意数据隐私和安全"],
      "examplePrompt": "帮我搭建一个 RAG 知识库：\n1. 读取我的课程笔记文件\n2. 建立向量索引\n3. 支持自然语言提问\n4. 返回答案并标注来源"
    },
    {
      "id": "ai-image-video",
      "name": "AI 图片和视频生成",
      "difficulty": "入门",
      "forWho": "需要配图、做设计、做短视频的学生和创作者",
      "whatCanDo": "用 AI 生成高质量图片和短视频，包括插画、海报、产品图、短视频素材等。2026 年 AI 视频生成质量大幅提升。",
      "learningPath": [
        "了解主流 AI 图片生成工具（Midjourney、DALL-E、可灵AI）",
        "学习图片提示词的写法和技巧",
        "尝试 AI 视频生成工具（可灵AI、即梦AI、Sora）",
        "学习后期编辑和优化"
      ],
      "tools": ["Midjourney", "DALL-E 3", "可灵AI", "即梦AI", "Sora", "通义万相"],
      "projects": ["为公众号文章生成配图", "用 AI 生成产品宣传视频", "设计一个简单的 Logo"],
      "pitfalls": ["AI 生成的内容可能有版权问题，商用需谨慎", "图片中可能出现多余的手指、文字乱码等", "视频生成还比较贵，先用图片练手"],
      "examplePrompt": "生成一张[描述]的图片，风格：[风格]，色调：[色调]，用途：[用途]"
    },
    {
      "id": "ai-workflow",
      "name": "AI 自动化工作流",
      "difficulty": "进阶",
      "forWho": "想用 AI 自动完成重复性工作的用户",
      "whatCanDo": "把重复性工作交给 AI 自动完成，比如定时整理数据、批量处理文件、自动发邮件等。企业正在大规模采用。",
      "learningPath": [
        "了解什么是 AI Agent 和工作流",
        "学习使用 Claude Code 或 n8n 等工具",
        "从简单的自动化任务开始",
        "逐步构建复杂的多步骤工作流"
      ],
      "tools": ["Claude Code", "n8n", "Make", "Dify", "Coze"],
      "projects": ["自动整理 AI 热点新闻", "自动生成周报", "做一个自动回复客服机器人"],
      "pitfalls": ["自动化任务需要考虑异常处理", "API 调用有成本，注意控制调用次数", "不要过度自动化，有些事人做比 AI 做更好"],
      "examplePrompt": "请帮我创建一个自动化脚本，功能是：\n1. 每天早上8点运行\n2. 读取[数据源]\n3. 处理[具体操作]\n4. 输出结果到[目标位置]"
    }
  ]
};

// ===== 全局状态 =====
const state = {
  modules: MODULES_DATA,
  currentModule: null,
  currentChapter: null,
  favorites: [],
  recentlyVisited: [],  // 最近浏览记录（最多 8 条）
  searchIndex: [],
  darkMode: false
};

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  // 配置 marked（如果加载了的话）
  if (typeof marked !== 'undefined') {
    marked.setOptions({
      breaks: true,
      gfm: true,
      highlight: function(code, lang) {
        if (typeof hljs !== 'undefined' && lang && hljs.getLanguage(lang)) {
          return hljs.highlight(code, { language: lang }).value;
        }
        return code;
      }
    });
  }

  loadFavorites();
  loadRecentlyVisited();
  loadTheme();
  renderNav();
  buildSearchIndex();
  bindEvents();
  handleRoute();
});

// ===== 渲染左侧导航 =====
function renderNav() {
  const nav = document.getElementById('navContainer');
  let html = '';

  state.modules.forEach(mod => {
    if (mod.id === 'home') return;

    if (mod.type === 'skills' || mod.type === 'news' || mod.type === 'glossary') {
      html += `
        <div class="nav-module">
          <button class="nav-module-header" data-module="${mod.id}" data-type="${mod.type}">
            <span>${mod.icon}</span>
            <span>${mod.title}</span>
          </button>
        </div>
      `;
    } else {
      html += `
        <div class="nav-module">
          <button class="nav-module-header" data-module="${mod.id}">
            <span>${mod.icon}</span>
            <span>${mod.title}</span>
            <span class="arrow">▶</span>
          </button>
          <div class="nav-chapters" id="chapters-${mod.id}">
            ${mod.chapters.map(ch => `
              <a class="nav-chapter" data-module="${mod.id}" data-chapter="${ch.id}" data-file="${ch.file}">
                ${ch.title}
              </a>
            `).join('')}
          </div>
        </div>
      `;
    }
  });

  nav.innerHTML = html;
}

// ===== 构建搜索索引 =====
function buildSearchIndex() {
  state.searchIndex = [];
  state.modules.forEach(mod => {
    if (mod.chapters) {
      mod.chapters.forEach(ch => {
        state.searchIndex.push({
          moduleId: mod.id,
          moduleTitle: mod.title,
          chapterId: ch.id,
          title: ch.title,
          file: ch.file
        });
      });
    }
  });
}

// ===== 绑定事件 =====
function bindEvents() {
  const nav = document.getElementById('navContainer');
  const searchInput = document.getElementById('searchInput');
  const searchClose = document.getElementById('searchClose');
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const backToTop = document.getElementById('backToTop');

  // 导航点击
  nav.addEventListener('click', (e) => {
    const header = e.target.closest('.nav-module-header');
    if (header) {
      const moduleId = header.dataset.module;
      const type = header.dataset.type;

      if (type === 'skills' || type === 'news' || type === 'glossary') {
        navigateTo(moduleId, null);
        closeMobileSidebar();
        return;
      }

      const chapters = document.getElementById('chapters-' + moduleId);
      if (chapters) {
        const isExpanded = chapters.classList.contains('show');
        document.querySelectorAll('.nav-chapters').forEach(c => c.classList.remove('show'));
        document.querySelectorAll('.nav-module-header').forEach(h => h.classList.remove('expanded'));
        if (!isExpanded) {
          chapters.classList.add('show');
          header.classList.add('expanded');
        }
      }
      return;
    }

    const chapter = e.target.closest('.nav-chapter');
    if (chapter) {
      e.preventDefault();
      navigateTo(chapter.dataset.module, chapter.dataset.chapter, chapter.dataset.file);
      closeMobileSidebar();
    }
  });

  // 搜索
  searchInput.addEventListener('input', debounce(handleSearch, 300));
  searchInput.addEventListener('focus', () => {
    if (searchInput.value.trim()) handleSearch();
  });
  searchClose.addEventListener('click', () => {
    document.getElementById('searchResults').style.display = 'none';
    searchInput.value = '';
  });
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-results') && !e.target.closest('.search-input')) {
      document.getElementById('searchResults').style.display = 'none';
    }
  });

  // 主题切换
  themeToggle.addEventListener('click', toggleTheme);

  // 移动端菜单
  menuToggle.addEventListener('click', toggleMobileSidebar);

  // 返回顶部
  backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('show', window.scrollY > 300);
  });

  window.addEventListener('popstate', handleRoute);
}

// ===== 路由处理 =====
function handleRoute() {
  const hash = window.location.hash.slice(1);
  if (!hash || hash === 'home') {
    showHomePage();
    return;
  }

  const parts = hash.split('/');
  const moduleId = parts[0];
  const chapterId = parts[1] || null;

  if (moduleId === 'skills') {
    showSkillsPage();
  } else if (moduleId === 'news') {
    showNewsPage();
  } else if (moduleId === 'glossary') {
    showGlossaryPage();
  } else if (chapterId) {
    const mod = state.modules.find(m => m.id === moduleId);
    if (mod && mod.chapters) {
      const ch = mod.chapters.find(c => c.id === chapterId);
      if (ch) {
        loadAndRenderMarkdown(ch.file, moduleId, chapterId);
        expandModule(moduleId);
        return;
      }
    }
    showHomePage();
  } else {
    const mod = state.modules.find(m => m.id === moduleId);
    if (mod && mod.chapters && mod.chapters.length > 0) {
      expandModule(moduleId);
      loadAndRenderMarkdown(mod.chapters[0].file, moduleId, mod.chapters[0].id);
    } else {
      showHomePage();
    }
  }
}

// ===== 导航 =====
function navigateTo(moduleId, chapterId, file) {
  if (chapterId) {
    window.location.hash = `${moduleId}/${chapterId}`;
  } else {
    window.location.hash = moduleId;
  }
  handleRoute();
}

// ===== 展开模块 =====
function expandModule(moduleId) {
  document.querySelectorAll('.nav-chapters').forEach(c => c.classList.remove('show'));
  document.querySelectorAll('.nav-module-header').forEach(h => h.classList.remove('expanded'));
  document.querySelectorAll('.nav-chapter').forEach(c => c.classList.remove('active'));

  const chapters = document.getElementById('chapters-' + moduleId);
  if (chapters) {
    chapters.classList.add('show');
    const header = chapters.previousElementSibling;
    if (header) header.classList.add('expanded');
  }
}

// ===== 加载并渲染 Markdown =====
async function loadAndRenderMarkdown(file, moduleId, chapterId) {
  const main = document.getElementById('mainContent');
  main.innerHTML = '<div class="loading">加载中...</div>';

  try {
    // 优先从内嵌数据读取（解决 file:// 协议下无法 fetch 的问题）
    let text = '';
    if (typeof CONTENT_DATA !== 'undefined' && CONTENT_DATA[file]) {
      text = CONTENT_DATA[file];
    } else {
      // 回退：尝试 fetch（在 http 服务器下可用）
      try {
        const res = await fetch(file);
        if (!res.ok) throw new Error('文件不存在');
        text = await res.text();
      } catch (fetchErr) {
        throw new Error('文件不存在');
      }
    }

    const { meta, content } = parseFrontmatter(text);

    let html = '';
    if (typeof marked !== 'undefined') {
      html = marked.parse(content);
    } else {
      html = content.replace(/\n/g, '<br>');
    }

    // 构建收藏键名（如 "ai-basics/01-what-is-ai"）
    const favKey = moduleId + '/' + chapterId;
    const favActive = isFavorite(favKey);

    // 文章头部：难度标签 + 收藏按钮
    const difficulty = meta.difficulty || '入门';
    const diffClass = difficulty === '入门' ? 'difficulty-beginner' : difficulty === '中级' ? 'difficulty-intermediate' : 'difficulty-advanced';

    // 生成文章内目录（提取 h2/h3 标题）
    const tocResult = generateTableOfContents(html);
    html = tocResult.html;
    const tocHtml = tocResult.tocHtml;

    let pageHtml = `
      <div class="article-top-bar">
        <span class="skill-difficulty ${diffClass}">${difficulty}</span>
        <button class="favorite-btn ${favActive ? 'active' : ''}" onclick="handleFavoriteClick(this, '${favKey}')">
          ${favActive ? '⭐ 已收藏' : '☆ 收藏'}
        </button>
      </div>
      ${tocHtml}
      <div class="markdown-body">${html}</div>
    `;

    const lastUpdated = meta.lastUpdated || '';
    if (lastUpdated) {
      pageHtml += `<div class="page-footer"><span>最后更新: ${lastUpdated}</span></div>`;
    }

    main.innerHTML = pageHtml;

    bindTocLinks(main);

    if (typeof hljs !== 'undefined') {
      main.querySelectorAll('pre code').forEach(block => {
        hljs.highlightElement(block);
        addCopyButton(block.parentElement);
      });
    }

    updateActiveNav(moduleId, chapterId);
    // 记录浏览历史
    addToRecentlyVisited(moduleId, chapterId, meta.title || chapterId);
    window.scrollTo({ top: 0 });

  } catch (err) {
    console.error('加载内容失败:', err);
    main.innerHTML = `
      <div style="text-align:center;padding:60px 0;color:#888;">
        <p style="font-size:48px;margin-bottom:16px;">📄</p>
        <p style="font-size:16px;margin-bottom:8px;">该章节内容尚未创建</p>
        <p style="font-size:13px;color:#aaa;">文件: ${file}</p>
        <p style="font-size:13px;color:#aaa;margin-top:12px;">这是一个待补充的章节，内容正在编写中。<br>你可以从左侧导航点击已有内容的章节开始学习。</p>
      </div>
    `;
  }
}

// ===== 解析 frontmatter =====
function parseFrontmatter(text) {
  const meta = {};
  let content = text;

  if (text.startsWith('---')) {
    const end = text.indexOf('---', 3);
    if (end !== -1) {
      const frontStr = text.slice(3, end).trim();
      content = text.slice(end + 3).trim();

      frontStr.split('\n').forEach(line => {
        const idx = line.indexOf(':');
        if (idx !== -1) {
          const key = line.slice(0, idx).trim();
          const val = line.slice(idx + 1).trim();
          meta[key] = val;
        }
      });
    }
  }

  return { meta, content };
}

// ===== 更新导航高亮 =====
function updateActiveNav(moduleId, chapterId) {
  document.querySelectorAll('.nav-chapter').forEach(c => {
    c.classList.toggle('active',
      c.dataset.module === moduleId && c.dataset.chapter === chapterId
    );
  });
}

// ===== 显示首页 =====
function showHomePage() {
  const main = document.getElementById('mainContent');
  document.querySelectorAll('.nav-chapter').forEach(c => c.classList.remove('active'));
  const chapterCount = state.modules.reduce((sum, mod) => sum + (mod.chapters ? mod.chapters.length : 0), 0);
  const skillCount = SKILLS_DATA.skills ? SKILLS_DATA.skills.length : 0;
  const glossaryCount = GLOSSARY_DATA.length;

  let html = `
    <div class="home-hero">
      <div class="hero-kicker">AI STUDY GUIDE FOR BEGINNERS</div>
      <h1>AI 学习指导书</h1>
      <p class="hero-subtitle">给零基础学习者的 AI 入门课程站：先听懂术语，再学会提问，最后用 AI Agent 做真实项目。</p>
      <div class="hero-actions">
        <a class="hero-btn primary" href="#ai-basics/01-what-is-ai">🚀 开始探索</a>
        <a class="hero-btn" href="#learning-map">📚 查看目录</a>
        <a class="hero-btn" href="#glossary">🔎 术语速查</a>
      </div>
      <div class="hero-stats" aria-label="课程统计">
        <div><strong>${chapterCount}</strong><span>知识点</span></div>
        <div><strong>${glossaryCount}</strong><span>核心术语</span></div>
        <div><strong>${skillCount}</strong><span>AI Skills</span></div>
        <div><strong>${NEWS_DATA.lastUpdated || '未知'}</strong><span>最近更新</span></div>
      </div>
    </div>

    <div class="course-intro">
      <div class="intro-card">
        <span>01</span>
        <h2>先建立认知</h2>
        <p>用小白类比讲清 AI、大模型、Agent、提示词这些高频概念。</p>
      </div>
      <div class="intro-card">
        <span>02</span>
        <h2>再开始练习</h2>
        <p>用模板、例子和小项目练习如何把需求讲给 AI 听。</p>
      </div>
      <div class="intro-card">
        <span>03</span>
        <h2>最后做项目</h2>
        <p>补齐编程基础和 Agent 配置，让 AI 真正帮你搭东西。</p>
      </div>
    </div>
  `;

  // 我的收藏（只有有收藏时才显示）
  if (state.favorites.length > 0) {
    html += `
      <div class="home-section">
        <h2>⭐ 我的收藏</h2>
        <div class="favorites-grid">
    `;
    state.favorites.forEach(favKey => {
      const parts = favKey.split('/');
      const modId = parts[0];
      const chapId = parts[1];
      const mod = state.modules.find(m => m.id === modId);
      const chap = mod && mod.chapters ? mod.chapters.find(c => c.id === chapId) : null;
      if (mod && chap) {
        html += `
          <a class="favorite-card" href="#${modId}/${chapId}">
            <div class="fav-card-title">${chap.title}</div>
            <div class="fav-card-module">${mod.icon} ${mod.title}</div>
          </a>
        `;
      }
    });
    html += `</div></div>`;
  }

  // 最近浏览（有记录时才显示）
  if (state.recentlyVisited.length > 0) {
    html += `
      <div class="home-section">
        <h2>📖 最近浏览</h2>
        <div class="favorites-grid">
    `;
    state.recentlyVisited.forEach(item => {
      const mod = state.modules.find(m => m.id === item.moduleId);
      if (mod) {
        html += `
          <a class="favorite-card" href="#${item.moduleId}/${item.chapterId}">
            <div class="fav-card-title">${item.title}</div>
            <div class="fav-card-module">${mod.icon} ${mod.title}</div>
          </a>
        `;
      }
    });
    html += `</div></div>`;
  }

  html += `
    <div class="home-section" id="learning-map">
      <h2>🗺️ 学习路线图</h2>
      <div class="learning-path">
  `;

  state.modules.forEach(mod => {
    if (mod.id === 'home') return;
    const count = mod.chapters ? mod.chapters.length : 0;
    const link = mod.type === 'skills' || mod.type === 'news' || mod.type === 'glossary' ? `#${mod.id}` : `#${mod.id}/${mod.chapters?.[0]?.id || ''}`;
    html += `
      <a class="path-card" href="${link}">
        <div class="card-icon">${mod.icon}</div>
        <div class="card-title">${mod.title}</div>
        <div class="card-desc">${mod.description}</div>
        ${count > 0 ? `<div class="card-count">${count} 个知识点</div>` : ''}
      </a>
    `;
  });

  html += `</div></div>`;

  // 7 天学习计划
  html += `
    <div class="home-section">
      <h2>🧭 7 天入门路线</h2>
      <div class="study-plan">
        ${LEARNING_PLAN_DATA.map(item => `
          <div class="plan-card">
            <div class="plan-day">${item.day}</div>
            <div class="plan-title">${item.title}</div>
            <div class="plan-goal">${item.goal}</div>
            <div class="plan-links">
              ${item.links.map(link => `<a href="${link.href}">${link.text}</a>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  // 快速入口
  html += `
    <div class="home-section">
      <h2>🚀 快速开始</h2>
      <div class="learning-path">
        <a class="path-card" href="#ai-basics/01-what-is-ai">
          <div class="card-icon">📖</div>
          <div class="card-title">从这里开始</div>
          <div class="card-desc">了解 AI 是什么，建立基础认知</div>
        </a>
        <a class="path-card" href="#prompt-tutorial/01-why-prompt-matters">
          <div class="card-icon">✍️</div>
          <div class="card-title">学会写提示词</div>
          <div class="card-desc">让 AI 更好地理解你的需求</div>
        </a>
        <a class="path-card" href="#agent-guide/08-write-claude-md">
          <div class="card-icon">⚙️</div>
          <div class="card-title">配置 AI Agent</div>
          <div class="card-desc">让 Claude Code 更聪明地帮你干活</div>
        </a>
        <a class="path-card" href="#glossary">
          <div class="card-icon">🔎</div>
          <div class="card-title">查陌生术语</div>
          <div class="card-desc">遇到 Token、RAG、MCP 这类词时先查这里</div>
        </a>
      </div>
    </div>
  `;

  // 热点新闻（使用内嵌数据）
  if (NEWS_DATA.items && NEWS_DATA.items.length > 0) {
    html += `
      <div class="home-section">
        <h2>📰 最新 AI 热点</h2>
    `;
    NEWS_DATA.items.slice(0, 5).forEach(item => {
      html += `
        <div class="news-card">
          <div class="news-title">${item.title}</div>
          <div class="news-summary">${item.summary}</div>
          <div class="news-meta">
            <span>${item.date}</span>
            ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
          </div>
        </div>
      `;
    });
    html += `<p style="margin-top:12px;"><a href="#news" style="color:var(--accent-color);font-size:14px;">查看全部热点 →</a></p></div>`;
  }

  // Skills 推荐（使用内嵌数据）
  if (SKILLS_DATA.skills && SKILLS_DATA.skills.length > 0) {
    html += `
      <div class="home-section">
        <h2>🎯 本周推荐 Skills</h2>
    `;
    SKILLS_DATA.skills.slice(0, 3).forEach(skill => {
      const diffClass = skill.difficulty === '入门' ? 'difficulty-beginner' : skill.difficulty === '中级' ? 'difficulty-intermediate' : 'difficulty-advanced';
      html += `
        <div class="skill-card">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-difficulty ${diffClass}">${skill.difficulty}</span>
          </div>
          <div class="skill-desc">${skill.whatCanDo}</div>
        </div>
      `;
    });
    html += `<p style="margin-top:12px;"><a href="#skills" style="color:var(--accent-color);font-size:14px;">查看全部 Skills →</a></p></div>`;
  }

  main.innerHTML = html;
}

// ===== 显示 Skills 页面 =====
function showSkillsPage() {
  const main = document.getElementById('mainContent');
  const data = SKILLS_DATA;

  let html = `
    <div class="markdown-body">
      <h1>🎯 热门 AI Skills</h1>
      <p>当前值得学习的 AI 技能，按难度分类。每个技能都包含学习路线、推荐工具和实战项目建议。</p>
    </div>
  `;

  const groups = { '入门': [], '中级': [], '进阶': [] };
  data.skills.forEach(s => {
    if (groups[s.difficulty]) groups[s.difficulty].push(s);
  });

  Object.entries(groups).forEach(([diff, skills]) => {
    if (skills.length === 0) return;
    const diffClass = diff === '入门' ? 'difficulty-beginner' : diff === '中级' ? 'difficulty-intermediate' : 'difficulty-advanced';
    html += `<h2 style="margin:24px 0 16px;font-size:20px;">${diff} 级别</h2>`;
    skills.forEach(skill => {
      html += `
        <div class="skill-card">
          <div class="skill-header">
            <span class="skill-name">${skill.name}</span>
            <span class="skill-difficulty ${diffClass}">${skill.difficulty}</span>
          </div>
          <div class="skill-desc">${skill.whatCanDo}</div>
          <div class="skill-meta">
            <span style="font-size:13px;color:var(--text-secondary);">适合: ${skill.forWho}</span>
          </div>
          ${skill.learningPath ? `
            <div style="margin-top:12px;">
              <strong style="font-size:13px;">学习路线:</strong>
              <ol style="margin:6px 0 0 20px;font-size:13px;color:var(--text-secondary);">
                ${skill.learningPath.map(s => `<li>${s}</li>`).join('')}
              </ol>
            </div>
          ` : ''}
          ${skill.tools ? `
            <div style="margin-top:10px;">
              <strong style="font-size:13px;">推荐工具:</strong>
              <span style="font-size:13px;color:var(--text-secondary);">${skill.tools.join('、')}</span>
            </div>
          ` : ''}
          ${skill.pitfalls ? `
            <div style="margin-top:10px;">
              <strong style="font-size:13px;">常见坑:</strong>
              <ul style="margin:4px 0 0 20px;font-size:13px;color:var(--text-secondary);">
                ${skill.pitfalls.map(p => `<li>${p}</li>`).join('')}
              </ul>
            </div>
          ` : ''}
          ${skill.examplePrompt ? `
            <div class="example-prompt">
              <strong>示例提示词:</strong>
              <pre>${skill.examplePrompt}</pre>
            </div>
          ` : ''}
        </div>
      `;
    });
  });

  main.innerHTML = html;
}

// ===== 显示新闻页面 =====
function showNewsPage() {
  const main = document.getElementById('mainContent');
  const data = NEWS_DATA;

  let html = `
    <div class="markdown-body">
      <h1>📰 AI 热点新闻</h1>
      <p>最新 AI 圈热点动态，帮你快速了解行业趋势。每条新闻都附带解读，告诉你「这件事对普通人有什么用」。</p>
      ${data.lastUpdated ? `<p style="font-size:13px;color:var(--text-muted);">最后更新: ${data.lastUpdated}</p>` : ''}
    </div>
  `;

  if (data.items && data.items.length > 0) {
    data.items.forEach(item => {
      html += `
        <div class="news-card">
          <div class="news-title">${item.title}</div>
          <div class="news-summary">${item.summary}</div>
          ${item.whyImportant ? `<div style="margin:8px 0;font-size:13px;"><strong>为什么重要:</strong> ${item.whyImportant}</div>` : ''}
          ${item.forWho ? `<div style="margin:4px 0;font-size:13px;"><strong>适合谁关注:</strong> ${item.forWho}</div>` : ''}
          ${item.howToUse ? `<div style="margin:4px 0;font-size:13px;"><strong>可以怎么用:</strong> ${item.howToUse}</div>` : ''}
          ${item.sourceName ? `
            <div class="news-source">
              <span>来源: <a href="${item.sourceUrl}" target="_blank" rel="noopener noreferrer">${item.sourceName}</a></span>
              <span>核验: ${item.verifiedAt || '未标注'}</span>
              <span>可信度: ${item.confidence || '未标注'}</span>
            </div>
          ` : ''}
          <div class="news-meta">
            <span>${item.date}</span>
            ${item.tags ? item.tags.map(t => `<span class="tag">${t}</span>`).join('') : ''}
            ${item.links ? item.links.map(l => `<a href="${l}" target="_blank" rel="noopener noreferrer" style="color:var(--accent-color);font-size:12px;">相关链接</a>`).join('') : ''}
          </div>
        </div>
      `;
    });
  } else {
    html += '<p style="text-align:center;padding:40px;color:var(--text-muted);">暂无热点新闻</p>';
  }

  main.innerHTML = html;
}

// ===== 显示术语表页面 =====
function showGlossaryPage() {
  const main = document.getElementById('mainContent');

  const html = `
    <div class="markdown-body">
      <h1>🔎 AI 术语速查表</h1>
      <p>这里收集 AI 学习中最容易卡住的小白术语。遇到陌生词时，先看一句话解释，再看类比和例子。</p>
    </div>
    <div class="glossary-grid">
      ${GLOSSARY_DATA.map(item => `
        <article class="glossary-card" id="term-${item.term}">
          <div class="glossary-header">
            <h2>${item.term}</h2>
            <span>${item.english}</span>
          </div>
          <p><strong>一句话:</strong> ${item.explanation}</p>
          <p><strong>小白类比:</strong> ${item.analogy}</p>
          <p><strong>实际例子:</strong> ${item.example}</p>
          <p><strong>常见误区:</strong> ${item.pitfall}</p>
        </article>
      `).join('')}
    </div>
  `;

  main.innerHTML = html;
  window.scrollTo({ top: 0 });
}

// ===== 搜索功能（支持标题 + 内容搜索）=====
function handleSearch() {
  const query = document.getElementById('searchInput').value.trim().toLowerCase();
  const resultsEl = document.getElementById('searchResults');
  const listEl = document.getElementById('searchResultsList');

  if (!query) {
    resultsEl.style.display = 'none';
    return;
  }

  const results = [];
  const seen = {};

  // 第一步：搜索标题
  state.searchIndex.forEach(item => {
    const key = item.moduleId + '/' + item.chapterId;
    if (item.title.toLowerCase().includes(query)) {
      if (!seen[key]) {
        seen[key] = true;
        results.push({ ...item, snippet: '' });
      }
    }
  });

  // 第二步：搜索内容（遍历内嵌的 Markdown 内容）
  if (typeof CONTENT_DATA !== 'undefined') {
    Object.keys(CONTENT_DATA).forEach(path => {
      const parts = path.replace('content/', '').replace('.md', '').split('/');
      const moduleId = parts[0];
      const chapterId = parts[1];
      const key = moduleId + '/' + chapterId;

      // 跳过已经在标题搜索中找到的
      if (seen[key]) return;

      const plainText = stripMarkdown(CONTENT_DATA[path]).toLowerCase();
      const idx = plainText.indexOf(query);
      if (idx !== -1) {
        seen[key] = true;
        // 在 searchIndex 中找到对应章节信息
        const info = state.searchIndex.find(s => s.moduleId === moduleId && s.chapterId === chapterId);
        if (info) {
          results.push({ ...info, snippet: extractSnippet(plainText, idx, query.length) });
        }
      }
    });
  }

  // 第三步：搜索术语表
  GLOSSARY_DATA.forEach(item => {
    const haystack = [
      item.term,
      item.english,
      item.explanation,
      item.analogy,
      item.example,
      item.pitfall
    ].join(' ').toLowerCase();
    if (haystack.includes(query)) {
      const key = 'glossary/' + item.term;
      if (!seen[key]) {
        seen[key] = true;
        results.push({
          moduleId: 'glossary',
          moduleTitle: 'AI 术语速查表',
          chapterId: '',
          title: item.term,
          file: '',
          snippet: item.explanation
        });
      }
    }
  });

  if (results.length === 0) {
    listEl.innerHTML = '<div class="search-no-results">没有找到相关内容</div>';
  } else {
    listEl.innerHTML = results.map(r => `
      <div class="search-result-item" data-module="${r.moduleId}" data-chapter="${r.chapterId}" data-file="${r.file}">
        <div class="result-module">${r.moduleTitle}</div>
        <div class="result-title">${r.title}</div>
        ${r.snippet ? `<div class="result-excerpt">${r.snippet}</div>` : ''}
      </div>
    `).join('');

    listEl.querySelectorAll('.search-result-item').forEach(item => {
      item.addEventListener('click', () => {
        if (item.dataset.module === 'glossary') {
          navigateTo('glossary', null);
        } else {
          navigateTo(item.dataset.module, item.dataset.chapter, item.dataset.file);
        }
        resultsEl.style.display = 'none';
        document.getElementById('searchInput').value = '';
      });
    });
  }

  resultsEl.style.display = 'block';
}

// ===== 主题切换 =====
function toggleTheme() {
  state.darkMode = !state.darkMode;
  document.body.classList.toggle('dark', state.darkMode);
  document.getElementById('themeToggle').textContent = state.darkMode ? '☀️' : '🌙';
  localStorage.setItem('ai-guide-dark-mode', state.darkMode ? '1' : '0');
}

function loadTheme() {
  const saved = localStorage.getItem('ai-guide-dark-mode');
  if (saved === '1') {
    state.darkMode = true;
    document.body.classList.add('dark');
    document.getElementById('themeToggle').textContent = '☀️';
  }
}

// ===== 收藏功能 =====
function loadFavorites() {
  try {
    const saved = localStorage.getItem('ai-guide-favorites');
    state.favorites = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.favorites = [];
  }
}

// 保存收藏到 localStorage
function saveFavorites() {
  localStorage.setItem('ai-guide-favorites', JSON.stringify(state.favorites));
}

// 切换收藏状态
function toggleFavorite(key) {
  const idx = state.favorites.indexOf(key);
  if (idx === -1) {
    state.favorites.push(key);
  } else {
    state.favorites.splice(idx, 1);
  }
  saveFavorites();
}

// 检查是否已收藏
function isFavorite(key) {
  return state.favorites.indexOf(key) !== -1;
}

// 收藏按钮点击处理
function handleFavoriteClick(btn, key) {
  toggleFavorite(key);
  if (isFavorite(key)) {
    btn.classList.add('active');
    btn.innerHTML = '⭐ 已收藏';
  } else {
    btn.classList.remove('active');
    btn.innerHTML = '☆ 收藏';
  }
}

// ===== 最近浏览记录 =====

// 从 localStorage 加载浏览记录
function loadRecentlyVisited() {
  try {
    const saved = localStorage.getItem('ai-guide-recent');
    state.recentlyVisited = saved ? JSON.parse(saved) : [];
  } catch (e) {
    state.recentlyVisited = [];
  }
}

// 保存浏览记录到 localStorage
function saveRecentlyVisited() {
  localStorage.setItem('ai-guide-recent', JSON.stringify(state.recentlyVisited));
}

// 添加一条浏览记录（最多保留 8 条，重复的移到最前面）
function addToRecentlyVisited(moduleId, chapterId, title) {
  // 去掉已有的同一条记录
  state.recentlyVisited = state.recentlyVisited.filter(
    item => !(item.moduleId === moduleId && item.chapterId === chapterId)
  );
  // 添加到最前面
  state.recentlyVisited.unshift({ moduleId, chapterId, title, time: Date.now() });
  // 最多保留 8 条
  if (state.recentlyVisited.length > 8) {
    state.recentlyVisited = state.recentlyVisited.slice(0, 8);
  }
  saveRecentlyVisited();
}

// ===== 文章目录生成 =====

// 从渲染后的 HTML 中提取 h2/h3 标题，生成目录
function generateTableOfContents(html) {
  // 用临时 div 解析 HTML，提取标题
  const temp = document.createElement('div');
  temp.innerHTML = html;

  const headings = temp.querySelectorAll('h2, h3');
  if (headings.length < 3) {
    // 标题太少不需要目录
    return { tocHtml: '', html };
  }

  let tocItems = '';
  headings.forEach((heading, index) => {
    // 生成唯一 ID
    const id = 'toc-' + index + '-' + heading.textContent.replace(/\s+/g, '-').replace(/[^\w一-鿿-]/g, '');
    heading.id = id;

    const level = heading.tagName === 'H2' ? 'toc-h2' : 'toc-h3';
    tocItems += `<a class="toc-link ${level}" href="#${id}">${heading.textContent}</a>`;
  });

  const tocHtml = `
    <div class="article-toc">
      <div class="toc-header" onclick="this.parentElement.classList.toggle('collapsed')">
        <span>📑 本章目录</span>
        <span class="toc-toggle">▼</span>
      </div>
      <div class="toc-body">${tocItems}</div>
    </div>
  `;

  return { tocHtml, html: temp.innerHTML };
}

// 文章目录只负责页面内滚动，不修改地址栏 hash，避免和章节路由冲突
function bindTocLinks(container) {
  container.querySelectorAll('.toc-link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href')?.slice(1);
      if (!targetId) return;
      const target = container.querySelector('#' + CSS.escape(targetId));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

// 去除 Markdown 语法，提取纯文本（用于搜索内容）
function stripMarkdown(md) {
  return md
    .replace(/```[\s\S]*?```/g, '')       // 去掉代码块
    .replace(/#{1,6}\s+/g, '')            // 去掉标题标记
    .replace(/\*\*(.+?)\*\*/g, '$1')      // 去掉加粗
    .replace(/\*(.+?)\*/g, '$1')          // 去掉斜体
    .replace(/`(.+?)`/g, '$1')            // 去掉行内代码
    .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // 去掉链接，保留文字
    .replace(/!\[([^\]]*)\]\([^\)]+\)/g, '')   // 去掉图片
    .replace(/[-*+]\s+/g, '')             // 去掉列表标记
    .replace(/\n{2,}/g, '\n')             // 合并多余空行
    .trim();
}

// 从文本中提取匹配片段（前后各30字）
function extractSnippet(text, matchIdx, matchLen) {
  const start = Math.max(0, matchIdx - 30);
  const end = Math.min(text.length, matchIdx + matchLen + 30);
  let snippet = text.substring(start, end).replace(/\n/g, ' ');
  if (start > 0) snippet = '...' + snippet;
  if (end < text.length) snippet += '...';
  return snippet;
}

// ===== 移动端侧边栏 =====
function toggleMobileSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
}

function closeMobileSidebar() {
  document.getElementById('sidebar').classList.remove('open');
}

// ===== 添加复制按钮 =====
function addCopyButton(preElement) {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.textContent = '复制';
  btn.addEventListener('click', () => {
    const code = preElement.querySelector('code');
    const text = code ? code.textContent : preElement.textContent;
    navigator.clipboard.writeText(text).then(() => {
      btn.textContent = '已复制 ✓';
      setTimeout(() => { btn.textContent = '复制'; }, 2000);
    }).catch(() => {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      btn.textContent = '已复制 ✓';
      setTimeout(() => { btn.textContent = '复制'; }, 2000);
    });
  });
  preElement.appendChild(btn);
}

// ===== 工具函数 =====
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}
