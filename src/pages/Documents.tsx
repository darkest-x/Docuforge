import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Filter, Search, Grid, List, ArrowUpDown } from 'lucide-react'
import { Layout } from '@/components/layout'
import { Button, Input } from '@/components/ui'
import { DocumentList } from '@/components/document'
import { useDocuments } from '@/hooks/useDocuments'
import { DOCUMENT_TYPES, LANGUAGES } from '@/utils/constants'

const Documents: React.FC = () => {
  const { data: documents, isLoading } = useDocuments()
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('all')

  const filteredDocuments = (documents?.data || []).filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         doc.content.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesType = selectedType === 'all' || doc.type === selectedType
    const matchesLanguage = selectedLanguage === 'all' || doc.language === selectedLanguage
    return matchesSearch && matchesType && matchesLanguage
  })

  return (
    <Layout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">文档管理</h1>
            <p className="text-gray-500 mt-1">管理您的所有文档</p>
          </div>
          <Link to="/create">
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              新建文档
            </Button>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <Input
              placeholder="搜索文档..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              leftIcon={<Search className="w-4 h-4" />}
            />
          </div>

          <div className="flex items-center gap-2">
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">全部类型</option>
              {DOCUMENT_TYPES.map((type) => (
                <option key={type.value} value={type.value}>{type.label}</option>
              ))}
            </select>

            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value)}
              className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="all">全部语言</option>
              {LANGUAGES.map((lang) => (
                <option key={lang.value} value={lang.value}>{lang.label}</option>
              ))}
            </select>

            <div className="flex items-center gap-1 border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-500 hover:bg-gray-50'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <p>共 {filteredDocuments.length} 个文档</p>
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4" />
            <span>排序：更新时间</span>
          </div>
        </div>

        <DocumentList
          documents={filteredDocuments}
          loading={isLoading}
          emptyMessage="没有找到匹配的文档"
        />
      </div>
    </Layout>
  )
}

export default Documents
