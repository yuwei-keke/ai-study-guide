---
title: Node.js 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# Node.js 是什么

## 一句话解释

Node.js 让 JavaScript 不仅能在浏览器里运行，还能在电脑和服务器上运行——用 JS 就能写后端程序。

## 小白类比

以前 JavaScript 只能在浏览器这个"鱼缸"里游泳。Node.js 把 JS 放进了"大海"——它现在可以操作文件、启动服务器、运行命令行工具，几乎无所不能。

## 通俗解释

Node.js 是一个 JavaScript 运行环境，基于 Chrome 的 V8 引擎。它让 JS 脱离了浏览器的限制。

**Node.js 能做什么：**
- 写后端 API 服务
- 做命令行工具（比如 Claude Code 就是用 Node.js 做的）
- 操作文件系统（读写文件）
- 构建前端项目的开发环境
- 做自动化脚本

**为什么很多人喜欢用 Node.js：**
- 前后端都用 JavaScript，不需要学两门语言
- npm 生态有上百万个现成的包可以用
- 异步非阻塞，处理高并发很高效

## 实际例子

```javascript
// 一个简单的 Web 服务器
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<h1>你好，这是用 Node.js 做的网页！</h1>');
});

server.listen(3000, () => {
  console.log('服务器运行在 http://localhost:3000');
});
```

运行这段代码后，打开浏览器访问 localhost:3000 就能看到网页。

## 适合做什么

- 写后端 API 服务
- 做命令行工具
- 前端项目的开发环境（Vite、Webpack）
- 做全栈项目（前端后端都用 JS）

## 不适合做什么

- CPU 密集型计算（JS 单线程，计算密集任务会卡）
- 底层系统开发（不如 C/Rust）
- 嵌入式开发

## 关键概念

- **npm**：Node.js 的包管理器，用来安装第三方库
- **模块**：Node.js 用 require 或 import 来引入其他文件
- **异步**：Node.js 的核心特性，能同时处理很多请求

## 下一步

有了后端程序，数据存在哪里？接下来了解数据库。