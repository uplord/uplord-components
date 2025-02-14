import { ReactNode } from 'react'
import styles from './style.module.scss'

export interface ButtonGroupProps {
  children: ReactNode
  className?: string
}
export function ButtonGroup({ children, className = '' }: ButtonGroupProps) {
  return <div className={`${styles.group} ${className || ''}`}>{children}</div>
}
