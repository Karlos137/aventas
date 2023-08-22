import { Meta, StoryObj } from '@storybook/react'

import PersonCards from './PersonCards'

const meta: Meta<typeof PersonCards> = {
  component: PersonCards,
}

export default meta
type Story = StoryObj<typeof PersonCards>

export const Default: Story = {
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
