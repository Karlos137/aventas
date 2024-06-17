import { Meta, StoryObj } from '@storybook/react'

import ReferenceObject from './ReferenceObjects'

const meta: Meta<typeof ReferenceObject> = {
  component: ReferenceObject,
}

export default meta
type Story = StoryObj<typeof ReferenceObject>

export const Default: Story = {}
