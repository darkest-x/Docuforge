import { Document, SearchResult, DashboardStats, DocumentVersion } from '@/types'
import {
  ApiResponse,
  PaginatedResponse,
  CreateDocumentRequest,
  UpdateDocumentRequest,
  GenerateDocumentRequest,
  SearchDocumentsRequest,
  CompareVersionsRequest,
  VersionDiff,
} from '@/types/api'

const mockDocuments: Document[] = [
  {
    id: '1',
    title: '用户 API 接口文档',
    content: '# 用户 API 接口文档\n\n## 概述\n本文档描述了用户管理相关的 API 接口...',
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
      avatar: 'https://i.pravatar.cc/150?u=u1',
      role: 'admin',
    },
    status: 'published',
  },
  {
    id: '2',
    title: '产品使用手册',
    content: '# 产品使用手册\n\n## 欢迎使用\n欢迎使用 DocuForge 智能文档平台...',
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
      avatar: 'https://i.pravatar.cc/150?u=u2',
      role: 'editor',
    },
    status: 'published',
  },
  {
    id: '3',
    title: 'Technical Architecture Overview',
    content: '# Technical Architecture Overview\n\n## System Design\nThis document describes the technical architecture...',
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
      avatar: 'https://i.pravatar.cc/150?u=u3',
      role: 'admin',
    },
    status: 'draft',
  },
]

const mockStats: DashboardStats = {
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
    it: 0,
  },
  recentDocuments: mockDocuments,
  popularTags: [
    { id: 't1', name: 'API', color: '#3b82f6', count: 45 },
    { id: 't2', name: '手册', color: '#10b981', count: 32 },
    { id: 't3', name: '教程', color: '#f59e0b', count: 28 },
    { id: 't4', name: 'Architecture', color: '#8b5cf6', count: 21 },
    { id: 't5', name: 'Technical', color: '#ef4444', count: 18 },
  ],
}

export async function getDocuments(): Promise<ApiResponse<Document[]>> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    data: mockDocuments,
    success: true,
  }
}

export async function getDocument(id: string): Promise<ApiResponse<Document>> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  const doc = mockDocuments.find((d) => d.id === id)
  return {
    data: doc || mockDocuments[0],
    success: true,
  }
}

export async function createDocument(data: CreateDocumentRequest): Promise<ApiResponse<Document>> {
  await new Promise((resolve) => setTimeout(resolve, 500))
  const newDoc: Document = {
    id: Date.now().toString(),
    title: data.title,
    content: data.content || '',
    type: data.type as any,
    language: data.language as any,
    tags: data.tags || [],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: 1,
    author: {
      id: 'u1',
      name: '当前用户',
      email: 'user@example.com',
      avatar: 'https://i.pravatar.cc/150?u=current',
      role: 'admin',
    },
    status: 'draft',
  }
  return {
    data: newDoc,
    success: true,
    message: '文档创建成功',
  }
}

export async function updateDocument(id: string, data: UpdateDocumentRequest): Promise<ApiResponse<Document>> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  return {
    data: { ...mockDocuments[0], ...data, id, updatedAt: new Date().toISOString() },
    success: true,
    message: '文档更新成功',
  }
}

export async function deleteDocument(id: string): Promise<ApiResponse<void>> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    data: undefined,
    success: true,
    message: '文档删除成功',
  }
}

export async function generateDocument(data: GenerateDocumentRequest): Promise<ApiResponse<Document>> {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const newDoc: Document = {
    id: Date.now().toString(),
    title: 'AI 生成的文档',
    content: '# AI 生成的文档\n\n这是由 AI 自动生成的文档内容...',
    type: data.type,
    language: data.language as any,
    tags: ['AI生成'],
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    version: 1,
    author: {
      id: 'ai',
      name: 'AI Assistant',
      email: 'ai@docuforge.com',
      avatar: 'https://i.pravatar.cc/150?u=ai',
      role: 'editor',
    },
    status: 'draft',
  }
  return {
    data: newDoc,
    success: true,
    message: '文档生成成功',
  }
}

export async function searchDocuments(params: SearchDocumentsRequest): Promise<ApiResponse<SearchResult[]>> {
  await new Promise((resolve) => setTimeout(resolve, 400))
  const results: SearchResult[] = mockDocuments.map((doc) => ({
    id: doc.id,
    title: doc.title,
    snippet: doc.content.substring(0, 100) + '...',
    type: doc.type,
    score: 0.95,
    tags: doc.tags,
  }))
  return {
    data: results,
    success: true,
  }
}

export async function getDashboardStats(): Promise<ApiResponse<DashboardStats>> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    data: mockStats,
    success: true,
  }
}

export async function getDocumentVersions(documentId: string): Promise<ApiResponse<DocumentVersion[]>> {
  await new Promise((resolve) => setTimeout(resolve, 250))
  const versions: DocumentVersion[] = [
    {
      id: 'v1',
      documentId,
      version: 3,
      content: '最新版本内容...',
      createdAt: '2024-01-20T14:45:00Z',
      author: mockDocuments[0].author,
      changelog: '更新了 API 示例',
    },
    {
      id: 'v2',
      documentId,
      version: 2,
      content: '第二版本内容...',
      createdAt: '2024-01-18T10:30:00Z',
      author: mockDocuments[0].author,
      changelog: '添加了更多接口说明',
    },
    {
      id: 'v3',
      documentId,
      version: 1,
      content: '初始版本内容...',
      createdAt: '2024-01-15T10:30:00Z',
      author: mockDocuments[0].author,
      changelog: '初始创建',
    },
  ]
  return {
    data: versions,
    success: true,
  }
}

export async function compareVersions(params: CompareVersionsRequest): Promise<ApiResponse<VersionDiff>> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    data: {
      additions: 15,
      deletions: 3,
      changes: 8,
      diff: 'diff --git a/content b/content\n+ 新增内容\n- 删除内容',
    },
    success: true,
  }
}
