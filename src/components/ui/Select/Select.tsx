import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Icon as IconComponent } from '@/components/utils/Icon'
import { Size, SizeType } from '@/types/size'

export type SelectProps = {
  label?: string
  name: string
  id: string
  value: string
  size: SizeType
  options: { label: string; value: string }[]
} & FieldProps

export const Select = ({
  label,
  field,
  form,
  size = Size.Medium,
  options = []
}: SelectProps) => {
  const error = form.errors[field.name]
  const errorMessage = typeof error === 'string' ? error : undefined

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      {label && (
        <label htmlFor={field.name}>{label}</label>
      )}
      <div className={clsx(
        styles.wrap,
        styles[size]
      )}>
        <select
          name={field.name}
          id={field.name}
          className={clsx(styles.input, { [styles.inputError]: error })}
          onChange={field.onChange}
        >
          <option value="">Select option</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <IconComponent icon={'ChevronDown'} size={size} className={styles.icon} />
      </div>
      {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
    </div>
  )
}
