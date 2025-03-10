import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import styles from './style.module.scss'
import { TextInput, TextInputProps } from '@/components/ui/TextInput'
import { Variant } from '@/types/button'
import { Size } from '@/types/size'
import * as icons from 'lucide-react'
type AvailableIcons = keyof typeof icons

const meta: Meta<TextInputProps> = {
  title: 'UI/TextInput',
  component: TextInput,
  args: {
    type:'text',
    placeholder: '',
    leadingIcon: null,
    leadingText: '',
    trailingIcon: null,
    trailingText: '',
    helper: '',
    className: '',
    isDisabled: false,
    isLoading: false,
    isGhost: false,
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
    button: {
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
    (Story) => {
      return (
        <div className="padding">
          <Formik
            initialValues={{
              filled: 'Filled'
            }}
            onSubmit={async (values) => {
              await new Promise((r) => setTimeout(r, 500))
              console.log(JSON.stringify(values, null, 2))
            }}
          >
            {() => (
              <Form autoComplete="off" noValidate>
                <Story />
              </Form>
            )}
          </Formik>
        </div>
      )
    },
  ],
}

export default meta

type Story = StoryObj<TextInputProps>

const handleButtonClick = () => {
  console.log('Button Story')
}

export const Default: Story = {
  args: {
    placeholder: 'Testing',
    leadingIcon: 'Home',
    leadingText: '$',
    trailingIcon: 'X',
    trailingText: 'dollars',
    button: {
      label: 'Button',
      variant: Variant.Black,
      size: Size.Small,
      onClick: () => handleButtonClick()
    },
    helper: 'Optional helper text',
  },
  render: (args: TextInputProps) => (
    <Field
      {...args}
      component={TextInput}
      name="input"
    />
  ),
}

export const State: Story = {
  render: (args: TextInputProps) => (
    <div className={styles.fields}>
      <Field
        {...args}
        component={TextInput}
        name="default"
        placeholder="Default"
        helper="Default"
      />
      <Field
        {...args}
        component={TextInput}
        name="no-label"
        helper="No label"
      />
      <Field
        {...args}
        component={TextInput}
        name="hover"
        placeholder="Hover"
        helper="Hover"
        className="hover"
      />
      <Field
        {...args}
        component={TextInput}
        name="focus"
        placeholder="Focus"
        helper="Focus"
        className="focus-within"
      />
      <Field
        {...args}
        component={TextInput}
        name="filled"
        placeholder="Filled"
        helper="Filled"
      />
      <Field
        {...args}
        component={TextInput}
        name="disabled"
        placeholder="Disabled"
        helper="Disabled"
        isDisabled
      />
      <Field
        {...args}
        component={TextInput}
        name="loading"
        placeholder="Loading"
        helper="Loading"
        isLoading
      />
      <Field
        {...args}
        component={TextInput}
        name="ghost"
        placeholder="Ghost"
        helper="Ghost"
        isGhost
      />
      <Field
        {...args}
        component={TextInput}
        name="error"
        placeholder="Error"
        helper="Error"
        isError
      />
      <Field
        {...args}
        component={TextInput}
        name="error-focus"
        placeholder="Error focus"
        helper="Error focus"
        className="focus-within"
        isError
      />
    </div>
  ),
}
