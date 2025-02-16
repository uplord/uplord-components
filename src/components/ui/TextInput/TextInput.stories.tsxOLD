import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import * as icons from 'lucide-react'
import { TextInput as TextInputComponent, TextInputProps } from '@/components/ui/TextInput'
import { Size } from '@/types/size'

type AvailableIcons = keyof typeof icons

const schema = z.object({
  firstName: z.string().min(2, 'Must be at least 2 characters').max(50, 'Must be at most 50 characters').default(''),
})

const meta: Meta<TextInputProps> = {
  title: 'UI',
  component: TextInputComponent,
  args: {
    label: 'Input',
    type: 'text',
    name: 'firstName',
    placeholder: 'Placeholder',
    size: Size.Large,
    leadingIcon: null,
    trailingIcon: null
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
      <Formik
        initialValues={{
          firstName: '',
        }}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field component={TextInputComponent} {...args} />
        </Form>
      </Formik>
    </div>
  )
}
