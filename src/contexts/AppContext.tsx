import React, { createContext, useContext, ReactNode } from 'react'
import { User, Notification } from '@/types'

interface AppContextType {
  user: User | null
  setUser: (user: User | null) => void
  notifications: Notification[]
  addNotification: (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => void
  markNotificationAsRead: (id: string) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [user, setUser] = React.useState<User | null>(null)
  const [notifications, setNotifications] = React.useState<Notification[]>([])
  const [isLoading, setIsLoading] = React.useState(false)

  const addNotification = React.useCallback(
    (notification: Omit<Notification, 'id' | 'createdAt' | 'read'>) => {
      const newNotification: Notification = {
        ...notification,
        id: Date.now().toString(),
        createdAt: new Date().toISOString(),
        read: false,
      }
      setNotifications((prev) => [newNotification, ...prev].slice(0, 50))
    },
    []
  )

  const markNotificationAsRead = React.useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    )
  }, [])

  const value = React.useMemo(
    () => ({
      user,
      setUser,
      notifications,
      addNotification,
      markNotificationAsRead,
      isLoading,
      setIsLoading,
    }),
    [user, notifications, isLoading, addNotification, markNotificationAsRead]
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider')
  }
  return context
}
