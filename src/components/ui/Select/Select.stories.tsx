import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { Select as SelectComponent, SelectProps } from '@/components/ui/Select'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<SelectProps> = {
  title: 'UI',
  component: SelectComponent,
  args: {
    label: 'Select',
    name: 'select-input',
    id: 'select-input',
    size: Size.Medium,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons)[],
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons)[],
    },
  }
}

export default meta

type Story = StoryObj<SelectProps>

export const Select: Story = {
  render: (args: SelectProps) => (
    <div className="padding">
      <SelectComponent {...args} />
    </div>
  )
}
