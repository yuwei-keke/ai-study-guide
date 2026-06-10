---
title: API Key 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# API Key 是什么

## 一句话解释

API Key 是调用 AI 服务的"通行证"——有了它，你的程序才能连接 ChatGPT、Claude 等 AI 服务。

## 小白类比

API Key 就像你的会员卡号。你去健身房，前台刷一下卡才能进去。API Key 就是刷的那张卡——有了它才能使用服务，别人拿到你的卡号也能冒充你。

## 通俗解释

当你想在自己的程序里调用 AI 服务（比如让 Claude 帮你写文章），你需要告诉 AI 服务"我是谁"。API Key 就是你的身份标识。

**API Key 的特点：**
- 一串随机字符串，如 sk-abc123xyz456
- 每个用户/每个项目有不同的 Key
- 调用 API 时必须带上 Key
- 按使用量计费

**获取 API Key 的步骤：**
1. 去 AI 服务的官网注册账号
2. 进入 API 管理页面
3. 创建一个新的 API Key
4. 复制保存到 .env 文件里

## 实际例子

```javascript
// 用 API Key 调用 Claude API
const response = await fetch('https://api.anthropic.com/v1/messages', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': process.env.CLAUDE_API_KEY  // 从环境变量读取
  },
  body: JSON.stringify({
    model: 'claude-sonnet-4-6',
    messages: [{ role: 'user', content: '你好' }]
  })
});
```

## 适合做什么

- 在程序里调用 AI 服务
- 通过 API 使用各种在线服务
- 按需使用，用多少付多少

## 不适合做什么

- 不要把 API Key 写在代码里提交到 GitHub
- 不要把 API Key 分享给别人
- 不要忽略 API Key 的费用（用多了会很贵）

## 关键概念

- **API**：应用程序接口，程序之间沟通的桥梁
- **配额（Quota）**：API Key 的使用限额
- **速率限制（Rate Limit）**：每分钟最多调用多少次

## 下一步

了解了 API Key，接下来看看前后端分离的架构——现代 Web 开发的主流模式。