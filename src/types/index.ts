export interface Document {
  id: string
  title: string
  content: string
  type: DocumentType
  language: Language
  tags: string[]
  createdAt: string
  updatedAt: string
  version: number
  author: User
  status: DocumentStatus
}

export type DocumentType = 'api' | 'user_manual' | 'technical' | 'tutorial' | 'other'

export type Language = 'zh' | 'en' | 'ja' | 'ko' | 'de' | 'fr' | 'es' | 'it'

export type DocumentStatus = 'draft' | 'published' | 'archived'

export interface User {
  id: string
  name: string
  email: string
  avatar: string
  role: 'admin' | 'editor' | 'viewer'
}

export interface DocumentVersion {
  id: string
  documentId: string
  version: number
  content: string
  createdAt: string
  author: User
  changelog: string
}

export interface ApiSpec {
  id: string
  name: string
  type: 'openapi' | 'graphql' | 'swagger'
  content: string
  parsed: any
  createdAt: string
  updatedAt: string
}

export interface SearchResult {
  id: string
  title: string
  snippet: string
  type: DocumentType
  score: number
  tags: string[]
}

export interface Tag {
  id: string
  name: string
  color: string
  count: number
}

export interface DashboardStats {
  totalDocuments: number
  publishedDocuments: number
  totalVersions: number
  languages: Record<Language, number>
  recentDocuments: Document[]
  popularTags: Tag[]
}

export interface EditorState {
  documentId: string | null
  content: string
  isDirty: boolean
  isSaving: boolean
  mode: 'markdown' | 'rich' | 'split'
}

export interface Notification {
  id: string
  type: 'success' | 'error' | 'warning' | 'info'
  message: string
  createdAt: string
  read: boolean
}
