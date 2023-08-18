import { Meta, StoryObj } from '@storybook/react'

import AventasLogo from './AventasLogo'

const meta: Meta<typeof AventasLogo> = {
  title: 'Logos/Aventas',
  component: AventasLogo,
}

export default meta
type Story = StoryObj<typeof AventasLogo>

export const Default: Story = {}
