import { Meta, StoryObj } from '@storybook/react'

import PersonCard from './PersonCard'

import { PEOPLE } from '../PersonCards.constants'

const meta: Meta<typeof PersonCard> = {
  component: PersonCard,
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Default: Story = {
  args: {
    name: PEOPLE[0].name,
    role: PEOPLE[0].role,
    email: PEOPLE[0].email,
    phone: PEOPLE[0].phone,
    image: PEOPLE[0].image,
    description: PEOPLE[0].description,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
