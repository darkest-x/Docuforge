# 系统架构文档

## 概述

DocuForge 采用现代化的前端架构，基于 React + TypeScript + Vite 技术栈，配合 Tailwind CSS 进行样式开发。

## 技术栈

### 核心框架
- **React 18.2.0** - 用户界面库
- **TypeScript 5.3.3** - 类型安全的 JavaScript 编程语言
- **Vite 5.0.8** - 下一代前端构建工具

### 路由管理
- **React Router 6.20.0** - 声明式路由管理
- **TanStack Query 5.12.2** - 服务端状态管理
- **Zustand 4.4.7** - 客户端状态管理

### UI & 组件
- **Tailwind CSS 3.3.6** - 实用优先的 CSS 框架
- **Framer Motion 10.16.16** - 动画库
- **Lucide React 0.294.0** - 图标库
- **TipTap 2.1.13** - 富文本编辑器
- **Recharts 2.10.3** - 图表库

### 工具库
- **clsx 2.0.0** - 类名工具
- **tailwind-merge 2.1.0** - Tailwind 类名合并
- **date-fns 2.30.0** - 日期处理

### 测试
- **Vitest 1.1.0** - 测试框架
- **React Testing Library 14.1.2** - React 组件测试

## 目录结构

```
docuforge/
├── public/                 # 静态资源
│   └── assets/         # 资源文件
├── src/
│   ├── components/        # 可复用组件
│   │   ├── layout/     # 布局组件
│   │   ├── document/   # 文档相关组件
│   │   └── ui/        # UI 基础组件
│   ├── pages/          # 页面组件
│   │   ├── Dashboard/     # 仪表板
│   │   ├── Documents/   # 文档管理
│   │   └── Editor/      # 编辑器
│   ├── services/        # API 服务
│   ├── hooks/          # 自定义 Hooks
│   ├── utils/          # 工具函数
│   ├── types/         # TypeScript 类型
│   ├── contexts/      # React Context
│   ├── App.tsx        # 根组件
│   └── main.tsx       # 入口文件
├── docs/               # 项目文档
├── tests/              # 测试文件
└── 配置文件...
```

## 架构设计

### 状态管理

#### 全局状态 (Context)
- **AppContext** - 应用级状态（用户、通知）
- **DocumentContext** - 文档相关状态

#### 服务端状态 (React Query)
- useDocuments - 文档列表
- useDocument - 单个文档
- useDashboardStats - 仪表板数据

### 数据流

```
用户交互 → 组件状态更新 → API 调用 → React Query 缓存 → 组件重新渲染
```

### 组件架构

#### 布局组件 (Layout)
- **Sidebar** - 侧边栏导航
- **Header** - 顶部栏
- **Layout** - 主布局容器

#### UI 组件
- **Button** - 按钮组件
- **Card** - 卡片组件
- **Badge** - 徽章组件
- **Input** - 输入框组件

#### 业务组件
- **DocumentCard** - 文档卡片
- **DocumentList** - 文档列表

### 路由设计

```
/                      # 仪表板
/documents            # 文档列表
/documents/:id        # 文档详情
/create                # 创建文档
/generate              # AI 生成文档
```

## AI 集成架构

### AI 应用场景

1. **组件代码生成
2. **架构设计辅助
3. **文档内容生成
4. **测试用例生成

### Token 使用统计

| 模块 | Token 消耗 |
|------|------------|
| 架构设计 | ~80k |
| 前端生成 | ~210k |
| 文档生成 | ~180k |
| 测试生成 | ~50k |
| **总计** | **~520k** |

## 性能优化

- 使用 Vite 快速开发和构建
- React Query 数据缓存
- 组件懒加载
- 图片优化
- CSS 优化

## 安全考虑

- 类型安全
- 输入验证
- 安全的依赖管理
