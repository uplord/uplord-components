import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Size, SizeType } from '@/types/size'

export type TextAreaProps = {
  label?: string
  name: string
  id: string
  value?: string
  placeholder?: string
  size: SizeType
}

export const TextArea = ({
  label,
  name,
  id,
  value,
  placeholder,
  size = Size.Medium,
}: TextAreaProps) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
      <div className={clsx(
        styles.wrap,
        styles[size]
      )}>
        <textarea name={name} id={id} placeholder={placeholder} className={styles.input}>
          {value}
        </textarea>
      </div>
    </div>
  )
}
