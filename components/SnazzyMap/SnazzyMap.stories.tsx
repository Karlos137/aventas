import { Meta, StoryObj } from '@storybook/react'

import SnazzyMap from './SnazzyMap'

const meta: Meta<typeof SnazzyMap> = {
  component: SnazzyMap,
}

export default meta
type Story = StoryObj<typeof SnazzyMap>

export const Default: Story = {
  args: {},
}
