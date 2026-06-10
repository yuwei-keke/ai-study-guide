---
title: JavaScript 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# JavaScript 是什么

## 一句话解释

JavaScript 是网页的"大脑"——它让网页能响应用户操作、动态更新内容、和服务器通信。

## 小白类比

HTML 是骨架，CSS 是外表，JavaScript 是大脑和肌肉。有了 JS，网页才能"动"起来——点击按钮有反应、输入内容能验证、数据能实时更新。

## 通俗解释

JavaScript（简称 JS）是目前世界上用得最多的编程语言之一。它最初只在浏览器里运行，现在也能在服务器端运行（Node.js）。

**JS 能做的事：**
- 响应用户操作：点击、滚动、输入
- 动态修改页面：不用刷新网页就能更新内容
- 发送网络请求：从服务器获取数据
- 数据处理：计算、排序、过滤
- 动画效果：让元素动起来

**JS 的基本概念：**
- **变量**：用 let 和 const 存储数据
- **函数**：一段可复用的代码
- **条件判断**：if...else，根据不同情况做不同事
- **循环**：重复做某件事
- **事件**：用户做了某个操作后触发代码

## 实际例子

```javascript
// 点击按钮后改变文字
const btn = document.getElementById('myBtn');
btn.addEventListener('click', function() {
  btn.textContent = '你点击了我！';
});

// 从服务器获取数据
async function loadData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  console.log(data);
}

// 简单的计算器
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 输出 5
```

## 适合做什么

- 让网页有交互功能
- 开发网站和 Web 应用
- 用 Node.js 做后端服务
- 做小游戏、工具、可视化图表

## 不适合做什么

- JS 不适合做大型 3D 游戏（性能不够）
- JS 不适合做底层系统开发
- 浏览器端 JS 不能直接操作用户电脑的文件

## 关键概念

- **DOM**：网页的结构化表示，JS 通过 DOM 来修改页面
- **事件监听**：告诉 JS "当用户做了什么，就执行什么代码"
- **异步**：JS 可以同时做多件事，不会因为等一个任务而卡住

## 下一步

JavaScript 是前端开发的核心。如果你想做更大的项目，可以了解 TypeScript——JavaScript 的"升级版"。