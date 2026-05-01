/**
 * 模拟数据
 */

export const mockDocuments = [
  {
    id: 'doc-1',
    title: '用户 API 接口文档',
    content: '# 用户 API 接口文档\n\n## 概述\n本文档描述了用户管理相关的 API 接口。\n\n## 认证\n所有接口都需要认证令牌。',
    type: 'api',
    language: 'zh',
    tags: ['API', '用户管理', 'REST'],
    createdAt: '2024-01-15T10:30:00Z',
    updatedAt: '2024-01-20T14:45:00Z',
    version: 3,
    author: {
      id: 'u1',
      name: '张三',
      email: 'zhangsan@example.com',
      avatar: 'https://i.pravatar.cc/150?img=1',
      role: 'admin'
    },
    status: 'published'
  },
  {
    id: 'doc-2',
    title: '产品使用手册',
    content: '# 产品使用手册\n\n## 欢迎使用\n欢迎使用 DocuForge 智能文档平台。',
    type: 'user_manual',
    language: 'zh',
    tags: ['手册', '入门', '教程'],
    createdAt: '2024-01-10T08:00:00Z',
    updatedAt: '2024-01-18T16:20:00Z',
    version: 2,
    author: {
      id: 'u2',
      name: '李四',
      email: 'lisi@example.com',
      avatar: 'https://i.pravatar.cc/150?img=2',
      role: 'editor'
    },
    status: 'published'
  },
  {
    id: 'doc-3',
    title: 'Technical Architecture Overview',
    content: '# Technical Architecture Overview\n\n## System Design',
    type: 'technical',
    language: 'en',
    tags: ['Architecture', 'Design', 'Technical'],
    createdAt: '2024-01-05T12:00:00Z',
    updatedAt: '2024-01-12T09:30:00Z',
    version: 1,
    author: {
      id: 'u3',
      name: 'John Doe',
      email: 'john@example.com',
      avatar: 'https://i.pravatar.cc/150?img=3',
      role: 'admin'
    },
    status: 'draft'
  }
]

export const mockUsers = [
  {
    id: 'u1',
    name: '张三',
    email: 'zhangsan@example.com',
    avatar: 'https://i.pravatar.cc/150?img=1',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: 'u2',
    name: '李四',
    email: 'lisi@example.com',
    avatar: 'https://i.pravatar.cc/150?img=2',
    role: 'editor',
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: 'u3',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://i.pravatar.cc/150?img=3',
    role: 'viewer',
    createdAt: '2024-01-03T00:00:00Z'
  }
]

export const mockTags = [
  { id: 't1', name: 'API', color: '#3b82f6', count: 45 },
  { id: 't2', name: '手册', color: '#10b981', count: 32 },
  { id: 't3', name: '教程', color: '#f59e0b', count: 28 },
  { id: 't4', name: 'Architecture', color: '#8b5cf6', count: 21 },
  { id: 't5', name: 'Technical', color: '#ef4444', count: 18 }
]

export const mockDashboardStats = {
  totalDocuments: 156,
  publishedDocuments: 128,
  totalVersions: 432,
  languages: {
    zh: 89,
    en: 52,
    ja: 10,
    ko: 3,
    de: 1,
    fr: 1,
    es: 0,
    it: 0
  }
}

export const mockChartData = [
  { name: '周一', docs: 12 },
  { name: '周二', docs: 19 },
  { name: '周三', docs: 15 },
  { name: '周四', docs: 25 },
  { name: '周五', docs: 22 },
  { name: '周六', docs: 8 },
  { name: '周日', docs: 10 }
]

export const mockNotifications = [
  {
    id: 'n1',
    type: 'success',
    message: '文档创建成功',
    read: false,
    createdAt: new Date().toISOString()
  },
  {
    id: 'n2',
    type: 'info',
    message: '您有新的评论',
    read: true,
    createdAt: new Date(Date.now() - 3600000).toISOString()
  },
  {
    id: 'n3',
    type: 'warning',
    message: '存储空间即将用尽',
    read: false,
    createdAt: new Date(Date.now() - 86400000).toISOString()
  }
]

export const mockTemplates = [
  {
    id: 'template-1',
    name: 'API 文档模板',
    type: 'api',
    description: '标准的 API 接口文档模板',
    thumbnail: 'https://picsum.photos/seed/api/400/300'
  },
  {
    id: 'template-2',
    name: '产品手册模板',
    type: 'user_manual',
    description: '产品使用手册模板',
    thumbnail: 'https://picsum.photos/seed/manual/400/300'
  },
  {
    id: 'template-3',
    name: '技术架构文档',
    type: 'technical',
    description: '技术架构设计文档模板',
    thumbnail: 'https://picsum.photos/seed/arch/400/300'
  }
]
