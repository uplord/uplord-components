import React from 'react'
import * as icons from 'lucide-react'
import { LucideIcon } from 'lucide-react'
import { Size, SizeType } from '@/types/size'
type AvailableIcons = keyof typeof icons

export interface IconProps {
  icon: AvailableIcons
  size: SizeType
  className?: string
}

export function Icon({ icon, size, className = '' }: IconProps) {
  const LucideIcon = icons[icon] as LucideIcon

  let iconSize = 20

  if (size === Size.Small) {
    iconSize = 16
  }

  if (size === Size.Large) {
    iconSize = 24
  }

  return <LucideIcon size={iconSize} className={className} />
}
