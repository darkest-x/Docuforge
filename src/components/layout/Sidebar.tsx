import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  Home,
  FileText,
  Plus,
  Search,
  Settings,
  BookOpen,
  Code,
  Layers,
} from 'lucide-react'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

const menuItems = [
  { icon: Home, label: '仪表板', path: '/' },
  { icon: FileText, label: '文档管理', path: '/documents' },
  { icon: Plus, label: '新建文档', path: '/create' },
  { icon: Search, label: '搜索', path: '/search' },
  { icon: BookOpen, label: '模板库', path: '/templates' },
  { icon: Code, label: 'API 集成', path: '/integrations' },
  { icon: Layers, label: '版本控制', path: '/versions' },
  { icon: Settings, label: '设置', path: '/settings' },
]

interface SidebarProps {
  className?: string
}

export const Sidebar: React.FC<SidebarProps> = ({ className }) => {
  const location = useLocation()

  return (
    <div className={cn('w-64 bg-white border-r border-gray-200 flex flex-col', className)}>
      <div className="h-16 flex items-center px-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Code className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">DocuForge</span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path
          const Icon = item.icon

          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200',
                isActive
                  ? 'bg-blue-50 text-blue-600 border border-blue-100'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )}
            >
              <Icon className="w-5 h-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4">
          <p className="text-sm font-medium text-gray-900 mb-2">AI 文档生成</p>
          <p className="text-xs text-gray-600 mb-3">
            利用 AI 自动生成专业文档
          </p>
          <button className="w-full bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            开始使用
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
