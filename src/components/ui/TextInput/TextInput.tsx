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
  placeholder?: string
  size?: SizeType
  leadingIcon?: AvailableIcons | null
  trailingIcon?: AvailableIcons | null
} & FieldProps

export const TextInput = ({
  label,
  type = 'text',
  field,
  form,
  placeholder,
  size = Size.Medium,
  leadingIcon,
  trailingIcon,
}: TextInputProps) => {
  const error = form.errors[field.name]
  const errorMessage = typeof error === 'string' ? error : undefined

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      {label && <label htmlFor={field.name}>{label}</label>}

      <div className={clsx(styles.wrap, styles[size])}>
        {leadingIcon && <IconComponent icon={leadingIcon} size={size} className={styles.icon} />}
        <input
          {...field}
          type={type}
          id={field.name}
          placeholder={placeholder}
          className={clsx(styles.input, { [styles.inputError]: error })}
        />
        {trailingIcon && <IconComponent icon={trailingIcon} size={size} className={styles.icon} />}
      </div>

      {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
    </div>
  )
}
