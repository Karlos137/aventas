import { Meta, StoryObj } from '@storybook/react'

import SpecializationItems from './SpecializationItems'

const meta: Meta<typeof SpecializationItems> = {
  component: SpecializationItems,
}

export default meta
type Story = StoryObj<typeof SpecializationItems>

export const Default: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
}
