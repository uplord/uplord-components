import React from 'react'
import { FieldProps } from 'formik'
import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Size, SizeType } from '@/types/size'

export type RadioProps = {
  label: string
  id: string
  name: string
} & FieldProps

export const Radio = ({
  label,
  id,
  field,
  form,
}: RadioProps) => {
  const error = form.errors[field.name]
  const errorMessage = typeof error === 'string' ? error : undefined

  return (
    <div className={clsx(styles.field, { [styles.error]: error })}>
      <div className={clsx(styles.radio)}>
        <input
          {...field}
          type="radio"
          id={id}
          className={clsx({ [styles.inputError]: error })}
        />

        <label htmlFor={id}>{label}</label>
      </div>

      {errorMessage && <div className={styles['error-message']}>{errorMessage}</div>}
    </div>
  )
}
