import React, { useRef, useState } from 'react'
import { FieldProps } from 'formik'
import * as icons from 'lucide-react'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Icon as IconComponent } from '@/components/utils/Icon'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

export type InputProps = {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder: string
  leadingIcon?: AvailableIcons | ''
  leadingFuction?: () => void
  leadingText?: string
  trailingIcon?: AvailableIcons | ''
  trailingFuction?: () => void
  helper?: string
  isHover: boolean
  isFocus: boolean
  disabled: boolean
  isError: boolean
} & FieldProps

export const Input = ({
  field,
  form,
  type = 'text',
  placeholder = '',
  leadingIcon = '',
  leadingFuction,
  leadingText = '',
  trailingIcon = '',
  trailingFuction,
  helper = '',
  isHover = false,
  isFocus = false,
  disabled = false,
  isError = false,
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const hasError = isError || form.errors[field.name] && form.touched[field.name]
  const errorMessage = hasError
  ? Array.isArray(form.errors[field.name])
    ? (form.errors[field.name] as string[]).join(', ')
    : (form.errors[field.name] as string)
  : undefined

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const visibleClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    setIsPasswordVisible(prev => !prev)
  }

  const clearField = () => {
    form.setFieldValue(field.name, '')
    form.setFieldTouched(field.name, false)
    form.setFieldError(field.name, undefined)
  }

  const leadingClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (leadingIcon === 'X') clearField()
    leadingFuction?.()
  }

  const trailingClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (trailingIcon === 'X') clearField()
    trailingFuction?.()
  }
 
  return (
    <div className={clsx(
      styles.field,
      { [styles.error]: hasError },
      !placeholder && styles['no-label']
    )}>
      <div className={clsx(
        styles.outer,
        isHover && styles.hover,
        isFocus && styles.focus,
        disabled && styles.disabled,
      )} onClick={handleFocus}>
        {leadingIcon && (
          <div className={styles.button} onClick={leadingClick}>
            <IconComponent icon={leadingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}
        {leadingText && <div className={styles.text}>{leadingText}</div>}
        <div className={styles.inner}>
          <input
            {...field}
            ref={inputRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={field.name}
            className={styles.input}
            placeholder=" "
            required
            disabled={disabled}
          />
          <span>{placeholder}</span>
        </div>
        {type === 'password' && (
          <button type="button" onClick={visibleClick} className={styles.button}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}
        {trailingIcon && (
          <div className={styles.button} onClick={trailingClick}>
            <IconComponent icon={trailingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}
      </div>
      {(errorMessage || helper) && (
        <div className={styles.helper}>{errorMessage ?? helper}</div>
      )}
    </div>
  )
}
