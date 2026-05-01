import React from 'react'
import { Document } from '@/types'
import { DocumentCard } from './DocumentCard'

interface DocumentListProps {
  documents: Document[]
  loading?: boolean
  emptyMessage?: string
  className?: string
}

export const DocumentList: React.FC<DocumentListProps> = ({
  documents,
  loading = false,
  emptyMessage = '暂无文档',
  className,
}) => {
  if (loading) {
    return (
      <div className={className}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 animate-pulse"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 bg-gray-200 rounded-lg" />
                <div className="w-16 h-5 bg-gray-200 rounded-full" />
              </div>
              <div className="w-3/4 h-5 bg-gray-200 rounded mb-2" />
              <div className="w-full h-4 bg-gray-200 rounded mb-1" />
              <div className="w-2/3 h-4 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (documents.length === 0) {
    return (
      <div className={className}>
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">{emptyMessage}</h3>
          <p className="text-gray-500">创建您的第一个文档开始使用</p>
        </div>
      </div>
    )
  }

  return (
    <div className={className}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {documents.map((document) => (
          <DocumentCard key={document.id} document={document} />
        ))}
      </div>
    </div>
  )
}

export default DocumentList
