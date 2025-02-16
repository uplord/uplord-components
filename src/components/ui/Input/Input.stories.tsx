import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'

import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import * as icons from 'lucide-react'

import { Input as InputComponent, InputProps } from '@/components/ui/Input'

type AvailableIcons = keyof typeof icons

const schema = z.object({
  input: z.string().min(2, 'Must be at least 2 characters').max(50, 'Must be at most 50 characters').default(''),
})

const leadingFuction = () => {
  console.log('leadingFuction') 
}

const trailingFuction = () => {
  console.log('trailingFuction') 
}

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: InputComponent,
  args: {
    placeholder: 'Label',
  },
  argTypes: {
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
  },
  decorators: [
    (Story, context) => {
      if (context.name === 'Filled') {
        return (
          <div className="padding">
            <Story />
          </div>
        )
      }

      return (
        <div className="padding">
          <Formik
            initialValues={{
              input: '',
            }}
            validationSchema={toFormikValidationSchema(schema)}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500));
              alert(JSON.stringify(values, null, 2));
            }}
          >
            {() => (
              <Form>
                <Story />
              </Form>
            )}
          </Formik>
        </div>
      )
    },
  ],
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<InputProps>

export const Default: Story = {
  args: {
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const Hover: Story = {
  args: {
    helper: 'Optional helper text',
    isHover: true,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const Focus: Story = {
  args: {
    helper: 'Optional helper text',
    isFocus: true,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const Disabled: Story = {
  args: {
    helper: 'Optional helper text',
    disabled: true,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const Filled: Story = {
  args: {
    helper: 'Optional helper text',
  },
  decorators: [
    (Story) => {
      return (
        <Formik
          initialValues={{
            input: 'Filled',
          }}
          validationSchema={toFormikValidationSchema(schema)}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {() => (
            <Form>
              <Story />
            </Form>
          )}
        </Formik>
      )
    },
  ],
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}


export const Error: Story = {
  args: {
    helper: 'Optional helper text',
    isError: true,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const ErrorFocus: Story = {
  args: {
    helper: 'Optional helper text',
    isFocus: true,
    isError: true,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const LeadingText: Story = {
  args: {
    helper: 'Optional helper text',
    leadingText: '£',
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const LeadingIcon: Story = {
  args: {
    helper: 'Optional helper text',
    leadingIcon: 'X',
    leadingFuction: leadingFuction,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const TrailingIcon: Story = {
  args: {
    helper: 'Optional helper text',
    trailingIcon: 'Home',
    trailingFuction: trailingFuction,
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}

export const Password: Story = {
  args: {
    helper: 'Optional helper text',
    type: 'password',
  },
  render: (args: InputProps) => (
    <Field
      component={InputComponent}
      name="input"
      {...args}
    />
  )
}
