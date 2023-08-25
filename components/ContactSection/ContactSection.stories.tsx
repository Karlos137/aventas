import { Meta, StoryObj } from '@storybook/react'

import ContactSection from './ContactSection'

const meta: Meta<typeof ContactSection> = {
  title: 'Sections/ContactSection',
  component: ContactSection,
}

export default meta
type Story = StoryObj<typeof ContactSection>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
}
