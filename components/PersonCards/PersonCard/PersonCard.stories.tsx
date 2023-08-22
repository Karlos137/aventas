import { Meta, StoryObj } from '@storybook/react'

import PersonCard from './PersonCard'

const meta: Meta<typeof PersonCard> = {
  component: PersonCard,
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Default: Story = {}
