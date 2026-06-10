---
title: GitHub 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# GitHub 是什么

## 一句话解释

GitHub 是代码的"云盘"——你可以把 Git 仓库上传到 GitHub，方便备份、分享和协作。

## 小白类比

Git 是你本地的日记本（只有你自己能看），GitHub 是把日记本放到图书馆（全世界都能看到）。你在家写日记，写完同步到图书馆；别人也可以给你的日记提建议。

## 通俗解释

GitHub 是全球最大的代码托管平台，微软旗下。它基于 Git，但多了很多在线功能：

**GitHub 能做什么：**
1. **代码托管**：把代码存在云端，不怕电脑坏了丢代码
2. **开源社区**：全世界的开发者在这里分享和协作项目
3. **Pull Request**：别人可以给你的项目提交修改建议
4. **Issues**：记录 bug 和功能需求
5. **GitHub Pages**：免费托管静态网站
6. **GitHub Actions**：自动化工作流（自动测试、部署）

## 实际例子

```bash
# 在 GitHub 上创建一个仓库后，把代码推上去
git remote add origin https://github.com/你的用户名/项目名.git
git push -u origin main

# 别人的项目克隆到本地
git clone https://github.com/别人/项目名.git
```

**开源项目的协作流程：**
1. 你在 GitHub 上"叉"（Fork）一个项目
2. 在自己的副本上修改代码
3. 提交 Pull Request 给原项目
4. 原作者审核后合并你的修改

## 适合做什么

- 备份和同步代码
- 参与开源项目
- 展示你的项目和作品
- 用 GitHub Pages 免费部署网站
- 用 GitHub Actions 做自动化

## 不适合做什么

- 不要把密码、API Key 等敏感信息提交到 GitHub
- 不要上传大文件（有大小限制）
- 私密项目要用私有仓库（免费版也支持了）

## 关键概念

- **Fork**：复制一份别人的项目到自己账号下
- **Pull Request**：请求原作者接受你的修改
- **Star**：给项目点赞收藏
- **README**：项目的说明文档，GitHub 首页默认显示

## 下一步

了解了代码管理，接下来学习 npm——Node.js 的包管理器，让你不用重复造轮子。