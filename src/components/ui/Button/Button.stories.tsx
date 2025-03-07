import type { Meta, StoryObj } from '@storybook/react'
import * as icons from 'lucide-react'
import { Button } from './Button'
import { ButtonGroup } from './ButtonGroup'
import { ButtonProps, Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: '',
    href: '',
    target: '',
    size: Size.Medium,
    variant: Variant.Default,
    leadingIcon: undefined,
    trailingIcon: undefined,
    isLoading: false,
    isGhost: false,
    isDisabled: false,
  },
  argTypes: {
    target: {
      control: {
        type: 'select',
      },
      options: [null, '_blank']
    },
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
    onClick: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta
type Story = StoryObj<ButtonProps>

export const Single: Story = {
  args: {
    label: 'Default',
  },
  render: (args: ButtonProps) => (
    <Button {...args} />
  )
}

const Content = (args: ButtonProps) => (
  <ButtonGroup>
    <ButtonGroup>
      <Button
        {...args}
        label="Default"
      />
      <Button
        {...args}
        label="Hover"
        className="hover"
      />
      <Button
        {...args}
        label="Focus"
        className="pseudo-focus-visible"
      />
      <Button
        {...args}
        label="Active"
        className="active hover"
      />
      <Button
        {...args}
        label="Loading"
        isLoading
      />
      <Button
        {...args}
        label="Ghost"
        isGhost
      />
      <Button
        {...args}
        label="Disabled"
        isDisabled
      />
    </ButtonGroup>
    <ButtonGroup>
      <Button
        {...args}
        leadingIcon="Home"
      />
      <Button
        {...args}
        leadingIcon="Home"
        className="hover"
      />
      <Button
        {...args}
        leadingIcon="Home"
        className="pseudo-focus-visible"
      />
      <Button
        {...args}
        leadingIcon="Home"
        className="active hover"
      />
      <Button
        {...args}
        leadingIcon="Home"
        isLoading
      />
      <Button
        {...args}
        leadingIcon="Home"
        isGhost
      />
      <Button
        {...args}
        leadingIcon="Home"
        isDisabled
      />
    </ButtonGroup>
  </ButtonGroup>
)

export const Types: Story = {
  args: {
    variant: Variant.Default,
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    href: {
      table: {
        disable: true,
      },
    },
    target: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <ButtonGroup>
      <Button
        {...args}
        label="Button"
      />
      <Button
        {...args}
        label="Internal Link"
        href="/"
      />
      <Button
        {...args}
        label="External Link"
        href="https://www.themichael.co.uk/"
        target="_blank"
      />
    </ButtonGroup>
  )
}

export const Variants: Story = {
  args: {
    variant: Variant.Default,
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    variant: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <ButtonGroup>
      <Button
        {...args}
        label="Default"
      />
      <Button
        {...args}
        label="Text"
        variant={Variant.Text}
      />
      <Button
        {...args}
        label="Outline"
        variant={Variant.Outline}
      />
      <Button
        {...args}
        label="Primary"
        variant={Variant.Primary}
      />
      <Button
        {...args}
        label="Success"
        variant={Variant.Success}
      />
      <Button
        {...args}
        label="Error"
        variant={Variant.Error}
      />
      <Button
        {...args}
        label="Warning"
        variant={Variant.Warning}
      />
      <Button
        {...args}
        label="Info"
        variant={Variant.Info}
      />
    </ButtonGroup>
  )
}

export const Sizes: Story = {
  args: {
    variant: Variant.Default,
  },
  argTypes: {
    label: {
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args: ButtonProps) => (
    <ButtonGroup>
      <Button
        {...args}
        label="Small"
        size={Size.Small}
      />
      <Button
        {...args}
        label="Medium"
        size={Size.Medium}
      />
      <Button
        {...args}
        label="Large"
        size={Size.Large}
      />
      {/* <Button
        {...args}
        label="Extra Large"
        size={Size.ExtraLarge}
      /> */}
    </ButtonGroup>
  )
}

export const Default: Story = {
  args: {
    variant: Variant.Default,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}


export const Text: Story = {
  args: {
    variant: Variant.Text,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Outline: Story = {
  args: {
    variant: Variant.Outline,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Primary: Story = {
  args: {
    variant: Variant.Primary,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Success: Story = {
  args: {
    variant: Variant.Success,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Error: Story = {
  args: {
    variant: Variant.Error,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Warning: Story = {
  args: {
    variant: Variant.Warning,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}

export const Info: Story = {
  args: {
    variant: Variant.Info,
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: ButtonProps) => (
    <Content {...args} />
  )
}
