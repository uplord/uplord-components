import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Size, SizeType } from '@/types/size'

export type CheckboxProps = {
  label: string
  name: string
} & FieldProps

export const Checkbox = ({
  label,
  field,
  form,
}: CheckboxProps) => {
  const error = form.errors[field.name]
  const errorMessage = typeof error === 'string' ? error : undefined

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      <div className={clsx(styles.checkbox)}>
        <input
          {...field}
          type="checkbox"
          id={field.name}
          className={clsx({ [styles.inputError]: error })}
        />

        <label htmlFor={field.name}>{label}</label>
      </div>

      {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
    </div>
  )
}
