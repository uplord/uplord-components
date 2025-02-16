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
  args: {
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
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
    />
  )
}

export const Hover: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      isHover={true}
    />
  )
}

export const Focus: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      isFocus={true}
    />
  )
}

export const Disabled: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      disabled={true}
    />
  )
}

export const Filled: Story = {
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
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
    />
  )
}


export const Error: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      isError={true}
    />
  )
}

export const ErrorFocus: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      isFocus={true}
      isError={true}
    />
  )
}

export const LeadingText: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      leadingText="£"
    />
  )
}

export const LeadingIcon: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      leadingIcon="X"
      leadingFuction={leadingFuction}
    />
  )
}

export const TrailingIcon: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      placeholder="Label"
      helper="Optional helper text"
      trailingIcon="Home"
      trailingFuction={trailingFuction}
    />
  )
}

export const Password: Story = {
  render: () => (
    <Field
      component={InputComponent}
      name="input"
      type="password"
      placeholder="Label"
      helper="Optional helper text"
    />
  )
}

export const NoLabel: Story = {
  render: () => (
    <Field
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
  render: () => (
    <div className={styles.fields}>
      <Field
        component={InputComponent}
        placeholder="Full Name"
        name="fullName"
      />
      <Field
        component={InputComponent}
        placeholder="Email Address"
        name="email"
        type="email"
      />
      <Field
        component={InputComponent}
        placeholder="Password"
        name="password"
        type="password"
      />
    </div>
  )
}