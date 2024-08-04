import { Meta, StoryObj } from '@storybook/react'

import SpecializationSection from './SpecializationSection'

const meta: Meta<typeof SpecializationSection> = {
  title: 'Sections/SpecializationSection',
  component: SpecializationSection,
}

export default meta
type Story = StoryObj<typeof SpecializationSection>

export const Default: Story = {
  args: {
    className: 'mt-12',
    heading: 'Specializace',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
