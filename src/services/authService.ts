import { User } from '@/types'
import { ApiResponse } from '@/types/api'

const mockUser: User = {
  id: 'u1',
  name: '张三',
  email: 'zhangsan@example.com',
  avatar: 'https://i.pravatar.cc/150?u=u1',
  role: 'admin',
}

export async function login(email: string, password: string): Promise<ApiResponse<User>> {
  await new Promise((resolve) => setTimeout(resolve, 800))
  return {
    data: mockUser,
    success: true,
    message: '登录成功',
  }
}

export async function logout(): Promise<ApiResponse<void>> {
  await new Promise((resolve) => setTimeout(resolve, 300))
  return {
    data: undefined,
    success: true,
    message: '登出成功',
  }
}

export async function getCurrentUser(): Promise<ApiResponse<User>> {
  await new Promise((resolve) => setTimeout(resolve, 200))
  return {
    data: mockUser,
    success: true,
  }
}

export async function register(email: string, password: string, name: string): Promise<ApiResponse<User>> {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return {
    data: { ...mockUser, email, name },
    success: true,
    message: '注册成功',
  }
}
