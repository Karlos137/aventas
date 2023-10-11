import { Meta, StoryObj } from '@storybook/react'

import PersonCard from './PersonCard'

import { PEOPLE_CZ } from '../PersonCards.constants'

const meta: Meta<typeof PersonCard> = {
  component: PersonCard,
}

export default meta
type Story = StoryObj<typeof PersonCard>

export const Default: Story = {
  args: {
    name: PEOPLE_CZ[0].name,
    role: PEOPLE_CZ[0].role,
    email: PEOPLE_CZ[0].email,
    phone: PEOPLE_CZ[0].phone,
    image: PEOPLE_CZ[0].image,
    description: PEOPLE_CZ[0].description,
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
