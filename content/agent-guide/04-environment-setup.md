---
title: 使用 AI Agent 前的环境准备
module: agent-guide
difficulty: 入门
lastUpdated: 2026-06-09
---

# 使用 AI Agent 前的环境准备

## 一句话解释

用 Claude Code 之前，需要安装 Node.js、Git 和一个代码编辑器——就像做饭前要先准备锅碗瓢盆。

## 小白类比

你要开一家餐厅，得先准备好厨房、灶台、厨具。用 AI Agent 做项目也一样，先装好必要的工具。

## 通俗解释

**必须安装的：**

**1. Node.js**
- JavaScript 的运行环境
- 下载地址：https://nodejs.org
- 选择 LTS（长期支持）版本
- 安装后在终端输入 node -v 验证

**2. Git**
- 代码版本管理工具
- 下载地址：https://git-scm.com
- 安装后在终端输入 git --version 验证

**3. 代码编辑器（推荐 VS Code）**
- 免费、开源、插件丰富
- 下载地址：https://code.visualstudio.com
- 安装中文语言包和常用插件

**可选安装的：**

**4. Claude Code**
```bash
npm install -g @anthropic-ai/claude-code
```

**5. WSL（Windows 用户）**
- 让 Windows 能用 Linux 命令
- PowerShell 中运行：wsl --install

## 实际例子

安装完成后，打开终端验证：

```bash
# 检查 Node.js
node -v        # 应该显示 v18.x.x 或更高

# 检查 npm
npm -v         # 应该显示 9.x.x 或更高

# 检查 Git
git --version  # 应该显示 git version 2.x.x

# 检查 Claude Code
claude --version
```

全部显示版本号就说明安装成功了。

## 适合做什么

- 按照步骤逐一安装必要工具
- 验证每个工具是否安装成功

## 不适合做什么

- 不要跳过安装直接用（会报错）
- 不要安装太旧的版本

## 关键概念

- **LTS 版本**：长期支持版本，稳定可靠
- **PATH**：系统查找程序的路径，安装时通常自动配置
- **终端/命令行**：输入命令的地方

## 下一步

环境准备好了，接下来了解每个工具具体是干什么的。