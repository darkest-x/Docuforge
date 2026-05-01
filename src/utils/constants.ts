export const DOCUMENT_TYPES = [
  { value: 'api', label: 'API 文档', icon: 'code' },
  { value: 'user_manual', label: '用户手册', icon: 'book' },
  { value: 'technical', label: '技术文档', icon: 'file-text' },
  { value: 'tutorial', label: '教程', icon: 'graduation-cap' },
  { value: 'other', label: '其他', icon: 'file' },
] as const

export const LANGUAGES = [
  { value: 'zh', label: '中文' },
  { value: 'en', label: 'English' },
  { value: 'ja', label: '日本語' },
  { value: 'ko', label: '한국어' },
  { value: 'de', label: 'Deutsch' },
  { value: 'fr', label: 'Français' },
  { value: 'es', label: 'Español' },
  { value: 'it', label: 'Italiano' },
] as const

export const DOCUMENT_STATUS = [
  { value: 'draft', label: '草稿', color: '#f59e0b' },
  { value: 'published', label: '已发布', color: '#10b981' },
  { value: 'archived', label: '已归档', color: '#6b7280' },
] as const

export const EDITOR_MODES = [
  { value: 'markdown', label: 'Markdown' },
  { value: 'rich', label: '富文本' },
  { value: 'split', label: '分屏预览' },
] as const

export const STORAGE_KEYS = {
  USER: 'docuforge_user',
  THEME: 'docuforge_theme',
  EDITOR_MODE: 'docuforge_editor_mode',
  RECENT_DOCUMENTS: 'docuforge_recent_docs',
} as const

export const API_BASE_URL = import.meta.env.VITE_API_URL || '/api'

export const APP_NAME = 'DocuForge'
export const APP_VERSION = '1.0.0'
export const APP_DESCRIPTION = '智能文档生成与管理平台'

export const MAX_FILE_SIZE = 10 * 1024 * 1024 // 10MB
export const ALLOWED_FILE_TYPES = ['.md', '.txt', '.json', '.yaml', '.yml', '.pdf', '.doc', '.docx']

export const TAG_COLORS = [
  '#3b82f6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#8b5cf6',
  '#ec4899',
  '#06b6d4',
  '#84cc16',
]
