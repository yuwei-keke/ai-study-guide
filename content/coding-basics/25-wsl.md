---
title: WSL 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# WSL 是什么

## 一句话解释

WSL 是 Windows 上的"Linux 虚拟环境"——让你在 Windows 电脑上使用 Linux 的命令和工具，不用装双系统。

## 小白类比

你有一辆轿车（Windows），但偶尔需要越野（Linux 命令行）。WSL 就像给你的轿车装了一套越野模式——不用换车就能越野。

## 通俗解释

WSL（Windows Subsystem for Linux）是微软官方的工具，让你在 Windows 上运行 Linux 环境。

**为什么需要 WSL：**
- 很多开发工具在 Linux 上更好用
- 服务器大多运行 Linux，本地用 WSL 保持一致
- Claude Code 等工具推荐在 Linux 环境下运行
- 不用装双系统或虚拟机

**WSL 的优点：**
1. 和 Windows 无缝集成，可以互相访问文件
2. 启动速度快，占用资源少
3. 可以使用 apt 等 Linux 包管理器
4. 完整的 Linux 命令行体验

## 实际例子

```bash
# 安装 WSL（在 PowerShell 中）
wsl --install

# 安装完成后，打开 Ubuntu 终端
# 就可以使用 Linux 命令了
ls -la
apt update
apt install nodejs
```

## 适合做什么

- Windows 用户进行开发
- 使用 Linux 命令行工具
- 运行需要 Linux 环境的项目
- 和服务器保持环境一致

## 不适合做什么

- 不适合运行图形化 Linux 程序
- 不是完整的虚拟机，某些功能可能受限
- 初学者如果只做简单的前端开发，不一定需要 WSL

## 关键概念

- **WSL 2**：目前的版本，性能比 WSL 1 好很多
- **Ubuntu**：最常用的 Linux 发行版，WSL 默认安装
- **终端**：输入命令的地方，下一章会详细讲

## 下一步

说到命令行，很多初学者会害怕那个黑乎乎的窗口——下一章来了解终端和命令行。