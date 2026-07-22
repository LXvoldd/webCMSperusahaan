export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

export const validatePhone = (phone) => {
  const re = /^\+?[\d\s-]{8,15}$/
  return re.test(phone)
}

export const validateRequired = (value) => {
  return value && value.toString().trim().length > 0
}

export const validateMinLength = (value, min) => {
  return value && value.length >= min
}

export const validateMaxLength = (value, max) => {
  return value && value.length <= max
}

export const validateForm = (values, rules) => {
  const errors = {}

  Object.keys(rules).forEach(field => {
    const fieldRules = rules[field]
    const value = values[field]

    if (fieldRules.required && !validateRequired(value)) {
      errors[field] = fieldRules.requiredMessage || `${field} wajib diisi`
    }

    if (fieldRules.email && !validateEmail(value)) {
      errors[field] = fieldRules.emailMessage || 'Format email tidak valid'
    }

    if (fieldRules.phone && !validatePhone(value)) {
      errors[field] = fieldRules.phoneMessage || 'Format nomor telepon tidak valid'
    }

    if (fieldRules.minLength && !validateMinLength(value, fieldRules.minLength)) {
      errors[field] = fieldRules.minLengthMessage || `Minimal ${fieldRules.minLength} karakter`
    }

    if (fieldRules.maxLength && !validateMaxLength(value, fieldRules.maxLength)) {
      errors[field] = fieldRules.maxLengthMessage || `Maksimal ${fieldRules.maxLength} karakter`
    }
  })

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}