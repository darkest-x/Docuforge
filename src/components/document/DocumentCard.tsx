import React from 'react'
import { Link } from 'react-router-dom'
import { FileText, Calendar, User, Tag, Code, BookOpen, GraduationCap } from 'lucide-react'
import { Card, CardContent, CardFooter } from '@/components/ui'
import { Badge } from '@/components/ui'
import { Document } from '@/types'
import { formatRelativeTime } from '@/utils/format'
import { DOCUMENT_STATUS, LANGUAGES } from '@/utils/constants'

interface DocumentCardProps {
  document: Document
  className?: string
}

export const DocumentCard: React.FC<DocumentCardProps> = ({ document, className }) => {
  const statusConfig = DOCUMENT_STATUS.find((s) => s.value === document.status)
  const languageConfig = LANGUAGES.find((l) => l.value === document.language)

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'api':
        return <Code className="w-5 h-5" />
      case 'user_manual':
        return <BookOpen className="w-5 h-5" />
      case 'technical':
        return <FileText className="w-5 h-5" />
      case 'tutorial':
        return <GraduationCap className="w-5 h-5" />
      default:
        return <FileText className="w-5 h-5" />
    }
  }

  return (
    <Link to={`/documents/${document.id}`}>
      <Card hoverable className={className}>
        <CardContent className="p-5">
          <div className="flex items-start justify-between mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-blue-600">
              {getTypeIcon(document.type)}
            </div>
            <Badge 
              variant={document.status === 'published' ? 'success' : 'warning'}
              size="sm"
            >
              {statusConfig?.label}
            </Badge>
          </div>

          <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {document.title}
          </h4>

          <p className="text-sm text-gray-500 mb-4 line-clamp-2">
            {document.content.replace(/[#*`]/g, '').substring(0, 100)}...
          </p>

          {document.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {document.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
              {document.tags.length > 3 && (
                <span className="text-xs text-gray-400">
                  +{document.tags.length - 3}
                </span>
              )}
            </div>
          )}
        </CardContent>

        <CardFooter className="px-5 py-4 border-t border-gray-100">
          <div className="flex items-center justify-between w-full text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <img
                src={document.author.avatar}
                alt={document.author.name}
                className="w-5 h-5 rounded-full"
              />
              <span>{document.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{languageConfig?.label}</span>
              <span>·</span>
              <span>v{document.version}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

export default DocumentCard
