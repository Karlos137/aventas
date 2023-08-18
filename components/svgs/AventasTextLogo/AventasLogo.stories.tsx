import { Meta, StoryObj } from '@storybook/react'

import AventasTextLogo from './AventasTextLogo'

const meta: Meta<typeof AventasTextLogo> = {
  title: 'Logos/AventasText',
  component: AventasTextLogo,
}

export default meta
type Story = StoryObj<typeof AventasTextLogo>

export const Default: Story = {}
