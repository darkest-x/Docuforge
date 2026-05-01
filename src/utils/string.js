/**
 * 字符串处理工具
 */

export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export function titleCase(str) {
  return str.split(' ').map(word => capitalize(word)).join(' ')
}

export function camelCase(str) {
  return str
    .replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
    .replace(/^(.)/, c => c.toLowerCase())
}

export function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+)/g)
    ?.map(x => x.toLowerCase())
    .join('-') || str
}

export function snakeCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+)/g)
    ?.map(x => x.toLowerCase())
    .join('_') || str
}

export function truncate(str, length, suffix = '...') {
  if (str.length <= length) return str
  return str.substring(0, length - suffix.length) + suffix
}

export function stripHtml(html) {
  return html.replace(/<[^>]*>/g, '')
}

export function escapeHtml(str) {
  const div = document.createElement('div')
  div.textContent = str
  return div.innerHTML
}

export function unescapeHtml(str) {
  const div = document.createElement('div')
  div.innerHTML = str
  return div.textContent
}

export function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

export function truncateWords(str, count, suffix = '...') {
  const words = str.split(' ')
  if (words.length <= count) return str
  return words.slice(0, count).join(' ') + suffix
}

export function countWords(str) {
  return str.trim().split(/\s+/).length
}

export function extractUrls(str) {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  return str.match(urlRegex) || []
}

export function extractEmails(str) {
  const emailRegex = /[\w.-]+@[\w.-]+\.\w+/g
  return str.match(emailRegex) || []
}

export function maskEmail(email) {
  const [name, domain] = email.split('@')
  if (!domain) {
    return name.charAt(0) + '***@' + domain
  }
  return email
}

export function maskPhone(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
}

export function padStart(str, length, char = '0') {
  return str.toString().padStart(length, char)
}

export function padEnd(str, length, char = '0') {
  return str.toString().padEnd(length, char)
}

export function reverse(str) {
  return str.split('').reverse().join('')
}
