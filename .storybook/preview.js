import React from 'react'
import { DM_Sans } from 'next/font/google'
import { useGlobals } from '@storybook/preview-api'

import '../src/styles/index.scss'

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
      default: 'Dark',
      values: [
        {
          name: 'Light',
          value: '#FFF',
        },
        {
          name: 'Dark',
          value: '#0d0d0d',
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
    chromatic: {
      disableSnapshot: true,
    },
  },
  // tags: ['autodocs'],
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
