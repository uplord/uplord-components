import React from 'react'
import { SizeType } from '@/types/size'
import * as icons from 'lucide-react'
type AvailableIcons = keyof typeof icons

export enum Variant {
  Text = 'text',
  Default = 'default',
  Outline = 'outline',
  Primary = 'primary',
  Success = 'success',
  Error = 'error',
  Warning = 'warning',
  Info = 'info',
  Black = 'black',
}

export interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  label?: string
  href?: string
  target?: '_blank' | ''
  size: SizeType
  variant: Variant
  className?: string
  leadingIcon?: AvailableIcons
  trailingIcon?: AvailableIcons
  isLoading?: boolean
  isDisabled?: boolean
  isGhost?: boolean
  // onClick?: () => void
}

