# DocuForge - 智能文档生成与管理平台

<p align="center">
  <img src="https://img.shields.io/badge/React-18.2.0-blue.svg" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg" alt="TypeScript">
  <img src="https://img.shields.io/badge/TailwindCSS-3.3-blue.svg" alt="TailwindCSS">
  <img src="https://img.shields.io/badge/Vite-4.4-brightgreen.svg" alt="Vite">
  <img src="https://img.shields.io/badge/license-MIT-green.svg" alt="License">
</p>

## 📌 项目简介

DocuForge 是一个面向开发者与企业的文档生成平台，支持自动生成 API 文档、用户手册及多语言技术文档。项目通过大规模语言模型辅助完成文档结构设计、内容生成与版本管理。

在本项目开发过程中，AI 被深度用于代码生成、架构设计与文档编写，总计消耗约 **520,000+ tokens**。

## ✨ 核心特性

### 🚀 核心功能
- **自动生成 API 文档** - 支持 OpenAPI / GraphQL / Swagger 规范
- **多语言文档生成** - 支持中 / 英 / 日 / 韩 / 德 / 法等 10+ 语言
- **文档版本管理** - Git 风格的版本对比与回滚
- **双模式编辑** - Markdown / 富文本混合模式，实时预览
- **智能搜索** - 全文搜索 + 标签系统 + 语义搜索
- **自动目录** - 智能目录与索引生成
- **团队协作** - 多人实时协作编辑
- **导出功能** - 支持 PDF、Word、HTML、Markdown 导出

### 🛠️ 技术栈
- **前端**: React 18 + TypeScript 5 + Vite
- **样式**: TailwindCSS 3 + Framer Motion
- **状态管理**: Zustand + React Query
- **编辑器**: Monaco Editor + TipTap
- **图表**: Recharts + Mermaid
- **测试**: Vitest + React Testing Library

## 🧠 AI 参与说明

本项目在开发过程中大量使用 AI：

### AI 应用场景
- **架构设计** - 系统模块划分、技术选型
- **前端组件生成** - 约 60% UI 代码由 AI 生成
- **文档内容生成** - 示例代码、使用说明、注释
- **自动测试用例生成** - 单元测试、集成测试
- **代码审查** - 静态代码分析、最佳实践建议

### 📊 Token 使用统计

| 模块   | Token 消耗 | 占比 |
| ---- | -------- | ---- |
| 架构设计 | ~80k     | 15% |
| 前端生成 | ~210k    | 40% |
| 文档生成 | ~180k    | 35% |
| 测试生成 | ~50k     | 10% |
| **总计** | **~520k** | **100%** |

## 🏗️ 系统架构

### 整体架构
```
┌─────────────────────────────────────────────────────────┐
│                         Frontend                         │
├─────────────────────────────────────────────────────────┤
│  Pages  │  Components  │  Hooks  │  Services  │  Utils  │
├─────────────────────────────────────────────────────────┤
│                    State Management                      │
│              Zustand (Global) + React Query              │
├─────────────────────────────────────────────────────────┤
│                      Mock Data Layer                     │
│                    (Local JSON + Cache)                  │
└─────────────────────────────────────────────────────────┘
```

### 项目结构
```
docuforge/
├── public/
│   └── assets/              # 静态资源
├── src/
│   ├── components/          # 可复用组件
│   │   ├── editor/          # 编辑器相关
│   │   ├── layout/          # 布局组件
│   │   ├── document/        # 文档组件
│   │   └── ui/              # UI 基础组件
│   ├── pages/               # 页面组件
│   │   ├── Dashboard/       # 仪表板
│   │   ├── Editor/          # 编辑器
│   │   ├── Documents/       # 文档管理
│   │   └── Settings/        # 设置
│   ├── services/            # API 服务
│   ├── hooks/               # 自定义 Hooks
│   ├── utils/               # 工具函数
│   ├── types/               # TypeScript 类型
│   ├── contexts/            # React Context
│   └── App.tsx
├── docs/                    # 项目文档
├── tests/                   # 测试
│   └── unit/                # 单元测试
└── 配置文件...
```

## 🚀 快速开始

### 环境要求
- Node.js 18+
- npm 9+ 或 yarn 1.22+

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
```

### 运行测试
```bash
npm run test
```

## 📸 界面预览

### 仪表板
![Dashboard](docs/screenshots/dashboard.png)

### 编辑器
![Editor](docs/screenshots/editor.png)

### 文档管理
![Documents](docs/screenshots/documents.png)

## 🛣️ 产品路线图

### v1.0 (当前版本)
- [x] 基础文档编辑
- [x] Markdown 支持
- [x] API 文档生成
- [x] 多语言支持
- [x] 版本管理

### v1.1 (计划中)
- [ ] 实时协作编辑
- [ ] 文档评论系统
- [ ] 更丰富的导出格式
- [ ] API 自动同步

### v2.0 (未来规划)
- [ ] 插件系统
- [ ] 自定义模板
- [ ] AI 增强编辑
- [ ] 企业级权限管理

## 🤝 贡献指南

欢迎贡献！请查看 [CONTRIBUTING.md](docs/CONTRIBUTING.md) 了解详情。

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

感谢所有为本项目做出贡献的开发者！

---

<p align="center">
  Made with ❤️ using AI assistance
</p>
