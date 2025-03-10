import React from 'react'
import { DM_Sans } from 'next/font/google'
import { useGlobals } from '@storybook/preview-api'

import '../src/styles/index.scss'
import '../src/styles/_storybook.scss'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
})

const preview = {
  parameters: {
    layout: 'fullscreen',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Light',
      values: [
        {
          name: 'Light',
          value: '#FFF',
        },
      ],
    },
    viewport: {
      viewports: {
        display: {
          name: 'Desktop Large',
          styles: {
            width: '2032px',
            height: '1400px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '1024px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '744px',
            height: '744px',
          },
        },
        mobile: {
          name: 'Mobile',
          styles: {
            width: '400px',
            height: '744px',
          },
        },
      },
    },
    pseudo: {
      hover: '.hover',
      focus: '.focus',
      active: '.active',
      focusVisible: '.focus-visible',
      focusWithin: '.focus-within',
    },
    chromatic: {
      disableSnapshot: true,
    },
  },
  decorators: [
    (Story) => {
      const [globals] = useGlobals()
      return (
        <div
          className={`${dmSans.className} ${globals?.backgrounds?.value !== '#FFF' ? 'dark' : 'light'}`}
        >
          <Story />
        </div>
      )
    },
  ],
}

export default preview
