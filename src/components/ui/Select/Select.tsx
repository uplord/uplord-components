import clsx from 'clsx'

import styles from '../TextInput/style.module.scss'
import { Icon as IconComponent } from '@/components/utils/Icon'
import { Size, SizeType } from '@/types/size'

export type SelectProps = {
  label?: string
  name: string
  id: string
  value: string
  size: SizeType
}

export const Select = ({
  label,
  name,
  id,
  value,
  size = Size.Medium,
}: SelectProps) => {
  return (
    <div className={styles.field}>
      {label && (
        <label htmlFor={id}>{label}</label>
      )}
      <div className={clsx(
        styles.wrap,
        styles[size]
      )}>
        {value}
        <select name={name} id={id} className={styles.input}>
          <option value="">Select option</option>
        </select>
        <IconComponent icon={'ChevronDown'} size={size} className={styles.icon} />
      </div>
    </div>
  )
}
