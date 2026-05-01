/**
 * 部署脚本
 */

const { execSync } = require('child_process')

console.log('🚀 开始部署...')

try {
  console.log('✅ 构建生产版本...')
  execSync('npm run build', { stdio: 'inherit' })

  console.log('🚀 部署到服务器...')
  console.log('⚠️  请配置您的部署目标')
  console.log('例如:')
  console.log('  - GitHub Pages')
  console.log('  - Vercel')
  console.log('  - Netlify')
  console.log('  - 自定义服务器')
} catch (error) {
  console.error('❌ 部署失败:', error.message)
  process.exit(1)
}
