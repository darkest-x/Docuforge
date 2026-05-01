import React from 'react'
import { Link } from 'react-router-dom'
import {
  FileText,
  TrendingUp,
  Users,
  Clock,
  Plus,
  Sparkles,
  Code,
  BookOpen,
  Layers,
} from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Layout } from '@/components/layout'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui'
import { Button } from '@/components/ui'
import { DocumentList } from '@/components/document'
import { useDashboardStats, useDocuments } from '@/hooks/useDocuments'
import { useAppContext } from '@/contexts/AppContext'

const chartData = [
  { name: '周一', docs: 12 },
  { name: '周二', docs: 19 },
  { name: '周三', docs: 15 },
  { name: '周四', docs: 25 },
  { name: '周五', docs: 22 },
  { name: '周六', docs: 8 },
  { name: '周日', docs: 10 },
]

const quickActions = [
  {
    title: '生成 API 文档',
    description: '从 OpenAPI 规范自动生成',
    icon: Code,
    color: 'from-blue-500 to-blue-600',
    path: '/generate?type=api',
  },
  {
    title: '创建用户手册',
    description: '使用模板快速创建',
    icon: BookOpen,
    color: 'from-green-500 to-green-600',
    path: '/create?type=user_manual',
  },
  {
    title: '技术文档',
    description: '架构设计和技术说明',
    icon: Layers,
    color: 'from-purple-500 to-purple-600',
    path: '/create?type=technical',
  },
]

const Dashboard: React.FC = () => {
  const { data: stats, isLoading: statsLoading } = useDashboardStats()
  const { data: documents, isLoading: docsLoading } = useDocuments()
  const { user } = useAppContext()

  return (
    <Layout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              欢迎回来，{user?.name || '用户'}！
            </h1>
            <p className="text-gray-500 mt-1">
              这是您的文档管理仪表盘，查看最新动态和统计数据
            </p>
          </div>
          <Link to="/create">
            <Button leftIcon={<Plus className="w-4 h-4" />}>
              新建文档
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">总文档数</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {statsLoading ? '...' : stats?.data?.totalDocuments || 0}
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                  <FileText className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-green-600 mt-4 flex items-center">
                <TrendingUp className="w-4 h-4 mr-1" />
                +12% 本周
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">已发布</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {statsLoading ? '...' : stats?.data?.publishedDocuments || 0}
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                  <TrendingUp className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                占比 {statsLoading ? '...' : `${Math.round(((stats?.data?.publishedDocuments || 0) / (stats?.data?.totalDocuments || 1)) * 100)}%`}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">总版本</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {statsLoading ? '...' : stats?.data?.totalVersions || 0}
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                  <Layers className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                平均每文档 {statsLoading ? '...' : Math.round((stats?.data?.totalVersions || 0) / (stats?.data?.totalDocuments || 1))} 版本
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">语言数</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">
                    {statsLoading ? '...' : Object.keys(stats?.data?.languages || {}).filter(k => (stats?.data?.languages as any)[k] > 0).length || 0}
                  </p>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600">
                  <Users className="w-6 h-6" />
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                多语言文档支持
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>文档创建趋势</CardTitle>
                <CardDescription>近 7 天文档创建情况</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} dy={10} />
                      <YAxis axisLine={false} tickLine={false} tick={{ fill: '#6b7280', fontSize: 12 }} />
                      <Tooltip
                        contentStyle={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
                      />
                      <Bar dataKey="docs" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>快速操作</CardTitle>
                <CardDescription>使用 AI 快速创建文档</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => {
                  const Icon = action.icon
                  return (
                    <Link key={index} to={action.path} className="block">
                      <div className="flex items-center gap-4 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200">
                        <div className={`w-10 h-10 bg-gradient-to-br ${action.color} rounded-lg flex items-center justify-center text-white`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-gray-900">{action.title}</p>
                          <p className="text-sm text-gray-500">{action.description}</p>
                        </div>
                        <Sparkles className="w-4 h-4 text-gray-400" />
                      </div>
                    </Link>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl font-bold text-gray-900">最近文档</h2>
              <p className="text-gray-500 mt-1">您最近查看和编辑的文档</p>
            </div>
            <Link to="/documents">
              <Button variant="ghost">
                查看全部
              </Button>
            </Link>
          </div>
          <DocumentList
            documents={documents?.data?.slice(0, 3) || []}
            loading={docsLoading}
          />
        </div>

        {stats?.data?.popularTags && stats.data.popularTags.length > 0 && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-bold text-gray-900">热门标签</h2>
                <p className="text-gray-500 mt-1">最常使用的文档标签</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              {stats.data.popularTags.map((tag) => (
                <div
                  key={tag.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 cursor-pointer"
                >
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: tag.color }}
                  />
                  <span className="font-medium text-gray-900">{tag.name}</span>
                  <span className="text-sm text-gray-500">{tag.count}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Layout>
  )
}

export default Dashboard
