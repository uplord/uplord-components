import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'

import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import * as icons from 'lucide-react'

import styles from './style.module.scss'

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
      if (context.name === 'Filled' || context.name === 'Register') {
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
    placeholder: 'Label',
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Hover: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    isHover: true,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Focus: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    isFocus: true,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Disabled: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    disabled: true,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Filled: Story = {
  args: {
    placeholder: 'Label',
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
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Error: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    isError: true,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const ErrorFocus: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    isFocus: true,
    isError: true,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const LeadingText: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    leadingText: '£',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const LeadingIcon: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    leadingIcon: 'X',
    leadingFuction: leadingFuction,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const TrailingIcon: Story = {
  args: {
    placeholder: 'Label',
    helper: 'Optional helper text',
    trailingIcon: 'Home',
    trailingFuction: trailingFuction,
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Label',
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const NoLabel: Story = {
  args: {
    helper: 'Optional helper text',
  },
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
      helper="Optional helper text"
    />
  )
}

export const Register: Story = {
  decorators: [
    (Story) => {
      return (
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            password: '',
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
  render: (args: InputProps) => {

    return (
      <div className={styles.fields}>
        <Field
          {...args}
          component={InputComponent}
          placeholder="Full Name"
          name="fullName"
          trailingIcon={'User'}
        />
        <Field
          {...args}
          component={InputComponent}
          placeholder="Email Address"
          name="email"
          type="email"
          trailingIcon={'Mail'}
        />
        <Field
          {...args}
          component={InputComponent}
          placeholder="Password"
          name="password"
          type="password"
        />
      </div>
    )
  }
}