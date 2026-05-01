/**
 * 项目设置脚本
 */

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 设置 DocuForge 项目...')

try {
  console.log('📦 安装依赖...')
  execSync('npm install', { stdio: 'inherit' })

  console.log('🔧 创建环境文件...')
  if (!fs.existsSync('.env')) {
    const envContent = `VITE_APP_TITLE=DocuForge
VITE_API_URL=http://localhost:3001/api
`
    fs.writeFileSync('.env', envContent)
    console.log('✅ .env 文件已创建')
  }

  console.log('\n✅ 设置完成！')
  console.log('\n运行以下命令启动开发服务器:')
  console.log('  npm run dev')
  console.log('\n或运行以下命令运行测试:')
  console.log('  npm run test')
} catch (error) {
  console.error('❌ 设置失败:', error.message)
  process.exit(1)
}
