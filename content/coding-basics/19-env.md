---
title: 环境变量 .env 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# 环境变量 .env 是什么

## 一句话解释

环境变量是程序的"配置开关"——把敏感信息（如密码、API Key）和配置项存在 .env 文件里，和代码分开管理。

## 小白类比

你家的钥匙不会插在门上不管吧？你会放在安全的地方。.env 文件就是存放"钥匙"（敏感信息）的安全地方，代码需要时去 .env 里取。

## 通俗解释

**为什么需要环境变量？**

假设你的代码需要调用一个 API，需要 API Key。你有两个选择：
1. 直接写在代码里 ❌（不安全，代码分享出去 Key 就泄露了）
2. 存在 .env 文件里 ✅（代码里引用变量名，Key 不暴露）

**.env 文件长这样：**
```
API_KEY=sk-abc123xyz
DATABASE_URL=localhost:3306
DEBUG=true
```

**代码里怎么用：**
```javascript
// Node.js 通过 process.env 读取
const apiKey = process.env.API_KEY;
```

**重要规则：**
- .env 文件不要提交到 Git（在 .gitignore 里排除）
- 每个开发者自己维护自己的 .env
- 项目里提供 .env.example 做模板

## 实际例子

```bash
# .env 文件
OPENAI_API_KEY=sk-abc123
DB_PASSWORD=mypassword123
PORT=3000
```

```javascript
// 代码里这样引用
const port = process.env.PORT || 3000;
const dbPwd = process.env.DB_PASSWORD;
```

## 适合做什么

- 存储 API Key、密码等敏感信息
- 区分开发环境和生产环境的配置
- 管理不同部署环境的参数

## 不适合做什么

- 不要把 .env 文件提交到 Git
- 不要在前端代码里读取 .env（浏览器不支持）
- 不要在 .env 里存大量数据（它只是配置文件）

## 关键概念

- **.gitignore**：告诉 Git 哪些文件不要提交
- **环境变量**：操作系统级别的配置，程序可以读取
- **12-Factor App**：一种应用开发方法论，其中一条就是用环境变量管理配置

## 下一步

环境变量里最常见的就是 API Key——下一章来了解它是什么。