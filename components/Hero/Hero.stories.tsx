import { Meta, StoryObj } from '@storybook/react'

import Hero from './Hero'

const meta: Meta<typeof Hero> = {
  component: Hero,
}

export default meta
type Story = StoryObj<typeof Hero>

export const Default: Story = {
  args: {
    heading: 'Právní jistota při každém kroku',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
