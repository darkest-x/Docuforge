export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

export function isValidPassword(password: string): boolean {
  return password.length >= 8
}

export function isValidUrl(url: string): boolean {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

export function isNotEmpty(value: string): boolean {
  return value.trim().length > 0
}

export function hasMinLength(value: string, min: number): boolean {
  return value.length >= min
}

export function hasMaxLength(value: string, max: number): boolean {
  return value.length <= max
}

export function isInRange(value: number, min: number, max: number): boolean {
  return value >= min && value <= max
}

export function isValidJson(str: string): boolean {
  try {
    JSON.parse(str)
    return true
  } catch {
    return false
  }
}

export function isValidFileName(name: string): boolean {
  const invalidChars = /[<>:"/\\|?*]/
  return !invalidChars.test(name) && name.trim().length > 0
}
