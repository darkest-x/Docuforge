/**
 * 验证器工具
 */

export function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function isValidPhone(phone) {
  const phoneRegex = /^1[3-9]\d{9}$/
  return phoneRegex.test(phone)
}

export function isValidIdCard(idCard) {
  const idCardRegex = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
  return idCardRegex.test(idCard)
}

export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function isStrongPassword(password) {
  return password.length >= 8 &&
    /[a-z]/.test(password) &&
    /[A-Z]/.test(password) &&
    /[0-9]/.test(password)
}

export function isValidUsername(username) {
  return /^[a-zA-Z0-9_]{4,16}$/.test(username)
}

export function isValidChineseName(name) {
  return /^[\u4e00-\u9fa5]{2,10}$/.test(name)
}

export function isValidNumber(value) {
  return !isNaN(parseFloat(value)) && isFinite(value)
}

export function isInteger(value) {
  return Number.isInteger(Number(value))
}

export function isPositiveNumber(value) {
  return isValidNumber(value) && Number(value) > 0
}

export function inRange(value, min, max) {
  const num = Number(value)
  return num >= min && num <= max
}

export function isDate(str) {
  return !isNaN(Date.parse(str))
}

export function isValidHexColor(color) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}$/.test(color)
}

export function isValidIpv4(ip) {
  const ipv4Regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/
  return ipv4Regex.test(ip)
}

export function isValidBase64(str) {
  try {
    btoa(atob(str))
    return true
  } catch {
    return false
  }
}

export function isJson(str) {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}

export function isBase64Image(str) {
  return /^data:image\/(jpeg|jpg|png|gif|bmp|webp);base64,/.test(str)
}
