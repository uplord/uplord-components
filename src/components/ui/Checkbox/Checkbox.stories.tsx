import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Checkbox as CheckboxComponent, CheckboxProps } from '@/components/ui/Checkbox'
import { Size } from '@/types/size'

const schema = z.object({
  message: z.boolean().default(false),
})

const meta: Meta<CheckboxProps> = {
  title: 'UI',
  component: CheckboxComponent,
  args: {
    label: 'Textarea',
    name: 'message',
    size: Size.Large,
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

type Story = StoryObj<CheckboxProps>

export const Checkbox: Story = {
  render: (args: CheckboxProps) => (
    <div className="padding">
      <Formik
        initialValues={{
          message: '',
        }}
        validationSchema={toFormikValidationSchema(schema)}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <Field component={CheckboxComponent} {...args} />
        </Form>
      </Formik>
    </div>
  )
}
