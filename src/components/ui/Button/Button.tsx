'use client'

import { useRef, useEffect } from 'react'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Icon } from '@/components/utils/Icon'
import { ButtonProps } from '@/types/button'

export function Button({
  label,
  size,
  variant,
  className = '',
  disabled,
  leadingIcon,
  trailingIcon,
  isLoading = false,
  onClick,
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleClick()
      buttonRef.current?.blur()
    }
  }

  const handleMouseUpGlobal = () => {
    if (buttonRef.current) {
      buttonRef.current.blur()
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleMouseUpGlobal)
    return () => {
      document.removeEventListener('mouseup', handleMouseUpGlobal)
    }
  }, [])

  return (
    <button
      ref={buttonRef}
      type="button"
      onKeyDown={handleKeyDown}
      onClick={handleClick}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        (leadingIcon || trailingIcon) && !label && styles.icon,
        isLoading && styles['is-loading'],
        className
      )}
      disabled={disabled || isLoading}
    >
      {isLoading && (
        <Icon icon="LoaderCircle" size={size} className={styles.loading} />
      )}
      <span className={styles.content}>
        {leadingIcon && <Icon icon={leadingIcon} size={size} />}
        {label}
        {trailingIcon && <Icon icon={trailingIcon} size={size} />}
      </span>
    </button>
  )
}
