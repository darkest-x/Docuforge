export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
  meta?: {
    total?: number
    page?: number
    limit?: number
  }
}

export interface PaginatedResponse<T> {
  items: T[]
  total: number
  page: number
  limit: number
  hasMore: boolean
}

export interface CreateDocumentRequest {
  title: string
  type: string
  language: string
  tags?: string[]
  content?: string
}

export interface UpdateDocumentRequest {
  title?: string
  content?: string
  tags?: string[]
  status?: string
}

export interface GenerateDocumentRequest {
  type: 'api' | 'user_manual' | 'technical'
  source: string
  sourceType: 'openapi' | 'code' | 'text'
  language: string
  options?: {
    includeExamples?: boolean
    includeDiagrams?: boolean
    tone?: 'formal' | 'casual' | 'technical'
  }
}

export interface SearchDocumentsRequest {
  query: string
  types?: string[]
  tags?: string[]
  languages?: string[]
  limit?: number
  offset?: number
}

export interface CompareVersionsRequest {
  documentId: string
  versionA: number
  versionB: number
}

export interface VersionDiff {
  additions: number
  deletions: number
  changes: number
  diff: string
}
