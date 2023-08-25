import { Meta, StoryObj } from '@storybook/react'

import CollaboratingSubjectsSection from './CollaboratingSubjectsSection'

const meta: Meta<typeof CollaboratingSubjectsSection> = {
  title: 'Sections/CollaboratingSubjectsSection',
  component: CollaboratingSubjectsSection,
}

export default meta
type Story = StoryObj<typeof CollaboratingSubjectsSection>

export const Default: Story = {
  parameters: {
    layout: 'fullscreen',
  },
}
