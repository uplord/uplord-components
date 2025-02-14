import type { Meta, StoryObj } from '@storybook/react'
import { TextArea as TextAreaComponent, TextAreaProps } from '@/components/ui/TextArea'
import { Size } from '@/types/size'

const meta: Meta<TextAreaProps> = {
  title: 'UI',
  component: TextAreaComponent,
  args: {
    label: 'Textarea',
    name: 'text-area',
    id: 'text-area',
    placeholder: 'Placeholder',
    size: Size.Medium,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
  }
}

export default meta

type Story = StoryObj<TextAreaProps>

export const TextArea: Story = {
  render: (args: TextAreaProps) => (
    <div className="padding">
      <TextAreaComponent {...args} />
    </div>
  )
}
