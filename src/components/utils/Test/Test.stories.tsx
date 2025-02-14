import type { Meta, StoryObj } from '@storybook/react'
import { Test as TestComponent, TestProps } from '@/components/utils/Test'

const meta: Meta<TestProps> = {
  title: 'Utils',
  component: TestComponent,
  args: {},
}

export default meta

type Story = StoryObj<TestProps>

export const Test: Story = {
  render: (args: TestProps) => <TestComponent {...args} />
}
