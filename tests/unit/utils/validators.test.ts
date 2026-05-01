import { describe, it, expect } from 'vitest'
import { isValidEmail, isValidPassword, isValidUrl } from '@/utils/validators'

describe('validators', () => {
  describe('isValidEmail', () => {
    it('returns true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true)
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true)
    })

    it('returns false for invalid emails', () => {
      expect(isValidEmail('invalid')).toBe(false)
      expect(isValidEmail('@example.com')).toBe(false)
    })
  })

  describe('isValidPassword', () => {
    it('returns true for valid passwords', () => {
      expect(isValidPassword('password123')).toBe(true)
    })

    it('returns false for short passwords', () => {
      expect(isValidPassword('12345')).toBe(false)
    })
  })

  describe('isValidUrl', () => {
    it('returns true for valid URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true)
    })

    it('returns false for invalid URLs', () => {
      expect(isValidUrl('not a url')).toBe(false)
    })
  })
})
