# 贡献指南

欢迎为 DocuForge 做出贡献！

## 开发流程

1. Fork 项目仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 代码规范

### TypeScript
- 使用严格的 TypeScript 配置
- 为所有函数添加类型注解
- 使用类型而非 any

### React
- 使用函数组件和 Hooks
- 组件文件名使用 PascalCase
- 保持组件简洁和可复用

### 样式
- 使用 Tailwind CSS
- 避免使用内联样式
- 遵循响应式设计

### 提交信息

使用有意义的提交信息格式：

```
<type>(<scope>): <subject>

<type> 可以是:
- feat: 新功能
- fix: 修复
- docs: 文档
- style: 格式
- refactor: 重构
- test: 测试
- chore: 构建/工具
```

## Pull Request 流程

1. 确保所有测试通过
2. 更新相关文档
3. 描述清楚变更内容
4. 关联相关的 Issue

## 问题报告

报告问题时请包含：

1. 清晰的标题
2. 复现步骤
3. 预期行为
4. 实际行为
5. 环境信息

## 功能请求

描述：

1. 用例描述
2. 建议的解决方案
3. 替代方案
4. 其他上下文

## 代码审查

所有 PR 都需要：

- 至少一名维护者审查
- 通过所有 CI 检查
- 遵循代码规范

## 许可证

贡献者声明遵守项目的 MIT 许可证
