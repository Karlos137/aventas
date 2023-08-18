import { Meta, StoryObj } from '@storybook/react'

import HamburgerMenuButton from './HamburgerMenuButton'

const meta: Meta<typeof HamburgerMenuButton> = {
  component: HamburgerMenuButton,
}

export default meta
type Story = StoryObj<typeof HamburgerMenuButton>

export const Open: Story = {
  args: {
    menuOpen: true,
    toggle: () => {},
  },
}

export const Close: Story = {
  args: {
    menuOpen: false,
    toggle: () => {},
  },
}
