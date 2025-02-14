import type { Meta, StoryObj } from '@storybook/react'
import { Formik, Form, Field } from 'formik'
import { z } from 'zod'
import { toFormikValidationSchema } from 'zod-formik-adapter'
import { Radio as RadioComponent, RadioProps } from '@/components/ui/Radio'
import { Size } from '@/types/size'

const schema = z.object({
  message: z.boolean().default(false),
})

const meta: Meta<RadioProps> = {
  title: 'UI',
  component: RadioComponent,
  args: {
    label: 'Textarea',
    name: 'message',
  },
}

export default meta

type Story = StoryObj<RadioProps>

export const Radio: Story = {
  render: (args: RadioProps) => (
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
          <Field component={RadioComponent} name="radio" id="radio-1" label="Radio 1" />
          <Field component={RadioComponent} name="radio" id="radio-2" label="Radio 2" />
          <Field component={RadioComponent} name="radio" id="radio-3" label="Radio 3" />
        </Form>
      </Formik>
    </div>
  )
}
