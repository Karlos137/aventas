import { Meta, StoryObj } from '@storybook/react'

import Header from './Header'

const meta: Meta<typeof Header> = {
  component: Header,
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {
    hero: {
      heading: 'Právní jistota při každém kroku',
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
}
