import { Meta, StoryObj } from '@storybook/react'

import KrestonLogo from './KrestonLogo'

const meta: Meta<typeof KrestonLogo> = {
  title: 'Logos/Kreston',
  component: KrestonLogo,
}

export default meta
type Story = StoryObj<typeof KrestonLogo>

export const Default: Story = {}
