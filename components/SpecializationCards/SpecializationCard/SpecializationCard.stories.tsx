import { Meta, StoryObj } from '@storybook/react'

import SpecializationCard from './SpecializationCard'

const meta: Meta<typeof SpecializationCard> = {
  component: SpecializationCard,
}

export default meta
type Story = StoryObj<typeof SpecializationCard>

export const Default: Story = {
  args: {
    title: 'M&A',
    subtitle: 'fúze a akvizice',
    onClick: () => console.log('CLICK'),
  },
}
