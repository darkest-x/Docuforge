import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Save, Sparkles, Upload } from 'lucide-react'
import { Layout } from '@/components/layout'
import { Button, Input, Card, CardContent } from '@/components/ui'
import { useCreateDocument, useGenerateDocument } from '@/hooks/useDocuments'
import { useAppContext } from '@/contexts/AppContext'
import { DOCUMENT_TYPES, LANGUAGES } from '@/utils/constants'

const CreateDocument: React.FC = () => {
  const navigate = useNavigate()
  const { addNotification } = useAppContext()
  const createMutation = useCreateDocument()
  const generateMutation = useGenerateDocument()

  const [formData, setFormData] = useState({
    title: '',
    type: 'api',
    language: 'zh',
    tags: '',
    content: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createMutation.mutate(
      {
        ...formData,
        tags: formData.tags.split(',').map((t) => t.trim()).filter(Boolean),
      },
      {
        onSuccess: () => {
          addNotification({ type: 'success', message: '文档创建成功' })
          navigate('/documents')
        },
      }
    )
  }

  const handleGenerate = () => {
    generateMutation.mutate(
      {
        type: formData.type as any,
        source: 'sample',
        sourceType: 'text',
        language: formData.language,
      },
      {
        onSuccess: (result) => {
          if (result.data) {
            setFormData({
              ...formData,
              title: result.data.title,
              content: result.data.content,
              tags: result.data.tags.join(','),
            })
            addNotification({ type: 'success', message: 'AI 文档生成成功' })
          }
        },
      }
    )
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">新建文档</h1>
            <p className="text-gray-500 mt-1">创建新的文档或使用 AI 自动生成</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <Card>
                <CardContent className="p-6 space-y-6">
                  <Input
                    label="文档标题"
                    placeholder="输入文档标题..."
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    required
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        文档类型
                      </label>
                      <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {DOCUMENT_TYPES.map((type) => (
                          <option key={type.value} value={type.value}>{type.label}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        语言
                      </label>
                      <select
                        value={formData.language}
                        onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        {LANGUAGES.map((lang) => (
                          <option key={lang.value} value={lang.value}>{lang.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <Input
                    label="标签（用逗号分隔）"
                    placeholder="API, 文档, 示例"
                    value={formData.tags}
                    onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      内容
                    </label>
                    <textarea
                      value={formData.content}
                      onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                      rows={15}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
                      placeholder="开始编写文档内容..."
                    />
                  </div>
                </CardContent>
              </Card>

              <div className="flex items-center justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => navigate(-1)}
                >
                  取消
                </Button>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="secondary"
                    leftIcon={<Sparkles className="w-4 h-4" />}
                    onClick={handleGenerate}
                    isLoading={generateMutation.isPending}
                  >
                    AI 生成
                  </Button>
                  <Button
                    type="submit"
                    leftIcon={<Save className="w-4 h-4" />}
                    isLoading={createMutation.isPending}
                  >
                    保存文档
                  </Button>
                </div>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">快速提示</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    使用 Markdown 语法来格式化文档
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    添加标签可以帮助更好地组织和搜索文档
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                    使用 AI 生成功能快速创建文档初稿
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">从文件导入</h3>
                <div className="border-2 border-dashed border-gray-200 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-500 mb-2">拖拽文件到此处</p>
                  <p className="text-xs text-gray-400">或</p>
                  <Button variant="secondary" className="mt-3">
                    选择文件
                  </Button>
                </div>
                <p className="text-xs text-gray-400 mt-3">
                  支持 .md, .txt, .json 格式
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CreateDocument
