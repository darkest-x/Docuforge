# 快速开始

## 前置要求

- Node.js 18 或更高版本
- npm 9+ 或 yarn 1.22+

## 安装

### 克隆项目
```bash
git clone <repository-url>
cd docuforge
```

### 安装依赖
```bash
npm install
```

### 环境配置

创建 `.env` 文件：
```env
VITE_APP_TITLE=DocuForge
VITE_API_URL=http://localhost:3001/api
```

## 开发

### 启动开发服务器
```bash
npm run dev
```

应用将在 http://localhost:3000 启动

### 构建生产版本
```bash
npm run build
```

构建产物将输出到 `dist` 目录

### 预览生产构建
```bash
npm run preview
```

## 项目结构

```
docuforge/
├── src/
│   ├── components/   # 组件
│   ├── pages/     # 页面
│   ├── services/  # 服务
│   ├── hooks/     # Hooks
│   ├── utils/     # 工具
│   ├── types/    # 类型
│   └── contexts/ # Context
├── public/        # 静态资源
├── docs/         # 文档
└── tests/        # 测试
```

## 开发指南

### 创建新组件
```tsx
// src/components/MyComponent.tsx
import React from 'react'

export const MyComponent: React.FC = () => {
  return <div>Hello</div>
}
```

### 创建新页面
```tsx
// src/pages/MyPage.tsx
import React from 'react'
import { Layout } from '@/components/layout'

const MyPage: React.FC = () => {
  return <Layout><h1>我的页面</h1></Layout>
}
```

### 添加路由
```tsx
// src/App.tsx
<Route path="/my-page" element={<MyPage />} />
```

## 测试

### 运行测试
```bash
npm run test
```

### 运行测试并生成覆盖率报告
```bash
npm run test:coverage
```

## 代码质量

### 运行 ESLint
```bash
npm run lint
```

### 格式化代码
```bash
npm run format
```

## 常见问题

### 端口被占用
修改 `vite.config.ts` 中的端口配置

### 依赖安装失败
尝试清除 node_modules 和重新安装
