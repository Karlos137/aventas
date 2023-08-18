import { Meta, StoryObj } from '@storybook/react'

import HamburgerMenu from './HamburgerMenu'

const meta: Meta<typeof HamburgerMenu> = {
  component: HamburgerMenu,
}

export default meta
type Story = StoryObj<typeof HamburgerMenu>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
}
