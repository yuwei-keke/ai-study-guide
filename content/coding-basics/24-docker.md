---
title: Docker 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# Docker 是什么

## 一句话解释

Docker 是一个"打包工具"——把你的程序和它需要的所有环境打包成一个容器，在任何电脑上都能运行。

## 小白类比

你要搬家。传统方式是把东西散装搬过去，到了新家发现插座不对、家具尺寸不合适。Docker 就是把你的整个房间（包括家具、装修、电器）原封不动搬到新家——保证一切和原来一模一样。

## 通俗解释

**Docker 解决的问题：**

"在我电脑上能跑啊！"——这是程序员最常说的话。为什么？因为不同电脑的环境不同（操作系统、软件版本、配置文件）。

Docker 用"容器"技术解决了这个问题：

1. **镜像（Image）**：程序 + 环境的打包文件，就像安装光盘
2. **容器（Container）**：镜像运行起来的实例，就像正在运行的程序
3. **Dockerfile**：告诉 Docker 怎么打包的配置文件

## 实际例子

```dockerfile
# Dockerfile 示例
FROM node:18
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

```bash
# 构建镜像
docker build -t my-app .

# 运行容器
docker run -p 3000:3000 my-app
```

这样不管在 Windows、Mac 还是 Linux 上，都能运行完全一样的环境。

## 适合做什么

- 保证开发环境和生产环境一致
- 快速部署和扩展服务
- 隔离不同项目的依赖

## 不适合做什么

- 简单的静态网站不需要 Docker
- Docker 有学习曲线，初学者可以先跳过
- 不是虚拟机，不能运行不同操作系统的程序

## 关键概念

- **镜像（Image）**：只读的打包文件
- **容器（Container）**：运行中的镜像实例
- **Docker Compose**：管理多个容器的工具

## 下一步

如果你是 Windows 用户，想用 Linux 环境开发，可以了解 WSL。