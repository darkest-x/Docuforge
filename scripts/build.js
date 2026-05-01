/**
 * 构建脚本
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 开始构建 DocuForge...')

try {
  console.log('📦 清理旧构建...')
  if (fs.existsSync('dist')) {
    fs.rmSync('dist', { recursive: true, force: true })
  }

  console.log('🔨 运行 TypeScript 编译...')
  execSync('npx tsc', { stdio: 'inherit' })

  console.log('🎨 运行 Vite 构建...')
  execSync('npx vite build', { stdio: 'inherit' })

  console.log('✅ 构建成功！')
  console.log('📂 输出目录: dist/')

  const distPath = path.join(__dirname, '..', 'dist')
  if (fs.existsSync(distPath)) {
    const files = fs.readdirSync(distPath)
    console.log('📄 生成文件:', files)
  }
} catch (error) {
  console.error('❌ 构建失败:', error.message)
  process.exit(1)
}
