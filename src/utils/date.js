/**
 * 日期处理工具
 */

export function formatDate(date, format = 'YYYY-MM-DD') {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return format
    .replace('YYYY', year)
    .replace('MM', month)
    .replace('DD', day)
    .replace('HH', hours)
    .replace('mm', minutes)
    .replace('ss', seconds)
}

export function relativeTime(date) {
  const now = new Date()
  const diff = now - new Date(date)
  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days}天前`
  if (hours > 0) return `${hours}小时前`
  if (minutes > 0) return `${minutes}分钟前`
  return '刚刚'
}

export function isToday(date) {
  const today = new Date()
  const d = new Date(date)
  return d.toDateString() === today.toDateString()
}

export function isSameDay(date1, date2) {
  const d1 = new Date(date1)
  const d2 = new Date(date2)
  return d1.toDateString() === d2.toDateString()
}

export function startOfDay(date) {
  const d = new Date(date)
  d.setHours(0, 0, 0, 0)
  return d
}

export function endOfDay(date) {
  const d = new Date(date)
  d.setHours(23, 59, 59, 999)
  return d
}

export function addDays(date, days) {
  const d = new Date(date)
  d.setDate(d.getDate() + days)
  return d
}

export function startOfWeek(date, weekStartsOn = 1) {
  const d = new Date(date)
  const day = d.getDay()
  const diff = (day < weekStartsOn ? day + 7 - weekStartsOn : day - weekStartsOn
  d.setDate(d.getDate() - diff)
  return startOfDay(d)
}

export function endOfWeek(date, weekStartsOn = 1) {
  const d = startOfWeek(date, weekStartsOn)
  d.setDate(d.getDate() + 6)
  return endOfDay(d)
}

export function startOfMonth(date) {
  const d = new Date(date)
  d.setDate(1)
  return startOfDay(d)
}

export function endOfMonth(date) {
  const d = new Date(date)
  d.setMonth(d.getMonth() + 1, 0)
  return endOfDay(d)
}

const WEEKDAYS = ['日', '一', '二', '三', '四', '五', '六']
const MONTHS = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']

export function getWeekday(date) {
  return WEEKDAYS[new Date(date).getDay()]
}

export function getMonth(date) {
  return MONTHS[new Date(date).getMonth()]
}
