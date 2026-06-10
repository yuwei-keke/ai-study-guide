---
title: API 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# API 是什么

## 一句话解释

API（应用程序接口）就是两个程序之间的**"传话筒"**——一个程序向另一个程序发送请求，另一个程序返回结果。

## 小白类比

想象你去餐厅吃饭：

- **你**（用户）→ 想要一份宫保鸡丁
- **服务员**（API）→ 把你的需求告诉厨房
- **厨房**（服务器）→ 做好菜
- **服务员**（API）→ 把菜端给你

你不需要知道厨房是怎么做菜的，你只需要告诉服务员"我要宫保鸡丁"，服务员会帮你把需求传达给厨房，再把结果带回来。

API 就是这个"服务员"——它定义了两个程序之间怎么沟通。

## 通俗解释

在 AI 编程中，API 最常见的用途是**调用 AI 模型**。比如：

```
你的程序 → 通过 API 发送问题 → AI 服务器（ChatGPT/Claude）→ 通过 API 返回回答
```

具体来说，当你用代码调用 ChatGPT 时：

```javascript
// 你的代码向 OpenAI 的 API 发送请求
fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer 你的API密钥',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'gpt-4',
    messages: [{ role: 'user', content: '你好' }]
  })
})
```

OpenAI 的服务器收到请求后，用 GPT-4 模型处理你的问题，然后把回答通过 API 返回给你。

## 实际例子

你每天都在间接使用 API：

| 场景 | 谁在调用 API | 调用了什么 API |
|------|-------------|---------------|
| 用微信登录其他网站 | 网站 | 微信登录 API |
| 查看天气 | 天气 App | 天气数据 API |
| 支付宝付款 | 商家 App | 支付宝支付 API |
| 抖音分享到微信 | 抖音 | 微信分享 API |
| 用 ChatGPT 写文章 | 网页/App | OpenAI API |

## API 的基本结构

一个 API 请求通常包含：

```
请求方式：GET（获取数据）/ POST（发送数据）
请求地址：https://api.example.com/data
请求头：认证信息、数据格式
请求体：你要发送的数据（POST 请求）

返回：
状态码：200（成功）/ 404（找不到）/ 500（服务器错误）
返回数据：通常是 JSON 格式
```

## 在 Claude Code / Codex 中什么时候会用到

- **使用 AI API**：如果你想让自己的程序调用 ChatGPT/Claude，就需要用 API
- **获取数据**：天气、新闻、股票等数据通常通过 API 获取
- **调用第三方服务**：发送短信、邮件、支付等

## 常见错误

- **把 API Key 写死在代码里**：应该放在 `.env` 文件中，不要泄露
- **不处理错误**：API 调用可能失败（网络问题、服务不可用），要有错误处理
- **不了解限流**：大多数 API 有调用次数限制，超了会报错
- **混淆 API 和 SDK**：API 是接口，SDK 是封装好的工具包，更容易用

## 示例代码

用 JavaScript 调用一个免费的天气 API：

```javascript
// 获取北京天气（示例）
async function getWeather() {
  try {
    const response = await fetch('https://api.example.com/weather?city=beijing');
    const data = await response.json();
    console.log('北京天气:', data);
  } catch (error) {
    console.error('获取天气失败:', error);
  }
}

getWeather();
```

## 关键概念

- **RESTful API**：最常见的 API 设计风格，用 HTTP 方法（GET/POST/PUT/DELETE）操作资源
- **JSON**：API 最常用的数据格式，长得像 JavaScript 对象
- **API Key**：调用 API 的"通行证"，需要保管好
- **Rate Limiting**：API 的调用频率限制，防止被滥用
- **Webhook**：一种"反向 API"，服务器主动通知你有新事件

## 下一步

- [API Key 是什么](#coding-basics/20-api-key) — 了解如何获取和管理 API 密钥
- [环境变量 .env 是什么](#coding-basics/19-env) — 了解如何安全地存储 API Key
