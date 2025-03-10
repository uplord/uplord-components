import React, { useRef, useState } from 'react'
import { FieldProps } from 'formik'
import * as icons from 'lucide-react'
import clsx from 'clsx'
import styles from './style.module.scss'
import { Icon } from '@/components/utils/Icon'
import { Button } from '../Button'
import { ButtonProps, Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

export type InputProps = {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder: string
  helper?: string
  leadingIcon?: AvailableIcons | ''
  leadingFunction?: () => void
  leadingText?: string
  trailingIcon?: AvailableIcons | ''
  trailingButton?: ButtonProps
  trailingFunction?: () => void
  className?: string
  isLoading?: boolean
  isGhost?: boolean
  isDisabled?: boolean
  isError?: boolean
} & FieldProps

export const Input = ({
  field,
  form,
  type = 'text',
  placeholder = '',
  helper = '',
  leadingIcon = '',
  leadingFunction,
  leadingText = '',
  trailingIcon = '',
  trailingButton,
  trailingFunction,
  className = '',
  isLoading = false,
  isGhost = false,
  isDisabled = false,
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

  const handleFocus = () => inputRef.current?.focus()

  const togglePasswordVisibility = (event: React.MouseEvent) => {
    event.stopPropagation()
    setIsPasswordVisible(prev => !prev)
  }

  const clearField = () => {
    form.setFieldValue(field.name, '')
    form.setFieldTouched(field.name, false)
    form.setFieldError(field.name, undefined)
  }

  const handleLeadingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    leadingFunction?.()
  }

  const handleTrailingClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    if (trailingIcon === 'X') clearField()
    trailingFunction?.()
  }

  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    trailingButton?.onClick?.(event)
  }
 
  return (
    <div className={clsx(styles.field, { [styles.error]: hasError }, !placeholder && styles['no-label'])}>
      <div className={clsx(
          styles.outer,
          className,
          isLoading && styles['is-loading'],
          isGhost && styles['is-ghost'],
          (isLoading || isGhost || isDisabled) && styles['is-disabled'],
        )}
        onClick={handleFocus}
      >
        {(isLoading && !isGhost) && (
          <Icon icon="LoaderCircle" size={Size.Medium} strokeWidth={3} className={styles.loading} />
        )}

        {leadingIcon && (
          <div className={leadingFunction ? styles.function : styles['icon-wrap']} onClick={handleLeadingClick}>
            <Icon icon={leadingIcon} size={Size.Medium} className={styles.icon} />
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
            disabled={isLoading || isGhost || isDisabled}
          />
          <span className={styles.placeholder}>{placeholder}</span>
        </div>

        {type === 'password' && (
          <button type="button" onClick={togglePasswordVisibility} className={styles.button}>
            {isPasswordVisible ? 'Hide' : 'Show'}
          </button>
        )}

        {trailingButton && (
          <Button
            label={trailingButton.label}
            leadingIcon={trailingButton.leadingIcon}
            trailingIcon={trailingButton.trailingIcon}
            size={Size.Small}
            variant={trailingButton.variant || Variant.Primary}
            className={styles.button}
            onClick={handleButtonClick}
          />
        )}

        {trailingIcon && (
          <div className={trailingFunction ? styles.function : styles['icon-wrap']} onClick={handleTrailingClick}>
            <Icon icon={trailingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}
      </div>
      {(errorMessage || helper) && (
        <div className={styles.helper}>
          {errorMessage ?? helper}
        </div>
      )}
    </div>
  )
}
