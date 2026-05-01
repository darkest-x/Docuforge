import { describe, it, expect } from 'vitest'
import { formatDate, formatNumber, truncateText } from '@/utils/format'

describe('format utilities', () => {
  describe('formatNumber', () => {
    it('formats numbers correctly', () => {
      expect(formatNumber(1000)).toBe('1,000')
      expect(formatNumber(1000000)).toBe('1,000,000')
    })
  })

  describe('truncateText', () => {
    it('truncates long text', () => {
      const longText = 'This is a very long text that should be truncated'
      expect(truncateText(longText, 20)).toContain('...')
    })

    it('does not truncate short text', () => {
      const shortText = 'Short text'
      expect(truncateText(shortText, 20)).toBe(shortText)
    })
  })
})
