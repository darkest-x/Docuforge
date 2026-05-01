import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Edit, History, Share2, Trash2, Download, Eye } from 'lucide-react'
import { Layout } from '@/components/layout'
import { Button, Card, CardContent } from '@/components/ui'
import { Badge } from '@/components/ui'
import { useDocument, useDeleteDocument } from '@/hooks/useDocuments'
import { useAppContext } from '@/contexts/AppContext'
import { DOCUMENT_STATUS, LANGUAGES } from '@/utils/constants'

const DocumentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { addNotification } = useAppContext()
  const { data: documentResult, isLoading } = useDocument(id || '')
  const deleteMutation = useDeleteDocument()

  const document = documentResult?.data

  if (isLoading) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
            <p className="text-gray-500">加载中...</p>
          </div>
        </div>
      </Layout>
    )
  }

  if (!document) {
    return (
      <Layout>
        <div className="text-center py-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">文档不存在</h2>
          <Button onClick={() => navigate('/documents')}>返回文档列表</Button>
        </div>
      </Layout>
    )
  }

  const statusConfig = DOCUMENT_STATUS.find((s) => s.value === document.status)
  const languageConfig = LANGUAGES.find((l) => l.value === document.language)

  const handleDelete = () => {
    if (window.confirm('确定要删除这个文档吗？')) {
      deleteMutation.mutate(id || '', {
        onSuccess: () => {
          addNotification({ type: 'success', message: '文档删除成功' })
          navigate('/documents')
        },
      })
    }
  }

  const renderContent = () => {
    const lines = document.content.split('\n')
    return lines.map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-gray-900 mb-4 mt-6 first:mt-0">{line.slice(2)}</h1>
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold text-gray-900 mb-3 mt-5">{line.slice(3)}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold text-gray-900 mb-2 mt-4">{line.slice(4)}</h3>
      }
      if (line.trim() === '') {
        return <br key={index} />
      }
      return <p key={index} className="text-gray-600 mb-3 leading-relaxed">{line}</p>
    })
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-gray-900">{document.title}</h1>
                <Badge variant={document.status === 'published' ? 'success' : 'warning'}>
                  {statusConfig?.label}
                </Badge>
              </div>
              <p className="text-gray-500">
                v{document.version} · {languageConfig?.label} · 最后更新于 {new Date(document.updatedAt).toLocaleDateString()}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Button variant="ghost" leftIcon={<History className="w-4 h-4" />}>
              版本历史
            </Button>
            <Button variant="ghost" leftIcon={<Share2 className="w-4 h-4" />}>
              分享
            </Button>
            <Button variant="ghost" leftIcon={<Download className="w-4 h-4" />}>
              导出
            </Button>
            <Button variant="ghost" leftIcon={<Edit className="w-4 h-4" />}>
              编辑
            </Button>
            <Button variant="danger" leftIcon={<Trash2 className="w-4 h-4" />} onClick={handleDelete}>
              删除
            </Button>
          </div>
        </div>

        {document.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {document.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <img
            src={document.author.avatar}
            alt={document.author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <p className="font-medium text-gray-900">{document.author.name}</p>
            <p className="text-sm text-gray-500">{document.author.email}</p>
          </div>
        </div>

        <Card>
          <CardContent className="p-8">
            <div className="prose max-w-none">
              {renderContent()}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  )
}

export default DocumentDetail
