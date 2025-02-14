import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { TextInput as TextInputComponent, TextInputProps } from '@/components/ui/TextInput'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<TextInputProps> = {
  title: 'UI',
  component: TextInputComponent,
  args: {
    label: 'Input',
    name: 'text-input',
    id: 'text-input',
    placeholder: 'Placeholder',
    size: Size.Medium,
    leadingIcon: null,
    trailingIcon: 'ChevronRight'
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

type Story = StoryObj<TextInputProps>

export const TextInput: Story = {
  render: (args: TextInputProps) => (
    <div className="padding">
      <TextInputComponent {...args} />
    </div>
  )
}
