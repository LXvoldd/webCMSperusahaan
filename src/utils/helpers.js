export const formatDate = (date, locale = 'id-ID') => {
  if (!date) return ''
  return new Date(date).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const formatCurrency = (amount, locale = 'id-ID', currency = 'IDR') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(amount)
}

export const truncateText = (text, maxLength = 100) => {
  if (!text || text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export const getInitials = (name) => {
  if (!name) return ''
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .substring(0, 2)
}

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const getRandomItem = (array) => {
  return array[Math.floor(Math.random() * array.length)]
}

export const sortByDate = (array, key = 'created_at', order = 'desc') => {
  return [...array].sort((a, b) => {
    const dateA = new Date(a[key])
    const dateB = new Date(b[key])
    return order === 'desc' ? dateB - dateA : dateA - dateB
  })
}