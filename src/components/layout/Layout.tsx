import React, { useState } from 'react'
import { Sidebar } from './Sidebar'
import { Header } from './Header'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs))
}

interface LayoutProps {
  children: React.ReactNode
  className?: string
}

export const Layout: React.FC<LayoutProps> = ({ children, className }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className={cn('min-h-screen bg-gray-50 flex', className)}>
      <Sidebar className={cn('hidden lg:flex', !sidebarOpen && 'hidden')} />
      
      <div className="flex-1 flex flex-col min-w-0">
        <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
        
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>

      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {sidebarOpen && (
        <div className="fixed inset-y-0 left-0 z-50 lg:hidden">
          <Sidebar />
        </div>
      )}
    </div>
  )
}

export default Layout
