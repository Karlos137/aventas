import { Meta, StoryObj } from '@storybook/react'

import AboutUsSection from './AboutUsSection'

const meta: Meta<typeof AboutUsSection> = {
  title: 'Sections/AboutUsSection',
  component: AboutUsSection,
}

export default meta
type Story = StoryObj<typeof AboutUsSection>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
}
