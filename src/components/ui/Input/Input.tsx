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

  const error = isError || form.errors[field.name]
  const errorMessage = isError ? 'Error text' : (typeof error === 'string' ? error : undefined)

  const handleFocus = () => {
    inputRef.current?.focus()
  }

  const showButton = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    setIsPasswordVisible(prev => !prev)
  }

  const leadingClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (leadingFuction) {
      leadingFuction()
    }
  }

  const trailingClick = (event: { stopPropagation: () => void }) => {
    event.stopPropagation()
    if (trailingFuction) {
      trailingFuction()
    }
  }
 
  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      <div className={clsx(
        styles.outer,
        isHover && styles.hover,
        isFocus && styles.focus,
        disabled && styles.disabled,
      )} onClick={handleFocus}>
        {(leadingFuction && leadingIcon) ? (
          <div className={styles.button} onClick={leadingClick}>
            <IconComponent icon={leadingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        ) : leadingIcon && <IconComponent icon={leadingIcon} size={Size.Medium} className={styles.icon} />}
        {leadingText && <div className={styles.text}>{leadingText}</div>}
        <div className={styles.inner}>
          <input
            {...field}
            ref={inputRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={field.name}
            className={styles.input}
            placeholder=""
            required
            disabled={disabled}
          />
          <span>{placeholder}</span>
        </div>
        {type === 'password' && (
          <button type="button" onClick={showButton} className={styles.button}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}
        {(trailingFuction && trailingIcon) ? (
          <div className={styles.button} onClick={trailingClick}>
            <IconComponent icon={trailingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        ) : trailingIcon && <IconComponent icon={trailingIcon} size={Size.Medium} className={styles.icon} />}
      </div>
      <div className={styles.helper}>{errorMessage ? errorMessage : helper && 'Optional helper text'}</div>
    </div>
  )
}
