import { Meta, StoryObj } from '@storybook/react'

import Contacts from './Contacts'

const meta: Meta<typeof Contacts> = {
  component: Contacts,
}

export default meta
type Story = StoryObj<typeof Contacts>

export const Default: Story = {}
