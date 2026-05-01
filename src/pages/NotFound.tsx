import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'
import { Layout } from '@/components/layout'
import { Button } from '@/components/ui'

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="text-8xl font-bold text-gray-200 mb-4">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">页面不存在</h1>
        <p className="text-gray-500 mb-8">抱歉，您访问的页面不存在或已被移除</p>
        <Link to="/">
          <Button leftIcon={<Home className="w-4 h-4" />}>
            返回首页
          </Button>
        </Link>
      </div>
    </Layout>
  )
}

export default NotFound
