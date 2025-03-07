'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import styles from './style.module.scss'
import clsx from 'clsx'
import { Icon } from '@/components/utils/Icon'
import { ButtonProps } from '@/types/button'

export function Button({
  label,
  href,
  target,
  size,
  variant,
  className = '',
  leadingIcon,
  trailingIcon,
  isLoading = false,
  isGhost = false,
  isDisabled = false,
  ...restProps
}: ButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const handleMouseUpGlobal = () => buttonRef.current?.blur()
    document.addEventListener('mouseup', handleMouseUpGlobal)
    return () => document.removeEventListener('mouseup', handleMouseUpGlobal)
  }, [])

  const content = (
    <>
      {isLoading && !isGhost && <Icon icon="LoaderCircle" size={size} strokeWidth={3} className={styles.loading} />}
      <span className={styles.content}>
        {leadingIcon && <Icon icon={leadingIcon} size={size} />}
        {label}
        {trailingIcon && <Icon icon={trailingIcon} size={size} />}
      </span>
    </>
  )

  const classes = clsx(
    styles.button,
    styles[variant],
    styles[size],
    (leadingIcon || trailingIcon) && !label && styles.icon,
    isLoading && styles['is-loading'],
    isGhost && styles['is-ghost'],
    className
  )

  if (href) {
    return target === '_blank' ? (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={e => {
        if (restProps.onClick) {
          restProps.onClick(e)
        }
      }}
      disabled={isDisabled || isLoading || isGhost}
      className={classes}
    >
      {content}
    </button>
  )
}
