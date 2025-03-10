import React, { useRef, useState } from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'
import * as icons from 'lucide-react'
import styles from './style.module.scss'

import { Button } from '../Button'
import { Icon } from '@/components/utils/Icon'
import { ButtonProps, Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

export type TextInputProps = {
  type: 'text' | 'email' | 'password' | 'number'
  placeholder?: string
  leadingIcon?: AvailableIcons | null
  leadingFunction?: () => void
  leadingText?: string
  trailingIcon?: AvailableIcons | null
  trailingFunction?: () => void
  trailingText?: string
  button?: Omit<ButtonProps, 'size'> & { size?: Size.Small }
  helper?: string
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  isGhost?: boolean
  isError?: boolean
} & FieldProps

export const TextInput = ({
  field,
  form,
  type = 'text',
  placeholder = '',
  leadingIcon,
  leadingFunction,
  leadingText = '',
  trailingIcon,
  trailingFunction,
  trailingText = '',
  button,
  helper = '',
  className = '',
  isDisabled = false,
  isLoading = false,
  isGhost = false,
  isError = false,
}: TextInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
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
    button?.onClick?.(event)
  }

  return (
    <div className={clsx(styles.field, !placeholder && styles['no-label'])}>
      <div className={clsx(
          styles.outer,
          className,
          (isDisabled || isLoading || isGhost) && styles['is-disabled'],
          (isLoading && !isGhost) && styles['is-loading'],
          isGhost && styles['is-ghost'],
          isError && styles['is-error'],
        )}
        onClick={handleFocus}
      >
        {(isLoading && !isGhost) && (
          <Icon icon="LoaderCircle" size={Size.Medium} strokeWidth={3} className={styles.loading} />
        )}

        {leadingIcon && (
          <div onClick={leadingFunction && handleLeadingClick} className={leadingFunction && styles.click}>
            <Icon icon={leadingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {leadingText && <div className={styles.text}>{leadingText}</div>}

        <div className={clsx(styles.inner)}>
          <input
            {...field}
            ref={inputRef}
            type={type === 'password' && isPasswordVisible ? 'text' : type}
            id={field.name}
            value={field.value ?? ''}
            className={styles.input}
            placeholder=" "
            required
            disabled={isDisabled || isLoading || isGhost}
          />

          <span className={styles.placeholder}>{placeholder}</span>
        </div>

        {trailingText && <div className={styles.text}>{trailingText}</div>}

        {type === 'password' && (
          <div onClick={togglePasswordVisibility} className={styles.click}>
            <Icon icon={!isPasswordVisible ? 'Eye' : 'EyeOff'} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {trailingIcon && !(trailingIcon === 'X' && (!field.value || isDisabled)) && (
          <div onClick={trailingFunction || trailingIcon === 'X' ? handleTrailingClick : undefined}
            className={trailingFunction || trailingIcon === 'X' ? styles.click : ''}
          >
            <Icon icon={trailingIcon} size={Size.Medium} className={styles.icon} />
          </div>
        )}

        {button && (
          <Button
            {...button}
            size={Size.Small}
            variant={button.variant || Variant.Primary}
            className={styles.button}
            onClick={handleButtonClick}
          />
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
