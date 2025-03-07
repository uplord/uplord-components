import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'

import * as icons from 'lucide-react'

import styles from './style.module.scss'

import { Input as InputComponent, InputProps } from '@/components/ui/Input'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const leadingFunction = () => {
  alert('leadingFunction') 
}

const trailingFunction = () => {
  alert('trailingFunction') 
}

const meta: Meta<InputProps> = {
  title: 'UI/Input',
  component: InputComponent,
  args: {
    type: 'text',
    placeholder: 'Label',
    helper: 'Optional helper text',
    leadingIcon: '',
    leadingText: '',
    trailingIcon: '',
    isLoading: false,
    isGhost: false,
    isDisabled: false,
    isError: false,
  },
  argTypes: {
    leadingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons)[],
    },
    leadingFunction: {
      table: {
        disable: true,
      },
    },
    trailingIcon: {
      control: {
        type: 'select',
      },
      options: [null, ...Object.keys(icons)] as (AvailableIcons)[],
    },
    trailingFunction: {
      table: {
        disable: true,
      },
    },
    trailingButton: {
      table: {
        disable: true,
      },
    },
    className: {
      table: {
        disable: true,
      },
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
              filled: 'Filled'
            }}
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

export const Input: Story = {
  render: (args: InputProps) => (
    <Field
      {...args}
      component={InputComponent}
      name="input"
    />
  )
}

export const State: Story = {
  args: {
    helper: 'Optional helper text',
  },
  parameters: {
    controls: {
      disable: true
    },
  },
  render: (args: InputProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={InputComponent}
        name="defualt"
        placeholder="Default"
      />
      <Field
        {...args}
        component={InputComponent}
        name="hover"
        placeholder="Default"
        className="hover"
      />
      <Field
        {...args}
        component={InputComponent}
        name="focus"
        placeholder="Default"
        className="pseudo-focus-within"
      />
      <Field
        {...args}
        component={InputComponent}
        name="filled"
        placeholder="Default"
      />
      <Field
        {...args}
        component={InputComponent}
        name="loading"
        placeholder="Loading"
        helper="Loading"
        isLoading
      />
      <Field
        {...args}
        component={InputComponent}
        name="ghost"
        placeholder="Ghost"
        helper="Ghost"
        isGhost
      />
      <Field
        {...args}
        component={InputComponent}
        name="disabled"
        placeholder="Disabled"
        isDisabled
      />
      <Field
        {...args}
        component={InputComponent}
        name="error"
        placeholder="Error"
        isError
      />
      <Field
        {...args}
        component={InputComponent}
        name="error-focus"
        placeholder="Error Focus"
        className="pseudo-focus-within"
        isError
      />
      <Field
        {...args}
        component={InputComponent}
        name="leading-icon"
        placeholder="Leading Icon"
        leadingIcon="Search"
      />
      <Field
        {...args}
        component={InputComponent}
        name="leading-icon-func"
        placeholder="Leading Icon/Function"
        leadingIcon="Search"
        leadingFunction={leadingFunction}
      />
      <Field
        {...args}
        component={InputComponent}
        name="leading-text"
        placeholder="Leading Text"
        leadingText="£"
      />
      <Field
        {...args}
        component={InputComponent}
        name="trailing-icon"
        placeholder="Trailing Icon"
        trailingIcon="Home"
      />
      <Field
        {...args}
        component={InputComponent}
        name="trailing-function"
        placeholder="Trailing Icon/Function"
        trailingIcon="Home"
        trailingFunction={trailingFunction}
      />
      <Field
        {...args}
        component={InputComponent}
        name="password"
        type="password"
        placeholder="Password"
      />

      <Field
        {...args}
        component={InputComponent}
        name="trailing-button"
        placeholder="Trailing Button"
        trailingFunction={trailingFunction}
        trailingButton={{
          label: 'Button'
        }}
      />

      <Field
        {...args}
        component={InputComponent}
        name="trailing-button-icon"
        placeholder="Trailing Button Icon"
        trailingButton={{
          variant: Variant.Success,
          leadingIcon: 'Home',
          onClick: () => trailingFunction(),
        }}
      />
    </div>
  )
}
