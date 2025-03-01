import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Size, SizeType } from '@/types/size'

export type TextAreaProps = {
  label?: string
  name: string
  placeholder?: string
  size?: SizeType
} & FieldProps

export const TextArea = ({
  label,
  field,
  form,
  placeholder,
  size = Size.Medium,
}: TextAreaProps) => {
  const error = form.errors[field.name]
  const errorMessage = typeof error === 'string' ? error : undefined

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      {label && <label htmlFor={field.name}>{label}</label>}

      <div className={clsx(styles.wrap, styles[size])}>
        <textarea
          {...field}
          id={field.name}
          placeholder={placeholder}
          className={clsx(styles.input, { [styles.inputError]: error })}
        >{field.value}</textarea>
      </div>

      {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
    </div>
  )
}
