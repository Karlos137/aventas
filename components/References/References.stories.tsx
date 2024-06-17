import { Meta, StoryObj } from '@storybook/react'

import References from './References'

const meta: Meta<typeof References> = {
  title: 'Sections/References',
  component: References,
}

export default meta
type Story = StoryObj<typeof References>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
}
