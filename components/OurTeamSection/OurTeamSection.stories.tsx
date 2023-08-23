import { Meta, StoryObj } from '@storybook/react'

import OurTeamSection from './OurTeamSection'

const meta: Meta<typeof OurTeamSection> = {
  title: 'Sections/OurTeamSection',
  component: OurTeamSection,
}

export default meta
type Story = StoryObj<typeof OurTeamSection>

export const Default: Story = {
  args: {
    className: '',
  },
  parameters: {
    layout: 'fullscreen',
  },
}
