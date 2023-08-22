import { Meta, StoryObj } from '@storybook/react'

import SectionTitle from './SectionTitle'

const meta: Meta<typeof SectionTitle> = {
  component: SectionTitle,
}

export default meta
type Story = StoryObj<typeof SectionTitle>

export const AboutUs: Story = {
  args: {
    children: 'O nás',
  },
}

export const Specialization: Story = {
  args: {
    children: 'Specializace',
  },
}

export const OurTeam: Story = {
  args: {
    children: 'Náš tým',
    color: 'brown',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
}
