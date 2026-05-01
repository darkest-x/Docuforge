# API 文档

## 概述

本文档描述了 DocuForge 的 API 接口设计。

## 认证

### 登录
```
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### 响应
```json
{
  "success": true,
  "data": {
    "id": "user-1",
    "name": "张三",
    "email": "user@example.com",
    "avatar": "https://example.com/avatar.jpg",
    "role": "admin"
  }
}
```

## 文档管理

### 获取文档列表
```
GET /api/documents?page=1&limit=20
```

### 响应
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-1",
      "title": "API 文档",
      "type": "api",
      "language": "zh",
      "tags": ["API", "文档"],
      "status": "published",
      "version": 3,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-20T14:45:00Z",
      "author": {...}
    }
  ],
  "meta": {
    "total": 156,
    "page": 1,
    "limit": 20
  }
}
```

### 获取单个文档
```
GET /api/documents/:id
```

### 创建文档
```
POST /api/documents
Content-Type: application/json

{
  "title": "新文档",
  "type": "api",
  "language": "zh",
  "tags": ["新", "文档"],
  "content": "# 文档标题\n\n内容..."
}
```

### 更新文档
```
PUT /api/documents/:id
Content-Type: application/json

{
  "title": "更新后的标题",
  "content": "更新后的内容..."
}
```

### 删除文档
```
DELETE /api/documents/:id
```

## AI 生成

### 生成文档
```
POST /api/ai/generate
Content-Type: application/json

{
  "type": "api",
  "source": "openapi-spec.json",
  "sourceType": "openapi",
  "language": "zh",
  "options": {
    "includeExamples": true,
    "includeDiagrams": true,
    "tone": "formal"
  }
}
```

### 响应
```json
{
  "success": true,
  "data": {
    "id": "doc-new",
    "title": "AI 生成的 API 文档",
    "content": "# API 文档\n\n自动生成的内容...",
    "type": "api",
    "language": "zh",
    "tags": ["AI生成", "API"],
    "status": "draft",
    "version": 1,
    "createdAt": "2024-01-21T10:00:00Z",
    "updatedAt": "2024-01-21T10:00:00Z",
    "author": {...}
  }
}
```

## 搜索

### 搜索文档
```
GET /api/documents/search?q=API&type=api&tags=API
```

### 响应
```json
{
  "success": true,
  "data": [
    {
      "id": "doc-1",
      "title": "API 文档",
      "snippet": "API 文档内容...",
      "type": "api",
      "tags": ["API"],
      "score": 0.95
    }
  ]
}
```

## 版本管理

### 获取版本历史
```
GET /api/documents/:id/versions
```

### 比较版本
```
POST /api/documents/:id/compare?versionA=1&versionB=3
```

## 仪表板

### 获取统计数据
```
GET /api/dashboard/stats
```

### 响应
```json
{
  "success": true,
  "data": {
    "totalDocuments": 156,
    "publishedDocuments": 128,
    "totalVersions": 432,
    "languages": {
      "zh": 89,
      "en": 52,
      "ja": 10
    },
    "recentDocuments": [...],
    "popularTags": [...]
  }
}
```
