---
title: TypeScript 是什么
module: coding-basics
difficulty: 入门
lastUpdated: 2026-06-09
---

# TypeScript 是什么

## 一句话解释

TypeScript 是 JavaScript 的"带盔甲版本"——在 JS 基础上加了类型检查，能提前发现错误，让代码更可靠。

## 小白类比

JavaScript 就像用铅笔写字——随便写，写错了擦掉重来就行。TypeScript 就像用钢笔写字前先打草稿——虽然多了一步，但能避免很多低级错误。

## 通俗解释

TypeScript（简称 TS）是微软开发的，它是 JavaScript 的超集——所有 JS 代码都是合法的 TS 代码，但 TS 多了"类型"功能。

**什么是类型？**

在 JS 里，你可以这样写：
```javascript
let age = 25;        // age 是数字
age = "二十五";      // 没问题！变成了字符串
```

在 TS 里，你必须提前声明类型：
```typescript
let age: number = 25;
age = "二十五";      // 报错！不能把字符串赋给数字类型
```

**TS 的好处：**
1. **提前发现错误**：写代码时就能看到红色波浪线提示错误
2. **代码提示更好**：编辑器能准确知道变量有哪些属性和方法
3. **团队协作更方便**：类型就是最好的文档
4. **重构更安全**：改代码时 TS 会告诉你哪些地方受影响

## 实际例子

```typescript
// 定义一个用户类型
interface User {
  name: string;
  age: number;
  email?: string;  // ? 表示可选
}

// 函数参数和返回值都有类型
function greet(user: User): string {
  return '你好，' + user.name;
}

// 编辑器会自动提示 user 有 name、age、email 属性
const result = greet({ name: '小明', age: 20 });
```

## 适合做什么

- 大型项目开发（代码多了类型检查很有用）
- 团队协作（类型就是接口约定）
- 需要高可靠性的项目

## 不适合做什么

- 简单的小脚本（杀鸡用牛刀）
- 快速原型开发（类型声明会拖慢速度）
- 初学者直接学（建议先学 JS）

## 关键概念

- **类型（Type）**：数据的种类，如数字、字符串、布尔值
- **接口（Interface）**：定义一个对象应该有哪些属性和方法
- **编译**：TS 代码需要先转成 JS 才能在浏览器运行

## 下一步

了解了基础语言后，可以看看 React 和 Vue——目前最流行的前端框架。