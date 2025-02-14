import React from 'react'
import { FieldProps } from 'formik'
import * as icons from 'lucide-react'
import clsx from 'clsx'

import styles from './style.module.scss'
import { Icon as IconComponent } from '@/components/utils/Icon'
import { Size, SizeType } from '@/types/size'

type AvailableIcons = keyof typeof icons

export type TextInputProps = {
  label?: string
  type: 'text' | 'email' | 'password' | 'number'
  name: string
  id: string
  placeholder?: string
  size?: SizeType
  leadingIcon?: AvailableIcons | null
  trailingIcon?: AvailableIcons | null
} & FieldProps // Add Formik field props

export const TextInput = ({
  label,
  type = 'text',
  field, // Formik's field props
  form, // Formik's form state
  placeholder,
  size = Size.Medium,
  leadingIcon,
  trailingIcon,
}: TextInputProps) => {
  const error = form.touched[field.name] && form.errors[field.name]

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      {label && <label htmlFor={field.name}>{label}</label>}

      <div className={clsx(styles.wrap, styles[size])}>
        {leadingIcon && <IconComponent icon={leadingIcon} size={size} className={styles.icon} />}
        <input
          {...field} // Spread Formik field props (name, value, onChange, onBlur)
          type={type}
          id={field.name}
          placeholder={placeholder}
          className={clsx(styles.input, { [styles.inputError]: error })}
        />
        {trailingIcon && <IconComponent icon={trailingIcon} size={size} className={styles.icon} />}
      </div>

      {error && <div className={styles.errorMessage}>{error}</div>}
    </div>
  )
}
