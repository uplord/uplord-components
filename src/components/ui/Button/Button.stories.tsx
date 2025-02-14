import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { Button as ButtonComponent } from '@/components/ui/Button'
import { ButtonProps, Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<typeof ButtonComponent> = {
  title: 'UI/Button',
  component: ButtonComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    size: Size.Medium,
    isLoading: false,
    disabled: false,
  },
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: Object.values(Size),
    },
    variant: {
      control: {
        type: 'select',
      },
      options: Object.values(Variant),
    },
    className: {
      table: {
        disable: true,
      },
    },
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons | null)[],
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons | null)[],
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Button: Story = {
  args: {
    label: 'Default Button',
    variant: Variant.Default,
  }
}

export const Text: Story = {
  args: {
    label: 'Text Button',
    variant: Variant.Text,
  }
}

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: Variant.Primary,
  }
}

export const Success: Story = {
  args: {
    label: 'Success Button',
    variant: Variant.Success,
  }
}

export const Icon: Story = {
  args: {
    leadingIcon: 'Home',
    variant: Variant.Default,
  }
}

export const LeadingIcon: Story = {
  args: {
    label: 'Leading Icon',
    leadingIcon: 'Home',
    variant: Variant.Default,
  }
}

export const TrailingIcon: Story = {
  args: {
    label: 'Trailing Icon',
    trailingIcon: 'Home',
    variant: Variant.Default,
  }
}

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    variant: Variant.Default,
    disabled: true,
  }
}


export const Loading: Story = {
  args: {
    label: 'Loading Button',
    variant: Variant.Default,
    isLoading: true,
  }
}
