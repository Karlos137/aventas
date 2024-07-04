import { Meta, StoryObj } from '@storybook/react'

import ReferenceItems from './ReferenceItems'

const meta: Meta<typeof ReferenceItems> = {
  component: ReferenceItems,
}

export default meta
type Story = StoryObj<typeof ReferenceItems>

export const Default: Story = {}
